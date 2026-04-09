# Email Security and Social Engineering Attack

## What is Social Engineering?  
• Art of manipulating people and their behaviour to extract confidential information  
• Break standard security practices  
• Relates to Psychological manipulation  
• Trickery or Deception for the purpose of information gathering  
• Cyber criminals gather and access information on victims by  
• Secretly installing spyware, malicious software or to trick victims handing over  
passwords and/or other sensitive financial or personal information  
• In a recent test conducted by Siemens, 85 percent of office workers were duped by social  
engineering  
• What attackers looking for:  
• What's the name of your first pet?  
• When was your mother/father born?  
• Where were you born?  
• Can you guess what above information could contribute to?

## Social Engineering: The rise and prevalence of attacks  

• In 2023, scams made up 50% of all social engineering attacks worldwide,  
making them the most common type of cyberattack in this group.

https://www.coolest-gadgets.com/social-engineering-statistics/  

## Financial Impact of Social Engineering Attacks in Healthcare  

![](99%20-%20Assets/2025/2025-05-26-13-05-11.png)
• The healthcare sector is increasingly being targeted by social engineering attacks  
because of its high-value data and vulnerabilities, with projected financial losses  
of $4.95 billion by 2025.

https://www.vpnranks.com/resources/social-engineering-attacks-statistics/  

## Data Breaches Report: January to June 2023 (Australia)
![](99%20-%20Assets/2025/2025-05-26-13-05-81.png)

https://www.oaic.gov.au/privacy/notifiable-data-breaches/notifiable-data-breaches-publications/notifiable-data-breaches-report-january-to-june-2023
https://www.oaic.gov.au/__data/assets/pdf_file/0013/242050/Notifiable-data-breaches-report-January-to-June-2024.pdf

## Australians lost $2.7 billion to scams in 2023, ACCC report reveals
![](99%20-%20Assets/2025/2025-05-26-13-05-43.png)
https://www.abc.net.au/news/2024-04-28/scam-losses-in-2023-banks-government-accc-report-technology-work/103777548

## Cost of Social Engineering
![](99%20-%20Assets/2025/2025-05-26-13-05-15.png)

https://portswigger.net/daily-swig/social-engineering
https://www.theguardian.com/technology/2025/feb/23/crypto-exchange-seeks-bybit-ethereum-stolen-digital-wallet

## Social Engineering Attack Cycle

Prepare the Attack  
• Identify the victim(s)  
• Gather background information  
• Select attack method(s)

-> 

Establish a Relationship  
• Engage the target  
• Spin a story  
• Take control of the interaction

->

Obtain Information  
• Expand the foothold  
• Execute the attack  
• Disrupt business and/or steal data

-> 

Close the Interaction  
• Remove any traces of malware  
• Bring the attack to a natural end

## Social Engineering Attack- Tactics

Pretexting - Creating a fake scenario
Baiting - Uses enticing offers, like infected USB drives or misleading download links
Scareware - Designed to decieve and scare users into taking actions, such as purchasing fkae security software.
Phishing, Vishing, Spear Phishing - Send out bait to fool victims into giving away their information
Catfishing - Creating a fake identity to establish a deceptive online relationship
Tailgating, Piggybacking - Unauthorized physical follow-through of an authorized person to gain entry to a restricted area

https://seon.io/resources/social-engineering-attacks/

## Some well-known Attacks

Phishing/Spear emails:
- Email or electronic communications scam targeted towards a specific  
individual, organization or business

Vishing:
- An attacker calls their target and uses an automated recording designed to generate fear. The recording will  
ask the target to call a number to resolve the issue  

Smishing:  
- An attacker tries to trick you into giving them your  
private information by sending you a text message  

## E-mail used as Social Engineering attacks

• According to Cisco, 90% of all attacks begin with a phishing email.  
• Recipients open 30% of phishing emails.  
• The time it takes to fall for a phishing email is less than 60 seconds.  
• phishing emails jumped to 1.76 billion, a 51% increase from 2022. And Facebook  
was the most impersonated brand with 23% of the phishing emails mentioning the  
company in the phishing URL.  
• 56% of organizations receive phishing emails on a daily or weekly basis.  
• According to IBM’s data report, spear phishing is the leading cause of data  
breaches.  
• 84% of the phishing sites exist for less than 24hrs.  
• Nearly 30% of emails pass default security.

## E-mail used as Social Engineering attacks

• Internet Message Protocol  
• Message protocols permit exchange of information over the  
Internet  
– These protocols are agreed in advance by sender and recipient to:  
§ determine the format and structure of the message  
§ setup, monitor and terminate data transfer sessions  
§ generate and implement error and control messages  
§ For IP networking, these protocols are based on TCP/IP

## How Email Works?

![](99%20-%20Assets/2025/2025-05-26-13-05-56.png)
How Email Appears to Work  
Sender’s outbox → Recipient’s inbox (linear and instant path)

How Email Really Works  
A. Sender composes message using Mail User Agent (MUA)  
B. Message sent to sender’s Mail Submission Agent (MSA) or MTA  
C. Routed through the company’s internal network  
D. Enters mail queue at sender’s MTA and waits for delivery  
E. Routed across the internet (via multiple routers)  
F. Spam/virus filters process message before reaching recipient’s MTA  
G. Delivered to recipient’s mailbox, then retrieved by their MUA
## Email Architecture
![](99%20-%20Assets/2025/2025-05-26-13-05-18.png)
• User World  
• Interfaces with the users  
• Provides an email format, stores email  
at the receiver world, etc.  
• MUA, MS  
• Transfer World  
• Responsible for transferring message  
• MHS which contains MSA, MTA, MDA

Message Handling System (Transfer World vs User World)  
Message author sends via MUA → MSA → MTA (SMTP) → another MTA → MDA  
MDA delivers to Message Store (MS) → Retrieved by recipient MUA (IMAP/POP)

Key protocols:
- ESMTP for submission  
- SMTP for transfer  
- IMAP/POP for access  
## Simple Mail Transfer Protocol (SMTP)

• A text-based client-server protocol that uses TCP  
connection  
• The client (SMTP sender) initiates a TCP connection  
(port 25)  
• The server activates SMTP and sends “220” reply to  
the client  
• Once the connection is established, the client sends  
commands (single line text starting with four letter  
command code followed by an argument)  
• E.g., HELO bar.com (for identifying sending domain)  
• The receiver responds with exactly one reply  
(typically, single line) beginning with a three-digit code  
• E.g., 250 OK

![](99%20-%20Assets/2025/2025-05-26-13-05-17.png)
Simplified Mail Flow  
Sender → User Agent → Sent Mail Queue  
→ Mail Transfer Agent (Client)  
→ TCP (SMTP, Port 25)  
→ Mail Transfer Agent (Server)  
→ User Mailboxes → Receiver's User Agent
### Example:

• Example: Smith@bar.com wants to send email to Jones@foo.com, Green@foo.com and Brown@foo.com

![](99%20-%20Assets/2025/2025-05-26-13-05-91.png)
SMTP Dialogue Example  
Smith@bar.com sends to multiple @foo.com recipients:  
- MAIL FROM: accepted  
- RCPT TO: Jones@foo.com → 250 OK  
- RCPT TO: Green@foo.com → 550 No such user  
- RCPT TO: Brown@foo.com → 250 OK  
- DATA … QUIT sequence finalizes the transfer

Client Domain: bar.com  
Server Domain: foo.com  
## POP3/IMAP

• Allows the message recipient to download message from MS  
• A “pull-based” protocol  
• User connects via TCP connection (Port 110)  
• User (receiver) authorization required –  
username and password  
• Then user issues POP command to retrieve and  
delete email  
• IMAP is more complex than POP  
• IMAP provides stronger authentication

![](99%20-%20Assets/2025/2025-05-26-13-05-43-1.png)
Protocol Stack: SMTP + IMAP  
Sender sends message to client MTA via SMTP  
Client MTA → Server MTA over internet (SMTP)  
Recipient's MAA retrieves mail via IMAP from MAA server  
## Email Formats: MIME

• MIME (Multipurpose Internet Mail Extensions)  
• Extension to RFC 5322 to handle multiple message format (e.g.,  
text, image, audio, video, etc.)  
• Other reasons for MIME  
– For transmitting binary files over SMTP  
– For transmitting non-English text files over SMTP  
– For transmitting longer emails  
– so on.

## Security threats to Email
![](99%20-%20Assets/2025/2025-05-26-14-05-40.png)

https://us.norton.com/blog/privacy/email-security

## Security threats to Email - Real life examples
![](99%20-%20Assets/2025/2025-05-26-14-05-90.png)
https://www.afr.com/technology/hackers-attack-12-australian-companies-with-education-phishing-scam-20230130-p5cghx

![](99%20-%20Assets/2025/2025-05-26-14-05-20.png)
https://www.abc.net.au/news/2023-08-17/phishing-scam-explainer-cybercrime-social-engineering/102735538

![](99%20-%20Assets/2025/2025-05-26-14-05-85.png)
https://www.9news.com.au/technology/aussies-under-25-most-likely-to-fall-victim-to-scams-accc/19a110e2-9e18-4bde-85ba-d5714f61c0a7

![](99%20-%20Assets/2025/2025-05-26-14-05-99.png)
https://www.afp.gov.au/news-centre/media-release/nsw-man-jailed-sms-phishing-scam-targeting-450-victims

## What happens if I click? Password Stolen
Identity theft
Data Leak
Data Destruction
Account Takeover

## What happens if I click? Malware installed
Stolen password
ransomware
remote access
network compromise

## E-Mail Security standards and protocols

• There are two methods/standards in use:  
– Pretty Good Privacy (PGP)  
• http://www.philzimmermann.com/EN/background/index.html  
• RFC 2440  
• OpenPGP: RFC 4880  
– Secure/Multipurpose Internet Mail Extensions (S/MIME)  
• RFC 3850, RFC 3851  
• Also, PKI built using TPM enables better email security  
– Authentication of the source  
– Defeating malware delivery  
• PGP is the de facto secure email and being used widely  
• Makes use of best available crypto algorithm  
• Available on UNIX, Windows, Macintosh and other systems

## Pretty Good Privacy (PGP)
![](99%20-%20Assets/2025/2025-05-26-14-05-78.png)
Encryption + Decryption Process  
Encryption  
Raw File → Encrypt with Public Key → Encrypted File → Sent via Email/FTP  

Decryption  
Encrypted File received → Decrypt with Private Key → Raw File restored  

• Asecure email system (developed by Paul  
Zimmerman, released 1991) that provides:  
• confidentiality, authentication and integrity  
– Compression function to reduce message size, using  
zip  
– conversion of non English characters into ASCII  
– encryption of messages stored on disk  
– commercial product at http://www.pgp.com/

https://www.freecodecamp.org/news/how-does-pretty-good-privacy-work-3f5f75ecea97/

## OpenPGP (RFC 4880) supports

• Symmetric key crypto  
– IDEA  
– TripleDES: DES-EDE, 168 bit key  
– CAST5: 128 bit key, (RFC2144)  
– Blowfish: 128 bit key, 16 rounds  
– AES with 128-bit key  
– AES with 192-bit key  
– AES with 256-bit key  
– Twofish with 256-bit key

• Public key crypto  
– RSA (Encrypt or Sign)  
– RSA Encrypt-Only  
– RSA Sign-Only  
– Elgamal  
– DSA (Digital Signature Algorithm)  
(FIPS186)  
– ECC in the near future  
• Hash  
– MD5  
– SHA-1  
– RIPE-MD/160  
– SHA-224, SHA-256, SHA-384, SHA-512

## Sender process
![](99%20-%20Assets/2025/2025-05-26-14-05-25.png)
- Bob creates the message.
    
- Hash is generated from the message.
    
- The hash is encrypted using Bob’s private key via RSA to create a digital signature.
    
- Message and signature are concatenated.
    
- The concatenated result is zipped.
    
- A random symmetric key Kₘ is generated by Bob.
    
- Zipped data is encrypted using Kₘ.
    
- Kₘ is encrypted with Alice’s public key.
    
- Encrypted data and encrypted key are concatenated and Base64-encoded before transmission.
## Receiver process

![](99%20-%20Assets/2025/2025-05-26-14-05-41.png)
- Alice receives the Base64-encoded data and decodes it.
    
- Data is de-concatenated into encrypted key and encrypted message.
    
- Encrypted key is decrypted using Alice’s private key to retrieve Kₘ.
    
- Encrypted message is decrypted using Kₘ.
    
- Result is unzipped into message and signature.
    
- Signature is decrypted using Bob’s public key.
    
- Hash is generated from the message and compared for verification.
## PGP Crypto

• PGP combines some of the best features of both symmetrical and  
public key cryptography  
– PGP is a hybrid cryptosystem  
• When a user encrypts plaintext with PGP, PGP first compresses  
the plaintext  
– Data compression saves transmission time and disk space and, more  
importantly, strengthens cryptographic security  
– Most cryptanalysis techniques exploit patterns found in the plaintext to  
crack the cipher  
• Compression reduces these patterns in the plaintext, thereby greatly enhancing  
resistance to cryptanalysis  
– Files which are too short, does not use compression

## PGP encryption and decryption process
• PGP creates a session key; one-time-only secret key  
– This key is a random number generated from the random movements of your  
mouse and the keystrokes you type  
– This session key works with an encryption algorithm to encrypt the plaintext;  
the result is ciphertext  
– Once the data is encrypted, the session key is then encrypted by the recipient's  
public key  
– This public key-encrypted session key is transmitted along with the cipher-text  
to the recipient  
31/3/25 Email Security and Social Engineering Attacks 32  
• Decryption works in the reverse direction  
– The recipient's copy of PGP uses his or her private key to recover the  
temporary session key  
– PGP then uses the session key to decrypt the encrypted cipher-text

## S/MIME
• Provides authentication, message integrity and non-repudiation of origin (using  
digital signatures-RSA/SHA-256) and confidentiality (using encryption-AES) along  
with compression  
• S/MIME was originally developed by RSA Data Security, Inc.  
– It is based on the PKCS #7 data format for the messages  
– X.509v3 format for certificates  
– PKCS #7, in turn, is based on the ASN.1 DER format for data  
• Similar to PGP but more structured than PGP  
• Uses triple-DES rather than IDEA  
• Uses X.509 certificate  
• Allows multiple trust anchors  
• Replaces an earlier IETF standard called Privacy Enhanced Mail (PEM)

• S/MIME v3 standard consists of five parts: Syntax (RFC 3852), (RFC 3370), (RFC 3850), (RFC 2631), and  
(RFC 2634)

## S/MIME - Authentication
• Provided using digital signature (RSA/SHA-256)  
1) Sender generates a message  
2) SHA-256 used to find the 256-bit  
message digest of the message  
3) The message digest is encrypted using  
sender’s RSA private key  
4) The message digest is appended to the  
message. Sender’s identification is also  
appended (to help the receiver to pick  
the right public key)

![](99%20-%20Assets/2025/2025-05-26-14-05-62.png)

• At the receiver-side  
1) Sender’s RSA public key is used to  
decrypt the message digest  
2) A new message digest from the  
received message is computed using  
SHA-256  
3) If the newly computed hash is equal  
to the received digest, the message is  
accepted as authentic

![](99%20-%20Assets/2025/Pasted%20image%2020250526140522.png)

## S/MIME - Confidentiality

• Provided by encrypting the content using  
symmetric encryption (AES)  
§ The sender encrypts the message using a key  
§ The receiver decrypts the message using the same key  
§ For a new message, a new generated (content-  
encryption key used only once)  
• The key is distributed using RSA encryption. The  
sender encrypts using the receiver’s public key

![](99%20-%20Assets/2025/2025-05-26-14-05-07.png)

• Provided by encrypting the content  
using symmetric encryption (AES)  
1. The receiver decrypts with her  
private key and obtains content  
encryption key  
2. The receiver then decrypts using  
and obtains the plaintext message
![](99%20-%20Assets/2025/2025-05-26-14-05-00.png)

## S/MIME – Key Management

• How Sender Alice will know that is  
the RSA public key of the receiver  
Bob?  (Using PKI)
1) She will know by rumour  
2) Using Diffie-Hellman key exchange  
3) Using PKI  
4) None of the above  
• S/MIME uses X.509 certificates  
– Certificates are managed using  
combination of X.509 CA hierarchy as  
well as PGP’s web of trust

![](99%20-%20Assets/2025/2025-05-26-14-05-26.png)

## S/MIME – Sign and Encrypt
• In a typical scenario, message must be both signed and encrypted
![](99%20-%20Assets/2025/2025-05-26-14-05-97.png)
- Certificate Authority (CA) issues certificates to users.
    
- Sender signs email using their private key.
    
- Signed email includes the public certificate.
    
- Recipient verifies the sender’s signature using the public key in the certificate.
    
- To reply securely, recipient encrypts using the sender’s public key.

https://ref.emailarchitect.net/smime/doc/%3Fct=object_encrypt

## S/MIME – Sign and Encrypt

• Alternatively, message can first be encrypted and then encrypted  
message be signed  
• Question: If the signing is done by a third-party, who must not see  
the message content, what would you suggest?  
• First sign, then encrypt  
• First encrypt, then sign  
• Any of the above  
• None of the above

## S/MIME Message Communication
• Before an email sender sends S/MIME emails, sender has  
two jobs:  
1) Must determine if the receiver is capable of decrypting using a  
given encryption algorithm  
2) If the receiver is capable of a week encryption algorithm, the  
sender must decide if it is acceptable to send the message using a  
week algorithm  

• To enforce this, the following rule is followed  
1) If the sender knows the preferred decrypting capabilities of the  
receiver, sender SHOULD use the highest preference capability
 
2) If the preference list is not available but sender has previously received  
a message from the receiver, sender SHOULD use the encryption  
algorithm that was used in the last received message  
3) If sender has no clue about receiver’s capability, but sender is willing to  
risk that the receiver may not be able to decrypt the message, sender  
SHOULD use triple DES  
4) If sender has no clue about receiver’s capability, but sender is not  
willing to risk that the receiver may not be able to decrypt the  
message, sender MUST use RC2/40

## S/MIME Certificate Management
• S/MIME uses public key cryptosystem (RSA) in digital signature and also in encryption  
• PKI is used for key management  
– PKI uses chain-of-trust

![](99%20-%20Assets/2025/2025-05-26-14-05-82.png)
- Sender signs email with a digital signature using an S/MIME certificate.
    
- Mail server transmits the signed email over the internet.
    
- Mail receiver validates the signature using a trusted CA, ensuring sender authenticity and message integrity.

![](99%20-%20Assets/2025/2025-05-26-14-05-65.png)
- Root CA delegates trust to intermediate CAs (e.g. CA1, CA2).
    
- Subordinate CAs (e.g. CA1.2 or CAn.1) issue end-user certificates.
    
- End-user receives certificate from the trusted chain, establishing a chain of trust.

https://www.ssl2buy.com/wiki/what-is-smime-certificate-how-does-it-work

## S/MIME and Open PGP comparison

| **Features**                            | **S/MIME v3**                                                                 | **OpenPGP**                                                                                      |
|----------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Message format                         | CMS (Cryptographic Message Syntax RFC 3370)                                 | Radix-64, RFC4880                                                                                |
| Certificate format                     | Binary, based on X.509v3                                                     | Supports X.509 plus original format                                                              |
| Symmetric encryption algorithm         | TripleDES (DES EDE3 CBC), AES-128, AES-192, AES-256                          | TripleDES (DES EDE3)/AES/IDEA/CAST/Blowfish/Twofish                                              |
| Signature algorithm                    | DSS or RSA                                                                   | RSA or DSS                                                                                       |
| Hash algorithm                         | MD5, SHA-1, SHA-256, SHA-384, SHA-512                                        | MD5, SHA-1, SHA-224, SHA-256, SHA-384, SHA-512, RIPEMD160                                        |
| MIME encapsulation of signed data      | Choice of multipart/signed or CMS format                                     | multipart/signed with ASCII armor (puts specific headers around the Radix-64 encoded data)       |
| MIME encapsulation of encrypted data   | application/pkcs7-mime                                                      | multipart/encrypted                                                                              |
## DKIM (Domain Keys Identified Mail)
31/3/25 45
• Protocol for signing and verifying
at administrative units (domains)
for a message in transit
• Transparent to user
• Supported by email providers
(Gmail, Yahoo), government
agencies, etc.

![](99%20-%20Assets/2025/2025-05-26-14-05-86.png)
- Email is sent via SMTP through the origination network.
    
- DNS is queried for the public key of the sending domain.
    
- Recipient's MTA retrieves the key and verifies the message.
    
- If the signature matches, the message is accepted and delivered.
## DKIM vs S/MIME

• In DKIM, domains are responsible to sign and verify.
• In S/MIME, sender and receiver users are responsible to sign
and verify (many users may not use it).
• In S/MIME, PKI is required.
• In DKIM, no requirement for PKI (public key stored in DNS).
• InS/MIME,users are authenticated (e.g., abc@gmail.com).
• In DKIM domain names are authenticated (e.g., gmail.com)
## Sender Policy Framework (SPF)

Sender Policy Framework (SPF)
• Email spamming and phishing are major issues. Anyone
can send an email with any domain name

![](99%20-%20Assets/2025/2025-05-26-14-05-35.png)
## SPF
• A way (authentication) for the sending domain to identify and assert
mail senders of the domain

![](99%20-%20Assets/2025/2025-05-26-14-05-72.png)

## SPF – How It Works?

• The sending domain publishes SPF record in DNS specifying who (IP address) is
allowed to use the domain name
• The receiver uses the published SPF record to verify (by checking sender’s IP
address against the policy) a sender

![](99%20-%20Assets/2025/2025-05-26-14-05-57.png)
- Sender sends email through internet.
    
- Inbound mail server queries DNS for SPF records.
    
- Based on SPF match, the mail is authorised or rejected.
    
- Further policy checks determine delivery to inbox, junk, quarantine, or deletion.
## SPF – Sending/ Receiver Domain

Sending:
• Identifies all senders and add that information as a separate resource
record in the DNS
• Encodes SPF policy for each sender
§ Mechanism used to define IP addresses
§ Modifiers used to define policies
• Encoding done in a TXT DNS resource record (known as SPF TXT RR) as
a list of mechanisms and modifiers

Reciever:
• Uses SMTP envelope MAIL FROM address domain and sender IP
address to query SPF TXT resource record
• SPF checking done before email sent to receiver’s mailbox
• SPF Checking rules
§ If no SPF TXT RR returned or SPF TXT RR has formatting error, by default
accept the message
§ Otherwise, make a decision about the email based on retrieved
mechanism and modifier

## Domain-based Message Authentication, Reporting and Conformance (DMARC)

• Can SPF and DKIM protect against phishing and( spamming)?

![](99%20-%20Assets/2025/2025-05-26-14-05-06.png)
## DMARC

• DMARC authentication deals with the FROM domain in the message header
• DMARC requires that FROM domain must match an authenticated Identifier from DKIM (i.e., to
DKIM signing domain) or SPF (i.e., to SPF authenticated domain)
![](99%20-%20Assets/2025/2025-05-26-14-05-66.png)
• Allows the sending domain to tell the receiver (via a policy in DNS TXT RR – known as DMARC RR)
what to do if DMARC check fails: block the email, quarantine the email
• Helps receiver to send feedbacks to the sending domain (to an email configured in the above RR).
It specifies policy on the types of reports that receivers can send back, and the frequency those
reports should be sent

## DMARC Processing – Sender
• The author generates a message and hands the
message to the domain owner’s designated
mail submission service
• The submission service passes relevant details
to the DKIM signing module in order to
generate a DKIM signature to be applied to the
message.
• The submission service relays the now-signed
message to its designated transport service for
routing to its intended recipient(s)
![](99%20-%20Assets/2025/2025-05-26-14-05-26-1.png)
- Sender’s server adds a DKIM signature and SPF data.
    
- Receiver retrieves SPF and DKIM info from DNS.
    
- DMARC policy is applied based on validation results.
    
- Message is passed, quarantined, or blocked.
    
- Reports are sent to sender’s domain for policy updates.
## DMARC Processing – Receiver

• If alignment is successful, the result is
“Pass”.
• Otherwise, DMARC policy is applied
that results either in “Pass” or “Fail”
§ p = none (no specific action if DMARC
fails)
§ p = quarantine
§ p = reject
• The DMARC policy result can optionally cause
two types of reports (aggregate report or
forensic report) to be sent to the sender
domain.

![](99%20-%20Assets/2025/2025-05-26-14-05-26-1.png)
- Sender’s server adds a DKIM signature and SPF data.
    
- Receiver retrieves SPF and DKIM info from DNS.
    
- DMARC policy is applied based on validation results.
    
- Message is passed, quarantined, or blocked.
    
- Reports are sent to sender’s domain for policy updates.
## How to defend yourself

What happens
if I report?

- Review Links
- Check accounts
- Block domains
- remove messages

## How to defend yourself
Skip the Link
Ignore the File

Go to the supposed source and confirm

THey will have, in order of suspiciousness:

unusual requirements
requiring respect for authority
threating with negative consequences
giving praise and flattery
offering something for nothing
seems too good to be true, etc…

## Summary
• Social engineering/phishing is one of the most popular attacks
• Email is the most widely used application on the Internet
• Security of message communication is utmost important
• Fake email contribute to majority of security breaches
• User awareness is one of the important measures to protect against
security breaches