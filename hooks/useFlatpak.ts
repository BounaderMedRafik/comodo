import { useMemo } from "react";

type Option = {
  id: string;
  label: string;
  command?: string;
};

export const useFlatpakScript = (selectedOptions: Option[]): string => {
  return useMemo(() => {
    const commands = selectedOptions
      .map((opt) => opt.command?.trim())
      .filter((cmd): cmd is string => Boolean(cmd));

    if (commands.length === 0) return "";

    const script = [
      "#!/bin/bash",
      "",
      "# Install Flatpak",
      "sudo apt install -y flatpak",
      "",
      "# Add Flathub repository",
      "flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo",
      "",
      "# Install selected Flatpak apps",
      `flatpak install -y flathub ${commands.join(" ")}`,
      "",
      "# Note: You may want to reboot or log out/in to complete setup",
    ];

    return script.join("\n");
  }, [selectedOptions]);
};
