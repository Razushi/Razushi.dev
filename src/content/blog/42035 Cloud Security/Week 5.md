
# LEGAL, RISK, AND COMPLIANCE
References:
• CCSP. Carter – Chapter 7: Legal, Risk, and Compliance 
• Vacca – Chapter 27 – Assuring Compliance with Government Certification and Accreditation ReguIations

## Outline
The next 7 headers show the main features, components of a cloud environment, the roles and responsibilities of the cloud customer and of the cloud provider, the constituting elements of a security incident and it leads to a loss evet and hence the associated risk. This will provide a framework for cloud security risk analysis in relation to legal, regulation, and compliance.

### A Cloud Environments: Multiple Cloud Providers, Their Cloud, And Their Cloud Customers
![](99%20-%20Assets/2025/2025-08-25-04-08-65.png)
### A Cloud Customer/Organisation/Company And Its Clients/Users
![](99%20-%20Assets/2025/2025-08-25-04-08-15.png)

### A Cloud Provider
• Assets?
	▪ Tangible: buildings, physical hardware, physical networks, etc.
	▪ Intangible: reputation, etc.
• Roles and Responsibilities
	▪ Owns and controls cloud infrastructure
	▪ Services/Contracts/SLAs - cloud customers
	▪ Compliance
		Legals
		Regulations
		Policies
### A Cloud Customer
• Assets?
	▪ Tangible: systems, applications, data etc.
	▪ Intangible: reputation, etc.
• Roles and Responsibilities
	▪ Owns and controls its systems and applications
	▪ Owner of its data
	▪ Custodian of its clients’ data
	▪ Services/Contracts/SLAs – clients/users
	▪ Compliance
		Legals
		Regulations
		Policies

### Formation Of A Security RISK
![](99%20-%20Assets/2025/2025-08-25-04-08-91.png)

### Multiple Risks over different assets and security incidents in an organisation/system/application

![](99%20-%20Assets/2025/2025-08-25-04-08-54.png)

### Forms Of Loss From A Security Incident
Six forms of loss are defined within FAIR – productivity, response, replacement, fines/judgments (F/J), competitive advantage (CA), and reputation.
- Productivity – the reduction in an organization’s ability to generate its primary value proposition (e.g., income, goods, services, etc.)
- Response – expenses associated with managing a loss event (e.g., internal or external person-hours, logistical expenses, etc.)
- Replacement – the intrinsic value of an asset. Typically represented as the capital expense associated with replacing lost or damaged assets (e.g., rebuilding a facility, purchasing a replacement laptop, etc.)
- Fines and judgments (F/J) – legal or regulatory actions levied against an organization. Note that this includes bail for any organization members who are arrested.
- Competitive advantage (CA) – losses associated with diminished competitive advantage. Within this framework, CA loss is specifically associated with assets that provide competitive differentiation between the organization and its competition

### Challenges On The Legal And Policy Front
• Cloud Computing presents many unique challenges on the legal and policy front because
	▪ it often crosses jurisdictional lines that have different rules and regulations as to data privacy and protection.
• For auditing, a loud environment presents unique challenges as a cloud customer will not have full access to systems or processes in the same manner they would in a traditional data centre
• For risk management, risk management poses unique challenges as it expands the realm of operations and systems for an organisation
• A cloud environment introduces additional risks and complexities with multitenancy

### Cloud Environment: Legal Requirements And Unique Risks
• Complex issues regarding
	▪ Policy: applicable laws and regulations
	▪ Technology: data collection and discovery requirements
• Conflicting international legislation
	▪ The location of the users
	▪ The type of data they enter into the systems
	▪ The laws governing the organization that owns the applications and regulatory requirements they may have
	▪ The appropriate laws and regulations for the jurisdiction housing the IT resources and
	▪ The locations where the data is stored, possibly in multiple jurisdictions.
• Conflicts will arise when incidents occur concerning
	▪ Laws requiring reporting and information collection, preservation, and disclosure may be conflict across jurisdictions
	▪ No international jurisdiction to mediate the problems that has full jurisdictional control at the time, so the incidents can become very complex and difficult legal matters to resolve and the resolution is not clear
	▪ Legal proceedings in multiple jurisdictions are required which may or may not have complimentary outcomes and rulings making orders and investigations difficult

### A Traditional Data Centre Versus A Cloud Environment
• With a traditional data centre, the organization will own and control the environment, systems, and resources, as well as the data within all of them. This makes the legal requirements and the parties to them very clear for any types of issues that should arise. 
• With a cloud environment, the cloud customer is reliant on the cloud provider that owns and operates the overall system and services.
• Multitenancy: cloud customers share the same physical hardware and systems as each other. The cloud provider not only contractually bound to an organization, but also to all other organizations in the same hosting environment.
• This precludes the cloud provider from simply capturing systems and turning over any and all data to investigators or regulatory agencies.
• Regardless of where a system and its services are hosted, and organization is legally responsible for all data it uses and stores.

### Legal Framework And Guidelines
Any systems and applications hosted within a cloud will be subjected to a variety of different laws and legal controls.
• US federal level: there are regulations like HIPAA (healthcare) and SOX (financial), as well as federal regulations based on the particular type of commerce and the data involved. 
• US state level: additional requirements on systems, dependent on the type of commerce involved and the type of data being used and stored. Specific requirements can also arise from specific rights and responsibilities required within the jurisdictions.
• The European Community has a very strong focus on personal privacy and data protection.

### Standards
• While not directly legal in nature, many standards organizations have adopted rules that mirror or closely align with actual legal requirements.
• This applies to regulatory and standardization models such as The Payment Card Industry Data Security Standard (PCI DSS) and the various ISO/IEC standards.
	▪ Typically these dictate specific requirements for security controls, operational procedures, and policies for handling specific data and applications.
	▪ They included as contractual requirements
		 from the organization level as well as
		 between the cloud customer and the cloud provider.

### eDiscovery
eDiscovery is the process of searching, identifying, collecting, and securing electronic data and records, to be used in either criminal or civil legal proceedings.
• With a traditional data centre, the collection and identification processes are typically easier and less complex because physical systems are known and can be easily isolated or brought offline and preserved.
• With a cloud environment, all systems and data are virtualized, and because of this, additional challenges and complexity exist.
▪ Within a cloud environment, servers and systems are scattered over virtual machines and storage devices, which may be dispersed across different physical data centres and jurisdictions.
▪ These systems host multiple tenants, making isolation and collection more complex. In fact, within a cloud environment, systems cannot be physically isolated and preserved

### eDiscovery: Legal Issues 
• The legal realities in the US lie in the Federal Rules of Civil Procedure (FRCP) and the Federal Rules for Evidence (FRE). These rules must be followed for evidence to be identified, collected, and presented in a manner that will make it admissible in court proceedings.
• For a traditional data centre, this is an easy to address because all information is on dedicated servers and storage for the particular company or  organisation.
• When information is contained in a virtual environment (Cloud Computing), the big question as to who controls and possesses the information is something that should be articulated in the contract and terms of service between the cloud customer and the cloud provider.
• A second major issue from FRCP is that the data custodians are assumed and expected to have full knowledge of the internal design and architecture of their system and networks. 
• With a traditional data centre, where full ownership and design is already established, this is trivial for an organisation to comply with. 
• With a cloud environment, even with an SaaS implementation, the cloud customer will only have rudimentary knowledge of the underlying systems and networks. With a PaaS implementation and certainly with a SaaS implementation, the cloud customer’s knowledge will be extremely limited.
• This is another critical area where the contract and SLA between the cloud customer and cloud provider will have to establish the roles and responsibilities, as well as the required timelines, for support of eDiscovery requirements and any other legal or regulatory requirements to which the organisation is subjected.

### Conducting eDiscovery In The Cloud
• The exact approach and method to eDiscovery in the cloud will be determined by the contractual requirements between cloud customer and cloud provider as well as driven by the cloud model employed.

### eDiscovery Against The Cloud Provider
• There is also the perspective of eDiscovery orders against the cloud providers themselves. Depending on the scope and requirements of the eDiscovery order against cloud provider, there may be the need to turn over data or physical assets from the environment, which could include systems and data that is part of cloud customers.
• Thus, the Cloud Security Professional will need to include in the contract with the cloud provider, clarifying how such issues will be approached, addressed, and handled by the cloud provider, should the need emerge.

### eDiscovery: ISO/IEC 27050
• ISO/IEC 27050 strives to establish an internationally accepted standard for eDiscovery processes and best practices. It encompasses all steps of the eDiscovery process, including the:
	▪ identification,
	▪ preservation,
	▪ collection,
	▪ processing,
	▪ review,
	▪ analysis, and
	▪ the final production of the required data archive.

### eDiscovery: Cloud Security Alliance (CSA) Guidance
• The Cloud Security Alliance has published a publication that addresses eDiscovery titled “Domain 3: Legal Issues, Contracts, and Electronic Discovery.” This document outlines:
	▪ specific cloud-based concerns for eDiscovery,
	▪ issues specific to the CP and CC, and
	▪ approaches to take to ensure compliance with eDiscovery orders, and the pitfalls and challenges that occur because of them.

### Forensic Requirements
Forensics is the application of scientific and mathematical processes to identify, collect, preserve, analyse, and summarize/report digital information and evidence. It is a concept and a tool for determining the exact nature, methods, and scope of a security incident within any application or systems.
• Within a cloud environment, not only is determining the exact location of systems and data far more complex, the degree of isolation and preservation is also a lot difficult from a traditional server model.
• The particular challenge with forensics is that cloud providers may be unable or unwilling to provide information of this nature to a cloud customer as it might violate the agreements, privacy, and confidentiality of other cloud customers that are tenants within the same systems.
• However, with eDiscovery, and the nature of the court orders and subpoenas, cloud providers are required to provide information to comply with the order.
• With forensics, if it is only at the request of the cloud customer for their own investigation or purposes, it is quite possible the cloud will decline to provide such information if there are concerns about the impact on other tenants.

This is the main reason why it is vital for the Cloud Security Professional to ensure that contractual requirements will empower the cloud customer to obtain the information they might need; otherwise, they must accept the risk.

### Understand Privacy Issues – Contractual PII
Whether a system and its data are hosted in a traditional data centre or in a cloud hosting model, the owner of the application is responsible for the security of any Personally Identifiable Information (PII) data that is processed by or stored within their application and related services. Two types of PII:
	• Contractual PII. This type of PII has specific requirements for handling of sensitive and personal information, as defined at the contractual level. These 	requirements may be in specific security controls and configurations, policies or procedures that are required, or limitations on who may gain authorized access to data and systems.
	• These requirements are part of the contract, auditing and enforcement 	mechanisms will be used to ensure compliance. Failure to follow contractual PII 	requirements can lead to penalties with contract performance or loss of business for an organization.

### Regulated PII
• Regulated PII. This has requirements from specific laws or regulations. A violation can lead to fines or even criminal charges in some jurisdictions.
• Regulations depend on jurisdiction that applies to the hosting location or application or specific legislation on the particular industry or type of data used.
• Regulated PII have requirements for reporting any compromise of data, either to an official government entity or the impacted users directly.

### Protected Health Information (PHI)
• It is a subset of PII that applies to any entity defined under the United States HIPAA laws. 
• It pertains to any information that can be tied to an individual and in regard to their past, present, or future health status, and covers all data that is created, collected, transmitted, or maintained by an entity covered under the law.
• This can include account numbers, diagnoses, test results, as well as the PII that connects them to the individual.

### COUNTRY-SPECIFIC LEGISLATION RELATED TO PII AND DATA PRIVACY
The United States
• The US lacks a single law at the federal level addressing data security and privacy, but there are multiple federal laws that deal with different industries and types of data.
• The US has very few laws on housing of data within geographic areas, so data can often be housed on systems outside the US, even though the individuals the data pertains to, as well as the applications, are accessed from within the borders of the US.

### The Gramm-Leach-Bliley Act (GLBA)
• GLBA is based on the names of the lead sponsors and authors of the act. Officially, it is known as “The Financial Modernization Act of 1999.” There are 3 specific components of GLBA:
	i) The Financial Privacy Rule, which regulates overall the collection and disclosure of financial information of customers and users;
	ii) The Pretexting Provision, which prevents an organisation from accessing, or attempting to access , PII based on false representation or pretexts to customers or potential customers;
	iii) The Safeguards Rule, which puts a requirement and burden on	financial institutions to enact adequate security controls to protect the privacy and personal information of their customers.

### Hipaa-the Health Insurance Portability And Accountability Act Of 1996
• HIPAA requires the Federal Department of Heath and Human Services to publish and enforce regulations pertaining to electronic health records and identifiers between patients, providers, and insurance companies.
• It is focused on the security controls and confidentiality of medical records, rather than the specific technologies used, so long as they meet the requirements of the regulations.

### The Sarbanes-Oxley Act (SOX)
• SOX regulates accounting and financial practices used by organisations.
• It is used to protect stakeholders and shareholders from improper practices and errors, and sets forth rules for compliance, as regulated and enforced by the Security and Exchange Commission (SEC).
• The main influence on IT systems and operations are the requirements it sets for data retention, specifically in regard to what type of records must be preserved and for how long.
• With cloud computing, it spells out the need to ensure that all required data can be accessed and preserved by the cloud customers, or the acceptance of that burden by the cloud provider.
• SOX places substantial requirements on virtually all aspects of a financial systems operations and controls: networks, physical access, access controls, disaster recovery, and any other aspect of operations or security controls

### European Union (Eu)-general Data Protection Regulation (GDPR)
• The GDPR (EU 2016/679) is a regulation and law, covering the EU and European Economic Area, pertaining to data protection and privacy. It covers all countries, citizens, and areas under its jurisdiction, regardless of where the data is created, processed, or stored.
• The law places the burden for technical and operational controls on the entities that are using and storing the data for the protection and enforcement of it.
• Organisations must make it known to users what data they collect and for what purpose, whether it will be shared with any third party, and what their  policies are for data retention.
• The GDPR grants the right to individuals to obtain a copy of the data that an organisation stores in regard to themselves and the right to request deletion of the data.
• Under the GDPR, data controllers are required to notify the applicable government enforcement agencies within 72 hours of any data breaches.
• The GDPR does provide exemptions for enforcement and national security agencies.

### Privacy
• Privacy used to be considered as part of confidentiality, but with the prevalence of online services and mobile computing, the need for a separate category for privacy has become imperative.
• The concept of privacy overall relates to an individual’s control over their own information and activities, versus the information that an organisation would have in its own data stores, which is governed under confidentiality.

### Standard Privacy Requirements
Standards are established by industry groups or regulatory bodies to set common configurations, expectations, operational requirements, and definitions.
• ISO/IEC 27018 in 2014 as part of ISO/IEC 27001 for privacy involving cloud computing. The standard focuses on 5 key principles:
	▪ Communication. Any event that could impact security and privacy of data within the cloud environment are clearly documented with detail, and conveyed to the cloud customers.
	▪ Content. Despite all the information being on the systems that are owned and controlled by the cloud provider, no data or information about the cloud customer can be used in any way, including for advertising, without the express consent of the cloud customer.
	▪ Control. The cloud provider owns and controls the actual infrastructure and storage systems, but the cloud customer retains complete and full control over their data within the cloud environment at all times. 
	▪ Transparency. With the lack of full control within a cloud environment by the cloud customer, the cloud provider bears the responsibility for informing them about where their data and processes reside, as well as any potential exposure to support staff, and to any subcontractors.
	▪ Independent and yearly audit. To assure cloud customers and users as to its certification and protection of data privacy, the cloud provider must undergo a yearly assessment and audit by a third party.

### Generally Accepted Privacy Principles (GAPP)
• GAPP is developed by the American Institute of Certified Public Accountant and the Canadian Institute of Chartered Accountant.
• GAPP is a privacy standard focused on managing and preventing risks to privacy. It has 10 main principles:
	▪ Management
	▪ Notice
	▪ Choice and consent
	▪ Collection
	▪ Use, retention, and disposal
	▪ Access
	▪ Disclosure to third parties
	▪ Security for privacy
	▪ Quality
	▪ Monitoring and enforcement.

### Audit Processes, Methodologies For A Cloud Environment
Regulations and laws are written in a way that are agnostic to the underlying hosting model, and they focus on the ways applications must be secured and data protected. 
• However, with a cloud environment having unique qualities, features, and challenges, there are different approaches and strategies to successfully conducting audits within it.
• The Cloud Controls Matrix published by the Cloud Security Alliance, produces a detailed approach and framework for cloud customers, with a focus on controls that are pertinent and applicable to a cloud environment.

### Internal And External Audit Controls
• Internal audit can be used to ensure cooperate policies and mandates are properly executed and adhered to for the satisfaction of management, also for gauging the efficiencies and effectiveness of internal policies and procedures and for planning future expansions of services.
• Independent external audits of controls will be necessary for customer assurance and compliance with regulatory or certification programs. An external audit will evaluate the IT system and policy controls, but will not address the same types of issues that an internal audit will such as operating efficiency, costs, and design or expansion plans.

### Identify Assurance Challenges Of Virtualization And Cloud
• Virtual machines and cloud environments pose enormous challenges to auditing as compared to traditional data centres.
▪ Many application audits within a virtualised environment will span many virtual machines and often different geographic locations.
▪ Even those within the same physical location will span multiple different physical servers, with different hypervisors controlling some subset of the overall environment.

### Audit Challenge
• The challenge is how to audit and ensure compliance without testing the entire environment,
▪ The environment can be very fluid and change rapidly
▪ With a lack of access to the physical environment within a cloud, the cloud customers and the auditors working on behalf of the cloud customers will have very limited access or even no access at all, to the underlying physical environment.

### Audit Strategy
The strategy to deal with this is to rely on audits and certificates for the underlying environment that are done in conjunction with the cloud provider, and thus can be used by all tenants as the basis for their own audits.
• Audits of the underlying cloud environment will test and evaluate the security hardening and configurations of the physical assets and their associated systems, such as hypervisors.
▪ The cloud provider can then publish to their customers the audit reports and some information about their baseline configurations.
▪ The use of accepted industry standard certifications will also give customers an immediate insight into the type of testing and controls in place without the need to specific audit reports and results, as the standards and evaluation criteria are public and well known.
▪ Additional regular patching assurance, contracts and SLAs, and the verification of adherence are necessary.

### Types Of Audit Reports
• Please look up these types of reports
• SAS
• SSAE
▪ SOC 1
▪ SOC 2
▪ SOC 3
• ISAE

### Audit Planning: 4 Steps
• Define objective
• Define scope
• Conduct the audit
• Lessons learned and analysis

### Internal Information Security Control System
• ISO/IEC 27001:2013 puts forth a series of domains that are established as a framework for assisting with formal risk assessment program: The domains that comprise ISO/IEC 27001:2013 are:
- A5-Managemnt, 
- A6-Organisation, 
- A7-Personnel, 
- A8-Assets, 
- A9-Access Control, 
- A10-Cryptography, 
- A11-Physical Security, 
- A12-Operations Security, 
- A13-Network Security, 
- A14-Systems Security, 
- A15 Supplier/Vendor Relationships,
- A16-Incident Management, 
- A17-Business Continuity, 
- A18-Compliance.

### Policies
• Policies document and articulate in a formal manner the desired or required systems and operations standard for any IT system or organisation.
• They are the basis for how an organisation operates and governs its activities, hiring practices, authorization for access, and compliance.
• There can be a large number of policies put in place following a granular model.
• Organisational policies govern how an organisation is structured and how it operates. They are done with a goal of efficiency, profit, as well as protecting the organisation’s reputation, legal liabilities, and the data it collects and processes.

### IT Policies
• IT policies govern all aspects of IT systems and assets within an organisation:
▪ access control
▪ data classification
▪ backup and recovery
▪ business continuity and disaster recovery,
▪ vendor access,
▪ segregation of duties
▪ network and systems policies
▪ and any other aspect of an IT organisation

### Identification and Involvement Of Relevant Stakeholders
Stakeholders for any IT system and operation:
• Support members of the organisation including management
• Support services that it uses
• Cloud provider
• User and consumers of the system or application
• Additional bodies related to regulations
• Auditors