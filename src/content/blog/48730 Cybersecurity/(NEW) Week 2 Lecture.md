```plaintext
Notes/
├── Web Attacks
├── DNS Attacks and Cache Poisoning
├── SQL Injection
├── CSRF Attacks
├── XSS Attacks
└── Mitigation Strategies
```

## Web Attacks

### Categories

- DNS attacks (Cache poisoning)
    
- SQL injection
    
- CSRF (Cross-Site Request Forgery)
    
- XSS (Cross-Site Scripting)
    

### Common Mitigations

- Input sanitisation and validation
    
- Same-site cookies
    
- Prepared statements
    
- TLS/SSL for domain verification
    

### Study Questions

- How does DNS cache poisoning enable cyberattacks?
    
- What is XSS and how do you mitigate it?
    
- What is CSRF and how does it work?
    
- Common password cracking techniques?
    
- What is SQL Injection? How do you prevent it?
    

## Browser Threats

### Threat Vectors

- JavaScript, Flash, ActiveX vulnerabilities
    
- Embedded obfuscated Flash in JavaScript
    
- Hard to detect with standard AV tools
    

### Exploitation Methods

- Install ransomware
    
- Steal intellectual property
    
- Exfiltrate sensitive data
    

## How Browsers Work

- HTTP request: `GET /index.html HTTP/1.1 Host: www.example.com`
    
- HTTP response: `HTTP/1.1 200 OK`
    

### HTTP Status Codes

- 1xx: Informational (e.g. 100)
    
- 2xx: Success (200 OK, 204 No Content)
    
- 3xx: Redirection (301 Moved, 304 Not Modified)
    
- 4xx: Client Errors (403 Forbidden, 404 Not Found)
    
- 5xx: Server Errors (500 Internal, 503 Service Unavailable)
    

## DNS Attacks and Cache Poisoning

### DNS Vulnerabilities

- Cache poisoning
    
- Spoofing
    
- Flooding
    
- Reflection-based DDoS
    
- DNS tunnelling
    
- Domain lock-up
    

### Iterative Query Process

- Root server -> TLD server -> Authoritative server
    
- Local DNS caches responses with TTL
    

### DNS Response Sections

- Question
    
- Answer
    
- Authority
    
- Additional
    

### DNS Cache Poisoning

- Attacker forges a reply before real DNS response
    
- Kaminsky attack: ask different questions to bypass cache
    
- Malicious DNS server includes fraudulent info in Additional and Authority sections
    

### Host Compromise

- Modify `/etc/resolv.conf` to point to malicious DNS
    
- Modify `/etc/hosts` to redirect domains locally
    

### DoS on Root and TLD Servers

- Root servers are distributed and resilient
    
- TLDs like `.com` are resilient
    
- Obscure country-code TLDs are more vulnerable
    

### TLS/SSL Protection

- Validates identity via certificate and private key
    
- Helps prevent poisoning by proving site ownership
    

### DNSSEC Protection

- Root DNSKEY + RRSIG + DS records
    
- Chain of trust verifies authenticity from root to domain
    

## SQL Injection

### Exploitation Method

- Attacker injects SQL via form inputs or URLs
    
- Use `curl` to send crafted queries:
    
    ```bash
    curl 'www.example.com/getdata.php?EID=a%27%20OR%201=1%20%23&Password='
    ```
    

### Effects

- Data theft
    
- Modification via `UPDATE`/`INSERT`
    
- Potential deletion via `DROP DATABASE`
    

### Multiple SQL Statement Vulnerability

- MySQL (via PHP's `mysqli::query`) blocks multiple statements by default
    

### Prevention

- Prepared statements
    
- `mysqli::real_escape_string()` to escape input
    

## CSRF Attacks

### Core Concept

- Browser sends requests with cookies even to other domains
    
- Server can’t tell same-site vs cross-site
    

### Attack Flow

- User logs into sensitive site (e.g. bank)
    
- Attacker tricks user into visiting a malicious site
    
- Malicious site auto-sends a forged request:
    
    ```http
    GET http://www.bank32.com/transfer.php?to=3220&amount=500
    ```
    

### Causes

- Browser attaches session cookies
    
- Server trusts request origin blindly
    

### Countermeasures

- Referrer header (unreliable, may be stripped)
    
- Same-site cookies:
    
    - `Strict`: never sent cross-site
        
    - `Lax`: sent only on top-level navigations
        
- Secret token embedded in each form/page
    
- User-side prevention: log out, avoid multiple login sessions
    

## XSS Attacks

### Categories

- **Reflected XSS**: Injected script is reflected from the server in the response
    
- **Stored XSS**: Script is stored on the server and served to other users
    

### Consequences

- DOM manipulation (defacement)
    
- Request spoofing
    
- Credential/session theft
    

### Countermeasures

- **Filtering**: Strip JavaScript from input
    
    - e.g., `jsoup` library
        
- **Encoding**: Convert to safe HTML
    
    - `'<script>'` -> `&lt;script&gt;`
        
- **Sandboxing**: Limit execution rights
    
- **Secret Token**: Unique per user/session for validation
    

## Shared Vulnerability Cause

- Mixing of code and data is the root cause
    
- Affects:
    
    - SQLi
        
    - XSS
        
    - System function abuse
        
    - Format string vulnerabilities
        

## Summary

- Web-based attacks are common and impactful
    
- Phishing, XSS, SQLi, CSRF are core threats
    
- Use of TLS, input validation, and prepared statements crucial
    
- New attack vectors will continue to emerge despite HTTPS