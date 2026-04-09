# Intrusion Detection and Prevention

## Intrusion Detection and Prevention Systems Market
![](99%20-%20Assets/2025/2025-05-25-13-05-58.png)
https://www.marketdataforecast.com/market-reports/intrusion-detection-prevention-systems-market

## What is Intrusion?

• Hostile or unwanted trespass by users or software  
– Bypassing security mechanism of a system  
• Characteristics of a sound system not under attack  
1. User, process actions confirm to statistically predictable pattern  
2. User, process actions do not include sequences of actions that subvert the security  
policy  
3. Process actions correspond to a set of specifications describing what the processes  
are allowed to do  
A system or systems under attack do not meet at least one of the above  
• Intrusion Examples  
– Unauthorized log-on, or un-authorized action (e.g., copying financial database, running  
packet sniffer to capture log-in information etc.)  
– Corporate espionage  
– Data theft and Data ransoming

## Classes of Intruders: Cyber Criminals

• Individuals or members of an organized crime group with a goal of financial  
reward  
• Typically, they are young, often Eastern European, Russian, or southeast Asian  
hackers, who do business on the Web  
• They meet in underground forums to trade tips and data and coordinate  
attacks  
• https://socradar.io/top-5-underground-hacker-forums-that-are-accessible-via-your-web-browsers-such-as-google-chrome-firefox-and-internet-explorer/

## Classes of Intruders: Activists
• Are either individuals, usually working as insiders, or members of a larger group of  
outsider attackers, who are motivated by social or political causes  
• Also know as hacktivists  
ü Skill level is often quite low  
• Aim of their attacks is often to promote and publicize their cause typically through:  
ü Website defacement  
ü Denial of service attacks  
ü Theft and distribution of data that results in negative publicity or compromise of  
their targets (fake news!)

## Classes of Intruders: State-Sponsored Organizations
• Groups of hackers sponsored by governments to conduct espionage or sabotage  
activities.  
• Also known as Advanced Persistent Threats (APTs) due to the covert nature and  
persistence over extended periods involved with any attacks in this class.  
• Widespread nature and scope of these activities by a wide range of countries and  
their intelligence allies.

## Intrusive Behavior (typical life cycle)

Target Acquisition and information gathering -> Initial access -> Privilege escalation -> Covering tracks -> Maintaining access -> Information gathering or system exploit

## Intrusion Detection System (IDS)
• “A hardware or software or combination function that gathers and analyses  
information from various sources within a computer or a network to identify  
possible security intrusions”  
• Consisted of mainly three components:  
- Sensors: This is responsible to collect data from network packets, log files, system call  
traces, etc., which may contain evidence to intrusion  
- Analysers: Responsible to determine if intrusion has happened along with a  
proof of intrusion and guidance to countermeasure. Analysers receive input  
from one or more sensors or another analyser  
- User interface: Enables a user to view the output from the system or control  
the behaviour of the system

## Intrusion Detection Architecture
![](99%20-%20Assets/2025/Pasted%20image%2020250525131239.png)

## Architecture components  
• Sensor (agent)  
- Collect data and forward information to the analyzer  
– network packets  
– log files  
– system call traces  
• Analyzer (detector)  
- Receive input from one or more sensors or from other analyzers  
- Determine if an intrusion has occurred  
– Feature extraction, use of advanced techniques such as ML, AI techniques  
• Decision Engine  
- Make decision according to the Decision Table or Human Analyst  
- Make action or report the incident  
- Displays the output using user interface

## Sensor/Agent  
• Agents may preprocess records from the collected data to extract relevant information.  
May also delete redundant data  
• Example:  
– Analyzing failed login attempts  
• Agent scans login data every 2 minutes, sends director for each new login attempt:  
– Time of failed login  
– Account name and entered password  
• Director then requests all records of login (failed or not) for specific user  
– Suspecting a brute-force cracking attempt  
• Host-based agent: Generates system log record, may be complex  
• Network-based agent: Detects network-oriented attacks (DoS)  
– Monitor traffic for large number of hosts and examine contents of the traffic by itself  
– Limitations: TTL tricks, fragmentation, end-to-end encryption, insider attacks  
• Application-monitoring agents provide one view (usually one line) of an event  
• System-monitoring agents provide a different view (usually many lines) of an event  
• Network-monitoring agents provide yet another view (involving many network packets) of  
an event

## Analyzer/Director  
• Analyzes valuable information (after eliminating redundant records) and  
determine if an attack is underway  
– Usually, run-on separate system and does not impact performance of monitored systems  
• Example:  
– Mathew logs in to perform system maintenance during the day  
– He logs in at night to write reports  
– One night he begins recompiling the kernel  
– Agent #1 reports logins and logouts  
– Agent #2 reports commands executed  
– Neither agent spots discrepancy  
– Director correlates log, spots it at once  
• Adaptive analyzers modify profiles, and rule sets to adapt to changed system (Use  
Machine learning and NN so that, false alarms reduced)

## Decision engine/Notifier  
• Accepts information from Analyzer  
• Takes appropriate action  
– Notify system security officer  
– Respond to attack  
• Often GUIs  
– Well-designed ones use visualization to convey information  
• Example:  
– Credit card companies alert customers when fraud is believed to have occurred  
• Configured to send email or SMS message to consumer  
• IDXP protocol coordinates IDSes to respond to attack  
– If an IDS detects attack over a network, notifies other IDSes on co-operative firewalls;  
they can then reject messages from the source

## Use of tools to launch intrusive actions  
• Attack tool is automated script designed to violate a security policy  
• Example: rootkit is a pernicious Trojan horse which hides itself on a system to carry  
out its actions without being detected  
– Includes password sniffer  
– Designed to hide itself using Trojaned versions of various programs (ps, ls, find, netstat, etc.)  
– Adds back doors (login, telnetd, etc.)  
– Has tools to clean up log entries (zapper, etc.)  
• How to detect? E.g., use of Rootkit by attacker  
– Rootkit does not alter kernel or file structures to conceal files, processes, and network  
connections  
• However, It alters the programs or system calls that interpret those structures  
• Find some entry point for interpretation that rootkit did not alter  
• The inconsistency is an anomaly

DS Design Principle  
• IDS design based on the  
assumption that an intruder  
behaviour differs from the  
behaviour of a normal user  
Intrusion Detection and Prevention  
- Of course, there can be overlap  
- Loose interpretation => more false positive  
- Tight interpretation => more false negative

![](99%20-%20Assets/2025/2025-05-25-13-05-33.png)

## Goals of Intrusion Detection Systems  
• Detect wide variety of intrusions  
– Previously known and unknown attacks  
– Suggests need to learn/adapt to new attacks or changes in behavior  
• Detect intrusions in timely fashion  
– May need to be in real-time, especially when system responds to intrusion  
• Problem: analyzing commands may impact response time of system  
– May suffice to report intrusion occurred a few minutes or hours ago  
• Present analysis in simple, easy-to-understand format  
– Ideally a binary indicator  
– Usually more complex, allowing analyst to examine suspected attack  
– User interface critical, especially when monitoring many systems  
• Be accurate  
– Minimize false positives, false negatives  
– Minimize time spent verifying attacks, looking for them

## IDS Analysis Approaches  
• Anomaly Detection  
- Defines “good user” behaviour (from a collection of known “good user” data).  
- A current (user) behaviour is then compared to determine if it is of an intruder  
- Can detect unknown attacks  
• Signature or Heuristic Detection  
- Defines the behaviour of an intruder using a set of known malicious data patterns  
(signature) or attack rules (heuristics).  
- A current behaviour is then compared to determine if it is of an intruder  
- Used in anti-virus product  
• Detection measurements may be based on Threshold metrics, Statistical  
moments and Markov model  
• Lock user out after k sequential (defined) failed login attempts  
• Selection of threshold may depend on non-obvious factors  
• Typing skills and user language

## Anomaly Detection   
• The behaviour of a legitimate user can be modelled from “training sensor data”  
using a number of approaches  
- Machine learning-based:  
	- Neural network  
	- Genetic algorithms  
	- Clustering-based outlier detection  
- Knowledge-based: Develops a set of rules (e.g., manually)  
- Statistical: Univariate, multivariate, or time-series-based  
• In practice, the training data set may not cover all possibilities  
- Some benchmark data set include, DARPA/KDD’99, NSL-KDD, UNSW-NB15  
• Most anomaly detection methods assume some statistical distribution of underlying  
data  
• Also, various machine learning techniques (SVA, Random Forests etc.) can be used to  
classify data as anomalous

## Types of Learning  
• Supervised learning methods: Begin with data that has already been classified,  
split it into “training data”, “test data”; use first to train classifier, second to see  
how good the classifier is  
• Unsupervised learning methods: no pre-classified data, so learn by working on  
real data; implicit assumption that anomalous data is small part of data  
• Measures used to evaluate different methods based on:  
– TP: true positives (correctly identify anomalous data)  
– TN: true negatives (correctly identify non-anomalous data)  
– FP: false positives (identify non-anomalous data as anomalous)  
– FN: false negatives (identify anomalous data as non-anomalous)

## Measuring Effectiveness of IDS schemes  
• Accuracy: percentage (or fraction) of events classified correctly  
– ((TP + TN) / (TP + TN + FP + FN)) * 100%  
• Detection rate: percentage (or fraction) of reported attack events that are real  
attack events  
– (TP / (TP + FN)) * 100%  
– Also called the true positive rate  
• False alarm rate: percentage (or fraction) of non-attack events reported as  
attack events  
– (FP / (FP + TN)) * 100%  
– Also called the false positive rate

## Signature or Heuristic Detection  
• Signature-based: Match packet sequences against set of predefined attack lists  
called signatures  
ü Signature = a large collection of pattern, must be created for every attack.  
Unable to detect new attacks until new signatures developed.  
üA match generates alerts or apply pre-configured action  
ü Used in anti-virus  
ü Low cost, however, cannot detect unknown attack  
• Heuristic  
ü Uses malicious rules (created by knowledgeable security person) particular to a  
machine and operating system  
ü The rules generation may not require a training data set, but can involve  
interviewing multiple security professionals

## IDS Types

![](99%20-%20Assets/2025/2025-05-25-13-05-12.png)

### Host-Based IDS (HIDS)
• Adds a specialized layer of security software to a vulnerable system, e.g., a  
database server to monitor suspicious behaviour  
• Can detect both internal and external attacks  
• Can use either anomaly or signature and heuristic approach  
• Common data source for the sensor  
ü System call traces: In Unix and Linux-based systems  
ü Audit (log file) records  
ü File integrity checksums: Compare checksum of critical files with some “good  
checksums” for unwanted changes  
ü Registry access: In windows

### Distributed HIDS
• Used to defend a distributed  
collection of hosts (e.g., in an  
organization)  
• More than one network-connected  
sensors (can be heterogeneous)  
managed by either a single collection  
and analysis point (centralized) or  
more than one collection and  
analysis points (decentralized).

![](99%20-%20Assets/2025/2025-05-25-13-05-20.png)

### A Typical Distributed HIDS Example

• Two modules: Agent Module and Manger  
Module  
• Agent module (independent sensor and  
data analyser)  
ü Host agent module: Collects security  
related data from a host  
ü LAN monitor module: Collects security  
related data from LAN by analysing its  
traffic  
• Central Manager Module: Correlates data  
from the agents to detect intrusion

![](99%20-%20Assets/2025/2025-05-25-13-05-54.png)

### Installation of distributed intrusion detection system (DIDS)

![](99%20-%20Assets/2025/2025-05-25-13-05-19.png)

https://link.springer.com/chapter/10.1007/978-981-16-6597-4_6

### Network-Based IDS (NIDS)

• Monitors traffic at selected points in the network  
• Typically focus on external intrusion (can be housed with the firewall)  
• Examines network packets in real-time or close to real-time  
• May examine network, transport, and application-level protocol activity  
• Includes a number of sensors for monitoring traffic, one or more server for NIDS  
management functions, and one or more management consoles for human  
interface  
ü Traffic pattern analysis for intrusion detection can be done at sensor, at management  
server, or in combination of both

### Distributed/Hybrid Network Intrusion Detection    
• A group of network-connected IDSs cooperating to identify intrusions 
and adapting to changing attack profiles  
- Contains HIDS and NIDS  
• A single system does not decide  
about intrusion just by looking at its  
suspected data.  
• Rather, it uses a peer-to-peer  
“gossip” protocol to inform other  
systems  
• If a machine receives enough  
messages from peer, the machine  
assumes an attack and informs  
central system

![](99%20-%20Assets/2025/2025-05-25-13-05-10.png)

### Distributed or Hybrid Network Intrusion Detection
• Central system is configured with  
default security policies  
• Based on input from sensors, these  
policies are communicated to various  
platforms  
• Inputs  
ü Summary events: Events from different  
sources collected by a collection points,  
summarized, and sent  
ü Distributed detection and inference  
(DDI) events: A platform concludes an  
attack from incoming gossip traffic

![](99%20-%20Assets/2025/2025-05-25-13-05-33-1.png)

## Difference between HIDs and NIDs

![](99%20-%20Assets/2025/2025-05-25-13-05-59.png)

https://medium.com/@cybersecuritystephen/hids-vs-nids-whats-the-difference-and-why-should-i-care-64b37f7a1f0e

## Intrusion Detection Techniques
§ Attacks suitable for Signature detection  
–Application layer reconnaissance and attacks  
–Transport layer reconnaissance and attacks  
–Network layer reconnaissance and attacks  
–Unexpected application services  
–Policy violations  
§ Attacks suitable for Anomaly detection  
–Denial-of-Service (DoS) attacks  
–Scanning  
–Worms

## Stateful Protocol Analysis (SPA)  
• Subset of anomaly detection that compares observed network traffic  
against predetermined universal vendor supplied profiles of benign  
protocol traffic  
üThis distinguishes it from anomaly techniques trained with organization specific  
traffic protocols  
• Understands and tracks network, transport, and application protocol  
states to ensure they progress as expected  
• A key disadvantage is the high resource use it requires

## Logging of Alerts  
• Typical information logged by a NIDS sensor includes:  
§ Timestamp  
§ Connection or session ID  
§ Event or alert type  
§ Rating  
§ Network, transport, and application layer protocols  
§ Source and destination IP addresses  
§ Source and destination TCP or UDP ports, or ICMP types and codes  
§ Number of bytes transmitted over the connection  
§ Decoded payload data, such as application requests and responses  
§ State-related information

## IETF Intrusion Detection Working Group  
• The working group issued the following RFCs in 2007:  

Intrusion Detection Message Exchange Requirements (RFC 4766):
• Document defines requirements for the Intrusion Detection Message Exchange Format  
(IDMEF)  
• Also specifies requirements for a communication protocol for communicating IDMEF

The Intrusion Detection Message Exchange Format (RFC 4765):
- Document describes a data model to represent information exported by intrusion  
detection systems and explains the rationale for using this model  
• An implementation of the data model in the Extensible Markup Language (XML) is  
presented, and XML Document Type Definition is developed, and examples are  
provided

The Intrusion Detection Exchange Protocol (RFC 4767)
- Document describes the Intrusion Detection Exchange Protocol (IDXP), an application  
level protocol for exchanging data between intrusion detection entities  
• IDXP supports mutual authentication, integrity, and confidentiality over a connection  
oriented protocol

## IDXP message exchange

![](99%20-%20Assets/2025/2025-05-25-13-05-46.png)

## Honeypots  
• These are Decoy systems designed to:  
§ Lure a potential attacker away from critical systems  
§ Collect information about the attacker’s activity  
§ Encourage the attacker to stay on the system long enough for administrators to respond  
§ Provide early warning on new attacks and exploitation trend to administrators  
• Systems are filled with fabricated information that a legitimate user of the system  
wouldn’t access  
• Resources that have no production value  
§ Therefore, incoming communication is most likely a probe, scan, or attack  
§ Initiated outbound communication suggests that the system has probably been  
compromised

## Honeypot classifications  
• Low interaction honeypot  
üConsists of a software package that emulates particular IT services or systems well enough to provide  
a realistic initial interaction, but does not execute a full version of those services or systems  
üProvides a less realistic target  
üOften sufficient for use as a component of a distributed IDS to warn of imminent attack  
• High interaction honeypot  
ü A real system, with a full operating system, services and applications, which are instrumented  
and deployed where they can be accessed by attackers  
ü Is a more realistic target that may occupy an attacker for an extended period  
ü However, it requires significantly more resources  
ü If compromised could be used to initiate attacks on other systems

## Honeypot deployment
![](99%20-%20Assets/2025/2025-05-25-13-05-76.png)

## Signature Based IDS-Example (Snort)  
• An open source free network intrusion detection system  
üSignature-based, use a combination of rules and preprocessors  
üOn many platforms, including UNIX and Windows  
ü www.snort.org  
• Preprocessors perform  
üIP defragmentation, port-scan detection, web traffic normalization, TCP  
stream reassembly, ...  
üCan analyze streams, not only a single packet at a time

## Snort Architecture
![](99%20-%20Assets/2025/2025-05-25-13-05-04.png)

## Snort rule actions

![](99%20-%20Assets/2025/2025-05-25-13-05-51.png)

### Examples of snort rule options
meta-data:
- msg - Defines the message to be sent when a packet generates an event.  
- reference - Defines a link to an external attack identification system, which provides additional information.  
- classtype - Indicates what type of attack the packet attempted.  
payload:
- content - Enables Snort to perform a case-sensitive search for specific content (text and/or binary) in the packet payload.  
- depth - Specifies how far into a packet Snort should search for the specified pattern. Depth modifies the previous content keyword in the rule.  
- offset - Specifies where to start searching for a pattern within a packet. Offset modifies the previous content keyword in the rule.  
- nocase - Snort should look for the specific pattern, ignoring case. Nocase modifies the previous content keyword in the rule.  
non-payload:
- ttl - Check the IP time-to-live value. This option was intended for use in the detection of traceroute attempts.  
- id - Check the IP ID field for a specific value. Some tools (exploits, scanners and other odd programs) set this field specifically for various purposes, for example, the  
value 31337 is very popular with some hackers.  
- dsize - Test the packet payload size. This may be used to check for abnormally sized packets. In many cases, it is useful for detecting buffer overflows.  
- flags - Test the TCP flags for specified settings.  
- seq - Look for a specific TCP header sequence number.  
- icmp-id - Check for a specific ICMP ID value. This is useful because some covert channel programs use static ICMP fields when they communicate. This option was developed to detect the stacheldraht DDoS agent.  
post-detection:
- logto - Log packets matching the rule to the specified filename.  
- session - Extract user data from TCP Sessions. There are many cases where seeing what users are typing in telnet, rlogin, ftp, or even web sessions is very useful.
## Intrusion Prevention Systems (IPS)  
• Also known as Intrusion Detection and Prevention System (IDPS)  
• Extension of an IDS that includes the capability to attempt to block or  
prevent detected malicious activity  
• Can be host-based, network-based, or distributed/hybrid  
• Can use anomaly detection to identify behaviour that is not that of  
legitimate users, or signature/heuristic detection to identify known  
malicious behaviour can block traffic as a firewall does, but makes use of the types of algorithms developed for IDSs to determine when to do so

## Detect and Stop Attacks
Advantages of IPS:
§ Implemented in an inline mode  
§ Monitors Layer 3 and Layer 4 traffic  
§ Can stop single packet attacks from reaching target  
§ Responds immediately, not allowing any malicious  
traffic to pass
![](99%20-%20Assets/2025/2025-05-25-13-05-53.png)

## Difference Between IDS and IPS
![](99%20-%20Assets/2025/2025-05-25-13-05-08.png)https://www.linkedin.com/pulse/day-9-intrusion-detection-systems-ids-prevention-ips-detecting-jk5kc

## Advantages and Disadvantages of IDS and IPS

Advantages IDS:  
• No impact on network  
• No network impact if there is a sensor failure  
• No network impact if there is a sensor overload

Disadvantages IDS:  
• Response action cannot stop trigger  
• Correct tuning required for response actions  
• More vulnerable to network security evasion  
techniques

Advantages IPS:  
• Stops trigger packets  
• Can use stream normalization techniques

Disadvantages IPS:  
• Sensor issues might affect network traffic  
• Sensor overloading impacts the network  
• Some impact on network

## Insider Attacks

• Among most difficult to detect and prevent  
– 83% of organizations reported insider attack in 2024  
• Employees have access & systems knowledge  
• An insider attack may be motivated by revenge / entitlement  
– when employment terminated  
– taking customer data when move to competitor  
• IDS / IPS may help but, overall security strategy should involve:  
– least privilege, monitor logs, strong authentication, termination process to block access & mirror  
data

## Insider Behavior (Bad behavior) Example
1. Create network accounts for themselves and their friends  
2. Access accounts and applications they wouldn't normally use for their daily jobs  
3. E-mail former and prospective employers  
4. Conduct furtive instant-messaging chats  
5. Visit web sites that cater to disgruntled employees, such as evil.com  
6. Perform large downloads and file copying  
7. Access the network during off hours

## IDS/IPS implementation Challenge: Timing  
• Time to detect  
– How many signatures can be checked?  
– How long it takes to verify model compliance?  
– Is there time to react?  
• Violations within idle interval  
– A file modification between Tripwire runs

## IDS/IPS Challenges: Control  
• Centralized  
– Sufficient processing resources  
– Protection from attack  
• Agent-based  
– Secure communication  
– Efficiency  
• Does the agent make reasonable processing demands?  
– Subversion  
• Performance metrics  
– False negative (FN): An event which produces no alarm when an attack has taken place  
– False positive (FP): An event which produces alarm without an attack has taken place  
– True Negative (TN): An event when no attack has taken place, and no detection is made  
– True Positive (TP): A legitimate attack which triggers to produce an alarm.  
– Detection Rate (DR): TP/(TP+FN)

## Commercial IDS/IPS  
• Top-10 IDS/IPS  
– SolarWinds Security Event Manager (large business)  
– Bro (Free, mostly network related activities)  
– OSSEC (Free, medium and large business)  
– SNORT (Free, small and medium business)  
– Suricata (Free, medium and large business)  
– Security Onion (Free, medium and large business)  
– Open EIPS-NG (Free, small and medium business)  
– Sagan (Free, all business)  
– McAfee Network Security platform (large business)  
– Palo Alto Networks (large business)  
• You may find other products and ratings  
– Choose the right one (cost, performance, support)

https://www.softwaretestinghelp.com/intrusion-detection-systems/

## Summary
• IDS/IPS are now integral part of security detection and prevention  
• The two primary approaches are, Signature based and Anomaly based  
• Performance metrics are critical to determine efficiency of IDS/IPS  
• More research and developments in recent years on Collaborative IDS/IPS and  
making use of Machine learning techniques