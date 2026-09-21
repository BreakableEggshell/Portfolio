import type { Metadata } from "next";
import Link from "next/link";
import { FolderIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "My works | Tricia Gubaton",
};

export default function MyWorks() {
  return (
    <div className="flex min-h-[420px] flex-col items-start gap-3 px-8 py-12 sm:min-h-[536px] sm:px-16">
      <Link
        href="/"
        className="text-sm text-muted transition-colors hover:text-ink"
      >
        ← /home
      </Link>
      <h1 className="text-2xl font-bold text-ink sm:text-[28px]">
        selected projects
      </h1>

      <div className="mt-2 flex w-full flex-1 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-[#c5d6e8] px-6 py-16 text-muted">
        <FolderIcon className="size-10" />
        <p className="text-lg font-medium text-ink">work in progress</p>
      </div>
    </div>
  );
}
