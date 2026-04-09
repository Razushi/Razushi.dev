## Files
- `/etc/passwd` → user account info  
  - `username:password:uid:gid:comment:homedir:shell`  
- `/etc/shadow` → hashed password + expiry data  
  - `username:password:lastchg:min:max:warn:inactive:expires`  
  - `password` field:  
    - `x` → shadow used  
    - `!` or `*` → account locked  
    - blank `::` → no password required  
- `/etc/group` → groups + members  
  - `groupname:password:gid:userlist`  


## User Management
- `useradd peter -c "Peter Griffin" -s /bin/zsh` → add user with full name + zsh shell.  
- `passwd peter` → set password.  
- `id peter` → check UID/GID + groups.  
- `usermod -s /sbin/nologin brian` → lock shell.  
- `usermod -L brian` / `usermod -U brian` → lock/unlock account.  
- `vipw -s` → safely edit `/etc/shadow`.  
- `userdel -r jane` → delete user + home dir + mail spool.  
- Manual creation (Lois):  
  - `vipw` → edit `/etc/passwd`.  
  - `vigr` → edit `/etc/group`.  
  - `passwd lois` → set password.  
  - `mkdir /home/lois && cp -r /etc/skel/. /home/lois` → create + copy skel.  
  - `chown -R lois:lois /home/lois`.  

### Password & Aging
- `chage -E $(date -d "+5 days" +%F) peter` → expire in 5 days.  
- `chage -M 5 stewie` → force pw change every 5 days.  
- `chage -l username` → list password aging settings.  

## Group Management
- `groupadd family` → create group.  
- `usermod -G family stewie` → add to group (supplementary).  
- `usermod -g family stewie` → set default group.  
- `groupmod -n newname family` → rename group.  
- `groupdel family` → delete group.  

### Switching Groups
- `id stewie` → verify groups.  
- `newgrp family` → switch current group (spawns subshell).  
- `exit` → return to previous shell.  

## Important Files
- `/etc/skel/` → skeleton files copied into new home dirs.  
- `/etc/issue` → login banner (TTY).  
- `/etc/issue.net` → remote login banner (telnet).  
- `/etc/motd` → message of the day after login.  

## Windows Server (Local Users/Groups)
### GUI
- **Server Manager → Tools → Computer Management → Local Users and Groups**  
  - Create users: peter, stewie, brian, lois.  
  - Create group: family.  
  - Assign membership with “Add” → search objects → Check Names.  

### Command Line
- `net user /add chris "password"` → create user.  
- `net user` → list users.  
- `net user chris` → show info.  
- `wmic useraccount where "name='chris'"` → query account.  

### PowerShell
- `New-LocalUser -Name "joe" -FullName "Joe Swanson"` → create user.  
- `Get-LocalUser` → list users.  
- `Disable-LocalUser joe` / `Enable-LocalUser joe`.  

## Test / Verification
- `ssh username@localhost` → login test.  
- `id username` → check groups.  
- `ps` → check PID of current shell (useful after `newgrp`).  
- `ls -ld /home/lois` → confirm owner/group.  
- `ls -la /home/lois` → confirm skeleton files copied.  