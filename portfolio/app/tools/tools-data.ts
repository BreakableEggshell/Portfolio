import devicon from "@iconify-json/devicon/icons.json";
import logos from "@iconify-json/logos/icons.json";

// Server-only: the icon sets are large, so only the SVG bodies actually used
// are resolved here and passed to the client component as plain data.
export type ToolIcon = { width: number; height: number; body: string };
// `src` is an image in /public for logos missing from both sets; `abbr` is the
// text fallback shown when a tool has neither.
export type Tool = { name: string; icon?: ToolIcon; src?: string; abbr?: string };
export type Group = { title: string; tools: Tool[] };

type IconSet = {
  width?: number;
  height?: number;
  icons: Record<string, { body: string; width?: number; height?: number }>;
};

function pick(set: IconSet, id: string): ToolIcon {
  const icon = set.icons[id];
  if (!icon) throw new Error(`Missing icon "${id}"`);
  return {
    width: icon.width ?? set.width ?? 16,
    height: icon.height ?? set.height ?? 16,
    body: icon.body,
  };
}

const dev = (name: string, id: string): Tool => ({ name, icon: pick(devicon, id) });
const logo = (name: string, id: string): Tool => ({ name, icon: pick(logos, id) });

export const leftColumn: Group[] = [
  {
    title: "Languages",
    tools: [
      dev("JavaScript", "javascript"),
      dev("TypeScript", "typescript"),
      dev("PHP", "php"),
      dev("Java", "java"),
      dev("HTML", "html5"),
      dev("CSS", "css3"),
    ],
  },
  {
    title: "Frameworks & Libraries",
    tools: [
      dev("Angular", "angular"),
      dev("Next.js", "nextjs"),
      dev("Node.js", "nodejs"),
      dev("Tailwind CSS", "tailwindcss"),
    ],
  },
  {
    title: "Backend & Database",
    tools: [dev("Supabase", "supabase"), dev("Firebase", "firebase")],
  },
  {
    title: "Game Dev & Design",
    tools: [
      dev("Godot", "godot"),
      { name: "Aseprite", src: "/aseprite_icon.png" },
      { name: "MediBang", src: "/medibang_icon.png" },
      dev("Figma", "figma"),
      dev("Canva", "canva"),
    ],
  },
];

export const rightColumn: Group[] = [
  {
    title: "Dev Tools & Environment",
    tools: [
      dev("Git", "git"),
      dev("GitHub", "github"),
      dev("VS Code", "vscode"),
      dev("Android Studio", "androidstudio"),
      logo("XAMPP", "xampp"),
      dev("Bash", "bash"),
      dev("Linux (Ubuntu)", "ubuntu"),
    ],
  },
  {
    title: "Productivity",
    tools: [
      dev("Notion", "notion"),
      dev("Trello", "trello"),
      logo("Obsidian", "obsidian-icon"),
    ],
  },
  {
    title: "AI Tools",
    tools: [
      dev("Claude", "claude"),
      logo("ChatGPT", "openai-icon"),
      dev("GitHub Copilot", "githubcopilot"),
    ],
  },
];
