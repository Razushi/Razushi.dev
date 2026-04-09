# Anamnesis
Archival purposes for future setups 

## Hosts:
- Pyre (Windows, SSD) / Windows.

# Windows Install:

Things to know: 

Clean Window 11 .iso file POST-2025-1-1 (Windows aged out all previous iso dates from validity)
Rufus (For Windows to Go)

Main requirements: Disable the accessing other disks/files, but, DO NOT MAKE A LOCAL ACCOUNT, DO NOT REMOVE ONLINE REQUIREMENT.

Specifically: When creating, you *always* want to trigger and count it as a clean pc else you get host-sync conflicts between what Microsoft believes are previous versions of your machine hosts which basically revolve around a 'stock default given' name for the user (your first name, literally, cant change it) and then you automatically get syncing for onedrive and others. (removable with bulk crap uninstaller) 

### Firefox configuration: 
Copy the files from existing Appdata\Local\Roaming\`Mozilla` and paste it in the same folder on the newer version.

### Syncing Obsidian/Siyuan and KeePassXC, (??)
Done with Git, set up SSH first then pull and push the repos whenever

### Rename C:\Users\$Name
- Ctrl + I: To open up settings.
- Settings > Accounts > Family & other users.
- "Add someone else to this PC."
- temp, temp, temp, temp, temp

- Change account type to: Administrator.

- Log out, and log into `$TEMP` account.
- File Explorer, rename `$NAME` till intended.
- Regedit: HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList
- Locate a really really long SID key inside:
-   Name: ProfileImagePath 
-   Data: C:\User\ `$NAME`

# Neovim
Download from: https://github.com/neovim/neovim/releases/latest/download/nvim-win64.msi
Chuck the whole `\nvim` config in %APPDATA%\Local 

### MSVC:
To avoid compiler errors: LLVM-19.1.7-win64.exe from https://github.com/llvm/llvm-project. Correct version is `LLVM-19.1.7-win64.exe` . 

Additionally: 
> [!NOTE]
> Additionally, MAKE SURE TO ADD TO ENVIRONMENT PATH FILES IN INSTALLATION WIZARD, or, Alternatively, `System Properties > Advanced > Environment Variables` and add `C:\Program Files\LLVM\bin`. Although, this section im not too sure about, if u see this lmk if this is even a option or popup becuase it genuinely might have just been me tweaking becuase thats what the script down below does too)

Script: Adds msvc to environment variables too
```
$vswhere = "C:\Program Files (x86)\Microsoft Visual Studio\Installer\vswhere.exe"
$vcvars = & $vswhere -latest -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath
$vcvars = "$vcvars\VC\Auxiliary\Build\vcvars64.bat"
cmd /c "call `"$vcvars`" && set" | foreach {
    if ($_ -match "^(.*?)=(.*)$") { [System.Environment]::SetEnvironmentVariable($matches[1], $matches[2], "User") }
}
```

If running `cl` returns *something* then it works, and if it doesnt then... idk. 

### Treesitter:
You'll see notices about treesitter issues: Go to: https://visualstudio.microsoft.com/visual-cpp-build-tools/ (this is easiest way to get the necessary headers (stdlib.h, etc.), we dont actually care about it lol. MSVC = (Microsoft C++ Build Tools).) 
Things to grab:

    Build Tools
    CMake tools for Windows
    Windows SDK (highest Version)
    
(Image is a collage, not the actual expected ui)

The end result? Installs markdown-oxide and harper, our lsp's. Note: potentially might get ugly as fuck with harper continously critiquing markdown files but go dig around somewhere (insert directory here) and just remove markdown from the list. 

### Tools:
- [Python](https://www.python.org/downloads/) Go install python from here, not from microsoft store, just make sure you add to environment path when installing 
- `winget install BurntSushi.ripgrep.MSVC`
- `winget install sharkdp.fd`
- `winget install OpenJS.NodeJS`

go restart terminal and see if all of these return something:
- `cl`
- `python --version`
- `rg --version`
- `fd --version`
- `node --version`

lastly, run:
- `python -m ensurepip --default-pip`
- `pip install --user neovim`
(this doesn't actually instal a new version of neovim like i originally thought it did, just installs pynim  ...which is the py api for neovim)

> [!IMPORTANT]
> Here's a cut down snippet from the configuration.nix, there's prolly some stuff missing but everything directly related to nvim should have been 'caught'.
> This is from Razushi\Incandescent so it is Linux, but the configs and plugins should be distro-agnostic. 
> There might be some more configs or stuff missing, just enter `nvim` in any shell and run `:checkhealth` and see if theres anything missing.
```nix
environment.systemPackages = with pkgs; [
    git 

    clang # C compiler
    gcc # GNU Compiler Collection
    python3 # For scripts
    glib
    gnumake

    unzip # Used by some neovim stuff

    # Misc software
    lua-language-server # Lua LSP
    markdown-oxide # A nice Markdown LSP
    nil # Nix lsp, RIP rnix dev
    alejandra # Nix formatter
    harper # English grammar LSP
    basedpyright # Python typechecker LSP
    temurin-bin-17 # 2024 and we still can't include these things in-app
    
    bat # cat but better
    btop # Neat system monitor
    du-dust # Dust, a rust written du replacement
    duf # Disk usage utility, a better 'df'
    eza # Rust based ls alternative

    fd # Rust alternative to the find command
    fzf # Great cl fuzzy finder in GO

    glow # Command line Markdown viewer

    imagemagick
    jq # Parse json in the cli
    yq # Same as jq, but for yaml. 
    neovim # The new classic.
    ripgrep # Rust based recursive line search tool
    smartmontools # Disk health monitoring stuff

    tldr # Community made, minimal man pages
    wget

    zoxide # Rust alt to cd but smarter, integrates with yazi

    # File management
    detox # Sanitizes filenames of special chars
    fdupes # Find dupe files
    p7zip-rar # This should just be a dependency smh

    pandoc # Ultimate Document converter

    Obsidian # Nice PKM
    Siyuan # Better PKM
    Typst # For sharing docs.
    # vimPlugins.neorg 

  ];
```

Best results for understanding the neovim config will come from configuring your own config but like, he just like me frfr and im just like him frfr and you're just like me frfr and im just like you frfr. :) 

# Windows Powertoys:
Grabbed from: https://github.com/microsoft/PowerToys

### Always On Top:

### Awake:
Keep's computer awake, nuff said.

### Fancy Zones
Zone Behaviour: 
- Enable: `Hold Shift Key to activate zones while dragging a window`
- Enable: `Use a non-primary mouse button to toggle zone activation`

Windows Behaviour:
- Enable: `Keep windows in their zones when the screen resolution or work area changes`
- Enable: `Restore the original size of windows when unsnapping`

Settings (The actual settings) [Meta + I] -> System -> Multitasking:
- Enable: `When I snap a window, suggest what i can snap next to it`
- Enable: `Show snap layouts when I hover over a window's maximise button`

---

# Fonts
Grab the TrueType font File's in this repo's /.config/fonts - or wherever you have them - and yeet them into Settings > Personalisation > Fonts:
