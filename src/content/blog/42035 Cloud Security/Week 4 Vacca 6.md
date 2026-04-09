# CHAPTER 6

# Risk and Trust Assessment

Schemes for Cloud Services

Erdal Cayirci

University of Stavanger

Stavanger, Norway

Contents

6.1 Introduction

6.1.1 Definitions

6.1.2 Structure of this Chapter

6.2 Risk Analysis, Assessment, and Management

6.3 Top Threats for the Cloud

6.4 Cloud Risk Assessment

6.5 Risk and Trust Models for the Cloud

6.6 Summary

Acknowledgments

Further Reading

References

## 6.1 Introduction

The trust relation between cloud customers (CCs) and cloud service providers (CSPs) has to be established before CCs move their information systems to the cloud. This requires an in-depth understanding of associated risks. Moreover, regulations related to data protection, financial reporting, etc. involve certain requirements that should be complied with when outsourcing business processes to third parties, like CSPs. For example, the EU Data Protection Directive, in particular Article 29: Data Protection Working Party [1], recommends that all data controllers (usually corporate CCs) perform an impact assessment of moving personal data of their clients to the cloud. However, most of the CCs, especially small and medium businesses, may not have enough knowledge in performing such assessments at an appropriate level, because they may not necessarily employ a specialist for this and a lack of transparency is intrinsic to the operations of the CSPs.

A CC has a special challenge in risk assessment compared to conventional information technology (i.e., other than cloud) customers. CSPs usually keep the locations, architecture, and details about the security of their server farms and data centers confidential from CCs. In addition, the abstract view of the cloud is one of the advantages promised by the cloud concept: CCs do not need to have an in-depth knowledge about the technical details of the cloud. Therefore, it is more difficult for a CC to assess all the threats and vulnerabilities. Note that the risks are not only related to security issues but also to service outages, and CSPs have to prioritize the issues to solve when risks are realized. A CC has to rely on the routine procedures of the CSP for managing the infrastructure appropriately according to the CCs’ security dynamics, treating the CCs’ issues in a timely manner, detecting, recovering, and reporting the security and service outage incidents accurately. These uncertainties increase risk and imply that the CCs have to trust CSPs [2].

Both risk and trust have been extensively studied in various contexts for hundreds of years. Risk management, and specifically risk assessment for IT, has also been a hot research topic for several decades [3]. On the other hand, modeling risk and trust for cloud computing has attracted researchers only recently [4 –8]. In this chapter, we provide a survey on cloud risk assessments made by various organizations, as well as risk and trust models developed for the cloud.

### 6.1.1 Definitions

We would like to start with clarifying a number of terms we use later in this chapter:

- Threat: A threat is the potential cause of an unwanted incident, which may result in harm to a system, person, or organization.
- Vulnerability: Vulnerability is the weakness of an asset or control that can be exploited by a threat.
- Asset: An asset is something of value to the organization, which may be tangible (e.g., a building, computer hardware) or intangible (e.g., knowledge, experience, know-how, information, software, data).
- Control: A control prevents or reduces the probability of a security, privacy, or service incident (preventive or deterrent control), indicates that an incident has occurred (detective control), and/or minimizes the damage caused by an incident, i.e., reduces or limits the impact (corrective control).
- Personal data: Personal data relate to a living individual who can be identified. The identification of the person does not need to be direct. For example, there can be many people whose name is John and were born on a certain date, but there may be only one John with that birth date and who is working in a certain company.
- Personally identifiable information (PII): PII are data that identify a person, such as a social security number.
- Data subject: A data subject is an individual or organization who is the subject of personal data.
- Data controller: A data controller is an institution, organizational entity, or person who alone or jointly with others determines the purposes and means of the processing of personal data.
- Incident: An incident is an event that results in a security, privacy, or service violation/outage, for example, confidential data leakages after an attack, personal data collection without appropriate consent from the data subjects, or data cannot be recovered after a hardware failure, respectively.
- Event: An event is something that creates a vulnerability that may be exploited by a threat to compromise someone’s asset(s). It is important not to confuse event with incident; for instance, losing an access badge is a security event. If an outsider uses the lost badge to enter a building without authorization, then it is an incident.
- Security incident: A security incident can be defined as a single attack or a group of attacks that can be distinguished from others by the method of attack, identity of attackers, victims, sites, objectives, timing, etc. It results in the violation or imminent threat of violation of computer security policies, acceptable use policies, or standard security practices.
- Privacy incident: A privacy incident can be an intentional or unintentional violation of the consent obtained by the data controller from the data subjects, or a violation of the applicable data protection regulatory framework. A privacy incident can be the result of a security or service incident. For example, a data controller uses data for purposes not originally declared; an attacker gains access to personally identifiable information (PII); personal data are transferred to third parties without consent.
- Service incident: A service incident is an event that violates the terms of service, service level agreement, or contracts between the CC and the CSP. It may be the result of a failure (e.g., power outage, natural disaster, hardware failure, or human errors), attacks or intervention of third parties (e.g., government agencies or law enforcement) preventing customers from using the services as established via contracts, resulting in service outages. Note that we count the incidents caused by denial of service attacks as service incidents, because their results are service outages.

### 6.1.2 Structure of this Chapter

The next section is on risk analysis, assessment, and management where we define risk and elaborate on the relations and differences among risk analysis, assessment, and management. In Section 6.3, we introduce recent studies carried out for analyzing the threats and vulnerabilities, which include the Cloud Security Alliance (CSA) initiative to analyze the top threats against the cloud and to obtain a better insight into how well the CSPs are prepared for them. In Section 6.4, cloud risk assessment by two European agencies, namely the European Network and Information Security Agency (ENISA) and the French National Commission on Informatics and Liberty (CNIL), is presented. ENISA’s risk assessment is generic and applies to all CSPs, and CCs; it was published in 2009. CNIL conducted a privacy risk assessment for the cloud more recently. CNIL’s work goes further by introducing some measures to reduce the risks to acceptable levels. Section 6.5 is about risk and trust models. In the same chapter, we also introduce two models developed by A4Cloud, which is a European Framework Seven project. The first is the cloud adopted risk assessment model (CARAM), a qualitative model that adapts ENISA and CNIL frameworks for specific CSP–CC pairs based on controls implemented by CSPs and assets that the CC is planning to process or store in cloud. The second model is called the joint risk and trust model (JRTM), which is a quantitative model based on the CSP performance data. Finally, we conclude this chapter with Section 6.6.

## 6.2 Risk Analysis, Assessment, and Management

Several standardization bodies such as the International Organization for Standardization (ISO), the International Electrotechnical Commission (IEC), the National Institute of Standards and Technology (NIST), the Information Technology (IT) Governance Institute, and the Information Systems Audit and Control Association (ISACA) published standards on IT risk management and risk assessment: ISO 31000, ISO/IEC 31010, IEC 62198 [9], ISO/IEC 27005, NIST SP 800-30, SP 800-37, and COBIT. Risk is defined as the effect of uncertainty on objectives in these standards. It means that if we are certain about the outcome of a process, there is no risk associated with that process. The risks can be associated with not only negative outcomes (threats) but also positive outcomes (opportunities). In these standards, missing an opportunity is also treated as a risk.

Hence, uncertainty is the main factor in risk analysis; many sources for uncertainty may exist. However, we can categorize them into two broad classes: epistemic or aleatory. Epistemic uncertainties are due to a lack of knowledge. As the cloud ecosystem and services in the cloud mature, this category of uncertainties will reduce or move to the aleatory uncertainty domain. Alea, which the word aleatory is derived from, means “rolling a dice” in Latin. Therefore, aleatory uncertainties are based on the intrinsic randomness of the process or phenomenon under investigation for risk analysis. It also implies that the data available will suffice for building probability or frequency distributions.

When uncertainties can be treated as aleatory, a quantitative risk analysis [3] can be carried out. Three questions are answered during a quantitative risk analysis:

- A scenario s i (i.e., what can go wrong?)
- The probability p i of s i (i.e., the probability that the scenario is realized)
- The consequence x i of s i

Hence, the risk R is a set of triplets that answers three questions, (i.e., R = {< s i, p i, x i >}, I = 1, 2, …, N) for N scenarios, where N represents the number of all possible scenarios [3, 10, 11, ].

The probability of a scenario is based on the existence of vulnerabilities, threats that can exploit the vulnerabilities, the awareness of threats about the vulnerabilities, and the capabilities and willingness of the threats to exploit the vulnerabilities. The bottom line is that a risk is in essence the product of threats, vulnerabilities, and the consequences of the exploitation of vulnerabilities by the threats (i.e., the impact of threat).

When uncertainties are mostly in the epistemic domain or if preferred, a qualitative risk analysis can also be conducted. For qualitative risk analysis, a qualitative scale for likelihood, such as almost certain, likely, possible, unlikely, rare, and consequences, such as significant, major, moderate, minor, insignificant, are used [9]. Note that we use the term likelihood instead of probability for qualitative risk analysis.

Risk perception for the same scenario may be different from person to person even from time to time because the probabilities and consequences may be different for different people at different times. This is called perceived risk. On the other hand, absolute risk is the same for everyone and every time. That is not easy to compute the absolute risk because someone’s absolute risk is the perceived risk for someone else. Perceived risk is also quite often called relative risk in the literature but in this chapter, we will use the term relative risk differently. Relative risk is the risk of a course of action compared to that of another course of action. An example of relative risk is the risk of using the cloud instead of your own infrastructure and software. Another example is the risk of receiving services from one CSP instead of an alternative CSP.

Qualitative and quantitative risk analysis can be conducted within various methodologies, such as event trees, fault trees, and bow tie [9], which are typically categorized as inductive or deductive risk analysis. For example, event tree analysis is an inductive (i.e., bottom up) technique to analyze the effects of functioning or failed systems given that an event has occurred. On the other hand, fault tree analysis is a deductive (i.e., top down) technique based on working down from the top level undesired event to understand what may cause that failure until reaching the root cause for each of the branches in the fault tree.

Risk analysis is a systematic examination of a risk scenario to understand its probability/likelihood and consequences. The next step after a risk analysis is the risk assessment, which can be briefly described as assessing a risk scenario (high risk, moderate risk, low risk, etc.) based on its probability/likelihood and consequences. Risk management is a process of identifying, analyzing, assessing, and communicating risk scenarios and mitigating them as required. This hierarchy of risk analysis, assessment, and management is depicted in Figure 6.1. Mitigation plans can be designed for mitigating the causes or consequences of the risk scenarios and based on one of the following strategies: risk acceptance, risk avoidance, risk limitation, and risk transference. Risk acceptance does not reduce the likelihood or impact of a risk scenario. Since the cost of avoidance, limitation, or transference is not affordable or too high compared to the impact of the scenario, the risk is accepted in the hope that it will not occur. Risk avoidance is completely opposite of acceptance; the action subject to the risk scenario is not taken at all, to avoid it. Alternatively, mitigation plans may be applied or prepared to limit the causes or the consequences of a risk scenario. Finally, the risk can be transferred to another party, such as an insurance company, at the expense of whatever the cost is for the transfer.

![](https://freetoolmate.com/images/fig6.1.jpg)

Figure 6.1 Risk analysis, assessment, and management.

## 6.3 Top Threats for the Cloud

For cloud risk assessment, the CSA list of the top threats is an important source to start with. CSA conducted a survey among the experts and stakeholders to gain an insight into their perception on the threats against the cloud and published the results in a document titled “The notorious nine: Cloud computing top threats in 2013.” For this chapter, we used the second edition of the document (February 2013). An earlier version of the same publication was released in 2010.

In the document, nine threats selected as the top threats are introduced in the priority order determined again by the same experts contributed to the survey. For each threat, apart from its description, the information depicted in Figure 6.2 is also given: which service models this threat can affect, what percentage of the experts consider it as relevant, what its ranking was in the 2010 survey and how it is perceived as a risk—actual and/or perceived.

![](https://freetoolmate.com/images/fig6.2.jpg)

Figure 6.2 The data loss threat in CSA’s “notorious nine.”

We do not elaborate on each of the “notorious nine” further in this chapter because the names of the threats are self-explanatory and this chapter is not about the threats but cloud risk assessment models. Further explanations on each of these threats can be found in [12] and also in various other chapters in this book. The 2013 CSA’s notorious nine list includes the threats below in the given order:

1. 1. Data breaches
2. 2. Data loss
3. 3. Account or service traffic hijacking
4. 4. Insecure interfaces and APIs
5. 5. Denial of service
6. 6. Malicious insiders
7. 7. Abuse of cloud services
8. 8. Insufficient due diligence
9. 9. Shared technology vulnerabilities

Apart from the document about the notorious nine, another important source that can be very useful for cloud risk analysis is the cloud assessment initiative questionnaire (CAIQ) [13], a questionnaire prepared for CSPs by CSA. That aims to address one of the notorious nine: “insufficient due diligence.” The CAIQ includes many questions categorized into control groups listed below:

- Compliance
- Data governance
- Facility security
- Human resources security
- Information security
- Legal
- Operations management
- Risk management
- Release management
- Resilience
- Security architecture

The questionnaires answered by many CSPs are available to access by anyone in CSA’s Security, Trust and Assurance Registry (STAR) [14]. The STAR database is becoming a resource to understand how well a particular CSP is prepared to tackle various threats.

## 6.4 Cloud Risk Assessment

In its recommendations on risk assessment for cloud computing, ENISA provides a list of relevant incident scenarios, assets, and vulnerabilities. It suggests estimating the level of risk on the basis of likelihood of a risk scenario mapped against the estimated negative impact, which is also the essence of the risk formulation by many others in the literature [3 –5,11, 15, 16, ]. Although ENISA’s recommendations are specific for cloud computing, it is a generic framework that does not provide an approach to map the specifics of CSPs and CCs to the 35 risk scenarios listed in the report [17].

ENISA’s risk scenarios are grouped in four categories: policy and organizational, technical, legal, and other scenarios not specific to cloud computing. The likelihood of each of these scenarios and their business impact are determined in consultation with an expert group. The scale of likelihood and impact has five discrete classes between very low and very high. For example, the first incident scenario in the policy and organizational category is P1–vendor lock-in, and its likelihood and impact are given as HIGH and MEDIUM, respectively.

Then, the likelihood (probability) and business impact (impact) values determined by the experts are converted to the risk levels for each incident scenario, based on a risk matrix with a scale between 0 and 8 as shown in Figure 6.3. Finally, the risk levels are mapped to a qualitative scale as follows:

![](https://freetoolmate.com/images/fig6.3.jpg)

Figure 6.3 ENISA estimation of risk level.

- Low risk: 0–2
- Medium: 3–5
- High: 6–8

ENISA also provides a list of 53 vulnerabilities (i.e., 31 cloud-specific and 22 non-cloud-specific vulnerabilities) and 23 classes of assets that CC may keep in the cloud. Each of 35 incident scenarios is related with a subset of vulnerabilities and assets. For example, the incident scenario P1—vendor lock-in is related to vulnerabilities V13 (lack of standard technologies and solutions), V31 (lack of completeness and transparency in terms of use), V46 (poor provider selection), V47 (lack of supplier redundancy); and assets A1 (company reputation), A5 (personal sensitive data), A6 (personal data), A7 (personal data critical), A9 (service delivery—real-time services), and A10 (service delivery).

A CC can assess the risk level related to a scenario qualitatively and understands what kind of vulnerabilities and assets are related to each scenario by examination [17]. However, these values represent educated guesses over a range of common cloud deployments and do not have precise semantics. ENISA’s framework can be categorized as a generic qualitative inductive risk analysis framework for cloud computing.

Another qualitative inductive scheme was published more recently by The Commission Nationale de l’Informatique et des Libertés (CNIL) or in English: The National Commission on Informatics and Liberty [18]. CNIL’s methodology is similar to ENISA’s framework with the following differences: It is a risk assessment focused on privacy risks in cloud computing. It is still generic and does not differentiate CSPs or CCs.

CNIL’s Risk Management Scheme has five stages, which analyze the following: (1) context, (2) feared scenarios, (3) threats, (4) risks, and (5) measures. It includes not only an assessment on the level of risk for the listed incident scenarios (i.e., feared events) but also some measures against them. It also assesses the residual risks for the case that these measures are implemented.

According to CNIL, a threat uses the vulnerabilities of assets, such as computers, data storage, and facilities, to affect or to gain access to the primary assets such as personal data, which impacts on the owner of those primary assets. The end result is called a feared event. This relation among the components of a risk is depicted in Figure 6.4.

![](https://freetoolmate.com/images/fig6.4.jpg)

Figure 6.4 CNIL components of risk.

According to CNIL, the privacy-related feared events are as follows:

- Unavailability of legal processes
- Change in processing
- Illegitimate access to personal data
- Unwanted change in personal data
- Disappearance of personal data

Note again that CNIL is a risk assessment only for privacy-related feared events. CNIL also categorizes primary assets related to these events into two classes:

- Processes: They process the personal data or are required by the processes for informing the data subjects, getting their consent, allowing the exercise of the rights of opposition, access, correction and deletion.
- Personal data: They are the data used by the processes that fall into the primary asset category. Therefore, they are not only the data processed but also the data required for processing the personal data.
- CNIL determines the threats against privacy in the cloud as:
- Persons who belong to the organization: User, computer specialist, etc.
- Persons from outside the organization: Recipient, provider, competitor, authorized third party, government organization, human activity surrounding, etc.
- Nonhuman sources: Computer virus, natural disaster, flammable materials, epidemic, rodents, etc.

The supporting assets the threats can exploit to create the feared events are given in [18] as:

- Hardware: Computers, communications relay, USB drives, hard drives, etc.
- Software: Operating systems, messaging, databases, business application, etc.
- Networks: Cable, wireless, fiber optic, etc.
- People: Users, administrators, top management, etc.
- Paper media: Printing, photocopying, etc.
- Paper transmission channels: Mail, workflow, etc.

Similar to many other risk assessments, CNIL computes the level of risk based on its severity and likelihood. It actually first analyzes and assigns the values for likelihood and severity and then sums them to find out the level of risk as given in Equation 6.1. This is different from many other approaches that model the risk scenarios as a product of probability and impact but not as a sum of them.

|   |   |
|---|---|
|Level   of   risk = severity + likelihood|(6.1)|

CNIL uses a scale with four values: negligible, limited, significant, and maximum. It also gives the clear definitions of what these values mean in various contexts (i.e., the level of identification for personal data, the prejudicial effect of feared events, vulnerabilities of supporting assets, and capabilities of risk sources). For each feared event, those parameters are assigned values, and the severity and likelihood are calculated by using Equations 6.2 and 6.3, respectively.

|   |   |
|---|---|
|Severity = identification + prejudicial effect|(6.2)|

|   |   |
|---|---|
|Likelihood = vulnerabilities + capabilities|(6.3)|

The results of these equations are mapped to qualitative values as follows:

- <5 Negligible
- =5 Limited
- =6 Significant
- >6 Maximum

This exercise ends with the matrix in Figure 6.5, which depicts the level of risk for each feared event.

![](https://freetoolmate.com/images/fig6.5.jpg)

Figure 6.5 Level of risks for feared events.

CNIL continues with recommendations (measures) on how to treat these risks such that they can be shifted to the left and down in the level of risk matrix. After that, it reassesses the levels of risks—called residual risks—and justifies why they are acceptable after this treatment.

## 6.5 Risk and Trust Models for the Cloud

Risk and trust modeling from cloud computing perspective has attracted researchers recently [19, 20, ], and “trust as a service” is introduced to the cloud business model. Standardized trust models are needed for verification and assurance of accountability, but none of the large number of existing trust models to date is adequate for the cloud environment [21]. There are many trust models that strive to accommodate some of the factors defined by Marsh [22] and Banerjee et al. [23], and there are many trust assessment mechanisms that aim to measure them.

Definition of trust can be a starting point for modeling it. In Mayer et al. [24] and Rousseau et al. [2], trust is defined as “the willingness of a party to be vulnerable to the action of another party based on the expectation that the other will perform a particular action important to the trusting party, irrespective of the ability to monitor or control the trusted party.” This definition does not fully capture all the dynamics of trust, such as the probabilities that the trustee will perform a particular action and will not engage in opportunistic behavior [19]. There are also hard and soft aspects of trust [25 –27]. The hard part of trust depends on the security measures, such as authentication and encryption, and soft trust is based on aspects like brand loyalty and reputation. In Ryan et al. [28], the authors introduce not only security but also accountability and auditability as elements that impact CC trust in cloud computing, and show that they can be listed among the hard aspects. In Kandukuri et al. [29], an SLA is identified as the only way that the accountability and auditability of a CSP is clarified and therefore a CSP can encourage CCs to trust them. The conclusion is that “trust” is a complex notion to define.

In Rashidi and Movahhedinia [20], the CC’s trust of a CSP is related to the following parameters:

- Data location: CCs know where their data are actually located.
- Investigation: CCs can investigate the status and location of their data.
- Data segregation: Data of each CC are separated from the others.
- Availability: CCs can access services and their data at any time.
- Privileged CC access: The privileged CCs, such as system administrators, are trustworthy.
- Backup and recovery: The CSP has mechanisms and capacity to recover from catastrophic failures and is not susceptible to disasters.
- Regulatory compliance: The CSP complies with security regulations, is certified for them, and is open for audits.
- Long-term viability: The CSP has been performing above the required standards for a long time.

The authors statistically analyze the results of a questionnaire answered by 72 CCs to investigate the perception of the CCs on the importance of the parameters above. According to this analysis, backup and recovery produces the strongest impact on CCs’ trust in cloud computing followed by availability, privileged CC access, regulatory compliance, long-term viability, and data location. Their survey showed that data segregation and investigation have a weak impact on CCs’ trust of cloud computing.

Khan and Malluhi [30] propose giving controls to CCs, so they can monitor the parameters explained above [20]. They categorize these controls into five broad classes: controls on data stored, data during processing, software, regulatory compliance, and billing. The techniques that need to be developed for these controls include remote monitoring, prevention of access to residual data, secure outsourcing, data scrambling, machine readable regulations and SLA, automatic reasoning about compliance, automatic collection of real-time consumption data, and the capability of the CC to control their own usage/bill. Although these are techniques that have already been developed for both cloud computing and other purposes, many CSPs still need time for their implementation, deployment, and maturity. They also require quite an effort and expertise by CCs. Moreover, using these controls for all the services in a cloud service mash-up may not always be practical.

In Audun and Presti [31], risk is modeled in relation to trust. Reliability trust is defined as the probability of success and included in the risk-based decision-making process for a transaction. In Yudistira et al. [32], the authors introduce trust for assessing risks on the basis of the organizational setting of a system. The trustworthiness of actors that the success of a system depends on impacts on the probability of a risk scenario, and this relation is addressed [32].

The cloud adoption risk assessment model (CARAM) [5] is a model developed and implemented by A4Cloud recently. A4Cloud stands for Accountability for Cloud and Other Future Internet Services, and it is a European Union Seventh Framework Project. CARAM is a qualitative model that adapts the methodology and assessments made by ENISA and CNIL to assess the risk for a given CSP–CC pair. For adapting the likelihood and impact assessments made in an ENISA report to a CSP and a CC, CARAM uses the information about the CSP available in STAR and assets owned by the CC, respectively. It is a decision support tool designed to help CCs in selecting a CSP that best fits their risk profile.

The JRTM [4, 33, ] is another model developed by A4Cloud. It is a quantitative risk assessment model that computes the probability of security, privacy, and service risks according to the CSP performance data. It calculates the probability that an event occurs and the probability that an event is eliminated before it becomes an incident, and subtracts the latter from the former. For performance data, JRTM relies on the incident reports given by CSPs, and it has a penalty scheme for the CSPs that do not report accurately. Regular audits, monitoring tools similar to the ones used for monitoring as a service such as Amazon Cloud Watch [34], Paraleap AzureWatch [35], RackSpace CloudKick [36], Ganglia [37], Nagios [38], Zabbix [39], MonALISA [40], and GridICE [41], and incident reporting frameworks such as ENISA Cloud Security Incident Reporting Framework [42] are relied on for encouraging the CSPs to report timely and accurately.

Several frameworks have been proposed to assist users in service selection based on a variety of criteria such as QoS performance [43, 44, ], trust and reputation level [45 –49], and privacy [50]. CARAM and JRTM can also be used as a service selection tool. Multicriteria decision-making with a posterior articulation of user preferences approach has been introduced to be used with both CARAM [5] and JRTM [33].

## 6.6 Summary

Risk and trust are critical issues for cloud services and are closely related to each other. In the literature, trust is stated as the main barrier for potential customers before they embrace cloud services. For realization of cloud computing, the trust relationship between the CC and the CSP has to be established. This requires an in-depth understanding of cloud risks. Therefore, various organizations such as CSA, ENISA, and CNIL carried out studies to gain better insight into them.

CSA have run surveys among the stakeholders in cloud ecosystems on the top threats twice so far, in 2010 and 2013. The results of these surveys are available in a report titled The Notorious Nine, which elaborates the top nine threats. CSA also maintains a database of questionnaires called STAR. Many CSPs answered the CAIQ and registered their answers in STAR. Both the notorious nine and STAR are important resources for cloud risk assessment.

In 2009, ENISA also conducted a cloud risk assessment, which is a qualitative study on the likelihood and consequences of 35 incident scenarios. Its study covers security, privacy, and service risks, and clarifies the vulnerabilities and assets related to each scenario. In 2011, CNIL also assessed the privacy risks associated with the cloud. In its report, CNIL introduces some measures to reduce the privacy risks. Both ENISA’s and CNIL’s risk assessments are generic and do not differentiate the CSPs or CCs.

There are other risk and trust models like CARAM and JRTM, that assess the risks of a CSP for a CC. CARAM is a qualitative model based on ENISA’s risk assessment and STAR. JRTM is a quantitative model that calculates the probability of security, privacy, and service risks according to the incident reports given by CSPs. Various risk and trust-based service selection schemes that use models like CARAM and JRTM are available for supporting CCs in finding the cloud services that fit their risk landscape best in the literature. Our paper provides a survey on these models and schemes.

## Acknowledgments

This work is conducted as part of the EU-funded FP7 project titled Accountability for Cloud and Other Future Internet Services (A4Cloud), which introduces an accountability-based approach for risk and trust management in cloud ecosystems.

## FURTHER READING

E. Cayirci . Modelling and simulation as a service: A survey. In Proceedings of the 2013 Winter Simulation Conference, edited by R. Pasupathy, S.-H. Kim, A. Tolk, R. Hill, and M. E. Kuhl. Piscataway, NJ: Institute of Electrical and Electronics Engineers, Inc., 2013, pp. 389–400.

## References

1. 1. EU. Opinion 05/2012 on Cloud Computing. 2012. Available at http://ec.europa.eu/justice/data-protection/article-29/documentation/opinion-recommendation/files/2012/wp196_en.pdf
2. 2. D. Rousseau, S. Sitkin, R. Burt, and C. Camerer . Not so different after all: A cross-discipline view of trust. Academy of Management Review 23(3): 393–404, 1998.
3. 3. S. Kaplan and B. J. Garrick . On the quantitative definition of risk. Risk Analysis 1(1): 11–27, 1981.
4. 4. E. Cayirci . A joint trust and risk model for MSaaS Mashups. In Proceedings of the 2013 Winter Simulation Conference, edited by R. Pasupathy, S.-H. Kim, A. Tolk, R. Hill, and M. E. Kuhl . Piscataway, NJ: Institute of Electrical and Electronics Engineers, Inc., 2013, pp. 1347–1358.
5. 5. E. Cayirci, A. Garaga, A. S. Oliveira, and Y. Roudier . Cloud adopted risk assessment model. In Proceedings of the 2014 IEEE/ACM 7th International Conference on Utility and Cloud Computing (UCC ‘14), IEEE Computer Society, Washington, DC, pp. 908–913.
6. 6. W. Jansen and T. Grance . Guidelines on Security & Privacy. Draft Special Publication 800-144 NIST, US Department of Commerce, 2011.
7. 7. F. Massacci, J. Mylopoulos, and N. Zannone . Hierarchical hippocratic databases with minimal disclosure for virtual organizations. The VLDB Journal 15(4): 370–387, 2006.
8. 8. S. Pearson and A. Charlesworth . Accountability as a way forward for privacy protection in the cloud. In Proceedings of the 2009 Cloud Com, edited by M. G. Jaatun, G. Zhao, and C. Rong . New York: Springer-Verlag, 2009, pp. 131–144.
9. 9. D. Cooper, P. Bosnich, S. Grey, G. Purdy, G. Raymond, P. Walker, and M. Wood . Project Risk Management Guidelines: Managing Risk with ISO 31000 and IEC 62198. Wiley, Second Edition, ISBN 978-1-118-84913-2, 2014.
10. 10. DHS. DHS Risk Lexicon. Department of Homeland Security, 2008.
11. 11. B. C. Ezell, S. P. Bennet, D. Von Winterfeldt, J. Sokolowski, and A. J. Collins . Probabilistic risk analysis and terrorism risk. Risk Analysis 30(4): 575–589, 2010.
12. 12. CSA. The Notorious Nine Cloud Computing Top Threats in 2013. 2014. Available at https://downloads.cloudsecurityalliance.org/initiatives/top_threats/The_Notorious_Nine_Cloud_Computing_Top_Threats_in_2013.pdf
13. 13. CSA. Consensus Assessment Initiative Questionnaire. 2014. Available at https://cloudsecurityalliance.org/research/cai/
14. 14. CSA. Security, Trust & Assurance Registry (STAR). 2014. Available at https://cloudsecurityalliance.org/star/#_registry.
15. 15. ISACA. COBIT 5: A Business Framework for the Governance and Management of Enterprise IT. 2014. Available at http://www.isaca.org/cobit/pages/default.aspx
16. 16. ISO/IEC 31010. Risk Management-Risk Assessment Techniques (2009 Edition). 2014. Available at https://www.iso.org/obp/ui/#iso:std:iso-iec:31010:ed-1:v1:en
17. 17. ENISA. Cloud Computing; Benefits, Risks and Recommendations for Information Security. 2009 Edition. 2014. Available at http://www.enisa.europe.eu
18. 18. CNIL. Methodology for Privacy Risk Management: How to Implement the Data Protection Act. 2012 Edition, 2014. Available at http://www.cnil.fr/english/publications/guidelines/
19. 19. S. Pearson . Privacy, security and trust in cloud computing. In Privacy and Security for Cloud Computing, Computer Communications and Networks, edited by S. Pearson and G. Yee . New York: Springer-Verlag, 2012, pp. 3–42.
20. 20. A. Rashidi and N. Movahhedinia . A model for user trust in cloud computing. International Journal on Cloud Computing: Services and Architecture (IJCCSA) 2(2): 1–8, 2012.
21. 21. W. Li and L. Ping . Trust model to enhance security and interoperability of cloud environment. Cloud Computing, Lecture Notes in Computer Science 5931: 69–79, 2009.
22. 22. S. Marsh . Formalising Trust as a Computational Concept. Doctoral dissertation, University of Stirling, 1994.
23. 23. S. Banerjee, C. Mattmann, N. Medvidovic, and L. Golubchik . Leveraging architectural models to inject trust into software systems. In Proc. SESS ‘05, ACM, New York, pp. 1–7, 2005.
24. 24. R. C. Mayer, J. H. Davis, and F. D. Schoorman . An integrative model of organizational trust. The Academy of Management Review 20(3): 709–734, 1995.
25. 25. D. Osterwalder . Trust through evaluation and certification. Social Science Computer Review 19(1): 32–46, 2001.
26. 26. S. Singh and C. Morley . Young Australians’ privacy, security and trust in internet banking. In Proceedings of the 21st Annual Conference of the Australian Computer-Human interaction Special interest Group: Design: Open 24/7, 2009.
27. 27. Y. Wang and K.-J. Lin . Reputation-oriented trustworthy computing in e-commerce environments. Internet Computing 12(4): 55–59, 2008.
28. 28. K. L. K. Ryan, P. Jagadpramana, M. Mowbray, S. Pearson, M. Kirchberg, Q. Liang, and B. S. Lee . TrustCloud: A framework for accountability and trust in cloud computing. In 2nd IEEE Cloud Forum for Practitioners (ICFP), 2011.
29. 29. B. R. Kandukuri, R. Paturi, and V. A. Rakshit . Cloud security issues. In IEEE International Conference on Services Computing, 2009.
30. 30. K. Khan and Q. Malluhi . Trust in cloud services: Providing more controls to clients. IEEE Computer 46(7): 94–96, 2013.
31. 31. J. Audun and S. L. Presti . Analysing the Relationship between Risk and Trust. iTrust, 2004, pp. 135–145.
32. 32. A. Yudistira, P. Giorgini, F. Massacci, and N. Zannone . From trust to dependability through risk analysis. In ARES, 2007, pp. 19–26.
33. 33. E. Cayirci and A. S. Oliviera . Modelling trust and risk for cloud services. IEEE Transactions on Cloud Computing (submitted).
34. 34. Amazon Cloud Watch. Available at http://aws.amazon.com/cloudwatch/
35. 35. Paraleap AzureWatch. Available at https://www.paraleap.com/AzureWatch
36. 36. RackSpace Cloud Monitor. Available at http://www.rackspace.com/cloud/monitoring/
37. 37. M. L. Massie, B. N. Chun, and D. E. Culler . The ganglia distributed monitoring system: Design, implementation and experience. Parallel Computing 30: 817–840, 2004.
38. 38. Nagios. Available at http://www.nagios.org/
39. 39. Zabbix. Available at http://www.zabbix.com/
40. 40. H. B. Newman, I. C. Legrand, P. Galvez, R. Voicu, and C. Cirstoiu . Monalisa: A distributed monitoring service architecture. In Proceedings of CHEP03, San Diego, CA, 2003.
41. 41. S. Andreozzi, N. De Bortoli, S. Fantinel, A. Ghiselli, G. L. Rubini, G. Tortone, and M. C. Vistoli . Gridice: A monitoring service for grid systems. Future Generation Computer Systems 21(4): 559–571, 2005.
42. 42. ENISA. Cloud Security Incident Reporting: Framework for Reporting about Major Cloud Security Incidents. ENISA, 2013.
43. 43. W. X. Tran and H. Tsuji . QoS based ranking for web services: Fuzzy approaches. In Proceedings of the 2008 4th International Conference on Next Generation Web Services Practices (NWESP ‘08). Washington, DC: IEEE Computer Society, pp. 77–82.
44. 44. P. Wang, K.-M. Chao, C.-C. Lo, C.-L. Huang, and Y. Li . A fuzzy model for selection of QoS-aware web services. In Proceedings of the IEEE International Conference on e-Business Engineering (ICEBE ‘06). Washington, DC: IEEE Computer Society, pp. 585–593.
45. 45. M. Maximilien and M. P. Singh . Toward autonomic web services trust and selection. In Proceedings of the 2nd International Conference on Service Oriented Computing (ICSOC ‘04). ACM, New York, NY, pp. 212–221.
46. 46. S. Paradesi, P. Doshi, and S. Swaika . Integrating behavioral trust in web service compositions. In ICWS, 2009, pp. 453–460.
47. 47. L.-H. Vu, M. Hauswirth, and K. Aberer . QoS-based service selection and ranking with trust and reputation management. In Proceedings of the 2005 Confederated International Conference on the Move to Meaningful Internet Systems (OTM’05), Berlin: Springer-Verlag, pp. 466–483.
48. 48. P. Wang, K.-M. Chao, C.-C. Lo, R. Farmer, and P.-T. Kuo . A reputation-based service selection scheme, e-business engineering. In IEEE International Conference on ICEBE ‘09, 2009, pp. 501–506.
49. 49. Z. Xu, P. Martin, W. Powley, and F. Zulkernine . Reputation-enhanced QoS-based web services discovery. In IEEE International Conference on ICWS 2007, Web Services, 2007, pp. 249–256.
50. 50. E. Costante, F. Paci, and N. Zannone . Privacy-aware web service composition and ranking. In ICWS, 2013, pp. 131–138.