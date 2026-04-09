## Checking RAM Information

To list memory details, use the following commands:

- `cat /proc/meminfo` → Displays detailed memory information.
- `free` → Shows memory usage.
    - `free -m` → Displays memory in megabytes.
    - `free -g` → Displays memory in gigabytes.
    - `free -h` → Displays human-readable memory output.
    - `free -ht` → Includes total memory in the output.
- `top` → Displays real-time memory and CPU usage.
- `dmidecode` → Provides hardware details.
    - `dmidecode -t memory` → Shows detailed memory information.
    - `dmidecode --type memory` → Alternative command for memory info.
- `dmesg | grep -i ram` → Checks logs for RAM-related messages.

---

## Monitoring RAM Usage

To analyze real-time and historical RAM usage:

- `top` → Displays active processes and memory consumption.
- `sysstat` (install via `apt install sysstat`).
    - `sar -r 1 5` → Captures memory stats every second for five iterations.
- `memstat` (install via `apt install memstat`) → Lists memory usage by process.
- `iostat` (may require package installation) → Displays CPU and device I/O statistics.

---

## Checking Swap Space

To determine available swap memory:

- `swapon -a` → Checks if swap is enabled.
- `top` → Displays swap usage along with RAM statistics.

---

## Freeing Cached Memory

To clear cached memory:

- `sync` → Ensures all disk writes are flushed.
- `echo 3 > /proc/sys/vm/drop_caches` → Clears page cache, dentries, and inodes.
    - `echo 1` → Clears page cache only.
    - `echo 2` → Clears dentries and inodes.
    - `echo 3` → Clears all caches (nuclear option).
- `free -m` → Displays memory statistics before and after clearing cache.
- `sync; sync; sync; echo 3 > /proc/sys/vm/drop_caches` → Ensures cache clearing is executed.

> **Note:** The `stress` tool is not POSIX-compliant.

---

## Checking Disk Usage in Root Partition

To analyze disk space usage:

- `df -h /` → Displays used and available space in `/`.
- `df -i /` → Shows inode usage (useful for checking file count limits).
- `du -sh /` → Displays the total size of `/`.

---

## Checking Space Usage in Home Directory

- `cd /root` → Switches to root directory.
- `df -h .` → Shows space usage in the current directory.
- `df -h ~` → Displays usage for the home directory.

---

## Checking Directory Space Usage

To check the total space used in the current directory:

- `du -sh .` → Displays total disk usage for the current directory.

---

## Checking Active Processes in Current Directory

To list processes interacting with the current directory:

- `echo $$` → Displays the current shell’s PID.
- `lsof` → Lists open files and associated processes.
    - `lsof .` → Shows open files in the current directory.
    - `lsof /root` → Lists open files in `/root`.
    - `lsof ~` → Shows open files in the home directory.
    - `lsof $HOME` → Displays files opened in `$HOME`.
- `ps -ef | grep -i <PID>` → Filters running processes by PID.