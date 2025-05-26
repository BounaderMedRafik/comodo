### Interacting with Disk Partitions: Basic Syntax

The basic syntax of the `fdisk` command involves specifying the device file of the disk you want to work with:

```bash
sudo fdisk <device>
```

Here, `<device>` is the path to the disk device file (e.g., `/dev/sda`, `/dev/sdb`, `/dev/nvme0n1`). Once executed, `fdisk` enters an interactive command mode where you can perform various partitioning operations.

### The Interactive Mode: Navigating Partition Management

When you run `fdisk <device>`, you'll see a prompt like `Command (m for help):`. Here, you can enter single-letter commands to perform actions. Some of the most common commands include:

- **`m`:** Displays the help menu, listing available commands.
- **`p`:** Prints the current partition table. This shows the existing partitions, their sizes, types, and boot flags.
- **`n`:** Creates a new partition. You'll be prompted for the partition type (primary or extended), the partition number, and the first and last sectors (or size).
- **`d`:** Deletes a partition. You'll be prompted for the partition number to delete.
- **`t`:** Changes a partition's system ID (type). This is used to indicate the intended filesystem type (e.g., Linux, swap, Windows). You'll be prompted for the partition number and the hex code for the new type (use `L` to list available types).
- **`a`:** Toggles the bootable flag on a partition. You'll be prompted for the partition number. Only one primary partition can typically be marked as bootable.
- **`w`:** Writes the changes to the disk and exits. **This is a destructive operation, so be absolutely sure of your changes before using `w`.**
- **`q`:** Quits without saving any changes.

### Illustrative Examples: Common Partitioning Tasks

Let's walk through some common `fdisk` operations in the interactive mode (assuming you've run `sudo fdisk /dev/sdb`):

1.  **Viewing the current partition table:**

    At the `Command (m for help):` prompt, type `p` and press Enter. `fdisk` will display the existing partitions on `/dev/sdb`.

2.  **Creating a new primary partition:**

    At the prompt, type `n` and press Enter.
    You'll be asked for the partition type: `p` for primary, `e` for extended. Type `p` and press Enter.
    You'll be asked for the partition number (usually a number from 1 to 4 for primary partitions). Enter a number and press Enter.
    You'll be asked for the first sector (you can usually accept the default). Press Enter.
    You'll be asked for the last sector or size. You can specify a size using `+` followed by the size (e.g., `+10G` for a 10GB partition). Enter the desired size and press Enter.

3.  **Changing the partition type:**

    At the prompt, type `t` and press Enter.
    You'll be asked for the partition number to change. Enter the number and press Enter.
    You'll be asked for the hex code. Type `L` to list the available types and their codes. Find the code for the desired filesystem type (e.g., `83` for Linux) and enter it. Press Enter.

4.  **Setting the bootable flag:**

    At the prompt, type `a` and press Enter.
    You'll be asked for the partition number to toggle the bootable flag. Enter the number and press Enter. An asterisk `*` in the output of `p` indicates a bootable partition.

5.  **Writing changes and exiting:**

    **WARNING: This will modify the disk partition table. Ensure your changes are correct.**
    At the prompt, type `w` and press Enter. `fdisk` will write the changes to the disk and exit. You might need to reboot your system for the kernel to recognize the new partition table.

6.  **Quitting without saving:**

    If you make changes you don't want to keep, type `q` and press Enter. `fdisk` will exit without writing any changes to the disk.

### Command-Line Options (Non-Interactive)

`fdisk` also supports some command-line options to perform actions non-interactively, although this is less common for complex partitioning tasks:

- **`-l` or `--list`:** Lists the partition tables for the specified devices and then exits.

  ```bash
  sudo fdisk -l /dev/sda
  ```

- **`-s <partition>` or `--size <partition>`:** Displays the size of the specified partition in blocks.

  ```bash
  sudo fdisk -s /dev/sda1
  ```

- **`-b <sectorsize>` or `--sector-size=<sectorsize>`:** Specifies the sector size (usually 512 bytes, 4096 for advanced format drives).

- **`-u <units>` or `--units=<units>`:** Specifies the units to use for displaying sizes (e.g., `cylinders`, `sectors`).

### Practical Applications: Disk Management

`fdisk` is used for various disk management tasks:

- **Creating New Partitions:** Setting up new partitions on unpartitioned disks or creating additional partitions on existing disks.
- **Deleting Partitions:** Removing unwanted partitions.
- **Changing Partition Types:** Indicating the intended use of a partition (e.g., for Linux filesystems, swap space, or other operating systems).
- **Setting the Bootable Partition:** Designating which partition the system should try to boot from.
- **Examining Existing Partition Tables:** Viewing the layout and details of partitions on a disk.

### Limitations: MBR and GPT

`fdisk` is primarily designed for working with **MBR (Master Boot Record)** partition tables. MBR has several limitations, including:

- A maximum of four primary partitions (or three primary and one extended partition, which can contain logical partitions).
- Limited disk size support (typically up to 2 terabytes).

For disks larger than 2 terabytes or when you need more than four primary partitions, you should use tools that support **GPT (GUID Partition Table)**, such as `parted` or `gparted`. `fdisk` might offer limited support for GPT in some newer versions, but it's not its primary focus.

### Warnings and Precautions

- **Data Loss Risk:** Incorrectly modifying partition tables can lead to permanent data loss. **Always double-check your commands before writing changes (`w`).**
- **Backup Data:** It's highly recommended to back up any important data before making changes to disk partitions.
- **Understand Partitioning Concepts:** Have a basic understanding of primary, extended, and logical partitions before using `fdisk`.
- **Use with Caution:** `fdisk` is a powerful tool that directly manipulates the disk structure. Use it with care.

### Conclusion: The Classic Disk Partitioner

The `fdisk` command is a classic and still relevant tool for managing disk partitions, especially on systems using MBR partition tables. While it has limitations compared to newer GPT-aware tools, its interactive mode provides a straightforward way to view and manipulate partitions. Understanding its commands and the risks involved is essential for anyone needing to manage disk storage at a low level on a Unix-like system. Remember to exercise caution and always back up your data before making changes to partition tables.
