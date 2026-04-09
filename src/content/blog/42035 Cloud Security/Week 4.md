# CLOUD SECURITY RISK MANAGEMENT

References:
CCSP. Carter – Chapter 7: Understand Implications of Cloud to Enterprise Risk Management
Cloud Computing Security. Vacca – Chapters 6 & 8
## Outline
1. Does Data Subject means the one to which the data corresponds to?
2. Please explain, the different types of incident (Security, Privacy and Service) with example.
3. Please explain the significance of risk appetite and how it determines the allowance of using specific systems and services.
4. What are the various risk levels the organization deals with?
5. Please explain the context and meaning of the header: Monitoring risk.
6. Please explain the difference between risk assessment and risk analysis with practical example.
7. Please explain the difference between Quantitative and Qualitative risk assessment.
8. Please explain more of the header: Aleatory, specifically the following: When uncertainties can be treated as aleatory, a quantitative risk analysis can be carried out
9. Header: ENISA What is the meaning of assets provided by the ENISA?
### Risk And Trust Assessment Schemes For Cloud Services
• It is more difficult for a cloud customer (CC) than a conventional IT customer to assess all the threats and vulnerabilities because:
	▪ CSPs usually keep the locations, architecture, and details about the security of their server farms and data centres	confidential from CCs and
	▪ CCs do not need to have an in-depth knowledge about the technical details of the cloud, as the abstract view of the cloud is one of the advantages promised by the cloud concept.
### Definitions
• Threat: A threat is the potential cause of an unwanted incident, which may result in harm to a system, person, or organization.
• Vulnerability: Vulnerability is the weakness of an asset or control that can be exploited by a threat.
• Asset: An asset is something of value to the organization, which may be tangible (e.g., a building, computer hardware) or intangible (e.g., knowledge, reputation, information, software).
• Control: A control prevents or reduces the probability of a security or service incident (preventive or deterrent control), indicates that an incident has occurred (detective control), and/or minimizes the damage caused by an incident (corrective control).
• Personal data: Personal data relates to a living individual who can be identified. The identification of the person does not need to be direct. For example, there can be many people whose name is John and were born on a certain date, but there may be only one John with that birth date and who is working in a certain company.
• Personally identifiable information (PIl): PII are data that identify a person, such as a social security number.
• Data subject: A data subject is an individual or organization who is the subject of personal data.
• Data controller: A data controller is an institution, organizational entity, or person who alone or jointly with others determines the purposes and means of the processing of personal data.
• Incident: An incident is an event that results in a security, privacy, or service violation/outage, for example, confidential data leakages after an attack,  personal data collection without appropriate consent from the data subjects, or data cannot be recovered after a hardware failure, respectively.
• Event: An event is something that creates a vulnerability that may be exploited by a threat to compromise someone's asset(s). Losing an access badge is a security event. If an outsider uses the lost badge to enter a building without authorization, then it is an incident.

• Security incident: A security incident can be defined as a single attack or a group of attacks that can be distinguished from others by the method of attack, identity of attackers, victims, sites, objectives, timing, etc. It results in the violation or imminent threat of violation of computer security policies, acceptable use policies, or standard security practices.
• Privacy incident: A privacy incident can be an intentional or unintentional violation of the consent obtained by the data controller from the data subjects, or a violation of the applicable data protection regulatory framework. A privacy incident can be the result of a security or service incident. 
• Service incident: A service incident is an event that violates the terms of service, service level agreement, or contracts between the CC and the CSP. It may be the result of a failure (e.g., power outage, natural disaster hardware failure, or human errors), attacks or intervention of third parties (e.g., government agencies or law enforcement) preventing customers from using the services as established via contracts, resulting in service outages.

### NIST 800-39
• NIST 800-39 [2011] definition of risk: A measure of the extent to which an entity is threatened by a potential circumstance or event, and typically a function of: (i) the adverse impacts that would arise if the circumstance or event occurs; and (ii) the likelihood of occurrence.
• ISO 31000 definition: Risk is defined as the effect of uncertainty on objectives. Risk is defined as the effect of uncertainty on objectives in these standards. It means that if we are certain about the outcome of a process, there is no risk associated with that process.

## UNDERSTAND IMPLICATIONS OF CLOUD AS ENTERPRISE RISK MANAGEMENT

### Assess Provider’s Risk Management
• Since the cloud customer (CC) will be housing their services and data within the cloud environment, the risk management processes and risk acceptance of the cloud provider will directly impact the security and risk management programs of the cloud customer.
• This is where certification is valuable for the cloud provider as certification tell its customers
	▪ The type of management programs
	▪ The policies that are in place
	▪ What level of risks are to be allowed to be accepted or are required to be mitigated.

### Data Owner/Controller Vs Data Custodian/Processor
- The data owner and custodians work with the management of the organization to establish the overall risk profile for their systems and applications.
- Data Owner: The individual who bears responsibility for controlling the data and determining the appropriate control for it. In some cases, there may be an additional role of a data steward to
	▪ Oversee access requests and the utilization of the data, ensuring that organizational policies are being adhered to and access requests have the correct approvals.
- Data Custodian: Anyone who processes and consumes data that is owned or controlled by the data owner, and must adhere to policies and oversight while conducting business with the use of the data.

### The Risk Profile
• The data owner and custodians work with the management of the organization to establish the overall risk profile for their systems and applications.
• The risk profile will document and identify the level of risk that management is willing to take and how the risk is evaluated and approved for appropriate requests.
• The willingness of management to take and accept strategic risks forms the organization’s risk appetite, which is the overall culture of security and how much allowance there is for using specific systems and services.

### Risk Treatment
• Framing Risk. The organization determines what risk and levels it wants to evaluate based on
	▪ Characteristics of its systems
	▪ Requirements of its data and
	▪ Specific threats
• Assessing Risk
	▪ Organization and systems threat scenario
	▪ Vulnerabilities of a particular system
	▪ Evaluation the potential harm that an attack can cause to an organisation’s systems, data, operations, or reputation
	▪ The likelihood of a successful attack and the losses it could cause.
		Qualitative Assessment
		Quantitative Assessment

### Risk Treatment
• Responding to Risk (4 main categories)
1. Accept the Risk. The cost to mitigate outweighs the cost of accepting the risk and dealing with possible consequences (usually for low-level risks)
2. Avoid the Risk. Take measures to ensure that a risk is never realized, rather than accepting or mitigating it (i.e., avoiding certain services or systems, (only for minor set of features))
3. Mitigate the Risk. Taking steps to eliminate a risk or to lower the likelihood of an exploit or impact of a successful exploit
4. Transfer the Risk. Risk transferred to another party, (insurance company) at the expense of whatever the cost is for the transfer.

Risks are usually transferred from one party to another by stipulating a formal contract between the two. The first pays a fee (or a premium) to the second and in exchange obtains a risk-free or risk-reduced service, while the second accepts being in charge of the risky prospect for which they receive a compensation.

• Monitoring Risk. The focus is an ongoing process of evaluation to determine if the same threats and vulnerabilities still exist in the same form as when the assessment was undertaken. This is to determine if the risk mitigation strategies are still effective in the dynamic cloud environment.

### Metrics For Risk Management
• Minimum
• Low
• Moderate
• High
• Critical

![](99%20-%20Assets/2025/2025-08-25-01-08-35.png)

### Hierarchy of Risk Analysis, Assessment and Management
• Risk analysis is a systematic examination of a risk scenario to understand its probability/likelihood and consequences. \
• Risk assessment can be briefly described as assessing a risk scenario (high risk moderate risk, low risk' etc) based on its probability/likelihood and consequences
• Risk management is a process of identifying, analysing, assessing, and communicating risk scenarios and mitigating them as required

![](99%20-%20Assets/2025/2025-08-25-01-08-59.png)

### Assessment Of The Risk Environment
• To adequately evaluate risk in a cloud environment, multiple different levels need to be assessed.
• The particular applications, system, or service is the first component, and involves a similar analysis to hosting in a traditional data centre, with the additional cloud specific aspects taken into account.
• The cloud provider must also be evaluated for risk, based on its tract record, stability, focus, financial health, and future direction.

### Aleatory
• Aleatory uncertainties are based on the intrinsic randomness of the process or phenomenon under investigation for risk analysis. It also implies that the data available will suffice for building probability or frequency distributions
• When uncertainties can be treated as aleatory, a quantitative risk analysis can be carried out
• The probability of a scenario is based on the existence of vulnerabilities, threats that can exploit the vulnerabilities, the awareness of threats about the vulnerabilities, and the capabilities and willingness of the threats to exploit the vulnerabilities.
• A risk is in essence the product of threats, vulnerabilities, and the consequences of the exploitation of vulnerabilities by the threats (i.e., the impact of threat)

### Quantitative Risk Analysis
• Three questions are answered during a quantitative risk analysis:
	▪ A scenario s, (i.e., what can go wrong?)
	▪ The probability pi, of si, (the probability that the scenario is
	realized)
	▪ The consequence of xi of si,
• Hence, the risk R is a set of triplets that answers three questions,
(i.e., R - {< si, pi, xi >}, i = l, 2, ..., N) for N scenarios, where N
represents the number of all possible scenarios

![](99%20-%20Assets/2025/2025-08-25-01-08-53.png)
### Qualitative Risk Analysis And Epistemic
• Epistemic uncertainties are due to a lack of knowledge. As the cloud ecosystem and services in the cloud mature, this category of uncertainties will reduce or move to the aleatory uncertainty domain.
• When uncertainties are mostly in the epistemic domain or if preferred, a qualitative risk analysis can also be conducted.
• For qualitative risk analysis, a qualitative scale for likelihood, such as almost certain, likely, possible, unlikely, rare, and consequences, such as significant, major, moderate, minor, insignificant, are used. Note that we use the term likelihood instead of probability for qualitative risk analysis.

### Different Risk Frameworks
• ENISA – European Network and Information Security Agency
• ISO/IEC 3100/2018
• NIST – National Institute of Standards and Technology

### ENISA – European Network And Information Security Agency
• ENISA provides a list of relevant incident scenarios, assets, and vulnerabilities. It suggests estimating the level of risk on the basis of likelihood of a risk scenario mapped against the estimated negative impact.
• Risk scenarios are grouped in four categories: policy and organizational, technical, legal, and other scenarios not specific to cloud computing. The likelihood of each of these scenarios and their business impact are determined in consultation with an expert group.
• The scale of likelihood and impact has five discrete classes between very low and very high. For example, the first incident scenario in the policy and organizational category is P1-vendor lock-in, and its likelihood and impact are given as HIGH and MEDIUM, respectively.
• The likelihood (probability) and business impact (impact) values determined by the experts are converted to the risk levels for each incident scenario, based on a risk matrix with a scale between 0 and 8 as shown in Figure 6.3.
• Finally, the risk levels are mapped to a qualitative scale as follows: Low risk 0-2, Medium:3-5, High:6-8
![](99%20-%20Assets/2025/2025-08-25-01-08-43.png)

### ISO/IEC 31000:2018
• ISO/IEC 3100:2018 standard establishes 11 principles of risk management:
1. A practice that should create and protect value for an organization
2. RM should be an integral component and be part of all aspects and processes of an organization
3. RM should ne a component of all decisions that an organization makes to ensure that all potential problems are considered and evaluated
4. RM can be utilized to mitigate and minimize the impact of uncertainty.
5. RM must be fully integrated and efficient in providing information and analysis; it cannot slow down the processes or business of an organization
6. RM need to ensure that it is using accurate and complete data
7. When there are multiple frameworks for RM, they must be tailored to the particular needs and realities of each organization to be effective
8. It is essential to consider the impact and risk of human elements besides IT systems and technologies.
9. RM processes and policies should be transparent and visible to instil confidence in staff, users, and customers.
10. RM program needs to be responsive, flexible, and adaptive
11. RM should be focused on making continual improvements in operations and efficiency
### Frameworks for user service selection
• In Mayer et al. [24] and Rousseau et al. [2], trust is defined as "the willingness of a party to be vulnerable to the action of another party based on the expectation that the other will perform a particular action important to the trusting party, irrespective of the ability to monitor or control the trusted party."
• Trust is the main barrier for potential customers before they embrace cloud services. For realization of cloud computing, the trust relationship between the CC and the CSP has to be established. This requires an in-depth understanding of cloud risks. Therefore, various organizations such as CSA, ENISA, and CNIL carried out studies to gain better insight into them.

**2.** D. Rousseau, S. Sitkin, R. Burt, and C. Camerer. Not so different after all: A cross-discipline view of trust. _Academy of Management Review_ 23(3): 393–404, 1998.
**24.** R. C. Mayer, J. H. Davis, and F. D. Schoorman. An integrative model of organizational trust. _The Academy of Management Review_ 20(3): 709–734, 1995.

### CC trust of a CSP: parameters
• Data location: CCs know where their data are actually located.
• Investigation: CCs can investigate the status and location of their data.
• Data segregation: Data of each CC are separated from the others.
• Availability: CCs can access services and their data at any time.
• Privileged CC access: The privileged CCs, such as system administrators, are trustworthy.
• Backup and recovery: The CSP has mechanisms and capacity to recover from catastrophic failures and is not susceptible to disasters.

**20.** A. Rashidi and N. Movahedinia. A model for user trust in cloud computing. _International Journal on Cloud Computing: Services and Architecture (IJCCSA)_ 2(2): 1–8, 2012.

• Backup and recovery: The CSP has mechanisms and capacity to recover from catastrophic failures and is not susceptible to disasters.
• Regulatory compliance: The CSP complies with security regulations, is certified for them, and is open for audits. 
• Long-term viability: The CSP has been performing above the required standards for a long time
They analyse answers of 72 CCs to investigate the importance of the parameters: backup and recovery produces the strongest impact followed by availability, privileged CC access, regulatory compliance, long-term viability, data location, data segregation and investigation.

### Cloud SLA And Cloud Security SLA

SLAs play a key role in cloud risks:
1. Cloud SLA, is meant to identify a cloud-specific SLA, which should offer explicit guarantees for typical requirements of cloud users and should be tailored to their specific needs.
2. Security SLA, identifies an SLA specifically defined to guarantee a given security level.
Who is in charge of what and to which extent risks are transferred from a customer to a cloud provider strictly depend on contractual terms specified in an SLA.

### Cloud SLA
• Service guarantee – the metrics used to measure the provision of service over a time period (availability, response time, etc.)
• Service guarantee time period (a billing month, time elapsed since the last claim, 1 hour)
• Service guarantee granularity (per service, per data centre, per instance, per transaction)
• Service guarantee exclusion – Instances excluded from evaluation (abuse of the system by a customer, downtime due to scheduled maintenance)
• Service credit (The amount credited to the customer for guarantee violation: complete or partial refund)
• Service violation measurement and reporting: How and who measures and reports violations of a service guarantee.

### Cloud Security SLA
ENISA specification for a security SLA in cloud contracts
• Service availability
• Incidence response
• Service elasticity and load tolerance
• Data life-cycle management
• Technical compliance and vulnerability management
• Change management
• Data isolation
• Log management and forensics
