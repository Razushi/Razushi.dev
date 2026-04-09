`packages` isn't supposed to contain derivations in nested attribute sets. and the only way to select your cross compilation target with flakes is with nested attribute sets (see nixpkgs pkgsCross) and this is why nixpkgs has to use legacyPackages.

avoid recursive symlinking