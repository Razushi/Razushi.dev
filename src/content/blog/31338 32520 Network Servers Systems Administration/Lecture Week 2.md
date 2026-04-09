## Man
man passwd  
man 5 passwd # searches for  passwd in section 5 of the man pages

1 = General commands (normal users)  
2 = System calls (programmers)  
3 = C library functions (programmers)  
4 = Special files (usually /dev devices)  
5 = File formats and conventions  
6 = Games  
7 = Miscellanea  
8 = System administration commands and daemons  
9 = Kernel Routines

`/etc/man_db.conf` OR `/etc/man.config`

`MANDATORY_MANPATH /usr/man  `
`MANDATORY_MANPATH /usr/share/man  `
`MANDATORY_MANPATH /usr/local/share/man`

## pkgs
`/usr/doc` OR `/usr/share/doc`

## USB
`udev` (config in `/etc/udev` OR `man udev`) and need to install the system-dev  
package

IDE = Integrated Drive Electronics (/dev/hda, /dev/hdb, /dev/hdc...)
ATA (SATA) (/dev/sda, /dev/sdb, ...,/dev/sdz)

SCSI = Small Computer System Interface ("scuzzy") CSI-1, SCSI-2, SCSI-3, Fast, Wide, Ultrawide 
Linux: `cat /proc/scsi/scsi` # To list scsi devices on Linux system 
– Disk devices: (/dev/sda, /dev/sdb, etc), based on SCSI ID 0, 1, ... 
Note: SCSI has been replaced by USB or SATA interfaces

## Kernel
`uname -a`
`lsmod` # prints out `/proc/modules`
`modinfo ‹modulename›`

### Loading
`insmod /lib/modules/<version>/kernel/fs/fat/fat.ko`
- requires exact module filename, saved in /lib/modules,  
- doesn't check dependencies

`modprobe fat ”a filesystem”` # to add and remove modules from Linux Kernel  
- requires module name (not filename); –r (remove) modules  
- also loads any modules needed as dependencies  
- preferred method -- be automatically loaded during reboot  
- can use -v -n options to preview what modprobe will do  
– -n: dry-run, This option does everything but actually insert or delete the modules

### Removing
`rmmod fat` (File Allocation Table)
– will not remove module if currently in use, unless forced  
– Keep the kernel as lightweight as possible

## Partitions
- `/home` User Directory
- `/boot` System boot, kernel, etc - for older BIOS's
- `/usr` programs and data files
- `/usr/local` programs/data unique to this installation
- `/opt` optional, usually under usr but this is for thirdparty stuff
- `/var` logs
- `/tmp` temp files
- `/mnt` local/temp mount points
- `/media` removable media

fdisk (MBR)
gdisk (GPT)
parted (GUI interface for gparted

mkfs (make filesystem cf.formatting disk
`mkfs -t ext4 /dev/sda3` OR `mkfs.ext4`

mkswap
- `mkswap /dev/sda4`
- `swapon /dev/sda4`

df
du
dust

iostat
lsblk

blkid (UUIDs and LABELS)
dumpe2fs -h
tune2fs
debugfs

## Mounting
- ` /etc/fstab` mounted during booting process

- `mount /media/cdrom`
- `umount /media/cdrom`

## Niceness
Creating new processes with defined priorities  
- `nice myprog` - no nice value, defaults value is 0  
- `nice +12 myprog` - runs with nice +12 (or nice –n 12 myprog)  
- `nice –n –12 myprog` - runs with nice –12

Change priority of running process  
- `renice -20 12345` - set PID 12345 to nice -20 (max)  
- `renice 19 –u chen anup` - nice 19 for chen & anup's processes