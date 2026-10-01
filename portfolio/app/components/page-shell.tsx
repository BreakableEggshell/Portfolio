import type { ReactNode } from "react";
import { Background } from "./background";
import { GithubIcon, LinkedinIcon } from "./icons";
import { WindowTitle } from "./window-title";

// TODO: replace with the real profile URLs.
const socials = [
  { label: "GitHub", href: "https://github.com/BreakableEggshell", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/triciagubaton/", Icon: LinkedinIcon },
];

const sheet =
  "absolute inset-0 rounded-3xl shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)]";

// Rendered once in the root layout, so it stays mounted while pages swap
// inside the card.
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex h-screen flex-1 flex-col items-center justify-center gap-6 overflow-hidden px-4 py-8">
      <Background />

      <div className="relative w-full max-w-[880px]">
        {/* Stack of papers fanned out behind the flash card, back to front */}
        <div aria-hidden className={`${sheet} -rotate-[7deg] -translate-x-4 translate-y-3 bg-[#d3e2f0]`} />
        <div aria-hidden className={`${sheet} rotate-[5deg] translate-x-3 -translate-y-2 bg-[#e2edf7]`} />
        <div aria-hidden className={`${sheet} -rotate-[2deg] -translate-x-1 translate-y-2 bg-[#f0f6fb]`} />

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)]">
          <div className="flex h-10 items-center gap-3 bg-ink px-6">
            <span className="size-2 rounded-full bg-leaf" />
            <WindowTitle />
          </div>

          {/* Fixed to the tools page's natural height so every page shares
              one card size; longer pages scroll inside. The cap keeps the
              card, title bar and socials within short viewports. */}
          <div className="flex h-[460px] max-h-[calc(100dvh-172px)] flex-col overflow-y-auto">
            {children}
          </div>
        </div>
      </div>

      <div className="relative flex gap-6">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-11 items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-110"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </div>
    </main>
  );
}
