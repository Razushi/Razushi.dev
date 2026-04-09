## Some Facts- Who uses a VPN?
• 1.6 billion people, or 31% of total  
Internet users, browse with VPN. That’s  
about 20% of the world's population.

The virtual private network (VPN) sector has expanded  
quickly in recent years. It will increase from $61.42 billion  
in 2024 to $71.66 billion in 2025, with a compound annual  
growth rate (CAGR) of 16.7%.
https://www.g2.com/articles/vpn-statistics
https://www.thebusinessresearchcompany.com/report/virtual-private-network-global-market-report

## The Rise of VPN Usage in Australia  
• According to auDA 2024 report, 27% of Australian consumers and 36% of small  
businesses use VPNs. These high adoption rates suggest Aussies trust VPNs as  
actionable safety blankets from online threats.  
• In 2023, the VPN market in Australia generated US$1.099 billion. While this only  
represents for 1.7% of the worldwide market, research predicts it will expand 8%  
(CAGR) to 1.981 billion by 2030. This figure shows that, in addition to relying on  
digital services, more Australians will utilize VPNs to preserve their privacy.
https://www.redsearch.com.au/resources/vpn-statistics-australia/

## IP Network Security Issues
• Main security issues in IP Networks
– Eavesdropping
– Modification of packets in transit
– Spoofing (using forged source IP address)
• Above actions result in
– Man-in-the-middle attack
– Denial of Service attack
• Hence, need for secured IP layer solution; What we learnt so far?
– SSL/TLS for secured web transactions using the transport layer
– S/MIME for secured email
– SSH for secured remote login
• IpSec provides open standards for secure communications over IP layer
– Protect every protocol running on top of IPv4 and IPv6
– Includes authentication, integrity, and encryption
– Security in IpSec is provided through the establishment of VPN tunnel

## How VPN works?
• VPN allows users to create a secure, private network over public
network such as the Internet
• This is achieved through
Ø Having a designated host (VPN server) on the network which monitors each
connection request
Ø Outside computers need to go through the VPN server to reach the hosts
inside a private network via authentication
Ø VPN server exposed to the outside and the internal computers are still
protected, via firewalls or reserved IP addresses

## VPN setup

User machines (right) want to connect with
machines that are located within a private
network (Internal network). All requests (both
authorized and Unauthorized) pass-through
“VPN Gateway” to get authenticated to the
private network.

![](99%20-%20Assets/2025/2025-05-26-14-05-00-1.png)


## Two Types of IP Tunneling

IPSec Tunneling

![](99%20-%20Assets/2025/2025-05-26-14-05-47.png)

TLS/SSL Tunneling

![](99%20-%20Assets/2025/2025-05-26-14-05-68.png)

## IPsec Security Services
• Role of ESP and AH:
– Both provides Authentication and Integrity
§ Connectionless integrity (for a single packet)
§ Partial sequence integrity (prevent packet replay)
• ESP:
– Confidentiality (encapsulation) for packet contents
– Supports AES
– Authentication and encapsulation can be used separately or together; However,
encryption without authentication is not secured
• Both ESP and AH are provided in Transport or Tunnel mode
• These services are transparent to applications above transport
(TCP/UDP/SCTP) layer

## IPsec in Transport Mode

• End-to-end security between two hosts
• Provide a secure channel across insecure networks
• Both hosts need IPsec installed and configured
![](99%20-%20Assets/2025/2025-05-26-14-05-14.png)

• Gateway-to-Gateway security
– Internal traffic inside gateway is not protected (dotted)
– Virtual private network (VPN) across insecure Internet
• Hosts do not need IPsec
• Gateways are edge routers configured with IPsec

![](99%20-%20Assets/2025/2025-05-26-14-05-13.png)
## Transport Mode vs. Tunnel Mode
• Transport mode
– Primarily protects packet payload
– Uses original IP header

IP Header (original) | Ipsec Header | TCP/UDP header + data

Tunnel mode
Encapsulates both IP header and payload into IPsec payload
IP (by IPsec header) | IPsec header | IP header (original) | TCP/UDP header + data

## Security Association (SA)

• SA specifies how packets are protected and involves
– Cryptographic algorithms, keys, IVs, and lifetimes (duration)
– Sequence numbers
– Mode (transport or tunnel)
• One-way relationship between a pair of sender and recipient
– Two SAs required for two-way communication
• Each SA is uniquely identified by SPI (Security Parameters Index)
– Each IPsec host keeps a database of SAs indexed by SPI
– SPI is sent with a packet so that the recipient uses the SA to validate and extract
information

## Encapsulating Security Payload (ESP)
• Adds new header and trailer fields to every packet
• Transport mode
– Confidentiality of packets between
• Two hosts
• A host and a gateway
– Firewalls, and IDS/IPS in the path must be configured to permit the encrypted flow of
ESP packets
• Tunnel mode
– Confidentiality of packets between
• Two gateways
• A host and a gateway
– Implements VPN tunnels

## Use of ESP Security in IPv4
• Both Confidentiality and integrity for packet payload
– Symmetric cipher is negotiated as part of SA during IKE
• Transport mode

![](99%20-%20Assets/2025/2025-05-26-14-05-84.png)

• Tunnel mode
![](99%20-%20Assets/2025/2025-05-26-14-05-85-1.png)

## ESP Security in IPv6

• Both Confidentiality and integrity for packet payload
– Symmetric cipher is negotiated as part of SA during IKE
• Transport mode
![](99%20-%20Assets/2025/2025-05-26-14-05-13-1.png)

• Tunnel mode
![](99%20-%20Assets/2025/2025-05-26-14-05-88.png)
## ESP Packet format
![](99%20-%20Assets/2025/2025-05-26-14-05-60.png)

## Authentication Header Format
• Send authentication using HMAC
• Sender and receiver share a secret key used in HMAC computation
• Authenticates portions of the IP header using HMAC
– Immutable and predicable fields
• Shared key in HMAC provides the origin authentication
• Anti-replay service (optional)
• No confidentiality protection

![](99%20-%20Assets/2025/2025-05-26-14-05-40-1.png)

## Key Management in IPSec

• Manual key management
– Keys and parameters of crypto algorithms exchanged offline
(e.g., by phone or face-to-face)
– Security associations established by hand

• Pre-shared symmetric keys
§New session key is derived for each session by hashing pre-
shared key with fresh nonces
§Standard symmetric-key authentication and encryption

• Online key establishment
§ Internet Key Exchange (IKE) protocol
§ Use Diffie-Hellman to derive shared symmetric key

## Understanding VPN Security Vulnerabilities

• Outdated VPN protocols
– Point to Point tunneling protocol (PPTP) has severe security risks and hence should
not be used
– Layer 2 Tunneling protocol (L2TP) is susceptible to brute-force attack, packet
sniffing and DoS attacks
• More secure protocols such as OpenVPN and WireGuard should be used
• One must keep VPN software and hardware up to date with latest security
patches and updates
• Choose VPN service provider who are trustworthy
• Use strong and unique passwords for client and server software
• Use Multi Factor Authentication (MFA)

https://www.canberratimes.com.au/story/8581443/7-surprising-stats-revealing-australias-vpn-surge/

## Firewall
• Most firewalls are resistant to cyberattacks and are considered only transit
point between different networks
– Primarily protect attacks originating from the outside
– Separate trusted and untrusted components of a network
• Firewalls enforce access control policy (filtering data, redirecting traffic)
• Isolate organization’s internal network from Public Internet Firewall
• Best practices For security include:
– Position firewalls at security boundaries
– Do not rely exclusively on a firewall for security
– Deny all traffic by default and Permit only services that are needed
– Ensure that physical access to the firewall is controlled
– Monitor firewall logs regularly
– Practice change management for firewall configuration changes

## How firewalls work
![](99%20-%20Assets/2025/2025-05-26-14-05-68-1.png)

https://www.cloud4y.ru/en/blog/firewall-what-it-is-and-how-it-works%2520/

## Firewall Limitations

• Cannot protect from attacks bypassing it
– Eg. sneaker net, utility modems, trusted organisations, trusted services (eg SSL/SSH)
• Cannot protect against internal threats
– Eg. disgruntled or colluding employees
• Cannot protect against access via WLAN
– if improperly secured against external use
• Cannot protect against malware imported via laptop, PDA, storage infected
outside
• Firewall itself must be immune to penetration, which implies using a hardened
system with secured Operating Systems

## Firewall Access Policy

• Critical component of a firewall is what suitable access policy should be
added
§This lists the types of traffic authorized to pass through the firewall
§Includes address ranges, protocols, applications and content types
• Firewall policy should be developed from the organization’s
information security risk assessment and policy
• Should be developed from a broad specification of which traffic types
the organization needs to support
§Then refined to detail the filter elements which can then be implemented within
an appropriate firewall topology

## Firewall actions
• Accepted: Allowed to enter the connected network/host through the firewall.
• Denied: Not permitted to enter other side of firewall.
• Rejected: Similar to “Denied” but tells the source about this decision through
ICMP packet.
• Based on filter rules
Ingress filtering: Inspects the incoming traffic to safeguard an internal
network. Hence, prevent attacks from outside.
Egress filtering: Inspects the outgoing network traffic and prevent the
users in the internal network to reach out to the outside network.
For example, blocking social networking sites in school

## Types of filters
Depending on the mode of operation, there are three types
of firewalls :
- Packet Filter Firewall
- Stateful Firewall
- Application/Proxy Firewall

## Packet Filter Firewall
● Controls traffic based on the information in packet headers, without looking into the payload
that contains application data.
● Doesn’t pay attention to if the packet is part of existing stream or traffic.
● Doesn’t maintain the states about packets. Also called Stateless Firewall.

![](99%20-%20Assets/2025/2025-05-26-14-05-61.png)

https://www.geeksforgeeks.org/types-of-firewall-and-possible-attacks/

## Packet Filtering Example
• Advantages
§ Simplicity
§ Typically, transparent to users and are very fast (less computation)
• Weaknesses
§ Cannot prevent attacks that employ application specific vulnerabilities or
functions
§ Limited logging functionality
§ Do not support advanced user authentication
§ Vulnerable to attacks on TCP/IP protocol bugs
§ Improper configuration can lead to breaches

| Rule | Direction | Src address | Dest address | Protocol | Dest port | Action |
|------|-----------|-------------|---------------|----------|-----------|--------|
| 1    | In        | External    | Internal      | TCP      | 25        | Permit |
| 2    | Out       | Internal    | External      | TCP      | >1023     | Permit |
| 3    | Out       | Internal    | External      | TCP      | 25        | Permit |
| 4    | In        | External    | Internal      | TCP      | >1023     | Permit |
| 5    | Either    | Any         | Any           | Any      | Any       | Deny   |

## Attacks on Packet Filters

IP address spoofing:
• Attacker may use fake source address
• May add filter on router to block

Source routing attacks:
• Attacker could set a route other than
default
• May block source routed packets

Tiny fragment attacks:
• Split header info over several tiny packets
• Either discard or reassemble before check

## Stateful Firewall

● Tracks the state of traffic by monitoring all the connection interactions until closed.
● Connection state table is maintained to understand the context of packets.
● Example : Connections are only allowed through the ports that hold open connections.

![](99%20-%20Assets/2025/2025-05-26-15-05-40.png)

| Source Address   | Source Port | Destination Address | Destination Port | Connection State |
|------------------|-------------|----------------------|------------------|------------------|
| 192.168.1.100    | 1030        | 210.9.88.29          | 80               | Established      |
| 192.168.1.102    | 1031        | 216.32.42.123        | 80               | Established      |
| 192.168.1.101    | 1033        | 173.66.32.122        | 25               | Established      |
| 192.168.1.106    | 1035        | 177.231.32.12        | 79               | Established      |
| 223.43.21.231    | 1990        | 192.168.1.6          | 80               | Established      |
| 219.22.123.32    | 2112        | 192.168.1.6          | 80               | Established      |
| 210.99.212.18    | 3321        | 192.168.1.6          | 80               | Established      |
| 24.102.32.23     | 1025        | 192.168.1.6          | 80               | Established      |
| 223.21.22.12     | 1046        | 192.168.1.6          | 80               | Established      |

| Benefits                               | Limitations                                     |
|----------------------------------------|-------------------------------------------------|
| Primary means of defense               | No Application Layer inspection                 |
| Strong packet filtering                | Cannot filter stateless protocols               |
| Improved performance over packet filters | Difficult to defend against dynamic port negotiation |
| Defends against spoofing and DoS attacks | No authentication support                      |
| Richer data log                        |                                                 |

## Application/Proxy Firewall
● Controls input, output and access from/to an application or service.
● Acts as an intermediary by impersonating the intended recipient.
● The client’s connection terminates at the proxy and a separate connection is
initiated from the proxy to the destination host.
● Data on the connection is analysed up to the application layer to determine if
the packet should be allowed or rejected.

![](99%20-%20Assets/2025/2025-05-26-15-05-06.png)

## Proxy functions
• Acts as a relay for application-level traffic
§ User contacts gateway using a TCP/IP application
§ User is authenticated
§ Gateway contacts application on remote host and relays TCP segments between server and user
• Requirements:
§ Must have proxy code for each application
§ May restrict supported features of applications
• Tend to be more secure than packet filters
• Disadvantage is the additional processing overhead on each connection

## Building a Firewall using Net filter
Packet filter firewall implementation in Linux
● Packet filtering can be done inside the kernel
● Need changes in the kernel
● Linux provides two mechanisms to achieve this :
○ Netfilter: Provides hooks at critical points on the packet traversal path inside Linux
Kernel
○ Loadable Kernel Modules: Allow privileged users to dynamically add/remove modules
to the kernel, so there is no need to recompile the entire kernel.

## Netfilter
● Netfilter hooks are rich packet processing and filtering framework.
● Each protocol stack defines a series of hooks along the packet’s traversal path in
the stack.
● Developers can use LKMs to register callback functions to these hooks.
● When a packet arrives at each of these hooks, the protocol stack calls the netfilter
framework with the packet and hook number.
● Netfilter checks if any kernel module has registered a callback function at this
hook.
● Each registered module will be called, and they are free to analyze or manipulate
the packet and return the verdict on the packet.

## Loadable Kernel Modules
![](99%20-%20Assets/2025/2025-05-26-15-05-08.png)

## Step 1: Compiling Kernel Modules

![](99%20-%20Assets/2025/2025-05-26-15-05-12.png)

## Step 2: Installing Kernel Modules

![](99%20-%20Assets/2025/2025-05-26-15-05-73.png)

## Iptables Firewall in Linux

● Iptables is a built-in firewall based on netfilter.
● Kernel part: Xtables
● User-space program: iptables
● Usually, iptables refer to both kernel and user space programs.
● Rules are arranged in hierarchical structure as shown in the table

| Table  | Chain                                        | Functionality                                  |
|--------|----------------------------------------------|------------------------------------------------|
| filter | INPUT, FORWARD, OUTPUT                      | Packet filtering                               |
| nat    | PREROUTING, INPUT, OUTPUT, POSTROUTING      | Modifying source or destination network addresses |
| mangle | PREROUTING, INPUT, FORWARD, OUTPUT, POSTROUTING | Packet content modification                    |

## Iptables Firewall - Structure
● Each table contains several chains, each of which corresponds to a netfilter
hook.
● Each chain indicates where its rules are enforced.
§ Example : Rules on FORWARD chain are enforced at NF_IP_FORWARD hook and rules on INPUT
chain are enforced at NF_IP_LOCAL_IN hook.
● Each chain contains a set of firewall rules that will be enforced.
● User can add rules to the chains.
§ Example : To block all incoming telnet traffic, add a rule to the INPUT chain of the filter table

## Traversing Chains and Rule Matching

1 - Decides if the final destination of the packet is the local machine
3 - Packet traverses through INPUT chains
4 - Packet traverses through FORWARD chains
2 - Decides from which of the network interface to send out outgoing
packets
As a packet traverses through each chain, rules on the chain are examined
to see whether there is a match or not. If there is a match, the
corresponding target action is executed: ACCEPT, DROP or jumping to user-
defined chain.

![](99%20-%20Assets/2025/2025-05-26-15-05-58.png)

## Iptables Extension

Iptables functions can be extended using modules also called as extensions.
Two Examples:
Conntrack:
To specify rules based on connections to build stateful firewalls.
Owner:
To specify rules based on user ids. Ex: To prevent user Alice from sending out
telnet packets. Owner module can match packets based on the user/group id
of the process that created them. This works only for OUTPUT chain
(outgoing packets) as it is impossible to find the user ids for INPUT
chain(incoming packets).

## Stateful Firewall using Connection Tracking
● A stateful firewall monitors incoming and outgoing packets over a period of time.
● Records attributes like IP address, port numbers, sequence numbers. Collectively
known as connection states

![](99%20-%20Assets/2025/2025-05-26-15-05-42.png)

• A connection state, in context of a firewall signifies whether a given packet is a part of an
existing flow or not.
• Hence, it is applied to both connection-oriented (TCP) and connectionless protocols
(UDP and ICMP).

## Connection Tracking Framework in Linux

● nf_conntrack is a connection tracking framework in Linux kernel built on the top
of netfilter.
● Each incoming packet is marked with a connection state as described:
§ NEW: The connection is starting and packet is a part of a valid sequence. It only exists for a
connection if the firewall has only seen traffic in one direction.
§ ESTABLISHED: The connection has been established and is a two-way communication.
§ RELATED: Special state that helps to establish relationships among different connections. E.g.,
FTP Control traffic and FTP Data traffic are related.
§ INVALID : This state is used for packets that do not follow the expected behavior of a
connection.
● iptables can use nf_conntrack to build stateful firewall rules.

## Application/Proxy Firewall and Web Proxy
● Inspects network traffic up to the application layer.
● Typical implementation of an application firewall is a proxy (application proxy)
● Web proxy: To control what browsers can access.
● To set up a web proxy in a network, we need to ensure that all the web traffic
goes through the proxy server by:
§ Configuring each host computer to redirect all the web traffic to the proxy.
(Browser’s network settings or using iptables)
§ Place web proxies on a network bridge that connects internal and external
networks.

## Application/Proxy Firewall and Web Proxy-Cont
● Proxy can also be used to evade egress filtering.
§ If a firewall conducts packet filtering based on destination address, we can
evade this firewall by browsing the Internet using web proxy.
§ The destination address will be modified to the proxy server which defeats
the packet filtering rules of the firewall.
● Anonymizing Proxy: One can also use proxies to hide the origin of a network
request from servers. As the servers can only see the traffic after it passes
through proxies, source IP will be the proxy’s and actual origin is hidden.

## How Attackers could evade Firewalls?
SSH tunneling -> Dynamic Port Forwarding -> Virtual Private Network

## SSH Tunnelling to Evade Firewalls
● Establish a ssh tunnel between “home” and “Apollo”.
● On the “home” end, the tunnel receives TCP packets from the telnet client.
49
● It forwards the TCP data to “Apollo” end, from where the data is out in another TCP
packet which is sent to machine “work”.
● The firewall can only see the traffic between “home” and “Apollo” and not from “Apollo”
to “work”. Also ssh traffic is encrypted.

![](99%20-%20Assets/2025/2025-05-26-15-05-31.png)

SSH Tunnelling to Evade Firewalls
Scenario :We are working in a company and working on a machine called
“work”. We would like to visit Facebook, but the company has blocked it to
prevent employees from getting distracted. We use an outside machine
“home” to bypass such a firewall. How can we bypass it?
`$ ssh -L 8000:www.facebook.com:80 home`

● We establish an ssh tunnel from “work” to “home”.
● After establishing the tunnel, we can type “localhost:8000” in our browser.
● The tunnel will forward our HTTP requests to Facebook via home.
● The firewall can only see the ssh traffic between “work” and “home” and not the
actual web traffic between “work” and “Facebook”.

## Dynamic Port Forwarding
`$ ssh -D 9000 -C home`
● This command establishes an ssh tunnel between localhost (port 9000) and the
machine “home”. Here we do not specify the destination for the port forwarding.
● So, we configure the browser in such a way that all the requests should go through
localhost:9000, treating it as a proxy.
● Dynamic port forwarding that we set up using ssh is a SOCKS proxy.
● Once the browser is configured, we can type URL of any blocked site which will
connect to ssh proxy at port 9000 on the localhost.
● ssh will send the TCP data over the tunnel to the machine “home” which will
communicate with the blocked site.

• The client software must
have a native SOCKS support
to use SOCKS proxies.

![](99%20-%20Assets/2025/2025-05-26-15-05-98.png)

## SOCKS Circuit-Level Gateway
• SOCKS v5 defined in RFC1928
• Designed to provide a framework for client-server
applications in TCP/UDP domains to conveniently
and securely use the services of a network
firewall
• Client application contacts SOCKS server,
authenticates, sends relay request
- Server evaluates and either establishes or denies the
connection

![](99%20-%20Assets/2025/2025-05-26-15-05-69.png)

## Bastion Hosts
• System identified as a critical strong point in the network’s security
• Serves as a platform for an application-level or circuit-level gateway
• Common characteristics:
• Runs secure O/S, only essential services
• May require user authentication to access proxy or host
• Each proxy can restrict features, hosts accessed
• Each proxy is small, simple, checked for security
• Each proxy is independent, non-privileged
• Limited disk use, hence read-only code

## Host-Based Firewalls
• Used to secure an individual host
• Available in operating systems or can be provided as an add-on package
• Filter and restrict packet flows
• Common location is a server

Advantages:
• Filtering rules can be tailored to the host environment
• Protection is provided independent of topology
• Provides an additional layer of protection

## Personal Firewall
• Controls traffic between a personal computer or workstation and the Internet or
enterprise network
• For both home or corporate use
• Typically, is a software module on a personal computer
• Can be housed in a router that connects all of the home computers to a DSL,
cable modem, or other Internet interface
• Typically, much less complex than server-based or stand-alone firewalls
• Primary role is to deny unauthorized remote access
• May also monitor outgoing traffic to detect and block worms and malware activity

![](99%20-%20Assets/2025/2025-05-26-15-05-38.png)

## Firewall Topologies
Host-resident firewall
• Includes personal firewall software and firewall
software on servers

Screening router
• Single router between internal and external networks
with stateless or full packet filtering

Single bastion inline
• Single firewall device between an internal and external
router

Single bastion T
• Has a third network interface on bastion to a DMZ
where externally visible servers are placed

Double bastion T
• DMZ is sandwiched between bastion firewallsDouble bastion inline
• DMZ is on a separate network interface on the bastion
firewall

Distributed firewall configuration
• Used by large businesses and government organizations

## Distributed Firewalls

![](99%20-%20Assets/2025/2025-05-26-15-05-58-1.png)

## Comparing Firewalls

|                    | Security | Computation | UDP/ICMP capability     |
|--------------------|----------|-------------|--------------------------|
| Stateless Filter   | 3        | 1           | Yes                      |
| Stateful Filter    | 2        | 2           | Yes                      |
| Circuit-level      | 2        | 3           | Yes (SOCKS v5)           |
| Application-level  | 1        | 4           | Application dependent    |
1 is the best for security or performance

## Next Generation Firewalls
• Granular identification, visibility, and control of behaviors within applications
• Restricting web and web application use based on the reputation of the site
• Proactive protection against Internet threats
• Enforcement of policies based on the user, device, role, application type, and
threat profile
• Performance of NAT, VPN, and SPI
• Use of an IPS