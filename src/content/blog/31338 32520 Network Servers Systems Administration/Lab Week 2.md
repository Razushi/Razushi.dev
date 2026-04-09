Difference between 1 and 5? whats the default?
`man 1 passwd`
`man 5 passwd`
General commands vs File Format

`man passwd`
shows 1 (general commands)

What part verifies? where will man command look for by default?
`/etc/man_db.conf.`  

Difference between:
`man grep`
`info grep` 
Info is longer

Difference between:
`whatis passwd`
`apropos passwd`
Exact vs keyword

# Centos
## Pkgs
- `yum check-update` (check for updates)
- `yum search XXXXX` (search for a keyword XXXXX to find packages mentioning this word)
- `yum install XXXXX` (where XXXXX is the package name)
- `yum update XXXXX` (where XXXXX is the package name)
- `yum remove XXXXX` (where XXXXX is the package name)

## ps
- `ps`
- `ps -ef`
- `ps --forest`

## priority
- `dd if=/dev/zero of=/dev/null`
- `nice –n 15 dd if=/dev/zero of=/dev/null`
- `renice -20 (PID)
- `ls` OR `rpm -qa`
- `renice 19 (PID)

## jobs
- `jobs`
- `bg1`
- `fg`

## partition
- `mount | grep '^/dev/'`
- `df` (free space)
- `parted /dev/sda print` (display partiions)
- `lvs` (see LV)
- `swapon` (how much swap memory is being used)
- `swapoff -a`
- `swapon -a`

# Windows
- `$ Install-Module PSWindowsUpdate

- `$ Get-WindowsUpdate` Check for updates
- `$ Get-WULastResults` Show results of the last time updates were checked
- `$ Get-WUHistory` Show history of updates installed
- `$ Get-WURebootStatus` Does the system need rebooting to install most recent updates?

## process
- `Get-Process`
- `tasklist`
- `Stop-Process –ID XXXXX`
- `taskkill /PID XXXXX`