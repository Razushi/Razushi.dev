# Transport Layer Security (SSL/TLS, TCP/IP) and DoS attack

Preparatory Questions:  
1. How are session keys derived using TLS/SSL?  
2. Identify the categories of attack which may be launched against TLS/SSL protocol  
functions.  
3. Describe what occurs during a version roll-back attack?  
4. What additional functionalities are added to DTLS in comparison with TLS? Name  
few applications where DTLS is applied.  
5. Explain different attacks TCP may encounter and list some of the counter measures.

## Protocol Background
N/A, SSL 1.0, Netscape, Never went public
1995, SSL 2.0, Netscape, Lots of Security Flaws
1996, SSL 3.0, Netscape, Complete Redesign
1999, TLS 1.0, IETF / RFC 2246, Close to SSL 3.0
2000, TLS 1.1, IETF / RFC 4346, Improved protection against attacks 
2008, TLS 1.2, IETF, RFC 5246, Improve Security, Support Extensions, Add new Cipher Suites
2018, TLS 1.3, IETF, RFC 8446, Improve security, drop unsecure features, add new cipher suites.

## Why SSL/TLS certificate Matters

302,068,343 SSL Certificates Detected on the Internet

• The number of SSL certificates on the Internet has surged to  
over 302 million as of January 04, 2025.  
• United States holds the most SSL certificates of nations  
worldwide, totalling approximately 27 million.  
• Germany stands second globally, with over 12 million  
certificates.  
• At the other hand, Eritrea has only 45 SSL certificates across  
the whole nation.

https://sslinsights.com/ssl-certificates-statistics/  

## Why SSL/TLS certificate Matters
According to market research, the certificate authority sector is expected to grow rapidly in the future. By  
2028, the global market is anticipated to have grown from $167 million in 2023 to $282 million. Over the  
duration of the five-year projected period, this converts to a compound annual growth rate of 11%.

## Why SSL/TLS certificate Matters

• According to a research by W3Techs,  
85.4% of websites now use HTTPS, up  
from 18.5% five years ago. This  
demonstrates great progress in using  
encryption to secure connections.  
• Although the vast majority of sites employ  
HTTPS, the remaining 14.6% still amounts  
to millions of websites that lack  
encryption.  

• 62.1% of Sites Support the Latest TLS 1.3 Protocol  
• Secure Sockets Layer (SSL) Certification Global Market to Reach $16.5 Billion by 2030

## Overview of TLS  
• TLS is also known as Secure Sockets Layer (SSLv3.0)  
• Transport Layer Security (TLS) is a protocol that provides secure channel between two  
communicating applications.  
• The secure channel has 3 properties:  
• Confidentiality: Data (message) Confidentiality by symmetric encryption (AES/RC4)  
• Integrity: Data integrity by MAC (Message Authentication Code)  
• Authentication: Client/Server authentication using digital signature

## Protocols That Use TLS

- HTTPS
- SMTPS
- POP3S
- IMAPS
- FTPS
- SIPS

https://www.hhs.gov/sites/default/files/securing-ssl-tls-in-healthcare-tlpwhite.pdf

TLS Layer  
§ Unprotected data is given to TLS by the  
Application layer  
§ TLS handles encryption, decryption,  
and integrity checks  
§ TLS supports protected data (with the  
above functions implemented) to the  
Transport layer

Application (HTTPS) -> Session (TLS) -> Transport (TCP) -> Network (IP) -> Datalink -> Physical

https://www.wallarm.com/what/what-is-transport-layer-security

## Step-1:TLS Handshake

Client -> Server (SYN)
Server <- Client (SYN/ACK)
Client -> Server (ACK)
Client <-> Server (Established

Client -> Server (CLIENT HELLO) SSL protocol version, session ID, list of cipher suites, CLIENT HELLO extentions.

Client <- Server (SERVER HELLO) SSL protocol version, session ID, selected cipher, server certificate, SERVER HELLO extentions, Client certificate request (Optional)

Client -> Server (PRE MASTER SECRET) +  Client cert (if requested)

Client <-> Server (SESSION KEY CREATION) Server authenticates the client (optional)

*Master secret is used to generate Symmetric session keys*

Client -> Server (CLIENT FINISHED)
Client <- Server (SERVER FINISHED)
Client <-> SERVER (EXCHANGE MESSAGES)

## Network Traffics During TLS Handshake  
• Since TLS runs on top of TCP, a TCP connection needs to be established  
before functions in the handshake protocol are initiated  
• Snippets on packet exchange captured using Wireshark:

SYN
SYN ACK
ACK
CLIENT HELLO
SERVER HELLO, CERTIFICATE, SERVER HELLO DONE
CLIENT KEY EXCHANGE, CHANGE CIPHER SPEC, FINISHED
NEW SESSION TICKET, CHANGE CIPHER SPEC, FINISHED

## Certificate Verification and Key exchange  
• The client first does a validation check of the certificate  
§ Check expiration date, signature validity, etc.  
§ Hostname and certificate’s common name match  
• The client needs to have the signing capability for CA’s public-key certificate  
• Key Generation and Exchange  
• Public-key algorithms to encrypt data but, more expensive than secret-key algorithms. Hence,  
§ TLS uses PKI for key exchange  
§ After that, server and client switch to secret-key encryption algorithm  
• The entire key generation consists of three steps:  
§ Step 1: Generating pre-master secret (46 byte)  
§ Step 2: Generating master secret (48 byte)  
§ Step 3: Generating session keys (Varies depending on algorithm used)

## Key Generation and Exchange

### Phase 1: Master Secret Generation
Inputs: client_random, server_random, pre_master_secret  
→ Apply PRF (pseudorandom function)  
→ Output: master_secret (48 bytes)

### Phase 2: Master Secret Expansion
Inputs: master_secret, client_random, server_random  
→ Expand into a block of 128 bytes  
→ First 32 bytes: client_write_MAC_key  
→ Next 32 bytes: server_write_MAC_key  
→ Next 32 bytes: client_write_key  
→ Last 32 bytes: server_write_key

### Usage
These 4 keys are used to protect SSL/TLS communication with AES_256_CBC_SHA

## Step-2:TLS Data Transmission  
• Once the handshake protocol is finished, client and server can start  
exchanging data  
• Data is transferred using records (Record Protocol)  
• Each record contains a header and a payload

## TLS Record Protocol: Sending and Receiving

### Sending Path (SSL_write)

Application Layer → get data from application  
→ fragment data into blocks  
→ optionally compress block  
→ add MAC and padding to compressed block  
→ encrypt the result  
→ add TLS header  
→ send over TCP as: TLS Header + Encrypted Data

### Receiving Path (SSL_read)

TCP Buffer receives: TLS Record n, TLS Record n+1, ...  
→ for each record:  
→ decrypt  
→ check integrity  
→ decompress  
→ pass resulting plaintext data into TLS buffer  
→ buffer m bytes  
→ application reads m bytes via SSL_read

## Step-3: Previous session resumption or Duplicate an existing Session  
• When the client and server decide to resume a previous session or duplicate an existing  
session (instead of negotiating new security parameters) :  
• The client sends a client hello using the Session ID of the session to be resumed  
• The Server then checks its session cache for a match  
• If a match is found, and the server is willing to re-establish the connection under the specified session  
state, it will send a server hello with the same Session ID value  
• At this point, both client and server must send change cipher spec messages and  
proceed directly to finished messages  
• Once the re-establishment is complete, the client and server may begin to exchange  
application layer data  
• If a Session ID match is not found, the server generates a new session ID and the SSL  
client and server perform a full handshake

https://www.researchgate.net/publication/306187575_Are_wearable_devices_ready_for_HTTPS_Measuring_the_cost_of_secure_communication_protocols_on_wearable_devices

## Importance of Finished messages  
• Client immediately sends the Finished message under the new symmetric key cipher algorithms,  
keys, and secrets  
§ In response, the server will send its own change cipher spec message, transfer what is  
pending to the current Cipher Spec, and send its Finished message under the new Cipher  
Spec  
• A Finished message is always sent immediately after a change cipher specs message to verify that  
the key exchange and authentication processes were successful  
• The finished message is the first thing protected with the just-negotiated symmetric-key  
algorithms, keys, and secrets  
§ No acknowledgment of the Finished message is required  
§ Both client and server may begin sending confidential data immediately after sending the Finished  
message  
§ Recipients of Finished messages must verify that the contents are correct using MAC  
• The hash contained in Finished messages is derived from the value in the handshake messages and includes all  
handshake messages starting at client hello up to, but not including, the finished messages

## Use of Session keys  
• 46-byte pre-master secret (PMS) generated by client and shared with server during  
Handshake  
• 48-byte master secret (MS) is derived from 46-byte PMS  
• Using hash function, the master secret (MS) is expanded into a sequence of secure  
bytes for  
§ A client write MAC key  
§ A server write MAC key  
§ A client write encryption key  
§ A server write encryption key  
§ A client write IV  
§ A server write IV  
• One encryption, one IV and one MAC key in each direction of transfer  
• SSL and TLS use different methods for hashing

# SSL/TLS Vulnerabilities
  
SSL/TLS Downgrade Attacks -> Beast -> Poodle -> Freak -> Heartbleed -> SSL Renegotiation -> Rollback -> Sweet32

A taxonomy of downgrade attacks in the TLS protocol and the application:

1. **Targeted Element**  
   - Algorithm  
   - Version  
   - Layer  

2. **Exploited Vulnerability**  
   - Implementation  
   - Design  
   - Trust-Model  

3. **Attack Method**  
   - Dropping  
   - Modification  
   - Injection  

4. **Resulting Damage**  
   - Weakened  
   - Broken  

## Browser Exploit Against SSL/TLS (BEAST)

Revealed in 2011 (CVE-2011-3389) as a cryptographic attack “Chosen plain text attack”  
• Vulnerability associated with CBC (cipher block chaining) and IV (Initialization Vector)  
§ Block cipher encrypts plain text in blocks using CBC  
§ IV is a random string which is XORed with plain text before encryption  
q Each block of plaintext is XORed with previous cipher text block before being encrypted  
(forming a chain of cipher block)  
§ IV is not a secret instead is used for generating randomness to the output  
§ IV is sent along with the message in clear text format

https://www.invicti.com/blog/web-security/how-the-beast-attack-works/

## BEAST attack- Example of BEAST attack

### High-Level Steps
1. Attacker injects a malicious applet into the victim's browser  
2. Victim sends crafted data over SSL to the target website  
3. Attacker sniffs encrypted traffic (MITM)  
4. Applet receives feedback from target via victim  
5. Applet sends updated crafted data based on feedback  
6. Attacker uses feedback and ciphertext analysis to derive the session cookie

https://www.wallarm.com/what/what-is-a-beast-attack

## How Attacker Carries Out SSL Beast as Man-in-the-Middle (MITM)

### Normal Encryption Flow
User → Plaintext  
→ XOR with Random IV  
→ Block Cipher Encryption with Key  
→ Ciphertext

### Attacker’s Exploit Path
Attacker obtains:
- Known IV from previous encrypted message
- Known ciphertext from prior session

Attacker:
→ XORs known IV with guessed plaintext  
→ Encrypts with same key  
→ Compares resulting ciphertext with intercepted ciphertext  
→ If match: guess is correct → cookie is recovered  

https://cheapsslsecurity.com/blog/types-of-man-in-the-middle-attacks/

## Man-in-the-Middle (MITM) attack (other forms)
SSL Renegotiation attack:  
SSL and TLS renegotiation are vulnerable to such attack (online shopping and user authentication)  
• Attacker blocks client’s initial request (TLS handshake)  
• Attacker initiates his own TLS session  
• Attacker injects contents of his choice during renegotiation  
• Blocked initial client request is forwarded to the server over previously  
established attacker’s TLS session  
• Server treats the client's initial TLS handshake as a renegotiation and believes that  
the initial data transmitted by the attacker is from the same entity as the  
subsequent client data  
Solution:  
• Disable renegotiation on server side  
• RFC 5746 mentions client and server to include and verify information about  
previous handshakes in any renegotiation handshakes

## Man-in-the-middle attack (2)

• The basic idea is to intercept Web traffic with a new tool called SSLstrip  
§ The tool switches the hyperlink reference (href) from HTTPS to HTTP and swaps the  
client to an insecure look-alike page  
q Attacker can even add a padlock icon to improve the client's comfort level  
q Client inputs username and password that are intercepted by the attacker due to http  
q Once attacker gets the credential from the client, SSLstrip can be set to drop out  
q The client is once again presented with an SSL-protected page after the damage is done  
§ The server thinks everything is secure, because it is unaware of the exchange between  
the attacker and the client, and the client gets no warning

## How Does SSL Prevent Man-In-The-Middle Attacks?

### Insecure Connection
- No TLS or obsolete TLS version
- Vulnerable to interception and tampering

### Risky Connection
- TLS with weak or misconfigured cipher suite
- Potentially exploitable even if TLS is present

### Secure Connection
- Strong, up-to-date TLS with validated certificates
- Prevents MITM by verifying identity and encrypting communication

https://certera.com/blog/common-ssl-tls-challenges-issues-attacks-to-exploits/

## Version Rollback Attack (No version check)
1. Client sends:  
   `SessionID`, `Version=3`, `CipherSuite_c`, `Nonce_c`

2. Attacker intercepts, downgrades version to SSL 2.0:  
   `Version=2`, `CipherSuite_s`, `Nonce_s`, `Certificate`, `ServerHelloDone`

3. Server responds using downgraded version

4. Client sends:  
   `ClientKeyExchange {PreMasterSecret}_PKs`

5. Result:  
   Client and server communicate over SSL 2.0 (a vulnerable protocol)

No version check on server → handshake is downgraded silently → attacker can exploit SSL 2.0 flaws

## POODLE (CVE-2014-3566)
• POODLE (Padding Oracle On Downgraded Legacy Encryption) attack happened in 2014  
§ Vulnerability within SSL 3.0 for interoperability and compatibility  
§ SSL 3.0 vulnerability with block padding  
§ Attacker forces the server to downgrade its connection to SSL 3.0 ( intercepting series of version  
requests from client)  
§ Once client and server have established vulnerable SSL 3.0 connection, attacker perform POODLE  
attack  
§ Problem with CBC padding; fixed length block cipher  
qIf data in last block is not a multiple of its size, padding to fill extra spaces  
qServer can not verify if padding has been modified  
Ø Only checks length and MAC  
• Defence against POODLE attack  
§ Disable fully SSL3.0  
§ Upgrade browser to latest version, https://tools.ietf.org/html/rfc7507  
§ https://www.acunetix.com/blog/web-security-zone/what-is-poodle-attack/

## Heartbleed (CVE-2014-0160)
Client -> Server
Heartbeat request (normal)  
If alive, send me OK, 2 bytes  

Client <- Server
Heartbeat response (normal)  
OK, 2 bytes  

Client -> Server
Heartbeat request (forged)  
If alive, send me OK, 65536 bytes  

Client <- Server
Heartbeat response  
OK, 65536 bytes (fetched from memory,  
leaking un-encrypted data such as  
server’s private key)

• Security bug in OpenSSL using TLS discovered in 2014  
• TLS heartbeat extension (keep alive) exploit

• Defence:  
recompile already installed version with -DOPENSSL_NO_HEARTBEATS  
https://heartbleed.com/  

## SSL/TSL Cryptographic Protocol Vulnerabilities


### SSL/TLS Length-Based Information Leakage

### Attack Setup
- Victim holds a secure cookie: `Cookie: adm=fj92AH7f`
- Attacker injects variations of cookie prefixes: `adm=0`, `adm=f`, `adm=fb`, `adm=fj` etc.
- Goal: Match prefix to recover the secret

### Server Behavior
- Each request is padded to a block boundary (CBC mode)
- Server's response size changes depending on padding

### Attacker Strategy
1. Send modified requests with prefix guesses
2. Observe total response length
3. Match occurs when total length drops (proper block boundary alignment)

### Example Observations
- `adm=0` → total length = 384 | Failure  
- `adm=f` → total length = 368 | Correct  
- `adm=fb` → total length = 376 | Failure
- `adm=fj` → total length = 360 | Correct

### Result
- Attacker infers correct bytes of the secret cookie by observing length variations

https://certera.com/blog/common-ssl-tls-challenges-issues-attacks-to-exploits/

## TLS 1.3  
• Most deployed security protocol  
• Uses 3 cipher suits with perfect forward secrecy (PFS), Authenticated Encryption and Additional Data  
(AEAD) and modern algorithms  
• Better privacy on data using minimal set of cleartext  
• Supports content length hiding by minimal set of cleartext protocol bits  
• Supported cipher suits  
• TLS_AES_128_GCM_SHA256  
• TLS_AES_256_GCM_SHA384  
• TLS_CHACHA20_POLY1305_SHA256  
• Galois/Counter Mode (GCM)  
• TLS 1.3 enables encryption earlier in the handshake, hence, provides better  
confidentiality and preventing interference from poorly designed middle boxes.  
• TLS 1.3 encrypts the client certificate, so client identity remains private, and  
renegotiation is not required for secure client authentication.  
• https://www.microsoft.com/en-us/security/blog/2020/08/20/taking-transport-layer-security-tls-to-the-next-level-with-tls-1-3/

## Datagram Transport Layer Security (DTLS)  
• Session Initiation Protocol (SIP) and electronic gaming protocols are  
becoming increasingly popular  
§ Internet telephony, and online gaming use datagram transport for communication  
due to the delay-sensitive nature of transported data  
qNeed for secure communication  
qTLS over UDP datagram: to maximize the amount of code and infrastructure reuse  
• DTLS is to construct "TLS over datagram: RFC 4347  
§ DTLS protocol provides communications privacy for datagram protocols  
§ DTLS provides equivalent security guarantees as TLS in datagram semantics of the underlying transport

## DTLS- Architecture

### Component Stack (per Application)
Application → Connext DDS → DTLS

### Communication Flow (Bidirectional)
- DTLS handshaking (secure session setup)
- RTPS Discovery Traffic (peer discovery)
- RTPS User Traffic (data exchange)

### Participants
- DomainParticipant 1 and DomainParticipant 2 perform:
  - DTLS handshaking
  - RTPS discovery (encrypted)
  - RTPS user traffic (encrypted)

https://community.rti.com/static/documentation/connextdds/5.2.0/doc/manuals/connext_dds/html_files/RTI_ConnextDDS_CoreLibraries_UsersManual/Content/UsersManual/Datagram_Transport_Layer_Security__DTLS_.htm

## DTLS Security mechanisms
• TLS cannot be used directly in datagram environments because packets may be lost or  
reordered  
§ TLS's traffic encryption layer does not allow independent decryption of individual records  
q If record N is not received, then record N+1 cannot be decrypted  
§ TLS handshake layer assumes that handshake messages are delivered reliably and breaks if those  
messages are lost  
• DTLS function  
§ DTLS uses a simple retransmission timer to handle packet loss  
§ Each handshake message is assigned a specific sequence number within that handshake  
§ DTLS record layer includes an explicit sequence number in the record  
q This sequence number allows the recipient to correctly verify the TLS MAC

## HTTPS (HTTP over SSL)
• Refers to the combination of HTTP and SSL (TLS) to implement secure communication  
between a Web browser and a Web server  
• The HTTPS capability is built into all modern Web browsers  
• A user of a Web browser will see URL addresses that begin with https:// rather than  
http://  
• If HTTPS is specified, port 443 is used, which invokes SSL  
• Documented in RFC 2818, HTTP Over TLS  
§ There is no fundamental change in using HTTP over either SSL or TLS and both implementations are  
referred to as HTTPS  
• When HTTPS is used, the following elements of the communication are encrypted:  
§ URL of the requested document  
§ Contents of the document  
§ Contents of browser forms  
§ Cookies sent from browser to server and from server to browser  
§ Contents of HTTP header

## MAC address and related security issues

• Most network interfaces come with a predefined MAC address : 48-bit number usually  
represented in hex: E.g., 00-1A-92-D4-BF-86  
• MAC address can be reconfigured by network interface driver software  
• A switch learns the MAC address of each computer connected to it and forward frames only to the  
destination computer  
• A MAC spoofing attack impersonates another machine  
§ Find out MAC address of target machine (How?)  
§ Reconfigure MAC address of a rogue machine  
§ Turn off or unplug target machine  
• Countermeasures  
§ Block switch ports when machine is turned off or unplugged  
§ Disable duplicate MAC addresses

## Viewing and Changing MAC Addresses
• Simple commands to view MAC addresses of interfaces  
§ Linux: ifconfig, Windows: ipconfig /all  
• Changing a MAC address in Linux  
§ Stop the networking service: /etc/init.d/network stop  
§ Change the MAC address: ifconfig eth0 hw ether <MAC-address>  
§ Start the networking service: /etc/init.d/network start  
• Changing a MAC address in Windows (require admin Privilege)  
§ Open the Network Connections applet  
§ Access the properties for the network interface  
§ Click “Configure ...”  
§ In the advanced tab, change the network address to the desired value

## ARP Spoofing

### Network Setup
- Subnet: 192.168.1.x
- Alice (Client): 192.168.1.10, MAC: 00:0A:E4:2E:9B:11
- Bob (Server): 192.168.1.100, MAC: 00:0A:E4:3B:47:7E
- Cracker (Attacker): 192.168.1.1, MAC: 00:22:64:34:60:88

### Attack Method
1. Cracker sends spoofed ARP replies:
   - To Alice: Bob’s IP → Cracker’s MAC  
     `arpspoof 192.168.1.10 192.168.1.100`
   - To Bob: Alice’s IP → Cracker’s MAC  
     `arpspoof 192.168.1.100 192.168.1.10`

2. ARP tables of Alice and Bob are poisoned:
   - Both associate each other’s IP with the attacker’s MAC

3. Cracker becomes MITM:
   - All traffic between Alice and Bob flows through Cracker

### Preventing ARP Spoofing  
• Restrict LAN access to trusted users only  
• Check for multiple occurrences of the same MAC address on the LAN  
• Use static ARP table  
§ Manually specify router’s ARP cache to assign MAC –IP binding  
§ ARP requests to adjust the cache are then ignored  
§ However, above measure is not Scalable  
• Detecting and preventing spoofing using s/w tools  
§ Wireshark, Anti-arpspoof, XArp, Arpwatch  

www.xarp.net/

## Denial-of-Service (DoS)

“An action that prevents or impairs the authorized use of networks, systems, or  
applications by exhausting resources such as central processing units (CPU), memory,  
bandwidth, and disk space.” [NIST guide]

Mainly concerns attack on the availability

Network bandwidth:
- Relates to the capacity of the network  
links connecting a server to the  
Internet.
- For most organizations this is  
their connection to their  
Internet Service Provider (ISP).

System resources:
- Aims to overload or crash the  
network handling software.

Application resources:
- Typically involves a number of  
valid requests, each of which  
consumes significant resources,  
thus limiting the ability of the  
server to respond to requests  
from other users.

## Classic DoS Attacks (1)

• Flooding ping command (Ping of death)  
§ Aim of this attack is to overwhelm the capacity of the network connection to the target  
organization  
q A powerful machine can perform a DOS attack on a weaker machine by sending massive  
amounts of echo requests than the weaker machine can handle them  
q The weaker machine is then overwhelmed with the traffic and start to drop legitimate  
connections  
§ Results in significant network performance degradation  
• Flooding attack also involves UDP flood, TCP sync flood

## Classic DoS Attacks (2)
• Smurf attack  
§ Attacker broadcasts ICMP request packets using a spoofed source address  
§ Each packet received by every machine on the network  
§ Every machine sends a reply ICMP packet to the source (Attacker)  
§ Amplification effect, multiplying packets sent by number of machines  
§ Prevention:  
qmake sure to block directed broadcast traffic coming into the network  
qconfigure hosts and routers not to respond to ICMP echo requests  

https://usa.kaspersky.com/resource-center/definitions/smurf-attack

## TCP Protocol
● Transmission Control Protocol (TCP) is a core protocol of the Internet protocol suite.  
● Sits on the top of the IP layer; Transport layer.  
● Provide host-to-host communication services for applications.  
● Two transport Layer protocols  
§ TCP: provides a reliable and ordered communication channel between applications.  
§ UDP: lightweight protocol with lower overhead and can be used for applications that do not require reliability or  
communication order.  
● It is important to understand the TCP process

## TCP Header

TCP Segment: TCP Header + Data.  

Source and Destination port (16 bits each):  
Specify port numbers of the sender and the  
receiver.  

Sequence number (32 bits) : Specifies the  
sequence number of the first octet in the TCP  
segment. If SYN bit is set, it is the initial  
sequence number.  

Acknowledgement number (32 bits): Contains  
the value of the next sequence number  
expected by the sender of this segment. Valid  
only if ACK bit is set.

## TCP 3-way Handshake Protocol

SYN Packet:  
• The client sends a special packet called SYN packet to  
the server using a randomly generated number x as its  
sequence number.  
SYN-ACK Packet:  
• On receiving it, the server sends a reply packet using  
its own randomly generated number y as its  
sequence number.  
ACK Packet  
• Client sends out ACK packet to conclude the  
handshake

## SYN Flooding Attack

• Typically, DOS attack, though can be  
combined with other attack such as TCP  
hijacking  
• Rely on sending TCP connection requests  
faster than the server can process them  
• Idea : To fill the queue storing the half-open  
connections so that there will be no space to  
store TCB for any new half-open connection,  
basically the server cannot accept any new  
SYN packets.

• Steps to achieve this : Continuously send a lot of SYN packets to the server. This  
consumes the space in the queue by inserting the TCB record.  
•Do not finish the 3rd step of handshake as it will de-queue the TCB record

## SYN Flooding Attack  
● When flooding the server with SYN packets, we need to use random source IP addresses;  
otherwise the attacks may be blocked by the firewalls.  
● The SYN+ACK packets sent by the server may be dropped because forged IP address may  
not be assigned to any machine. If it does reach an existing machine, a RST packet will be  
sent out, and the TCB will be de-queued.  
● As the second option is less likely to happen, TCB records will mostly stay in the queue.  
This causes SYN Flooding Attack.

## Countermeasures: SYN Cookies  
● After a server receives a SYN packet, it calculates a keyed hash (H) from the  
information in the packet using a secret key that is only known to the server.  
● This hash (H) is sent to the client as the initial sequence number from the server. H is  
called SYN cookie.  
● The server will not store the half-open connection in its queue.  
● If the client is an attacker, H will not reach the attacker.  
● If the client is not an attacker, it sends H+1 in the acknowledgement field.  
● The server checks if the number in the acknowledgement field is valid or not by  
recalculating the cookie.  
● An useful link:  

https://www.interserver.net/tips/kb/syn-flood-attack-prevent/

## TCP Reset Attack

To disconnect a TCP connection  
● A sends out a “FIN” packet to B.  
● B replies with an “ACK” packet. This closes the A-to-B communication.  
● Now, B sends a “FIN” packet to A and A replies with “ACK”.  
Using Reset flag :  
● One of the parties sends RST packet to immediately break the connection.

Goal: To break up a TCP connection between A  
and B.  
Spoofed RST Packet: The following fields need to  
be set correctly:  
● Source IP address, Source Port  
● Destination IP address, Destination Port  
● Sequence number (within the receiver’s window)

## TCP Reset Attack on Telnet Connection
Goal: To break the Telnet connection between User and Server  
Setup: User (10.0.2.18) and Server (10.0.2.17)  
Steps :  
§ Use Wireshark on attacker machine, to sniff the traffic  
§ Retrieve the destination port (23), Source port number (44421) and sequence number.  
§ Perform lab exercise and observe.

Using netwox tool 40, we can generate a spoofed  
RST packet to the client or server. If the attack is  
successful, the other end will see a message  
“Connection closed by foreign host” indicating that  
the connection is broken.


## TCP Session Hijacking Attack
Goal: To inject data in an established connection.  
Spoofed TCP Packet: The following fields need to be set correctly:  
● Source IP address, Source Port,  
● Destination IP address, Destination Port  
● Sequence number (within the receiver’s window)

## TCP Session Hijacking Attack: Sequence Number
● If the receiver has already received some data up to the sequence number x, the next sequence number is x+1. If the spoofed packet uses sequence number as x+𝛿, it  
becomes out of order.  
● The data in this packet will be stored in the receiver’s buffer at position x+𝛿, leaving 𝛿  
spaces (having no effect). If 𝛿 is large, it may fall out of the boundary.

## Hijacking a Telnet Connection

Set up: User : 10.0.2.18, Server : 10.0.2.17, Attacker : 10.0.2.16  
Steps:  
● User establishes a telnet connection with the server.  
● Use Wireshark on attacker machine to sniff the traffic  
● Retrieve the destination port (23), source port number (44425) and sequence number.  
● Perform lab exercise and observe.

## Launch the TCP Session Hijacking Attack
`$ sudo netwox 40 --ip4-src 10.0.2.18 --ip4-dst 10.0.2.17 --tcp-dst 23 --tcp-src 44425 --tcp-seqnum 691070839 --tcp-window 2000 --tcp-data "0a636174202f686f6d652f736565642f73632951825812e97erb977e8ac393039300a"`

## Defending against Session Hijacking  
● Making it difficult for attackers to spoof packets  
§ Randomize source port number  
§ Randomize initial sequence number  
§ Not effective against local attacks  
● Encrypting payload

## Distributed DoS (DDoS)
• Many systems (some can be ours) to generate attack
§ Attacker uses malware to take control  
of a “good system”. Such systems are  
known as zombies  
§ Botnet: A large collection of zombies  
controlled by an attacker  
§ 40% DoS attacks come from botnet  
§ Botnet on hire – Underground  
economy!

## How attacker constructs Attack Network?  
• Attacker infects several machines with zombie software which will be used to carry out the  
attack  
• Essential ingredients:  
§ Software which can carry out the DDoS attack  
§ Discovering vulnerability in large number of systems  
§ Locating vulnerable machines (scanning/discovering)  
http://www.digitalattackmap.com/ 

## DoS Attack Prevention  
• Block spoofed source addresses  
§ On routers as close to source as possible  
• Filters may be used to ensure path back to the claimed source address is the one being used by the  
current packet  
§ Filters must be applied to traffic before it leaves the ISP’s network or at the point of entry to their network  
• Use modified TCP connection handling code  
§ Cryptographically encode critical information in a cookie that is sent as the server’s initial sequence  
number  
q Legitimate client responds with an ACK packet containing the incremented sequence  
number cookie  
§ Drop an entry for an incomplete connection from the TCP connections table when it overflows  
• Block IP directed broadcasts  
• Block suspicious services and combinations  
• Use graphical puzzle (captcha) to distinguish legitimate human requests  
• Use mirrored and replicated servers