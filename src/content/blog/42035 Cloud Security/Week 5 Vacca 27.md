# CHAPTER 27

# Assuring Compliance with Government Certification and Accreditation Regulations

Sarbari Gupta

Electrosoft Services, Inc.

Reston, Virginia

Contents

27.1 Introduction

27.2 Office of Management and Budget Circular A-130, Appendix III

27.3 Federal Information Security Management Act

27.4 NIST Risk Management Framework

27.5 Department of Defense (DoD) Risk Management Framework

27.6 Federal Risk and Authorization Management Program (FedRAMP)

27.6.1 FedRAMP Assessment (Certification)

27.6.2 FedRAMP Authorization (Accreditation)

27.6.2.1 JAB Provisional Authorization to Operate (JAB p-ATO)

27.6.2.2 Agency Authorization to Operate (Agency ATO)

27.6.3 Leveraging FedRAMP Authorizations

27.7 DoD Cloud Computing Security Requirements

27.8 Summary

References

## 27.1 Introduction

Within the information security domain, certification and accreditation represents a two-step process for determining the security posture of an information system and accepting the risk of operating the information system. Certification (used interchangeably with assessment) is the process of evaluating the effectiveness of information security techniques and processes implemented within an information system (with a defined boundary) against an established set of security requirements to determine the security risks that remain within the information system. Accreditation (used interchangeably with authorization) is the organizational-level decision to accept the risks posed by an information system used or operated by the organization and the formal approval to allow the information system to become operational in production mode [1].

Government organizations across the world and at every level depend heavily on information technology (IT) to achieve their mission and protect and serve their citizens and stakeholders. However, the use of information technology by government organizations represents a huge risk in the face of countless vulnerabilities in such IT systems (which represent potential attack vectors) and the existence of a myriad of threat agents with a high degree of motivation to compromise these systems. As a result, there exists a variety of government regulations on protecting IT systems upon which government organizations depend. These regulations require government organizations and the vendors and suppliers that they use (to develop, deploy, and operate government information systems) to establish formal proof of compliance. While all IT systems pose a risk to their stakeholders, cloud-based information systems may pose a bigger risk since they include relatively newer technologies and because cloud systems are typically exposed to a broader set of potential threat agents. As a result, additional government regulations have been developed to focus on the security of cloud-based information systems and compliance with these regulations involves certification and accreditation activities. In this chapter, we review key government regulations related to the certification and accreditation of cloud-based information systems and applicable certification and accreditation regimes.

## 27.2 Office of Management and Budget Circular A-130, Appendix III

In 1996, the Office of Management and Budget (OMB) released an updated version of Appendix III for Circular A-130, entitled Security of Federal Automated Information Resources [2]. The policy established in this appendix is mandatory for executive branch agencies as they develop and implement information security practices in their IT environments. A-130 Appendix III establishes a minimum set of controls to be included in federal automated information security programs; assigns federal agency responsibilities for the security of automated information; and links agency automated information security programs and agency management control systems. Within the appendix, a general support system is defined as “an interconnected set of information resources under the same direct management control which shares common functionality.” A major application is defined as “an application that requires special attention to security due to the risk and magnitude of the harm resulting from the loss, misuse, or unauthorized access to or modification of the information in the application.” Highlights of this policy include:

- Assignment of security responsibility: requires the assignment of responsibility for security of each information system to an individual who is knowledgeable about the technologies used and how to secure the system.
- System security plan: requires the development of a plan for implementing adequate security within the information system in accordance with guidance from the National Institute of Standards and Technology (NIST). The plan must address the following elements:
    - Establish a set of rules of behavior for the use of the system to manage risk
    - Ensure that individuals are adequately trained to perform the security duties assigned to them as a part of their role within the organization
    - Incorporate screening of personnel with privileged access to the information system
    - Implement a capability to assist users when a security incident occurs and to report on the incident
    - Obtain written authorization prior to connecting to other information systems
- Security control review: requires a review of the security controls of the information system when significant changes occur and at a minimum, every 3 years
- Authorization: ensures that written authorization exists to operate the information system from a senior management official who has reviewed the risk posed by the system and obtain re-authorization every 3 years at a minimum

## 27.3 Federal Information Security Management Act

The Federal Information Security Management Act (FISMA) was published as Title III of the E-Government Act of 2002 [3]. Recognizing the importance of information security to the economic and national security interests of the United States, FISMA establishes the responsibilities and objectives for strengthening the security posture of information resources that support federal operations and assets. It requires the development and maintenance of a set of minimum security controls to adequately protect federal information and information systems. It also requires each federal agency to develop, document, and implement an agency-wide program to provide information security for the information and information systems that support the operations and assets of the agency including those provided or managed by another agency, contractor, or other source. FISMA requires that agencies develop comprehensive information security programs that include the following core elements:

- Periodic risk assessments: To determine the magnitude of harm that could result from a security compromise of information and information systems that support agency operations
- Information security policies and procedures: To define the scope and methods for implementing information security within the agency to reduce the risk of operating information systems to an acceptable level
- Security awareness and training: To ensure that agency personnel (including contractors and other support personnel) in various roles are aware of the information security risks related to their function and are adequately knowledgeable on how to avoid or minimize those risks
- Periodic security assessments: To evaluate the effectiveness of the information security controls implemented within each information system on an annual basis (at a minimum) to determine the level of residual risk to the agency
- Remediation tracking: To establish a process for planning, documenting, and tracking actions related to the remediation of information security risks identified within agency information systems through periodic security assessments
- Incident response: To establish a capability to detect, respond, and report on security incidents related to agency information systems and assets
- Continuity of operations: To establish plans and methods to ensure continuity of operations for the IT resources that support the agency mission

FISMA emphasizes a risk-based approach to implementation of information security within federal agencies recognizing that the cost of information security operations for an agency has to be commensurate to the risk profile of the organization within the context of the agency’s mission.

In 2014, the government released the Federal Information Security Modernization Act (FISMA) [4] to refresh the government’s cybersecurity practices established by FISMA 2002. FISMA 2014 re-establishes but amends the oversight authority of the Director of the OMB with respect to agency information security policies and practices. It also establishes the authority of the Secretary of the Department of Homeland Security (DHS) for administering the implementation of such policies and practices for information systems supporting Federal Executive Branch civilian agencies and providing technical assistance and technology deployments to such agencies upon request.

FISMA 2014 requires agencies to report major security incidents and data breaches to Congress as they occur, as well as annually. It directs the OMB to simplify FISMA reporting to “eliminate inefficient and wasteful reporting.”

## 27.4 NIST Risk Management Framework

As a key element of the FISMA implementation project, the NIST developed an integrated risk management framework (RMF) which effectively brings together all of the FISMA-related security standards and guidance to promote the development of comprehensive and balanced information security programs by agencies.

The NIST RMF defines a structured methodology for choosing, implementing, evaluating, and maintaining the effectiveness of security controls throughout the lifecycle of an information system in a manner that is commensurate with the criticality of the system and the risks posed by the system to the broader organization. The six steps of the NIST RMF are:

1. 1. Categorize: Determine the criticality of the information system in terms of the potential impact of compromise to the information and the information system.
2. 2. Select: Identify a minimal set of security controls (baseline) that are needed to mitigate risk to the information system based on its security categorization; tailor and supplement the security control baseline as needed based on an organizational assessment of risk.
3. 3. Implement: Instrument the selected set of security controls and document the implementation status and how the controls are implemented.
4. 4. Assess: Evaluate the security controls using appropriate evaluation methods to determine the extent to which the controls are implemented correctly, operating as intended, and producing the desired outcome with respect to security.
5. 5. Authorize: Review the weaknesses identified through assessment and the risks posed to the organization to determine whether the risk is acceptable and the information system can be approved for operation.
6. 6. Monitor: Evaluate the implementation status and effectiveness of the security controls on an ongoing basis as the information system undergoes change and the environment of operation evolves.

The security controls implemented as a part of the RMF are defined in the latest revision of NIST Special Publication 800-53 [5]. The focus of the RMF model is on risk identification, mitigation, and acceptance by the organization that owns or operates the target system.

## 27.5 Department of Defense (DoD) Risk Management Framework

Department of Defense Instruction (DoDI) number 8510.01 was issued in 2014 by the DoD Chief Information Officer (CIO) [6] to establish the RMF for DoD information technology (IT), to establish related cybersecurity policy, and to assign responsibilities for executing and maintaining the RMF. Previous to this, DoD assessment and authorization activities were based on the use of information assurance controls listed in DoDI 8500.2 (Information Assurance Implementation) and the information assurance control validation procedures on the DIACAP/RMF Knowledge Service.

DoDI 8510.01 is consistent with NIST SP 800-37, Guide for Applying the Risk Management Framework [1], which defines RMF for the federal government. Committee on National Security Systems (CNSS) Instruction No. 1253, Security Categorization and Control Selection for National Security Systems, and NIST SP 800-53, Security and Privacy Controls for Federal Information Systems and Organizations [5] are incorporated into this DoD policy, and serve as the foundation for the security controls and control baselines used in the assessment process for DoD information systems. DoDI 8510.01 also provides procedural guidance for the reciprocal acceptance of authorization decisions and artifacts within DoD and across other federal agencies.

## 27.6 Federal Risk and Authorization Management Program (FedRAMP)

To provide a consistent set of security requirements for cloud-based information systems used by the U.S. Federal Government, and to leverage assessments and authorizations of the same cloud service across multiple government customers, the Federal Risk and Authorization Management Program (FedRAMP) was developed as a joint effort between the General Services Administration (GSA), DoD, DHS and NIST. OMB issued a memorandum in December 2011, entitled Security Authorization of Information Systems in Cloud Computing Environments directing CIOs of all executive branch departments and agencies to use FedRAMP baselines and processes for granting security authorization for cloud services.

FedRAMP enables a federal organization to rapidly adopt cloud services that have been previously authorized for operation. A cloud service may receive provisional authorization from the FedRAMP Joint Authorization Board (JAB) or full authorization from a federal agency. A previously achieved FedRAMP authorization can be leveraged by one or more additional agencies that wish to engage the same cloud services, thus resulting in significant savings in cost and effort. The FedRAMP framework [7] includes the following major components to facilitate cloud certification and accreditation:

- Standardized security control baselines for cloud systems at low and moderate impact levels, addressing the specific threats and vulnerabilities that apply to cloud environments
- Set of templates for developing documents that comprise the security authorization package for a cloud system and guidelines for navigating the FedRAMP process
- Online training for the FedRAMP process
- Model for formal accreditation of FedRAMP third party assessor organizations (3PAOs) who are approved to conduct independent security control assessments of cloud services
- Rigorous review of FedRAMP authorization packages submitted for provisional Authority to Operate (ATO) by the FedRAMP JAB
- Guidance and standardized contract language for inclusion of FedRAMP requirements into acquisition documents
- Repository of authorization packages for cloud services that can be leveraged government-wide

A cloud service provider (CSP) is compliant with FedRAMP requirements and processes if the following conditions are met:

- The security package uses the required FedRAMP templates.
- All FedRAMP security controls have been met either directly or through compensating controls (where allowed).
- The CSP has been assessed by an independent assessor who has no conflict of interest or bias with respect to the system.
- An authorization letter for the provisional Authorization to Operate (p-ATO) or full ATO is on file with the FedRAMP Program Management Office (PMO).

### 27.6.1 FedRAMP Assessment (Certification)

The FedRAMP process has been developed to ensure all CSPs that achieve FedRAMP compliance are assessed in a standardized manner [8]. The CSP selects an independent assessor consistent with the authorization path it selects—a FedRAMP-approved 3PAO is mandatory for the JAB p-ATO path but optional for the agency ATO path. The selected assessor is responsible for preparing a security assessment plan (SAP) using the FedRAMP-provided template which must be approved by the CSP prior to the commencement of testing. The SAP must also be approved by the FedRAMP JAB (for JAB p-ATO path) prior to testing. In performing the assessment of the CSP, the assessor must use the FedRAMP-provided security assessment test cases (which are based on NIST SP 800-53A and augmented to account for the uniqueness of cloud systems) and document the findings in the test cases template.

Automated scans (authenticated and nonauthenticated) and penetration testing are mandatory under FedRAMP. The CSP is required to run source code scans if the CSP develops and uses custom code as a part of its offering. FedRAMP provides guidance on the methodology for conducting these technical test steps.

The security assessment report (SAR) is developed by the assessor at the conclusion of the assessment activity using the FedRAMP-provided template and includes the assessor’s recommendation on whether the CSP is ready for authorization. For the JAB p-ATO path, the assessor briefs the FedRAMP PMO and JAB on the results of the assessment and the basis for the authorization recommendation.

### 27.6.2 FedRAMP Authorization (Accreditation)

FedRAMP supports two basic authorization models for CSPs—JAB p-ATO and agency ATO. These are described below.

#### 27.6.2.1 JAB Provisional Authorization to Operate (JAB p-ATO)

In this model, the CSP applies to the FedRAMP PMO for JAB p-ATO and prepares the FedRAMP documentation in accordance with the available templates and guidance. The FedRAMP PMO and JAB review and approve the documentation at each step before the CSP can move to the next step of the process. For example, the CSP has to be approved prior to development of the SAP; the SAP has to be approved prior to commencement of the actual testing and the development of the SAR. The CSP needs to engage a FedRAMP-approved 3PAO to perform the assessment. The results of the assessment are documented in the SAR and presented to the JAB by the assessor. The entire authorization package is reviewed rigorously by the JAB. The CSP makes adjustments as needed to bring it to the level of compliance and quality required by the JAB. When the JAB is satisfied that the authorization package meets all of the technical and quality requirements, the CSP is granted Provisional Authorization to Operate (p-ATO). The authorization package is then uploaded to the FedRAMP repository by the FedRAMP PMO.

#### 27.6.2.2 Agency Authorization to Operate (Agency ATO)

In this model, the CSP works with a specific agency end customer to obtain ATO for the solution built around the cloud service/system provided by the CSP. The agency appoints a suitable senior person as the authorizing official for the cloud system. The CSP works with the agency to determine the boundaries of responsibility (between the CSP and the agency cloud customer) for the various security controls included in the relevant FedRAMP baseline. The CSP prepares the FedRAMP documentation in the same manner as in the JAB ATO, using the FedRAMP templates and guidelines. The agency approves the FedRAMP documentation at each step. The CSP selects an independent assessor (who may or may not be a FedRAMP-approved 3PAO) that prepares the SAP. When the agency approves the SAP, the assessor performs the assessment using the FedRAMP-provided templates, test cases, and guidelines. The assessor prepares the SAR and the CSP prepares the corresponding plan of action and milestones. The agency authorizing official reviews the entire authorization package against the context of the agency’s mission and risk tolerance and grants ATO to the cloud system if the risk is brought under an acceptable level. The agency can then choose to submit the CSP’s authorization package to the FedRAMP PMO for upload to the FedRAMP repository.

### 27.6.3 Leveraging FedRAMP Authorizations

The FedRAMP repository includes the authorization packages for CSPs that have achieved p-ATO or agency ATO. An agency that wishes to utilize the services of a CSP that has already achieved authorization can request the FedRAMP PMO to provide access to the relevant authorization package. The agency authorizing official can then review the package against the backdrop of their mission and their risk profile to determine whether to grant ATO to the CSP as-is or to request changes to the security control implementation or documentation. The agency may also request a partial or full assessment if they are not satisfied with the existing SAP or SAR. However, in most cases, the agency will accept the existing authorization package with minimal changes and grant ATO to the CSP for use within that agency. Additional agencies that wish to use the same CSP will go through a similar process to grant ATO to the CSP for their agency. In effect, the authorization package that was produced once will be reused multiple times as many agencies decide to use the same CSP, thus saving the government as well as the CSP substantial amounts of time, effort, and money.

## 27.7 DoD Cloud Computing Security Requirements

As in most government and commercial organizations, cloud computing technology and services provide the DoD with the opportunity to lower infrastructure costs, consolidate and scale operations, while improving continuity of operations. However, the overall success of cloud initiatives is directly related to the success of adequate security control implementation to minimize the risks posed to the department.

As mentioned above, the OMB requires the use of FedRAMP processes by all federal agencies adopting cloud-based systems. Thus, DoD systems are also required to comply with FedRAMP. However, due to the warfighting mission of the DoD, there exist unique information protection requirements that extend beyond the security controls defined within FedRAMP.

To address the additional requirements, DoD published the Cloud Computing Security Requirements Guide (SRG) in 2015 to provide definitive guidance on additional requirements and security controls needed to authorize and operate cloud-based systems within the DoD [9]. The SRG provides:

- Guidance for including non-DoD CSPs in the DoD cloud service catalog
- A foundation for the assessment of cloud services provided by a non-DoD CSP in order to achieve authorization to operate the services in support of DoD mission activities
- Policies, requirements, and architectures for cloud services used by DoD mission owners
- Guidance to DoD system owners and authorization officials in planning and authorizing the use of cloud services

Cloud services used within the DoD hence have to comply not only with FedRAMP but also the additional requirements described within the SRG.

## 27.8 Summary

Cloud-based information systems used within government organizations are subject to the regulations targeted at all information systems as well as additional regulations that are focused on cloud systems. In this chapter, we discussed the major regulations and regimes for security certification (or assessment) and accreditation (or authorization) of cloud-based information systems.

## References

1. Joint Task Force Transformation Initiative, NIST Special Publication 800-37 Revision 1 Guide for Applying the Risk Management Framework to Federal Information Systems, 2010.
2. Office of Management and Budget, Appendix III to OMB Circular No. A-130, Security of Federal Automated Information Resources, 1996.
3. United States Congress, Public Law 107-347, Title III of the E-Government Act, Information Security, 2002.
4. United States Congress, Public Law No: 113-283, Federal Information Security Modernization Act of 2014, 2014.
5. Joint Task Force Transformation Initiative, NIST Special Publication 800-53 Revision 4 Security and Privacy Controls for Federal Information Systems and Organizations, 2013.
6. Department of Defense, Instruction Number 8510.01 Risk Management Framework (RMF) for DoD Information Technology (IT), 2014.
7. FedRAMP, Guide to Understanding FedRAMP, Version 2.0, 2014.
8. FedRAMP, FedRAMP Security Assessment Framework, Version 2.0, 2014.
9. Department of Defense, Cloud Computing Security Requirements Guide (SRG), Version 1, Release 1, 2015.