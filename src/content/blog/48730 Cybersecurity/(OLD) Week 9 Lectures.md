To understand security measures associated with  
– Network Access Control (NAC)  
– Function and structure of Trusted Program Module (TPM) security  
and its role in supporting NAC  
– Securing Wireless network and Mobile device  
– Blockchain technology  
• Review Questions:  
– What is Network access control? Which security goals does it address?  
– What is a Trusted Privacy Module (TPM)? Give some example applications of TPM?  
– Explain how confidentiality and integrity of communications between access points and  
authentication servers are implemented in a wireless environment?  
– What is blockchain technology? How it works?

### Protecting the network  
• Multiple security measures:  
• Endpoint Security  
• Firewalls  
• Anti-spywares  
• Host based IPS  
• Anti-virus  
• Authentication, Authorisation and Accounting checking Identity  
• AAA  
• Guest and Employ access separated  
• Access Control  
• Securing the Network  
• IDS/IPS  
• VPNs  
• Firewalls  
• Organizations deploy a combination of above schemes to protect their IT  
infrastructure; Need to have robust schemes

### What are the limitations?  
• Endpoint security policies are not fully enforceable  
• Many organizations do not authenticate users before accessing  
their network  
• Users may access the organization network through different entry points  
• wireless, wired and VPN  
• Organization network needs to deal with different types of users; full-time  
employees, vendors, partners and guests  
• Hence, every organization must have a strategy to implement good security  
measures on an end to end basis

### Network Access Control  
• An “umbrella” term for managing access to a network.  
• Authenticates users logging into the network and determines what  
resource they can access and actions they can perform (authorization).  
• Also, examines health of the user’s computer or mobile device.  
• Network access control is different from System access control

### NAC process
#### System Flow

Devices such as desktops, laptops, smartphones, printers, and thin clients connect through a switch or firewall. A NAC server (inline or out-of-band) enforces network policies.

#### Pre-Admission Control

- **System/User Profiling**: Performed with or without agents.
    
- **Authentication**: Device profile or captive portal (web-based).
    
- **Compliance & Posture Checking**:
    
    - Antivirus;
        
    - System Patching;
        
    - System Configuration;
        
    - Auto Remediation.
        

Non-compliant endpoints are redirected to a **Quarantine VLAN**, connected to a **Security Update Server**. Compliant endpoints are allowed into the **HR VLAN**.

#### Post-Admission Control

- **Authorization**: Based on compliance results.
    
- **Role-Based Access Control (RBAC)**: Assigns users to specific network segments, e.g. HR to HR VLAN.
    

#### Supporting Security Tools

- **IDS/IPS**: Intrusion detection/prevention.
    
- **Authentication Systems**: Identity verification.
    
- **Endpoint Security Software**: AVG, Avast, Avira, Bitdefender, Kaspersky.
    
- **Network Security**: Firewalls, global access control.
    
- **ARP/NDP Poisoning Detection**: Prevents spoofing and impersonation.

#### Access Requester (AR)

- Also called _supplicants_ or _clients_.
    
- The node/device attempting to access the network.
    
- Can be any IP-enabled device managed by NAC, including:
    
    - Workstations;
        
    - Servers;
        
    - Printers;
        
    - Cameras;
        
    - Other smart devices.
        

#### Policy Server

- Decides what level of access should be granted.
    
- Often uses backend systems for verification.
    

#### Network Access Server (NAS)

- Acts as an access control point for remote users connecting to an enterprise’s internal network.
    
- Also known as:
    
    - _Media Gateway_;
        
    - _Remote Access Server (RAS)_;
        
    - _Policy Server_ (in some contexts).
        
- May include its own authentication service or defer to a separate policy server.

### Network Access Enforcement Methods  
• These are the steps we take to control who can access the  
company's computer network.  
• Many vendors also support multiple enforcement methods  
simultaneously, allowing the customer to tailor the  
configuration by using one or a combination of methods
- IEEE 802.1X
- Virutal local area networks (VLANs)
- Firewall
- DHCP management

### 802.1X protocol  
• The 802.1X protocol is an IEEE standard for NAC that provides an  
authentication framework to control access to a network.  
• Three main components in an 802.1X system:  
- Supplicant  
- Authenticator  
- Authentication server  
Two main types of 802.1X authentication methods:  
- EAP (Extensible Authentication Protocol)  
- MAC-based authentication

### Extensible Authentication Protocol EAP  
• EAP is an authentication framework  
• EAP focuses on the transport functions and the use of Keys  
• EAP sits above the data link layer in the IP stack  
• Carried across the network by other protocols  
– 802.1x for a LAN  
• EAP Methods defined through modern EAP standards  
– EAP-TLS (EAP-Transport Layer Security): RFC 5216  
– EAP-SIM (EAP for GSM Subscriber Identity): RFC 4186  
– EAP-AKA (EAP for UMTS Authentication and Key Agreement): RFC 4187  
– PEAP (Protected Extensible Authentication Protocol): RFC 3748  
– EAP-FAST (Flexible Authentication via Secure Tunneling): RFC 4851  
– EAP-TTLS (EAP-Tunneled Transport Layer Security): RFC 5281  
• http://en.wikipedia.org/wiki/Extensible_Authentication_Protocol

### Extensible Authentication Protocol (EAP)

### EAP Structure & Layers

EAP operates across three major layers:

- **Authentication Methods**:
    
    - EAP-TLS;
        
    - EAP-TTLS;
        
    - EAP-PSK;
        
    - EAP-IKEv2;
        
    - Others (e.g. EAP-FAST, EAP-SIM).
        
- **EAP Layer**:
    
    - Core protocol managing authentication exchanges.
        
    - Encapsulates authentication methods and transmits over LAN.
        
- **Data Link Layer** (802.1X):
    
    - Uses **EAP over LAN (EAPOL)**.
        
    - Works over PPP, Ethernet (802.3), WLAN (802.11), and other link types.
        

---

### EAP Protocol Exchange

In a standard EAP setup:

- **EAP Peer** (e.g. laptop):
    
    - Sends authentication data.
        
    - Interacts with authenticator using an EAP method.
        
- **EAP Authenticator** (e.g. switch, AP):
    
    - Forwards EAP messages between peer and authentication server.
        
    - Implements the 802.1X control mechanism.
        
- **Authentication Server** (e.g. RADIUS):
    
    - Verifies credentials.
        
    - Final authority to accept/reject the connection.
        

---

### EAP Message Sequence

1. **EAP-Request/Identity**  
    Authenticator sends an identity request to the peer.
    
2. **EAP-Response/Identity**  
    Peer responds with its identity.
    
3. **Multiple Message Sequences**  
    Exchanged between authenticator and authentication server (RADIUS), depending on the method.
    
4. **EAP-Success / EAP-Failure**  
    Final message indicates whether access is granted or denied.

### Authentication Methods  
• EAP provides a generic transport service for the exchange of  
authentication information between a client system and an  
authentication server  
• The basic EAP transport service is extended by using a specific  
authentication protocol that is installed in both the EAP client and  
the authentication server  
Commonly supported EAP methods:  
• EAP Transport Layer Security  
• EAP Tunneled TLS  
• EAP Generalized Pre-Shared Key  
• EAP-IKEv2

### Trusted Platform Module (TPM)  
• Device with TPM (Trusted Platform Module)  
– Integrated circuit (a security microcontroller) that conforms to the trusted platform module  
specification resides on the host motherboard, including laptop, desktop, server and smart  
phone  
– TPM generates keys for  
• Securely storing passwords and digital keys and certificates that can  
provide unique identification  
• Encrypting the data that flow throughout the device  
• Encrypts data in such a way that it may be decrypted only if the TPM permits decryption  
(Sealed storage)  
– TPM was developed by Trusted Computing Group (TCG)  
• Formed by major vendors, including Microsoft, Intel, HP, IBM, AMD etc.  
(https://www.trustedcomputinggroup.org/home)  
• TCG TPM Specification Version 1.2

### Remote Attestation  
• Remote Attestation allows the host containing the TPM to prove to an interested  
verifier a particular set of software and configurations  
– All critical software and firmware components, including BIOS, boot loader, operating system  
kernel, and applications  
– Host creates a hash summary of the hardware and software configuration as well as the boot  
sequence  
– By making these measurements before the software runs and storing them on the TPM, the  
measurements are isolated and secured from subsequent modification attempts  
– When the device connects to the network, the stored measurements are sent  
to a NAC server to  
• check against the server’s list of acceptable configurations  
• quarantined as an infected end point if a non-match occurs

### TPM function blocks (1)  
• Hardware-based cryptography ensures that the information stored in hardware is better  
protected from external software attacks  
• Applications based on TPM (e.g., sealed encryption of a hard disk) make it difficult to access  
protected information without proper authorization (e.g., if the device is stolen)  
• TPMs (current version is 1.2) supports cryptographic algorithms such as RSA, SHA1, and  
HMAC  
Non-volatile storage:  
Endorsement key (EK),  
Storage root key (SRK)  
Volatile storage:  
Platform configuration  
registers (PCRs),  
Attestation identity keys  
(AIK), storage keys  
Secure execution engine:  
Encrypt, Decrypt, Signature  
Secure I/O  
Random number  
generation  
SHA-1 Hash  
RSA Key genorator

### TPM function blocks (2)  
• Asymmetric key generation (RSA)  
– Supports 512, 1024, 2048-bit keys  
– Use of a default 2048-bit key is recommended  
• Asymmetric crypto operations: encrypt, decrypt and signature (up  
to 2048-bit key length)  
• SHA-1 Hash engine (160 bits)  
– Used for measuring integrity  
• Random Number Generator (RNG)  
– Adds randomness in the TPM for nonce (Number Used Once) and key  
generation  
– The RNG output is used both internally by the TPM and is offered  
to outside consumers for randomness

### Platform Configuration Registers (PCR)  
• PCR is a160 bit storage location for integrity measurements  
– At least 16 PCRs  
• The integrity measurement is cumulatively stored in PCR  
– PCRs are reset to 0 at boot time  
– PCR[i] = SHA-1(PCR[i] || new measurement) for ith PCR (index i)  
– PCR can keep record of unlimited number of measurements using hash  
• Measurements and PCR values  
– BIOS, ROM, Memory Block Register [PCR index 0-4]  
– OS loaders [PCR index 5-7]  
– Operating System (OS) [PCR index 8-15]  
– Debug [PCR index 16]  
– Localities, Trusted OS [PCR index 17-22]  
– Applications specific [PCR index 23]

### Host System Configuration and State  
• When a host computer powers up, BIOS boot block executes  
– (1)TPM performs  
• PCR[i] = SHA-1(PCR[i] || <BIOS code> ) before the host loads and runs BIOS boot code  
• Then the host executes BIOS code  
– (2)TPM performs  
• PCR[i] = SHA-1(PCR[i] || <MBR code> ) before the host runs MBR  
• Then the host executes MBR  
– (3)TPM performs MBR execution:  
• PCR[i] = SHA-1(PCR[i] || <OS loader code, configparams> ) before the host runs the OS  
loader  
– The measurement is extended into one of the TPM PCR accordingly  
– Host Control is passed to the measured entity  
– Process is continued for all components of a host system up to user level  
applications  
– Recursive measurement values are stored using SHA-1

### Endorsement key (EK)
Every TPM has a unique EK  
– EK is the root of trust for identification  
– EK generated during manufacture and includes  
• 2048-bit RSA key pair contained inside the TPM  
• Private key never leaves the TPM and only exists in a shielded location  
• EK is unique for every TPM and therefore uniquely identifies a TPM  
– Certificate for EK public-key issued by TPM vendor is generated by a trusted CA or  
TPM manufacturer  
• The EK certificate guarantees that the key actually is an EK and is protected by a genuine TPM  
– EK cannot be changed or removed

### Attestation identity key (AIK)
For attestation  
– Host first generates an attestation identity key (AIK)  
• RSA Engine creates RSA 2048-bit key pair (1024-bit key is supported, but not  
recommended)  
– Multiple AIKs may be generated for different use  
– Certificate for AIK public key is issued only if EK certificate is valid  
– AIK private key is only known to TPM, and never leaves TPM  
– Host answers challenges from a remote party by signing PCR values with an AIK private key  
• A nonce is included with the signed PCRs to prevent replay attack  
• Root of Trust for Measurement (RTM)  
– Uses PCR to measure the system that is in some known state  
• Root of Trust for Reporting (RTR):  
– Securely reports state of a platform to a NAC server  
– Digitally sign the PCR values inside the TPM and send the signature to the requester (NAC server)

### Storage Root Key (SRK)
Two approaches for wrapping a TPM key or data:  
(1) Bind/unbind a key/data without using PCR  
(2) Seal/unseal a key/data using PCR  
• Binding a key/data  
• A TPM can create cryptographic keys and encrypt them so that they can be  
decrypted only by the TPM  
– This process can help protect the key from disclosure  
• Each TPM has a master wrapping key, called the Storage Root Key (SRK),  
which is stored within the TPM itself  
– The private key of a SRK, created in a TPM, is never exposed to any other  
component, software, process, or person

### Sealing a key in TPM
Sealing a key  
• A TPM can also create a key that has not only been wrapped, but is also  
tied to specific hardware or software conditions using PCR values  
– When a sealed key is first created, the TPM records a snapshot of configuration  
values and file hashes  
• A sealed key is only "unsealed" or released when those current  
system values match the ones in the snapshot  
– BitLocker uses sealed keys to detect attacks against the integrity of  
the Windows operating system

### TPM Key Hierarchy
EK and SRK are the only keys permanently stored inside the TPM  
• When removing keys from a TPM, a key hierarchy is established  
– Whenever a key is exported from the TPM, its private key is encrypted using the public key  
of the parent  
• Storage Keys  
– Created during user/host initialization  
– RSA keys used to wrap (encrypt) other elements in the TPM key hierarchy  
– Decrypt the private key of a storage key using the private key of the parent key  
• Signature Keys  
– RSA keys used for signing operations  
– Must be a leaf in the TPM key hierarchy  
• Storage keys form the nodes of the key hierarchy and signature keys  
are always leaves

### TPM key hierarchy
Storage keys (SKs)  
• Encrypt:  
– ESRKPUB{SK1}  
– ESK1PUB{AES-  
K1}  
– EAES-K1{Disk1}  
• Decrypt:  
– DSRKPRI{SK1}  
– DSK1PRI{AES- K1}  
– DAES-K1{Disk1}

### TPM applications: security tools  
• TPM-based PC security software tools, such as password vaults, are part of  
their standard enterprise client construction  
• TPM also facilitates key management for verifying the identity of a PC  
– Can securely sign, encrypt, and decrypt e-mails and digital documents  
• Assess security and integrity of the host device  
– HyperSpace platform from Phoenix Technologies checks PC security, pre-boot, to  
authenticate a device’s identity, verify the integrity of trusted applications, and help  
minimize the threat of malware  
– Defeat boot-record and kernel rootkits/Trojans

### Security attacks on TPM
• Even when a TPM is used, the key is still vulnerable while a software application that  
has obtained it from the TPM is using it to perform encryption/decryption operations,  
as has been illustrated in the case of  
– Cold boot attack  
• https://en.wikipedia.org/wiki/Cold_boot_attack  
– Electron Microscope attack:  
• http://mcpmag.com/Articles/2010/02/03/Black-Hat-Engineer-Cracks-TPM- Chip.aspx

### Wireless Security
• Key factors contributing to higher security risk of wireless networks  
compared to wired networks include:  
• Channel  
• Wireless networking typically involves broadcast communications, which is far more susceptible  
to eavesdropping and jamming than wired networks  
• Wireless networks are also more vulnerable to active attacks that exploit  
vulnerabilities in communications protocols  
• Mobility  
• Wireless devices are far more portable and mobile, thus resulting in number of risks  
• Resources  
• Some wireless devices, such as smartphones and tablets, have sophisticated operating  
systems but limited memory and processing resources with which to counter threats,  
including denial of service and malware  
• Accessibility  
• Some wireless devices, such as sensors and robots, may be left unattended in remote  
and/or hostile locations, thus greatly increasing their vulnerability to physical attacks

### Wireless Network Threats
Accidental association  
• Company wireless LANs in close  
proximity may create overlapping  
transmission ranges  
• A user intending to connect to one  
LAN may unintentionally lock on to a  
wireless access point from a  
neighboring network

Nontraditional networks  
• Personal network Bluetooth devices,  
barcode readers, and handheld PDAs  
pose a security risk in terms of both  
eavesdropping and spoofing

Denial of service (DoS)  
• This attack occurs when an attacker continually  
bombards a wireless access point or some other  
accessible wireless port with various protocol  
messages designed to consume system resources  
• The wireless environment lends itself to this type of  
attack because it is so easy for the attacker to direct  
multiple wireless messages at the target

Malicious association  
• In this situation, a wireless device is  
configured to appear to be a  
legitimate access point, enabling the  
operator to steal passwords from  
legitimate users and then penetrate a  
wired network through a legitimate  
wireless access point

Identity theft (MAC spoofing)  
• This occurs when an attacker is able to  
eavesdrop on network traffic and  
identify the MAC address of a  
computer with network privileges

Ad hoc networks  
• These are peer-to-peer networks  
between wireless computers with no  
access point between them  
• Such networks can pose a security  
threat due to a lack of a central point  
of control

Man-in-the-middle attacks  
• This attack involves persuading a user  
and an access point to believe that  
they are talking to each other when in  
fact the communication is going  
through an intermediate attacking  
device  
• Wireless networks are particularly  
vulnerable to such attacks

Network injection  
• This attack targets wireless access  
points that are exposed to nonfiltered  
network traffic, such as routing  
protocol messages or network  
management messages

### Securing Wireless Transmissions
• The principal threats to wireless transmission are  eavesdropping, altering or inserting messages, and disruption.  
• To deal with eavesdropping, two types of countermeasures are appropriate:  
Signal-hiding techniques  
• Turn off SSID broadcasting by wireless access points  
• Assign cryptic names to SSIDs  
• Reduce signal strength to the lowest level that still provides  
requisite coverage  
• Locate wireless access points in the interior of the building, away from  
windows and exterior walls  
Encryption  
• Is effective against eavesdropping to the extent that the encryption keys  
are secured  

### Securing Wireless Access Points
• The main threat involving wireless access points is  
unauthorized access to the network  
• Evil Twin Attack: https://www.Kaspersky.com/resource-  
center/preemptive-safety/evil-twin-attacks  
• The principal approach for preventing such access is the IEEE  
802.1x standard for port-based network access control  
– The standard provides an authentication mechanism for devices wishing  
to attach to a LAN or wireless network  
– The use of 802.1x can prevent rogue access points and other  
unauthorized devices from becoming insecure backdoors

### Securing Wireless Networks
Use encryption  
Use antivirus, antispyware software and a firewall  
Turn off identifier broadcasting  
Change the identifier on your router from the default  
Change your router’s pre-set password for administration  
Allow only specific computers to access your wireless network

### Significance of mobile Device Security
An organization’s networks must accommodate:  
• Growing use of new devices  
§ Significant growth in employee’s use of mobile devices  
• Cloud-based applications  
§ Applications no longer run solely on physical servers in corporate data centers  
• De-perimeterization  
§ There are a multitude of network perimeters around devices, applications,  
users, and data  
• External business requirements  
§ The enterprise must also provide guests, third-party contractors, and business partners  
network access using various devices from a multitude of locations

### Major security concerns for mobile devices
Lack of physical  
security controls:
- The security policy for  
mobile devices must be  
based on the  
assumption that any  
mobile device may be  
stolen or at least  
accessed by a malicious  
party  

Use of untrusted  
mobile devices:
- The organization  
must assume  
that not all  
devices are  
trustworthy

Use of untrusted  
networks:
- The security policy must  
be based on the  
assumption that the  
networks between the  
mobile device and the  
organization are not  
trustworthy 

Use of untrusted  
content:
- Mobile  
devices may  
access and use  
content that  
other  
computing  
devices do not  
encounter

Use of applications  
created by unknown  
parties:
- It is easy to find and  
install third-party  
applications on mobile  
devices and this poses  
the risk of installing  
malicious software

Interaction with other  
systems:
- Unless an organization has  
control of all the devices  
involved in synchronization,  
there is considerable risk of the  
organization’s data being stored  
in an unsecured location, plus  
the risk of the introduction of  
malware

Use of location  
services:
- An attacker can use  
location information to  
determine where the  
device and user are  
located, which may be of  
use to the attacker

### Wireless Security Timeline
WEP – 1997, LEAP- 2000, WPA – 2001, TKIP – 2002, WPA2 = 802.11i – 2003
1997:
802.11 Ratification
Wired Equivilent Privacy WEP

2003:
Wi-Fi protected Access (WPA)

2004:
Wifi-Protected Access II (WPA2)

2018:
Wifi-Protected Access III (WPA3)

For more details- https://blogs.cisco.com/networking/wpa3-bringing-robust-security-for-wi-fi-networks

### Wireless Fidelity (Wi-Fi) Alliance
• 802.11b  
• First 802.11 standard to gain broad industry acceptance  
• Wireless Ethernet Compatibility Alliance (WECA)  
• Industry consortium formed in 1999 to address the concern of products from different vendors  
successfully interoperating  
• Later renamed the Wi-Fi Alliance  
• Term used for certified 802.11b products is Wi-Fi  
• Has been extended to 802.11g products  
• Wi-Fi Protected Access (WPA)  
• Wi-Fi Alliance certification procedures for IEEE802.11 security  
standards  
• WPA2 incorporates all of the features of the IEEE802.11i WLAN security specification

### IEEE 802.11i Wireless LAN Security standards

There is an increased need for robust security services and mechanisms for  
wireless LANs  

Wired Equivalent  
Privacy (WEP):
The privacy portion of  
the 802.11 standard  
Contained major  
weaknesses

Wi-Fi Protected  
Access (WPA):
A set of security  
mechanisms that  
eliminates most  
802.11 security issues  
Based on the current  
state of the 802.11i  
standard

Robust Security  
Network (RSN):
Final form of the  
802.11i standard  
Complex

### Components of IEEE 802.11i

#### Services and Protocols

- **Access Control**:
    
    - IEEE 802.1X (Port-based access control)
        
- **Authentication and Key Generation**:
    
    - Extensible Authentication Protocol (EAP)
        
- **Confidentiality, Integrity, Replay Protection**:
    
    - TKIP (Temporal Key Integrity Protocol)
        
    - CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol)
        

#### Cryptographic Algorithms

- **Confidentiality**:
    
    - TKIP (RC4)
        
    - CCM (AES-CTR)
        
    - NIST Key Wrap
        
- **Integrity and Data Origin Authentication**:
    
    - HMAC-SHA-1, HMAC-MD5
        
    - TKIP (Michael MIC)
        
    - CCM (AES-CBC-MAC)
        
- **Key Generation**:
    
    - HMAC-SHA-1
        
    - RFC 1750
        

 #### IEEE 802.11i Operation Phases

_(Discovery, Authentication, and Association)_

1. **Probe Request / Response**  
    STA scans and AP replies with security capabilities.
    
2. **Open System Authentication Request / Response**  
    Null authentication to begin the process.
    
3. **Association Request / Response**  
    STA sends security parameters, AP acknowledges.
    
4. **802.1X Authentication Begins**
    
    - Port initially blocked
        
    - EAP exchange occurs (Request → Response)
        
    - Credentials verified via RADIUS
        
    - If accepted: `EAP-Success`, key material installed
        
    - Port is then unblocked.
        

---

#### IEEE 802.11i Handshake Process (4-Way + GTK)

  4-Way Handshake (PTK Installation)

1. **Message 1**: AP → STA (Anonce)
    
    - Delivers a nonce to generate PTK.
        
2. **Message 2**: STA → AP (Snonce, MIC)
    
    - STA responds with its nonce and proves liveliness.
        
3. **Message 3**: AP → STA (Install PTK, MIC)
    
    - Confirms AP is alive and installs PTK.
        
4. **Message 4**: STA → AP (ACK, MIC)
    
    - Acknowledges message 3. No cryptographic role.
        

#### Group Key Handshake (GTK)

1. **Message 1**: AP → STA (GTK, MIC)
    
    - AP sends encrypted GTK.
        
2. **Message 2**: STA → AP (ACK, MIC)
    
    - STA acknowledges and installs the GTK.

### Pairwise key derivation

For an enterprise network

Master (or AAA) Key  -> Pairwise Master Key  (PMK)  -> Pairwise Temporal  Key (PTK)  ->
- Key Confirmation Key (KCK) 
- Key Encryption Key (KEK)  
- Temporal Key (TK)

### 802.11i Fresh Keying
Pairwise Master Key (PMK)  
– PMK is derived by both supplicant and AS using the 802.1X protocol  
– Freshness achieved through the use of nonce  
• PMK is used for hashing in order to produce  
– Key Confirmation Key (KCK): for producing MIC  
– Key Encryption Key (KEK): for protecting GTK  
– Temporal Key (TK): for deriving WPA per-frame keys or a WPA2 key

### Summary of IEEE 802.11i use of keys
|**Abbr.**|**Name**|**Description / Purpose**|**Size (bits)**|**Type**|
|---|---|---|---|---|
|AAA|Authentication, Accounting, and Authorization Key|Used to derive the PMK. Used with IEEE 802.1X auth & MMSK.|≥ 256|Key generation key, root key|
|PSK|Pre-Shared Key|Becomes the PMK in pre-shared key environments.|256|Key generation key, root key|
|PMK|Pairwise Master Key|Used with other inputs to derive the PTK.|256|Key generation key|
|GMK|Group Master Key|Used with other inputs to derive the GTK.|128|Key generation key|
|PTK|Pair-wise Transient Key|Derived from the PMK. Includes EAPOL-KCK, EAPOL-KEK, TK, and (for TKIP) the MIC key.|512 (TKIP), 384 (CCMP)|Composite key|
|TK|Temporal Key|Used with TKIP/CCMP for confidentiality/integrity protection of unicast traffic.|256 (TKIP), 128 (CCMP)|Traffic key|
|GTK|Group Temporal Key|Derived from GMK. Used for multicast/broadcast traffic protection.|256 (TKIP), 128 (CCMP), 40/104 (WEP)|Traffic key|
|MIC Key|Message Integrity Code Key|TKIP’s Michael MIC for message integrity.|64|Message integrity key|
|EAPOL-KCK|EAPOL-Key Confirmation Key|Protects key material during 4-way handshake.|128|Message integrity key|
|EAPOL-KEK|EAPOL-Key Encryption Key|Ensures confidentiality of GTK & other key material during 4-way handshake.|128|Traffic key / Key encryption key|
|WEP Key|Wired Equivalent Privacy Key|Used with WEP.|40, 104|Traffic key|

### WPA2
• WPA was an intermediate solution of wireless security.  
– Final version: IEEE 802.11i, aka WPA2  
• Improvements over WPA are incremental rather than  
changes in philosophy:  
– Uses AES instead of RC4  
– Handles encryption, key management, and integrity  
– MAC provided by Counter Mode with Cipher Block Chaining (CCMP) used in  
conjunction with AES  
• WPA2 needs advanced hardware to operate properly

### **WPA2 Encryption**

- Uses Counter Mode with Cipher Block Chaining Message Authentication Code Protocol
    
- A 64-bit Message Integrity Code (MIC) is computed on the plaintext header and payload using the Michael algorithm
    
- The payload and MIC are then encrypted
    

**Encryption Frame Structure:**

- [802.11 Header] — authenticated only
    
- [IV / KeyID (4 octets)] — authenticated only
    
- [Extended IV (4 octets)] — authenticated only
    
- [Data (>= 0 octets)] — encrypted and authenticated
    
- [MIC (8 octets)] — encrypted and authenticated
    

**IV / KeyID Breakdown (bytes b0–b7):**

- b0: PN0
    
- b1: PN1
    
- b2: Reserved
    
- b3: Reserved
    
- b4: Reserved
    
- b5: Extended IV
    
- b6: Key ID
    
- b7: PN2
    

Additional Packet Numbers:

- PN3
    
- PN4
    
- PN5
    

### **WPA2 and Wi-Fi Security**

Actors:

- **Supplicant:** the client device (e.g., laptop)
    
- **Authenticator:** the access point (AP)
    
- **Authentication Server:** external server validating credentials
    

**Communication Flow:**

1. Supplicant sends Wi-Fi password to Authenticator
    
2. Authenticator relays password to Authentication Server
    
3. Authentication Server responds with success message
    
4. Authenticator and Supplicant exchange private keys
    
5. Authenticator authorizes access
    
6. Controlled port is opened for Internet traffic
    
7. Airlink Encryption is activated
    

**Port States:**

- **Uncontrolled Port:** used during authentication phase
    
- **Controlled Port:** used for regular encrypted traffic post-authentication
    

**Access Point Functionality (with WPA2-Enterprise):**

- Authenticator communicates with Authentication Server for password verification
    
- Private keys are established between Supplicant and Authenticator
    
- Upon authorization, encrypted traffic is allowed through the controlled port

### Protected Data Transfer Phase
IEEE 802.11i defines two schemes for protecting data transmitted  
in 802.11 MPDUs:

Temporal Key Integrity Protocol  
(TKIP)  
Designed to require only software  
changes to devices that are  
implemented with WEP

Counter Mode-CBC MAC  
Protocol (CCMP)  
Intended for newer IEEE 802.11  
devices that are equipped with  
the hardware to support this  
scheme

These provide two services: message integrity and Data confidentiality

### Alternatives and Add-Ons
• WEP, WPA, and WPA2, and WPA3 all protect your traffic only up to the  
access point  
– No security provided beyond access point  
• Other methods can encrypt end-to-end:  
– SSL, SSH, VPN, PGP, and so on  
• End-to-end encryption is often simpler than setting up network-  
level encryption  
• Most of these solutions require per-application configuration

### WEP, WPA, WPA2, and the latest WPA3- Comparisons

| Feature             | WEP         | WPA           | WPA2         | WPA3                     |
|---------------------|-------------|---------------|--------------|--------------------------|
| **Release Year**    | 1997        | 2003          | 2004         | 2018                     |
| **Encryption**      | RC4         | TKIP / RC4    | AES-CCMP     | AES-CCMP / AES-GCMP      |
| **Session Key**     | 64/128 bit  | 128 bit       | 128 bit      | 128/256 bit              |
| **Authentication**  | Open system, shared key | Pre-shared key | Pre-shared key | AES-CCMP / AES-GCMP |
| **Level of Security** | Very low  | Low           | Moderate     | High                     |
| **Weakness**        | Insecure encryption easily exploited by hackers | Weak encryption, compatibility issues | Vulnerable to key reinstallation attack (KRACK) | Complex deployment |

### Introduction to Blockchain Technology
- A blockchain is a distributed ledger of records (blocks) secured by cryptography.  
- Originally developed for Bitcoin, it is now used in various industries and applications.  
- Key feature: Decentralization – no single point of control.

### How Blockchain Works
Each block contains data, a hash, and the  
previous block's hash.  
• Blocks are linked chronologically.  
• Transactions are verified by consensus (e.g.,  
Proof of Work, Proof of Stake).

### Types of Blockchains
1. Private Blockchain
    

- Can be accessed by only a limited number of participants
    

2. Public Blockchain
    

- Allows all of the network participants to do transactions within a blockchain system
    

3. Consortium Blockchain
    

- Can be defined as the combination or hybrid of private and public blockchain systems
    

4. Hybrid Blockchain
    

- The visibility of the chain can be limited to validators, viewable to authorized individuals

### Applications of Blockchain

1. Banking and Finance
    
2. Insurance
    
3. Education
    
4. Automobiles
    
5. Aviation
    
6. Retail
    
7. Supply Chain and Logistics
    
8. Real Estate
    
9. Healthcare
    
10. Media & Entertainment

### Summary

• Access control is one of the key functions in maintaining security.  
• Wireless and Mobile device security is of utmost importance  
for organizations.  
• New standards are evolving with IoT and Industrial Control  
Systems.  
• Blockchain is the enabling technology of the future Internet.