## 1. Introduction

**Gentoo Linux** is a powerful and flexible source-based Linux distribution that allows users to tailor their systems for maximum performance and control. Known for its **Portage** package management system and emphasis on compilation from source, Gentoo is ideal for advanced users who want to deeply customize their system and learn how Linux works under the hood.

Gentoo is not aimed at beginners but rewards users with a deep understanding of Linux, optimization options, and unparalleled flexibility.

---

## 2. Features

- **Source-Based**: Packages are compiled from source with user-defined options.
- **USE Flags**: Fine-grained control over package features.
- **Portage System**: A powerful, scriptable package management system.
- **Rolling Release**: Continuously updated system with the latest software.
- **Highly Customizable**: Build a minimal system or a feature-rich desktop.
- **Architecture Support**: Supports multiple architectures including amd64, arm, ppc, and more.
- **Systemd-Free Option**: Choose OpenRC or systemd as init system.

---

## 3. Installation Variants

Gentoo does not have traditional editions but can be installed with different profiles and configurations:

| Variant            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| Minimal Install CD | Lightweight base to begin manual installation        |
| Stage 3 Tarballs   | Starting point for building your own Gentoo          |
| Gentoo LiveGUI ISO | Live environment with graphical installer (optional) |

Most users install from the **Minimal CD** or **Stage 3**, building everything manually using the Gentoo Handbook.

---

## 4. System Requirements

Gentoo can run on nearly any hardware configuration, as the system is built from source. Requirements depend on what you build, but a general baseline is:

**Minimum:**

- x86_64-compatible CPU
- 512 MB RAM
- 1.5 GB disk space (bare minimal install)

**Recommended:**

- Dual-core 2 GHz+ CPU
- 4 GB+ RAM
- 20 GB+ disk space (with GUI and common packages)

Compiling packages like web browsers or KDE will require significantly more resources.

---

## 5. Installation Guide (Summary)

Installing Gentoo involves several manual steps. Here’s a high-level overview:

### 1. Boot into Live Environment

- Download Minimal ISO or LiveGUI ISO: [https://www.gentoo.org/downloads/](https://www.gentoo.org/downloads/)
- Boot from USB or CD

### 2. Partition Disks

Use tools like `fdisk`, `parted`, or `gdisk` to create partitions (EFI/BIOS, root, swap, etc.)

### 3. Download & Extract Stage 3

```bash
wget <stage3-tarball-url>
tar xpvf stage3-*.tar.xz --xattrs-include='*.*' --numeric-owner
```

### 4. Chroot into Gentoo Environment

```bash
mount --types proc /proc /mnt/gentoo/proc
mount --rbind /sys /mnt/gentoo/sys
mount --make-rslave /mnt/gentoo/sys
chroot /mnt/gentoo /bin/bash
source /etc/profile
```

### 5. Configure & Install

- Configure Portage (`make.conf`, USE flags)
- Choose and compile kernel (e.g., `genkernel`)
- Install system tools, networking, bootloader (e.g., GRUB)

Follow the full [Gentoo Handbook](https://wiki.gentoo.org/wiki/Handbook:Main_Page) for detailed steps.

---

## 6. Post-Installation Checklist

- Set timezone and locale
- Configure network settings
- Add regular user
- Enable desired services (e.g., `dhcpcd`, `sshd`)
- Start with a minimal window manager or install full desktop (e.g., KDE, GNOME)

Install with:

```bash
emerge --ask kde-plasma/plasma-meta
```

---

## 7. Package Management

Gentoo uses **Portage**, its native package management system.

### Basic Commands:

```bash
emerge --ask <package>        # Install a package
emerge --ask --depclean       # Remove unused packages
emerge --sync                 # Sync Portage tree
emerge --update --deep @world # System update
```

### USE Flags

USE flags determine which features are included when compiling packages. These can be defined globally in `/etc/portage/make.conf` or per-package.

Example:

```bash
USE="alsa pulseaudio bluetooth"
```

---

## 8. Useful Tools

| Tool             | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `equery`         | View package info (requires `gentoolkit`)   |
| `genkernel`      | Automate kernel configuration and build     |
| `eselect`        | Manage kernel, OpenGL, profiles, and more   |
| `revdep-rebuild` | Fix broken library dependencies             |
| `layman`         | Manage custom overlays (extra repositories) |

---

## 9. Support and Community

- Official Website: [https://www.gentoo.org](https://www.gentoo.org)
- Handbook: [https://wiki.gentoo.org/wiki/Handbook](https://wiki.gentoo.org/wiki/Handbook)
- Wiki: [https://wiki.gentoo.org](https://wiki.gentoo.org)
- Forums: [https://forums.gentoo.org](https://forums.gentoo.org)
- Reddit: [r/Gentoo](https://www.reddit.com/r/Gentoo/)
- IRC: `#gentoo` on Libera.Chat

Gentoo has one of the most comprehensive wikis in the Linux world.

---

## 10. Tips & Best Practices

- Start with the official **Handbook** and read carefully.
- Use **genkernel** initially if you're not ready for manual kernel builds.
- Regularly run `emerge --sync` and `emerge -avuDN @world` to keep your system updated.
- Monitor `/var/log/portage` and use `equery` to inspect package metadata.
- Learn to use `USE` flags effectively for fine control over features.
