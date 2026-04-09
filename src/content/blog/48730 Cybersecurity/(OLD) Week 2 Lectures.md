# Web Security: Web- based attacks, mitigation strategy

## Our Focus

### • Web Based Attacks  
–DNS attack (Cache poisoning)  
–SQL injection attack  
–CSRF and XSS attack  
• Various security mitigation strategy  
### • Test your knowledge:  
–Explain how DNS cache poisoning may lead to different cyberattacks?  
–What is Cross Site Scripting (XSS) attack? Explain how to defend against such attack?  
–What is Cross-Site Request Forgery (CSRF)?  
–Some common password crack techniques?  
–What is SQL injection attack? Explain defence mechanisms to prevent such attack?

## Browser and Web based Cyber threats
• Browser is the most exposed software to interact with Internet based resource  
– Online shopping, Online banking, accessing database etc.  
• Cyber criminals establish a foothold on networked device through the browser using a number  
of schemes:  
– Exploiting vulnerabilities associated with programming languages; Java  
– script, Flash, ActiveX etc.  
▪ install ransomware, exfiltration of data, and stealing intellectual property  
– Difficult to detect attack as conventional approach (involving file scanning) does not work  
(Why?)  
▪ Attacker may Embed obfuscated Adobe Flash file within the JavaScript

## How Web Browser Work
Web Browser sends an `GET /index.html HTTP/1.1 Host: www.example.com` HTTP request the the webserver.
Web server replies with an HTTP responce with
HTTP/1.1 200 OK

## Some HTTP Response Codes
Code, Meaning, Examples  
1xx, Information, 100 = server agrees to handle client's request  
2xx, Success, 200 = request succeeded; 204 = no content present  
3xx, Redirection, 301 = page moved; 304 = cached page still valid  
4xx, Client error, 403 = forbidden page; 404 = page not found  
5xx, Server error, 500 = internal server error; 503 = try again later

## Vulnerabilities in Web-based Systems
Mainly due to inadequate validation of user input resulting different web-based attacks

Vulnerabilities:
- Domain Name System (DNS) cache poisoning  
- Cross Site Request Forgery (CSRF)  
- Cross Site Scripting (XSS)  
- SQL Injection attack  
- Browser hijacking
## Local DNS Server and Iterative Query Process
• The iterative process starts from the ROOT Server. If it doesn’t know the IP  
address, it sends back the IP address of the nameservers of the next level  
server (.NET server) and then the last level server (example.net) which  
provides the answer.

## DNS Response
There are 4 types of sections in a DNS response :  
▪ Question section : Describes a question to a nameserver  
▪ Answer section : Records that answer the question  
▪ Authority section : Records that point toward authoritative nameservers  
▪ Additional section : Records that are related to the query.  

• As root server doesn’t know the answer there is no answer section, but, it tells us about the authoritative nameservers (NS Record) along with their IP addresses in the Additional section (A record).  
• When the local DNS server gets information from other DNS servers, it caches the information.  
• Each piece of information in the cache has a time-to-live value, so it will be eventually time out and removed from the cache.


## DNS Attacks Types
DNS Attacks:
- DNS Spoofing  
- DNS Flood Attack  
- Distributed reflection DDoS  
- Domain lock-up  
- DNS tunnelling

## DNS Attacks on Compromised Machines
• If attackers have gained the root privileges on a machine, they can  
▪ Modify /etc/resolv.conf: use malicious DNS server as the machine’s local DNS server  
and can control the entire DNS process.  
▪ Modify /etc/hosts: add new records to the file, providing the IP addresses for some  
selected domains. For example, attackers can modify IP address of www.bank32.com  
which can lead to attacker’s machine.  
▪ In your lab, you will use Netwag / Netwox tool to understand and launch attacks.

## Local DNS cache poisoning attack
Spoofing DNS Replies (from LAN)
Goal: Forging DNS replies after seeing a query from Local DNS Server

### The Kaminsky Attack
How can we keep forging replies without worrying about the cache effect?
▪ Ask a different question every time, so caching the answer does not matter, and the local DNS server will send out a new query each time.
▪ Provide a forged answer in the Authority section

### Attacks from Malicious DNS Server
• When user visits a website, such as attacker32.com:  
• A DNS query will eventually come to the authoritative nameserver of the attacker32.com  
domain.  
• In addition to providing an IP address in the answer section of the response, DNS server  
can also provide information in the authority and additional sections  
• Attackers can then use these sections to add fraudulent information

### Denial of Service Attacks on Root Servers  
Attacks on the Root and TLD Servers :  
Root nameservers: If the attackers can bring down the servers of the root zone, they can bring down  
the entire Internet. However, attack on root servers is difficult:  
• The root nameservers are highly distributed. There are 13 (A,B....M) root nameservers (server  
farm) consisting of a large number of redundant computers to provide reliable services.  
• As the nameservers for the TLDs are usually cached in the local DNS servers, the root servers  
need not be queried till the cache expires (48 hours). Attacks on the root servers must last long  
to see a significant effect.  
Denial of Service Attacks on TLD Servers  
➢ Nameservers for the TLDs are easier to attack. TLDs such as gov, com, net etc have quite  
resilient infrastructure against DOS attacks. But certain obscure TLDs like country-specific  
TLDs do not have sufficient infrastructure. Due to this, the attackers can bring down the  
Internet of a targeted country.

### Protection Using TLS/SSL  
• Transport Layer Security (TLS/SSL) protocol provides a solution against the cache poisoning  
attacks. (This part will be covered later)  
• After getting the IP address for a domain name (www.example.net) using DNS protocol, a  
computer will ask the owner (server) of the IP address to prove that it is indeed  
www.example.net.  
• The server has to present a public-key certificate signed by a trusted entity and demonstrates  
that it knows the corresponding private key associated with www.example.net (i.e., it is the  
owner of the certificate).  
• HTTPS is built on top of TLS/SSL. It defeats DNS cache poisoning attacks. This will be  
discussed in Transport Layer Security.

## Protection Against DNS Cache Poisoning Attacks

### Root Server
- **DNSKEY**: Root public key (from a trusted external source)
- **RRSIG**: Signs DNSKEY and DS records
- **DS**: Hash of `.net` server's public key

### Verification
- Use trusted DNSKEY to verify RRSIG
- Use DS to authenticate `.net` DNSKEY
- 
### .net Server
- **DNSKEY**: .net public key
- **RRSIG**: Signs DNSKEY and DS records
- **DS**: Hash of `example.net` server's public key

### Verification
- Use .net DNSKEY to verify RRSIG
- Use DS to authenticate `example.net` DNSKEY

### example.net Server
- **DNSKEY**: example.net public key
- **RRSIG**: Signs response records

### Verification
- Use example.net DNSKEY to verify RRSIG

## Interacting with Database in Web Application
• A typical web application consists of three major components:  
• SQL Injection attacks can cause damage (severity=High) to the database.  
• The users do not directly interact with the database but through a web server.  
• If this channel is not secured, malicious users can attack the database

## Launching SQL Injection Attacks using cURL

• More convenient to use a command-line tool to launch attacks.  
• Easier to automate attacks without a graphic user interface.  
• Using cURL, we can send out a form from a command-line, instead of from a web page.  
`% curl 'www.example.com/getdata.php?EID=a' OR 1=1 #&Password='`
• The above command will not work. In an HTTP request, special characters are in the  
attached data needs to be encoded or they maybe mis-interpreted.  
• In the above URL we need to encode the apostrophe, whitespace and the # sign and the  
resulting cURL command is as shown below:
`% curl 'www.example.com/getdata.php?EID=a%27%20OR%201=1%20%23&Password='`

## Modify Database
• If the statement is UPDATE or INSERT INTO,  
we will have chance to change the database.  
• Consider the form created for changing  
passwords. It asks users to fill in three pieces  
of information, EID, old password and new  
password.  
• When Submit button is clicked, an HTTP  
POST request will be sent to the server-side  
script changepassword.php, which uses an  
UPDATE statement to change the user’s  
password.

## Multiple SQL Statements
• Damages that can be caused are bounded because we cannot change everything in the existing SQL  
statement.  
• It will be more dangerous if we can cause the database to execute an arbitrary SQL statement.  
• To append a new SQL statement “DROP DATABASE dbtest” to the existing SQL statement to delete the  
entire dbtest database, we can type the following in the EID box  
• The resulting SQL statement is equivalent to the following, where we have successfully appended a  
new SQL statement to the existing SQL statement string.  
• The above attack doesn’t work against MySQL, because in PHP’s mysqli extension, the mysqli::query()  
API doesn’t allow multiple queries to run in the database server.

## Cross Site Request Forgery (CSRF)
• Also called a one-click attack or  
session riding  
• When a page from a website  
sends an HTTP request back to  
the website, it is called a same-  
site request

• If a request is sent to a different website, it is called a cross-site request because where the page comes  
from and where the request goes are different.  
Eg: A webpage can include a Facebook link, so when users click on the link, an HTTP request is sent to  
Facebook.

## How the attacker launch CSRF Attack ?  
• An attacker may Setup:  
• A Target website (malicious)  
• Get information on the Victim user who has an active session on the target website  
- The user login to a bank and forgets to sign out  
• The attacker has full control of the malicious website  
Steps:  
• The attacker crafts a webpage that can forge a cross-site request to be sent to the targeted  
website  
• The attacker needs to attract the victim user to visit the malicious website  
• The victim is logged into the targeted website

## CSRF Attack on GET Requests - Basic Idea
• Consider an online banking web application www.bank32.com which allows users to  
transfer money from their accounts to other people’s accounts.  
• An user is logged in into the web application and has a session cookie which uniquely  
identifies the authenticated user.  
• The user sends HTTP request to transfer $500 from his/her  
account to account 3220:  
http://www.bank32.com/transfer.php?to=3220&amount=500  
• In order to perform the attack:  
- The attacker needs to send out the forged request from the victim’s machine so that the  
browsers will attach the victim’s session cookies (stolen) with the requests.

● The attacker can place the piece of code (to trigger request) in the form of JavaScript code in the  
attacker’s web page.  
● HTML tags like img and iframe can trigger GET requests to the URL specified in src attribute.  
Response for this request will be an image/webpage.

## Fundamental Causes of CSRF
• The server cannot distinguish whether a request is cross-site or same-site  
- Same-site request: coming from the server’s own page. Trusted.  
- Cross-site request: coming from other site’s pages. Not Trusted.  
- We cannot treat these two types of requests the same.  
• Does the browser know the difference?  
- Of course. The browser knows from which page a request is generated.  
- Can the browser help?  
• How to help the server?  
- Referrer header (browser’s help)  
- Same-site cookie (browser’s help)  
- Secret token (the server helps itself to defend against CSRF)

## Countermeasures  
• HTTP header field identifying the address of the web page from where the request is  
generated.  
• A server can check whether the request is originated from its own pages or not.  
• This field reveals part of browsing history causing privacy concern and hence, this field is  
mostly removed from the header.  
• The server cannot use this unreliable source.  
• User side prevention:  
-Logging off from one site before using another  
-Selectively send authentication tokens with request  
- Referrer Header

## Countermeasures: Same-Site Cookies  
• A special type of cookie in browsers like Chrome and Opera, which provide a special  
attribute to cookies called Same Site.  
• This attribute is set by the servers and it tells the browsers whether a cookie should be  
attached to a cross-site request or not.  
• Cookies with this attribute are always sent along with same-site requests, but whether they  
are sent along with cross-site depends on the value of this attribute.  
• Values  
▪ Strict (Not sent along with cross-site requests)  
▪ Lax (Sent with cross-site requests)

## The Cross-Site Scripting (XSS)
- Attacker injects malicious code to the victim's browser via the target website. 
	- Web pages (HTML) embed dynamic contents (code)
- When code comes from a website, it is considered as trusted and necessary actions (executions) are performed by the user browser.
- However code can do whatever the user can do inside the session
- XSS attack times:
	- Non-persistent (reflected) XSS attack
	- Persistent (stored) XSS attack

### Non-persistent (Reflected) XSS Attack  
If a website with a reflective behaviour  
takes user inputs, then :  
• Attackers can put JavaScript code in  
the input, so when the input is reflected  
back, the JavaScript code will be  
injected into the web page from the  
website.

### Persistent (Stored) XSS Attack  
Example : User profile in a social network is a channel as it is set by one user and viewed by another.  
• Attackers directly send their data to a target website/server  
which stores the data in persistent storage.  
• If the website later sends the stored data to other users, it  
creates a channel between the users and the attackers.  
• These channels are supposed to be data channels.  
• But data provided by users can contain HTML mark-ups and  
• JavaScript code.  
• If the input is not sanitized properly by the website, it is sent to other users’ browsers through the channel and gets  
executed by the browsers.  
• Browsers consider it like any other code coming from the website. Therefore, the code is given the same privileges as that  
from the website.

## Damage Caused by XSS (severity)
• Web defacing: JavaScript code can use DOM APIs to access the DOM nodes inside the  
hosting page. Therefore, the injected JavaScript code can make arbitrary changes to the  
page. Example: JavaScript code can change a news article page to something fake or  
change some pictures on the page.  
• Spoofing requests: The injected JavaScript code can send HTTP requests to the server  
on behalf of the user.  
• Stealing information: The injected JavaScript code can also steal the victim’s private  
data including the session cookies, personal data displayed on the web page, data  
stored locally by the web application

## Countermeasures: XSS Attack

Filter Approach  :
● Remove code from user inputs.  
● Use of open-source libraries that can filter out JavaScript code.  
● Example : jsoup  
● Sandbox  
	○ Separate or limit running untrusted programs  
		■ Java scripts, mobile apps, network daemon programs

Encoding Approach:
● Replaces HTML mark-ups with alternate representations.  
● If data containing JavaScript code is encoded before being  
sent to the browsers, the embedded JavaScript code will be  
displayed by browsers, not executed by them.  
● Convert  
	○ `<script> alert(‘XSS’) </script> to &lt;script&gt;alert(‘XSS’)`

Secret Token: 
● The server embeds a random secret value inside each web page.  
● When a request is initiated, the secret value is generated.  
● The server checks this value to see whether a request is cross-site or not.  
● The secret is randomly generated and is different for different users.

## The Fundamental Cause

Mixing data and code together is the cause of several types of vulnerabilities and  
attacks including SQL Injection attack, XSS attack, attacks on the system() function  
and format string attacks.

## Countermeasures: Filtering and Encoding Data
• Before mixing user-provided data with code, inspect the data. Filter out any character that  
may be interpreted as code.  
• Special characters are commonly used in SQL Injection attacks. To get rid of them, encode  
them.  
• Encoding a special character tells the parser to treat the encoded character as data and not  
as code. This can be seen in the following example  
PHP’s mysqli extension has a built-in method called mysqli::real_escape_string(). It can be used to  
encode the characters that have special meanings in SQL. The following code snippet shows how  
to use this API

## Countermeasures: Prepared Statement  
• Prepared Statement: It is an optimized feature that provides improved performance if the same or similar  
SQL statement needs to be executed repeatedly. Using prepared statements, we send an SQL statement  
template to the database, with certain values called parameters left unspecified. The database parses,  
compiles and performs query optimization on the SQL statement template and stores the result without  
executing it. We later bind data to the prepared statement. Using prepared statements, we separate code and data.

## Why Are Prepared Statements Secure?  
• Trusted code is sent via a code channel.  
• Untrusted user-provided data is sent via the data channel.  
• The database clearly knows the boundary between code and data.  
• Data received from the data channel is not parsed.  
• The attacker can hide code in data, but the code will never be  
treated as code, so it will never be attacked.

## Summary  
• Most cyber attacks are launched through web  
• Phishing, Cross site scripting, URL Obfuscation, Mobile codes are some of the largely  
used web- based attacks  
• Even with the use of sophisticated and Secured connection (SSL, HTTPS), new attacks are  
going to emerge in future