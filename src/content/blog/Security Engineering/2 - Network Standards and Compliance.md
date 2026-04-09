Overview: 
# How to secure network
# How do we verify security settings?

1. As systems engineers why are we focused on protecting the network portion of our server builds?
2. Why is it important to understand all the possible ingress points to our servers that exist?
    - Why is it so important to understand the behaviors of processes that are connecting on those ingress points? (SSNTULP)

Read this: https://ciq.com/blog/demystifying-and-troubleshooting-name-resolution-in-rocky-linux/ or similar blogs on DNS and host file configurations.

1. What is the significance of the nsswitch.conf file?
    
2. What are security problems associated with DNS and common exploits? (May have to look into some more blogs or posts for this)


Diamond intrusion model is used for security

![](99%20-%20Assets/2025/2025-04-06-10-04-20.png)

![](99%20-%20Assets/2025/2025-04-06-10-04-33.png)


Things to look over:

![](99%20-%20Assets/2025/2025-04-06-10-04-99.png)

### Notes During Lecture/Class:

**Links:**

- [SANS Information Security Policy](https://www.sans.org/information-security-policy/)
- [SANS Cheat Sheets List](https://www.sans.org/blog/the-ultimate-list-of-sans-cheat-sheets/)
- [Rocky Linux Kernel Config](https://docs.rockylinux.org/gemstones/core/view_kernel_conf/)
- [Demystifying Name Resolution in Rocky Linux](https://ciq.com/blog/demystifying-and-troubleshooting-name-resolution-in-rocky-linux/)
- [Diamond PDF – Active Response](https://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf)


---

Commands:

1. `sysctl -a | grep -i ipv4 | grep -i forward`  
   a. Does this system appear to be set to forward? Why or why not?

2. `sysctl -a | grep -i ipv4 | grep -i martian`  
   a. What are martians and is this system allowing them?
	1. Martian packet: tends to mean stuff thats sent on your iterface or captured on ur interface but doesnt come from ur system

4. `sysctl -a | grep -i panic`  
   a. How does this system handle panics?

4. `sysctl -a | grep -i crypto`  
   a. What are the settings you see? Is FIPS enabled?

5. `cat /proc/cmdline`

6. `fips-mode-setup --check`

7. `sestatus`

8. `cat /etc/selinux/config`  
   a. What information about the security posture of the system can you see here?  
      i. Can you verify SELINUX status?  
      ![](99%20-%20Assets/2025/2025-04-06-10-04-99-1.png)
      ii. Can you verify FIPS status?
	    kernal check

Examine STIG V-257957
![](99%20-%20Assets/2025/2025-04-06-10-04-58.png)

firewall-cmd -get-services | grep -i node

![](99%20-%20Assets/2025/2025-04-06-10-04-92.png)


--- 
# remediation

ls 
mkdir ansible
unzip U_RHEL......Ansible.zip
ls
mv U_RHEL...nsible /ansible

cd roles/rhel9stig/tasks

vim main.yml 

check the pdf tbh for more instructions here

---

You can drop every sysctl config into each container. (this does get tedious or annoying...) and so long as you drop the correct rules into any file in /etc/sysctl.d, when the system boots, it'll read them all and do it. 

### How to STIG a container:

check if theres grub, if theres/boot, if the system is stateless (noSUID), etc, check what gets measured


---

### openscap

`oscap xccdf generate fix --profile ospp --fix-type ansible
/usr/share/xml/scap/ssg/content/ssg-rhel9-ds.xml > draft-disa-
remediate.yml`

`cp draft....yml draft....yml.orig` (use this because i will basically fk around with the original script)

WIth the /openscap file , the draft-disa-remdeiate.yml, open up in vim, and if u wanna fix it, literally open up and remove the auto script...

if you want to use bash, you swap the fix-type to bash, and make pipe it into .sh instead of .yml:
`oscap xccdf generate fix --profile ospp --fix-type bash
/usr/share/xml/scap/ssg/content/ssg-rhel9-ds.xml > draft-disa-
remediate.sh`


---

tear down the openscap thing to whatever you want, apply them to new systems,