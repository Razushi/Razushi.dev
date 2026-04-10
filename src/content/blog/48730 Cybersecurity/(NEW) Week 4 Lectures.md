```plaintext
Notes/
├── TLS Overview and Key Exchange
├── TLS Vulnerabilities and Attacks
├── TCP Protocol and Attacks
├── DTLS and Datagram Security
├── HTTPS and Web Security
├── MAC, ARP, and DoS Attacks
└── Tools and Commands
```

## TLS Overview and Key Exchange

### TLS Protocol History

- SSL 1.0: Never released
    
- SSL 2.0 (1995): Many flaws
    
- SSL 3.0 (1996): Complete redesign
    
- TLS 1.0 (1999): RFC 2246
    
- TLS 1.1 (2000): RFC 4346
    
- TLS 1.2 (2008): RFC 5246
    
- TLS 1.3 (2018): RFC 8446
    

### TLS Goals

- **Confidentiality**: Symmetric encryption (AES, RC4)
    
- **Integrity**: Message Authentication Code (MAC)
    
- **Authentication**: Digital signatures for server/client
    

### Key Exchange

- Pre-master secret (46B) → Master secret (48B) → Session keys (MAC/encryption/IV)
    
- Uses pseudorandom function (PRF) with `client_random` and `server_random`
    
- 4 session keys:
    
    - client/server MAC key
        
    - client/server encryption key
        

### Handshake Steps

- SYN, SYN/ACK, ACK → TCP connection
    
- ClientHello → serverHello, Certificate → Key Exchange
    
- Session keys created → Finished messages
    

### TLS Record Protocol

- Data is fragmented, MAC'd, padded, encrypted, and wrapped with TLS header
    
- Receiver decrypts, verifies, decompresses, and buffers for the application
    

### Session Resumption

- Reuse session ID
    
- If match found in cache, bypass full handshake
    
- If not, do full handshake with new session ID
    

## TLS Vulnerabilities and Attacks

### Downgrade Attacks

- Version rollback: Server accepts downgraded SSL 2.0
    
- POODLE: Padding oracle in SSL 3.0
    
    - [https://www.acunetix.com/blog/web-security-zone/what-is-poodle-attack/](https://www.acunetix.com/blog/web-security-zone/what-is-poodle-attack/)
        
- BEAST: CBC + predictable IVs exploited (CVE-2011-3389)
    
    - [https://www.wallarm.com/what/what-is-a-beast-attack](https://www.wallarm.com/what/what-is-a-beast-attack)
        
- SSLStrip: Replaces HTTPS with HTTP silently
    
- Heartbleed: TLS heartbeat leak (CVE-2014-0160)
    
    - [https://heartbleed.com/](https://heartbleed.com/)
        

### Downgrade Taxonomy

- Targets: algorithm, version, layer
    
- Methods: drop, modify, inject
    
- Results: weakened or broken encryption
    

### BEAST Exploit Flow

1. Inject applet
    
2. Send crafted SSL traffic
    
3. MITM sniffs traffic
    
4. Compare known IVs and ciphertext
    
5. Infer plaintext (cookie)
    

- [https://cheapsslsecurity.com/blog/types-of-man-in-the-middle-attacks/](https://cheapsslsecurity.com/blog/types-of-man-in-the-middle-attacks/)
    

### POODLE Attack

- Downgrade to SSL 3.0
    
- Exploit CBC padding length validation
    
- MAC check but not padding check
    
- Fix: disable SSL 3.0, patch browser/server
    

### Heartbleed Attack

- Exploits TLS heartbeat extension
    
- Forged request asks for large memory dump
    
- Leaks keys and sensitive data
    
- Fix: recompile OpenSSL with `-DOPENSSL_NO_HEARTBEATS`
    

### TLS 1.3 Improvements

- Encrypts earlier
    
- Hides client certs
    
- Removes renegotiation
    
- AEAD cipher suites: AES_GCM, ChaCha20
    
    - [https://www.microsoft.com/en-us/security/blog/2020/08/20/taking-transport-layer-security-tls-to-the-next-level-with-tls-1-3/](https://www.microsoft.com/en-us/security/blog/2020/08/20/taking-transport-layer-security-tls-to-the-next-level-with-tls-1-3/)
        

## TCP Protocol and Attacks

### TCP Basics

- Reliable, ordered protocol
    
- Ports (16-bit), sequence, and ack numbers
    
- 3-way handshake: SYN → SYN-ACK → ACK
    

### TCP DoS Attacks

- **SYN Flood**:
    
    - Sends many SYNs, fills TCB queue
        
    - Counter: SYN cookies
        
    - [https://www.interserver.net/tips/kb/syn-flood-attack-prevent/](https://www.interserver.net/tips/kb/syn-flood-attack-prevent/)
        

### Reset Attack

- Spoofed RST packet forces disconnect
    

### Hijack Attack

- Sends spoofed packets with correct sequence number
    
- Tools: `netwox 40`
    

## DTLS and Datagram Security

### Use Cases

- SIP, gaming, voice/video chat
    
- Works over UDP
    
- Preserves TLS semantics
    

### Security Enhancements

- Adds sequence numbers to datagrams
    
- Handles packet loss with retransmission timers
    
- Maintains MAC integrity
    
    - [https://community.rti.com/static/documentation/connextdds/5.2.0/doc/manuals/connext_dds/html_files/RTI_ConnextDDS_CoreLibraries_UsersManual/Content/UsersManual/Datagram_Transport_Layer_Security__DTLS_.htm](https://community.rti.com/static/documentation/connextdds/5.2.0/doc/manuals/connext_dds/html_files/RTI_ConnextDDS_CoreLibraries_UsersManual/Content/UsersManual/Datagram_Transport_Layer_Security__DTLS_.htm)
        

## HTTPS and Web Security

### HTTP over SSL (RFC 2818)

- Port 443
    
- Encrypts:
    
    - URLs
        
    - Forms
        
    - Cookies
        
    - Headers
        
- HTTPS = HTTP + TLS
    
    - [https://www.hhs.gov/sites/default/files/securing-ssl-tls-in-healthcare-tlpwhite.pdf](https://www.hhs.gov/sites/default/files/securing-ssl-tls-in-healthcare-tlpwhite.pdf)
        

## MAC, ARP, and DoS Attacks

### MAC Spoofing

- MACs can be changed via config
    
- Attack: clone MAC, disable victim
    
- Counter:
    
    - Port blocking
        
    - Check for duplicate MACs
        

### ARP Spoofing

- Attacker poisons ARP cache
    
- Tools: `arpspoof`, Wireshark, Arpwatch
    
    - [www.xarp.net/](http://www.xarp.net/)
        

### DoS Overview (NIST)

- Targets:
    
    - Network bandwidth
        
    - System resources
        
    - Application resources
        

### Classic DoS

- Ping of Death
    
- Smurf Attack:
    
    - ICMP echo with spoofed IP
        
    - Amplified by all devices
        
    - [https://usa.kaspersky.com/resource-center/definitions/smurf-attack](https://usa.kaspersky.com/resource-center/definitions/smurf-attack)
        

## Distributed DoS (DDoS)

### Attack Network

- Botnets (zombies) controlled by attacker
    
- Hireable in underground markets
    
- Tools scan for vulnerable devices
    
    - [http://www.digitalattackmap.com/](http://www.digitalattackmap.com/)
        

## Tools and Commands

### MAC Address Handling

```bash
# Linux
ifconfig eth0 hw ether 00:11:22:33:44:55

# Windows
# Network Connections > Adapter > Configure > Advanced > Network Address
```

### ARP Spoof

```bash
arpspoof 192.168.1.10 192.168.1.100
arpspoof 192.168.1.100 192.168.1.10
```

### TLS Session Key Details

- pre_master_secret: 46B
    
- master_secret: 48B
    
- session_keys: MAC, encryption, IV