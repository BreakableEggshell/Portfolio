import type { Metadata } from "next";
import Link from "next/link";
import { LinkedinIcon, MailIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Reach out | Tricia Gubaton",
};

const email = "triciadiagogubaton@gmail.com";

const contacts = [
  { label: email, href: `mailto:${email}`, Icon: MailIcon },
  {
    label: "linkedin.com/in/triciagubaton",
    href: "https://www.linkedin.com/in/triciagubaton/",
    Icon: LinkedinIcon,
    external: true,
  },
];

export default function ReachOut() {
  return (
    <div className="flex flex-1 flex-col items-start gap-3 px-8 py-8 sm:px-16">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-ink"
      >
        ← /home
      </Link>
      <h1 className="text-2xl font-bold text-ink sm:text-[28px]">reach out</h1>
      <p className="text-base text-ink/80 sm:text-lg">
        Got an idea? Let&apos;s hear it
      </p>

      <div className="mt-2 flex w-full flex-col gap-3">
        {contacts.map(({ label, href, Icon, external }) => (
          <a
            key={href}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex w-full items-center gap-4 rounded-xl border-2 border-ink px-5 py-4 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Icon className="size-6 shrink-0" />
            <span className="break-all text-base">{label}</span>
          </a>
        ))}
      </div>

      <p className="text-sm text-muted">
        I may take 1-2 days to reply back.
      </p>
    </div>
  );
}
