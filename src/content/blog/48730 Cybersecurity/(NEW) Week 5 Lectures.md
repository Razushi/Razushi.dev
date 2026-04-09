```plaintext
Notes/
├── OS Security Overview
├── Secure OS Design
├── Buffer Overflow & Exploits
├── Mobile OS & Security
├── Penetration Testing Tools
```

---

## OS Security Overview

### Desktop Operating System Components

- Process Management
    
- File Management
    
- Network Management
    
- Main Memory Management
    
- Secondary Storage Management
    
- I/O Device Management
    
- Security Management
    
- Command Interpreter System
    

Source: [Javatpoint](https://www.javatpoint.com/components-of-operating-system)

### Security Threats & Prevention

- Systems may be compromised _before_ latest patches are applied
    
- Steps to secure systems:
    
    - Assess risks and plan deployment
        
    - Secure base OS and key apps
        
    - Secure critical content
        
    - Apply network protection mechanisms
        
    - Define security maintenance processes
        

## Secure OS Design

### OS Hardening Steps

- Install and patch OS
    
- Harden by:
    
    - Removing unneeded services/apps/protocols
        
    - Enforcing app whitelisting
        
    - Setting users/groups/permissions (least privilege)
        
    - Configuring resource controls
        
    - Installing anti-virus, HIDS, firewalls
        
    - Enabling auditing/monitoring
        
    - Testing security measures
        

### Authentication & Authorization

- Authentication verifies identity (physical + digital)
    
- Authorization determines access privileges (only after auth)
    

### User Administration Best Practices

- Set consistent naming conventions
    
- Enforce password policies and first-time password changes
    
- Avoid default passwords
    

### Trusted Operating System (NIST Definition)

- Confidence in implemented security mechanisms:
    
    - Separation, isolation
        
    - Least privilege
        
    - Access control (DAC + MAC)
        
    - Trusted path, auth, enforcement
        

### Common Design Flaws

- Bad defaults, poor documentation, unsafe assumptions
    
- Buffer overflows, race conditions
    
- Weak randomness, untested code
    

### Memory & File System Security

- Must secure memory and file systems first
    
- CPU arch (x86, ARM, little/big endian) affects implementation
    

## Buffer Overflow & Exploits

### Consequences of Memory Exploits

- Malicious return addresses can lead to:
    
    - Program crashes
        
    - Access violations
        
    - Injection of attacker's code
        

### What is a Buffer Overflow?

- Writing more data than a buffer can hold (common in C/C++)
    
- Overwrites adjacent memory or return address
    

### Exploit Creation (badfile)

**Task A:**

- Find offset from buffer base to return address using GDB
    
- Use: `p &buffer`, `p $ebp`, and calculate `return = $ebp + 4`
    

**Task B:**

- Use GDB to find address of injected shellcode
    
- Pad badfile with NOPs before shellcode to improve jump chance
    

**Note:** Return address must not contain `\x00` to avoid early string termination by `strcpy()`

### Execution Flow

- Disable countermeasures → compile vulnerable app
    
- Create badfile → run exploit → execute shell
    

### Defenses

- Use safer libs: `strncpy()`, `strncat()`
    
- OS-level: ASLR, NX (non-exec) stack
    
- Compiler: Stack-Guard
    
- Hardware: NX-bit
    

### ASLR

- Randomises memory locations (stack, heap)
    
- Makes address prediction harder
    

### Defeating ASLR

- Enable via `sudo sysctl -w kernel.randomize_va_space=2`
    
- Repeated execution may succeed by brute force (19 min example)
    

### Canary and StackShield

- Canary (Stack Guard): buffer → canary → return addr
    
- StackShield: return addr copy is stored elsewhere
    

### NX Stack

- Separates code and data memory using CPU NX-bit
    
- Can be bypassed using return-to-libc attack
    

### mmap() + Race Conditions

- `mmap()` maps files to memory
    
- Important args: start addr, size, protections, file descriptor
    
- MAP_SHARED vs MAP_PRIVATE impacts copy-on-write behaviour
    

### Copy On Write

- Forked child shares memory until one writes (then copies)
    
- Dirty pages are managed per-process
    

### Releasing Memory

- `madvise(void *addr, size_t len, MADV_DONOTNEED)`
    
- Tells kernel we don't need memory region anymore
    

### Dirty-COW Attack

- Exploits race in copy-on-write logic
    
- Advises kernel to discard private copy → reverts to shared memory
    
- Attacker writes to read-only file via exploit
    

## Mobile OS & Security

### Mobile Operating Systems

- Java ME, Palm OS, Symbian, Linux OS
    
- Windows Phone, Android, iOS
    

### Key Features

- Multitasking
    
- Memory & File System Management
    
- I/O and keypad interfaces
    
- Multimedia support
    
- Security + Scheduling
    

### Android vs iOS Architecture

**Android (Linux Kernel):**

- App, SystemServer, SurfaceFlinger, Launcher → Linux Kernel (Graphics/Input)
    

**iOS (XNU: Mach + BSD):**

- App, SpringBoard, notifyd, launchd → XNU Kernel
    
- Mach: IOKit, IPC, Graphics
    
- BSD: VFS, Sockets, Security
    

### Mobile Vulnerabilities

- Insecure storage (e.g. credentials)
    
- Weak authentication/authorization
    
- Unsecured communication (no TLS)
    
- Outdated software = known exploits
    
- Insecure APIs
    
- Jailbreaking/rooting
    

### Security Measures

- Encryption (local + in transit)
    
- Keychain / Encrypted Shared Preferences
    
- MFA
    
- TLS/SSL + Cert Pinning
    
- Strong device locks (biometric/PIN)
    
- Secure APIs (OAuth 2.0)
    
- Mobile Device Management (MDM)
    
- Library vetting
    

## Penetration Testing Tools

### Android (Termux)

- Linux terminal for Android
    
- Package mgmt via APT
    
- Supports:
    
    - Nmap, Metasploit
        
    - Hydra, SQLmap
        
    - John the Ripper, Wireshark
        
    - Tool-X
        

### iOS (iSH Shell)

- Unix-like shell for iOS without jailbreak
    
- Emulates Linux shell
    
- Lightweight CLI environment
    
- Tools:
    
    - Nmap, Curl, Git
        
    - Netcat, Hydra, Nikto, SQLmap
        
    - TCPdump (if available)
        

Sources:

- [Beyond Identity](https://www.beyondidentity.com/resource/hardening-desktop-operating-systems-in-security-conscious-organizations)
    
- [Wallarm](https://www.wallarm.com/what/buffer-overflow-attack-definition-types-use-by-hackers-part-1)
    
- [Statista - AU smartphone market](https://www.statista.com/statistics/861577/australia-mobile-device-vendors-market-share/)
    
- [AppSealing](https://www.appsealing.com/mobile-app-security-a-comprehensive-guide-to-secure-your-apps/)


---


• API Security Use secure authentication methods such as OAuth 2.0 for API access and ensure that APIs only expose necessary data to minimize the risk of data leakage.  
• Strong Device Locks Implement strong PINs, passwords, or biometric authentication (such as fingerprint or facial recognition) to  secure the device and prevent unauthorized access.  
• Mobile Device Management (MDM)  Implement MDM solutions to enforce security policies on devices used in corporate environments, ensuring they are properly configured and secured.  
• Library Vetting Thoroughly vet third-party libraries and SDKs for security issues before integrating them into applications to ensure they do not introduce vulnerabilities.