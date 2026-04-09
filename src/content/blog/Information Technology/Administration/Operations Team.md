## Tools of the trade:

- lsblk
- blkid
- tune2fs
- dumpe2fs
- mount
- lsof

### Disks, Filesystems, Mountpoints

Unmount, check, remount.

Tune2fs is ext4 only? (no btfs :C)

​/etc/mtab​ is where mount reads from (DO NOT EDIT THIS IN REAL TIME)

​fstab​ (m / fs) is only current system mounts

To skip reboot between mounts:

run mount -a​ and systemctl daemon-reload​

The -e and -f flags in ps -ef​ give 'every process', 'full format listing'.

​pstree​ another useful tool

---

## Working with Management:

- What did I do yesterday
- What am I working on today
- What blockers do I have for anything

### Agile methodology:

1. Individuals and itneractions over processes and tools
2. Working software over comprehensive documentation
3. Customer collaboration over contract negotiation
4. Responding to change over following a plan

---

# Setting up Homelabs -

I can potentially use oracle virtual box​ but I've been advised to proxmox and ncpnp (?) whatever i noted down earlier

Administration Tasks to maintain a group of systems:

- Building a LVM device from other block devices
- Creating a filesystem on a block device
- Mounting a filesystem on a Linux server
- Making a mount poitn permanent
- Building a software raid with mdadm
- Building a filesystem on a raid device.