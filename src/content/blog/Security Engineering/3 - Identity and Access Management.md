---
title: Identity and Access Management
description: SSH, PAM, LDAP, and local auth — how systems verify who you are.
summary: How connections authenticate, PAM modules, LDAP integration, and local auth flows.
pubDate: 2024-09-20
---

# How does a connection happen?
SSH, with a password/cert/key, its just all how we assert we are who we are.

SSH can spawn a new shell, but it has to get permission to spawn a shell and drop you in there, done through `pluggable authentication module`  (internal, looks at internal users and passwords, but doesnt scale well)

sssd, is how we connect into active directory and trust some other system NIS (network information Services). Microsoft has a 99.5% share of hte market in this regard.

### SSD to connect into a active directory, and build a LDAP


HIppa complaince -> NIST 800-145 

Understand technical, physiucal, administrative, controls, broken into magnaetrial or organisational. (its the safeguards)


Blog posts, recipircol agtreement with companies that htey'll safegard the PII

document one of our policies if its public/private etc (data must be labeled first before we can figure out wtf is going on)


### Whats our update and review cadence
Update every 6 months or something, thats a good policy list. 

Use GDPR if in EU, (i think we also use GDPR?...)

we basically want to figure out our role as a linux engineer and find out how it adheres to GDPR, 
How are we protecting data? what are the safeguards? 

better to have something than nothing. 

We want to be pretty pompous, like, we're self-assured, just dont be caught backpedeling or get yourself in that situation

# Pam (pluggable authentication module)
docs.rockylinux.org/guides/security/pam/

Find the Red hat architect's blog post, he's also in the PLUG server, he has 3 good pam blogs, 


# Local Auth
Why dont we use local auth in linux? 
- Becuase if we can do it, someone else can do it. 

We really dont wanna touch identity and management stuff othe company, not my business, im here for linux. 

# LDAP
No one should ever be able to log into a production server
prod servers should be part of CICD pipeline

https://www.redhat.com/en/technologies/cloud-computing/directory-server

https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_authentication_and_authorization_in_rhel/configuring-sssd-to-use-ldap-and-require-tls-authentication_configuring-authentication-and-authorization-in-rhel#An-OpenLDAP-client-using-SSSD-to-retrieve-data-from-LDAP-in-an-encrypted-way_configuring-SSSD-to-use-LDAP-and-require-TLS-auathentication

https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/planning_identity_management/overview-of-identity-management-and-access-control-planning-identity-management#intro-to-ipa-overview-of-idm-and-access-control
# SSSD 
is basically an auth method, 

We can allow users to get in, only if they've been properly vetted and given access through active directory
you need more perms? lets discuss sudo  then

# oddjob
name of a process that can make directories and do different odd jobs in the system

# Access.dconf (?)

/etc/securrity/access.dcnf, super simple file, adds or removes capabilities of users, you can also `disallow non-root logins on tty1.`

so long as people were ggiven access in Active Directory through identity and access management, 

Ensure all servers have a groupname that corresponds to the pre-filtering group, 

as in, if they're in 'network admin groups' and get dropped in, then it works. 

if they dont do it, you can turn off Cron_alow and cron_deny 
- grep cron access.conf

-:all:cron 

Cron isnt bad but holy hell users are bad. 

DO NOT make a crontab like `cat /etc/crontab` and NOT properlly filter it

ARP requests can take down systems if you dont do it properlly

Easiest solution? turn off cron lol. and if someone wants it, make sure they ask for it, and we can train them/others. "Tell the guy where the curb is so they don't trip on it" 

# Root concerns

Block root remotely...

"whats the implications of locking root? "

Set up ldap, make a basic user, connect back to the system via sssd.

# Industry thoughts
so in the idustry will we be doing STIGs? or different frameworks like NIST?

if OpenLDAP isn't used on RHEL 9 anymore, what's used instead?

--- 

# lab

turn off the client, 

We can also make mariadb/sql into ann actual user, so tis part of hte actual cluster.


---

`uptime`

`systemctl stop wwclient`

`nvim /etc/host`

`hammer25-defualt ldap.prolug.lan ldap`

install this repo: 
`dnf -y install openldap-servers openldap-clients openldp`

`ss -ntulp`

`systemctl start slapd`

`ss -ntulp`

`systemctl status firewalld`

Firewalld, doesnt affect hte connection locally internal to hte sytem
if we had two systems like a system and a client, it would matter (as in remote)
(check the lab workshop for the commands)

`slappasswd`

`#use testpassword` (these passwords are salted, only the first 4 chars are the same)

Lab: look at the youtube video later becuase its more... done/complete

# AWS Stuff from CCP (certified cloud practitioner)

look up in presentations

Kingbuns made a bot that generates a jacket for you if oyu list off all the certs you have

![](99%20-%20Assets/2025/2025-04-13-11-04-43.png)

see what im missing, and do it too lol

Ig System admin -> Sys engineer OR DEVOPS

https://discord.com/channels/611027490848374811/1016347509813149776/1073757954051932200