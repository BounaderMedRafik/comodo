export type Command = {
  command: string;
  description: string;
  content?: string | undefined;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
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
