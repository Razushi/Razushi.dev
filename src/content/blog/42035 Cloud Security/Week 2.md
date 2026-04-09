# CLOUD COMPUTING SECURITY ESSENTIALS

References:
CARTER CHAPTER 2
VACCA CHAPTERS 3, 4, 14
## Outline
• Understand Security Concepts that are relevant to Cloud Computing
• Understand the Design Principles of Secure Cloud Computing
• Aware of certification criteria and guidelines to follow to develop acceptable level of trust and confidence in the security of cloud implementation and in the cloud services providers.
• Aware of Security Standards

### Cloud Computing Definition
• NIST Special Publication (SP) 800-1 definition:
“Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction."
• 5 characteristics of a cloud service:
	▪ on-demand self-service,
	▪ broad network access,
	▪ resource pooling
	▪ rapid elasticity, and
	▪ measured service.
• 3 service models:
	▪ Infrastructure as a Service – IaaS
	▪ Platform as a Service – PaaS
	▪ Software as a Service - SaaS
### Models or Categories
• IaaS: The capability provided to the consumer is to provision processing, storage, networks, and other fundamental computing resources where the consumer is able to deploy and run arbitrary software, which can include operating systems and applications. The consumer does not manage or control the underlying cloud infrastructure, but has control over operating systems, storage, deployed applications, and possibly limited control of select networking components (e.g., host firewalls). A consumer's operating systems and applications can be migrated to the cloud provider's hardware.
• PaaS: The consumer is to deploy consumer-created or acquired applications onto the cloud infrastructure that are created using programming languages and tools supported by the provider. The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, or storage, but has control over the deployed applications and possibly the application hosting environment configurations. The cloud provider renders a virtualized environment and a set of tools to allow the creation of new web applications.
• SaaS: The consumer is to use the provider's applications running on a cloud infrastructure. The applications are accessible from various client devices through a thin client interface, such as a web browser (e.g., web-based e-mail). The consumer does not manage or control the underlying cloud infrastructure, including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings. The cloud provider owns the applications, and the consumers are authorized to use them in accordance with a service agreement signed between parties.

### Shared Considerations
• Interoperability
• Performance, Availability, and Resiliency
• Portability
• Service Level Agreements (SLAs)
• Security
• Privacy
• Auditability
• Governance
• Maintainability and Versioning
• Reversibility

### Security - CIA

• Confidentiality involves the concealment of sensitive information
from unauthorized parties.
	▪ Cryptography, which conceals plain text information using mathematical transformations.
	▪ Access control, which defines the parties permitted access to certain parts of the system or certain pieces of information.
	▪ Authorization, which determines what actions each authorized party is allowed to do with apiece of data
• The integrity pillar means that a system and its data were not altered by unauthorized parties.
• Availability refers to the property that a system and its data should be available to authorized parties in a timely manner.
• Other important concepts:
	▪ authenticity, the property of data and transactions being genuine, and
	▪ non-repudiation, which is the assurance that a party cannot deny a transaction, a statement, or a signature

### Some Cloud Security Vulnerabilities
![](99%20-%20Assets/2025/2025-08-24-21-08-40.png)

### Application Layer: The SQL Injection Vulnerability
![](99%20-%20Assets/2025/2025-08-24-21-08-13.png)

### Operating System Layer

The TOCTTOU vulnerability:
```
if (access"/home/bob/symlink", R_OK | W_OK) != -1)
{ 
// Symbolic link can change here
f = fopen("home/bob/symlink", "rw");
...
}
```

### Other Layers

• Hypervisor:
	▪ flaw in the hypervisor complex code might compromise the isolation between VMs residing in the same server.
	▪ flaws in code performing migration of VMs among servers, and VM snapshot and rollback
	▪ These vulnerabilities can lead to integrity compromises, data disclosure, and denial of service (DoS) attacks.
• Storage:
	▪ VM images in public repositories might contain malware, or vulnerable or unpatched code.
	▪ Data may be located in different countries which have different laws about the ownership of data
	▪ data disclosure might happen if data are not properly cleaned from secondary storage when moved or deleted

• Hardware layer: just like in traditional computing
	▪ Cloud computing is vulnerable to hardwareTrojans, that	introduce malicious functionality at the gate level
• Network layer:
	▪ Cloud computing is also susceptible to vulnerabilities found in network protocols, usually causing a DoS attack such as a
	TCPSYN flood, where an adversary sends more connection	request packets (SYN packets) than a server can process
	▪ A malicious VM can listen to the virtual network or even use address resolution protocol (ARP) spoofing to redirect packets from/to other VMs

### Cloud Computing Security

• Cloud computing security refers to the set of procedures, processes, and standards designed to provide information security assurance in a cloud ecosystem.
• While all cloud actors involved in orchestrating a cloud ecosystem are responsible for addressing operational, security and privacy concerns, cloud consumers retain the data ownership and therefore remain fully responsible for:
	▪ properly identifying data's sensitivity
	▪ assessing the risk from any exposure or misuse of the data and the impact to their business
	▪ identifying security requirements commensurable with the data sensitivity
	▪ approving necessary risk mitigations

• Some of the cloud consumers areas of concern are:
	▪ Risk management (Risk assessments, Vulnerability assessments, Incident reporting	and response)
	▪ Business continuity (Disaster recovery plan, Restoration plan incorporating andquantifying the recovery point objective and recovery time objective for services)
	▪ Physical security (Physical and environmental security policy, Contingency plan,	Emergency response plan, Facility layout, Security infrastructure, Human resources, Environmental security, Visual inspection of the facility),
	▪ User account termination procedures,
	▪ Compliance with national and international/industry standards on security,
	▪ Transparent view of the security posture of the cloud providers, brokers, and carriers.
### Dividing Operational Responsibilities

• Responsibilities are often split among actors with the level of responsibility shifting based on the deployment and service models adopted.
	▪ Cloud consumers are ultimately responsible for defining the security and	privacy controls
	▪ The implementation of many of these controls is often the responsibility of the cloud providers or cloud technical brokers.
	▪ Once the cloud architecture is defined, cloud actors involved in orchestrating	the ecosystem identify the control interfaces exposed to cloud consumers.
	▪ Examples of control interfaces that a cloud provider and/or broker can	expose include:
		 System, security, and application logs
		 Broker APIs for instrumentation
		 The broker's web application for managing cloud consumer applications

### NIST Cloud Computing Reference Architecture- NIST SP 500-292
![](99%20-%20Assets/2025/2025-08-24-21-08-94.png)
- The application layer includes software applicatiosn targeted at end users or programs. The applications are used by SaaS consumers, or installed/managed/maintained by PaaS consumers, IaaS consumers, and SaaS providers.
- The middleware layer provides software building blocks (e.g. libraries, database, and virtual machines) for developing application software in the cloud. The middleware is used by PaaS consumers, installed/managed/maintained by IaaS consumers, or PaaS provides, and hidden from SaaS consumers
- The OS layer includes operating system and drivers, and is hidden from SaaS consumers and PaaS consumers. An IaaS cloud allows one or multiple guest OS's to run virtualized on a single physical host. Generally, consumers have broad freedom to choose which OS to be hosted among all the OS's that could be supported by the cloud provider. The IaaS consumers should assume full responsibility for the guest OS's, while the IaaS provider controls the host OS.
### AWS –Shared Responsibility Models

![](99%20-%20Assets/2025/2025-08-24-21-08-11.png)

## Security Concepts Relevant To Cloud Computing

### Cryptography
• Encryption
• Data in Transit
• Data at Rest
• Key Management
	▪ Remote Key Management Service
	▪ Client-Site Key Management Service

### Access control
• Account Provisioning
• Directory Services
• Administrative and Privilege Access
• Authorization


### Data and media sanitation
• Vendor Lock-in for Data
• Data Sanitation
	▪ Overwriting
	▪ Cryptographic Erasing

### Network security

### Virtualization security
• Hardware-based Virtualization – Bare Metal or Type 1	Hypervisors
	▪ VMWare ESXI
• Operating System-based Virtualization – Type 2	Hypervisors
	▪ VMWare Workstation
• Container Security
	▪ Docker
	▪ LXC

## Threats
### Threat Classification:
• Infrastructure and host-related threats that affect the entire cloud infrastructure
• Service provider-related threats that may affect the customers who seek a service in the cloud
• Generic threats that may affect both the infrastructure and the service providers/customers

### Infrastructure And Host Threats
• Unauthorized Physical Access to Facilities and Equipment
• Deficient Training/Negligence of Employees (Accidental loss or deletion of data)
• Dumpster Diving (Information loss in trash)
• Password Guessing (Use of Social Engineering Toolkit by malicious users)
• Insecure or Ineffective Data Deletion (Data not fully wiped out or incorrectly deleted-change in server location, reallocate hardware, or destroy older hardware)
• Isolation Malfunction (Performance and Security-VMs share resources)
• Failure of Third-Party Suppliers (Suppliers are not always trustworthy)
• Lock-In (Users cannot transfer their data and services from one CP to another due to cloud architectures or tools)
• Compliance Problems (Different standards and policies)
• Cloud Data Provenance, Metadata Management and Jurisdiction (Distributed infrastructure and location-Process, data, workflow, and system provenance)
• Unauthorized Access to Data or Information Systems
• Compromise of Operational Security Logs (malicious parties can use to launch attacks)
• Network Breaks
• Privilege Escalation – Use a VM to attack another VM by escalating his/her access right using hypervisor of the host or shared memory of the VMs.
• Malicious Scanning or Observation – Use tools such as hping, Nmap, Wget
• Insecure or Obsolete Cryptography
• Economic Denial of Service – new threat: Identity theft, no limits on the use of paid resources, use public channel to use the customers’ metered resources.
• Billing Faults
• Insufficient Logging and Monitoring- No standard mechanisms
• Cloud Service Failure or Termination – A permanent or temporary inability of the cloud infrastructure to provide its services
• Infrastructure Modifications- Update or upgrade of software/equipment
• Data Processing – Integrity of data
• Administrative and Ownership Changes – Change in administrative personnel, SP sold.
• Denial of Service to Cotenants due to Misjudgement or Misallocation of Resources
• Subpoena and e-Discovery – Different legal frameworks
• Natural Disasters

### Service Provider Threats
• Replay Attacks – Man-in-the-middle attack
• Data Interception – Man-in-the-middle, Eavesdropping, Side channel attack
• Browser Security – Most common threats in clouds
• XML Signature Element Wrapping – Amazon’s EC2 services in 2008
• Injection Vulnerabilities – SQL, command injections, cross-site attacks
• Customers’ Negligence and Cloud Security
• Management Imperfect Exposure – control VMs and operation of Cloud systems
• Loss of Governance – Different consumer and provider security methods.

### Generic Threats
• Social Engineering Attacks
• Malware
• Malicious Insider of Cloud Provider
• Distributed Denial of Service
• Encryption Keys Exposure or Loss
• Service Engine Exposure – Updates of service engine

### 12 Top Threats For The Cloud
1. Data breaches
2. Insufficient identity, credential, &access management
3. Insecure interfaces and APIs
4. System vulnerabilities
5. Account or service traffic hijacking
6. Malicious insiders
7. Advanced persistent threats
8. Data loss
9. Insufficient due diligence
10. Abuse of cloud services
11. Denial of service
12. Shared technology vulnerabilities
https://cloudsecurityalliance.org/group/top-threats

### Security Concerns For Iaas
• Multitenancy
• Co-location
• Hypervisor Security and Attacks
• Network Security
• Virtual Machine Attacks
• Virtual Switch Attacks
• Denial-of-Service (DoS) Attacks

### Security Concerns For PaaS
• System Isolation
• User Permissions
• User Access
• Malware, Trojans, Backdoors, and Administration complexity

### Security Concerns For Saas
• Web Application Security
• Data Policies
• Data Protection and Confidentiality

### Trusting The Cloud
• Existing trust models for a datacentre are restricted to the perimeter of an organization and hence not appropriate for cloud environments.
	▪ Data Processing – lose control and CP not fully trusted
	▪ Data Location – Not taken into account the location of data and data in transit
	▪ Data Access - Users access locations are unknown
	▪ Number of Users – Uncertain about the number of people that can access the system
	▪ Composite Services – subcontractors of services

### Trust Model Requirements
• Trust metric – quantitative measures
• Abnormal behaviour – should describe deviation from normal with weight and criteria such as time, history, and weights of abnormal vs normal)
• Identity management/authentication
• Data security – should specify the minimum requirements for achieving an acceptable level of data security
• SLA: Service Level Agreement – should be part of the trust management process.

### Cloud SLA
• Service guarantee – the metrics used to measure the provision of service over a time period (availability, response time, etc.)
• Service guarantee time period (a billing month, time elapsed since the last claim, 1 hour) 
• Service guarantee granularity (per service, per data centre, per instance, per transaction)
• Service guarantee exclusion – Instances excluded from evaluation (abuse of the system by a customer, downtime due to scheduled maintenance)
• Service credit (The amount credited to the customer for guarantee violation: complete or partial refund)
• Service violation measurement and reporting: How and who measures and reports violations of a service guarantee.

### Cloud Security SLA
The situation that emerges is that many tools exist, but none has become astandard adopted by cloud providers
Technical problems still have to be solved:
• Mapping high-level security properties to low-level monitoring parameters,
• Efficiently managing the complexity introduced by virtualization, and
• Resource elasticity are among the most challenging issues

ENISA specification for a security SLA in cloud contracts:
▪ Service availability
▪ Incidence response
▪ Service elasticity and load tolerance
▪ Data life-cycle management
▪ Technical compliance and vulnerability management
▪ Change management
▪ Data isolation
▪ Log management and forensics
### SLA Management System
![](99%20-%20Assets/2025/2025-08-24-21-08-70.png)

### Design Principles Of Secure Cloud Computing
• Cloud Secure Data Lifecycle
• Cloud-Based Business Continuity/Disaster Recovery Planning
• Cost-Benefit Analysis

### Identity Trusted Cloud Services
• Certification criteria and guidelines that an organization can follow to develop an acceptable level of trust and confidence in the security of a cloud implementation and in the cloud services provider.
• Certification Against Criteria – System Product Certifications:
▪ ISO/IEC 27001 and 27001:2013
▪ NIST SP 888:53
▪ PCI DSS – Payment Card Industry Data Security Standard
▪ SOC 1, SOC 2, and SOC 3
▪ Common Criteria
▪ FIPS 140-2