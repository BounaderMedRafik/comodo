export type Command = {
  command: string;
  description: string;
  content: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};

export type distroProps = {
  distro: string;
  description: string;
  content: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  deskimage: string;
};

export type footerlinkProps = {
  title: string;
  links: {
    title: string;
    link: string;
    icon: React.ReactNode;
    upcoming?: boolean;
  }[];
};

export type navlinkProps = {
  title: string;
  link: string;
  icon: React.ReactNode;
};

export type contributersProps = {
  name: string;
  link: string;
  image: string;
  role: string;
};

export type SetupCategory = {
  id: string;
  name: string;
  icon: React.ReactNode; // Lucide icon name (string form, for dynamic rendering)
  options: SetupOption[];
};

export type SetupOption = {
  id: string;
  label: string;
  defaultSelected?: boolean;
  command: string;
  tags?: string[];
};
