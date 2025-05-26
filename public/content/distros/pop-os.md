## 1. Introduction

**Pop!\_OS** is a user-friendly, developer-focused Linux distribution created by **System76**, a hardware manufacturer specializing in Linux-powered machines. Based on **Ubuntu**, Pop!\_OS is optimized for performance, productivity, and a polished out-of-the-box experience. It’s particularly favored by developers, gamers, and creative professionals.

Pop!\_OS is known for its clean interface, excellent hardware support, and the custom **Pop Shell** tiling window manager.

---

## 2. Features

- **Pop Shell**: Tiling window manager with keyboard-driven navigation.
- **Ubuntu-Based**: Access to Ubuntu’s massive repository and community.
- **Hybrid Graphics Support**: Seamless switching between NVIDIA and Intel/AMD GPUs.
- **System76 Scheduler**: Process scheduler optimized for responsiveness.
- **Flatpak Integration**: Support for modern app distribution.
- **Full-Disk Encryption**: Enabled by default in the installer.
- **HiDPI Support**: Automatic scaling for high-resolution displays.
- **Minimal Pre-installed Software**: Clean and bloat-free system.

---

## 3. Editions

Pop!\_OS offers two main ISOs:

| Edition   | Description                                         |
| --------- | --------------------------------------------------- |
| Intel/AMD | Optimized for most laptops and desktops             |
| NVIDIA    | Includes proprietary NVIDIA drivers for hybrid GPUs |

Both editions come with the **COSMIC** desktop environment, built on GNOME with customizations.

---

## 4. System Requirements

**Minimum:**

- 4GB RAM
- 16GB storage
- 64-bit processor

**Recommended:**

- 8GB RAM or more
- 20GB+ SSD
- Modern dual-core or quad-core CPU
- Dedicated NVIDIA/AMD GPU (for GPU workloads)

---

## 5. Installation Guide

### 1. Download ISO

- Visit [https://pop.system76.com](https://pop.system76.com)
- Choose the Intel/AMD or NVIDIA ISO
- Download the appropriate version (22.04 LTS is current as of writing)

### 2. Create Bootable USB

Use tools like:

- **Etcher**
- **Rufus**
- **GNOME Disks**
- `dd` (Linux command-line)

```bash
sudo dd if=pop-os.iso of=/dev/sdX bs=4M status=progress && sync
```

### 3. Install Pop!\_OS

- Boot from the USB drive
- Select “Clean Install” or “Custom Install”
- Choose full-disk encryption (optional)
- Set up username and password
- Reboot and enjoy your new system

---

## 6. Post-Installation Checklist

- Run system updates:

```bash
sudo apt update && sudo apt full-upgrade
```

- Enable Flatpak support:

```bash
sudo apt install flatpak gnome-software-plugin-flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

- Install additional apps:

```bash
flatpak install flathub com.spotify.Client org.gimp.GIMP com.visualstudio.code
```

- Customize keyboard shortcuts and tiling behavior in Pop Shell settings

---

## 7. Package Management

Pop!\_OS uses **APT** (Advanced Package Tool) and supports **Flatpak** for sandboxed apps.

### Common Commands

```bash
sudo apt update            # Update package lists
sudo apt upgrade           # Upgrade all packages
sudo apt install <pkg>     # Install a package
sudo apt remove <pkg>      # Remove a package
```

Pop!\_Shop also provides a user-friendly GUI for managing software and Flatpak apps.

---

## 8. Useful Tools

| Tool               | Purpose                            |
| ------------------ | ---------------------------------- |
| Pop Shell          | Tiling window manager              |
| Pop!\_Shop         | GUI software store                 |
| Flatpak            | Universal app distribution         |
| Firmware Manager   | Update firmware from the OS        |
| System76 Scheduler | CPU prioritization for performance |
| GNOME Settings     | Manage devices, themes, extensions |

---

## 9. Support and Community

- Website: [https://pop.system76.com](https://pop.system76.com)
- Knowledge Base: [https://support.system76.com](https://support.system76.com)
- Reddit: [r/pop_os](https://reddit.com/r/pop_os)
- GitHub: [https://github.com/pop-os](https://github.com/pop-os)
- Matrix/IRC: Community chat linked from website

System76 provides professional support for their hardware and software, while the community is active and responsive for general use cases.

---

## 10. Tips & Best Practices

- Learn and use Pop Shell shortcuts for max productivity (`Super + Enter`, `Super + /`, etc.).
- Enable Flatpak and Flathub for wider software availability.
- Use System76 Scheduler if doing development or heavy multitasking.
- Set up Timeshift or backup tools if you tinker heavily with the system.
- Use the NVIDIA ISO if you plan to game or do GPU-intensive work.
