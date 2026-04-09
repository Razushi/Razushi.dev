# Centos
## Grub2 bootloader
/etc/grub2.cfg

## systemctl

### dmesg
journalctl --dmesg

### logs
/var/log/messages
/var/log/secure

# Windows
net start
net stop “Simple TCP/IP Service”
netsh advfirewall firewall add rule name="TCP Port 17" dir=in action=allow protocol=TCP localport=17