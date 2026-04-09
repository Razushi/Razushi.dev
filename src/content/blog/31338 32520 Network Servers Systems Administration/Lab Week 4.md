`vim /etc/sysconfig/network-scripts/ifcfg-ens37`

`yum install dhcp-server`

`/usr/share/doc/dhcp-server/dhcpd.conf.example`
`vim /etc/dhcp/dhcpd.conf`

subnet 10.0.2.0 netmask 255.255.255.0 {
	range 10.0.2.128 10.0.2.254;
	option domain-name-servers 10.0.2.1;
	option domain-name "localdomain";
}

`systemctl ... dhcpd`

`vim /var/lib/dhcpd/dhcpd.leases` # see our windows machine hardware ethernet MAC
address, IP address, Hostname and Start/End times.

`arp -i ens37` # MAC address

in `/var/log/messages` # should see windows server request/responce, i.e DHCPdiscover/offer/request/pack

IF DHCPINFORM says "not authoratative", `vim /etc/dhcp/dhcpd.conf`, add `authoritative`

Reserving:
host WinServer {
	hardware ethernet 00:0c:29:xx:yy:zz;
	fixed-address 10.0.2.20;
}

`systemctl restart dhcpd`

Linux Client:
Essentially remove the config from Lab 4b, i.e.
• Disable and stop the DHCP server (dhcpd) with systemctl, if it is still running/enabled.
• Remove static networking on ens37, i.e. edit/etc/sysconfig/networkscripts/ifcfg-ens37 and set BOOTPROTO=dhcp and comment out any static IP address/netmask/gateway settings.
• Disable/re-enable interface: ifdown / ifup
• You should see a new IP address allocation: diagnostics:
• ifconfig –a: check IP configuration (should see 10.0.3.129)
• Check /var/log/messages
• With NetworkManager, DHCP client lease info stored in /var/lib/NetworkManager
• Check /etc/resolv.conf – this shows the default DNS server(s)
• Check routing table (route or netstat -r)
• Ping the gateway (10.0.3.1 ?) you defined earlier in the Windows Server DHCP server configuration (Note: if ping doesn’t work, you might also need to ensure that you have enabled ICMP echo reply in Windows Defender Firewall as described in an earlier lab).
• On the Windows Server, check:
o “Display Statistics” in DHCP Manager
o The DHCP server log file in C:\WINDOWS\system32\dhcp


# Windows
`netsh`
`netsh interface ip show config # show cconf`
`netsh interface ip set address "Local Area Connection" dhcp # set interface to dhcp`
`netsh interface ip set address name="Local Area Connection" static 10.0.2.11 255.255.255.0 10.0.2.1` static ip

cmd prompt:
`netstat /all` # IP address in the correct range and DNS and gateway settings 

Server Manager > Local Server > Roles and Features > DHCP > Admin

DHCP Manager > New scope:
Scope Name: A name for the scope (e.g. “winrange”) and optionally a description
• IP Address Range: from 10.0.3.129 to 10.0.3.254 with the appropriate subnet mask
• Add Exclusions and Delay: No exclusions (these are IP addresses or ranges not to give out to clients) – leave blank
• Lease Duration: et to 0 days, 0 hours, 1 minute (just for testing)
• Configure DHCP Options: yes.
• Router (Default Gateway): 10.0.3.1 (don’t forget to press “Add” before “Next”
• Domain Name and DNS Servers: whatever.localdomain and 10.0.3.1 (you may need to remove any extra DNS server address there that you don’t want served to DHCP clients)
• WINS Servers: none (remove any that are there)
• Activate Scope: yes

Logs:
Server Manager → Tools → Event Viewer → Windows Logs → System
Find > Filter Current Log > Event Sources: DHCP-Server

Reservations:

DHPC Manager > Scope menu options > Reservations > add new reservation
10.0.3.30 and xx-xx-xx-xx-xx
Other set of notes:

# Centos as server, windows as client
cd /etc/sysconfig/network-scripts
ls ifcfg-ens33 ifcfg-ens37 (lan)
vim *33

ONBOOT=yes/no

install dhcp-server

Advice:
do not use lan interface as default gateway (make sure in ens37 to set DEFROUTE=no) 
Content: Week 3-4, we get lab printouts too.

`dnf install -y dhcp-server`

vim `/etc/dhcp/dhcp.conf`

feit.uts.edu.au
10.0.2.1 (default gateway)

option domain-name "feit.uts.edu.au";
option domain-name-servers 10.0.2.1; (the ip will change in the test? what do I need to change?) 
default-lease-time 600;
max-lease-time 7200;

authoritative;

subnet 10.0.2.0 netmask 255.255.255.0 {
	range 10.0.2.100 10.0.2.200;
	option routers 10.0.2.1;
	option broadcast-address 10.0.2.1;
} 

host win19 {
	hardware ethernet 08:00:07:26:c0:a5;
	fixed-address 10.0.2.20;
}

Hardware address: 
Windows machine:
contorl panel -> Network and internet -> network connection -> Lan -> settings
ALT
cmd prompt -> ipconfig -> physical address (mac address), 

---

to test connectivity, 

contorl panel -> Network and internet -> network connection -> Lan -> settings
get rid of ipv4 and ipv6, swap to dhcp

`ipconfig /all`, Ethernet adapter LAN

`ip a show ens37` (the dhcp server should be 10.0.2.1)



---

# Windows as server, centos as client.
/usr/share/doc/dhcp-server/

 ifcfg-ens37:
```
#ipaddr
#netmask
#domain
#dns1
#dns2
bootproto=dhcp
```

Windows server, add roles
add DHCP Server Role,  spam next

notifications > complete dhcp configuration > complete 

DHCP -> ipv4 -> scope -> reservation -> grab the mac of centOS, chuck it into a reservation.

`nmcli con up ens37`
`cat /etc/resolv/conf`

