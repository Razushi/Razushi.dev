# Centos
## timezone
`date -u` 
`/usr/share/zoneinfo/`

`ps –ef | grep chronyd` # running?
`systemctl status chronyd`

`chronyc sources` # lsits conf ntp servers and status
`chronyc tracking` # current sync status
`chronyc add server time.uts.edu.au` # adds server

`date 123123591999.00`

`systemctl restart chronyd` will fix this, or running `date` a few times

`/etc/chrony.conf

# Windows

Control Panel/Date and Time > Internet Time 
Choose internet time server: time.microsoft -> 2.pool.ntp.org