# DHCP Scenarios  
## Scenario 1: CentOS as DHCP Server, Windows as Client  

- `vim /etc/sysconfig/network-scripts/ifcfg-ens37` → configure LAN interface.  

  ```

  TYPE=Ethernet

  DEVICE=ens37

  NAME=ens37

  BOOTPROTO=none

  ONBOOT=yes

  IPADDR=10.0.2.1

  NETMASK=255.255.255.0

  DEFROUTE=no

  GATEWAY=10.0.2.1

  DNS1=1.1.1.1

  DNS2=2.2.2.2

  DOMAIN=feit.uts.edu.au

  ```  

- `nmcli c reload ens37` → reload connection.  

- `nmcli c up ens37` → bring interface up.  

  

### Install + Configure DHCP (CentOS)  

- `yum install -y dhcp-server` → install DHCP.  

- `cp /usr/share/doc/dhcp-server/dhcpd.conf.example /etc/dhcp/dhcpd.conf` → copy example config.  

- `vim /etc/dhcp/dhcpd.conf` → edit config:  

  ```

  authoritative;

  option domain-name "feit.uts.edu.au";

  option domain-name-servers 10.0.2.1;

  default-lease-time 600;

  max-lease-time 7200;

  

  subnet 10.0.2.0 netmask 255.255.255.0 {

    range 10.0.2.100 10.0.2.200;

    option routers 10.0.2.1;

    option broadcast-address 10.0.2.255;

  }

  

  host win19 {

    hardware ethernet 08:00:07:26:c0:a5;

    fixed-address 10.0.2.20;

  }

  ```  

- `systemctl enable --now dhcpd` → start + enable service.  

- `systemctl status dhcpd` → verify service status.  

  

### Verification (CentOS side)  

- `cat /var/lib/dhcpd/dhcpd.leases` → check assigned leases.  

- `tail -f /var/log/messages` → DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK exchange.  

- `arp -i ens37` → check MAC mapping.  

  

### Windows Client  

- Control Panel → Network → LAN Adapter → IPv4 → set to DHCP.  

- `ipconfig /renew` → request new lease.  

- `ipconfig /all` → confirm:  

  - IP from **10.0.2.100–200**  

  - Gateway: 10.0.2.1  

  - DNS: 10.0.2.1  

- `ping 10.0.2.1` → confirm connectivity.  

## Scenario 2: Windows as DHCP Server, CentOS as Client  

- Windows Server Manager → Add Roles → DHCP Server.  

- Complete DHCP configuration wizard.  

  

### Configure Scope (Windows)  

- DHCP Manager → IPv4 → New Scope.  

  - Name: `winrange`  

  - Range: `10.0.3.129–10.0.3.254`  

  - Subnet: `255.255.255.0`  

  - Router (Gateway): `10.0.3.1`  

  - DNS: `10.0.3.1` or desired DNS.  

  - Lease Duration: 1 min (test).  

  - Activate Scope: yes.  

  

### Reservation (Windows)  

- DHCP Manager → Scope → Reservations → add CentOS client:  

  - MAC address of CentOS NIC.  

  - Fixed IP: `10.0.3.30`.  

  

### Logs (Windows)  

- Event Viewer → Windows Logs → System → Filter → Event Sources = `DHCP-Server`.  

  

### CentOS Client Setup  

- `vim /etc/sysconfig/network-scripts/ifcfg-ens37` → set DHCP:  

```
  TYPE=Ethernet
  DEVICE=ens37
  BOOTPROTO=dhcp
  ONBOOT=yes
```

- `nmcli con up ens37` → bring up.  

### Verification (CentOS side)  

- `ip a show ens37` → check assigned IP (should be in `10.0.3.129–254`).  

- `cat /etc/resolv.conf` → check DNS.  

- `ip route` → verify default gateway.  

- `ping 10.0.3.1` → confirm connectivity.  

- `tail -f /var/log/messages` → confirm DHCP lease assignment.