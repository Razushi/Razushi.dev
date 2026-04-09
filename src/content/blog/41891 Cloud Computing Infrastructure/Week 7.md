# Lab

**Note:** In task 4 Create a host failure event, when a host is shutdown, the vCenter may report “the failover process failed”. You may also see the following waring: "vSphere HA agent on this host could not reach isolation address '172.20.20.2'" reported on ESXi hosts.

The workaround is:

a. Login to the hosts (172.20.20.51 and 172.20.20.52) and go to Configure Management Network, select IPv4 Configuration. Set the Default Gateway to 172.20.20.1.

b. Restart the ESXi hosts (if you don’t restart the hosts, synchronization with vCenter may take a long time).

Tutorial video (recorded in 2021):