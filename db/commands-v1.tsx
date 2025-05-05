import { Command } from "./types";

export const commands: Command[] = [
  {
    command: "ls",
    description: "List directory contents",
    content: "/content/ls.md",
  },
  {
    command: "cd",
    description: "Change the current directory",
    content: "/content/cd.md",
  },
  {
    command: "pwd",
    description: "Print the current working directory",
    content: "/content/pwd.md",
  },
  {
    command: "mkdir",
    description: "Create a new directory",
    content: "/content/mkdir.md",
  },
  {
    command: "rmdir",
    description: "Remove an empty directory",
    content: "/content/rmdir.md",
  },
  {
    command: "rm",
    description: "Remove files or directories",
    content: "/content/rm.md",
  },
  {
    command: "cp",
    description: "Copy files or directories",
    content: "/content/cp.md",
  },
  {
    command: "mv",
    description: "Move or rename files or directories",
    content: "/content/mv.md",
  },
  {
    command: "touch",
    description: "Change file timestamps or create empty files",
    content: "/content/touch.md",
  },
  {
    command: "cat",
    description: "Concatenate and display file contents",
    content: "/content/cat.md",
  },
  {
    command: "more",
    description: "View file contents one screen at a time",
    content: "/content/more.md",
  },
  {
    command: "less",
    description: "View file contents one screen at a time (more advanced)",
    content: "/content/less.md",
  },
  {
    command: "head",
    description: "Display the first few lines of a file",
    content: "/content/head.md",
  },
  {
    command: "tail",
    description: "Display the last few lines of a file",
    content: "/content/tail.md",
  },
  {
    command: "grep",
    description: "Search for a pattern in files",
    content: "/content/grep.md",
  },
  {
    command: "find",
    description: "Search for files and directories",
    content: "/content/find.md",
  },
  {
    command: "locate",
    description: "Find files by name",
    content: "/content/locate.md",
  },
  {
    command: "which",
    description: "Locate a command",
    content: "/content/which.md",
  },
  {
    command: "man",
    description: "Display the manual for a command",
    content: "/content/man.md",
  },
  {
    command: "chmod",
    description: "Change file permissions",
    content: "/content/chmod.md",
  },
  {
    command: "chown",
    description: "Change file ownership",
    content: "/content/chown.md",
  },
  {
    command: "chgrp",
    description: "Change group ownership of files",
    content: "/content/chgrp.md",
  },
  {
    command: "ps",
    description: "Show information about running processes",
    content: "/content/ps.md",
  },
  {
    command: "top",
    description: "Display dynamic real-time information about processes",
    content: "/content/top.md",
  },
  {
    command: "kill",
    description: "Terminate a process by its ID",
    content: "/content/kill.md",
  },
  {
    command: "killall",
    description: "Terminate processes by name",
    content: "/content/killall.md",
  },
  {
    command: "df",
    description: "Display disk space usage",
    content: "/content/df.md",
  },
  {
    command: "du",
    description: "Display disk usage of files and directories",
    content: "/content/du.md",
  },
  {
    command: "free",
    description: "Display memory usage",
    content: "/content/free.md",
  },
  {
    command: "uptime",
    description: "Show how long the system has been running",
    content: "/content/uptime.md",
  },
  {
    command: "who",
    description: "Show who is logged in",
    content: "/content/who.md",
  },
  {
    command: "w",
    description: "Show who is logged in and what they are doing",
    content: "/content/w.md",
  },
  {
    command: "date",
    description: "Display or set the system date and time",
    content: "/content/date.md",
  },
  {
    command: "time",
    description: "Measure the time a command takes to execute",
    content: "/content/time.md",
  },
  {
    command: "tar",
    description: "Archive files",
    content: "/content/tar.md",
  },
  {
    command: "gzip",
    description: "Compress files using the gzip algorithm",
    content: "/content/gzip.md",
  },
  {
    command: "gunzip",
    description: "Decompress files compressed with gzip",
    content: "/content/gunzip.md",
  },
  {
    command: "zip",
    description: "Create a zip archive",
    content: "/content/zip.md",
  },
  {
    command: "unzip",
    description: "Extract files from a zip archive",
    content: "/content/unzip.md",
  },
  {
    command: "wget",
    description: "Download files from the web",
    content: "/content/wget.md",
  },
  {
    command: "curl",
    description: "Transfer data from or to a server",
    content: "/content/curl.md",
  },
  {
    command: "ssh",
    description: "Securely connect to a remote server",
    content: "/content/ssh.md",
  },
  {
    command: "scp",
    description: "Copy files between hosts over SSH",
    content: "/content/scp.md",
  },
  {
    command: "rsync",
    description: "Synchronize files and directories between two locations",
    content: "/content/rsync.md",
  },
  {
    command: "alias",
    description: "Create custom shortcuts for commands",
    content: "/content/alias.md",
  },
  {
    command: "unalias",
    description: "Remove aliases",
    content: "/content/unalias.md",
  },
  {
    command: "history",
    description: "Show command history",
    content: "/content/history.md",
  },
  {
    command: "clear",
    description: "Clear the terminal screen",
    content: "/content/clear.md",
  },
  {
    command: "exit",
    description: "Exit the current shell session",
    content: "/content/exit.md",
  },
  {
    command: "sudo",
    description: "Execute a command as another user (usually root)",
    content: "/content/sudo.md",
  },
  {
    command: "su",
    description: "Switch to another user account",
    content: "/content/su.md",
  },
  {
    command: "whoami",
    description: "Display the current logged-in user",
    content: "/content/whoami.md",
  },
  {
    command: "id",
    description: "Show user and group ID information",
    content: "/content/id.md",
  },
  {
    command: "dmesg",
    description: "Print kernel messages",
    content: "/content/dmesg.md",
  },
  {
    command: "sysctl",
    description: "Get or set kernel parameters at runtime",
    content: "/content/sysctl.md",
  },
  {
    command: "mount",
    description: "Mount a file system",
    content: "/content/mount.md",
  },
  {
    command: "umount",
    description: "Unmount a file system",
    content: "/content/umount.md",
  },
  {
    command: "fdisk",
    description: "Partition table manipulator for Linux",
    content: "/content/fdisk.md",
  },
  {
    command: "lsblk",
    description: "List information about block devices",
    content: "/content/lsblk.md",
  },
  {
    command: "lspci",
    description: "List PCI devices",
    content: "/content/lspci.md",
  },
  {
    command: "lsusb",
    description: "List USB devices",
    content: "/content/lsusb.md",
  },
  {
    command: "htop",
    description: "Interactive process viewer",
    content: "/content/htop.md",
  },
  {
    command: "ps",
    description: "Display information about active processes",
    content: "/content/ps.md",
  },
];
