# Secure, Portable NixOS Setup Walkthrough

## Overview

This setup combines **machine identity verification** and **user authentication** to secure a portable NixOS system that runs from an external SSD. The system is designed to:

1. Identify the machine hosting the SSD.
2. Allow or restrict access based on whether the machine is trusted.
3. Verify the user interacting with the system to ensure authorized access.

---

## Components

### 1. Machine Identity (SSH-to-Age)

**Purpose**: To verify whether the machine hosting the SSD is trusted.

- **How It Works**:
    
    - Each machine is assigned a unique SSH host key, which acts as its identity.
        
    - The system maintains a list of trusted machines in trusted_hosts.yaml​.
        
    - When the SSD boots, the machine’s SSH host key is compared to the trusted list:
        
        - If the key matches: The machine is trusted.
        - If the key doesn’t match: The machine is untrusted, and the system boots in a restricted "safe mode."
- **Key Files**:
    
    - ​trusted_hosts.yaml​: Stores the public SSH host keys of trusted machines.
    - ​secrets/<machine_name>/​: Host-specific secrets encrypted with ssh-to-age​.
- **Benefits**:
    
    - Ensures secrets can only be accessed on machines you trust.
    - Prevents accidental exposure of sensitive data on untrusted machines.

---

### 2. User Authentication (U2F or Password)

**Purpose**: To verify that the user interacting with the system is authorized.

- **How It Works**:
    
    - Even on a trusted machine, user access to secrets requires an additional layer of verification:
        
        - **Password**: The user must provide a correct password to decrypt files.
        - **U2F Key**: For critical actions (e.g., admin access), the user must authenticate with a hardware token or an equivalent virtual key.
- **Key Configuration**:
    
    - **PAM Configuration**: Uses pam_u2f​ to enforce U2F-based authentication for admin actions (e.g., wheel​ group).
    - **Fallbacks**: Can rely on passwords if no U2F device is used.
- **Benefits**:
    
    - Protects against unauthorized access, even if the SSD is plugged into a trusted machine.
    - Adds a second layer of security for critical actions.

---

### 3. Secrets Management (sops​ + ssh-to-age​)

**Purpose**: To encrypt and securely manage sensitive data (e.g., API keys, credentials).

- **How It Works**:
    
    - Secrets are stored in machine-specific directories (e.g., secrets/draugr/​).
    - Each secret file is encrypted with sops​, using keys derived from the machine's SSH host key (via ssh-to-age​).
    - A central .sops.yaml​ file defines which machines can access each set of secrets.
- **Key Files**:
    
    - ​secrets/common/​: Shared secrets (e.g., NAS credentials).
    - ​secrets/<machine_name>/​: Host-specific secrets.
    - ​.sops.yaml​: Access rules for encrypting and decrypting secrets.
- **Benefits**:
    
    - Ensures secrets are only accessible to specific machines and users.
    - Centralized and automated management of encryption rules.

---

### 4. Boot Modes

**Purpose**: To adapt system behavior based on whether the machine is trusted.

- **Modes**:
    
    1. **Trusted Mode**:
        
        - Full access to secrets and functionality.
        - Only available if the machine’s SSH host key matches an entry in trusted_hosts.yaml​.
    2. **Safe Mode**:
        
        - Limited functionality with secrets locked.
        - Used when the machine is not trusted (e.g., unrecognized or public workstations).
- **How It Works**:
    
    - During boot, the system determines the machine’s trust level:
        
        - Compares the machine’s SSH host key to trusted_hosts.yaml​.
        - If matched, secrets are decrypted, and full functionality is enabled.
        - If not matched, the system boots with minimal access.

---

## Final Summary

### Purpose of the Setup

This setup creates a **secure, portable system** by combining:

1. **Machine Verification (SSH-to-Age)**:
    
    - Ensures secrets are only accessible on trusted machines.
2. **User Authentication (U2F + Password)**:
    
    - Adds a second layer of protection for critical actions.
3. **Granular Secrets Management**:
    
    - Encrypts secrets per machine and per user.

### How It Works

- **Trusted Machines**:
    
    - Identified by their SSH host keys.
    - Secrets are automatically unlocked, and full functionality is available.
- **Untrusted Machines**:
    
    - Enter a restricted "safe mode" where secrets are locked.
    - Secrets cannot be accessed until the machine is explicitly added to trusted_hosts.yaml​.
- **Users**:
    
    - Authenticate with a password or U2F device to decrypt secrets or perform privileged actions.

### Key Benefits

- **Layered Security**:
    
    - Protects secrets at both the machine and user level.
- **Portability**:
    
    - The SSD can be moved between machines while preserving security.
- **Scalability**:
    
    - Easily add new machines or users with automated encryption rules.

---

## Practical Example Workflow

1. **Setup**:
    
    - Generate SSH host keys for each machine and store them on the SSD.
    - Encrypt secrets using sops​ and configure access rules in .sops.yaml​.
    - Define trusted machines in trusted_hosts.yaml​.
2. **Boot**:
    
    - The SSD is plugged into a machine.
        
    - The system checks:
        
        - The machine’s SSH host key (machine verification).
        - The user’s credentials (password/U2F).
    - Based on trust, the system either:
        
        - Unlocks secrets and allows full functionality (trusted).
        - Boots in safe mode with limited functionality (untrusted).
3. **Add a New Machine**:
    
    - Generate a new SSH host key for the machine and store it on the SSD.
    - Update trusted_hosts.yaml​ to include the new machine.
    - Re-encrypt secrets to grant access to the new machine.

---

## Example File Structure

```plaintext
/mnt/external/
├── configuration.nix
├── secrets/
│   ├── common/
│   │   └── secrets.yaml
│   ├── incandescent/
│   │   ├── secrets.yaml
│   │   ├── sops.yaml
│   │   ├── ssh_host_ed25519_key
│   │   └── ssh_host_ed25519_key.pub
│   ├── solaris/
│   │   ├── secrets.yaml
│   │   ├── sops.yaml
│   │   ├── ssh_host_ed25519_key
│   │   └── ssh_host_ed25519_key.pub
├── .sops.yaml
├── trusted_hosts.yaml
```
