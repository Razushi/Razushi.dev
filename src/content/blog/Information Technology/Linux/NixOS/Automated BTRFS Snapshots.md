Just for home dir, 

```nix
{
  config,
  pkgs,
  lib,
  ...
}: let
  inherit (lib.modules) mkIf;
  inherit (lib.attrsets) filterAttrs;

  btrfsMounts = filterAttrs (_: mount: mount.fsType == "btrfs") config.fileSystems;
  hasHomeSubvolume = (filterAttrs (_: mount: mount.mountPoint == "/home") btrfsMounts) != {};
in {
  config = mkIf (btrfsMounts != {}) {
    systemd = {
      # Create a snapshots directory. It will be used to store periodic snapshots
      # created via btfs subvolume snapshot. Those snapshots will linger for 14 days
      # before they are dropped via systemd-tmpfiles settings.
      # NOTE: persisting too many backups at once can, and usually does, lead into
      # intensive CPU usage due to btrfs-cleaner having to clean up the snapshots.
      # This is why we limit the number of snapshots to 14 days.
      tmpfiles.settings."10-snapshots"."/var/lib/snapshots".d = {
        user = "root";
        group = "root";
        age = "14d";
      };

      # Run snapshot job on a weekly timer. Persistent = true implies that the job
      # will attempt to cover for missed jobs that were supposed to run during downtime.
      timers."snapshot-home" = {
        enable = hasHomeSubvolume;
        description = "snapshot home subvolume";
        wantedBy = ["multi-user.target"];
        timerConfig = {
          OnCalendar = "weekly";
          Persistent = true;
        };
      };

      # Create a service job that will run if the host has a /home subvolume.
      # It will create a snapshot of the /home subvolume and store it in
      # /var/lib/snapshots with a timestamp in its filename.
      # Timestamp format is as follows:
      #  %s - seconds since the Epoch (1970-01-01 00:00 UTC)
      services."snapshot-home" = {
        enable = hasHomeSubvolume;
        path = [pkgs.btrfs-progs pkgs.coreutils];
        script = ''
          set -euo pipefail

          SNAPSHOT_DIR="/var/lib/snapshots"
          HOME_SUBVOL="/home"

          date=$(date +%s)
          path="/var/lib/snapshots/snapshot-$date"

          if [ -r "$HOME_SUBVOL" ]; then
            # Initiate backup of the /home subvolume
            # the data will be read-only.
            btrfs subvolume snapshot "$HOME_SUBVOL" "$path"
          echo
          else
            echo "Snapshot service was unable to read $HOME_SUBVOL"
          fi
        '';

        serviceConfig = {
          CPUSchedulingPolicy = "idle";
          IOSchedulingClass = "idle";
          Nice = 19;
          Type = "simple";

          # Security
          # We do not protect FS related options as BTRFS is very picky about its access
          # to the target directory and FS.
          ProtectControlGroups = true;
          ProtectKernelModules = true;
          ProtectKernelLogs = true;
          ProtectKernelTunables = true;
          ProtectHostname = true;
          ProtectSystem = "strict";
          ProtectHome = false;

          ReadWriteDirectories = ["/var/lib/snapshots"];

          PrivateNetwork = true;
          PrivateTmp = true;
          PrivateDevices = true;

          RestrictAddressFamilies = "none";
          RestrictFileSystems = "btrfs";
          RestrictRealtime = true;

          LockPersonality = true;
          MemoryDenyWriteExecute = true;
          CapabilityBoundingSet = "CAP_DAC_OVERRIDE CAP_FOWNER CAP_CHOWN CAP_FSETID CAP_SETFCAP CAP_SYS_ADMIN CAP_SYS_MODULE CAP_IPC_LOCK CAP_SYS_NICE";

          StandardOutput = "journal";
          StandardError = "journal";
        };
      };
    };
  };
}
```