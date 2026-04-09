```plaintext
Notes/
├── Access Control Lists
└── NAT for IPv4
```

# Access Control Lists

## What is an ACL?

- ACLs are IOS commands that control if a router forwards or drops packets based on the packet header.
    
- Not enabled by default.
    
- Used to:
    
    - Limit network traffic for performance (e.g. block video).
        
    - Control traffic flow (e.g. validate routing sources).
        
    - Secure access (e.g. block specific hosts).
        
    - Filter traffic types (e.g. Telnet).
        
    - Screen services (e.g. FTP, HTTP).
        

## Packet Filtering

- ACLs = list of permit/deny ACEs.
    
- Packets are matched against ACEs sequentially.
    
- Last statement is implicit deny.
    
- Filters inbound or outbound traffic at Layer 3/4.
    

## ACL Operation

- ACLs don't act on packets _from_ the router.
    
- Applied:
    
    - Inbound: before routing.
        
    - Outbound: after routing.
        

## Wildcard Masks in ACLs

### Wildcard Basics

- Required for IPv4 ACEs.
    
- Inverse of subnet masks (0 = match, 1 = ignore).
    

### Examples

- `0.0.0.0` → exact match.
    
- `255.255.255.255` → any address.
    
- `0.0.0.255` → match 192.168.1.0/24.
    

### Calculating Wildcards

- `192.168.3.0/24` → `0.0.0.255`
    
- `192.168.3.32/28` → `0.0.0.15`
    
- `192.168.10.0/23` → `0.0.1.255`
    

### Keywords

- `host` → replaces `0.0.0.0`
    
- `any` → replaces `255.255.255.255`
    

### Keyword Examples

```
access-list 1 permit host 192.168.10.10
access-list 1 permit any
```

## ACL Creation Guidelines

### Where to Apply ACLs

- Use between internal and external networks (firewall routers).
    
- Use between network segments to limit traffic.
    
- Border routers should have per-protocol ACLs.
    
- One ACL per protocol, direction, and interface.
    

### Placement Strategy

- Extended ACLs → Close to source.
    
- Standard ACLs → Close to destination.
    

### Example: Standard ACL Placement

- Block 192.168.10.0/24 from reaching 192.168.30.0/24.
    
- Apply on R3's G0/0 interface outbound to avoid overblocking.
    

## Configure Standard IPv4 ACLs

### Numbered ACL Syntax

```
access-list <1-99> {permit|deny|remark} source [wildcard] [log]
no access-list <num> → remove
show access-list → verify
```

### Applying to Interface

```
interface <int>
ip access-group <num|name> {in|out}
```

### Example 1

```
no access-list 1
access-list 1 deny host 192.168.10.10
access-list 1 permit 192.168.10.0 0.0.0.255
interface s0/0/0
ip access-group 1 out
```

### Example 2

```
access-list 1 deny host 192.168.10.10
access-list 1 permit any
interface g0/0
ip access-group 1 in
```

### Named ACL Syntax

```
ip access-list standard <name>
deny host 192.168.11.10
permit any
interface g0/0
ip access-group <name> out
```

## Modify IPv4 ACLs

### Method 1: Text Editor

- Use `show running-config`, copy ACLs into Notepad.
    
- Edit and paste changes into router.
    
- Be cautious with IOS behavior after ACL deletion.
    

### Method 2: Sequence Numbers

```
access-list 1 deny host 192.168.10.99
access-list 1 permit 192.168.0.0 0.0.255.255
! identify error
ip access-list standard 1
no 10
10 deny host 192.168.10.10
```

### Named ACL Edit Example

```
ip access-list standard NO_ACCESS
15 deny host 192.168.11.11
```

### Verifying ACLs

- `show ip interface <int>` → shows ACL direction.
    
- `show access-lists` → shows ACL content.
    

### Show Example

```
Standard IP access list NO_ACCESS
  10 deny 192.168.11.10
  15 deny 192.168.11.11
  20 permit 192.168.11.0 0.0.0.255
```

### ACL Statistics

- `show access-lists` → shows match counts.
    
- `clear access-list counters` → reset for testing.
    

## Secure VTY Ports with ACL

### access-class

```
line vty 0 4
login local
transport input ssh
access-class 21 in
exit
access-list 21 permit 192.168.10.0 0.0.0.255
deny any
```

### Verify

```
show access-lists
Standard IP access list 21
  permit 192.168.10.0 0.0.0.255 (2 matches)
  deny any (1 match)
```

# NAT for IPv4

## NAT Overview

- NAT translates private IPs to public IPs for Internet access.
    
- Hides internal address space.
    
- Typically configured on border routers.
    

### Terminology

- Inside local/global: internal IPs before/after NAT.
    
- Outside local/global: external IPs before/after NAT.
    

## Static NAT

```
ip nat inside source static local-ip global-ip
interface <int>
ip nat inside | outside
```

### Verification

- `show ip nat translations`
    
- `show ip nat statistics`
    
- `clear ip nat statistics`
    

## Dynamic NAT

```
ip nat pool NAT-POOL1 <start-ip> <end-ip> netmask <mask>
access-list 1 permit <internal-net> <wildcard>
ip nat inside source list 1 pool NAT-POOL1
interface <int>
ip nat inside | outside
```

## PAT (NAT Overload)

- Use a single public IP with port tracking.
    
- Requires `overload` keyword.
    

### Example

```
ip nat pool NAT-POOL2 209.165.200.226 209.165.200.240 netmask 255.255.255.224
access-list 1 permit 192.168.0.0 0.0.255.255
ip nat inside source list 1 pool NAT-POOL2 overload
interface s0/0/0 → ip nat inside
interface s0/1/0 → ip nat outside
```

### PAT with Interface IP

```
access-list 1 permit 192.168.0.0 0.0.255.255
ip nat inside source list 1 interface s0/1/0 overload
```

## Verifying NAT

```
show ip nat translations
show ip nat statistics
clear ip nat statistics
```

## Port Forwarding

- Allows external access to internal devices by port.
    
- Required for some apps like FTP, web hosting.
    
- Needs:
    
    - Internal local IP.
        
    - Port mapping to internal service.