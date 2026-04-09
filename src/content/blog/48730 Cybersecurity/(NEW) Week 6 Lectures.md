```plaintext
Notes/
├── Intrusion Concepts
├── IDS Architecture & Components
├── Detection Techniques
├── IDS Types & Deployment
├── Evaluation & Metrics
├── Tools & Honeypots
├── IPS & Prevention Systems
```

---

## Intrusion Concepts

### Intrusion Definition

- Hostile or unwanted access that bypasses security mechanisms
    
- Secure systems exhibit:
    
    1. Predictable user/process behaviour
        
    2. No subversion of security policy
        
    3. Behaviour consistent with allowed specifications
        
- Intrusion examples:
    
    - Unauthorised login/actions
        
    - Corporate espionage
        
    - Data theft/ransom
        

### Intruder Categories

- **Cyber Criminals**: Financially motivated; active in underground forums ([SOCRadar](https://socradar.io/top-5-underground-hacker-forums...))
    
- **Activists/Hacktivists**: Politically/socially driven; often deface websites, DoS, steal/distribute data
    
- **State-Sponsored/APTs**: Nation-state backed; long-term espionage or sabotage campaigns
    

### Intrusion Lifecycle

Target Acquisition → Initial Access → Privilege Escalation → Cover Tracks → Maintain Access → Exploit

## IDS Architecture & Components

### IDS Definition

- Hardware/software that analyses system/network data to detect intrusions
    

### Core Components

- **Sensor**: Captures data (network packets, logs, syscalls)
    
- **Analyzer**: Determines if intrusion occurred; may use ML/AI
    
- **Decision Engine**: Makes decisions and triggers actions or reports
    
- **User Interface**: Displays system outputs
    

![](99%20-%20Assets/2025/Pasted%20image%2020250525131239.png)
**Components**:
- **Sensor**: Collects observable activity data from the network
- **Analyzer**: Uses detection models to examine collected data and raise alarms
- **Decision Engine**: Uses decision table and/or human analyst input to determine action
- **Output**: Report or response action (e.g., alert via traffic light metaphor)

**Notes**:
- System activities must be observable
- Normal vs intrusive behavior produces distinct evidence

### Sensor Details

- May include preprocessing (filtering, deduplication)
    
- Host-based: logs/system calls
    
- Network-based: traffic inspection
    
- Limitations: TTL tricks, encryption, fragmentation
    
- Application/System/Network monitoring provide different perspectives
    

### Analyzer Details

- Correlates data across sensors
    
- Can use adaptive techniques (ML, Neural Networks)
    
- Example: detects off-hour kernel recompilation via log correlation
    

### Decision Engine

- Responds to analyzer input
    
- Actions: notify admin, block traffic, visualise data (GUI)
    
- Protocols: IDXP for multi-IDS coordination
    

## Detection Techniques

### Analysis Approaches

- **Anomaly Detection**: Compares behaviour to known good profile (detects unknown attacks)
    
- **Signature/Heuristic**: Matches known bad behaviours (used in AV, can't detect new threats)
    
- Metrics: Thresholds, Markov Models, etc.
    

### Anomaly Detection Techniques

- **Machine Learning**: Neural Nets, Genetic Algos, Clustering
    
- **Knowledge-Based**: Manually defined rules
    
- **Statistical**: Time-series, Univariate, Multivariate
    
- Datasets: DARPA/KDD'99, NSL-KDD, UNSW-NB15
    

### Learning Types

- **Supervised**: Needs labelled data (training vs. testing)
    
- **Unsupervised**: Learns from raw data (assumes anomalies are rare)
    

### Metrics

- TP: True Positives
    
- TN: True Negatives
    
- FP: False Positives
    
- FN: False Negatives
    

## IDS Types & Deployment

![](99%20-%20Assets/2025/2025-05-25-13-05-12.png)
### IDPS (Intrusion Detection and Prevention System)
- Positioned between firewall and internal network
- Monitors & blocks traffic in real-time
- Integrated IPS system can act immediately

### HIDS (Host-Based IDS)
- Deployed on individual workstations/laptops
- Monitors local system logs, config, binaries
- Detects local-level compromises

### NIDS (Network-Based IDS)
- Monitors network traffic at switches or routers
- Detects malicious patterns across the entire subnet
- Does not inspect host internals

### DIDS (Distributed IDS)
- Multiple agents across systems
- Central manager aggregates and correlates data
- Scalable, coordinated view of threats
### Host-Based IDS (HIDS)

- System-level monitoring
    
- Techniques: Syscalls, audit logs, registry access, file integrity checksums
    

### Distributed HIDS

- Agents across multiple hosts
    
- Centralised or decentralised management
    

![](99%20-%20Assets/2025/2025-05-25-13-05-20.png)  

**Entities**:
- **Agent Module** on each Host (monitors local activity)
- **LAN Monitor** (collects and forwards to manager)
- **Central Manager** (runs manager module)
- Connected over the Internet or internal network

**Data Flow**:
Hosts → LAN Monitor → Router → Internet → Central Manager


![](99%20-%20Assets/2025/2025-05-25-13-05-19.png)


**NIDS Sensor**:
- Monitors public and private internet traffic before it hits internal systems
- Placed at strategic network points

**HIDS Sensor**:
- Installed directly on each internal host/server (Web, FTP, SSH, etc.)
- Monitors internal host-level activity

**IDS Manager**:
- Central component collecting sensor data
- Feeds data to:
  - **Incident Response Team**
  - **Network Management Console**

**Data Flow**:
Public ↔ Firewalls ↔ Internal Servers ↔ IDS Manager ↔ Response/Monitoring Units

### Network-Based IDS (NIDS)

- Traffic inspection at network points
    
- Real-time packet inspection
    
- Components: sensors, management server, console
    

### Distributed/Hybrid IDS

- Combines HIDS and NIDS
    
- Uses peer-to-peer protocols for attack detection
    

![](99%20-%20Assets/2025/2025-05-25-13-05-10.png)
![](99%20-%20Assets/2025/2025-05-25-13-05-33-1.png)
**Core Concept**: Collaborative, policy-driven IDS with feedback and gossiping  
**Key Elements**:
- Multiple laptops and routers connected in a distributed cloud
- Events:
  - **PEP events**: Policy Enforcement Point data
  - **DDI events**: Results from distributed inference
  - **Platform events**: Host-level observations
  - **Summary events**: Aggregated outputs

**Policy Types**:
- **Platform policies**: Applied to individual hosts
- **Network policies**: Applied to routers/switches
- **Collaborative policies**: Shared among nodes
- **Adaptive feedback-based policies**: Evolve based on detection outcomes

**Flow**:
→ Events shared via gossip protocol  
→ Processed in distributed detection cloud  
→ Feedback policies updated to improve detection

![](99%20-%20Assets/2025/2025-05-25-13-05-59.png)
**HIDS (Host-Based)**:
- Placed directly on each host/server
- Monitors local logs, system calls, file integrity
- Ideal for internal threats and tampering

**NIDS (Network-Based)**:
- Placed at network boundaries (e.g., near firewall)
- Monitors all incoming/outgoing packets
- Ideal for spotting external attacks, scans, traffic anomalies
## Evaluation & Metrics

### Effectiveness Measures

- **Accuracy**: `(TP+TN)/(TP+TN+FP+FN)`
    
- **Detection Rate**: `TP/(TP+FN)`
    
- **False Alarm Rate**: `FP/(FP+TN)`
    

### Signature vs Heuristic

- Signature: Pattern matches, can't detect new attacks
    
- Heuristic: Manually defined rules, OS/machine-specific
    

### Intrusion Techniques Mapping

- Signature: App/Transport/Network attacks, policy violations
    
- Anomaly: DoS, Scanning, Worms
    

### Stateful Protocol Analysis (SPA)

- Compares traffic to vendor profiles
    
- Resource-heavy; tracks protocol state progression
    

### Logging

- Timestamp, Session ID, Alert Type, Rating
    
- IPs, Ports, Payload, Protocols
    
- State & Session metadata
    

### RFCs

- [RFC4765](https://tools.ietf.org/html/rfc4765): IDMEF format
    
- [RFC4766](https://tools.ietf.org/html/rfc4766): IDMEF requirements
    
- [RFC4767](https://tools.ietf.org/html/rfc4767): IDXP protocol
    

![](99%20-%20Assets/2025/2025-05-25-13-05-46.png)
**Entities**:
- **Data Sensor**: Captures raw activity
- **Sensor**: Processes and transforms activity into events
- **Analyzer**: Evaluates events against security policy
- **Manager**: Issues alerts, notifies operator

**Flow**:
1. Data sensor → sensor → analyzer → manager
2. Manager alerts operator → operator responds
3. Security policy set by administrator

**Interaction**:
- Security policy guides each module
- Operator receives actionable notifications
## Tools & Honeypots

### Honeypots

- Decoy systems to:
    
    - Divert attacker
        
    - Gather intel
        
    - Occupy attacker
        
    - Early warning
        
- Fabricated data, zero production value
    
- Interaction levels:
    
    - **Low**: Emulated services
        
    - **High**: Real system (risky, resource-heavy)
        

![](99%20-%20Assets/2025/2025-05-25-13-05-76.png)

## Key Components
- **Internal Network**: Real user machines and services
- **Service Network**: Hosts critical servers (Web, Mail, DNS)
- **DMZ (Demilitarized Zone)**: Boundary between internal and external networks
- **Honeypots**: Deceptive systems placed in multiple zones (internal, DMZ, external) to lure attackers
- **External Firewall**: Controls traffic between internet and DMZ
- **Router**: Routes traffic between service network and other zones
- **LAN Switch**: Connects all internal and external devices

## Purpose
- Divert attackers to honeypots for monitoring
- Prevent direct access to critical systems
- Enable intrusion analysis and containment
### Snort (Signature-based IDS)

- Open source, multi-platform
    
- Uses rules + preprocessors
    
- [www.snort.org](http://www.snort.org)
    

![](99%20-%20Assets/2025/2025-05-25-13-05-04.png)  
![](99%20-%20Assets/2025/2025-05-25-13-05-51.png)
## Snort Architecture Flow
1. **Packet capture** (via `libpcap`)
2. **Packet decoder**: Parses raw packet
3. **Pre-processors**: Normalize/prepare data
4. **Detection engine**: Applies rule set logic
5. **Alert generation**: Triggers alerts based on match
6. **Alert database**: Logs alerts

## Snort Rule Structure

### Rule Header
- **Action** (e.g., alert, drop)
- **Protocol** (TCP/UDP/ICMP)
- **Source Address**
- **Source Port**
- **Direction** (`->` or `<->`)
- **Destination Address**
- **Destination Port**

### Rule Option
- Detailed conditions and metadata (e.g., content match, flags, message text)

**Example**:
```snort
alert tcp any any -> 192.168.1.0/24 80 (msg:"HTTP Access"; content:"GET"; sid:1001;)
```
#### Snort Rule Options

- **Meta-data**: `msg`, `reference`, `classtype`
    
- **Payload**: `content`, `depth`, `offset`, `nocase`
    
- **Non-payload**: `ttl`, `id`, `dsize`, `flags`, `icmp-id`, `seq`
    
- **Post-detection**: `logto`, `session`
    

## IPS & Prevention Systems

### Intrusion Prevention Systems (IPS)

- Extension of IDS with blocking capabilities
    
- Host, Network, or Hybrid deployment
    
- Acts like firewall + IDS algorithms
    

### IPS Advantages

- Inline deployment
    
- Layer 3/4 traffic monitoring
    
- Stops malicious packets immediately
    

![](99%20-%20Assets/2025/2025-05-25-13-05-53.png)
## Step-by-Step Flow
1. **Threat Origin**: Attacker attempts to exploit a target system from the internet.
2. **Traffic Inspection**: IPS-enabled sensor inspects packets as they pass through.
3. **Management Console**: Receives alerts and allows admins to configure rules/actions.
4. **Threat Mitigation**: Malicious traffic is dropped or redirected to a “bit bucket” (discarded).

**Key Characteristic**: In-line prevention — the IPS directly controls packet forwarding.
![](99%20-%20Assets/2025/2025-05-25-13-05-08.png)
## Intrusion Detection System (IDS)
- **Placement**: Off-path (connected to a mirror port on the switch)
- **Function**: Monitors and logs suspicious activity
- **Response**: Passive (alerts admin but doesn't block)
- **Use Case**: Forensics, visibility, and audit

## Intrusion Prevention System (IPS)
- **Placement**: In-line (between firewall and switch)
- **Function**: Actively analyzes and blocks malicious traffic
- **Response**: Real-time prevention
- **Use Case**: Live mitigation of threats before they reach internal resources
### IDS vs IPS

- **IDS Pros**: No impact on network traffic, passive
    
- **IDS Cons**: Cannot block attacks, needs tuning
    
- **IPS Pros**: Blocks traffic, stream normalisation
    
- **IPS Cons**: Inline = risk of sensor failure/latency
    

### Insider Threats

- Hard to detect
    
- Motives: revenge, theft, sabotage
    
- Behaviours: after-hours access, downloads, misuse of privileges
    

### Implementation Challenges

- **Timing**: Detection speed, reaction window
    
- **Control**:
    
    - Centralised vs Agent-based
        
    - Communication security
        
    - Detection accuracy (TP, FP, TN, FN)
        

### Commercial IDS/IPS Tools

- **Enterprise**: SolarWinds, Palo Alto, McAfee
    
- **Free/Open Source**: Snort, Suricata, Bro, OSSEC, Security Onion, Open EIPS-NG
    

Source: [Software Testing Help](https://www.softwaretestinghelp.com/intrusion-detection-systems/)

## Summary

- IDS/IPS = core security tools
    
- Two detection methods: Signature + Anomaly
    
- Metrics (TP/FP/FN/TN) critical to effectiveness
    
- Current research focus: ML + Collaborative IDS/IPS