export type Command = {
  command: string;
  description: string;
  content?: string | undefined;
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
