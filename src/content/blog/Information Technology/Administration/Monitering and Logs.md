```plaintext
Notes/
├── Logging
├── Security
├── Cloud & DevOps
├── Networking
├── Storage & Backup
├── System Monitoring & Performance
├── IT Career & Homelabs
├── Ransomware
└── General References
```

# Logging

## Log Files

- Logs are stored in `/var/log/`
- Commands:
    - `tail -30 /var/log/syslog` → View last 30 lines of syslog
    - `zcat /var/log/auth.log.*.gz | sort -M` → View and sort compressed authentication logs
- Logs must be immutable and sent off the system immediately to prevent deletion.

## Log Format Requirements

1. Must always have a timestamp.
2. Hostname, then service.
3. Description of the event.

# Security

## Ransomware

### References

- [NIST Guide for Cybersecurity Recovery](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-184.pdf)
- [NIST Cybersecurity Framework for Ransomware Risk](https://nvlpubs.nist.gov/nistpubs/ir/2022/NIST.IR.8374.pdf)
- [NIST Contingency Planning Guide](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf)
- [Bacula Manual](https://bacula.org/13.0.x-manuals/en/main/main.pdf)
- [AWS Archive Blog](https://aws.amazon.com/getting-started/hands-on/replace-tape-with-cloud/)
- [AWS Tape Management](https://aws.amazon.com/blogs/storage/escaping-the-pain-of-physical-tape-management-with-aws-storage-gateway/)
- [AWS Storage Gateway Webinar](https://www.youtube.com/watch?v=FgxdJmfKSFs)

### Purpose of Ransomware

- Encrypt your data so you don’t have access.
- Steal your data.
- Sell your data or sell you back your keys.

### CIA Triad Violations

- **Confidentiality**: Data theft.
- **Integrity**: Altered data prevents access.
- **Availability**: Data is completely locked.

### How Ransomware Works

- Uses encryption keys.
- Symmetric key encryption: Same key for encryption & decryption.
- Asymmetric key encryption: Cryptographically linked public/private key pairs.

### Mitigations

- Do not store backups on the same server.
- Implement **Business Continuity (BC)** planning.
- Encrypt data at rest.
- Government recommendations:
    1. Educate employees (avoid unknown links, secure devices).
    2. Patch vulnerabilities and enforce zero trust.
    3. Use security monitoring and antivirus.
    4. Enforce strict authentication policies.
    5. Maintain incident recovery plans and secure backups.

### What Doesn’t Work

- **High availability servers** (they still get encrypted).
- **Encrypting data at rest or transit** (does not stop encryption from attackers).
- **PR best practice**: Customers should hear breaches from you, not the news.

# Cloud & DevOps

## Vault & SOPS

- [VaultProject.io](https://vaultproject.io) → Vault offers tutorials.
- Research differences between **SOPS** and **NixOps**.
- Red Hat and Vault are both IBM-owned.

## Kafka

- [Serverless Land](https://serverlessland.com/)
- **Kafka is an event bus.**
- AWS equivalent: **EventBridge**.
- _“Event bus is like a subway system”_
- Used for **server decoupling**.

## Redis

- [Redis University](https://university.redis.io/course/kfqi66sxurbqua)

# Networking

## AWS BGP Setup Best Practices

- **Mnemonic for BGP Best Path Algorithm**:
    - _We Love Oranges AS Oranges Mean Pure Refreshment_
    - Weight, Local Preference, Originate, AS Path, Origin, MED, Paths, Router ID

# Storage & Backup

## Logical Volume Management (LVM)

### Commands

- `pvdisplay` → Show physical volumes.
- `vgdisplay` → Show volume groups.
- `pvs` → View disks and storage.
- `vgs` → Aggregated volume group view.
- `lvs` → View allocated volume space.
- `fdisk -l | grep -i xvd` → Check disk space.

### Common Operations

```bash
pvcreate /dev/xvdb /dev/xvdc /dev/xvde   # Create physical volumes
vgcreate vg1 /dev/xvdb /dev/xvdc         # Create volume group
vgextend vg1 /dev/xvde                   # Extend volume group
lvcreate -L 5G -n space vg1               # Create a logical volume
```

## Backup Strategy

- **3-2-1 Rule**:
    - Keep **3 copies** of data.
    - Store **on 2 different media types**.
    - Keep **1 offsite copy**.
- **Backup Tools**:
    - Avamar
    - Bacula (open source, used in government)
    - AWS backup agents
    - Bareos (Bacula fork)

# System Monitoring & Performance

## General System Checks

```bash
w         # Show logged-in users
uptime    # Check system uptime
ps -ef    # Show process details
last      # View last login attempts
df -h     # Check disk usage
mpstat    # Monitor CPU utilization
iostat    # View disk I/O stats
pidstat   # Monitor process activity
```

## Logs & Auditing

```bash
auditd             # Audit daemon
sar -n DEV 1       # Monitor network interface stats
netstat -i         # Network errors summary
smartctl           # Disk health check
```

# IT Career & Homelabs

## IT Job Progression

1. **SysAdmin**: Maintain and fix systems.
2. **Systems Engineer**: Research, build, and improve systems.

## Homelab Setup

- **Proxmox** & **XPCNG** for virtualization.
- **Type 1 hypervisors** (beneficial, but need to understand why).
- **Public vs. private profile separation** (use VMs for each?).

## Required Skills

- Experience in **Alma Linux, CentOS, RHEL**.
- Familiarity with **Kubernetes networking** (Calico, Cilium).
- **Border Gateway Protocol (BGP)** experience.
- **Terraform / Terragrunt**.
- **CI/CD Pipelines (GitLab CI)**.
- **Telemetry Stack**: Prometheus, Fluent Bit, Grafana, etc.
- **Security Best Practices** for cloud/on-prem.
- **Golang**: Writing operators & admission webhooks.
- **AWS**: Hardening, deployment automation.
- **Ansible** & **Python**.

# General References

## Glossary

- **NOC**: Network Operations Center
- **SOC**: Security Operations Center

## Lustre

- High-performance scalable storage.
- Used for satellite data capture.
- _Expected salary for managing Lustre: **$395,000 USD/year**._

## Tape Gateway Pricing & Deployment

- [AWS Storage Gateway Pricing](https://aws.amazon.com/storagegateway/pricing)
- [AWS Cost Estimation](https://calculator.aws/#/addService/StorageGateway)
- [Implementation Guide](https://aws.amazon.com/getting-started/hands-on/replace-tape-with-cloud/)
