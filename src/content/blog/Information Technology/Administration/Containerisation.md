---
title: Containerisation
description: Containers vs bare metal, systemd services, and sandboxing with DynamicUser.
summary: When to containerise, systemd DynamicUser sandboxing, and deployment patterns.
pubDate: 2024-10-05
---

bare metal, systemd services, DynamicUser=true

yes, systemd's DynamicUser = true​ handles sandboxing.

systemd is op, >syscall filtering, or simple ip filtering on a per-service basis