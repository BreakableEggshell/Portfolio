import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My works | Tricia Gubaton",
};

type Project = {
  name: string;
  role: string;
  kind: string;
  points: string[];
  link?: { href: string; label: string; note?: string };
};

const projects: Project[] = [
  {
    name: "Mindfulness",
    role: "Developer",
    kind: "Academic Project",
    points: [
      "Developed a web-based mental wellness platform (PHP) with role-based access control: admins manage a library of guided exercises while users subscribe to and track the ones relevant to them.",
      "Designed the underlying database structure to support per-user subscriptions and admin-managed content.",
    ],
  },
  {
    name: "LugarLang",
    role: "Developer",
    kind: "HackUSC Project",
    points: [
      "Built an Android app (Java, Firebase) that gives commuters real-time jeepney and bus location tracking.",
      "Designed the app around three user roles — commuters, drivers, and admins — with admin tools for managing driver accounts.",
    ],
    link: {
      href: "https://appdistribution.firebase.google.com/i/fcdd98a8834f82ab",
      label: "Firebase App Distribution link",
      note: "Android, requires tester sign-up to install",
    },
  },
  {
    name: "UPLB COSS Game Jam – Los Baños",
    role: "Writer & Team Coordinator",
    kind: "Game Jam",
    points: [
      "Led most of the game's writing and narrative direction; contributed to art and selected coding tasks.",
      "Coordinated team tasks and development progress; won Best Narrative.",
    ],
  },
];

export default function MyWorks() {
  return (
    <div className="flex flex-1 flex-col items-start gap-3 px-8 py-8 sm:px-16">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-ink"
      >
        ← /home
      </Link>
      <h1 className="text-2xl font-bold text-ink sm:text-[28px]">
        selected projects
      </h1>

      <ul className="mt-2 flex w-full flex-col gap-4">
        {projects.map(({ name, role, kind, points, link }) => (
          <li
            key={name}
            className="rounded-xl border-2 border-[#c5d6e8] px-5 py-4"
          >
            <h2 className="text-lg font-bold text-ink">{name}</h2>
            <p className="text-sm text-muted">
              {role} · {kind}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-6 text-ink/80">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {link && (
              <p className="mt-2 text-sm text-muted">
                Live demo:{" "}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline underline-offset-2 hover:text-muted"
                >
                  {link.label}
                </a>
                {link.note && <> ({link.note})</>}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
