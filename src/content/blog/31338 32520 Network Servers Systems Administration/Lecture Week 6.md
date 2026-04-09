## Domain Name System (DNS)
• Recall from last time:  
– IP address – numeric label of a host  
• Domain names : two parts, the host name and the domain name  
– Assign IP addresses into domain names, e.g., www.uts.edu.au  
– FQDN: A Fully Qualified Domain Name for a specific host: the hostname.the domain name => e.g., mymail.uts.edu.au  
– Domain name can be hosted anywhere with the changes of IP  
• So, keep the same domain name (to keep customers), but IP can be changed with your web hosting service  
• ICANN - Internet Corporation for Assigned Names and Numbers  
– Maintenance and procedures of DNS and manage IPv4/v6  
– The The Internet Assigned Numbers Authority (IANA) is the part of ICANN for managing the DN, IP etc.  
– The IANA manages the registries of DN, protocol parameters and IP address

## Before Domain Name System (DNS)
Centrally held list of host names and IP addresses  
– Called HOSTS.TXT  
– Downloaded periodically by Internet hosts  
– Not a scalable solution  
• Modern equivalent lives on in Unix and Windows  
– /etc/hosts  
– C:\Windows\System32\drivers\etc\hosts (Windows)  
– Lists IP addresses and host names (can include A Fully Qualified Domain Name(FQDN))  
```
IP Address: Host Name Alias  
127.0.0.1 localhost.localdomain localhost  
192.168.1.1 fang.cats.org fang  
192.168.1.2 moggy.cats.org moggy
```

## DNS Name Space: hierarchal structure
• Upside-down tree structure ()  
– A web host is regarded by hostname and domain, separated by dots, e.g. www.uts.edu.au  
• Root Domain (null): represented by “” or . (by 12 diff org. the root DNS servers are operated by 12 different organizations: including Verisign, US Department of defense,  US army research lab, University of Southern California, ICANN, RIPE, WIDE,Internet Systems Consortium)  
• Top Level Domains (TLD) (First-Level)  
– Generic: .org, . gov, .com, .edu, and now .biz, .info, .tv, etc  
– Country code: e.g., .au, .uk, .us, .md, .nz, etc  
– ICANN selects organizations to manage TLD  
• Second-Level domains (and further)  
– 2nd level domain (edu.au & ns.edu.au)  
• 3rd level domain (uts.edu.au & ns.uts.edu.au)  
– 4th level domain (it.uts.edu.au & ns.it.uts.edu.au)

## Root
Top level: com/edu/net/org/au/uk/us/arpa 
2nd level: cisco/hp/cmu/com/net/edu
3rd level: cs/law/unsw/uts/usyd
4th level: m1/m2/pc1/pc2/dab/it/eng
5th level: linus/rerun

End result can be: linus.it.uts.edu.au

arpa - It is used predominantly for the management of technical network infrastructure

## Basic Concept of DNS
• DNS (~Lookup table, the IP address for a domain...) is for:  
1. resolving domain to IP addresses (IPv4 A records, IPv6 AAAA records) “A” stands for “address”. It indicates the IP address of a given domain/hostname (lookup table)  
2. host aliases (CNAME records) # Canonical name record (subdomains) A DNS record that points out a domain name (an alias) to another domain: ftp.example.com &  www.example.com  
3. specifying name server(s) for a domain (NS records) To tell the internet where to go to find out a domain’s IP address.  
4. specifying mail server(s) for a domain (MX records) # Mail eXchange  An MX record makes it possible to direct email to a mail server  
5. some others less often used (TXT, SRV, etc) TXT: Let the owner of a domain store text values in the DNS. Several services use this record to verify ownership of a domain. SRV: to store the IP address and port for specific services.  
6. stores admin information about a domain（Start of Authority SOA records) It stores admin information about a domain: the email address of the admin and when the domain was last updated  
7. IP addresses to domain (reverse lookup, PTR records) # PoinTeR It provides a domain name linked to an IP address. E.g., given the IP, need to map the IP to a DN

– see /etc/named.conf

## DNS slaves and caching  
Roughly defined terminology and to be configured as:  
• Primary (Master) DNS (only one):  
– Required, authoritative server  
• Secondary (Slave) DNS (multiple and redundancy):  
– Optional, to improve performance  
– periodically downloads/copy a zone file (read only) from a master DNS server: Zone is a portion of the DNS.  
– 2nd DNS can then answer authoritative queries about that zone  
• Caching-only DNS (mainly used by Interment Service Provider  (ISP)  
– gather together a large cache of DNS responses to improve DNS response times significantly (DNS performance) – Fast!  
– Time-To-Live (TTL) before it must download the data again 


DNS goes to local dns, which goes to root, which goes to top level down, to authoratative

## Q&A 
The .edu domain is considered which domain type? (Choose the best answer.)  
A. Root domain  
B. TLD  
C. ICANN  
D. Second-level domain  

Based on the last slide, a program or library routine that creates a DNS query, checks its own  
cache for the answer, and if it doesn’t find it there, sends the query to another name server, is  
called what? (Choose the best answer.)  
A. Name server  
B. Cache  
C. Name resolution  
D. Resolver  
E. Zone  

Note:
When you type a domain name into your web browser, the DNS resolver takes that  
domain name and translates it into the corresponding internet protocol (IP) address.  
It does this by querying a series of DNS servers until it finds the IP address  
associated with the domain name. -- Resolver

## DNS and Bind  
• How to set up a DNS server? Install a BIND S/W package  
– Berkeley Internet Name Daemon (bind), an implementation  
• `yum/dnf install bind`  
• dnf (dandified yum): provide advanced features of yum, e.g., faster resolving dependency  
– DNS Server is called named daemon ("name-dee")  
For queries:  
– command-line interfaces to DNS (dig, host, nslookup),  
`dig`: A DNS lookup tool (short for Domain Information Groper). It’s commonly used on Linux/Unix systems to query DNS records.  
`dig` replaces older tools such as nslookup and host 

`nslookup www.uts.edu.au` use the first name server in /etc/reslov.conf  
`dig uts.edu.au ns`  
`dig www.uts.edu.au a` # a: Specifies the query type. The A record maps a domain name  
`dig @ns.uts.edu.au www.uts.edu.au any` # Asks the UTS nameserver (ns.uts.edu.au) to return all known DNS records for www.uts.edu.au.  
– Other alternatives: djbdns, dnsmasq, pdnsd, PowerDNS

## Bind configuration – server (1)  
Two steps:  
Step1: Edit /etc/named.conf (make a copy!)  
– clauses (statements) to control operation for each zone It identifies the zone name and its record file  
```
zone "it.netserv.edu.au" {  
	type master; #slave, forward, hint  
	file "it.netserv.edu.au.zone";  
	#configuration file  
};  
```
Step2: Create /var/named/it.netserv.edu.au.zone  
– This is the "zone file" for the zone it.netserv.edu.au.zone  
– Take an example in the /var/named/named.localhost (make a copy!)  
– make sure the file permissions are OK  
Do you know chmod/chown/chgrp? (mod,ownership,groupship?)


## Bind configuration – server (2)  
$TTL 3H  
;name class type record specific information  
@ IN SOA ns.it.netserv.edu.au. root@it.netserv.edu.au.(  
20 ; serial (yyyymmddxx)  
1D ; refresh #D:Day for slave  
1H ; retry #H:Hour for slave  
1W ; expire #W:Week for slave  
3H ) ; minimum #H:Hour, the amount  
of time, other nameservers cache the zone's information  
IN NS ns.it.netserv.edu.au  
IN MX 0 mail  
localhost IN A 10.0.2.3  
ns IN A 10.0.2.3  
site IN A 10.0.2.3 See slide 6!  
;aliases  
www IN CNAME site  
ftp IN CNAME site  
Mail IN CNAME site  
SOA (Start of Authority): Defines the primary  
name server for the zone (ns.it.netserv.edu.au),  
the email of the administrator  
(root@it.netserv.edu.au), and various timing  
parameters (serial number, refresh, retry, expire, and  
minimum Time-to-Live).  
Location: /var/named/it.netserv.edu.au.zone(forward zoon  
to resolve the domain name to the IP address: 10.0.2.3  
#www is an alias name; 0 before mail is <preference-value> allows you to numerically rank the email servers.  
The lowest or the highest preferred.  
Record Class (IN): The IN (Internet) class will be used for the Managed DNS service

## Bind configuration for– server (3)  
Step1: /etc/named.conf  
zone "2.0.10.in-addr.arpa" {  
type master;  
file "2.0.10.in-addr.arpa.zone";};  

Add another arpa(rev)zoon in the conf file !  
Stpe2: /var/named/2.0.10.in-addr.arpa.zone (lab 6  
$TTL 3H  
;name class type record specific information; @=$ORIGIN  
@ IN SOA ns.it.netserv.edu.au. root@it.netserv.edu.au (  
2016051000 ; serial (yyyymmddxx)  
1D ; refresh  
1H ; retry  
1W ; expire  
3H ) ; min negative cache  
IN NS ns.it.netserv.edu.au.  
2 IN PTR site.netserv.edu.au ;Windows server  
3 IN PTR site.it.netserv.edu.au. ;Linux server  
Location: /var/named/3.168.192.rev to resolve the IP address to  
the domain name (rev. 192.168.3!)  
The first number in PTR record is the last digit of an IP address in the zone  
2 – 10.0.2.2, 3– 10.0.2.3  
The "@" symbol is a special label that indicates the $ORIGIN should replace the "@" symbol. This is typically used for the apex of a  
zone. SOA Record – The $ORIGIN is followed by the zone's Start Of Authority (SOA) record. An SOA record is required for each zone

## Client (to identify where is the DNS Sever)  
• DNS client – software  
# Generated by NetworkManager!  
when you open a browser and type a domain, your computer’s DNS client asks a DNS resolver  
for the IP. (/etc/resolv.conf)  
search it.uts.edu.au uts.edu.au #default search list, when  
resolving short hostnames such as test, it will search  
test.it.uts.edu.au, then test.uts.edu.au  
nameserver 10.0.2.2 (DNS server1 IP address-Windows)  
nameserver 10.0.2.3 (DNS server2 IP address-Linux)  
– resolve.conf can be set by DHCP (lab 4, Networking Skills Test!)  
– resolve order determined by /etc/nsswitch.conf  
hosts: files dns myhostname # /etc/hosts first, then dns, then`myhostname`  
– test in Lab with dig, by not using the @localhost option  
• i.e., make it use the default server (from the resolv.conf file)

## Client Configuration  
• Traditional Ways  
– Manual changes in /etc/resolv.conf, Not recommend!  
•  
Disable auto-config: modify  
/etc/NetworkManager/NetworkManager.conf  
and add “dns=none”  
under [main] section  
• systemctl restart NetworkManager  
•  
manual update /etc/resolv.conf  
, and add “nameserver 10.0.2.2”  
“nameserver 10.0.2.3, ...  
• nmcli tool, fast way, used in the lab 6 but not favour!  
– nmcli con mod ens37 ipv4.dns “10.0.2.2 10.0.2.3”  
– nmcli con up ens37  
– man NetworkManager.conf, man nmcli #check manual

## Client Configuration – NetworkManager  
• Client config is separate for each interface in  
/etc/sysconfig/network-scripts/ifcfg-ens37*  
DOMAIN=it.uts.edu.au # search domain for DNS  
DNS1=10.0.2.2 # first DNS server  
DNS2=10.0.2.3 # second DNS server  
PEERDNS=no # ignore DNS server from DHCP  
IPV4_DNS_PRIORITY=10 # DNS priority for this interface  
– The search domains for all interfaces are joined together in a  
single search line in /etc/resolv.conf  
– The nameservers for each interface are added to resolv.conf  
– The order of search domains and name servers in resolv.conf  
depends on the DNS priority value of the interface (and interface  
number when priority is the same) -- /etc/nsswitch.conf  
– Previous manual changes to resolv.conf will be overwritten  
This way is recommended!  
Add the following parameters:  
*Since we have two network cards ens33 and ens37. If ens33 has a high DNS priority, then...

## Client Configuration - Recommended  
• Steps for ens37 (2nd network card) when it is enabled  
• nmcli general hostname myhostname.mydomain # Changes the system  
hostname immediately and persists it across reboots (NetworkManager handles it).  
• vim /etc/sysconfig/network-scripts/ifcfg-ens37  
• nmcli c reload ens37 #reload  
• nmcli c up ens37 #activate  
• Systemctl restart NetworkManager #restart the NT manager  
• Client Config on ens37 if it is set as follow:  
BOOTPROTO=none #none: manual, dhcp:dhcp  
NAME=ens37 #any name, normally the same as DEVICE  
DEVICE=ens37  
ONBOOT=yes  
IPADDR=10.0.2.3  
NETMASK=255.255.255.0 # PREFIX=24  
GATEWAY = 10.0.2.3 # will overwrite /etc/sysconfig/network  
DNS1=1.1.1.1  
DNS2=8.8.8.8  
DOMAIN=google.com.au  
PEERDNS=no # ignore DNS server from DHCP  
IPV4_DNS_PRIORITY=10 # DNS priority for this interface  
/etc/resolv.conf  
# Generated by NetworkManager  
search google.com.au mydomain  
nameserver 1.1.1.1  
nameserver 8.8.8.8  
1.1.1.1 is a public DNS resolver operated by Cloudflare that offers a fast and private way to browse the Internet  
8.8.8.8—Google's first DNS server—was 10.3% faster than the default server

