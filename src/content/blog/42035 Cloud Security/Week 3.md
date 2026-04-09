# INFRASTRUCTURE AND PLATFORM SECURITY IN THE CLOUD
References:
CCSP. Carter – Chapter 4
Cloud Computing Security. Vacca - Chapter 5
### Cloud Server Context
![](99%20-%20Assets/2025/2025-08-24-21-08-00.png)

### Cloud Network Model
![](99%20-%20Assets/2025/2025-08-24-21-08-95.png)

### Cloud Security Management Overview
• Governance and Comprehensive Risk Analysis
• Audit and Reporting
• Proper Protection of Data Information
• Security Aspects of Cloud Networks
![](99%20-%20Assets/2025/2025-08-24-21-08-23.png)

▪ The logical network design of the cloud computing resources must factor in a front-end router with a connection to the Internet for providing services to the consumers.
▪ The back end of the router will connect to a perimeter firewall which will support a demilitarized zone (DMZ). This DMZ will support possibly web-based services, e-mail, and domain name servers for external services.
▪ The perimeter firewall will provide a measure of access control and protection to the services in the DMZ.
### Components Of A Cloud Infrastructure
Manage
- Provides GUI and API access to infrastructure configuration and reporting
- Implemented as a stand-alone application, integrates with underlying cloud components
- Must robustly control access through strong authentication and authorization

Compute
- Encapsulates CPU processing time and RAM working space
- Implemented by hypervisors, containers, and bare metal
- Must isolate different users’ workloads

Network
- Provides intra-, inter-, and extra-cloud communications
- May be virtualized within a hypervisor, or simply carefully configured as with bare metal
- Must isolate different workloads’ communications

Storage
- Provides block storage, often with additional functionality
- Implemented as virtual disk drives within a hypervisor, or direct access to physical storage
- Must isolate different workloads’ stored data

Database
- Provides simplified access to database services
- Implemented as SQL or NoSQL engines, often managed for the cloud as a whole
- Must isolate different workloads’ data, and scale dynamically as workload demands

### Cloud Infrastructure Components
![](99%20-%20Assets/2025/2025-08-24-21-08-62.png)

### Physical Environment
• A large cloud environment may have
	▪ Multiple data centers at different geographical locations,
	▪ Each data center may have hundreds of thousands of servers.
	▪ It host a significant number of customers.
	▪ It requires enormous power and cooling resources.
• It requires redundancy in
	▪ Computing, storage, networking resources as well as
	▪ Power,
	▪ Cooling,
	▪ Physical grounds and buildings
• Locations of data centers of a cloud provider are selected to minimize the risk from environmental and disaster concerns regardless of the location of their headquarter.

### Network And Communications
• Physical network level: Wiring and cabling
• Physical network devices level: switches, routers, network security devices are organised into segments for isolation and security reasons.
• Both physical network segmentations and software/virtual network segmentation across physical segments are required for enhancing isolation and security.

### Compute
• Compute resources of a cloud environment comprise processing capabilities (the umber of instructions the central processing units (CPUs) can execute per  
second) and the amount of their active working random access memory (RAM).  
• In a cloud environment, all physical resources are pooled together and shared among all customers (multiple tenants) through virtualization,  
• Several mechanisms are deployed: Reservation, limit, and share.  
	▪ A reservation is am minimum resource (processing and memory) guaranteed to a customer.  
	▪ Limits on allocated resources are aimed to maximize resource utilization of a cloud customer and to ensure that a single host or customer cannot be allocated most of the resources to the detriment of others.  
	▪ Shares are used to mitigate and control customer requests for resource allocations in case the environment does not have the current capability to provide these resources. Shares work by prioritizing hosts within a cloud environment through a weighting system defined by the cloud provider. The higher the share value a host has, the more resources it will be allowed to use.
### Storage
• Storage typically consists of redundant array of inexpensive disks (RAIDS) and storage area network (SANS) virtualized and made available to virtual servers in the cloud infrastructure.
• Volume storage is allocated to a virtual machine and configured as hard drive and file system by the hypervisor.
• Object storage utilizes a flat system and assigns files and objects a key value that is then used to access them. Cloud providers often use object storage to store virtual host images.

### Virtualization
• Virtualization is an abstraction of physical resources into virtual resources and pooling them together under a virtual resource manager.
• A hypervisor is used to 
	▪ Create VMs.
	▪ Allocate “hardware resources” to VMs from the virtualized pool of hardware resources belonging to	the physical server
	▪ Monitor the status of the VMs.
	▪ Take part in the movement of VMs from one system to another.
	▪ Two most often types of hypervisor are hardware-based hypervisor and operating system-based hypervisor.

### Management Plane
• The function of the management plan is to centrally manage its cloud environment and all the servers within it.
• Typically, management is run from a dedicated serves and has its own physical connections to the underlying hardware to isolate itself from other aspects of the environment. It provisions compute, storage, and network connections to virtual servers in the environment. It also launches and terminates virtual hosts and services. The management plan controls the hypervisors in the environment.
• Functionality of the management plan is made available through remote calls or exposed APIs.
• A compromised management plane would give the attacker complete control of the entire environment. Only a limited set of trusted administrator should have access to the management plan and all access and functions should be tightly audited and reviewed on a regular basis.

### Risks associated with Cloud Infrastructure Risk Assessment and Analysis
• With any external hosting arrangement, a company loses substantial control over its systems and its governance even with tight contractual requirements and SLAs.  
• From an organizational and regulatory perspectives, risks include lock-in,  governance, data security and privacy, and any legal and regulatory controls and reporting required for a system or application.  
• A major risk in a cloud environment is ensuring that data can be from a system through overwriting and/or cryptographic erasure when required  

### Virtualization Risks
With virtualization and its complexities, cloud environment has additional risks compare to traditional data center model.
	• If a hypervisor is compromised (by malware or any other attack vectors), all its virtual machines hosted by it are vulnerable.
	• A compromised hypervisor can also be used to attack other hypervisors or components within the same cloud environment
	• A compromised hypervisor can also be used to attack virtual machines hosted by other hypervisors that are accessible within the cloud.
	• Network traffic in virtualization environment risks: Traditionally traffic between servers has to pass through a physical network appliance so they can be monitored and analysed and logged. In a virtual environment, communication between virtual hosts under the same hypervisor does not go through any physical network element and hence may be invisible or difficult to detect. 
	• How virtual server images are stored and operate. A virtual image can be modified while in a live or inactive from the file system level.
### Countermeasure Strategies
- Using host images for virtual hosts that already have been hardened and scanned, one can ensure that new hosts are already secured in the exact same manner as the baseline. 
- For patching and updating, a cloud provider can reimage the host using a new baseline image that has been patched and tested. Instead of thousands of hosts being patched and tested, efforts can be focussed on one host and then deployed across the cloud to all others. 
## DESIGN AND PLAN SECURITY CONTROLS

### Physical And Environment Protection
• Physical assets: servers, cooling units, power distribution units, networking equipment, physical racks, cabling, physical facilities and auxiliaries such as battery backups, power conduits, generators, fuel tanks, and fences.
• Outside the data center: power and network conduits that the data center relies on, the endpoints of access for the users and customers such as mobile devices, workstations, laptops, tablets, etc.
• Around the outside of the data center: using security measures such as fences, cameras, lights, vehicle access control, barriers, security guards.
• Access to the interior of the building; guards, doors, key card access, ID proof, badges, codes, biometrics and other forms of authentication.
• Inside the facility: different levels of access control including cages, sectioning, and monitoring.
• Power supplies, network feeds – Need redundancy
• Background check for personnel with access to the data center.

### System and Communication Protection
• While the cloud provider is responsible for the underlying hardware and networking regardless of cloud service models, the remaining services and security responsibilities either lie with the customer or are split between the customer and the cloud provider. Which should be clearly documented in the contracts and SLAs.
• Protection of data is a primary concern:
	▪ Data at rest. Using encryption technologies
	▪ Data in transit: network isolation and encrypted transport	mechanisms such as TLS
	▪ Data in use: secure API calls and web services via the use of encryption, or digital signature.

### Virtualization System Protection
• Vulnerabilities at each level and each component of the management plane: APIs, exposed function calls and services, web portals or other client access interfaces. 
• Role-based access controls must be comprehensively audited in terms of monitoring, logging, and reporting and reviewing for both the management plan and the virtualization infrastructure.
• Multitenancy controls: keep tenants separate and protected from each other by keeping system interaction and security isolated between tenants, between resources and utilization.
• Establishment of trust zones: Trust zones can be established and segmented using may different strategies.
	▪ The most common way involves separating out the different tiers of the system architecture such as the web/presentation, application, and data zones of the infrastructure. This allows the application and the data zones to be isolated from external network access and traffic

### Identification, Authentication, and Authorization in Cloud Infrastructure
• Federation
• Identification
• Authentication
• Authorization

### Audit Mechanisms
• Auditing in the traditional sense involves the ensuring of compliance with policy, guidelines, and regulations.
• From security perspective, auditing is for measuring the effective of security controls to determine the total security requirements for a system or application.
• Auditing typically includes:
	▪ Internal security policy requirements
	▪ Contractual requirements
	▪ Regulatory requirements from local, state, or federal government as well as industry or organizational requirements such as PCI DSS.
• Auditing is performed by
	▪ Analysing security control requirements
	▪ Meshing those with configurations and internal policies
	▪ Collecting logs, screenshots, data sets and anything else to
	▪ Show compliance to the satisfaction of management, customers, or independent/government auditors.

• Complexities and challenges in cloud environment:
	▪ large and distributed hosting platforms
	▪ spanning multiple data centers
	▪ spanning multiple countries and jurisdictions
	▪ systems are hosted in multiple different clouds and/or hosting models.
• Depending on the cloud service model used (IaaS, PaaS, or SaaS), the audit scope will be defined based on
	▪ the level of access a customer has and
	▪ the level of information that will be supplied contractually by the cloud provider.
• Hence the contract and SLAs between the cloud provider and customer should spell out
	▪ the requirements for auditing and
	▪ the delineation of responsibilities between both sides as well as
	▪ the frequency testing and reporting.

## DISASTER RECOVERY AND BUSINESS CONTINUITY MANAGEMENT PLANNING

### Understanding the Cloud Environment
• A cloud environment can be used for BCDR in a few different scenarios:
	▪ An organisation has its primary computing and hosting capabilities in a traditional datacenter and uses the cloud to host its BCDR	environment.
	▪ A system or application is already hosted in a cloud environment and a separate additional cloud provider is used for the BCDR solution.
	▪ An application is hosted in a cloud provider and another hosting model is used in the same cloud provider for BCDR.

### Understanding Business Requirements
• Recovery Point Objective (RPO). The RPO is defined as the amount of data a company would need to maintain and recover in order to function at a level acceptable to management 
• Recovery Time Objective (RTO). RTO is a measurement of the amount of time it would take to recover operations in the event of a disaster to the point where management’s objectives for the BCDR are met
• Recovery Service Level (RSL). RSL measures the percentage of the total , typical production service level that needs to be restored to meet the BCDR objectives in the case of a failure

### Understanding Risks
• Set 1: requires the execution in the first phase regardless of the particular solution
	▪ Natural disaster (earthquakes, hurricanes, tornadoes, floods and so on)
	▪ Terrorists attacks, acts of war, or purposeful damage.
	▪ Equipment failures
	▪ Utility disruptions and failures
	▪ Data center or service provider failures or neglect.
• Set 2: leads to the initiation of a BCDR plan, these are also risks associated with the plan that need to be considered and understood.
	▪ Change in location
	▪ Maintaining redundancy
	▪ Failover mechanism
	▪ Bridging services online
	▪ Functionality with external services.

### Disaster Recovery/Business Continuity Strategy
• Define Scope
• Gather Requirements
• Analyse
• Access Risk
• Design
• Implement the Plan
• Test the Plan
• Report
• Revise

### The BCDR Continual Process
![](99%20-%20Assets/2025/2025-08-25-00-08-09.png)