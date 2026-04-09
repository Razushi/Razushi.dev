```plaintext
Notes/
├── Social Engineering Attacks
├── Email Infrastructure & Protocols
├── Email-Based Threats
├── Email Security Standards
```

---

## Social Engineering Attacks

### What is Social Engineering?

- Art of manipulating people and their behaviour to extract confidential information
    
- Break standard security practices; relies on psychological manipulation
    
- Trickery or deception for information gathering
    
- Attackers use spyware/malware or deceive victims to obtain passwords and sensitive info
    
- Siemens test: 85% of office workers fell for social engineering
    
- Common info targeted:
    
    - First pet's name
        
    - Parent's DOB
        
    - Birthplace → Used to guess security answers
        

### Rise and Prevalence

- In 2023, scams = 50% of social engineering attacks worldwide
    
- [Social Engineering Stats](https://www.coolest-gadgets.com/social-engineering-statistics/)
    

### Financial Impact (Healthcare)

![](99%20-%20Assets/2025/2025-05-26-13-05-11.png)

- $4.95 billion projected losses by 2025 in healthcare
    
- [VPNRanks Report](https://www.vpnranks.com/resources/social-engineering-attacks-statistics/)
    

### Notifiable Data Breaches (AU, Jan–Jun 2023)

![](99%20-%20Assets/2025/2025-05-26-13-05-81.png)

- [OAIC Source](https://www.oaic.gov.au/privacy/notifiable-data-breaches/notifiable-data-breaches-publications/notifiable-data-breaches-report-january-to-june-2023)
    

### ACCC Scam Loss Report

![](99%20-%20Assets/2025/2025-05-26-13-05-43.png)

- $2.7 billion lost in 2023
    
- [ABC Source](https://www.abc.net.au/news/2024-04-28/scam-losses-in-2023-banks-government-accc-report-technology-work/103777548)
    

### General Cost of Social Engineering

![](99%20-%20Assets/2025/2025-05-26-13-05-15.png)

- [Portswigger](https://portswigger.net/daily-swig/social-engineering)
    
- [Guardian](https://www.theguardian.com/technology/2025/feb/23/crypto-exchange-seeks-bybit-ethereum-stolen-digital-wallet)
    

### Attack Cycle

- **Prepare** → Identify victim, gather data, choose method
    
- **Engage** → Spin story, gain trust, manipulate
    
- **Exploit** → Execute, extract, disrupt
    
- **Exit** → Wipe traces, natural closure
    

### Tactics

- Pretexting → Fake scenarios
    
- Baiting → USBs/downloads
    
- Scareware → Fake security alerts
    
- Phishing/Vishing/Spear Phishing → Traps via email/phone
    
- Catfishing → Fake online persona
    
- Tailgating/Piggybacking → Physical intrusion
    

[SEON Resource](https://seon.io/resources/social-engineering-attacks/)

### Examples

- **Phishing** → Targeted emails or messages
    
- **Vishing** → Scare calls
    
- **Smishing** → Malicious SMS messages
    

---

## Email Infrastructure & Protocols

### Internet Message Protocol

- Exchange info using pre-agreed TCP/IP protocols
    
- Formats, sessions, errors, etc.
    

### How Email Works

![](99%20-%20Assets/2025/2025-05-26-13-05-56.png)

- **How it seems**: Outbox → Inbox
    
- **How it works**:
    
    - MUA → MSA → MTA → Internet → Spam filter → MDA → MUA
        

### Architecture

![](99%20-%20Assets/2025/2025-05-26-13-05-18.png)

- **User World**: MUA, Message Store
    
- **Transfer World**: MSA, MTA, MDA
    

### SMTP

![](99%20-%20Assets/2025/2025-05-26-13-05-17.png)

- Text-based, TCP port 25
    
- E.g. `HELO`, `MAIL FROM`, `RCPT TO`
    
- Replies start with 3-digit codes (e.g., 250 OK)
    
- Dialogue example included  
    ![](99%20-%20Assets/2025/2025-05-26-13-05-91.png)
    

### POP3/IMAP

![](99%20-%20Assets/2025/2025-05-26-13-05-43-1.png)

- POP3 (Port 110): Auth, retrieve & delete
    
- IMAP: More advanced; syncs folders, better auth
    

### MIME

- Handles multimedia email (text, image, video)
    
- Supports non-English chars, binary files
    

---

## Email-Based Threats

### Common Email Threats

![](99%20-%20Assets/2025/2025-05-26-14-05-40.png)

- Phishing → 90% of attacks begin this way (Cisco)
    
- 1.76 billion phishing emails in 2023 (51% rise)
    
- Facebook: most impersonated brand (23%)
    

### Real Examples

![](99%20-%20Assets/2025/2025-05-26-14-05-90.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-20.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-85.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-99.png)

### Consequences

- Clicking = Password stolen, malware, account hijack
    
- Results = Data leaks, destruction, identity theft, ransomware
    

---

## Email Security Standards

### PGP (Pretty Good Privacy)

![](99%20-%20Assets/2025/2025-05-26-14-05-78.png)

- Provides confidentiality, integrity, authentication
    
- Uses zip, ASCII, hybrid crypto
    
- [FreeCodeCamp PGP Explanation](https://www.freecodecamp.org/news/how-does-pretty-good-privacy-work-3f5f75ecea97/)
    

### OpenPGP

- Symmetric: IDEA, TripleDES, CAST5, AES, Twofish
    
- Public: RSA, Elgamal, DSA
    
- Hash: SHA-x, MD5, RIPE-MD
    

### PGP Workflow

![](99%20-%20Assets/2025/2025-05-26-14-05-25.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-41.png)

- Hash → Encrypt w/ private key → Compress → Encrypt w/ symmetric key
    
- Symmetric key → Encrypt with recipient's public key
    

### S/MIME

- RSA/SHA-256 for auth, AES for encryption
    
- X.509 certificates, PKI trust  
    ![](99%20-%20Assets/2025/2025-05-26-14-05-62.png)  
    ![](99%20-%20Assets/2025/Pasted%20image%2020250526140522.png)
    

#### Confidentiality & Encryption

![](99%20-%20Assets/2025/2025-05-26-14-05-07.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-00.png)

- AES symmetric encryption
    
- Encrypted content key exchanged via RSA
    

#### Key Management

![](99%20-%20Assets/2025/2025-05-26-14-05-26.png)

- Uses PKI, X.509, CA trust chain
    

#### Sign + Encrypt

![](99%20-%20Assets/2025/2025-05-26-14-05-97.png)

- Message signed w/ sender private key → Encrypted w/ recipient public key
    
- Signing order depends on visibility/security requirements
    

#### Certificate Chain

![](99%20-%20Assets/2025/2025-05-26-14-05-82.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-65.png)

### S/MIME vs OpenPGP

- [Table format comparison is preserved separately – see original source]
    

### DKIM

![](99%20-%20Assets/2025/2025-05-26-14-05-86.png)

- Signs email via domain-level keys
    
- Uses DNS for key retrieval
    

### SPF

![](99%20-%20Assets/2025/2025-05-26-14-05-35.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-72.png)

- Sender publishes SPF TXT in DNS
    
- Receiver validates sender IP against it  
    ![](99%20-%20Assets/2025/2025-05-26-14-05-57.png)
    

### DMARC

![](99%20-%20Assets/2025/2025-05-26-14-05-06.png)  
![](99%20-%20Assets/2025/2025-05-26-14-05-66.png)

- Ensures alignment of FROM with SPF/DKIM
    
- Uses DNS TXT policy (reject/quarantine/none)
    

#### DMARC Processing

![](99%20-%20Assets/2025/2025-05-26-14-05-26-1.png)

- Sender adds DKIM/SPF → Receiver applies DMARC policy
    

---

## Defending Against Email Attacks

### What to do if you click

- Report, block, remove, check accounts
    

### Avoid clicking

- Skip links, ignore files
    
- Always verify source
    

### Social Engineering Signs

- Urgency, threats, flattery, offers too good to be true, etc.
    

---

## Summary

- Social engineering/phishing = top attack vectors
    
- Email is most widely exploited app on the internet
    
- Fake emails are major contributors to breaches
    
- Raising user awareness is key