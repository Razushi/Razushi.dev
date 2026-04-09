```plaintext
Notes/
├── Cryptography Basics
├── Public Key Infrastructure
├── Certificates and Authorities
├── Attacks and Defences
├── Real-World Case Studies
└── Tools and Commands
```

## Cryptography Basics

### Cryptographic Functions

- **Confidentiality**: Encrypt sensitive data
    
- **Integrity**: Use hash functions like SHA-256
    
- **Authentication**: Hash passwords, verify identities
    
- **Secure Communication**: Used in banking, blockchain
    
- **Non-Repudiation**: Digital signatures prevent denial
    
- **Attack Protection**: Prevent brute-force, MITM, replay
    

### Symmetric vs Asymmetric

- **Symmetric**: One key → fast but shared risk
    
- **Asymmetric**: Public/private key pair → scalable
    

### Common Algorithms

- **Symmetric**:
    
    - DES: 56-bit
        
    - AES: 128/192/256-bit
        
    - IDEA: 128-bit
        
- **Asymmetric**:
    
    - RSA: 1024/2048/4096-bit
        
    - ECC: 160-521-bit
        
    - DHKE / DSA: 1024-3072-bit
        

### RSA Key Generation

- `p = 17`, `q = 23`, `n = 391`, `z = 352`
    
- Public exponent `k = 3`
    
- Private key `j = 235` via `k × j ≡ 1 (mod z)`
    

### Encryption & Decryption

- Encrypt: `E = P^k mod n` → e.g. `188`
    
- Decrypt: `P = E^j mod n` → e.g. `42`
    

## Public Key Infrastructure

### Key Components

- **Plaintext** → input data
    
- **Encryption algorithm**
    
- **Public key** → used to encrypt
    
- **Ciphertext** → encrypted output
    
- **Decryption algorithm** → decrypts using private key
    

### Vulnerabilities

- MITM
    
- Brute force
    
- Key management flaws
    
- Chosen-ciphertext
    
- Side-channel
    

## Certificates and Authorities

### Digital Signature Process

**Signing:**

1. Hash original message
    
2. Encrypt hash with private key → signature
    
3. Attach signature to message
    

**Verification:**

1. Decrypt signature with public key → hashed value
    
2. Recompute hash on message
    
3. Match → valid, mismatch → tampered
    

### PKI Components

- **CA (Certificate Authority)**: Binds identity to public key
    
- **Digital Certificates**: Assert identity
    
- **X.509**: Standard format
    

### Types of Certificates

- **DV (Domain Validated)**:
    
    - Uses WHOIS, validated via email/HTTP/DNS
        
- **OV (Org Validated)**:
    
    - Includes org verification, address, phone check
        
- **EV (Extended Validated)**:
    
    - High assurance, legal docs, higher cost
        

### Metadata and Keys

- **Issuer**: Who signed the cert
    
- **Subject**: Who owns it
    
- **Validity**: Time range
    
- **Public Key**: RSA + modulus/exponent
    
- **Signature**: CA's encrypted hash
    

## Attacks and Defences

### MITM Attack

- If public key origin can't be verified, attacker can spoof
    
- CA and digital signature defend by binding identity to public key
    

### Fake/Forwarded Certificates

- Forwarded authentic cert: safe (no private key access)
    
- Fake certs: browser warning (untrusted CA)
    
- Wrong domain: browser handshake failure
    

### Proxy MITM

- Proxy installs self-signed root cert in browser
    
- Intercepts HTTPS → creates fake cert → verified if proxy cert is trusted
    

## Real-World Case Studies

### DigiNotar Breach (2011)

- Private keys stolen
    
- Rogue certs issued
    
- MITM on Google subdomains
    

### Comodo Breach (2011)

- Southern Europe office compromised
    
- 9 certs for 7 domains issued
    
- Targeted browser extensions (e.g. Firefox add-ons)
    

### Hash Collisions

- **MD5**: Broken at CRYPTO2004
    
- **SHA-1**: Broken via SHAttered (Google 2017)
    
- **Fix**: Use SHA-256+
    

### Unicode Phishing

- `xn--80ak6aa92e.com` appears as `apple.com`
    
- Exploits Unicode rendering in browsers
    

## Tools and Commands

### View Certificate from Website

```bash
openssl s_client -showcerts -connect www.paypal.com:443 </dev/null > paypal.pem
openssl x509 -in paypal.pem -text -noout
```

### Create Intermediate CA Certificate

```bash
openssl ca -in modelIntCA.csr -out modelIntCA_cert.pem \
  -md sha256 -cert modelCA_cert.pem -keyfile modelCA_key.pem -extensions v3_ca
```

### Extensions: X509v3

```plaintext
x509v3 Basic Constraints:
  CA:TRUE
```

## X.509 Certificates

- Defined by ITU-T
    
- Authentication framework for directories
    
- Doesn’t mandate algorithms (RSA recommended)
    

## CA Core Functions

- **Verify subjects**: Check identity
    
- **Sign certificates**: Using CA private key
    
- **Operate as CA**: Issue certs to users/servers
    

### Root vs Intermediate

- **Root CA**: Self-signed, preinstalled
    
- **Intermediate CA**: Chain of trust → Root → Int → End Entity
    

### Verifying Chains

- Save each cert to file (e.g., paypal.pem, symantec.pem)
    
- Verify chain using openssl or browser
    

## Trusting Certificates

- Pre-installed in OS/software → trusted
    
- Manually added → up to user trust
    
- Self-signed from unknown → don’t trust
    

## Revoking Certificates

- Reasons:
    
    - Private key compromised
        
    - Org name change
        
    - Policy non-conformance
        
- Usually expires naturally or revoked earlier
    

## Key Exchange: Diffie-Hellman

- Securely share session key over insecure channel
    
- Used in TLS/SSL
    
- Based on discrete logarithm problem
    

## User Identity and Management

- **Authentication**: Sign in users; social/enterprise login
    
- **Authorization**: Protect operations, apply RBAC
    
- **User Management**: Track lifecycle, manage access, log activity
    

## Useful Links

- [https://en.wikipedia.org/wiki/Public_key_infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure)
    
- [https://en.wikipedia.org/wiki/X.509](https://en.wikipedia.org/wiki/X.509)
    
- [https://java.sun.com/j2se/1.5.0/docs/guide/security/cert3.html](https://java.sun.com/j2se/1.5.0/docs/guide/security/cert3.html)