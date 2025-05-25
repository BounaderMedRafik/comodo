## 1. Introduction

**openSUSE** is a powerful, stable, and versatile Linux distribution maintained by the openSUSE Project and sponsored by **SUSE**. It is known for its **professional-grade tooling**, **YaST configuration system**, and **strong emphasis on system administration** and automation.

openSUSE is ideal for both developers and system administrators, offering two main editions: **Leap** (stable) and **Tumbleweed** (rolling release).

---

## 2. Features

- **YaST**: Powerful system administration tool for configuring hardware, software, networking, and more.
- **Btrfs & Snapper**: Built-in support for snapshots and system rollback.
- **Zypper Package Manager**: Fast and robust package management system.
- **Secure by Default**: AppArmor, SELinux support, and regular security patches.
- **Two Editions**:

  - **Leap**: Stable, tested packages (based on SUSE Linux Enterprise)
  - **Tumbleweed**: Rolling release with bleeding-edge updates

- **Wide Desktop Support**: KDE Plasma, GNOME, XFCE, and more available.
- **Professional Grade**: Used by developers, enterprises, and system integrators.

---

## 3. Editions

| Edition    | Release Type    | Description                                     |
| ---------- | --------------- | ----------------------------------------------- |
| Leap       | Fixed Release   | Stable and suitable for production environments |
| Tumbleweed | Rolling Release | Continuously updated with the latest packages   |

Leap is based on **SUSE Linux Enterprise (SLE)**, while Tumbleweed is independently maintained and constantly evolving.

---

## 4. System Requirements

**Leap (Minimal):**

- 2GB RAM
- 3GB Disk (CLI), 10GB+ (GUI)

**Tumbleweed (Recommended):**

- 4GB+ RAM
- 40GB+ Disk
- Dual-core CPU or better

openSUSE supports multiple architectures, including x86_64, ARM, and PowerPC.

---

## 5. Installation Guide

### 1. Download ISO

- Visit [https://get.opensuse.org](https://get.opensuse.org)
- Choose **Leap** or **Tumbleweed**
- Download **DVD**, **NET**, or **Live** image

### 2. Create Bootable Media

- Use **Rufus**, **Etcher**, or `dd`:

```bash
sudo dd if=opensuse.iso of=/dev/sdX bs=4M status=progress && sync
```

### 3. Boot and Install

- Boot from USB
- Select “Installation” from boot menu
- Choose:

  - Language and keyboard layout
  - System role (e.g., desktop, server)
  - Partitioning scheme (Btrfs recommended for snapshots)
  - User creation

- YaST will guide you through the rest

---

## 6. Post-Installation Checklist

- Run full system update:

```bash
sudo zypper refresh
sudo zypper update
```

- Install common applications:

```bash
sudo zypper install vlc gimp firefox code
```

- Configure Snapper (if using Btrfs)
- Enable additional repositories if needed (e.g., Packman for multimedia codecs)

```bash
sudo zypper ar -cfp 90 http://packman.inode.at/suse/openSUSE_Tumbleweed/ packman
sudo zypper dup --from packman --allow-vendor-change
```

---

## 7. Package Management

openSUSE uses **Zypper** and **RPM** for package management.

### Common Zypper Commands

```bash
sudo zypper refresh             # Refresh repositories
sudo zypper search <pkg>        # Search for a package
sudo zypper install <pkg>       # Install package
sudo zypper remove <pkg>        # Remove package
sudo zypper update              # Update all packages
```

You can also use **YaST** GUI for managing software.

---

## 8. Useful Tools

| Tool            | Purpose                               |
| --------------- | ------------------------------------- |
| YaST            | System configuration and management   |
| Snapper         | Snapshot and rollback manager (Btrfs) |
| zypper          | Command-line package manager          |
| Discover        | GUI app store (Plasma Desktop)        |
| firewalld       | Network firewall tool                 |
| systemd-analyze | Boot time analysis                    |

---

## 9. Support and Community

- Website: [https://www.opensuse.org](https://www.opensuse.org)
- Forums: [https://forums.opensuse.org](https://forums.opensuse.org)
- Documentation: [https://doc.opensuse.org](https://doc.opensuse.org)
- Wiki: [https://en.opensuse.org](https://en.opensuse.org)
- Matrix/IRC: Channels listed on community portal

The openSUSE community is active, technical, and welcoming to newcomers.

---

## 10. Tips & Best Practices

- Use **Btrfs** with Snapper for system restore capabilities.
- Prefer **Leap** for stability; **Tumbleweed** for the latest software.
- Regularly update Tumbleweed to prevent breakage.
- Use **YaST** to manage everything from partitions to services.
- Enable **Packman repo** for full multimedia support.
- Try openQA (used by openSUSE for automatic testing) to understand how releases are validated.
