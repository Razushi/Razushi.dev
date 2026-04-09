## DHCP
10.0.2.0/24 – 10.0.2.254/24.
192.168.3.0/24 – 192.168.3.254/24

# lab tips
ifcfg-ens33
BOOTPROTO=dhcp
DEFROUTE=yes
ONBOOT=yes

ifcfg-ens37
EVICE= ens37
NAME= ens37
Delete UUID
BOOTPROTO=none 
IPADDR = 10.0.2.1 
NETMASK = 255.255.255.0  
DEFROUTE=no (not assigned by DHCP)
ONBOOT=yes

`/etc/hostname`

ens37
GATEWAY=10.0.2.1
DNS1=1.1.1.1  
DNS2=2.2.2.2  
DOMAIN=www.google.com.au

## dhcp
- `yum install dhcp-server` # install the DHCP Server Package on your system  
– `systemctl status dhcpd` # checks the status of the DHCP server (dhcpd)  
– `Rpm* –qc dhcp-server` # lists the conf. files installed by the dhcp-server pckage

`/etc/dhcp/dhcpd.conf`

– Copy example file: `/usr/share/doc/dhcp-server/dhcpd.conf.example`  
– Edit the real file `/etc/dhcp/dhcp.conf`

```
option domain-name "example.org";  
option domain-name-servers ns1.example.org,  
ns2.example.org, 8.8.8.8;  
default-lease-time 600; # 600 seconds = 10 Min  
max-lease-time 7200; # 7200 second = 2 hours
```

• Individual subnet configuration: `/etc/dhcp/dhcpd.conf`  
– Example file: `/usr/share/doc/dhcp-server/dhcpd.conf.example`

subnet 10.5.5.0 netmask 255.255.255.224 {  
	range 10.5.5.26 10.5.5.30;  
	option domain-name-servers ns1.internal.example.org;  
	option domain-name "internal.example.org";  
	option routers 10.5.5.1;  
	option broadcast-address 10.5.5.31;  
	default-lease-time 600; # 600 seconds = 10 Min  
	max-lease-time 7200; # 7200 second = 2 hours  
}

host fantasia {  
	hardware ethernet 08:00:07:26:c0:a5;  
	fixed-address 10.5.5.10;  
	option domain-name-servers 8.8.8.8;  
}

Disable firewall:  
- firewall-cmd --add-service=dhcp –permanent  
- firewall-cmd --reload

Linux: 
- `dhclient –d*;` # run the DHCP client (dhclient) in debug/fg. mode  
- `ip a` # Displays all network interfaces and their assigned IP addresses.  

After running dhclient -d, you can use ip a to check whether your interface got a new  
IP from the DHCP server  

Windows: 
- `ipconfig /renew`
- `ipconfig /release`
- `ipconfig /all`

What should be set up on Win  
• IP address, subnet mask  
• Default gateway  
• DNS Address  
• DNS suffix, search domain  
• Hostname

Edit the files on Linux  
• `/etc/sysconfig/network-scripts/ifcfg-ens33` # do the practice in the lab3 and onwards!  
• `/etc/hostname` # can set it in two ways:  
• `/etc/resolv.conf` # show search domain, DNS

How to check key settings  
1. IP address: `ip a`
2. Gateway: `ip route`  
3. DNS: `cat /etc/resolv.conf`  
4. Hostname: `hostname`  

How to set hostname in two ways  
W1: edit `/etc/hostname` directly then `hostnamectl set-hostname myhostname.mydomain`  
W2: `hostnamectl set-hostname myhostname.mydomain`

vim /etc/sysconfig/network-scripts/ifcfg-ens37  
`nmcli c reload ens37` # reload  
`nmcli c up ens37` # activate

```
TYPE=Ethernet  
• BOOTPROTO=none #none: manual, Not dhcp:dhcp  
• NAME=ens37 #any name, normally the same as DEVICE  
• DEVICE=ens37  
• UUID=9a5b99db-9450-44c5-aece-fbfb20f28e7d #can be deleted  
• ONBOOT=yes  
• IPADDR=10.0.2.1  
• NETMASK=255.255.255.0 # PREFIX=24  
• GATEWAY = 10.0.2.1  
• DNS1=1.1.1.1  
• DNS2=2.2.2.2  
• DOMAIN=google.com.au
```