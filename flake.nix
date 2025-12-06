{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    # https://github.com/nix-systems/nix-systems
    systems.url = "github:nix-systems/default-linux";
  };

  outputs =
    {
      self,
      nixpkgs,
      ...
    } @ inputs:
    let
      inherit (nixpkgs) legacyPackages lib;

      systems = import inputs.systems;
      forEachSystem = lib.genAttrs systems;
      pkgsForEach = legacyPackages;

      inherit (builtins) concatStringsSep match;

      buildDateFromSelf =
        concatStringsSep "-"
          (match "(.{4})(.{2})(.{2}).*" self.lastModifiedDate);
    in
    {
      # `nix fmt`
      formatter = forEachSystem (system: pkgsForEach.${system}.alejandra);

      devShells = forEachSystem (
        system:
        let
          pkgs = pkgsForEach.${system};
        in
        {
          # `nix develop` defaults to this
          default = self.devShells.${system}.site;

          # Inline of former nix/shell.nix
          site = pkgs.mkShell {
            name = "blog-dev";

            packages = with pkgs; [
              # Shell
              fish

              # Website
              nodejs-slim
              pnpm

              # WASM
              cargo
              rustc
              wasm-pack
              lld

              rustfmt
              taplo

              # To run 'typos' on content every once in a while
              typos

              # Analytics
              google-lighthouse
            ];

            env = {
              BUILD_DATE = buildDateFromSelf;
            };

            # Drop into fish automatically for interactive shells.
            shellHook = ''
              export SHELL=${pkgs.fish}/bin/fish
              if [ -t 0 ]; then
                exec "$SHELL"
              fi
            '';
          };
        }
      );

      packages = forEachSystem (
        system:
        let
          pkgs = pkgsForEach.${system};
          inherit (pkgs) lib stdenv rustPlatform;

          fs = lib.fileset;

          # Inline of former nix/wasm-bindgen-cli.nix
          wasmBindgenCli = pkgs.callPackage
            (
              {
                lib,
                rustPlatform,
                fetchCrate,
                nix-update-script,
                nodejs_latest,
                pkg-config,
                openssl,
                stdenv,
                curl,
                darwin,
              }:
              let
                pname = "wasm-bindgen-cli";
                version = "0.2.104";

                src = fetchCrate {
                  inherit pname version;
                  hash = "sha256-9kW+a7IreBcZ3dlUdsXjTKnclVW1C1TocYfY8gUgewE=";
                };
              in
              rustPlatform.buildRustPackage {
                inherit pname version src;

                cargoDeps = rustPlatform.fetchCargoVendor {
                  inherit src;
                  inherit (src) pname version;
                  hash = "sha256-V0AV5jkve37a5B/UvJ9B3kwOW72vWblST8Zxs8oDctE=";
                };

                nativeBuildInputs = [ pkg-config ];

                buildInputs =
                  [ openssl ]
                  ++ lib.optionals stdenv.hostPlatform.isDarwin [
                    curl
                    darwin.apple_sdk.frameworks.Security
                  ];

                nativeCheckInputs = [ nodejs_latest ];

                # Tests require running in the wasm-bindgen monorepo
                doCheck = false;

                passthru.updateScript = nix-update-script { };

                meta = {
                  homepage = "https://rustwasm.github.io/docs/wasm-bindgen/";
                  license = with lib.licenses; [
                    asl20
                    mit
                  ];
                  description =
                    "Facilitating high-level interactions between wasm modules and JavaScript";
                  maintainers = with lib.maintainers; [ rizary ];
                  mainProgram = "wasm-bindgen";
                };
              }
            )
            { };

          # Inline of wasm-utils derivation from nix/site.nix
          wasmUtils =
            let
              cargoToml =
                builtins.fromTOML
                  (builtins.readFile ./packages/wasm-utils/Cargo.toml);

              pname = cargoToml.package.name;
              version = cargoToml.package.version;
              sp = ./packages/wasm-utils;
            in
            rustPlatform.buildRustPackage {
              inherit pname version;

              src = fs.toSource {
                root = sp;
                fileset = fs.intersection
                  (fs.fromSource (lib.sources.cleanSource sp))
                  (fs.unions [
                    (sp + /src)
                    (sp + /Cargo.toml)
                    (sp + /Cargo.lock)
                  ]);
              };

              nativeBuildInputs = [
                pkgs.wasm-pack
                pkgs.lld
                pkgs.binaryen

                # Keep wasm-bindgen-cli in the build inputs so wasm-pack
                # does not try to fetch it imperatively.
                wasmBindgenCli
              ];

              copyLibs = true;
              doCheck = true;
              checkInputs = [
                pkgs.cargo
                pkgs.rustc
              ];

              cargoLock.lockFile = ./packages/wasm-utils/Cargo.lock;

              env.WASM_PACK_CACHE = ".wasm-pack-cache";

              postBuild = ''
                mkdir -p "$out/lib"
                wasm-pack build --release --target web \
                  --out-dir "$out" --out-name wasm-utils
              '';
            };

          # Inline of nix/site.nix main site derivation
          site =
            stdenv.mkDerivation (
              finalAttrs:
              let
                buildDate = buildDateFromSelf;
                srcRoot = ./.;
              in
              {
                pname = "notashelf-dev";
                version =
                  if self ? rev then
                    builtins.substring 0 7 self.rev
                  else
                    buildDate;

                src = fs.toSource {
                  root = srcRoot;

                  # Filter everything outside of what's specified here.
                  fileset = fs.intersection
                    (fs.fromSource (lib.sources.cleanSource srcRoot))
                    (fs.unions [
                      ./apps
                      ./packages
                      ./scripts
                      ./package.json
                      ./tsconfig.json
                      ./pnpm-lock.yaml
                      ./pnpm-workspace.yaml
                    ]);
                };

                pnpmDeps = pkgs.pnpm.fetchDeps {
                  inherit (finalAttrs) pname src;
                  # https://nixos.org/manual/nixpkgs/stable/#javascript-pnpm-fetcherVersion
                  hash = "sha256-Ewfc6uhfng2Yv7yGqkN51ZydWJfCEKiDlRLic/rRWyg=";
                  fetcherVersion = 2;
                };

                pnpmInstallFlags = [ "--prod" ];

                postPatch = ''
                  mkdir -p packages/wasm-utils
                  ln -sf ${wasmUtils.outPath} packages/wasm-utils/pkg
                '';

                nativeCheckInputs = [
                  pkgs.nodejs
                  pkgs.pnpm
                ];

                checkPhase = ''
                  runHook preCheck
                  pnpm run test:ci
                  runHook postCheck
                '';

                nativeBuildInputs = [
                  pkgs.nodejs
                  pkgs.pnpm.configHook
                ];

                buildPhase = ''
                  runHook preBuild
                  pnpm run build:web --outDir "$out"
                  runHook postBuild
                '';

                env = {
                  ASTRO_TELEMETRY_DISABLED = true;
                  GIT_REV = finalAttrs.version;
                  SITE_SRC = "https://github.com/notashelf/notashelf.dev";
                  BUILD_DATE = buildDate;
                };

                meta = {
                  description =
                    "My personal website and blog built with Nix and Astro";
                  homepage = "https://github.com/notashelf/notashelf.dev";
                  license = lib.licenses.mpl20;
                  maintainers = [ lib.maintainers.NotAShelf ];
                };
              }
            );

          # Inline of nix/ci.nix
          ci =
            pkgs.writeShellApplication {
              name = "ci";

              runtimeInputs = [
                pkgs.nodejs
                pkgs.pnpm
                pkgs.eslint
                pkgs.rustc
                pkgs.cargo
                pkgs.wasm-pack
                wasmBindgenCli
                pkgs.binaryen
                pkgs.lld
              ];

              text = ''
                set -euo pipefail

                error_exit() {
                  echo "ERROR: $1" >&2
                  exit 1
                }

                echo "Node version: $(node --version)"
                echo "PNPM version: $(pnpm --version)"
                echo "Rust version: $(rustc --version)"
                echo "Cargo version: $(cargo --version)"
                echo "Working directory: $(pwd)"

                echo "Installing dependencies..."
                pnpm install \
                  --frozen-lockfile \
                  --strict-peer-dependencies \
                  --recursive \
                  --prefer-offline \
                  || error_exit "Failed to install dependencies."

                echo "Running format checks..."
                pnpm run fmt --check \
                  || error_exit "Code formatting check failed."

                echo "Building WASM utilities..."
                pnpm run build:wasm-utils \
                  || error_exit "WASM build failed."

                echo "Running lints..."
                pnpm run lint \
                  || error_exit "Linting failed."

                echo "Running type checks..."
                pnpm run check \
                  || error_exit "Type checking failed."

                echo "Running tests..."
                pnpm run test:ci \
                  || error_exit "Tests failed."

                echo "CI pipeline completed successfully"
              '';
            };
        in
        {
          default = site;
          inherit site ci;
        }
      );

      # Ensure packages and devShells are valid
      checks = self.packages // self.devShells;
    };
}
