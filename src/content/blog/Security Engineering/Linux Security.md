xcpng - is the name, not sure what it is... 

![](99%20-%20Assets/2025/2025-03-13-05-03-75.png)

![](99%20-%20Assets/2025/2025-03-13-05-03-99.png)


![](99%20-%20Assets/2025/2025-03-13-05-03-58.png)


Its the idea that when I build a HPC and secure it, I want to 

![](99%20-%20Assets/2025/2025-03-13-05-03-93.png)




```
while true; do sar -n DEV 1 10; sar -n TCP,ETCP 1 10; iostat -d 1 10; iostat -c 1 10; iostat -xz 1 10; cat /tmp/somefile; sleep 10 ; done
```

![](99%20-%20Assets/2025/2025-03-13-05-03-86.png)

![](99%20-%20Assets/2025/2025-03-13-05-03-42.png)

BRER Rabbit, being thrown in the briar patch


### Resouces
check captnemo .in he has some good monitoring/security/homelab stuff.

### Grafana (Cloud)
you can use grafana even without a seperate laptop

go to the grafana cloud free tier

you could just have a windows box at home, use teh grafana cloud free tier


grafana, but use `telegraph` to send stuff up to `graphite` *assuming cloud grafana* your workflow needs to change being up i nthe cloud

- graphite is a time series database
- mimir is another tool to use?

look at agents on your local system to send stuff out toteh cloud 
![](99%20-%20Assets/2025/2025-03-13-05-03-91.png)
Certificate Management for a Monitering tookl, I understand X509 certificate and PKI infrastructure, read some blog posts and actually implement it (x509 and PKI(?) are that...Ceritifcate Authority's (CAs) and stuff??? ) 

CA purpose:
veryify you are who you are, and then nonrepudiation which is you cant say it wasnt you, it has to be you, so i can only be rtalking to you, i cant be talkign to anybody else thats like you, it must be you. (gotta be able to talk to it in the interview or display or show off)


they trust a third party. so you do a asymmetic key exchange via a trusted certificate authority. tthen you start talking.

### job?
if you look up linux admin and linux engineer, most of hte time you'll see "Monitering" and "troubleshooting" in the job titles

Certificate Management for a Monitering tookl, I understand X509 certificate and PKI infrastructure, read some blog posts and actually implement it (x509 and PKI(?) are that...Ceritifcate Authority's (CAs) and stuff??? ) 

If you do security stuff then after a contract you'll get retained alot easier, but you also have to fill out the reports.... but you also get paid for it so.... 

### Wheelbarrow competitions / Golfing
"Can you do some sort or filter of all this data in the lowest amount of characters possible" and it would always be perl that was the best, and then early 2010 it swapped to Ruby. 

Someone would post a bunch of data, Who can sort it down to htem ost dsicreet sets of this or this, who can organise it so its all the three characters, all the four characters, etc 

### Scripts:
"github...aliciasykes. such great bash scripts" Check. 

 Perl: 
entry for averaging numbers in a file: perl -ple'$s+=$_}{$_=$s/$.' numbers.txt (untested)

### PPAs
Would it be better making PPAs or my own packages?
in the enterprise side, if you build things (like kernals and labs) then theres no value in the average engineers day, unless you build kernals for like open source reasons or for fun. a company wants stability, they dont want you baking your own stuff. 

Most people won't need to build kernels unless you're doing custom hardware or embedded really

Sometimes you do need to build your own packages, so like

HPC are almost always airgapped, so you have to bring stuff in tyhrough staging nodes or give it to IT sec and they're going to scan it.

Like, all the documentation, all the buid, that configs the new version of slurm or whatever.

dont manually install it + like the 4 packages then on the deploy put hte RPM on teh type of server for each type. 

build it into a rpm package on one machine so you can push it to all the other machines.
You dont want to build packages because your're almost voiding a warranty fro mthe people

like, in the ansible code, check for compatability etc, 

So like, example: Infiniband drivers : OFED | this tool needs to be built for each kernal.

So you could build it on each machine and spend it on 20 minutes each different kernal, or build a catchall rpm on one machine and push it out and install it in about 45s on all.

HOWEVER, big example, on this one cluster with 1260 nodes, building it manually was better because it was a 'Franken cluster' meaning there was alot of edge cases and legacy kernals, so really not worth bothering to enumerating all the things, better to simply do more kernals in parralel and just tell people that like, hey: these 3 kernals or nodes here absolutely suck. 



sometimes systems engineering is not as fun because we dont get to do the cool engineering, we simply get to plug inth eway we bought, and if we plug it in any other way then it voids warranty. 


just do whats supported for the goverment, (non-starter), 
To have any goverment system run on something thats not supported by a third partty vendor, its a non-starter, 
the support team needs a support ticket up or its a non-starter, 

Okok, uhh, So, any stuff thats done for the goverment, needs a support team that has a support ticker service or else its a non-starter (conversation)

---

### Ansible
https://www.youtube.com/@JeffGeerling

