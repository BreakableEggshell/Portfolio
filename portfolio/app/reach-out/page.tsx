import type { Metadata } from "next";
import Link from "next/link";
import { MailIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Reach out | Tricia Gubaton",
};

const email = "triciadiagogubaton@gmail.com";

export default function ReachOut() {
  return (
    <div className="flex min-h-[420px] flex-col items-start gap-3 px-8 py-12 sm:min-h-[536px] sm:px-16">
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

      <a
        href={`mailto:${email}`}
        className="mt-2 flex w-full items-center gap-4 rounded-xl border-2 border-ink px-5 py-4 text-ink transition-colors hover:bg-ink hover:text-white"
      >
        <MailIcon className="size-6 shrink-0" />
        <span className="break-all text-base">{email}</span>
      </a>

      <p className="text-sm text-muted">
        I may take 1-2 days to reply back.
      </p>
    </div>
  );
}
