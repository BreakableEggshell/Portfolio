"use client";

import Link from "next/link";
import { useState } from "react";
import { RepeatIcon } from "../components/icons";
import type { Group, Tool } from "./tools-data";

type View = "icons" | "names";

const chip = "rounded-full bg-[#e8eff7] text-ink";

function ToolChip({ tool, view }: { tool: Tool; view: View }) {
  if (view === "names") {
    return <li className={`${chip} px-3.5 py-2 text-sm`}>{tool.name}</li>;
  }
  const { icon, src, abbr, name } = tool;
  return (
    <li className="group relative size-10" aria-label={name} tabIndex={0}>
      {/* Springy overshoot makes the chip pop up on hover */}
      <div
        className={`${chip} flex size-full items-center justify-center text-xs font-bold transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-safe:group-hover:-translate-y-1.5 motion-safe:group-focus-visible:-translate-y-1.5`}
      >
        {icon ? (
          <svg
            viewBox={`0 0 ${icon.width} ${icon.height}`}
            className="size-6"
            aria-hidden
            // Trusted SVG markup from the icon packages, resolved at build time.
            dangerouslySetInnerHTML={{ __html: icon.body }}
          />
        ) : src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="" className="size-6" />
        ) : (
          abbr
        )}
      </div>
      {/* Appears and rises together with the chip, on the same timing */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:group-hover:-translate-y-1.5 motion-safe:group-focus-visible:-translate-y-1.5"
      >
        {name}
      </span>
    </li>
  );
}

function Column({ groups, view }: { groups: Group[]; view: View }) {
  return (
    <div className="flex flex-col gap-6">
      {groups.map(({ title, tools }) => (
        <section key={title}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            {title}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <ToolChip key={tool.name} tool={tool} view={view} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function ToolsBrowser({
  left,
  right,
}: {
  left: Group[];
  right: Group[];
}) {
  // Icons first; the template remounts this on every visit to /tools.
  const [view, setView] = useState<View>("icons");
  const next = view === "icons" ? "names" : "icons";

  return (
    <div className="flex min-h-[420px] flex-col items-start gap-3 px-8 py-12 sm:min-h-[536px] sm:px-16">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-ink"
      >
        ← /home
      </Link>

      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold text-ink sm:text-[28px]">
          tools &amp; techstacks
        </h1>
        <button
          type="button"
          onClick={() => setView(next)}
          aria-label={`Show ${next}`}
          title={`Show ${next}`}
          className="flex size-10 items-center justify-center rounded-full bg-[#e8eff7] text-ink transition-colors hover:bg-ink hover:text-white"
        >
          <RepeatIcon className="size-5" />
        </button>
      </div>

      <div className="mt-3 grid w-full gap-6 md:grid-cols-2 md:gap-x-12">
        <Column groups={left} view={view} />
        <Column groups={right} view={view} />
      </div>
    </div>
  );
}
