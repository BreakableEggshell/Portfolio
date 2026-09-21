"use client";

import { usePathname } from "next/navigation";

export function WindowTitle() {
  const pathname = usePathname();
  return (
    <span className="font-mono text-sm text-white">
      tricia-gubaton{pathname === "/" ? "/home" : pathname}
    </span>
  );
}
