```plaintext
Notes/
├── Social Engineering Attacks
├── Email Infrastructure & Protocols
├── Email-Based Threats
├── Email Security Standards
├── VPN & IPsec
├── Firewalls & Packet Filtering
```

---

## VPN & IPsec

### VPN Usage Facts

- 1.6 billion people (31% of internet users) use VPNs
    
- 2024 market: $61.42B → $71.66B in 2025 (CAGR 16.7%)
    
- [G2 VPN Stats](https://www.g2.com/articles/vpn-statistics)
    
- [Business Research Report](https://www.thebusinessresearchcompany.com/report/virtual-private-network-global-market-report)
    

### VPN in Australia

- 27% of consumers and 36% of small businesses use VPNs (auDA 2024)
    
- 2023 AU VPN market: US$1.099B (1.7% global)
    
- Projected to hit $1.981B by 2030 (CAGR 8%)
    
- [Redsearch VPN Report](https://www.redsearch.com.au/resources/vpn-statistics-australia/)
    

### IP Network Security Issues

- Eavesdropping, Packet tampering, IP spoofing → MITM, DoS
    
- Security tools: SSL/TLS (web), S/MIME (email), SSH (remote login)
    
- **IPsec** secures at IP layer:
    
    - Protects all IP protocols (IPv4/IPv6)
        
    - Provides authentication, integrity, encryption via VPN tunnels
        

### VPN Overview

- VPN creates private network over public internet
    
- Utilises a VPN server to authenticate and route traffic
    
- Internal network protected by firewalls/private IPs
    

### VPN Setup

![](99%20-%20Assets/2025/2025-05-26-14-05-00-1.png)

- All traffic goes through VPN gateway → authenticated before accessing private network
    

### IP Tunneling Types

![](99%20-%20Assets/2025/2025-05-26-14-05-47.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-68.png)

- **IPSec** and **TLS/SSL** tunneling
    

### IPsec Security

- **ESP** & **AH**: Auth + Integrity (connless + sequence)
    
- ESP adds encryption (AES)
    
- Available in transport or tunnel mode
    

### Transport vs Tunnel Mode

![](99%20-%20Assets/2025/2025-05-26-14-05-14.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-13.png)

- **Transport**: Only payload encrypted, IP header visible
    
- **Tunnel**: Whole packet is encapsulated
    

### Security Association (SA)

- Defines crypto details: keys, mode, IV, etc.
    
- One-way link → Two SAs per connection
    
- Each SA has SPI; stored in host database
    

### ESP Packet Format

![](99%20-%20Assets/2025/2025-05-26-14-05-60.png)

- Used in both IPv4 and IPv6
    
- Confidentiality and integrity via symmetric cipher
    

### Authentication Header (AH)

![](99%20-%20Assets/2025/2025-05-26-14-05-40-1.png)

- HMAC-based auth
    
- Authenticates IP header fields
    
- No encryption
    

### IPsec Key Management

- Manual → Keys exchanged offline
    
- Pre-shared symmetric keys → Hashed w/ nonces
    
- Online → IKE + Diffie-Hellman key derivation
    

### VPN Security Vulnerabilities

- Avoid PPTP and L2TP (insecure)
    
- Prefer OpenVPN or WireGuard
    
- Keep systems patched
    
- Trustworthy provider, strong passwords, MFA
    

[Canberra Times Report](https://www.canberratimes.com.au/story/8581443/7-surprising-stats-revealing-australias-vpn-surge/)

---

## Firewalls & Packet Filtering

### Firewall Basics

- Enforces access control, isolates trusted/untrusted zones
    
- Default deny, permit only needed services
    
- Secure placement, logging, config management
    

![](99%20-%20Assets/2025/2025-05-26-14-05-68-1.png)

### Limitations

- Can't protect against:
    
    - Insider threats
        
    - WLAN abuse
        
    - Malware via USB/laptop
        
- Must be on hardened systems
    

### Access Policy

- Derived from risk assessment
    
- Specifies address ranges, protocols, content types
    

### Actions

- **Accept**: allow
    
- **Deny**: silently block
    
- **Reject**: block + notify (ICMP)
    
- **Ingress**: inbound filter
    
- **Egress**: outbound filter (e.g., social media blocks)
    

### Filter Types

- **Packet Filter** (stateless)
    
- **Stateful Firewall**
    
- **Application/Proxy Firewall**
    

#### Packet Filters

![](99%20-%20Assets/2025/2025-05-26-14-05-61.png)

- Simple, fast, header-only, no state
    
- Limited logging, no app-layer inspection
    

|Rule|Dir|Src Addr|Dest Addr|Protocol|Port|Action|
|---|---|---|---|---|---|---|
|1|In|External|Internal|TCP|25|Permit|
|5|Any|Any|Any|Any|Any|Deny|

#### Packet Filter Attacks

- IP spoofing, source routing, tiny fragments
    

#### Stateful Firewall

![](99%20-%20Assets/2025/2025-05-26-15-05-40.png)

- Tracks flows, monitors context
    
- Connection state table
    

|Benefit|Limitation|
|---|---|
|Spoofing resistance|No app-layer inspection|
|Richer logs|Complex against dynamic ports|

#### Application/Proxy Firewall

![](99%20-%20Assets/2025/2025-05-26-15-05-06.png)

- Full application-layer traffic analysis
    
- Acts as intermediary, authenticates, relays
    
- Higher security, lower performance
    

#### Proxy Functions

- TCP/IP auth, relay
    
- Must have per-app proxy code
    
- Evade egress filter via anonymizing proxy
    

#### Netfilter

- Kernel-level filtering in Linux
    
- Hooks → Callback modules (via LKMs)
    

#### Iptables

- Built on Netfilter
    

|Table|Chains|Role|
|---|---|---|
|filter|INPUT, OUTPUT|Packet filtering|
|nat|PREROUTING, POSTROUTING|Address changes|
|mangle|All|Modify content|

![](99%20-%20Assets/2025/2025-05-26-15-05-58.png)

#### Conntrack States

- **NEW**: New flow started
    
- **ESTABLISHED**: Bi-directional flow
    
- **RELATED**: Indirectly linked flows
    
- **INVALID**: Unexpected packets
    

#### Extensions

- **Conntrack**: Stateful firewalling
    
- **Owner**: Block by user ID (outgoing only)
    

#### Proxy for Web

- Redirect browser traffic to proxy
    
- Bypass egress rules, anonymize traffic
    

#### SSH Tunneling

![](99%20-%20Assets/2025/2025-05-26-15-05-31.png)

- Create SSH tunnel from blocked env → trusted remote
    
- Example: `$ ssh -L 8000:www.facebook.com:80 home`
    

#### Dynamic Port Forwarding

![](99%20-%20Assets/2025/2025-05-26-15-05-98.png)

- `$ ssh -D 9000 -C home`
    
- Configures SOCKS proxy
    
- Works with SOCKS-supporting browsers
    

#### SOCKS (RFC1928)

![](99%20-%20Assets/2025/2025-05-26-15-05-69.png)

- Circuit-level gateway
    
- Client → Auth → Relay request via server
    

#### Bastion Hosts

- Hardened, minimal services
    
- Small, simple proxies
    
- App/circuit-level proxy point
    

#### Host-based & Personal Firewalls

![](99%20-%20Assets/2025/2025-05-26-15-05-38.png)

- Localised protection
    
- Additional layer beyond network firewall
    

#### Topologies

- Screening router
    
- Bastion inline/T
    
- Double bastion
    
- Distributed firewall for large orgs  
    ![](99%20-%20Assets/2025/2025-05-26-15-05-58-1.png)
    

#### Firewall Comparison

|Type|Security|Computation|UDP/ICMP Support|
|---|---|---|---|
|Stateless Filter|3|1|Yes|
|Stateful Filter|2|2|Yes|
|Circuit-level|2|3|Yes (SOCKS v5)|
|Application-level|1|4|App Dependent|

### Next Gen Firewalls

- Fine-grained control, role/user awareness
    
- Proactive threat protection
    
- Support for NAT, VPN, SPI, IPS