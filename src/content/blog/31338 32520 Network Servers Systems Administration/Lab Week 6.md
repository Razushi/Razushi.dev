# Lab 6a: DNS server configuration
Aims
1. To design a DNS configuration
2. To configure a DNS server using the BIND software for forward lookups (hostname to IP address mapping)
3. To configure a DNS server using the BIND software for reverse lookups (IP address to hostname mapping)
![](99%20-%20Assets/2025/2025-09-11-12-09-12.png)

## Task 1: Design DNS configuration
The first step before starting DNS servers is to make several design decisions.
1. On Windows, choose whether to set up static (or standard) zones or centrally controlled zones via Microsoft Active Directory (called an “Integrated Zone”). Since we aren’t primarily using Active Directory, we will use the “Standard Zone” configuration
2. We will set up 2 domain name servers for our network.
	 For this exercise, the primary DNS will be the Windows Server and the secondary (backup) server will be the Linux server.
	 We will also set up a sub-domain, with the Linux server as the primary DNS and Windows as the secondary.
	 Both servers will forward requests appropriately – the Linux DNS will forward all unknown requests to the primary server (Windows), which will then forward to the university server (ns.uts.edu.au) and thence the internet
3. We need to decide which names, types and IP addresses are to be allocated to which server. Don’t forget that we can use aliases and can reuse the same IP address of our servers for different naming (and server) purposes.

Suggested configuration (assuming Windows is 10.0.2.2 and Linux is 10.0.2.3 )
DNS name IP address Type Which
server?
Comments
netserv.edu.au 10.0.2.2 NS, MX Windows Pointer to name & mail server
ns.netserv.edu.au 10.0.2.2 A Windows Actual Primary DNS
mail.netserv.edu.au 10.0.2.2 A Windows Actual Mail server
site.netserv.edu.au 10.0.2.2 A Windows Actual Web server
www.netserv.edu.au 10.0.2.2 CNAME Windows Alias to site.netserv.edu.au
it.netserv.edu.au 10.0.2.3 NS, MX Linux Point to name server & mail server
ns.it.netserv.edu.au 10.0.2.3 A Linux Actual Primary DNS
site.it.netserv.edu.au 10.0.2.3 A Linux Actual ftp,www server
www.it.netserv.edu.au 10.0.2.3 CNAME Linux Alias to site.it.netserv.edu.au
ftp.it.netserv.edu.au 10.0.2.3 CNAME Linux Alias to site.it.netserv.edu.au
mail.it.netserv.edu.au 10.0.2.3 A Linux Actual Mail server

Please note what your default DNS server is on your configuration! 
(hint: ipconfig /all on windows, or cat /etc/resolv.conf on Linux.
By default this is usually 192.168.3.2 in our labs)
We also put a forwarding record in Windows to the UTS name server (in our case we will use 2: First the VMware server at
192.168.3.2, then the UTS name server at 138.25.9.1 )
For the Linux server, we will forward all requests to ns.netserv.edu.au to handle everything else.

## Task 2: Set up a DNS zone (forward lookup)
(a) Configuring DNS role on Windows
Step 1: Set up Ethernet1 adapter to a STATIC address 10.0.2.2.
(Hint: Recall the lab on Static Networking)
Step 2: Install the DNS role from the server manager.
(Hint: The process is the same as when we installed a DHCP server role – except now choose DNS).
You may get a prompt about static networks but this is really about Ethernet0 (192.168.3.xx)
Confirm and install the DNS role.
Step 3: Set up a zone for the DNS server
We will use the “standard” (static) zones for the DNS server.
Once the installation is complete, in the “Tools” menu of Server Manager, you now should find DNS.
Alternatively you can find it under Start  Windows Administrative Tools  DNS
Clicking on this will open the DNS Manager.
Look for your server name on the left. Right-click on the server name, and choose “Configure a DNS Server…”.
When prompted by the wizard, choose “Create a forward lookup zone”.
We will create a Primary Zone for the netserv.edu.au . Our zone name will be netserv.edu.au. So choose ‘The
server maintains the zone. (i.e. it is the primary name server). Enter the zone name as netserv.edu.au. Tell the wizard
to create a new zone file for this zone.
On the next page, don’t allow dynamic updates.
Finally, when prompted for forwarders, enter the IP address of your default DNS server (e.g. 192.168.3.2 in the lab,
but it will be different if you are at home. Use ipconfig /all to determine your default DNS server on Ethernet0.
This will create a file called “netserv.edu.au.dns” in our C:\Windows\System32\dns directory.
Look in the samples directory and try to understand what each file is for.

Step 4: Set up DNS server properties
We can set up various properties for our DNS server. The installation wizard set some of them for us, but we can
change those or others. In the DNS Manager window, right-click on your server name and choose Properties.
When the Properties window opens, find the Interfaces tab (it’s usually the default). You can see that the DNS
server is configured by default to listen on all network interfaces. Since we only want our DNS server to answer
queries on our private network, turn off the Ethernet0 interface (e.g. 192.168.3.xxx) and just keep 10.0.2.2.
Through the Properties window you an also adjust the forwarders and other parameters. Look around.
When you are satisfied, exit the Properties panel back to the DNS manager.
Step 5: Create the Forward Lookup zone file
Expand Forward Lookup Zones and then right-click on the netserv.edu.au entry. Your context menu allows you
to add new Hosts, Aliases etc.
Expanding the folder will show that the wizard has created a default SOA and NS record for you.
You will need to modify the NS record to match our configuration. Notice that it names the name server to your
machines name. According to our design, this server should be called ns with an IP address of 10.0.2.2
Change the record by double-clicking it (the “(Same as parent folder) Name Server (NS))…”
We will use our design instead: So edit the name server entry to be: ns with IP address of 10.0.2.2
(hint: click on the <click here to add an ip address> & type in 10.0.2.2)
You should also choose the Zone Transfers tab. Make sure the “Allow zone transfers to Any server” is selected
for our later lab.
Exit the popup window and check that the name server (NS) is called ns.
Step 6: Add more entries to the Zone file
We will enter several types of records in the zone file for our name server. You need to select the netserv.edu.au
zone and right-click the mouse (or use the Action menu) to add the following types of records. Refer to the table
under Task 1 for the full list.
 New host (A): ns with IP address 10.0.2.2
 New host (A): mail with IP address 10.0.2.2
 New Mail Exchanger (MX): leave host blank and the FQDN should be mail
 New host (A): site with IP address 10.0.2.2
 New Alias (CNAME): www and FQDN site
We will also create a delegation for the it.netserv.edu.au domain .
New Delegation: it
Add a new server record: FQDN = ns.it.netserv.edu.au and add the IP address of this
record as 10.0.2.3 (assuming this is the IP address of your Linux machine)
Right-click on your server name and choose “Update Server Data Files” to make sure these changes are written to
the filesystem.
CHECK THE FILE CONTENTS: Look in C:\Windows\System32\dns\netserv.edu.au.dns and review
netserv.edu.au.dns file (hint: use type or notepad commands)
Don’t forget to restart the DNS server or reload the file when you make changes!
(Hint: Server Manager
 Tools
 Services
 DNS Server
 Restart )

(b) Testing the configuration
We originally set our Windows Server to use the 192.168.3.2 machine as the default name server.
You can choose to set up the default DNS for the windows machine to localhost or 10.0.2.2, or you can manually test the
services.
Step 1: Using the nslookup tool on Windows
From a command prompt, type
nslookup
use the help command to see what commands can be executed.
Some useful commands to use:
server 10.0.2.2 (use our local machine as the default server to test)
set type=A (only look up A records)
set domain=netserv.edu.au. (set our default domain to netserv.edu.au ** note the trailing dot)
site.netserv.edu.au. (lookup site.netserv.edu.au ** note the trailing dot)
www (lookup the IP address of www.netserv.edu.au)
www.uts.edu.au. (lookup UTS main web server ** note the trailing dot)
Try running the nslookup command in debug mode:
set debug (run in debug mode)
Try the above commands again. What about the ls netserv.edu.au. command?
(c) Configuring the DNS server (BIND) on Linux
Step 1: Set up ens37 with static ip address
First, make sure you have STATIC networking enabled on ens37. Normally, a server of any sort should have a
static (and rarely if ever changed) IP address. Recall Lab 3a – set your servers up to the same static networking
configuration on ens37.
We will use it.netserv.edu.au. In the rest of this example, replace any references to "netserv.edu.au" with
your own domain name.
Don’t forget to connect your network adapters!!
Step 2: Install name server
We will install the Berkley Internet Name Domain name server (BIND) .
Use:
dnf install bind
and accept all the extra libraries to install.
Note that we have suggested the command dnf rather than yum. Research the difference between these two
commands for installing packages and make notes in your journal about best practice.
Step 3:Update the name server configuration file
You should find that you have an existing file called /etc/named.conf
Edit this file as follows.
1. In the “options” paragraph, find “listen-on port 53 {127.0.0.1; }; Replace “127.0.0.1 with the word “any”.
2. In the same options paragraph, find “allow-query { localhost; };”. Replace “localhost” with “any”.
3. Add the following paragraph (preferably near the existing “zone” paragraph):
zone "it.netserv.edu.au" IN {
type master;
file "it.netserv.edu.au.zone";

Step 4: Create Zone file
Note that in the above configuration, we have specified a filename (it.netserv.edu.au.zone in the example
above, but you can choose your own name). Now you need to create this file (the zone file) for your domain.
On our system, the zone files are located in the /var/named/ directory.
Change to this directory.
You need to now create a new zone file for your zone in this directory.
Remember that the name of the zone file must be the same as the name you specified in your named.conf file!.
You can copy the named.localhost as a template. Just make sure the SOA record is correct. See the Windows
sample.
Hint: The SOA record entry called “rname.invalid.” is actually an email address in a weird format. This translates
to “rname@invalid”, so you can change this to something like “root.netserv.edu.au.” or something more useful.
Also note the trailing dot – it is important.
Secondly, the serial is currently 0. This should be incremented each time you change the DNS records
Here is a sample to get you started:
; hosts
ns IN A 10.0.2.3
site IN A 10.0.2.3
; aliases
ftp CNAME site
www CNAME site
Step 5: Change group ownership of file (file permissions)
After you are finished editing the file, you’ll need to change the file permissions so that the name server process can
read it. Unfortunately the default permissions will not allow the name server to read it. Specifically we need to
change the group ownership of the zone file.
Use the chgrp command to change the file’s group to be the ‘named’ group,
chgrp named it.netserv.edu.au.zone
Use ls –l to check that the ownership and file permissions on your newly created file are the same as the other
files in that directory.
(d) Starting the DNS server on Linux
Step 1: Check configuration
Check your configuration with:
named-checkconf /etc/named.conf
Check your zone file with:
named-checkzone it.netserv.edu.au /var/named/it.netserv.edu.au.zone
Step 2: Start named service
To start your named service now: systemctl start named
Also enable the named service so that it starts at boot. Refer to previous labs if you don’t remember how.
In later labs, you will need to start/stop/enable/disable services, so you should remember how it’s done

(e) Testing the DNS server on Linux
Step 1: Check system log
After starting named, check the end of the /var/log/messages file (e.g. with the tail command) for errors.
Specifically, look for a line that says “zone it.netserv.edu.au/IN” and look for the word “loaded”.
There may be some other errors about “network unreachable”. Don’t worry about these.
Step 2: Test server
If the startup was successful, run some test queries using the dig command, e.g.
Look up an A record: dig @localhost site.it.netserv.edu.au a (use with hostname)
Look up an SOA record: dig @localhost it.netserv.edu.au soa (use with domain name)
Look up an NS record: dig @localhost it.netserv.edu.au ns (use with domain name)
Look up “any” records: dig @localhost site.it.netserv.edu.au any (use with host or domain)
Make sure you check the “ANSWER SECTION” of the dig output. If the answer section is empty, then your query
returned no results! If this is the case, go back and check the log file for errors.
Now also reboot your machine and test that the DNS server starts up automatically. If not, you need to check the
settings you made with systemctl.
Note: You can also use the nslookup command like in task 1
Step 3: Add forwarding record
Note: You won’t be able to find the address of www.netserv.edu.au: This is because your default name server
will not forward requests anywhere else. You can change this by updating the /etc/named.conf file and adding
the following line to the options block:
forwarders {
10.0.2.2;
};
But this alone isn’t enough. DNSSEC (DNS security extensions) is enabled by default. This checks whether the
information from the forwarder has a digitally signed zone file to verify its authenticity. In our case, although we
could sign the zone file on Windows Server (DNS Manager  right-click on zone name  DNSSEC  Sign the
zone), that alone isn’t enough because the zone would be self-signed, plus there are additional “DS” records needed.
DNSSEC is an advanced topic that we won’t cover in this introductory subject, but is worth researching if you need
to configure DNS on an enterprise network.
So in the meantime, for our forward to work we need to disable our Linux bind server from checking DNSSEC data.
In the /etc/named.conf file, look for the following lines, and update “yes” to “no” as shown below:
dnssec-enable no;
dnssec-validation no;
Don’t forget to restart named!
And test!
And document in your journal!

## Task 3: Set up reverse lookup zone file
Earlier we set up a zone file for forward lookup, i.e. to map from hostnames into IP addresses. While that is the most
common need on the Internet, there are times when services need to perform a reverse lookup, i.e. given an IP address as
input, find out what hostname corresponds to that IP address.
Although you might think the DNS server could use the forward lookup information to answer these queries, it doesn’t. For
reverse lookups to work, you need to set up another zone file with the reverse lookup information. That is what we will do
now.
Reverse lookups are based on subnets, i.e. ranges of IP addresses. So in our case, we will configure the reverse lookup
information for the 10.0.2.0 subnet. There is a special DNS suffix of “in-addr.arpa”, which is used for reverse lookup
information. Also, the order of octets in the subnet address are reversed. So to set up a reverse lookup domain for the
10.0.2.0 subnet, we need to set up a DNS zone named “2.0.10.in-addr.arpa”. Note that this name is totally arbitrary,
but the aforementioned name illustrates the most commonly used convention.
(a) On Windows server
Step 1: Use the DNS manager to create a new Reverse Lookup Zone
Hint: Click on Reverse Lookup Zones  Action  New Zone  Primary  IPv4 Reverse Lookup Zone
Our network id is: 10.0.2 (do not add the trailing zero)
The wizard chooses the correct filename for us: 2.0.10.in-addr.arpa.dns
Make sure you update the correct SOA and NS entries (recall this should be ns. with IP address 10.0.2.2 ?)
Don’t forget to enable Zone Transfers to ANY servers in the Properties of this new zone!
Step 2: Create Pointer records
Create new PTR records as per our design, e.g.
Host IP address:: 10.0.2.2
Hostname: site
Step 3: Testing
We can now test it – try using nslookup again. We need to set the server and query type as before:
server 10.0.2.2 (use our local machine as the default server to test)
set type=PTR (only look up PTR records)
2.2.0.10.in-addr.arpa. (reverse lookup query ** note the trailing dot)
From Linux we can try: dig @10.0.2.2 –x 10.0.2.2
(b) On Linux server (optional)
Step 1: Create Zone file
First, edit /etc/named.conf and add an entry for the “2.0.10.in-addr.arpa” zone. The lecture notes give an
example of the paragraph to add.
Then create the zone file in the /var/named/ directory – easiest way is to copy named.localhost to the zone file.
Add the following entry:
2 IN PTR site.netserv.edu.au.
Note that the first entry on the line is the host’s address (i.e. “2” comes from the host part of 10.0.2.2). The record
type is “PTR”. The hostname on the right-hand side should match whatever hostname you used in your forward
lookup file (Task 1). Also note the “.” (dot) at the end of the line, to terminate the domain name. This is essential
whenever you use a fully qualified domain name (FQDN) in a zone file.
Hint: Don’t forget to change permissions (group ownership) on the zone file using chgrp!

Step 2: Restart named and test
Check your configuration using the named-checkconf and named-checkzone commands!
Restart your DNS server, e.g. systemctl restart named
Check the log file for errors, and test that your forward lookups still work. Then try a reverse lookup test, using dig,
e.g.
dig @localhost –x 10.0.2.2 (or whatever IP address you are using)
If successful, this should return the hostname that corresponds to the 10.0.2.2 address. Also test the reverse lookup
for your virtual machine’s IP address.
Task 4: Advanced task: setting up primary/secondary and caching DNS servers (OPTIONAL TASK, HARD)
You can now try to research on how to get the Windows and Linux DNS servers to cache responses and to act as
primary/secondary servers for each other.
Hints: Windows: You will be creating a Stub zone for it.netserv.edu.au; one problem you may encounter is the Linux DNS
server will need to allow “zone transfers.- you add the allow-transfer { 10.0.2.3; }; entry to the named.conf
file in the it.netserv.edu.au zone stanza.
Hints: Linux: You will be creating a “slave” zone. Again, Windows will need to allow “zone transfers” – do this via a Right
Mouse Button click on the zone (netserv) and Properties, then the Zone Transfer tab.
To test this, use Lab 6b to point your client to the windows server as a primary DNS, then the Linux server as the alternative.
Once this seems to work, stop the Windows DNS server.
After a short delay (couple of seconds), the client should enquire from the Linux server instead!