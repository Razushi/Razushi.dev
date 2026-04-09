## Part 1: VLSM IP addressing  
a. Use the IP address range 192.168.0.0/24 for Branch and 172.10.0.0/24 for HQ. Left hand side of the  internal network is Branch, right hand side of the internal network is HQ.  
b. Design the addresses for all internal subnets with VLSM, conserve as much addresses as possible.  

Number of hosts in each LANs are as follows:  
• Branch LAN-A: VLAN 10: 25 hosts  
• Branch LAN-A: VLAN 20: 35 hosts  
• Branch LAN-A: VLAN 99: 4 hosts  
• Branch LAN-B: 4 hosts  
• HQ LAN-C: 10 hosts  
• HQ LAN-D: 100 hosts  

Note: WAN links should be considered when you design your IP addressing. WAN links between Branch and HQ can use either Branch or HQ’s address range. Wireless Router uses static IP address for the Internet port to R6.  

Note: Follow the WLAN part for the HQ LAN-E addresses design.  
c. Assign the first valid host address in each subnet to the Default Gateway.  
d. Assign the 2 nd valid host address in each subnet to the Host PC or Switch.  
e. Some IP addresses that are pre-defined or marked as DHCP. Enter the IP addresses in your design to blanks the IP address table above.

## Part 2: Construct the network  
### Step 1: Basics.  
a. Choose suitable routers, switches and end devices, add interfaces to the devices if needed.  
b. Cable the devices.  
c. Configure device name.  
d. Configure IP addresses on the interfaces following the IP addressing table. Configure default gateway where needed.  

Note: Some interfaces should be changed to obtain IP address from DHCP after implementing DHCP.  

e. Disable DNS lookup on the routers.  

### Step 2: Configure Routers (R1, R2, and R3) on Branch  
a. Assign class as the privileged EXEC encrypted password.  
b. Assign cisco as console password, enable login and enable synchronization with the debug and Cisco IOS software output and prevents these messages from interrupting your keyboard input.  
c. Assign cisco as vty password, enable login and enable synchronization with the debug and Cisco IOS software output and prevents these messages from interrupting your keyboard input.  
d. Encrypt the clear text passwords.
e. Create a banner that warns anyone accessing the device that unauthorized access is prohibited. 
f. Enable SSH on R3, create a user with username admin and secret adminpass.  

## Part 3: Configure Static Routing to and from Internet  
Configure static routing between Internet and R1 with the next hop IP address. Ensure ALL internal addresses (including translated) are routed.  

Note: your static routing may need to be revised after implementing NAT.  

## Part 4: Configure OSPF  
### Step 1: Activate OSPF.  
Use process ID 10 for OSPF activation on all routers. 

a. Activate OSPF by configuring the interfaces of the network devices in the Branch and HQ networks, where required.  
b. Activate OSPF using network statements and inverse masks on the routers.  

### Step 2: Configure router IDs.  
Configure router IDs on the multiaccess network routers as follows:  
R1: 9.9.9.9  
R2: 8.8.8.8   
R3: 7.7.7.7  

You will need to restart the OSPF process after changing the router IDs.  

### Step 3: Customise OSPF operation.  
a. Configure router R1 with the highest OSPF interface priority so that it will always be the designated router of the multiaccess network.  
b. On router R1, configure a default route to the Internet with the next hop IP address.  
c. Automatically distribute the default route to all routers in the network.  
d. Configure OSPF so that routing updates are not sent into networks where OSPF updates are not required.  

## Part 5: Configure VLAN and Inter-VLAN Routing  
### Step 1: Configure VLANs on Sw1  
a. Configure VLANs: VLAN 10, 20 and 99, with names, students, staff and management respectively  
b. Configure trunk link to allow eligible VLANs and with native VLAN 99.  
c. Assign access ports to VLAN 10 and 20, design your own VLAN and interfaces mapping. Describe your design in your report.  
### Step 2: Configure Inter-VLAN Routing on R2  
a. Configure subinterfaces.  
b. Assign IP addresses to the subinterfaces according to your design in Part 1.
c. Use the VLAN number as the subinterface ID  

## Part 6: Configure NAT  
In this part of the skills assessment, you will configure static and dynamic NAT at the network edge.  
### Step 1: Configure static NAT  
Configure static NAT to translate the address of the Host D on HQ LAN D to the External Host using the public address 209.165.200.228. Verify that the translations are occurring.  
### Step 2: Configure dynamic PAT.  
a. Create access list 1 to allow all addresses in the networks in Branch LAN-A, including VLAN 10 and VLAN 20.  
b. Create a NAT pool named POOL-1. It should use address in the range 209.165.200.226-209.165.200.227.  
c. Configure NAT to dynamically use the addresses in the pool for all traffic entering and exiting the company network. Remember that it is likely that more than three hosts will be accessing traffic on the Internet. Verify that the translations are occurring.  

## Part 7: Configure ACLs  
Configure access control lists to meet the following requirements. All ACLs should be placed in the most efficient location possible according to the guidelines specified in the curriculum.  
a. Create a named standard access list to explicitly prevent all external traffic accessing the SSH lines on R3. Name the list VTY-BLOCK. All addresses on the Branch LAN-B network only should be allowed to access the VTY lines.  
b. Create a numbered standard ACL to prevent all hosts on HQ LAN-D from accessing HQ LAN-C. Use 10 as the number for the list.  

## Part 8: Configure DHCP  
### Step 1: Configure R4 as DHCP server  
a. Configure a DHCP address pool for Branch LAN-A VLAN 10, with the addresses designed in Part 1, use pool name POOL_LAV10, exclude the first 5 valid host addresses, set Host A as obtaining address from DHCP.  
b. Configure a DHCP address pool for HQ LAN-C, with the addresses designed in Part 1, use pool name POOL_LC, exclude the first 5 valid host addresses, set Host C as obtaining address from DHCP.  
### Step 2: Configure DHCP relay agent  
a. Choose the routers that can should be the DHCP relay agents for Branch LAN-A VLAN 10 and HQ LAN-C.  
b. Configure DHCP relay agents to forward all DHCP requests to the R4 DHCP server. Choose the suitable interfaces for Branch LAN-A VLAN 10 and HQ LAN-C to configure the IP helper addresses.

## Part 9: Configure WLAN  
### Step 1: Configure Internet Port (Port to R6)  
Configure the Internet port of the Wireless Router following the IP addresses designed in Part 1.  

### Step 2: Configure DHCP on Wireless Router  
a. Use the DHCP pool 192.168.1.0/24, excluding the first 5 host addresses.  
b. Use the first valid host address as the Default Gateway.  
c. Set the maximum number of users as 100.  

### Step 3: Configure Wireless basics and security  
a. Configure the Wireless SSID to LANE for only 2.4GHz  
b. Use WPA2 for the security mode  
c. AES for the encryption method  
d. Use password cisco. You can choose another password, please note it in your report  
e. Configure the Mobile host to connect to Wireless Router

### Branch (192.168.0.0/24):

| Subnet Name  | Hosts | Subnet Needed | CIDR | Subnet Address   | Host Range  | Gateway IP (1st host) |
| ------------ | ----- | ------------- | ---- | ---------------- | ----------- | --------------------- |
| VLAN 20      | 35    | 64            | /26  | 192.168.0.0/26   | .1 – .62    | 192.168.0.1           |
| VLAN 10      | 25    | 32            | /27  | 192.168.0.64/27  | .65 – .94   | 192.168.0.65          |
| VLAN 99      | 4     | 8             | /29  | 192.168.0.96/29  | .97 – .102  | 192.168.0.97          |
| Branch LAN-B | 4     | 8             | /29  | 192.168.0.104/29 | .105 – .110 | 192.168.0.105         |
| WAN R1–R2    | 2     | 4             | /30  | 192.168.0.112/30 | .113 – .114 | -                     |
| WAN R2–R3    | 2     | 4             | /30  | 192.168.0.116/30 | .117 – .118 | -                     |


### HQ (172.10.0.0/24):

| Subnet Name     | Hosts | Subnet Needed | CIDR | Subnet Address  | Host Range  | Gateway IP (1st host) |
| --------------- | ----- | ------------- | ---- | --------------- | ----------- | --------------------- |
| HQ LAN-D        | 100   | 128           | /25  | 172.10.0.0/25   | .1 – .126   | 172.10.0.1            |
| HQ LAN-C        | 10    | 16            | /28  | 172.10.0.128/28 | .129 – .142 | 172.10.0.129          |
| WAN R3–R4       | 2     | 4             | /30  | 172.10.0.144/30 | .145 – .146 | -                     |
| WAN R4–R5       | 2     | 4             | /30  | 172.10.0.148/30 | .149 – .150 | -                     |
| WAN R5–R6       | 2     | 4             | /30  | 172.10.0.152/30 | .153 – .154 | -                     |
| WAN R6–Wireless | 2     | 4             | /30  | 172.10.0.156/30 | .157 – .158 | -                     |

### Table 1

| Device Name | Interface/Default Gateway | IP address/prefix   |
| ----------- | ------------------------- | ------------------- |
| Internet    | G0/0                      | 138.25.88.85/30     |
|             | S0/1/1                    | 209.165.200.1/30    |
| R1          | G0/0                      | N/A (subinterfaces) |
|             | S0/1/0                    | 192.168.0.113/30    |
|             | S0/1/1                    | 209.165.200.2/30    |
| R2          | G0/0.10                   | 192.168.0.65/27     |
|             | G0/0.20                   | 192.168.0.1/26      |
|             | G0/0.99                   | 192.168.0.97/29     |
|             | G0/1                      | 192.168.0.117/30    |
| R3          | G0/0                      | 192.168.0.105/29    |
|             | G0/1                      | 172.10.0.145/30     |
### Table 2

| Device Name   | Interface/Default Gateway | IP address/prefix   |
| ------------- | ------------------------- | ------------------- |
| R4            | S0/1/0                    | 172.10.0.146/30     |
|               | S0/1/1                    | 172.10.0.149/30     |
|               | S0/0/0                    | 172.10.0.150/30     |
| R5            | G0/0                      | 172.10.0.153/30     |
|               | S0/1/0                    | 172.10.0.154/30     |
|               | S0/1/1                    | 172.10.0.157/30     |
| R6            | G0/0                      | 172.10.0.129/28     |
|               | G0/1                      | 172.10.0.1/25       |
|               | S0/1/0                    | 172.10.0.153/30     |
|               | S0/1/1                    | 172.10.0.157/30     |
| Sw1           | VLAN 99                   | 192.168.0.98/29     |
|               | Default Gateway           | 192.168.0.97        |
| Host A1       | NIC VLAN 10               | DHCP (192.168.0.65) |
| Host A2       | NIC VLAN 20               | DHCP (192.168.0.1)  |
|               | Default Gateway           | Assigned via DHCP   |
| Host B        | NIC                       | 192.168.0.106/29    |
|               | Default Gateway           | 192.168.0.105       |
| Host C        | NIC                       | DHCP                |
| Host D        | NIC                       | 172.10.0.2/25       |
|               | Default Gateway           | 172.10.0.1          |
| Mobile Host   | Wireless NIC              | DHCP                |
| External Host | NIC                       | 138.25.88.86/30     |


Router (Internet) to PC (External Host) | G0/0 -> Fa0
Router (Internet) to Router (R1) | S0/1/1 -> S0/1/1
Router (R1) to Switch (Sw4) | G0/0 -> Fa0/1

Switch (Sw4) to Router (R2) | Fa0/2 -> G0/1
Router (R2) to Switch (Sw1) | G0/0 -> Fa0/1
// R2 uses `G0/0` explicitly for VLAN subinterfaces (Inter-VLAN routing). R2 uses `G0/1` explicitly for backbone uplink to Sw4.

Switch (Sw1) to PC (Host A1) | Fa0/2 -> Fa0
Switch (Sw1) to PC (Host A2) | Fa0/3 -> Fa0

Switch (Sw4) to Router (R3) | Fa0/3 -> G0/1
Router (R3) to Switch (Sw2) | G0/0 -> Fa0/1

Switch (Sw2) to PC (Host B) | Fa0/2 -> Fa0

Router (R1) to Router (R4) | S0/1/0 -> S0/1/0
Router (R4) to Router (R5) | S0/1/1 -> S0/1/0
Router (R5) to Router (R6) | S0/1/1 -> S0/1/0
Router (R6) to Router (R4) | S0/1/1 -> S0/0/0

Router (R5) to Switch (Sw3) | G0/0 -> Fa0/1
Switch (Sw3) to PC (Host C) | Fa0/2 -> Fa0

Router (R6) to Switch (Sw5) | G0/1 -> Fa0/1
Switch (Sw5) to PC (Host D) | Fa0/2 -> Fa0

Router (R6) to Wireless Router | G0/0 -> Internet port
// Explicitly Internet, Not Ethernet 1/2...5 


# VLSM Validation Table

## Branch Subnets

| Binary Network                        | Network           | Gateway       | First Host    | Last Host     | Broadcast     |
| ------------------------------------- | ----------------- | ------------- | ------------- | ------------- | ------------- |
| `11000000.10101000.00000000.00000000` | 192.168.0.0 /26   | 192.168.0.1   | 192.168.0.1   | 192.168.0.62  | 192.168.0.63  |
| `11000000.10101000.00000000.01000000` | 192.168.0.64 /27  | 192.168.0.65  | 192.168.0.65  | 192.168.0.94  | 192.168.0.95  |
| `11000000.10101000.00000000.01100000` | 192.168.0.96 /29  | 192.168.0.97  | 192.168.0.97  | 192.168.0.102 | 192.168.0.103 |
| `11000000.10101000.00000000.01101000` | 192.168.0.104 /29 | 192.168.0.105 | 192.168.0.105 | 192.168.0.110 | 192.168.0.111 |
| `11000000.10101000.00000000.01110000` | 192.168.0.112 /30 | –             | 192.168.0.113 | 192.168.0.114 | 192.168.0.115 |
| `11000000.10101000.00000000.01110100` | 192.168.0.116 /30 | –             | 192.168.0.117 | 192.168.0.118 | 192.168.0.119 |
|                                       |                   |               |               |               |               |

## HQ Subnets

| Binary Network                        | Network          | Gateway      | First Host   | Last Host    | Broadcast    |
| ------------------------------------- | ---------------- | ------------ | ------------ | ------------ | ------------ |
| `10101100.00001010.00000000.00000000` | 172.10.0.0 /25   | 172.10.0.1   | 172.10.0.1   | 172.10.0.126 | 172.10.0.127 |
| `10101100.00001010.00000000.10000000` | 172.10.0.128 /28 | 172.10.0.129 | 172.10.0.129 | 172.10.0.142 | 172.10.0.143 |
| `10101100.00001010.00000000.10010000` | 172.10.0.144 /30 | –            | 172.10.0.145 | 172.10.0.146 | 172.10.0.147 |
| `10101100.00001010.00000000.10010100` | 172.10.0.148 /30 | –            | 172.10.0.149 | 172.10.0.150 | 172.10.0.151 |
| `10101100.00001010.00000000.10011000` | 172.10.0.152 /30 | –            | 172.10.0.153 | 172.10.0.154 | 172.10.0.155 |
| `10101100.00001010.00000000.10011100` | 172.10.0.156 /30 | –            | 172.10.0.157 | 172.10.0.158 | 172.10.0.159 |
|                                       |                  |              |              |              |              |

---
