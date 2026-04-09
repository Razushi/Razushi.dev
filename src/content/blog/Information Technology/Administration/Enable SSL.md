# ativerc []](https://ativerc.com/)

[Home](https://ativerc.com/) [Posts](https://ativerc.com/posts/) [Projects](https://ativerc.com/projects/)

# Intra LAN SSL via Let's Encrypt DNS-01 Challenge and Delegated Domain Control Validation

_2025-02-18_

This post goes over the how I enabled SSL on my intra-LAN network using certificates issued by the Let's Encrypt CA via the DNS-01 challenge.

Let's Encrypt allows you to automate the process of getting certificates issued by the [ACME protocol](https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment). ACME allows you to automate the process of certificate issuance with a CA that supports it.

The entire process starts with installing a [ACME client](https://letsencrypt.org/docs/client-options/) on my Pi Zero and having it start the process. On the first run, the client will generate a asymmetric key-pair to authenticate with the ACME server. The certificates can be obtained by either one of 2 challenges: HTTP-01 and DNS-01.

HTTP-01 needs the server to be accessible over the internet, and on initiating the process,

- the ACME server run by Let's Encrypt will provide a token to the client
- and then the client will keep a file containing the token and a thumbprint of the key at some URL on the server `http://<YOUR_DOMAIN>/.well-known/acme-challenge/<TOKEN>`.
- Then ACME client will tell Let'sEncrypt that it's completed the challenge.
- Let's Encrypt will try to fetch that file from the server from multiple places around the internet.
- If the validation checks are completed successfully, the certificate is issued.

### DNS-01 Challenge

Since, my PiZero is not accessible over the internet, I had to use the DNS-01 challenge.

In the DNS-01 challenge, instead of putting a file with a pre-shared known token on the HTTP Webserver, the domain owner needs to put a DNS TXT record in domain's zone file with the known token.

Firstly, this brings up a problem with automating the entire certificate issuing process. In order for the ACME client to update the TXT record automatically,the user needs to store the DNS provider's API login credentials on the server. Unless the credentials are limited in scope, this can wreak havoc if that server is breached, since with the credentials an attacker can point the domains to their own servers, intercepting emails, traffic from legitimate users, etc.

To mitigate this there are a [couple of ways](https://www.eff.org/deeplinks/2018/02/technical-deep-dive-securing-automation-acme-dns-challenge-validation) with one of them being Delegated Domain Control Validation.

## Delegated Domain Control Validation:

Instead of the user or ACME client setting a TXT record via the DNS provider credentials, in Delegated Domain Control Validation, the following things happen:

1. The CA provider provides a token to the ACME client
2. Before the first certificate issuance, the user is asked by the ACME client to set a CNAME record for a throwaway subdomain (`_some-challenge.userdomain.com`)to point to an intermediary's domain where the actual TXT record is set.

So, the user just for the first time, will set a CNAME as follows:

```
_some-challenge.usersubdomain.com. IN CNAME "<intermediary-random-token>.dcv.intermediary.example.>"
```

3. The intermediary will set TXT record at this particular subdomain of theirs to the provider's random token given to it by the ACME Client:

```
<intermediary-random-token>.dcv.intermediary.example. TXT "<provider-random-token>"
```

4. Upon being informed that the challenge is complete, the CA provider looks up the TXT record at `_some-challenge.userdomain.com`, finds the CNAME record there, follows it to `<intermediary-random-token>.dcv.intermediary.example.` wherein it finds the TXT record with the random token it provided to the client initially: `<provider-random-token>`, which confirms that the user owns the domain.

In my case, the client was Certbot, the CA provider was Let's Encrypt and the intermediary was one provided by Let's Encrypt: `auth.acme-dns.io.`.

If I could have run NGINX Proxy Manager, this probably would have been so much easier, but I wouldn't have learnt as much. There is more to learn though. The IETF specs on this is huge.

#### Future Stuff:

- Right now, I have to set path to the SSL certs in my NGINX instance upon renewal, I think. Although, I believe reading somewhere that Certbot will just make a softlink to the new ones.
- I need to add a diagram for the above steps.
- I need to move away from https://github.com/joohoi/acme-dns-certbot-joohoi/ to https://github.com/acme-dns/acme-dns-client, since the first one has been [surpassed](https://github.com/joohoi/acme-dns-certbot-joohoi/issues/33).

Resources:

- https://www.ietf.org/archive/id/draft-ietf-dnsop-domain-verification-techniques-03.html#name-cname-records
- https://blog.apnic.net/2023/07/03/delegated-domain-verification/
- https://www.eff.org/deeplinks/2018/02/technical-deep-dive-securing-automation-acme-dns-challenge-validation
- https://eff-certbot.readthedocs.io/en/latest/using.html
- https://en.wikipedia.org/wiki/Automatic_Certificate_Management_Environment

A few implementations by others:

- https://blog.zespre.com/lets-encrypt-dns-challenge/ (So, well written!)
- https://notthebe.ee/blog/easy-ssl-in-homelab-dns01/

[](https://github.com/Ativerc "GitHub")