# CPU Detail & system Information     
The `ls` command is used to list directories and files, and it extends to system information commands like `lscpu`, `lsblk`, and `lsusb`.  

## CPU Information Commands:  
- ` cat /proc/cpuinfo | grep -i mhz `  → Displays CPU MHz. 
- ` lscpu | grep -i mhz` → Lists CPU details, filtering for MHz.  
- ` dmidecode `  → Displays system manufacturer details.  
- ` uname -m `  → Shows system architecture (e.g., x86_64).  
- ` dmesg | grep -i x86 `  → Checks system logs for x86 architecture. 

---

## Determining Physical vs. Virtual Machine  
To check if the system is running on a hypervisor (virtualized environment):  

- ` grep hypervisor /proc/cpuinfo `  →  Detects hypervisor presence.  
- ` dmidecode | grep -i virt `  → Identifies virtualization hardware.  
- ` virt-what `  → Red Hat tool for hypervisor detection.
- ` virt-who `  → Another Red Hat virtualization tool.  
- ` ps aux | grep -i virt `  → Lists virtualization processes (`ps aux` shows running processes).  
- ` dmesg | grep -i virt `  → Checks logs for virtualization drivers.  
- ` lsmod | grep -i virt `  → Lists loaded virtualization modules.  
- ` systemd-detect-virt `  → Systemd utility for detecting virtualization.  
- ` hostnamectl | grep -i chassis `  → Identifies system chassis type.  

---

## High CPU Load Testing  
To stress-test the CPU and generate high load:  

- ` uptime `  → Shows system uptime and load averages  
- ` stress `  → Simulates CPU load (install via `apt install -y stress`)  
- ` dd if=/dev/urandom of=/dev/null bs=1024k count=10000 | gzip -9 >> /dev/null ` → Generates 10GB of random data, compresses it, and discards it (single-threaded)  
- ` for i in $(seq 1 10); do <command> & done `  → Runs multiple threads  
- ` openssl speed -multi <num_cores> `  → Benchmarks CPU performance  

---

## Killing Services & Processes  
To terminate processes related to a specific keyword:  

- ` ps -ef | grep -i <process> `  → Lists processes  
- ` ps -ef | grep -i <process> | awk '{print $2}' | xargs kill -9 `  → Kills processes by PID  
