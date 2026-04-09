### Focus Questions  
1. Write the commands which enable a PC to acquire an address using DHCP.  
2. By default, where must the DHCP server for a PC be? How can we overcome this restriction?  
3. Why might we exclude some addresses from the range of addresses in a DHCP pool?  
4. What is wrong with the following configuration of a DHCP pool? What problems will this cause?  
```
ip dhcp excluded-address 172.16.4.1 172.16.4.5  
ip dhcp pool MY-POOL  
network 172.16.4.0 255.255.255.0  
domain-name cisco.com  
dns-server 172.16.5.1  
```
5. When testing a system, why should you try applying a static IP address to a PC before you try to acquire an address using DHCP for it?  
6. DHCP is not often used with IPv6. Why?