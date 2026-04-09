### Topic 1: What is Security
"Security is the enemy of productivity!"

CIA Triad; Confidentiality, who can view it; Integrity, does time affect it, who can edit it, there's more than just ransomware bs; Availability, is the data up? is it available? 

Relationship between Authority, Will, and Force as they relate to security:

Other names to check:
- CIA Triad
- Regulatory Compliance
- HIPAA
- Industry Standards
- PCI/DSS
- Security Frameworks
- CIS
- STIG

Risk management framework - NIST800-145, all governments must adhere to NIST standards.

### Topic 2: Find a STIG or compliance requirement that you do not agree is necessary for a server or service build

Stig viewer 2.18, don't use 3 (?), technically no one uses it, its a thing but like everyone uses 2.17 or 2.18, 

"i don't know why i have to label data"
to me, there's just simply not enough labels that'll please everyone


---

mariadb lab test

SELECT user, max_user_connections FROM mysql.user


instead of : username@host

its typical to have: root@localhost and each name @localhost.
i.e for the mariadb stig, we had mysql, mariadb.sys and root, so it would be 

mysql@localhost
mariadb.sys@localhost
root@localhost
(sql)


### Controls

Categories
- Technical
- Managerial: (Administrative, but is now split), 
- Operational
- Physical

Control Types:
- Preventive
- Deterrent
- Detective
- Corrective
- Compensating
- Directive

i.e 
Managerial, telling others to not enter a room, that's directive.
Managerial, closing a door? that's a preventive (physical)

You'll typically be adding these to the comments like 
This is set correctly as a technical preventative control. (This is kinda... pedantic but more verbose the better)

---

STIG

V-253666
V-253667

---

How to read STIG descriptions:

SHALL, MUST, WILL, = Must do, 

SHOULD/Best Practice = only if marketing insists

May = if it doesn't cost extra

![](99%20-%20Assets/2025/2025-03-24-02-03-56.png)


---

For Cats I or Cat II or Cat III:
If you're reporting it up to someone (i.e gov or other customer)

Cat 1 = most important, EVERY one CANNOT be open
Cat 2 = you can have open cat 2s, but they MUST be reviewed.
Cat 3 = lowest value, doesnt matter, compensated controls will cover it prolly. 