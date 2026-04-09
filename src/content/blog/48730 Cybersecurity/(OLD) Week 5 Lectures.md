# Operating System Security
Desktop Operating System Components

Process management -> File Management -> Network Management -> Main Memory Management -> Secondary Story Management -> I/O Device Management -> Security Management -> Command interpreter system

https://www.javatpoint.com/components-of-operating-system

## Desktop Operating System Security  
• A system may be compromised during the installation process before  
latest patches can be installed  
– Attacker always looks for vulnerability in the system  
• Hence, planned process to secure systems against threat  
– Assess risks and plan the system deployment  
– Secure underlying operating system and then the key applications  
– Ensure any critical system content is secured  
– Ensure appropriate network protection mechanisms are used  
– Ensure appropriate processes are used to maintain security

## Desktop Operating Systems Hardening  
• First critical step in securing a system is to secure the base operating system  
• Basic steps  
 Install and patch the operating system  
 Harden and configure the operating system to adequately address the indentified security  
needs of the system by:  
Removing unnecessary services, applications, and protocols; Apply application whitelisting  
Configuring users, groups, and permissions; Least privilege principle  
Configuring resource controls  
 Install and configure additional security controls, such as anti-virus, host-based firewalls,  
and intrusion detection system (IDS); Continuous Monitoring and auditing  
 Test the security of the basic operating system to ensure that the above steps taken  
adequately address its security needs

## Designing a Secured system  
• Authentication:  
• Verifies user identity (Root, User, Guest)  
• Permits access to the operating system  
• Physical authentication:  
• Allows physical entrance to company property  
• Magnetic cards and biometric measures  
• Digital authentication: verifies user identity by digital means  
• Authorization  
• Process that decides whether users are permitted to perform the functions they request  
• Authorization is not performed until the user is authenticated  
• Deals with privileges and rights  
• Also, look at hardening Desktop OS

https://www.beyondidentity.com/resource/hardening-desktop-operating-systems-in-security-conscious-organizations

## Designing a Secured system

User Administration:
• Create user accounts  
• Set password policies  
• Grant privileges to users

Best practices:
- Use a consistent naming convention  
- Always provide a password to an account and  
force the user to change it at the first logon  
- Protect passwords  
-Do not use default passwords

## Trusted Operating System
NIST Definition:  
OS with level of confidence (based on rigorous analysis and testing) that the security principles and  
mechanisms (separation, isolation, least privilege, discretionary and non-discretionary access control,  
trusted path, authentication, and security policy enforcement) are implemented correctly and operate  
as intended even in the presence of adversarial activity.

## Mistakes start with errors
 Poor Design Choices/Assumptions  
	 Incorrect levels/Assumptions  
	 Poor default settings  
	 Poor failure modes  
	 Poor design review and documentations  
 Programming Errors  
	 Buffer Overflow  
	 Race conditions  
 Awareness  
	 Lack of insufficient testing  
	 Selection of bad programming language  
	 Predicted source of randomness  
	 Poor maintenance of legacy code  
	 Poor Documentation

## Memory and File system Security
• The contents of a computer are encapsulated in its memory  
and file system  
– Run as Process  
• Thus, protection of a computer’s content must start with the  
protection of its memory and its file system  
– Remember, different CPU architectures manage their memory and  
data differently.  
• 16 bit, 32 bit...., little endian, big endian, etc...

## Consequences  
• Overwriting return address with some random address can point to :  
– Invalid instruction  
– Non-existing address  
– Access violation  
– Injecting Attacker’s code Malicious code to gain access

## Buffer Overflow  
• A classic (and incredibly common) bug!  
• A buffer (for our purposes) is an array that user-supplied data is written into  
• In some programming languages (notably C and C++), arrays are not bounds-  
checked  
• Supply some data which is too long, write past the end of the array  
• This corrupts data in another array  
• If you’re an attacker, you can choose exactly how to corrupt the data

## Consequences of Buffer overflow  
• Modification of return address in a program making the program to crash  
• Return of program control to malicious code making the computer crash  
• Attacker injecting malicious code and executing them causing entire computer  
compromised

## How attacker runs Malicious Code?
https://www.wallarm.com/what/buffer-overflow-attack-definition-types-use-by-hackers-part-1

## Creation of The Malicious Input (badfile)

Task A : Find the offset distance between the base of the buffer and return  
address.  
Task B : Find the address to place the shellcode

### Task A:
1.Set breakpoint  
(gdb) b bof  
(gdb) run  
2.Print buffer address  
(gdb) p &buffer  
3.Print frame pointer address  
(gdb) p $ebp  
4.Calculate distance  
(gdb) p 0x02 – 0x01  
5.Exit (quit)  
● Breakpoint at vulnerable function using  
gdb  
● Find the base address of buffer  
● Find the address of the current frame  
pointer (ebp)  
● Return address is $ebp +4

### Task B : Address of Malicious Code  
• Investigation using gdb  
• Malicious code is written in  
the badfile which is passed  
as an argument to the  
vulnerable function.  
• Using gdb, we can find the  
address of the function  
argument.

To increase the chances of jumping to the correct address, of the malicious code, we can  
fill the badfile with NOP instructions and place the malicious code at the end of the buffer.

Note : NOP- Instruction that does nothing.

## Badfile Construction

1: Obtained from  
Task A - distance of  
the return address  
from the base of the  
buffer.  
2: Obtained from  
Task B - Address of  
the malicious code.  

## New Address in Return Address
Restrictions imposed by compiler :  
The new address in the return address of function stack [0xbffff188 +  
nnn] should not contain zero in any of its byte, or the badfile will have a  
zero causing strcpy() to end copying.  
e.g., 0xbffff188 + 0x78 = 0xbffff200, the last byte contains zero  
leading to end copy.

## Execution Results  
• Compiling the vulnerable code with all the countermeasures  
disabled.  
• Compiling the exploit code to generate the badfile.  
• Executing the exploit code and stack code.

## Mitigating Buffer overflow  
• Strategies for reducing the attack surface:  
– Use a managed language (C#, Java, Python, ...).  
• These never allow overflows.  
• Reduces attack surface to language implementation.  
– Static analysis of code.  
• Static analysis program (often expensive) parses program and attempts to prove a lack of buffer overflows.  
• Quite expensive if you want it done well.  
– Mark stack and heap pages as non-executable:  
• The CPU will notify the kernel if non-executable memory is jumped to, and the kernel will terminate the  
program.  
• Depending on the application, sometimes hard to implement (e.g. JIT Javascript compilers).  
• Almost useless because of Return-Oriented-Programming.

## Buffer Overflow: Countermeasures  
Developer approaches:  
• Use of safer functions like strncpy(), strncat() etc, safer dynamic link libraries that check the length of  
the data before copying.  
– strncpy(dest, src, n); dest[n] = ‘\0’  
OS approaches:  
• ASLR (Address Space Layout Randomization)  
Compiler approaches:  
• Stack-Guard  
Hardware approaches:  
• Non-Executable Stack

## Address Space Layout Randomization (ASLR)

To randomize the start location of the stack that is  
every time the code is loaded in the memory, the  
stack address changes. 

-> 

Difficult to guess the stack address in the  
memory.

-> 

Difficult to guess %ebp address and  
address of the malicious code

## Defeating ASLR  
1. Turn on address randomization (countermeasure)  
% sudo sysctl -w kernel.randomize_va_space=2  
2. Compile set-uid root version of stack.c  
% gcc -o stack -z execstack -fno-stack-protector stack.c  
% sudo chown root stack  
% sudo chmod 4755 stack  
3. Defeat it by running the vulnerable code in an infinite loop.  
However, the attacker was successful running above script for about 19 minutes on a 32-bit Linux  
machine and got access to the shell (malicious code got executed).

## Stack shield and Stack Guard (Canary)  
• Objective: Detecting whether the return address is  
modified before returning from a function  
– Stack Shield: Storing copy of the return address at other  
place, not on stack,  
[ http://www.angelfire.com/sk/stackshield/ ]  
– Stack Guard; Canary: Place a guard between return  
address and buffer to detect any modification to return  
address  
 Compiler checks the Canary

## Non-executable stack  
• NX bit, standing for No-eXecute feature in CPU separates code from data  
which marks certain areas of the memory as non-executable.  
• This countermeasure can be defeated using a different technique called  
Return-to-libc attack.

## Memory Mapping using mmap() and Race condition  
mmap() - system call to map files or devices into memory. Default mapping type is file-backed mapping,  
which maps an area of a process’s virtual memory to files; reading from the mapped area causes the file to  
be read  

Line ① opens a file  
in read-write mode.  

Line ② calls  
mmap() to create a  
mapped memory  

1st arg: Starting address for the mapped memory  
2nd arg: Size of the mapped memory  
3rd arg: If the memory is readable or writable. Should match the access type from Line ①  
4th arg: If an update to the mapping is visible to other processes mapping the same region and if the update is carried  
through to the underlying file  
5th arg: File that needs to be mapped  
6th arg: Offset indicating from where inside the file the mapping should start.

## MAP_SHARED and MAP_PRIVATE

MAP_SHARED: The mapped memory behaves like a shared memory between  
the two processes.  
When multiple processes map the same file to memory, they can map the file  
to different virtual memory addresses, but the physical address where the file  
content is held is same.

MAP_PRIVATE: The file is mapped to the memory private to the calling process.
● Changes made to memory will not be visible to other processes  
● The contents in the original memory need to be copied to the private memory.  
● If the process tries to write to the memory, OS allocates a new block of  
physical memory and copy the contents from the master copy to the new  
memory.  
● Mapped virtual memory will now point to the new physical memory.

## Copy On Write  
● Technique that allows virtual memory in different processes to map to the same  
physical memory pages, if they have identical contents  
● When a child process is created using fork() system call :  
○ OS lets the child process share the parent process’s memory by making page  
entries point to the same physical memory  
○ If the memory is only read, memory copy is not required  
○ If any one tries to write to the memory, an exception will be raised and OS will  
allocate new physical memory for the child process (dirty page), copy contents  
from the parent process, change each process’s (parent and child) page table so  
that it points to it’s own private copy

## Discard Copied Memory
`int madvise(void *addr, size_t length, int advice)`

madvise(): Give advices or directions to the kernel about the memory from  
addr to addr + length  
advice (3rd argument): MADV_DONOTNEED  
● We tell the kernel that we do not need the claimed part of the address any more. The kernel will  
free the resource of the claimed address and the process’s page table will point back to the original physical memory.

## Dirty-COW vulnerability-Details
In (B), page table of the process is changed, so the virtual memory now points to the physical memory  
marked by 2.  
Then Step (C) successfully writes to the memory.  
What if we perform following:  
i) Change page entries for the virtual memory.  
ii)Discard the private copy of the mapped memory using madvise() so that the page table points to the  
original mapped memory. (marked by 1)  
This will create Dirty COW in 1, resulting overwriting in protected area of the memory

## Vulnerabilities of Desktop OS

Some other vulnerabilities in Windows systems:  
• Internet Information Services (IIS)  
• Microsoft SQL Server (MSSQL)  
• Windows Authentication  
• Internet Explorer (IE)  
• Windows Remote Access Services  
• Microsoft Data Access Components (MDAC)  
• Windows Scripting Host (WSH)  
• Microsoft Outlook and Outlook Express  
• Windows Peer-to-Peer File Sharing (P2P)  
• Simple Network Management Protocol (SNMP

## Australian Smart Phone Market

Market share of leading mobile device vendors in Australia from 2011 to 2024.

https://www.statista.com/statistics/861577/australia-mobile-device-vendors-market-share/

## Operating system on mobiles phones/features

• A mobile operating system (OS) is a software platform that allows other applications,  
known as programs, to run on mobile devices such as PDAs, cell phones,  
smartphones, and more

### Operating system on mobiles phones
• Mobile Operating System Structure  
• Mobile Operating System Platforms  
• Java ME Platform  
• Palm OS  
• Symbian OS  
• Linux OS  
• Window Phone OS  
• Google Android Platform  
• Apple iOS

### Mobile OS Features  
• Multitasking  
• Scheduling  
• Memory Allocation  
• File System Interface  
• Keypad Interface  
• I/O Interface  
• Protection and Security  
• Multimedia features

## Android and iOS Architecture
Android (Linux Kernel-Based):
- **User Space Components**:
  - Android App
  - SurfaceFlinger (compositor)
  - SystemServer (system services)
  - Launcher (home screen)

- **Kernel Space**:
  - Graphics
  - Input

- **Kernel Type**: Android Linux Kernel

iOS (XNU Kernel: Mach + BSD):
- **User Space Components**:
  - iOS App
  - SpringBoard (home screen/UI manager)
  - configd (system configuration)
  - notifyd (notification daemon)
  - launchd (init process)

- **Kernel Space**:
  - Mach:
    - IOKit (driver interface)
    - Graphics
    - Input
    - Mach IPC (inter-process communication)
  - BSD:
    - VFS Layer (file system)
    - Sockets (networking)
    - Security (access controls)

- **Kernel Type**: Hybrid (Mach + BSD)

## Some facts about mobile security
https://www.appsealing.com/mobile-app-security-a-comprehensive-guide-to-secure-your-apps/

## Common Security Vulnerabilities in Mobile Operating Systems

• Insecure Data Storage  
Sensitive data, such as user credentials, personal information, or cryptographic keys, is stored  
insecurely on the device, making it accessible to attackers through physical access or malware.  
• Weak Authentication and Authorization Vulnerability:  
Weak or improperly implemented authentication and authorization mechanisms can allow unauthorized  
access to mobile applications or sensitive data.  
• Unsecured Communication Channels Vulnerability  
Communication between the mobile app and servers or other devices that is not properly secured can  
be intercepted, allowing attackers to perform man-in-the-middle attacks or eavesdrop on sensitive data.  
• Insufficient Device Security Configuration Vulnerability  
Poorly configured device security settings, such as disabled screen locks or unsecured Wi-Fi connections,  
can expose the device to unauthorized access, making it easier for attackers to compromise the device.
• Outdated Software and Patching Vulnerability  
Running outdated versions of the mobile OS or applications can expose the device to known  
vulnerabilities that have been fixed in newer versions, making the device an easy target for attackers.  
• Insecure APIs Vulnerability  
Insecurely designed APIs that mobile apps use for communication with servers or third-party services  
can expose sensitive data or allow unauthorized actions to be performed.  
• Malware and Malicious Apps  
Installing malicious apps on a mobile device can lead to unauthorized access, data leakage, and other  
forms of exploitation, as these apps may have access to sensitive data or system functionalities.  
• Jailbreaking and Rooting Vulnerability  
Jailbreaking (iOS) or rooting (Android) a device removes many of the built-in security protections, making  
the device more vulnerable to attacks and unauthorized access.

## Security Measures  
• Encryption:  
Ensure all sensitive data stored on the device is encrypted using strong encryption algorithms.  
• Secure Storage APIs  
Utilize platform-provided secure storage mechanisms, such as Keychain on iOS or Encrypted Shared  
Preferences on Android, to securely store sensitive data.  
• Multi-Factor Authentication (MFA)  
Implement MFA to add an additional layer of security, requiring more than one form of verification before  
granting access.  
• Strong Password Policies  
Enforce the use of strong, unique passwords and ensure they are not stored in plaintext within the  
application.
 • Secure Authentication Protocols  
Use secure protocols such as OAuth 2.0 for authorization processes to reduce the risk of unauthorized  
access.  
• TLS/SSL  
Always use Transport Layer Security (TLS) or Secure Sockets Layer (SSL) to encrypt data in transit  
between the mobile app and servers.  
• Certificate Pinning  
Implement certificate pinning to prevent attackers from using forged certificates to intercept communication.  
• End-to-End Encryption  
For highly sensitive communications, utilize end-to-end encryption to ensure that data is encrypted from the  
sender to the receiver without being decrypted at any intermediate points.

• API Security  
Use secure authentication methods such as OAuth 2.0 for API access and ensure that APIs only expose  
necessary data to minimize the risk of data leakage.  
• Strong Device Locks  
Implement strong PINs, passwords, or biometric authentication (such as fingerprint or facial recognition) to  
secure the device and prevent unauthorized access.  
• Mobile Device Management (MDM)  
Implement MDM solutions to enforce security policies on devices used in corporate environments, ensuring  
they are properly configured and secured.  
• Library Vetting  
Thoroughly vet third-party libraries and SDKs for security issues before integrating them into applications to  
ensure they do not introduce vulnerabilities.

# Pen testing on androidOS
What is Termux?  
 A powerful terminal emulator for Android.  
 Offers a Linux environment on Android devices.  
 Ideal for penetration testers and developers.  
Features:  
 Access to a wide range of Linux tools and utilities.  
 Package management via APT (similar to Debian-based systems).  
 Integration with Android file system.

 Nmap: Network discovery and security auditing tool.  
 Metasploit: A framework for developing and executing exploit code.  
 Hydra: A parallelized login cracker.  
 Wireshark: Network protocol analyser.  
 John the Ripper: Password cracking tool.  
 SQLmap: Automated SQL injection tool.  
 Tool-X: A tool for installing many penetration testing tools with ease.

## Penetration Testing on iOS  
What is iSH Shell ?  
 Introducing iSH Shell as a tool for bringing Unix-like capabilities to iOS.  
 Potential uses in penetration testing without jailbreaking.  
 iSH Shell is an open-source project that emulates a Linux shell environment on iOS devices.  
 Provides a lightweight Unix-like environment for iOS users.  
Features:  
 Linux Environment Emulation  
 Package Management  
 Command-Line Tools  
 Scripting Capabilities  
 Portability

 Nmap: Network scanning and discovery.  
 Curl: Interacting with web services and APIs.  
 Git: Cloning repositories containing pen-testing scripts.  
 Netcat: Networking utility for reading and writing data across networks.  
 SQLmap: Automated SQL injection and database takeover tool.  
 Hydra: Parallelized login cracker.  
 Nikto: Web server scanner for vulnerabilities.  
 TCPdump: Network packet analyser (if available)..

