import fs from "fs";
import path from "path";

export function getMarkdownContent(relativePath: string): string {
  const filePath = path.join(process.cwd(), relativePath);
  return fs.readFileSync(filePath, "utf8");
}
