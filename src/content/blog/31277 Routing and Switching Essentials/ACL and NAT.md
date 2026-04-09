```markdown
Notes/
├── Access Control
├── NAT
└── Commands & Verification
```

# Access Control Lists

## What is an ACL?

- ACL (Access Control List) controls packet forwarding/dropping based on header info. - Default: routers do **not** have ACLs configured.
    

### Purposes

- Limit traffic to improve performance (e.g. block video streaming). - Control traffic flow (verify source of routing updates). - Add basic security (block specific hosts or networks). - Filter specific traffic types (e.g. Telnet). - Allow/deny access to services (e.g. HTTP, FTP).
    

## Packet Filtering

- ACL = ordered list of permit/deny rules (ACEs). - Traffic gets matched _sequentially_ until a rule hits. - Filters at Layer 3 (IP) and Layer 4 (TCP/UDP). - Final rule is always **implicit deny all**.
    

## ACL Operation

- ACLs **don’t affect router-originated packets**. - They filter: - Inbound → before routing. - Outbound → after routing.
    

## Wildcard Masks in ACLs

### Introduction

- Wildcard mask = 32-bit inverse mask. - `0` means _must match_, `1` means _don’t care_.
    

### Common Masks

- Exact match: `0.0.0.0` - Match all: `255.255.255.255` - Match subnet: `0.0.0.255` (matches /24)
    

### How to Calculate

- Subtract subnet mask from `255.255.255.255` - Examples: - `/24` → `0.0.0.255` - `/28` → `0.0.0.15` - `/23` → `0.0.1.255`
    

### Wildcard Keywords

- `host` = `0.0.0.0` - `any` = `255.255.255.255`
    

### Usage Examples

```shell
R1(config)# access-list 1 permit any
R1(config)# access-list 1 permit host 192.168.10.10
```

## ACL Creation Guidelines

### Placement

- Extended ACL → close to **source**. - Standard ACL → close to **destination**.
    

### Per Rule Basis

- One ACL per: - Protocol (IPv4/IPv6) - Direction (in/out) - Interface
    

## Standard IPv4 ACLs

### Numbered ACL Syntax

```shell
Router(config)# access-list <1-99> {permit|deny} <source> [wildcard] [log]
```

- Removal: `no access-list <num>` - Apply to interface:
    

```shell
Router(config-if)# ip access-group <num> {in|out}
```

### Example

```shell
R1(config)# no access-list 1
R1(config)# access-list 1 deny host 192.168.10.10
R1(config)# access-list 1 permit 192.168.10.0 0.0.0.255
R1(config)# interface s0/0/0
R1(config-if)# ip access-group 1 out
```

### Named ACL Syntax

```shell
R1(config)# ip access-list standard NO_ACCESS
R1(config-std-nacl)# deny host 192.168.11.10
R1(config-std-nacl)# permit any
R1(config)# interface g0/0
R1(config-if)# ip access-group NO_ACCESS out
```

## Editing ACLs

### Method 1 – Text Editor

- Copy config → edit in Notepad → paste back. - Check config:
    

```shell
R1# show running-config | include access-list
```

### Method 2 – Sequence Numbers

```shell
R1(config)# ip access-list standard 1
R1(config-std-nacl)# no 10
R1(config-std-nacl)# 10 deny host 192.168.10.10
```

### Insert Rule in Named ACL

```shell
R1(config)# ip access-list standard NO_ACCESS
R1(config-std-nacl)# 15 deny host 192.168.11.11
```

## Verifying ACLs

```shell
R1# show ip interface g0/0
 → Shows direction & ACL applied
R1# show access-lists
 → Lists sequence & match stats
```

## Securing VTY Access

```shell
R1(config)# line vty 0 4
R1(config-line)# access-class 21 in
R1(config)# access-list 21 permit 192.168.10.0 0.0.0.255
R1(config)# access-list 21 deny any
```

# NAT for IPv4

## Overview

- NAT translates **private** IPs to **public** IPs. - Used to allow internal devices to access external networks.
    

### Address Types

- **Inside local** = private address - **Inside global** = public address NAT maps to - **Outside local** = destination before NAT - **Outside global** = destination public address
    

## Types of NAT

### Static NAT

- One-to-one mapping. - Use case: servers accessed from internet.
    

### Dynamic NAT

- Maps private IPs to a **pool** of public IPs. - First-come-first-serve.
    

### PAT (NAT Overload)

- Multiple private IPs share one public IP. - Tracks via **port numbers**.
    

## Configure Static NAT

```shell
R2(config)# ip nat inside source static 192.168.11.99 209.165.201.15
R2(config)# interface s0/0/0
R2(config-if)# ip nat inside
R2(config)# interface s1/0
R2(config-if)# ip nat outside
```

### Verify

```shell
R2# show ip nat statistics
R2# show ip nat translations
```

## Configure Dynamic NAT

```shell
R2(config)# ip nat pool NAT-POOL1 209.165.200.226 209.165.200.240 netmask 255.255.255.224
R2(config)# access-list 1 permit 192.168.0.0 0.0.255.255
R2(config)# ip nat inside source list 1 pool NAT-POOL1
```

## Configure PAT (Overload)

### Using Pool

```shell
R2(config)# ip nat pool NAT-POOL2 209.165.200.226 209.165.200.240 netmask 255.255.255.224
R2(config)# access-list 1 permit 192.168.0.0 0.0.255.255
R2(config)# ip nat inside source list 1 pool NAT-POOL2 overload
```

### Single Address PAT

```shell
R2(config)# access-list 1 permit 192.168.0.0 0.0.255.255
R2(config)# ip nat inside source list 1 interface s1/0 overload
```

### Verify

```shell
R2# show ip nat translations
R2# show ip nat statistics
```

## Configure Port Forwarding

- Use static NAT to map a public IP and port to a private IP and port - Example use case: internal web servers, FTP, or peer-to-peer
    

```shell
Router(config)# ip nat inside source static tcp 192.168.10.10 80 209.165.200.225 80
```