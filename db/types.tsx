export type Command = {
  command: string;
  description: string;
  content?: string | undefined;
};

export type navlinkProps = {
  title: string;
  link: string;
  icon: React.ReactNode;
};
