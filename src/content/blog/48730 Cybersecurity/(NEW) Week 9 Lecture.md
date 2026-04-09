```plaintext
Notes/
├── Network_Access_Control.md
├── Authentication_Protocols.md
├── Trusted_Platform_Module.md
├── Wireless_Security.md
└── Blockchain_Technology.md
```

# Network Access Control

- “Umbrella” term for managing who and what can join a network.
    
- Authenticates users and determines resource access (authorization).
    
- Examines health posture of user’s device.
    
- Differs from system access control.
    

## NAC Process

### System Flow

- Devices (desktops, laptops, smartphones, printers, thin clients) connect via switch or firewall.
    
- NAC server (inline or out-of-band) enforces policies.
    

### Pre-Admission Control

- **System/User Profiling** (agent-based or agentless)
    
- **Authentication** (device profile or captive portal)
    
- **Compliance & Posture Checking**
    
    - Antivirus
        
    - System Patching
        
    - System Configuration
        
    - Auto Remediation
        
- Non-compliant → **Quarantine VLAN** → Security Update Server
    
- Compliant → **HR VLAN**
    

### Post-Admission Control

- **Authorization** based on compliance results
    
- **Role-Based Access Control (RBAC)** assigns users to specific VLANs
    

## Supporting Security Tools

- **IDS/IPS** (Intrusion detection/prevention)
    
- **Authentication Systems** (e.g., RADIUS)
    
- **Endpoint Security Software** (AVG, Avast, Avira, Bitdefender, Kaspersky)
    
- **Network Security** (firewalls, global access control)
    
- **ARP/NDP Poisoning Detection**
    

## Enforcement Methods

- IEEE 802.1X
    
- VLANs
    
- Firewalls
    
- DHCP management
    

---

# 802.1X Protocol

- IEEE standard providing authentication framework for network access.
    
- Components: **Supplicant**, **Authenticator**, **Authentication Server**.
    
- Methods: EAP (Extensible Authentication Protocol), MAC-based auth.
    

## Extensible Authentication Protocol (EAP)

[Wikipedia: EAP](http://en.wikipedia.org/wiki/Extensible_Authentication_Protocol)

- Framework for carrying authentication over data link layer.
    
- Operates above data link; transported by protocols like 802.1X (LAN), PPP.
    
- Common methods:
    
    - EAP-TLS (RFC 5216)
        
    - EAP-SIM (RFC 4186)
        
    - EAP-AKA (RFC 4187)
        
    - PEAP (RFC 3748)
        
    - EAP-FAST (RFC 4851)
        
    - EAP-TTLS (RFC 5281)
        

### EAP Structure & Layers

- **Authentication Methods** (EAP-TLS, EAP-TTLS, EAP-PSK, EAP-IKEv2, EAP-FAST, EAP-SIM)
    
- **EAP Layer**: core protocol for auth exchanges.
    
- **Data Link Layer (802.1X)**: uses EAPOL over PPP, Ethernet, WLAN.
    

### EAP Message Sequence

1. **EAP-Request/Identity** → Authenticator to peer
    
2. **EAP-Response/Identity** → Peer to authenticator
    
3. **Method Exchanges** between Authenticator & Authentication Server (RADIUS)
    
4. **EAP-Success / EAP-Failure**
    

### Authentication Methods

- Transport service extended by specific auth protocols installed on both client & server.
    
- Supported: EAP-TLS, EAP-TTLS, EAP-PSK, EAP-IKEv2, EAP-SIM, EAP-FAST.
    

---

# Trusted Platform Module (TPM)

- Security microcontroller on motherboard (laptop, desktop, server, smartphone).
    
- Generates and stores keys, certificates; provides sealed storage.
    
- Conforms to TCG TPM Spec v1.2 (Trusted Computing Group).
    

## Remote Attestation

- Proves software/firmware configuration to verifier.
    
- TPM records hashes of BIOS, boot loader, OS kernel, applications.
    
- Measurements stored on TPM and sent to NAC server for compliance check.
    

## TPM Function Blocks

1. **Cryptography & Storage**
    
    - Non-volatile: EK (Endorsement Key), SRK (Storage Root Key)
        
    - Volatile: PCRs (Platform Configuration Registers), AIK (Attestation Identity Keys), storage keys
        
2. **Secure Engine & I/O**
    
    - RSA key gen (512–2048 bits), SHA-1 hash, HMAC, RNG
        

## Platform Configuration Registers (PCR)

- 160-bit cumulative hash registers (≥16 PCRs).
    
- Reset to 0 at boot; extended: `PCR[i] = SHA-1(PCR[i] ∥ measurement)`.
    
- Measured entities: BIOS (0–4), OS loaders (5–7), OS (8–15), debug/locality/apps (16–23).
    

## Key Hierarchy

- **EK**: unique 2048-bit RSA pair, root of trust.
    
- **AIK**: RSA 2048-bit for attestation; signed by EK.
    
- **SRK**: master wrapping key, encrypts other TPM keys.
    
- **Storage Keys**: wrap/unbind data.
    
- **Signature Keys**: leaf keys for signing.
    

## Sealing & Binding

- **Bind/Unbind**: encrypt data so only TPM can decrypt.
    
- **Seal/Unseal**: tied to PCR states; only unsealed if current PCR matches snapshot (e.g., BitLocker).
    

## TPM Applications & Attacks

- PC security tools: password vaults, pre-boot integrity checks (HyperSpace).
    
- Vulnerabilities: cold boot attack, electron microscope attack.
    

---

# Wireless Security

## Risk Factors

- **Channel**: broadcast medium → eavesdropping, jamming
    
- **Mobility**: portable devices in uncontrolled locations
    
- **Resources**: limited CPU/memory on mobile devices
    
- **Accessibility**: unattended sensors/robots → physical tampering
    

## Threats

- **Accidental Association**: connecting to neighboring WLAN
    
- **Nontraditional Networks**: Bluetooth, barcode readers, PDAs → spoofing
    
- **Denial of Service (DoS)**: floods AP with malicious messages
    
- **Malicious Association**: rogue AP steals credentials
    
- **MAC Spoofing**: identity theft via eavesdropped MAC
    
- **Ad Hoc Networks**: no central control → security gaps
    
- **Man-in-the-Middle**: attacker relays between user & AP
    
- **Network Injection**: malformed routing/management frames
    

## Securing Transmissions

- **Signal-Hiding**
    
    - Disable SSID broadcast
        
    - Use cryptic SSIDs
        
    - Reduce transmit power
        
    - Place APs away from exterior walls
        
- **Encryption**
    
    - Protects against eavesdropping if keys secure
        

## Securing Access Points

- Prevent unauthorized APs (evil twin) with IEEE 802.1X port-based access control
    

## Securing Networks

- Use encryption, antivirus/antispyware, firewall
    
- Change default SSID and admin password
    
- Allow only specific MACs
    

## Mobile Device Security

- Must handle:
    
    - Untrusted physical devices
        
    - Untrusted networks
        
    - Untrusted content
        
    - Third-party apps
        
    - Synchronization with other systems
        
    - Location services risks
        

## Timeline

- 1997: WEP (802.11 ratification)
    
- 2000: LEAP
    
- 2001: WPA
    
- 2002: TKIP
    
- 2003: WPA2 (802.11i)
    
- 2018: WPA3
    
- More at Cisco blog: [https://blogs.cisco.com/networking/wpa3-bringing-robust-security-for-wi-fi-networks](https://blogs.cisco.com/networking/wpa3-bringing-robust-security-for-wi-fi-networks)
    

## Wi-Fi Alliance

- Formed as WECA in 1999; certifies 802.11b/g products as “Wi-Fi”
    
- Defines WPA/WPA2 certification procedures
    

## IEEE 802.11i (WPA2)

### Services & Protocols

- **Access Control**: IEEE 802.1X
    
- **Auth & Key Gen**: EAP
    
- **Confidentiality & Integrity**: TKIP, CCMP
    

### Cryptographic Algorithms

- **Confidentiality**: TKIP (RC4), CCM (AES-CTR), NIST Key Wrap
    
- **Integrity**: HMAC-SHA-1, HMAC-MD5, Michael MIC, AES-CBC-MAC
    
- **Key Gen**: HMAC-SHA-1, RFC 1750
    

### Operation Phases

1. Probe Request/Response
    
2. Open System Auth Request/Response
    
3. Association Request/Response
    
4. 802.1X Auth (EAPOL exchange)
    

### 4-Way Handshake

1. AP → STA (Anonce)
    
2. STA → AP (Snonce, MIC)
    
3. AP → STA (Install PTK, MIC)
    
4. STA → AP (ACK, MIC)
    

### Group Key Handshake

1. AP → STA (GTK, MIC)
    
2. STA → AP (ACK, MIC)
    

### Key Derivation

```
Master Key → PMK → PTK → {KCK, KEK, TK}
```

### Fresh Keying

- PMK derived via 802.1X + nonce
    
- PMK produces KCK, KEK, TK
    

### WPA2 Encryption Frame

- `[802.11 Header]` (authenticated)
    
- `[IV/KeyID (4) | Ext IV (4)]` (authenticated)
    
- `[Data]` (encrypted & authenticated)
    
- `[MIC (8)]` (encrypted & authenticated)
    

### Actors & Flow

1. Supplicant → Authenticator: password
    
2. Authenticator → Auth Server: relay
    
3. Auth Server → Authenticator: accept/reject
    
4. Key exchange, port unblocked, encryption active
    

### Protected Data Transfer

- **TKIP**: software-only WEP upgrade
    
- **CCMP**: hardware-supported AES-based
    

### Alternatives & Add-Ons

- End-to-end encryption: SSL, SSH, VPN, PGP
    

### WEP/WPA/WPA2/WPA3 Comparison

|Feature|WEP (1997)|WPA (2003)|WPA2 (2004)|WPA3 (2018)|
|---|---|---|---|---|
|Encryption|RC4|TKIP/RC4|AES-CCMP|AES-CCMP/GCMP|
|Session Key|64/128 bit|128 bit|128 bit|128/256 bit|
|Auth|Open/shared|PSK|PSK|GCMP|
|Security|Very low|Low|Moderate|High|
|Weakness|RC4 exploitable|Compatibility|KRACK|Complex|

# Blockchain Technology
- Distributed ledger of records (blocks) secured by cryptography.
- Decentralized: no single point of control.
- Originated for Bitcoin; now used across industries.

## How It Works
- Each block contains data, its hash, and previous block’s hash.
- Linked chronologically.
- Transactions verified by consensus (Proof of Work, Proof of Stake).

## Types of Blockchains
1. **Private**: limited participants  
2. **Public**: open to all  
3. **Consortium**: hybrid of private/public  
4. **Hybrid**: validators restricted, viewable by authorized users  

## Applications
- Banking & Finance  
- Insurance  
- Education  
- Automobiles  
- Aviation  
- Retail  
- Supply Chain & Logistics  
- Real Estate  
- Healthcare  
- Media & Entertainment