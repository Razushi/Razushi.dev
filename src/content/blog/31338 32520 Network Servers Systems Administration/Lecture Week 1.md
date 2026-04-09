GRUB2 configuration file: grub.cfg. Saved in /boot/grub  or /boot/grub2 for BIOS, and /boot/efi/EFI/distro-name for UEFI

## Boot loader
### GRUB2

[...]  
menuentry "CentOS Linux" {  
[...]  
	set root=(hd1,1)  
	linux16 /vmlinuz[...]  
	initrd /initramfs[...]  
}  
	menuentry "Windows" {  
	set root=(hd0,1)  
[...]


`/etc/grub.d`
-> grub-mkconfig or grub2-mkconfig

grub2-mkconfig > /boot/grub2/grub.cfg

### Windows
BOOTMGR looks for active partition \boot directory

  
https://learn.microsoft.com/en-us/windows-hardware/drivers/bringup/boot-and-uefi

---

## Systemd
systemctl (disable, enable, restart, start, status, stop, reload, is-active, is-enabled, is-failed) (firewalld, ntpd, dhcpd...)

Cat I: Service Unit Files .service
systemctl list-unit-files
systemctl cat xxx.service

Cat 2: Target Unit Files .target
`systemctl list-units #check running units`
`systemctl get-default #graphical.target`
`systemctl cat graphical.target`
systemctl (get-default, set-default, isolate)

• poweroff.target – shuts down and power offs the system  
• rescue.target – also for system recovery – requires root password  
• multi-user.target – multi-user mode with no graphical login  
• emergency.target – used for emergency system recovery  
• graphical.target – full graphical mode  
• reboot.target – shuts down and boots the system again

systemctl list-unit-files --type=target

### Sys V init
Sys V init processes instructions from /etc/inittab

### Runlevel  
`grep :initdefault: /etc/inittab` # Check default runlevel  
`runlevel` # Check current runlevel (shows previous and current)  
`telinit 4` # Change runlevel  
`init 4` # Change runlevel  
`telinit q` # Re-read /etc/inittab file, change runlevel and use runlevel directly to show current runlevel  

### Services  
`service SCRIPT COMMAND [OPTIONS]  `
(restart, start, status, stop, reload)
`service cups start` # Common UNIX Printing System to act as a print server  
`service httpd start` # to start a web service

## Log files
### Kernel ring buffer
- dmesg | less #dmesg: write kernel messages to standard output
– (after boot, may be in /var/log/dmesg or /var/log/boot.log)
– journalctl # viewing logs which are collected by system, use -k or –dmesg to retrieve kernel messages

Main system log file – /var/log/messages  
– Contents configured through syslog daemon – more later

• Other log files in /var/log

## Windows Startup
Native UEFI or BIOS > OS loader > Windows Core, Kernel, antimalware > third-party drivers > Login
https://docs.microsoft.com/en-us/learn/modules/troubleshoot-windows-startup/2-explore-windows-client-startup-architecture

