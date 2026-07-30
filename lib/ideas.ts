import { promises as fs } from "fs";
import path from "path";

export type Idea = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  paragraphs: string[];
};

const ideasDir = path.join(process.cwd(), "public", "assets", "ideas");

export async function listIdeaIds(): Promise<string[]> {
  const files = await fs.readdir(ideasDir);
  return files
    .filter((file) => file.endsWith(".txt"))
    .map((file) => file.replace(/\.txt$/, ""));
}

export async function getIdea(id: string): Promise<Idea | null> {
  if (!/^[a-z0-9_-]+$/i.test(id)) return null;

  try {
    const text = await fs.readFile(path.join(ideasDir, `${id}.txt`), "utf8");
    return parseIdea(text, id);
  } catch {
    return null;
  }
}

export async function listIdeas(): Promise<Idea[]> {
  const ids = await listIdeaIds();
  const ideas = await Promise.all(ids.map((id) => getIdea(id)));
  return ideas.filter((idea): idea is Idea => idea !== null);
}

function parseIdea(text: string, fallbackTitle: string): Idea {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const meta: Record<string, string> = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      break;
    }
    const match = line.match(/^(title|subtitle|date)\s*:\s*(.+)$/i);
    if (!match) break;
    meta[match[1].toLowerCase()] = match[2].trim();
    i++;
  }

  const bodyText = lines.slice(i).join("\n").trim();
  let paragraphs = bodyText
    ? bodyText
        .split(/\n\s*\n/)
        .map((block) => block.trim())
        .filter(Boolean)
    : [];

  if (paragraphs.length === 1 && paragraphs[0].includes("\n")) {
    paragraphs = paragraphs[0]
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  const title = (meta.title || fallbackTitle).replace(/\.$/, "");

  return {
    id: fallbackTitle,
    title,
    subtitle: meta.subtitle || "",
    date: meta.date || "",
    paragraphs,
  };
}
