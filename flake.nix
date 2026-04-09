{
  description = "Personal website development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
      };
    in {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_22
          pnpm
          git
        ];

        shellHook = ''
          echo "Entered website dev shell"
          node -v
          pnpm -v
          git --version
        '';
      };
    };
}
