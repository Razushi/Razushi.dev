---
title: Linux Users, Groups and Password Files
description: Notes on `/etc/passwd`, `/etc/shadow`, `/etc/group`, and basic user management on Linux.
summary: Sysadmin for Linux users, groups, passwd, shadow, useradd, userdel. Core admin notes.
pubDate: 2024-09-26
---

/etc/passwd

`username : password : uid : gid : full name of user : homedir : shell`

/etc/shadow
contains the hashed password and the password expiry data

– Shadow entries must match users in /etc/passwd
– If /etc/shadow is present and has a password, the password field in /etc/passwd contains 'x'

i.e:
```
root:$1$qYyXGFnx$mcagydJluWmKTCtL3f07w/:13361:0:99999:7:::
someuser:$1$.qyZlc4K$LzRvAadGvuOAoruyckpMG.:13385:0:99999:7:::
– Can be accessed by root only
```

`username : password : lastchg : min : max : warn : inactive : expires`

- username: A direct match to the username in the /etc/passwd file.
- password: encrypted, a blank entry (eg. ::) indicates a password is not required to log in, system accounts have an asterisk * character in this field, new user is set to !, meaning the account is locked by default. The encrypted password hashes for user accounts on the system.
- lastchg: The number of days (since Jan. 1, 1970*) since the password was last changed.
- min: The number of days before password may be changed (0 indicates it may be changed at any time)
- max: The number of days after which password must be changed (99999 indicates user can keep his or her password unchanged for many, many years)
- warn: The number of days to warn user of an expiring password (7 for a full week)
- inactive: The number of days after password expires that account is disabled
- expires: The number of days since January 1, 1970 that an account has been disabled

/etc/group

/etc/group defines available groups
➢ -rw-r--r-- 1 root root 1122 Aug 16 08:20 /etc/group
➢ -rw-r--r-- 1 root root 449 Jul 12 2022 sysctl.conf
➢ Users have one default group, but can be in many groups
	➢ Default group is in /etc/passwd
➢ Users can switch groups with the newgrp command
	▪ newgrp developers #Attempt to log into the group called developers, current working environment remains unchanged
	▪ newgrp – developers #if the option – flag is given, user environment re-initialized as though he or she had just logged in, otherwise, the current environment Including current working directory, remains unchanged.
	▪ but setgid* bits on directories more common 

➢ Sample /etc/group entries:
```
staff:x:400:someuser,me,jane,chun
someuser:x:500:
```
groupname : password : gid : userlist

Different conventions:
– User's UNIX group (system) reflects user's real-world group (e.g. dept)
– User Private Group scheme (UPG such as RedHat) (umask 002 or 007)

Typical desires:
– users has their own group ID and cannot read one file from another user account
– users working on common projects can share files

• May be complicated by network filesystem access

• *ACLs also a (complex) solution to file sharing

### Add/modify/delete users
useradd [options] username
usermod [options] username
userdel [options] username

`passwd username` # to set the user's initial password

System will copy the /etc/skel to the home dir.
In principle, you can do what is required manually:
– Create specific files in /etc/skel called skeleton files for new users.
– Create entries in /etc/passwd and /etc/shadow
– Create a home directory and chown it

useradd [options] username
The useradd command, by itself, creates a new account using default options. To create a new user with options different than the defaults, use the useradd command with optional parameters:
`useradd -s <Shell> -d <Home directory> -m -k <Skeleton directory> -g <Group> username`

### Deleting users

userdel command is used to delete users.
– When you delete a user account, you also need to decide whether to delete the user's home directory. The user's files may be important to the organization, and there may even be legal requirements to keep the data for a certain amount of time, so be careful not to make this decision lightly.
– don't forget to delete/archive other files owned by user too
• e.g. mail spool, cron jobs, at jobs, files in /tmp, /var/tmp, etc.
– To delete the user, home directory, and mail spool as well, use the -r (recursive) option: `root@localhost:~# userdel -r jane`
• Technically, deleting a user is easy
– the tricky part is all the policies about what to do with everything that belonged to the user

Lock and unlock accounts with 3 different ways
– e.g. if you suspect unauthorised access:
1. Commands: passwd –l username and passwd –u username
2. Put a * or !! in the password (shadow) field to lock
3. Set a user’s login shell to /sbin/nologin* or equivalent to lock
*How to do it? you can use the usermod command, along with the -s or --shell option

• Set password aging if required
– chage command makes users change passwords regularly
– chage [options] user #The chage command changes the number of days between password changes and the date of the last password change.
– users may act more insecurely if required to change too often
• Set resource limits if required
– e.g., disk quotas, print quotas, etc.

### Add/modify/delete groups
groupadd [options] groupname
groupmod [options] groupname
groupdel [options] groupname
• In principle, you can do what is required manually:
– Create entry in /etc/group
– Set a group password if required (gpasswd command)
• Adding users to groups:
usermod –g staff someuser (set default group)
usermod –G staff,www,admin someuser (add other groups)

### Notify users on system issues
• Terminal login
– direct login: Teletypewriter (TTY) login via direct, physical/virtual console
– remote login: Pseudo Terminal Slave (PTS) login via telnet/SSH
• Local login (TTY) messages: /etc/issue
– displayed before login prompt on console (text-based login)
• Network login (PTS) messages: /etc/issue.net
– displayed before login prompt for telnet connections
– not displayed for SSH connections though
• Message Of The Day (TTY/PTS): /etc/motd
– displayed after login for console, telnet and ssh logins
– not typically displayed for GUI logins

### Three roles for a Windows Server in a network (machine)
– Standalone server: operate independently without relying on any other serves to functions
– Domain controller: the server responsible for managing network and identity security requests, It stores directory information and provide authentication and directory services for the domain
– Member server: a computer in a network that belongs to a domain but does not hold the role of a domain controller such that it doesn’t store directory information.
• Centralised = use internal account management 
– Called “Security Account Manager (SAM)”: A database contains usernames and passwords to make system more secure.
• Decentralised = distributes information-processing workloads across multiple devices instead of relying on a single central server.

### Workgroups -- Decentralized Mgt in Windows
• Original version – windows 3.11 !
• A workgroup is a logical group of computers with a peer-to-peer model and communication over LAN. Each machine can be either client or server
• Decentralized security & administration model 
– Authentication provided by the local Security Account Manager (SAM)
• Limitations
– Users need unique accounts on each workstation
– Users manage their own accounts (security issues)
– Not very scalable (10-20 devices)

### Domains – Centralised Mgt in Win
• A domain is a logical group of computers
– Centralized authentication and administration
– Authentication provided through centralized Active Directory Domain server: store info. about objects on the network for Admin and user to use.
– The main purpose of a domain managed by a domain controller for an IT admin or service is to control the network, including any security issues and permissions all from one centralized location.
• When a network administrator makes a change to one device, it will be automatically made for all the other devices that exist within the same domain.
– Active Directory Database* can distribute amongst more than one domain controllers
– At least one system must be configured as a domain controller 

As the primary database file, it stores objects, attributes, properties, configuration, and schema information for a local domain in the Active Directory service.

### Domain -- Member Servers in Windows
• Contain an account in a domain
• Not configured as a domain controller
• Typically, be used for sharing file, prints, application, and hosting network services

### Domain Controllers in Windows
• Set with Active Directory Domain service role
– Serves user authentication requests
– Serve queries about domain objects
• Often set up to be master DNS server and LDAP (directory) server

### Manage Users, Computers, and Groups in
Windows
• Objects in Windows: users, computers, roles, etc
– Windows admin: You can update LOCAL or DOMAIN accounts
• User accounts include:
– Main types: administrator, power users, users, guests
• Each computer:
– Used as domain controller (DC) for authentication and access auditing
– Member server by registering with DC
• Groups
– Define logical grouping of objects
– Assign rights and permissions to groups
– Define Admin. Templates via group policies (GPO)

### Use GUI:
– Start → Control Panel → User accounts
– Server Manager → Tools → Computer Management → Local
Users and Groups
– You can view an object (user/group) properties
• Use command line:
– net user command eg: `net user /add chris`
– wmic useraccount command
• You manage group policies via the gpedit.msc*
– You can edit computer or user configuration/properties
