## VIRTUALIZATION
• Visualization is the logical abstraction of physical assets, such as the hardware platform, operating system (OS), storage devices, data stores, or network interfaces.
	▪ A simple analogy of virtualization is the picture-in-picture feature of some televisions and set top boxes because it displays a small virtual image on top of another television image, thereby allowing both programs to play simultaneously.

### Definitions
Virtualization simulates the interface to a physical object by one of four means:
1. Multiplexing. By creating multiple objects from one instance of a physical objects (a processor is multiplexed among a number of processes or threads)
2. Aggregation. By creating one virtual object from multiple physical objects (a number of physical storages such as DAS, NAS, SAN are aggregated into a virtual data store)
3. Emulation. By constructing a virtual object from a different type of physical object (a physical disk emulates a random access memory)
4. Multiplexing and emulation. Virtual memory with paging multiplexes real memory and disk, and a virtual address emulates a real address.

### Usages
![](99%20-%20Assets/2025/2025-08-17-16-08-14.png)
### Levels
• Virtualization can be implemented at various portions of the system architecture:
	▪ Processor virtualization enables a processor to be shared across multiple application instances.
	▪ Memory virtualization aggregates memory resources into a pool of single memory and manages the memory on behalf of the multiple applications using it. 
	▪ Network virtualization entails virtual IP management and segmentation.
	▪ Storage virtualization provides a layer of abstraction for the physical storage of data

![](99%20-%20Assets/2025/2025-08-17-16-08-22.png)

### Virtual machines (virtual servers)
• VMs are isolated instances of the application software and guest OS that run like a separate computer. A VM encapsulates the virtual hardware, virtual disks, and the meta data associated with the application.

### Hypervisor (virtual machine monitor, vmm)
• The hypervisor is responsible for managing the applications' OSs (guest OSs) and their use of the system resources (e.g., CPU,
memory, and storage). It supports the isolation and manage multiple VM’s running on the same host computer.
• A hypervisor presents the following resources to a VM:
▪ Logical CPU and memory: It manages the memory share and the CPU time share with other VMs.
▪ Logical storage blocks: presented from local storage or SAN storage.
▪ Logical Network resources: it presents each VM a logical network adapter that is either routed or bridged onto a physical Ethernet adapter.

A hypervisor is a small and specialised Operating system that runs on top of the base hardware. It creates and managed virtual machines (VMs). A hypervisor runs on a physical server (Host Machine) to allow physical resources to be partitioned into virtual resources (CPU, memory, Storage, and Networks)

• The functions of the hypervisor include:
	▪ Creating VMs.
	▪ Allocating “hardware resources” to VMs from the virtualized pool of hardware resources belonging to the physical server
	▪ Monitoring the status of the VMs.
	▪ Taking part in the movement of VMs from one system to another.

### Types of Hypervisors
- Hardware-based Virtualisation, it slots on top of Hardware directly.
- Operating SYstem-based Virtualisation: Hosted on top of a Host OS, that is itself on top of hte hardware. 
![](99%20-%20Assets/2025/2025-08-17-16-08-26.png)

• A hypervisor is generally limited to ONE physical server and can therefore ONLY create virtual images of that server.
• A hypervisor can ONLY assign virtual servers it generates to resource pools that reside on the SAME underlying PHYSICAL server.

### Virtual infrastructure manager-hypervisor
![](99%20-%20Assets/2025/2025-08-17-16-08-06.png)

Three pools:
- Virtual Servers
- Virtual Platforms
- Physical Servers

Virtual and Physical platforms congregate onto the virtualisation platform (into hypervisors which are connected to a VIM (Virtual Infrastructure Manager)

## STORAGE

### Hardware
• Direct Attached Storage (DAS): Storage system directly connected to a computing IT resource (physical server) using a host bus adapter (HBA).
• Storage Area Network (SAN): Physical data storage connected through a dedicated network and provide block-level data storage using industry standard protocol such as Small Computer System Interface (SCSI).
• Network-Attached Storage (NAS): Hard drive arrays connected to one or more servers using file-centric data access protocols such as Network File System (NFS) or Server Message Block (SMB)
yea
### • Virtualization
Provides a layer of abstraction for the physical storage of data at the device level (referred to as block virtualization) or at the file level (referred to as file virtualization).
• Storage virtualization allows:
	▪ Multiple systems to access the same storage and potentially utilize a distributed file system.
	▪ The storage to be physically separate from the local server, but appear to be accessible like DAS storage.
	▪ The logical partitioning of physical storage resources to be presented independently to each virtual machine.

## VMWARE 
### Infrastructure storage architecture
![](99%20-%20Assets/2025/2025-08-17-16-08-22-1.png)

### Storage architecture
• Consists of layers of abstraction that hide and manage the complexity and differences between physical storage subsystems and present simple standard storage elements to the virtual environment
	▪ To the applications and guest operating systems inside each VM, storage is presented as SCSI disks connected to a virtual Host Bus Adapter.
	▪ The virtual SCSI disks inside the VMs are provisioned from	Datastore elements in the data center.
## Network Virtualization

### PHYSICAL NETWORK (1)
![](99%20-%20Assets/2025/2025-08-17-16-08-96.png)
• Networking on a physical host
	▪ OS runs on bare-metal
	hardware
	▪ Networking stack (TCP/IP)
	▪ Network device driver
	▪ Network Interface Card (NIC)
	▪ Ethernet: Unique MAC (Media Access Control) address for identification and communication

### PHYSICAL NETWORK (2)
![](99%20-%20Assets/2025/2025-08-17-16-08-80.png)

• Switch: A device that connects multiple network segments
• It knows the MAC address of the NIC associated with each port
• It forwards frames based on their destination MAC addresses
	▪ Each Ethernet frame contains a destination and a source MAC address
	▪ When a port receives a frame, it read the frame’s destination MAC address
	▪ port4->port6
	▪ port1->port7

### VMWARE VIRTUAL NETWORKING CONCEPTSs
![](99%20-%20Assets/2025/2025-08-17-16-08-66.png)

## NETWORKING ARCHITECTURE
![](99%20-%20Assets/2025/2025-08-17-16-08-36.png)

