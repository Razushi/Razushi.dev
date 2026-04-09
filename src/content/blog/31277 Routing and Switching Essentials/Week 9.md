### Focus Questions  
**ACL**
1. Where is it best to place a standard ACL? Why? What about an extended ACL?  
2. Write the address wildcard mask pair 172.30.16.17 0.0.15.255 in its simplest form.  
3. What ranges of addresses do the keywords host and any select?  
4. Write an ACL which will allow all traffic from the network 192.168.4.0/22 to reach the network 192.168.10.32/27, except for traffic from 192.168.5.10.  
5. In the Three Ps Rule for using ACLs, one of the Ps is ‘protocols’. To which of the following protocols does it refer: IP, IPv6, ICMP, TCP, UDP? Why does the Rule not include the other protocols?  
6. What is the effect if you misspell the name of an ACL when you apply it to an interface?  Why?  
7. How can you add extra lines into the middle of a numbered ACL?  
8. The following ACL does not operate as its writer expected. Suggest why.  
- access-list 4 deny 172.16.0.0 0.0.255.255  
- access-list 4 permit 172.16.25.0 0.0.0.255

**NAT**
1. What is the difference between an inside local address, an inside global address, an outside local address and an outside global address?  
2. When is using static NAT a relevant option?  
3. What are the limitations of using dynamic NAT with the exit interface? How could these limitations be overcome? What problems are there with the various solutions?  
4. How many public addresses would you need with dynamic NAT? With dynamic NAT with overload?  
5. What happens when an internal host wants to use dynamic NAT but there are a number of other hosts already using NAT?  
6. What is the best tool to identify the range of internal addresses which can be mapped by dynamic NAT? Why is it more relevant than other tools?  
7. What happens if two internal users select the same port number for a communication which requires PAT?  
8. Describe how you would use NAT to enable a number of external users to use different application on an internal server.  
9. When would NAT be used with IPv6? What other options are there?  
10. Look at the following which is part of the output from `debug ip nat`:
```
*Oct 7 21:20:42.379: NAT : s=172.17.5.10->111.15.8.46, d=104.15.4.7 [2413]  
*Oct 7 21:20:42.387: NAT*: s=104.15.4.7, d=111.15.8.46->172.17.5.10 [5558]  
*Oct 7 21:20:43.383: NAT*: s=172.17.5.10->111.15.8.46, d=104.15.4.7 [2414]  
*Oct 7 21:20:43.391: NAT*: s=104.15.4.7, d=111.15.8.46->172.17.5.10 [5559]  
*Oct 7 21:20:44.379: NAT*: s=172.17.5.10->111.15.8.46, d=104.15.4.7 [2415]  
*Oct 7 21:20:44.391: NAT*: s=104.15.4.7, d=111.15.8.46->172.17.5.10 [5560]  
*Oct 07 21:20:45.379: NAT*: s=172.17.5.10->111.15.8.46, d=104.15.4.7 [2416]  
```
a. What is the inside local address? The inside global address? The outside local address? The outside global address? Are any of these addresses the same? Why?  
b. In which direction does the packet travel in each line?  
c. What is the significance of the number 2413? The number 5558?
d. Explain why the first line contains just NAT but on subsequent lines the entry contains NAT*