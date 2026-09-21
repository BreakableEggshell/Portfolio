import Link from "next/link";
import { Background } from "./components/background";
import {
  CodeIcon,
  FolderIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  UserIcon,
} from "./components/icons";

const navItems = [
  { label: "my works", href: "/works", Icon: FolderIcon },
  { label: "tools", href: "/tools", Icon: CodeIcon },
  { label: "about me", href: "/about", Icon: UserIcon },
  { label: "reach out", href: "/contact", Icon: MailIcon },
];

// TODO: replace with the real profile URLs.
const socials = [
  { label: "GitHub", href: "https://github.com/BreakableEggshell", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/triciagubaton/", Icon: LinkedinIcon },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col items-center justify-center gap-10 overflow-hidden px-4 py-16">
      <Background />

      <div className="relative w-full max-w-[880px]">
        {/* Tilted cream card behind the window */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 880 584"
          preserveAspectRatio="none"
          aria-hidden
        >
          <polygon
            points="-12,4 880,-48 910,516 828,652 -46,580"
            fill="#fbf7ec"
            stroke="#fbf7ec"
            strokeWidth="28"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)]">
          <div className="flex h-12 items-center gap-3 bg-ink px-6">
            <span className="size-2 rounded-full bg-leaf" />
            <span className="font-mono text-sm text-white">
              tricia-gubaton/home
            </span>
          </div>

          <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 px-6 py-12 text-center sm:min-h-[536px]">
            <p className="text-3xl text-ink">Welcome!</p>
            <h1 className="text-3xl font-bold text-ink sm:text-[40px] sm:leading-[48px]">
              I&apos;m <span className="text-accent">Tricia Gubaton</span>
            </h1>
            <p className="text-base text-muted sm:text-lg">
              3rd Year Information Technology Student
            </p>

            <nav
              aria-label="Main"
              className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-10"
            >
              {navItems.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex w-14 flex-col items-center gap-2 text-ink"
                >
                  <span className="flex size-14 items-center justify-center rounded-xl border-2 border-ink transition-colors group-hover:bg-ink group-hover:text-white">
                    <Icon className="size-8" />
                  </span>
                  <span className="whitespace-nowrap text-sm">{label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="relative flex gap-10">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-[52px] items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-110"
          >
            <Icon className="size-6" />
          </a>
        ))}
      </div>
    </main>
  );
}
