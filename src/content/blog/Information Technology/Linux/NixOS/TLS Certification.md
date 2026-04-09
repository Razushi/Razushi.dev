a generated tls cert so i need to add it in the settings for my server

How could i do so given that pure eval mode doesn't allow accessing /etc directly?

oh you generate it and it ends up going into /etc?  
instead of going to the nix store

i want to put it in /etc/certs  
yes  
hmm  
well i guess the nix store would be fine for the cert but but it also generates a private key which i don't want in the world readable nix store

sops-nix or agenix it ig

and also needs to be set in the server settings  
im wanting to make the private key get generated if it doesn't exist in /etc  
probably dumb idea

well nix isnt able to read the environment so you either always have to generate it using nix or like just do it imperatively i think

the security.acme module does this somehow tho im pretty sur  
https://github.com/NixOS/nixpkgs/blob/nixos-24.11/nixos/modules/security/acme/default.nix

been trying to figure out how but no luck so far  
it can do self signed certs which should generate a private key somewhere

you could use systemd-tmpfiles  
and just not clobber

i think youll probably have to end up doing some systemd stuff

i was only wanting to set a var in a let expression but i did /etc/path instead of "/etc/path"  
which was trying to eval it

---

how do i make nixos-rebuild not prompt for the user password multiple time when using --use-remote-sudo on a remote machine over ssh?  
I tried NIX_SSHOPTS="-tt" before running but it makes no difference