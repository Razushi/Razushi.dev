# Week 1 – Bootloaders, Init Systems, Logs

  

## GRUB2 Bootloader

- Config file: `/boot/grub2/grub.cfg` (BIOS) or `/boot/efi/EFI/<distro>/grub.cfg` (UEFI).  

- `/etc/grub.d/` → scripts used by `grub2-mkconfig`.  

- `grub2-mkconfig -o /boot/grub2/grub.cfg` → generate new grub config.  

- Example menuentry:  

  menuentry "CentOS Linux" {

    set root=(hd1,1)

    linux16 /vmlinuz [...]

    initrd /initramfs [...]

  }

  menuentry "Windows" {

    set root=(hd0,1)

    [...]

  }

  

### Windows Boot

- BOOTMGR looks for active partition `\boot` directory.  

- Boot sequence: UEFI/BIOS → Bootmgr → Winload → Kernel.  

- Docs: https://learn.microsoft.com/en-us/windows-hardware/drivers/bringup/boot-and-uefi  

  

## Systemd

- `systemctl [disable|enable|restart|start|status|stop|reload|is-active|is-enabled|is-failed] <unit>`  

- **Service unit files** (`.service`):  

  - `systemctl list-unit-files` → list all services.  

  - `systemctl cat firewalld.service` → view unit.  

- **Target unit files** (`.target`):  

  - `systemctl list-units --type=target` → show active targets.  

  - `systemctl get-default` / `systemctl set-default <target>` → manage default target.  

  - `systemctl isolate rescue.target` → switch to target.  

- Common targets:  

  - `poweroff.target` → shutdown + power off.  

  - `reboot.target` → reboot.  

  - `rescue.target` → recovery shell (needs root pw).  

  - `multi-user.target` → non-graphical multi-user.  

  - `graphical.target` → full GUI.  

  - `emergency.target` → single-user emergency shell.  

  

## SysV Init (legacy)

- Config: `/etc/inittab`.  

- `grep :initdefault: /etc/inittab` → default runlevel.  

- `runlevel` → show previous + current runlevels.  

- `telinit 4` or `init 4` → change runlevel.  

- `telinit q` → reload inittab.  

  

### Services (SysV style)

- `service <script> [start|stop|restart|status|reload]`  

- Example:  

  - `service cups start` → start printing service.  

  - `service httpd start` → start Apache.  

  

## Logs

- `dmesg | less` → kernel ring buffer messages.  

- `journalctl -k` or `journalctl --dmesg` → kernel logs via systemd-journald.  

- `/var/log/messages` → main system log (via syslog).  

- `/var/log/secure` → security/auth logs.  

- Other logs: `/var/log/*` (daemon specific).  

  

## Windows Startup

- Native UEFI/BIOS → OS loader → Windows core/kernel → antimalware → drivers → login.  

- Docs: https://docs.microsoft.com/en-us/learn/modules/troubleshoot-windows-startup/2-explore-windows-client-startup-architecture  

  

## Lab (CentOS)

- Bootloader: `/etc/grub2.cfg`.  

- `systemctl <command>` → manage services.  

- Logs:  

  - `journalctl --dmesg` → kernel log.  

  - `/var/log/messages` → system log.  

  - `/var/log/secure` → security log.  

  

## Lab (Windows)

- `net start` → list/start services.  

- `net stop "Simple TCP/IP Service"` → stop service.  

- `netsh advfirewall firewall add rule name="TCP Port 17" dir=in action=allow protocol=TCP localport=17` → allow TCP port 17 (QOTD).  

  

## # Week 2 – Man Pages, Kernel Modules, Partitions, Processes

  

## General Description

This week focuses on **manual pages, package tools, kernel modules, partitions, and process management**.  

- **Man pages** are the primary documentation tool for Linux/Unix systems, split into numbered sections (1–9).  

- **Kernel modules** can be dynamically inserted/removed to extend functionality without rebooting; tools like `lsmod`, `modprobe`, and `rmmod` manage them.  

- **Partitions & filesystems** organize disks into usable storage, with `fdisk`, `gdisk`, `mkfs`, and `/etc/fstab` central to setup. Swap provides extra memory space.  

- **Process management** includes priorities (`nice`, `renice`) and job control (`jobs`, `fg`, `bg`), allowing finer scheduling.  

- Package management with `yum` lets you install/update/remove software.  

- Arch/Gentoo/NixOS tidbits:  

  - Arch/Gentoo heavily use `man`, `info`, and wiki pages for package/docs (`/usr/share/doc`).  

  - Nix uses immutable store paths (`/nix/store`) but still has `man`/`info` integration.  

  - `systemd` integrates with processes/resources (via cgroups), so `nice` and `renice` often work alongside systemd slice/unit tuning.

  

## Man Pages

- `man <cmd>` → show command manual (defaults to section 1 if multiple exist).  

- `man 1 passwd` → section 1 (user command).  

- `man 5 passwd` → section 5 (file format of `/etc/passwd`).  

- Sections:  

  1 = User commands  

  2 = System calls  

  3 = Library functions  

  4 = Special files (/dev)  

  5 = File formats  

  6 = Games  

  7 = Miscellaneous  

  8 = System admin commands  

  9 = Kernel routines  

- Config: `/etc/man_db.conf` or `/etc/man.config`.  

  - Default search paths: `/usr/man`, `/usr/share/man`, `/usr/local/share/man`.  

- `man grep` → concise.  

- `info grep` → detailed GNU docs, cross-references.  

- `whatis passwd` → one-line summary.  

- `apropos passwd` → search all man page descriptions for keyword.  

  

## Packages & Docs

- Docs: `/usr/share/doc/<pkg>` or `/usr/doc`.  

- CentOS (YUM):  

  - `yum check-update` → check available updates.  

  - `yum search <keyword>` → search packages.  

  - `yum install <pkg>` / `yum update <pkg>` / `yum remove <pkg>`.  

- Arch: uses `pacman -Ss <pkg>`, docs in `/usr/share/doc`.  

- Gentoo: `emerge --search <pkg>`, docs often in `/usr/share/doc/<pkg>-<ver>`.  

- NixOS: packages immutable in `/nix/store`; docs via `man` or `nix search`.

  

## Devices (IDE, SATA, SCSI, USB)

- IDE → `/dev/hd[a-z]`.  

- SATA/ATA → `/dev/sd[a-z]`.  

- SCSI → also `/dev/sd[a-z]`, list via `cat /proc/scsi/scsi`.  

- USB handled via `udev` rules (`/etc/udev/rules.d`).  

- Note: Modern Linux mostly abstracts via `/dev/sd*` regardless of backend.  

  

## Kernel & Modules

- `uname -a` → kernel + system info.  

- `lsmod` → list loaded modules.  

- `modinfo <module>` → show module info.  

- Load:  

  - `insmod <path>.ko` → insert by filename (no dependency resolution).  

  - `modprobe <mod>` → insert by module name (handles deps).  

- Remove:  

  - `rmmod <mod>` → remove (fails if in use).  

  - `modprobe -r <mod>` → safer remove (handles deps).  

- Arch/Gentoo: modules often managed via `mkinitcpio` (Arch) or `/etc/modules-load.d/` (Gentoo/OpenRC).  

- NixOS: modules listed in `boot.kernelModules` in configuration.  

  

## Partitions & Filesystems

- Common dirs:  

  - `/home` user data  

  - `/boot` kernel/bootloader  

  - `/usr` programs + data  

  - `/usr/local` site-specific programs  

  - `/opt` 3rd party  

  - `/var` logs/spools  

  - `/tmp` temp  

  - `/mnt` temp mounts  

  - `/media` removable media  

- Partition tools:  

  - `fdisk` (MBR), `gdisk` (GPT), `parted` (GUI-friendly).  

- Create fs:  

  - `mkfs.ext4 /dev/sda3`.  

- Swap:  

  - `mkswap /dev/sda4`, `swapon /dev/sda4`.  

  - `swapoff -a` / `swapon -a`.  

- Tools:  

  - `df` → disk usage by fs.  

  - `du` / `dust` → dir usage.  

  - `lsblk` → block device tree.  

  - `blkid` → UUIDs + labels.  

  - `iostat` → I/O + CPU stats.  

  - `dumpe2fs -h /dev/sdX`, `tune2fs`, `debugfs`.  

- `/etc/fstab` → auto mounts at boot.  

- Arch: strongly recommends UUIDs/labels in `/etc/fstab`.  

- Gentoo: can also use LABEL/UUID; initramfs required for root-on-LVM setups.  

- NixOS: `/etc/fstab` is generated but replaced by `fileSystems` in `configuration.nix`.

  

## Process Priorities

- `nice <cmd>` → default nice = 0.  

- `nice -n 12 <cmd>` → lower priority.  

- `nice -n -12 <cmd>` → higher priority.  

- `renice -20 <pid>` → highest priority for running process.  

- `renice 19 -u user` → lowest priority for all of user’s processes.  

- Note: `nice` ranges from -20 (highest) to +19 (lowest).  

  

## Processes & Jobs

- `ps`, `ps -ef`, `ps --forest` → list processes.  

- `jobs` → list background jobs.  

- `bg %1` / `fg %1` → resume jobs.  

- CentOS lab test:  

  - `dd if=/dev/zero of=/dev/null` (stress).  

  - Run with `nice -n 15` or adjust via `renice`.  

- Windows equivalents:  

  - PowerShell: `Get-Process`, `Stop-Process -Id <pid>`.  

  - CMD: `tasklist`, `taskkill /PID <pid>`.  

  

## # Week 3 – Networking, Hostnames, Firewalls, Time

  

## General Description

This week covers **basic networking tools, NetworkManager, hostname configuration, firewall management, and time synchronization**.  

- **Networking commands** (`ifconfig`, `ip`) configure interfaces, routes, and MACs. Modern Linux prefers `iproute2` (`ip`) over `ifconfig`.  

- **NetworkManager** provides higher-level control through `nmcli` and `nmtui`, with configs written to `/etc/sysconfig/network-scripts/`.  

- **Hostnames** can be static, pretty, or transient; tools like `hostnamectl` and `nmcli` manage them.  

- **Firewalls** are handled by `firewalld` (frontend) and `iptables` (backend). Zones and services help organize rules.  

- **Time synchronization** uses NTP or the faster Chrony daemon, configured via `/etc/chrony.conf`.  

- Arch/Gentoo/NixOS tidbits:  

  - Arch: strongly recommends `ip` and `systemd-networkd` over legacy `ifconfig/route`.  

  - Gentoo: OpenRC often uses `/etc/conf.d/net` instead of NetworkManager, but `nmcli`/`nmtui` are supported.  

  - NixOS: networking configured declaratively in `networking.*` options; Chrony is the default time sync service.

  

## Network Basics (CentOS)

- MAC format: `xx:xx:xx:xx:xx:xx` (first half vendor, second half device).  

- `ifconfig ens37` → show IP, mask, MAC.  

- `ifconfig ens33 192.168.168.64 netmask 255.255.255.0` → set IP.  

- `ifconfig ens33 hw ether <mac>` → set MAC.  

- `route -n` → show routes.  

- `route add/del default gw <ip>`.  

- `route add -net 192.168.1.0 netmask 255.255.255.0 dev ens37`.  

  

### iproute2 (preferred)

- `ip a` / `ip addr show dev ens33`.  

- `ip addr add 192.168.0.10/24 dev ens33`.  

- `ip link show` / `ip link set ens33 up|down`.  

- `ip route` → show routes.  

- `ip route add 192.168.0.0/24 dev ens33 metric 100`.  

- `ip route del 192.168.0.0/24 dev ens33`.  

- Arch: `ip` is always installed by default.  

- Gentoo: `net-tools` (`ifconfig`) is optional, but `iproute2` is required.  

- NixOS: all networking configured via `ip` or `networking.*` in config.  

  

## NetworkManager

- Install: `yum install network-scripts`.  

- `systemctl start|restart|enable NetworkManager`.  

- Config files:  

  - Pre-CentOS8: `/etc/sysconfig/network`.  

  - Post-CentOS8: `/etc/sysconfig/network-scripts/ifcfg-*`.  

- Tools:  

  - `nmcli c add type ethernet ifname ens37 ipv4.addresses '192.168.1.100/24' ipv4.gateway 192.168.1.1 ipv4.method manual`.  

  - `nmcli c add type ethernet ifname ens33 ipv4.method auto`.  

  - `nmcli c modify ens37 ipv4.addr '192.168.1.200'`.  

  - `nmcli c up ens37` / `nmcli c down ens37`.  

  - `nmcli c delete ens37`.  

  - `nmcli c show` / `nmcli c show ens33 | grep address`.  

  - `nmtui` → curses-based editor.  

  - `nm-connection-editor` → GUI.  

- Arch: prefers `systemd-networkd` or `netctl`, but NetworkManager is supported.  

- Gentoo: OpenRC uses `/etc/conf.d/net` if not using NM.  

- NixOS: `networking.networkmanager.enable = true;`.  

  

## Hostnames

- Types:  

  - **static** → `/etc/hostname`.  

  - **pretty** → UTF-8 freeform, user-facing.  

  - **transient** → kernel/DHCP runtime.  

- Tools:  

  - `hostnamectl status`.  

  - `hostnamectl set-hostname myhost.domain`.  

  - `nmcli general hostname myhost.domain`.  

- Transient changes lost on reboot; static persists.  

- Arch: `hostnamectl` is standard with systemd.  

- Gentoo: `/etc/conf.d/hostname` for OpenRC systems.  

- NixOS: `networking.hostName = "myhost";`.  

  

### Sample Config (ifcfg-ens37)

BOOTPROTO=none  

NAME=ens37  

DEVICE=ens37  

ONBOOT=yes  

IPADDR=192.168.1.10  

NETMASK=255.255.255.0  

GATEWAY=192.168.1.1  

DNS1=1.1.1.1  

DNS2=2.2.2.2  

DOMAIN=google.com.au  

  

## Firewall

- firewalld = frontend for iptables.  

- Zones: block, work, home, public, trusted, drop, dmz, internal, external.  

- Tools:  

  - `yum install firewalld firewall-config`.  

  - `systemctl start|enable firewalld`.  

  - `firewall-cmd --state`.  

  - `firewall-cmd --zone=public --add-port=80/tcp --permanent`.  

- Arch: uses `iptables` or `nftables` directly, though firewalld is packaged.  

- Gentoo: often defaults to `iptables` or `nftables`.  

- NixOS: `networking.firewall.enable = true;` (built-in nftables-based).  

  

## Time Synchronization

- Install: `yum install ntp`.  

- `systemctl start ntpd`.  

- `ntpdate time.uts.edu.au`.  

- Chrony (preferred):  

  - Config: `/etc/chrony.conf`.  

  - `systemctl start chronyd`.  

  - `chronyc sources -v` / `chronyc sourcestats`.  

  - `chronyc add server time.uts.edu.au`.  

  - `chronyc tracking`.  

  - `chronyc makestep`.  

- Arch: Chrony is default (`systemctl enable chronyd`).  

- Gentoo: choose `ntpd` or `chronyd` in `/etc/conf.d/ntpd`.  

- NixOS: `services.chrony.enable = true;`.  

  

## Lab (Week 3)

  

### CentOS

- `date -u` → UTC.  

- `/usr/share/zoneinfo/` → timezone files.  

- `ps -ef | grep chronyd` / `systemctl status chronyd`.  

- `chronyc sources` / `chronyc tracking`.  

- `chronyc add server time.uts.edu.au`.  

- `date 123123591999.00` → fake system date.  

- `systemctl restart chronyd` → resync.  

- Config: `/etc/chrony.conf`.  

  

### Windows

- Control Panel → Date and Time → Internet Time.  

- Sync with `time.microsoft.com` or `2.pool.ntp.org`.  

  

## # Week 4 – DHCP (Linux + Windows)

  

## General Description

This week covers **Dynamic Host Configuration Protocol (DHCP)** — automatically assigning IP addresses, gateways, DNS, and related config to clients.  

- **Linux (CentOS)**: `dhcpd` server package, config via `/etc/dhcp/dhcpd.conf`. Interfaces are managed via `/etc/sysconfig/network-scripts/ifcfg-*`.  

- **Windows Server**: DHCP role with scope definitions, leases, and reservations via GUI or PowerShell.  

- **Verification**: logs (`/var/log/messages` on Linux, Event Viewer on Windows), DHCP lease files, and client tools (`dhclient`, `ipconfig`).  

- Arch/Gentoo/NixOS tidbits:  

  - Arch: `dhcpd` and `dhclient` packaged separately, systemd-networkd also provides DHCP.  

  - Gentoo: DHCP client can be `dhcpcd`, `dhclient`, or BusyBox `udhcpc`.  

  - NixOS: DHCP handled by `networking.useDHCP = true;` or declarative per-interface.

  

## DHCP Server (CentOS)

- Install: `yum install dhcp-server`.  

- Example configs: `/usr/share/doc/dhcp-server/dhcpd.conf.example`.  

- Active config: `/etc/dhcp/dhcpd.conf`.  

- Example global config:  

  option domain-name "example.org";  

  option domain-name-servers ns1.example.org, ns2.example.org, 8.8.8.8;  

  default-lease-time 600;  

  max-lease-time 7200;  

- Subnet example:  

  subnet 10.5.5.0 netmask 255.255.255.224 {  

    range 10.5.5.26 10.5.5.30;  

    option domain-name-servers ns1.internal.example.org;  

    option routers 10.5.5.1;  

    option broadcast-address 10.5.5.31;  

    default-lease-time 600;  

    max-lease-time 7200;  

  }  

- Reservation:  

  host fantasia {  

    hardware ethernet 08:00:07:26:c0:a5;  

    fixed-address 10.5.5.10;  

    option domain-name-servers 8.8.8.8;  

  }  

- Start service:  

  - `systemctl enable --now dhcpd`.  

  - `systemctl status dhcpd`.  

- Firewall:  

  - `firewall-cmd --add-service=dhcp --permanent`.  

  - `firewall-cmd --reload`.  

- Verify:  

  - `cat /var/lib/dhcpd/dhcpd.leases`.  

  - `tail -f /var/log/messages` → DHCPDISCOVER / DHCPOFFER / DHCPREQUEST / DHCPACK.  

  - `arp -i ens37`.  

  

## DHCP Client

- Linux:  

  - `dhclient -d` → run DHCP client in debug mode.  

  - `ip a` → confirm new lease.  

  - Configs:  

    - `/etc/sysconfig/network-scripts/ifcfg-*`.  

    - `/etc/hostname` → hostname.  

    - `/etc/resolv.conf` → DNS/search domain.  

- Windows:  

  - `ipconfig /renew` / `ipconfig /release`.  

  - `ipconfig /all` → full lease info.  

- What Windows client sets:  

  - IP address, subnet mask.  

  - Default gateway.  

  - DNS server(s).  

  - DNS suffix/search domain.  

  - Hostname.  

  

## Hostname + DNS (Linux)

- `hostnamectl set-hostname myhost.domain`.  

- Or edit `/etc/hostname` and reload via:  

  - `systemctl restart NetworkManager`.  

  - `systemctl restart systemd-hostnamed`.  

- Check settings:  

  - `ip a` → IP.  

  - `ip route` → gateway.  

  - `cat /etc/resolv.conf` → DNS.  

  - `hostname`.  

  

## Lab (Week 4)

  

### Scenario 1: CentOS DHCP Server, Windows Client

1. Configure CentOS interface `/etc/sysconfig/network-scripts/ifcfg-ens37`:  

   TYPE=Ethernet  

   DEVICE=ens37  

   BOOTPROTO=none  

   ONBOOT=yes  

   IPADDR=10.0.2.1  

   NETMASK=255.255.255.0  

   DEFROUTE=no  

   GATEWAY=10.0.2.1  

   DNS1=1.1.1.1  

   DNS2=2.2.2.2  

   DOMAIN=feit.uts.edu.au  

2. `nmcli c reload ens37 && nmcli c up ens37`.  

3. `yum install -y dhcp-server`.  

4. `cp /usr/share/doc/dhcp-server/dhcpd.conf.example /etc/dhcp/dhcpd.conf`.  

5. Edit `/etc/dhcp/dhcpd.conf`:  

   authoritative;  

   option domain-name "feit.uts.edu.au";  

   option domain-name-servers 10.0.2.1;  

   default-lease-time 600;  

   max-lease-time 7200;  

   subnet 10.0.2.0 netmask 255.255.255.0 {  

     range 10.0.2.100 10.0.2.200;  

     option routers 10.0.2.1;  

     option broadcast-address 10.0.2.255;  

   }  

   host win19 {  

     hardware ethernet 08:00:07:26:c0:a5;  

     fixed-address 10.0.2.20;  

   }  

6. `systemctl enable --now dhcpd`.  

7. Verify with leases + logs.  

8. Windows client: set adapter to DHCP → `ipconfig /renew` / `ipconfig /all` → confirm lease + gateway + DNS.  

  

### Scenario 2: Windows DHCP Server, CentOS Client

1. On Windows Server:  

   - Add role: DHCP Server.  

   - Configure scope:  

     - Range: 10.0.3.129–10.0.3.254.  

     - Subnet: 255.255.255.0.  

     - Router: 10.0.3.1.  

     - DNS: 10.0.3.1.  

     - Lease: 1 min.  

     - Activate scope: yes.  

   - Add reservation: CentOS MAC → IP 10.0.3.30.  

   - Logs: Event Viewer → System → Filter by DHCP-Server.  

2. On CentOS:  

   - Edit `/etc/sysconfig/network-scripts/ifcfg-ens37`:  

     TYPE=Ethernet  

     DEVICE=ens37  

     BOOTPROTO=dhcp  

     ONBOOT=yes  

   - `nmcli con up ens37`.  

   - Verify:  

     - `ip a show ens37` → IP in scope.  

     - `cat /etc/resolv.conf` → DNS.  

     - `ip route` → gateway.  

     - `ping 10.0.3.1`.  

     - `tail -f /var/log/messages`.  

  

## # Week 5 – Users, Groups, Authentication

  

## General Description

This week focuses on **user and group management in Linux and Windows**.  

- **Linux account files**:  

  - `/etc/passwd` stores account info.  

  - `/etc/shadow` stores password hashes and aging.  

  - `/etc/group` stores group memberships.  

- **Account tools**: `useradd`, `usermod`, `userdel`, `passwd`, `chage`, `vipw`, `vigr`.  

- **Group tools**: `groupadd`, `groupmod`, `groupdel`, `usermod -g`/`-G`, `newgrp`.  

- **Locking accounts**: via shell, shadow file, or `usermod/passwd` commands.  

- **Windows**: local accounts, groups, workgroups vs domains, and GUI/CLI/PowerShell tools.  

- Arch/Gentoo/NixOS tidbits:  

  - Arch: defaults to **User Private Groups (UPG)**, each user gets their own group.  

  - Gentoo: also UPG by default, config in `/etc/login.defs`.  

  - NixOS: all users/groups are declared in `configuration.nix` (`users.users.<name>`).  

  

## Linux Account Files

- `/etc/passwd` → `username:password:uid:gid:comment:homedir:shell`.  

- `/etc/shadow` → `username:password:lastchg:min:max:warn:inactive:expires`.  

  - `x` in `/etc/passwd` → password stored in `/etc/shadow`.  

  - `!` or `*` → locked account.  

  - `::` → no password required.  

- `/etc/group` → `groupname:password:gid:userlist`.  

  

### Sample

- passwd: `someuser:x:1001:1001:Some User:/home/someuser:/bin/bash`.  

- shadow: `someuser:$6$hash:19385:0:99999:7:::`.  

- group: `staff:x:400:someuser,me,jane`.  

  

## User Management

- `useradd -c "Full Name" -s /bin/zsh peter` → add user.  

- `passwd peter` → set password.  

- `id peter` → check UID/GID/groups.  

- `usermod -s /sbin/nologin brian` → disable login shell.  

- `usermod -L brian` / `usermod -U brian` → lock/unlock.  

- `vipw -s` → safely edit `/etc/shadow`.  

- `userdel -r jane` → remove user + home + mail spool.  

- Manual creation (example lois):  

  - `vipw` → edit `/etc/passwd`.  

  - `vigr` → edit `/etc/group`.  

  - `passwd lois`.  

  - `mkdir /home/lois && cp -r /etc/skel/. /home/lois`.  

  - `chown -R lois:lois /home/lois`.  

  

### Password Aging

- `chage -E $(date -d "+5 days" +%F) peter` → expire in 5 days.  

- `chage -M 5 stewie` → max 5 days between pw changes.  

- `chage -l username` → list password policy.  

- Arch/Gentoo: password aging defaults in `/etc/login.defs`.  

- NixOS: aging managed declaratively (`users.users.<name>.passwordExpiry`).  

  

## Group Management

- `groupadd family`.  

- `usermod -G family stewie`.  

- `usermod -g family stewie` → change default group.  

- `groupmod -n newname family`.  

- `groupdel family`.  

  

### Switching Groups

- `id stewie` → show groups.  

- `newgrp family` → spawn subshell with new group.  

- `exit` → back to previous group.  

- Note: `newgrp` works by launching a new shell; PID differs (`ps`).  

  

## Locking Accounts

- `passwd -l user` / `passwd -u user`.  

- `usermod -L user` / `usermod -U user`.  

- Shadow file edit (`vipw -s`): add `!` or `*`.  

- Change shell: `usermod -s /sbin/nologin user`.  

- Custom message: edit `/sbin/nologin` message file.  

  

## Important Files

- `/etc/skel/` → copied to new home directories.  

- `/etc/issue` → console login banner.  

- `/etc/issue.net` → remote login banner.  

- `/etc/motd` → message of the day after login.  

  

## Windows Accounts

### Roles

- Standalone server → no central auth.  

- Domain controller → runs AD, manages logins + directory services.  

- Member server → part of domain, no AD role.  

  

### Workgroups

- Peer-to-peer, local SAM database.  

- Each user must exist on each machine.  

- Not scalable (10–20 devices).  

  

### Domains

- Centralized with AD.  

- Authentication + policies via DC.  

- AD DB can replicate across controllers.  

  

## Managing Accounts (Windows)

### GUI

- Server Manager → Tools → Computer Management → Local Users and Groups.  

- Add users: peter, stewie, brian, lois.  

- Add group: family → assign members.  

  

### Command Line

- `net user /add chris "password"`.  

- `net user` → list users.  

- `net user chris` → info.  

- `wmic useraccount where "name='chris'"`.  

  

### PowerShell

- `New-LocalUser -Name "joe" -FullName "Joe Swanson"`.  

- `Get-LocalUser`.  

- `Disable-LocalUser joe` / `Enable-LocalUser joe`.  

  

## Verification

- `ssh username@localhost`.  

- `id username`.  

- `ps` (check subshells after `newgrp`).  

- `ls -ld /home/lois`.  

- `ls -la /home/lois`.