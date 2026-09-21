import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About me | Tricia Gubaton",
};

export default function About() {
  return (
    <>
      <div className="flex min-h-[420px] flex-col items-start gap-3 px-8 py-12 sm:min-h-[536px] sm:px-16">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          ← /home
        </Link>
        <h1 className="text-2xl font-bold text-ink sm:text-[28px]">about me</h1>
        <p className="max-w-[720px] text-base leading-6 text-ink/80 sm:text-lg sm:leading-6">
          I&apos;m a 3rd Year BSIT student at the University of San Carlos, Cebu
          City, expected to graduate in June 2027. I enjoy building practical
          software — from ServiceNow apps for coursework to small Godot games —
          and I&apos;m currently looking for an IT internship to fulfill my
          practicum requirement.
        </p>
      </div>
    </>
  );
}
