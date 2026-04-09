# Public Key Infrastructure and Certificate

## Objectives  
• Cryptography Function  
– Symmetric and Asymmetric  
• Public Key Cryptography  
• Digital Certificates  
• Role of Certificate Authority (CA)  
• Public Key Infrastructure (PKI)  
• X.509 based Certificates  
• Review questions  
– Why do you need the public key to be trusted? How is such trust implemented?  
– What role dos CA play defending against MITM attack?  
– Can you find the certificate and their associated information for amazon.com, google.com,  
uts.edu.au? List some of the important information these certificates contain?

## Why Need Cryptographic Function?  
1. Data Confidentiality  
Cryptographic functions, such as encryption, help protect sensitive data from unauthorized access.  
2. Data Integrity  
Hash functions (e.g., SHA-256) ensure that data remains unaltered during transmission or storage.  
3. Authentication  
Cryptographic functions enable password hashing and digital certificates to verify identities.  
4. Secure Communication  
Cryptographic techniques are used in blockchain and banking systems to prevent fraud.  
5. Non-Repudiation  
Digital signatures ensure that a sender cannot deny sending a message.  
6. Protection Against Cyber Attacks  
Cryptographic protocols defend against attacks such as man-in-the-middle (MITM), brute force,  
and replay attacks.

## Cryptographic Function-Details
• Symmetric Encryption  
❑ It is also called as Secret Key Cryptography  
❑ "Single key used for both encrypt & decrypt  
❑ Key must be known to both the parties  
• Asymmetric Encryption  
❑ Use of two keys (Private key and Public Key)  
❑ Easy distribution of keys  
❑ Scalable and easily manageable

## Cryptographic Function- Some Popular Types  
• Symmetric Encryption  
❑ Data Encryption Standard (DES):  
56 bits key  
❑ Advance Encryption Standard (AES):  
128, 192 or 256 bits key  
❑ International Data Encryption Algorithm (IDEA):  
128 bits key

• Asymmetric Encryption  
❑ RSA (Rivest-Shamir-Adleman):  
1024, 2048, 4096 bits  
❑ Elliptic Curve Cryptography (ECC):  
160, 224, 256, 384, 521 bits  
❑ Diffie-Hellman (DHKE):  
1024, 2048, 4096 bits  
❑ Digital Signature Algorithm (DSA):  
1024, 2048, 3072 bits

## Asymmetric Encryption- RSA
• RSA (Rivest-Shamir-Adleman):  
❑ The RSA algorithm is named after its three creators: Rivest, Shamir, and Adleman.  
❑ It was first introduced in 1978 and is still considered secure today.  
❑ This encryption method relies on the mathematical challenge of factoring large numbers.  
❑ RSA is widely used in secure communications, digital signatures, and cryptographic protocols such  
as SSL/TLS.  
❑ The security of RSA depends on the difficulty of prime factorization, making it resistant to attacks  
with classical computers but potentially vulnerable to quantum computing advancements.

## RSA- Generating Public and Private Keys
• Select two prime numbers: p (prime 1) = 17 and q (prime 2) = 23.  
• Compute n (modulus) = p × q = 17 × 23 = 391.  
• Compute z (Euler’s totient function)  
= (p-1) × (q-1) = (17-1) × (23-1) = 16 × 22 = 352.  
• Choose a prime number k (public exponent), which must be co-prime to z.  
-A common choice is k = 3.  
• The public key is (n = 391, k = 3). This pair (n, k) is used for encryption.

## Computing the Private Key
• The private key j (decryption exponent) must satisfy k × j ≡ 1 (mod z).  
• This means that multiplying k and j results in a remainder of 1 when divided by z.  
• Substituting k = 3 and z = 352, we solve for j in the equation 3 × j ≡ 1 (mod 352).  
• Using the Extended Euclidean Algorithm, we find j = 235.  
• The private key is (n = 391, j = 235), which is kept secret for decryption.

## Encrypting the Message
• P (plaintext message) is the original data to encrypt.  
-Let's assume P = 42.  
• E (encrypted message) is calculated using the encryption formula:  
E = P^k mod n.  
• Substituting values: E = 42^3 mod 391.  
• Compute 42^3 = 42 × 42 × 42 = 74088.  
• Compute modulo: 74088 mod 391 = 188.  
• The encrypted message E = 188 is transmitted securely.

## Decrypting the Message
• E (encrypted message) is received and must be decrypted to retrieve P (original plaintext).  
• P is recovered using the decryption formula: P = E^j mod n.  
• Substituting values: P = 188^235 mod 391.  
• Using modular exponentiation, P = 42.  
• The decrypted message P = 42 matches the original plaintext.  
• This verifies that the encryption and decryption process is correctly  
implemented.

## Public-Key Cryptography- 6 Ingredients  
### Plaintext:
The readable  
message or data  
that is fed into the  
algorithm as input  .

### Encryption algorithm:
Performs various  
transformations on  
the plaintext  .

### Public key:  
Used for  
encryption or  
decryption . 

### Public key:  
Used for  
encryption or  
decryption . 

### Ciphertext:  
The scrambled  
message  
produced as  
output.  

### Decryption algorithm:  
Accepts the  
ciphertext and the  
matching key and  
produces the  
original plaintext.

## Vulnerabilities-Public Key Cryptography

- Man-in-the-middle attack
- brute force attack
- key management attack
- chosen-ciphertext attack
- side-channel attack

## Man-in-the-Middle (MITM) Attack
Problem-Bob has no way to tell whether the public key he received belongs to Alice or not.

Solution (Digital Signature):  
A Certificate Authority  
– Find a trusted party to verify the identity  
– Bind an identity to a public key in a certificate  
– The certificate cannot be forged or tampered with (using digital signature)  
▪ Alice needs to go to a trusted party to obtain a certificate.  
▪ After verifying Alice’s identity, the trusted party issues a certificate  
with Alice’s name and her public key.  
▪ Alice sends the entire certificate to Bob.  
▪ Bob verifies the certificate using the trusted party’s public key.  
▪ Bob now knows the true owner of a public key.

## How Public Key Infrastructure (PKI) Works
PKI, refers to anything that is used to set up and administer public key encryption. This comprises  
software, hardware, policies, and procedures for creating, distributing, managing, storing, and  
revocation of digital certificates.

## PKI Components

– Certificate Authority (CA): a trusted party, responsible for verifying the identity of users,  and then bind the verified identity to a public keys.  
– Digital Certificates: A document certifying that the public key included inside does  belong to the identity described in the document. 

• X.509 standard is used for specifying format of Public Key Certificates

## How Digital Signature/Certificates Works

# Digital Signature Process

## Signing
1. **Input**: Original Data (Message M)
2. **Hashing**: Compute hash of the data
3. **Encrypt Hash**: Use sender's private key to encrypt the hash → this becomes the signature
4. **Attach Signature**: Signature + original data form the digitally signed message

## Verification
1. **Input**: Digitally signed message (Data + Signature)
2. **Decrypt Signature**: Use sender’s public key to decrypt signature → yields original hash
3. **Hash Data**: Recompute the hash from received data
4. **Compare Hashes**:
   - If hashes match → Signature is **valid**
   - If not → Signature is **invalid or tampered**

## Key Concepts
- **Private Key**: Used for signing (only signer possesses it)
- **Public Key**: Used for verification (publicly available)
- **Integrity & Authenticity**: Ensured if hashes match after verification

• If the signature is not tampered with, M’ will be the same as M  
• Only Alice can sign (she has the private key)  
• Everybody can verify (public key is known publically)

## Types of Digital Certificate
Domain Validated Certificates (DV) <-> Extended Validated Certificates (EV) <-> Organizational Validated Certificates (OV) <-> Domain  Validated Certificates (DV)

### Domain Validated Certificates (DV)
• Most popular type of certificate.  
• The CA verifies the domain records to check if the domain belongs to  
applicant.  
• Domain Control Validation (DCV) is performed on domain name in the  
certificate request.  
• DCV uses information in the WHOIS database  
• DCV is conducted via  
– Email  
– HTTP/s  
– DNS

### Organizational Validated Certificates (OV)
• Not very popular type of certificate.  
• CAs verify the following before issuing OV certificates:  
• Domain control validation.  
• Applicant’s identity and address.  
• Applicant’s link to organization.  
• Organization’s address.  
• Organization’s WHOIS record.  
• Callback on organization’s verified telephone number.

### Extended Validated Certificates (EV)
• CAs issuing EV certificates require documents that are legally signed from registration authorities.  
• EV CA validate the following information:  
• Domain control validation.  
• Verify the identity, authority, signature and link of the individual.  
• Verify the organization's physical address and telephone number.  
• Verify the operational existence.  
• Verify the legal and proper standings of the organization.  
• EV certificate, hence, costs higher but is trustworthy.

### Digital Certificate-Methodology  
• Creating Digital Certificate
`$ openssl s_client -showcerts -connect www.paypal.com:443 </dev/null`

• Save the above data to paypal.pem, and use the following command to decode it
`$ openssl x509 -in paypal.pem -text -noout

### Part 1: Certificate Metadata

Certificate Authority (CA) Identity
- **Issuer**: Entity that issued and signed the certificate  
  e.g.  
  `C=US, O=Symantec Corporation, CN=Symantec Class 3 EV SSL CA - G3`

Certificate Owner
- **Subject**: Entity that owns the certificate  
  e.g.  
  `CN=www.paypal.com, O=PayPal, Inc., C=US`

Validity
- **Not Before**: Certificate start time  
- **Not After**: Expiry time  
  Example: `Feb 2 00:00:00 2016 GMT` to `Oct 30 23:59:59 2017 GMT`

### Part 2: Public Key & Signature

Public Key
- **Algorithm**: e.g. `rsaEncryption`
- **Key Length**: e.g. `2048-bit`
- **Modulus** and **Exponent**: Numeric components of the RSA key

CA's Signature
- **Algorithm**: e.g. `sha256WithRSAEncryption`
- **Signature Value**: Encrypted hash of the certificate data using CA's private key

## Purpose
- **Authentication**: Confirms identity of certificate holder
- **Integrity**: Ensures data hasn't been altered (via signature)
- **Trust**: Rooted in CA's reputation and root certificate

## X.509 Certificates
• ITU-T recommendation X.509 is part of the X.500 series of recommendations that define a  
directory service  
• Defines a framework for the provision of authentication services by the X.500 directory to its  
users  
• The directory may serve as a repository of public-key certificates  
• Defines alternative authentication protocols based on the use of public-key certificates  
• The standard does not dictate the use of a specific algorithm but recommends RSA

## Core functionalites of CA
• Verify the subject  
– Ensure that the person applying for the certificate either owns or represents the identity in  
the subject field.  
• Signing digital certificates  
– CA generates a digital signature for the certificate using its private key.  
– Once the signature is applied, the certificate cannot be modified.  
– Signatures can be verified by anyone with the CA’s public key.  
• Being a certificate authority  
– How does a CA issues certificates?  
– How does one get a certificate from a CA?  
– How to set up a web server using a certificate?

## Real World CAs

Root and Intermediate Certificate Authorities  
There are many CAs in the real world, and they are organized in a hierarchical structure.

Root CA -> Intermediate CA 1 / CA 2 / CA 3
Int CA 1 -> Sub CA -> Domain Owner 1
Int CA 2 -> Sub CA 1 / CA 2
- Sub CA 2 -> Domain Owner 1 / Domain Owner 3
Int CA 3

## Root CAs and Self-Signed Certificate
• A root CA’s public key is also stored in an X.509 certificate. It is self-signed.  
• Self-signed: the entries for the issuer and the subject are identical.

How can they be trusted?  
– Public keys of root CAs are pre-installed in the OS, browsers and other software

Something else is needed to verify A (certificate from another  
intermediate CA or root CA)

## Manually Verifying a Certificate Chain

• Paypal.pem: Save Paypal’s certificate to a file  
• Symatec-g3.pem: Save certificate from “Symantec Class 3 EV SSL CA – G3”  
• VeriSign-G5.pem: Save the VeriSign-G5’s certificate from the browser

## Creating Certificates for Intermediate CA

• When generating a certificate for an intermediate CA, we need  
to do something special:  
`$ openssl ca -in modelIntCA.csr -out modelIntCA_cert.pem -md sha256 -cert modelCA_cert.pem -keyfile modelCA_key.pem -extensions v3_ca`

• The extension field of the certificate will look as follows:  
```
X509v3 extensions:
	x509v3 Basic Constraints:
		CA:TRUE
```
TRUE means the certificate can be used to verify other certificates,  
i.e, the owner is a CA. For non-CA certificates, this field is FALSE.

## Trusting Certificate

• Question: If the certificate is self-signed, how do we verify it?  
• Answer: There is no way to verify it. We just make sure that the certificate is obtained in a trusted way  
– Come with the operating system (if we trust OS, we trust the cert.)  
– Come with the software (if we trust the software, we trust the cert.)  
– Manually added (if we trust our own decision, we trust the cert.)  
– Sent to us by somebody whom we don’t trust (don’t trust the cert.)  
• Also, look through the way you perform your lab on certificates.

## Trusted CAs in the Real World

• Not all the trusted CAs are present in all browsers.  
• According to W3Techs, Comodo takes most of the market share followed by IdenTrust,  
Symantec Group, GoDaddy Group, GlobalSign and DigiCert.  
• The list of trusted CAs supported by browser can be found:  
– For the Chrome browser:  
• Settings -> Show advanced settings -> Manage Certificates  
– For the Firefox browser:  
• Edit -> Preferences -> Advanced -> Certificates -> View Certificates -> Certificate  
Manager -> Authorities

## Defeats the MITM Attack using PKI  
• Assume that Alice wants to visit https://example.com  
• When the server sends its public key to Alice, an attacker intercepts the  
communication. The attacker can do the following things:  
• Attacker forwards the authentic certificate from example.com  
• Attacker creates a fake certificate  
• Attacker sends his/her own certificate to Alice

## Attacker Forwards the Authentic Certificate  
• Attacker (Malroy) forwards the authentic certificate  
• Alice sends to the server a secret, encrypted using the public key.  
• The secret is used for establishing an encrypted channel between Alice and server  
• Malroy doesn’t know the corresponding private key, so he cannot find the secret.  
• Malroy can’t do much to the communication, except for DoS.  
• MITM attack fails.

## Attacker Creates a Fake Certificate  
• Attacker (Malroy) creates fraudulent certificate for the example.com domain.  
• Malroy replaces the server’s public key with his own public key.  
• Trusted CAs will not sign Malroy’s certificate request as he does not own them  
from example.com.  
• Malroy can sign the fraudulent certificate by himself and create a self-signed  
certificate.  
• Alice’s browser will not find any trusted certificate to verify the received certificate  
and will give the following warning:  
`example.com uses an invalid security certificate. The certificate is not trusted because it is self-signed.
• MITM attack fails if the user decide to terminate the connection

## Attacker Sends His/Her Own Certificate

• Attacker’s certificate is valid.  
• Browser checks if the identity specified in the subject field of the  
certificate matches the Alice’s intent.  
– There is a mismatch: attacker.com ≠ example.com  
• Browser terminates handshake protocol: MITM fails

## The Importance of Verifying Common Name
• During TLS/SSL handshake, browsers conduct two important validations  
1)Checks whether the received certificate is valid or not.  
2)Verifies whether the subject (Common Names) in the certificate is the same as the  
hostname of the server.  
• Not verifying the common name is a common mistake in software

## The Man-In-The-Middle Proxy  
• Proxy creates a self-signed CA certificate, which is installed on the user’s browser  
• The routing on the user machine is configured; all outgoing HTTPS traffic is  
directed towards the proxy machine  
• When user tries to visit an HTTPS site:  
– Proxy intercepts communication  
– Creates a fake certificate  
– Browser already has the proxy’s certificate in its trusted list to be able to verify  
all the fake certificates  
– In this case, Proxy becomes MITM

# Real-life Attack on CA’s  
• If the CA’s private key is compromised, attackers can sign a certificate with any  
arbitrary data in the subject field.  
• Case Study:  
▪ The DigiNotar Breach [June-July 2011] (Ref)  
▪ Comodo hack: In 2011(Ref)  
▪ ANSSI hack: In 2013 (Ref)  
▪ Let's Encrypt phishing attack: In 2021, ( Ref)

## Case Study- DigiNotar Attack  
Several of DigiNotar’s CA servers including the ones responsible for issuing government certificates  
were compromised.  
Hardware Security Model:  
- Capable of generating and storing cryptographic keys.  
- Device is tamper-proof. Needs to be accessed physically to get the key.  
- Generally stored in a vault guarded with physical security and video surveillance  
▪ A top commercial CA  
▪ Attacker got DigiNotar’s private key  
▪ 531 rogue certificates were issued.  
▪ Traffic intended for Google subdomains was intercepted: MITM attack.

## Case Study- Comodo Attack  
• CA’s job has two parts:  
– Verify the relationship between certificate applicant and the subject information inside  
the certificate  
– Put a digital signature on the certificate  
• Case study: Comodo Breach [March 2011]  
– Popular root CA.  
– The approval process in Southern Europe was compromised.  
– Nine certificates were issued to seven domains and hence the attacker could provide  
false attestation.  
– One of the affected domain (a key domain for the Firefox browser): addons.mozilla.org

## Case Study- Attacks on Algorithms  
• Digital Certificates depend on two types of algorithms  
– one-way hash function and digital signature  
• The Collision-Resistant Property of One-Way Hash  
– At CRYPTO2004, Xiaoyun Wang demonstrated collision attack against MD5.  
– In February 2017, Google Research announced SHAttered attack  
– Attack broke the collision-resistant property of SHA-1  
– Two different PDF files with the same SHA-1 hash was created.  
• Countermeasures: use stronger algorithm, e.g. SHA256.

## Case Study- Attacks on User Confirmation  
• After verifying the certificate from the server, client software is sure that the certificate is  
valid and authentic  
• In addition, the software needs to confirm that the server is what the user intends to interact  
with  
• Confirmation involves two pieces of information  
– Information provided or approved by user  
– The common name field inside the server’s certificate  
– Some software does not compare these two pieces of information: security flaw

## Case Study- Attacks on Confirmation  
Phishing Attack on Common Name with Unicode  
• Zheng found out several browsers do not display the domain name correctly if name  
contains Unicode.  
• xn—80ak6aa92e.com is encoded using Cyrillic characters. But domain name displayed by  
browser likes like apple.com  
• Attack:  
• Get a certificate for xn—80ak6aa92e.com  
• Get user to visit xn—80ak6aa92e.com, so the common name is matched  
• User’s browser shows that the website is apple.com. User can be fooled.  
• Had the browser told the user that the actual domain is not the real apple.com, the user  
would stop.

## Key Agreement-(Diffie-Hellman)  
• How do Alice and Bob share a session key?  
• They use the Diffie-Hellman (DH) key agreement  
– Whitfield Diffie and Martin Hellman (1976)  
• The first practical method for establishing a shared secret over an unprotected  
communications channel  
– enable two users to exchange a secret key securely that then can be used for  
subsequent encryption of messages  
– Public Key Algorithm applied in many commercial products  
• The algorithm itself is limited to the exchange of secret values  
• Its effectiveness depends on the difficulty of computing discrete logarithms

## CA: Issuing X.509 Certificate  
• We (the bank) need to send the Certificate Signing Request (CSR )  
file to ModelCA.  
• ModelCA will verify that we are the actual owner of (or can  
represent) the identity specified in the CSR file.  
• If the verification is successful, ModelCA issues a certificate

## Obtaining a user’s certificate  
• User certificates generated by a CA have the following characteristics:  
– Any user with access to the public key of the CA can verify the user public key that was  
certified  
– No party other than the certification authority can modify the certificate without this being  
detected  
• Because certificates are unforgeable, they can be placed in a directory without the need for  
the directory to make special efforts to protect them

Useful PKI Web Sites  
• http://en.wikipedia.org/wiki/Public_key_infrastructure  
• http://java.sun.com/j2se/1.5.0/docs/guide/security/cert3.html  
• http://en.wikipedia.org/wiki/X.509

## Revocation of certificates  
• Each certificate includes a period of validity  
• Typically a new certificate is issued just before the expiration of the old one  
• Revoking certificates before expiry:  
– The user’s private key is assumed to be compromised  
– The user is no longer certified by this CA; reasons for this include subject’s name has  
changed, the certificate is superseded, or the certificate was not issued in conformance  
with the CA’s policies  
– The CA’s certificate is assumed to be compromised

## User Identity
Authentication:
▪ Sign in users  
▪ Enable federation with enterprise identities  
▪ Enable federation with social identities  

Authorization:
▪ Protect data and operations  
▪ Provide fine-grained access control  

User Management:
▪ Manage user lifecycles  
▪ Store and manage  
▪ Monitor engagement  

