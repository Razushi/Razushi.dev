```
Notes/
├── Cybersecurity
├── Attack Types
├── Risk & Threats
├── Security Goals & Strategy
```
## Cyber Attack Incident Diagram
Defence will be based on:
- Vendor tools and products
- Frontline technical staff
- SOC monitoring team
- Management decision-making

## What is Cybersecurity?
- Protects information/data across all platforms (PCs, mobile devices, networks).
- Bad actors aim to steal, corrupt, or exploit data.
- Deploying people, policies, processes, and tech to combat attacks.
- Protects reputations, livelihoods, and competitiveness.

## Definitions
- **Information Security**: All forms of information (paper, digital, networks).
- **Data Security**: Focus on valuable data/assets.
- **Cybersecurity**: Encompasses computers, networks, infrastructure.

## Well-known Attack Types
- **Botnet Attacks** → Coordinated DDoS via compromised machines.
- **Spoofing** → Fake sources (emails, sites, SMS).
- **Spyware** → Gathers info without consent.
- **Malware** → Malicious programs.
- **Phishing** → Social engineering for scams.

## Motives Behind Cyber Attacks
- Monetary gains
- Damaging brand value
- Cyberterrorism
- Espionage (gov/business secrets)
- Cyber warfare

## Common Origins of Threats
- Opening emails from unknown senders → Verify sender.
- Weak passwords → Use strong, rotate often.
- Outdated antivirus → Patch and update.
- Unprotected mobile devices → Secure and restrict.
- Ignoring system updates → Keep OS/software patched.
- Unverified third-party apps → Verify sources.

## Security Strategy
- **Detection** → Identify policy violations.
- **Prevention** → Block policy violations.
- **Recovery** → Stop, assess, repair, continue operations.
- Maintain constant awareness.
- Cybersecurity is essential for digital/economic stability.

## Core Security Goals

### Confidentiality
- Prevent unauthorised info disclosure.
- Breach examples:
  - Lost laptops
  - Unattended terminals
  - Hacker malware access
  - Confidentiality agreement violations
  - Info misuse for personal/business gain
- Confidential Data:
  - IP, PII, credit/bank info, health, trade secrets

### Integrity
- Data changed only in authorised ways.
- System operates without unauthorised manipulation.
- Breach examples:
  - Malware injection
  - Malicious encryption
  - Insider threats

### Availability
- Ensure timely access for authorised users.
- Breach examples:
  - DoS attacks
  - System/software failure
  - Bandwidth choking
  - Hardware issues

## Other Security Goals
- **Authenticity** → Verifies identity and data source.
- **Accountability & Non-repudiation** → Actions traceable to entity.
- **Access Control** → Resource access limited to approved entities.

## Vulnerabilities, Testing, and Threats
- **Vulnerability** → Flaw allowing policy violation.
- Formal verification can help.
- **Penetration Testing** → Proves presence, not absence of vulnerabilities.
- **Threats** → Exploiting vulnerabilities = harm.

## Security Attack Types
- Threats become attacks → May involve multi-step violations.
- Attackers impersonate employees.
- Categories:
  - Passive → Eavesdropping, sniffing.
  - Active → Modify or disrupt resources.
  - Insider → Internal actor.
  - Outsider → External actor.

## Network-Based Exploits
- Attack surfaces:
  - OS, apps, hardware, network equipment.
- Methods:
  - Malware, config/syntax/validation weaknesses.
- Attack types:
  - **Confidentiality** → Eavesdropping, scraping.
  - **Integrity** → Data manipulation.
  - **Authenticity** → Phishing, DNS, password cracking.
  - **Availability** → DDoS.
  - **Evasion** → Polymorphic/mutated malware.

## Security Vulnerability List
1. SQL Injection
2. XSS
3. Buffer Overflows
4. Format Strings
5. Integer Overflows
6. Command Injections
7. Poor error handling
8. Unprotected traffic
9. Magic URLs/hidden fields
10. Improper SSL/TLS use
11. Weak passwords
12. Poor data protection
13. Ransomware
14. File access issues
15. DNS trust
16. Race conditions
17. Unauthenticated key exchange
18. Weak random generation
19. Phishing
20. CSRF

## Human Error in Security
1. Poor sanitisation of input
2. System state mismanagement
3. Weak crypto/auth models
4. Improper data storage
5. Race condition handling flaws
6. Obscurity as security
7. Trusting unreliable components

**Cybersecurity Professional Questions**:
1. How does an attack happen?
2. How bad can it get?
3. How to detect it?
4. How to prevent it?

## Security Breach Classifications
### High
- Serious adverse effects to operations/assets.

### Moderate
- Some adverse effects.

### Low
- Limited effects.

## Cybersecurity Challenges
- Balancing Tech and Public Policy
- No metrics for "insecurity"
- Internet has no boundary or device limit

## Risk Assessment
- **CVSS Calculator** (NIST): http://nvd.nist.gov/cvss.cfm?calculator&version=2
- **Mitre CVE List**: https://cve.mitre.org/compatible/vulnerability_management.html
- **FIPS 200 (Security Requirements)**: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.200.pdf

## ICS Attacks
- **Stuxnet** → SCADA targeting.
- **WannaCry** → NHS impact.
- **Mirai** → DNS attack (Dyn).
- **Saudi Aramco** breach.
- ICS now called IIoT in Industry 4.0 → AI, automation, real-time data.

## IIoT Threat Layers
- **L0**: Physical (generators/fans)
- **L1**: RTUs, PLCs
- **L2**: HMI systems
- **L3**: Ops systems (DNS/historian)
- **L4**: Enterprise IT (SIEM → MSSP)
- Firewall exists between L3 and L4

## Top 4 Mitigation Strategies
1. **Application Whitelisting** → Only approved apps run.
2. **Patching** → Auto-update systems, consider app compatibility.
3. **Restrict Admin Privileges** → Separate root account, no net access.
4. **Defence-in-Depth** → Multiple layered protections.