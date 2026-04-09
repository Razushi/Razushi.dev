# centos
## Network Address
MAC: First half - Company ID : Second half - Product ID

ifconfig  
– `ifconfig ens37` # IP address, Network mask, MAC address, etc  
– `ifconfig ens33 192.168.168.64 netmask 255.255.255.0` # setting  
– `ifconfig ens33 hw ether xx：xx：xx：xx：xx：xx` # configure MAC  

route  
– `route (–n)` # show current routes  
– `route del default gw xxx.xxx.xxx.xxx` # delete default gateway  
– `route add default gw xxx.xxx.xxx.xxx` # add default gateway  
– `route add –net 192.168.1.0 netmask 255.255.255.0 dev eth37` # add an entry to the routing table.  
– `hostname.domainname` # hostname.domain, www.google.com

check, set IP address (man ip; ip addr help)  
– state is up unless manually put to down  
– `ip a; ip addr; ip addr show; ip address show; ip -4 addr; ip addr show dev ens33` # show ip address  
– `ip addr add 192.168.0.10/24 dev ens33` # {add | change | replace}, support multiple address  

link down/up  
– `ip link show; ip link show ens33`  
– `ip link set ens33 down; ip link set ens33 up`  

route, default gateway  
– `ip route`  
– `ip route add 192.168.0.10/24 dev ens33 metric 100`  
– `ip route delete 192.168.0.10/24 dev ens33`


## NetworkManager
`yum install network-scripts`
`systemctl {is-active|restart|start|enable} NetworkManager`
`systemctl start network`

`/etc/sysconfig/network` (Pre-Centos8)

`etc/sysconfig/network-scripts/ifcfg-xxx` (Post-Centos8

`nmcli` or `ifup/down`

`/etc/resolv.conf`

`nm-connection-editor`
`nmtui: text-based menu tool`  
– All updates will be written to ifcfg file. Activate means “ONBOOT=yes”  
– `nmtui` # Tab, Shift+Tab, Enter, Space  
– `nmtui hostname` # or nmtui-hostname; set hostname directly  
– `nmtui edit ens33` # edit ens33 only  
– `nmtui connect ens33` # bring interface up

• connection:active (colored)/inactive  
– `nmcli con add type ethernet ifname ens37 ipv4.addresses '192.168.1.100/24' ipv4.gateway 192.168.1.1 ipv4.method manual` # create static connection, ~ ifcfg = interface configuration files  
–` nmcli c add type ethernet ens33 ifname ens33 ipv4.method auto` # create dynamic connection, similar to ifcfg  
– `nmcli c modify ens37 ipv4.addr ’192.168.1.200’`
– `nmcli c up ens37` # activate connection (similar to ifup)  
– `nmcli c down ens37` # de-activate connection, similar to ifdown  
– `nmcli c delete ens37` # delete connection, similar to ifdown and delete ifcfg file)  
– `nmcli c show` # check connection list, name, uuid (universally unique identifier), type, device  
– `nmcli c show ens33 | grep address` # show more details

`vim /etc/sysconfig/network-scripts/ifcfg-ens37(in the labs!)  `
`nmcli c reload ens37` # enable ens37 effective immediately  
`nmcli c up ens37`

## Hostname
• Three classes of hostname: static, pretty, and transient  
	• static: traditional hostname, stored in `/etc/hostname` file  
	• pretty: free-form UTF-8* hostname for presentation to the user  
	• transient: dynamic hostname maintained by the kernel: localhost by default,  
	can be changed by DHCP or multicast DNS at runtime (temporal change!)  
• Example of transient change: `hostname hostname.example.com`  
• Persistent change saved in `/etc/hostname`  
	• Manual change in `/etc/hostname` will not be effective automatically, must run `systemctl restart NetworkManager`, or reboot, or `systemctl restart systemd-hostnamed` to make it effective  
• nmcli (static hostname)  
	• `nmcli general hostname` # query  
	• `nmcli general hostname localhost.localdomain` # effective instantly  
• hostnamectl (static/transient/pretty)  
	• `hostnamecli status` # query  
	• `hostnamectl set-hostname localhost.localdomain` # effective instantly  
• Match to a fully-qualified domain name (FQDN): host.example.com

### sample ens37 (WAN)
```
BOOTPROTO=none #none: manual, dhcp:dhcp  
NAME=ens37 #any name, normally the same as DEVICE  
DEVICE=ens37  
ONBOOT=yes  
IPADDR=192.168.1.10  
NETMASK=255.255.255.0 # PREFIX=24  
GATEWAY = 192.168.1.1 # will overwrite /etc/sysconfig/network  
DNS1=1.1.1.1  
DNS2=2.2.2.2  
DOMAIN=google.com.au
```

## firewalld vs. iptables
firewall can filter requests based on protocol or target-based rules. Both firewalld and iptables are the tools for managing firewall rules on a Linux machine.
• firewalld acts as Front-end tool via the iptables Back-end utility  
• Can update rules when process is still running  
• firewalld setting up a default zone that drops all incoming and outgoing traffic and then selectively allows specific traffic,  
• By default, iptables blocks all incoming traffic and allows all outgoing traffic.  
• firewalld Define 9 zones: block, work, home, public, trusted, drop, DMZ,  internal, external. /usr/lib/firewalld/zones  
• Tools: firewall-cmd, firewall-config (GUI) and modify xml file

### fireall-cmd
– `yum install firewalld firewall-config`  
– `systemctl start|stop|restart|enable|disable firewalld`  
– `firewalld-cmd --state` # check status  
– `firewall-cmd --zone=public --add-port=80/tcp --permanent`

## NTP
`yum install ntp`
`systemctl start ntpd`
`ntpdate time.uts.edu.au`

### chrony daemon  
• Faster and Keep accurate time even on busy network or down for some time.  
• Configure: `/etc/chrony.conf`  
• `systemctl start chronyd`  
• `chronyc sources –v` # check sources  
• `chronyc sourcestates` # time server stats  
• `chronyc add server time.uts.edu.au` # add NTP server  
• `chronyc tracking` # view software clock information  
• `chronyc makestep` # only sync system date and time