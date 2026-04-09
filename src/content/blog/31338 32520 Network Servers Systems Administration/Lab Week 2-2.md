# Week 2 – Man Pages, Packages, Kernel, Partitions, Processes

## Man Pages
- `man passwd` → section 1 (general commands).  
- `man 1 passwd` → section 1 (general commands).  
- `man 5 passwd` → section 5 (file formats).  
- Default: lowest numbered section found (usually 1).  
- Sections:  
  1 = User commands  
  2 = System calls  
  3 = Library functions  
  4 = Special files (/dev)  
  5 = File formats and conventions  
  6 = Games  
  7 = Misc  
  8 = Admin commands/daemons  
  9 = Kernel routines  
- Config: `/etc/man_db.conf` or `/etc/man.config`  
  - Paths:  
    - `MANDATORY_MANPATH /usr/man`  
    - `MANDATORY_MANPATH /usr/share/man`  
    - `MANDATORY_MANPATH /usr/local/share/man`  
- `man grep` → concise reference.  
- `info grep` → GNU hypertext manual, longer, with navigation.  
- `whatis passwd` → exact one-line description.  
- `apropos passwd` → search descriptions for keyword.  

## Packages & Docs
- `/usr/share/doc` or `/usr/doc` → package documentation.  
- CentOS (yum):  
  - `yum check-update` → check for updates.  
  - `yum search <keyword>` → search packages.  
  - `yum install <pkg>` → install package.  
  - `yum update <pkg>` → update package.  
  - `yum remove <pkg>` → remove package.  
- Windows (PowerShell):  
  - `Install-Module PSWindowsUpdate` → add module.  
  - `Get-WindowsUpdate` → check for updates.  
  - `Get-WULastResults` → last check results.  
  - `Get-WUHistory` → history of updates.  
  - `Get-WURebootStatus` → check if reboot needed.  

## USB & Devices
- `udev` (rules in `/etc/udev`).  
- IDE = `/dev/hd[a-z]`.  
- SATA/ATA = `/dev/sd[a-z]`.  
- SCSI = `/dev/sd[a-z]`, check with `cat /proc/scsi/scsi`.  
- Note: SCSI mostly replaced by USB/SATA.  

## Kernel & Modules
- `uname -a` → kernel + system info.  
- `lsmod` → list loaded modules (`/proc/modules`).  
- `modinfo <module>` → details about a module.  
- Insert:  
  - `insmod /lib/modules/<ver>/kernel/fs/fat/fat.ko` → insert module by filename (no deps).  
  - `modprobe fat` → insert module by name (loads deps automatically).  
- Remove:  
  - `rmmod fat` → remove module (fails if in use unless forced).  
  - `modprobe -r fat` → remove + handle deps.  
- Keep kernel lightweight by unloading unused modules.  

## Partitions & Filesystems
- Layouts:  
  - `/home` → user dirs.  
  - `/boot` → kernel + boot.  
  - `/usr` → programs, data.  
  - `/usr/local` → site-specific.  
  - `/opt` → optional/3rd party.  
  - `/var` → logs.  
  - `/tmp` → temp files.  
  - `/mnt` → temp mount points.  
  - `/media` → removable media.  
- Tools:  
  - `fdisk` → MBR partitioning.  
  - `gdisk` → GPT partitioning.  
  - `parted` → interactive partition editor.  
  - `mkfs -t ext4 /dev/sda3` or `mkfs.ext4 /dev/sda3` → create filesystem.  
  - `mkswap /dev/sda4` → create swap partition.  
  - `swapon /dev/sda4` → enable swap.  
  - `swapoff -a` / `swapon -a` → disable/enable all swap.  
  - `df` → disk usage/free space by filesystem.  
  - `du` → disk usage by directory.  
  - `dust` → rust-based du alternative.  
  - `iostat` → CPU + device I/O stats.  
  - `lsblk` → block device tree.  
  - `blkid` → UUIDs + labels.  
  - `dumpe2fs -h /dev/sdX` → ext fs details.  
  - `tune2fs` → change ext fs parameters.  
  - `debugfs` → interactive ext fs debug.  
- Mounting:  
  - Configured in `/etc/fstab` for boot mounts.  
  - `mount /media/cdrom` → mount.  
  - `umount /media/cdrom` → unmount.  
  - `mount | grep '^/dev/'` → show mounted devices.  
  - `parted /dev/sda print` → show partitions.  
  - `lvs` → show logical volumes.  

## Process Priority (Niceness)
- `nice <cmd>` → run with default nice (0).  
- `nice -n 12 myprog` → run with nice 12 (lower priority).  
- `nice -n -12 myprog` → run with nice -12 (higher priority).  
- `renice -20 <pid>` → change running process to highest priority.  
- `renice 19 -u user` → set all processes of user to lowest priority.  

## Processes
- Linux:  
  - `ps` → snapshot of processes.  
  - `ps -ef` → full-format listing.  
  - `ps --forest` → tree view.  
  - `jobs` → show background jobs.  
  - `bg %1` → resume job 1 in background.  
  - `fg %1` → resume job 1 in foreground.  
- CentOS priority test:  
  - `dd if=/dev/zero of=/dev/null` → CPU stress.  
  - `nice -n 15 dd if=/dev/zero of=/dev/null`.  
  - `renice -20 <pid>` → adjust.  
  - `renice 19 <pid>` → adjust.  
- Windows:  
  - `Get-Process` (PowerShell) / `tasklist` (cmd) → list processes.  
  - `Stop-Process -Id <pid>` (PowerShell) → kill process.  
  - `taskkill /PID <pid>` (cmd) → kill process.  
