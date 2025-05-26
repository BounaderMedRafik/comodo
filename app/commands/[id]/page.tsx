import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";

import SingularCommandPage from "@/components/core/SingularCommandPage";
import { commands } from "@/db/commands-v1";

interface CommandPageProps {
  params: { id: string };
}

export default async function CommandPage({ params }: CommandPageProps) {
  const { id } = params; // ✅ no need for use() here

  const command = commands.find((cmd) => cmd.command === id);
  if (!command) notFound();

  const filePath = path.join(process.cwd(), command.content);
  const markdown = await fs.readFile(filePath, "utf8");

  return <SingularCommandPage id={id} markdown={markdown} />;
}
