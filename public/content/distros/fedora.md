## 1. Introduction

Fedora is a cutting-edge, open-source Linux distribution developed and maintained by the Fedora Project, primarily sponsored by Red Hat (an IBM subsidiary). Known for integrating the latest technologies while maintaining stability and security, Fedora is widely used by developers, sysadmins, and Linux enthusiasts.

Fedora emphasizes **innovation**, **openness**, and **freedom**, often serving as a proving ground for technologies that later appear in Red Hat Enterprise Linux (RHEL).

---

## 2. Features

- **Up-to-Date**: Includes the latest Linux kernel and software versions.
- **Modularity**: Install different versions of the same software using module streams.
- **SELinux**: Security-enhanced Linux enabled by default for strong system protection.
- **Wayland Display Server**: Default display protocol on most editions.
- **Flatpak Support**: Built-in support for sandboxed apps from Flathub.
- **GNOME Desktop**: Polished, vanilla GNOME experience in the flagship Workstation edition.

---

## 3. Editions

Fedora offers several **official editions**, tailored to specific use cases:

| Edition            | Purpose                                          | Desktop Environment |
| ------------------ | ------------------------------------------------ | ------------------- |
| Fedora Workstation | For desktops and laptops                         | GNOME               |
| Fedora Server      | Headless server deployments                      | N/A (CLI)           |
| Fedora IoT         | For Internet of Things (IoT) devices             | N/A (CLI)           |
| Fedora Silverblue  | Immutable desktop OS with atomic updates         | GNOME               |
| Fedora CoreOS      | Minimal, container-focused OS                    | N/A (CLI)           |
| Fedora Spins       | Alternative desktops: KDE, Xfce, LXQt, MATE, etc | Varies              |
| Fedora Labs        | Custom tools for science, design, gaming, etc.   | Varies              |

---

## 4. System Requirements

**Minimum (Workstation):**

- 2GB RAM
- 20GB disk space
- 1GHz+ dual-core processor
- 1024x768 screen resolution

**Recommended:**

- 4GB+ RAM
- 40GB+ storage
- Modern multi-core CPU
- UEFI firmware

---

## 5. Installation Guide

### 1. Download ISO

- Visit [https://getfedora.org](https://getfedora.org)
- Choose the appropriate edition (most users will select **Workstation**)

### 2. Create Bootable Media

Use any of the following:

- **Rufus** (Windows)
- **Fedora Media Writer** (Official, Windows/macOS/Linux)
- **Etcher** or **dd** command (Linux/macOS)

### 3. Boot and Install

- Boot from USB drive
- Choose “Start Fedora”
- Launch **Anaconda Installer**
- Follow steps for language, disk selection, timezone, and user setup

---

## 6. Post-Installation Checklist

- Update the system:

  ```bash
  sudo dnf update
  ```

- Enable RPM Fusion repositories (for codecs, drivers, proprietary software):

  ```bash
  sudo dnf install \
    https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
    https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
  ```

- Install media codecs:

  ```bash
  sudo dnf install gstreamer1-plugins-base gstreamer1-plugins-good gstreamer1-plugins-bad-free gstreamer1-plugins-ugly gstreamer1-libav ffmpeg
  ```

- Set up Flatpak (optional):

  ```bash
  flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
  ```

---

## 7. Package Management

- **DNF (Dandified YUM)** is the default package manager:

  ```bash
  sudo dnf install <package>
  sudo dnf remove <package>
  sudo dnf update
  ```

- **Flatpak** support is built in:

  ```bash
  flatpak install flathub <package>
  ```

- **RPM** can also be used for installing standalone `.rpm` files:

  ```bash
  sudo rpm -ivh <package>.rpm
  ```

---

## 8. Useful Tools

| Tool                   | Purpose                                 |
| ---------------------- | --------------------------------------- |
| GNOME Software         | GUI package manager                     |
| FirewallD              | Manage firewalls easily                 |
| SELinux Troubleshooter | Helps diagnose SELinux issues           |
| Cockpit                | Web-based system administration         |
| Toolbox                | Containerized development environments  |
| DNFDragora             | GUI frontend for DNF (optional install) |

---

## 9. Support and Community

- Official Website: [https://getfedora.org](https://getfedora.org)
- Fedora Forums: [https://ask.fedoraproject.org](https://ask.fedoraproject.org)
- Reddit: [/r/Fedora](https://reddit.com/r/Fedora)
- IRC/Matrix Channels: Available on [https://fedoraproject.org/wiki/Communicating_and_getting_help](https://fedoraproject.org/wiki/Communicating_and_getting_help)
- Documentation: [https://docs.fedoraproject.org](https://docs.fedoraproject.org)

---

## 10. Tips & Best Practices

- Stick with **LTS-like** Fedora Workstation releases (twice a year) for stability
- Use **RPM Fusion** repos for media playback and proprietary drivers
- Keep your system updated regularly with `dnf upgrade`
- Use **Flatpak** or **Toolbox** for sandboxed app environments
- Enable **Night Light** and Wayland scaling for better UX on modern displays
- Learn basic SELinux handling if running servers or secure environments
