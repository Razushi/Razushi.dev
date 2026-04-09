Lab 6b: DNS client configuration
Aims
1. To configure a client to use our new DNS server
Background information
On a UNIX machine, the DNS client software is usually called a “resolver”. The configuration file for the resolver is
/etc/resolv.conf. There are two main keywords that we will look for in this file: “search” and “nameserver”.
The “search” keyword specifies a list of domain names to be searched when an unqualified hostname is used in a
lookup query. For example, if resolv.conf contained the line:
search it.uts.edu.au iwork.uts.edu.au uts.edu.au
and a user typed in “ping xyz”, then first the resolver library would try and find an IP address for
xyz.it.uts.edu.au. If unsuccessful, it would try to find an IP address for xyz.iwork.uts.edu.au. If
unsuccessful, it would try to find an IP address for xyz.uts.edu.au. If still unsuccessful, it would return a “host not
found” error to the user. There must be only one “search” line in the resolv.conf file.
The second keyword, which is the most important, is “nameserver”. This specifies the IP address of a name server
that this client should attempt to connect to. There can be many “nameserver” lines in the resolv.conf file – one
for each nameserver you would like your machine to try. You should list the lines in the order you want the resolver to
try and contact each nameserver. Normally you would put your closest nameserver first. For example, if your
resolv.conf file contained the lines:
nameserver 138.25.9.1
nameserver 138.25.8.1
then the resolver would first try and use the name server at IP address 138.25.9.1. If that server was unavailable (e.g.
down, or unreachable), it would try 138.25.8.1 as a second preference.
However … because our system is using NetworkManager, it will overwrite the contents of resolv.conf with values
from the interface configuration files (/etc/sysconfig/network-scripts/ifcfg-*). So rather than editing
resolv.conf directly, we need to edit the interface configuration files and allow NetworkManager to populate
resolv.conf for us.

## Task 1: DNS client configuration on Linux
Step 1: Examine and understand existing resolv.conf
First examine your /etc/resolv.conf file and try and determine which network interface (ens33 or ens37) is
responsible for each entry. To test:
• First try disabling the ens33 interface, e.g. set ONBOOT=no in the /etc/sysconfig/network-
scripts/ifcfg-ens33 file and then restart NetworkManager (systemctl restart
NetworkManager). Then check the resolv.conf file again to see what entries are there.
• Repeat the process by disabling ens37 and enabling ens33 and restarting NetworkManager.
• Finish by re-enabling both interfaces (ONBOOT=yes in both files) for the next steps.

Step 2: Add new nameservers and search domains
Now try adding the following lines to the ifcfg-ens37 config file (change the IP address if yours is
different):
DNS1=10.0.2.3 # IP address of your Linux VM
DOMAIN=it.netserv.edu.au
Restart NetworkManager. Check /etc/resolv.conf. What has it done? Which nameserver will be searched
first?
Now put similar lines in the ifcfg-ens33 config file (change the IP address if yours is different):
DNS1=10.0.2.2 # IP address of your Windows VM
DOMAIN=netserv.edu.au
Restart NetworkManager. Check /etc/resolv.conf again. Note the changes.
You’ve probably noticed that there are three nameserver lines rather than just two. Where is the third coming
from? (Hint: DHCP. But which DHCP server?).
Step 3: Ignore DHCP nameservers on ens33 interface
Let’s tell NetworkManager to ignore the DNS server provided by DHCP (note: you normally probably
wouldn’t want to do this unless you have a particular reason). Run the command:
nmcli conn modify ens33 ipv4.ignore-auto-dns true
Here we are using the NetworkManager client utility (nmcli), to modify a connection (conn). To see all the
settings you can modify on connections, type: man nm-settings or view any nm-settings webpage which
will probably be easier to read, e.g. https://people.freedesktop.org/~lkundrak/nm-docs/nm-settings.html
Look inside the ifcfg-ens33 config file again. What new line has the command above just added (or perhaps
changed)? Note this in your journal. In case you missed it, you can always re-run the above command with
“false” at the end instead of “true” to change it back. But we want it to be set to true for now.
Note: we could have just added the line to the ifcfg-ens33 config file ourselves. We
didn’t really need to use the nmcli command. It was just an exercise to demonstrate
that there are usually multiple ways to do things in Linux!
Now, having set ipv4.ignore-auto-dns to true (PEERDNS=no), and restarted NetworkManager, look
again in /etc/resolv.conf. What has this done? There should now be only two nameserver entries, and the
one set by DHCP should be gone.
Step 4: Change the order of nameservers / search domains
The order of search domains and nameservers in the resolv.conf is determined by NetworkManager. It has
some default priority rules, and if the interfaces have the same priority they are just added in order.
But what if we want to change the order? E.g. what if we want the ens37 nameserver to be searched first? We
need to change the priority.
Run the following command:
nmcli conn modify ens37 ipv4.dns-priority 5
The default priority for normal connections is 100 (see the nm-settings man page again, in the dns-priority
section).
Check what new line has been added to the ifcfg-ens37 config file. Restart NetworkManager. Check
/etc/resolv.conf

Step 5: Run DNS queries
We want our DNS queries by default to go to the Linux server first. So using the above steps, make sure your
/etc/resolv.conf is configured this way – with the first nameserver entry showing the IP address of your
Linux VM, and the search domain having “it.netserv.edu.au” as the first entry.
To test, try the dig command without using the @localhost statement, e.g.
dig www.it.netserv.edu.au A
Replace “www.netserv.edu.au” with your own hostname if you used something other than netserv.edu.au when
you set up your Linux DNS server. Check that the “ANSWER SECTION” contains the correct IP address for
the hostname you searched for.
Also test by using the ping command, e.g.
ping www.it.netserv.edu.au
The ping command will automatically call on the resolver library to map the supplied hostname into an IP
address. Check that it resolves to the correct IP address.
Now try both dig and ping to get the IP address of www.netserv.edu.au (i.e. the hostname of the Windows
server). You shouldn’t need to change your DNS resolver settings. Your machine should still query the DNS
on your Linux machine, but the “forwarders” rule will pass it on to the Windows DNS server to answer the
query.

## Task 2: DNS client setup on windows
Step 1: Set DNS servers in Windows
On Windows Server you can override the DNS settings by opening up the Network Connections panel
Server manager → Local Server → Ethernet1 → View Network Connections panel
Then right-click on the “Ethernet1” adapter and choose Properties → Internet Protocol version 4 (TCP/IPv4)
→ Properties.
You should get the IPv4 Properties panel – this should be static and you can override the “Preferred DNS
server” address with your DNS server (in our case 10.0.2.2 or you could use localhost: 127.0.0.1).
Test that this works correctly using nslookup and ping on Windows (Command Prompt or PowerShell).
Step 2: Check the order of DNS servers used by Windows Server
We just set the DNS server on the Ethernet1 interface. But there could also be a DNS server on the Ethernet0
interface, set by DHCP, like there was in Linux. We have the same issue as Linux – we may need to specify a
priority order as to which interface’s DNS server(s) takes priority.
In Windows this is done by setting an interface metric on each interface, indicating its priority.
We can use PowerShell as an easier way to view all network parameters together. Open Windows PowerShell
and run the following command:
Get-NetIPInterface
First check the AddressFamily column to only look at IPv4 interfaces. Then check the InterfaceMetric to see
the default metric. Ethernet0 and Ethernet1 probably have the same metric. So then if you check the ifIndex
you will see the interface index order which is most likely the order of priority of the interfaces.
You can verify the DNS server search order with the following PowerShell command:
Get-DNSClientServerAddress
Most likely you will find that the DNS server configured on Ethernet0 has priority over the DNS server
configured on Ethernet1. Let’s change that.

Step 3: Change the order of DNS servers used by Windows Server by changing the interface metric
Go back into the IPv4 properties of Ethernet1, through the Network Connects panel, as before:
Server manager → Local Server → Ethernet1 → View Network Connections panel
Then right-click on the “Ethernet1” adapter and choose Properties → Internet Protocol version 4 (TCP/IPv4)
→ Properties.
But this time, click the “Advanced” button underneath the DNS server address configuration. In the Advanced
settings panel, under the IP settings you should find a checkbox labelled “Automatic metric”.
Uncheck “Automatic metric” and then enter your own metric – a lower number than the default metric you
saw before, e.g. 10. A lower metric means it has higher priority.
Close the panels to save the changes.
Use the PowerShell commands again to look at changes to the interface metric and DNS server search order:
Get-NetIPInterface
Get-DNSClientServerAddress
Note what has changed in your journal. In case nothing has changed, you might need to disable and re-enable
the Ethernet1 interface from the Network Connections panel.
Again test DNS lookups using nslookup and ping on Windows (Command Prompt or PowerShell).