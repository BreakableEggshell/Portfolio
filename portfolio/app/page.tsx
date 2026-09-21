import Link from "next/link";
import {
  CodeIcon,
  FolderIcon,
  MailIcon,
  UserIcon,
} from "./components/icons";

const navItems = [
  { label: "my works", href: "/works", Icon: FolderIcon },
  { label: "tools", href: "/tools", Icon: CodeIcon },
  { label: "about me", href: "/about", Icon: UserIcon },
  { label: "reach out", href: "/reach-out", Icon: MailIcon },
];

export default function Home() {
  return (
    <>
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
    </>
  );
}
