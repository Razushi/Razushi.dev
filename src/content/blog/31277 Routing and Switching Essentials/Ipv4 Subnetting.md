# IPv4 Subnetting & Addressing

## 1. Understanding Subnet Masks & /24

- A **/24 subnet** means the first **24 bits** are reserved for the network, and the last **8 bits** are for hosts.
    
- IP range for /24​:
    
    - **Network Address**: 192.168.10.0/24​
    - **Usable Host Range**: 192.168.10.1 – 192.168.10.254​
    - **Broadcast Address**: 192.168.10.255​
- Total addresses: 256 (2^8)​, **Usable Hosts**: 254 (subtract network & broadcast)​
### Splitting /24 into Two /25 Subnets:

- **First /25 subnet**:
    
    - Network: 192.168.10.0/25​
    - Hosts: 192.168.10.1 – 192.168.10.126​
    - Broadcast: 192.168.10.127​
- **Second /25 subnet**:
    
    - Network: 192.168.10.128/25​
    - Hosts: 192.168.10.129 – 192.168.10.254​
    - Broadcast: 192.168.10.255​
- **Effect**: More subnets, but fewer hosts per subnet.
    

## 2. ANDing & Identifying Network and Broadcast Addresses

**Logical ANDing**: Determines the network address by comparing an **IP** and a **subnet mask**.

Example: 192.168.10.10 /24​

IP Address: 11000000.10101000.00001010.00001010

Subnet Mask: 11111111.11111111.11111111.00000000

Network Addr: 11000000.10101000.00001010.00000000 (192.168.10.0)

- **Network Address**: All host bits 00000000​
- **Broadcast Address**: All host bits 11111111​

|Subnet|Network Address|Usable Hosts|Broadcast Address|
|---|---|---|---|
|​/24​|​192.168.10.0​|​192.168.10.1 – 192.168.10.254​|​192.168.10.255​|
|​/25​|​192.168.10.0​|​192.168.10.1 – 192.168.10.126​|​192.168.10.127​|
||​192.168.10.128​|​192.168.10.129 – 192.168.10.254​|​192.168.10.255​|
## 3. IPv4 Addressing Types

- **Unicast**: One-to-one communication.
- **Broadcast**: One-to-all communication (255.255.255.255​).
- **Multicast**: One-to-many (224.0.0.0 – 239.255.255.255​).

## 4. Public vs. Private IPv4 Addresses

- **Private IPv4 Ranges** (Not routed over the Internet):
    
    - ​10.0.0.0/8​ → 10.0.0.0 – 10.255.255.255​
    - ​172.16.0.0/12​ → 172.16.0.0 – 172.31.255.255​
    - ​192.168.0.0/16​ → 192.168.0.0 – 192.168.255.255​
- **Public IPv4 Addresses**: Routable on the Internet.
    

## 5. IPv4 Classes & Subnet Blocks

|Class|IP Range|Default Subnet Mask|
|---|---|---|
|A|​1.0.0.0 – 126.255.255.255​|​255.0.0.0 (/8)​|
|B|​128.0.0.0 – 191.255.255.255​|​255.255.0.0 (/16)​|
|C|​192.0.0.0 – 223.255.255.255​|​255.255.255.0 (/24)​|
|D|​224.0.0.0 – 239.255.255.255​|Multicast|
|E|​240.0.0.0 – 255.255.255.255​|Experimental|

---

# Networking & Subnetting Cheatsheet

## IP Addressing

- IPv4 address: 32-bit identifier (e.g., 192.168.1.10​)
- Subnet mask: Divides network & host portions (e.g., 255.255.255.0​ for /24​)
- CIDR notation: /x​ represents subnet bits (e.g., /24​ = 24 network bits, 8 host bits)

## Subnet Masks & Usable Hosts

|CIDR|Subnet Mask|Total Addresses|Usable Hosts|
|---|---|---|---|
|/24|255.255.255.0|256|254|
|/25|255.255.255.128|128|126|
|/26|255.255.255.192|64|62|
|/27|255.255.255.224|32|30|
|/28|255.255.255.240|16|14|

- Formula for Usable Hosts: (2^host_bits) - 2​

## Network, Broadcast & Host Ranges

- Network Address: First address (all host bits 0​)
- Broadcast Address: Last address (all host bits 1​)
- Usable Host Range: Between network and broadcast addresses

Example (192.168.10.10/27​):

|Type|Binary Representation|Decimal|
|---|---|---|
|Network|​11000000.10101000.00001010.00000000​|​192.168.10.0​|
|Broadcast|​11000000.10101000.00001010.00011111​|​192.168.10.31​|
|Usable Range|​192.168.10.1 – 192.168.10.30​||

## Determining if Devices are on the Same Subnet

1. Convert IP addresses and subnet mask to binary.
2. AND each IP with the subnet mask to get the network address.
3. If network addresses match, they are in the same subnet.

Example:

|Device|IP Address|Subnet Mask|Network Address|
|---|---|---|---|
|PC A|192.168.1.10|255.255.255.0|192.168.1.0|
|PC B|192.168.1.50|255.255.255.0|192.168.1.0|
|Same subnet(no router needed)||||

## Private vs. Public IPs

|IP Range|Class|Type|
|---|---|---|
|​10.0.0.0/8​|A|Private|
|​172.16.0.0/12​|B|Private|
|​192.168.0.0/16​|C|Private|
|​1.1.1.1​|-|Public|
|​8.8.8.8​|-|Public|

Private IPs require NAT (Network Address Translation) for internet access.

## Default Gateway vs. Network Address

|Type|Address Example|
|---|---|
|Network|​192.168.1.0/24​|
|Gateway|​192.168.1.1​|

- Network Address: Identifies the subnet (not assigned to devices).
- Default Gateway: Routes traffic outside the subnet.

## Network Design for a Small Business (80 Users)

### 1. Determine Requirements

- 80 employees, each with 3 devices
- Estimated total: 250 devices

### 2. Choose Subnet

|Subnet|CIDR|Usable Hosts|
|---|---|---|
|​192.168.1.0/24​|/24|254|
|​192.168.0.0/23​|/23|510|

### 3. Assign Static/Dynamic IPs

|Device Type|Assignment|
|---|---|
|PCs & Phones|Dynamic (DHCP)|
|Printers, Servers, Routers|Static IPs|

### 4. Implement Security

- Use VLANs for department separation.
- Create a guest WiFi subnet (192.168.2.0/24​).
- Block unauthorized traffic between subnets.

## Quick Subnetting Process

1. Convert IP & Subnet Mask to Binary
2. AND IP & Subnet Mask to Find Network Address
3. Set all host bits to 1 for Broadcast Address
4. Calculate Usable Hosts
5. Assign Default Gateway

Example (192.168.10.10/27​):

Network: 192.168.10.0​  
Broadcast: 192.168.10.31​  
Usable Range: 192.168.10.1 – 192.168.10.30​

## FAQ & Common Questions

### Q: What happens if I assign an IP outside the subnet?

- The device won’t communicate with other devices in the network.

### Q: Why can’t I use the network address as a host?

- The network address identifies the subnet and cannot be assigned.

### Q: How do I pick the right subnet size?

- Use2^n - 2​formula to ensure enough host addresses.

## Quick Reference Table

|CIDR|Subnet Mask|Total IPs|Usable Hosts|Network Size|
|---|---|---|---|---|
|/30|255.255.255.252|4|2|Point-to-Point Links|
|/29|255.255.255.248|8|6|Small networks|
|/28|255.255.255.240|16|14|Small offices|
|/27|255.255.255.224|32|30|Medium networks|
|/26|255.255.255.192|64|62|Medium networks|
|/24|255.255.255.0|256|254|Standard LAN|