The idea is that all traffic to a specific port, in the example it would be port 443 for http/https traffic, would be routed through a a Transparent Intercepting Proxy with additional traffic mirroring functionality.It also hit me today, that this is probably something that would be used in Security for monitoring or if a malicious actor wanted to mirror network traffic with a mitm attack :wow_amaze:This is great since there is no client configuration required since this is done at the network level with iptables + NAT on the router.This is because, I can setup the proxy server to not terminate the SSL/TLS connection, it will just forward the encrypted traffic to the destination server & clients without inspecting or modifying it. Since networking is handled with iptables & NAT on the router, there is nothing that needs to be done for any device, aside from maybe isolating parts of the network with VLANs....in fact, I could apply this concept network wide and add content filters and restrictions this way.

The tl;dr; Traffic to specific domains is filtered and mirrored in such a way at the network level that it appears as though when visiting those filtered domains, I'm on Device A, when in fact I'm on Device B, It's basically so that I can use my personal device to access domains for work. Device A is work computer with VPN, I want to be able to visit hidden.domain.org for example that's only accessible on the work VPN, but I don't want to have to be on my work device.I ssh into my work computer and work in a terminal.The transparent proxy would just make it so that as far as my work VPN is concerned, when I access the domains that I'm filtering, I'm on my work computer on the work VPN...when in fact I am on my personal device

​![](99%20-%20Assets/2025/2025-03-09-04-03-10-1.png)

- Transparent Intercepting Proxy:
    
    - routes and mirrors network traffic without client conf.
- iptables + NAT:
    
    - needed, for routing traffic through the proxy.
    - allows network-wide application without per-device setup.
- SSL/TLS Handling:
    
    - Proxy server, set to pass encrypted traffic without inspection/modification.
- VLANs (overengineering time):
    
    - isolate network segments for added security and control.