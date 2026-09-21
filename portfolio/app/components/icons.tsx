import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const outline = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function FolderIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <path d="M4 9.5A2.5 2.5 0 0 1 6.5 7h5.2c.6 0 1.2.3 1.6.8L15 10h10.5A2.5 2.5 0 0 1 28 12.5v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 23.5z" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <path d="M12 7 6 16l6 9M20 7l6 9-6 9" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <circle cx="16" cy="11" r="5" />
      <path d="M5.5 26.5c.8-5 5-8 10.5-8s9.700 3 10.500 8" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...outline} {...props}>
      <rect x="4" y="7" width="24" height="18" rx="1.5" />
      <path d="m4.500 8 11.500 10L27.500 8" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <circle cx="5" cy="4.500" r="2.200" />
      <rect x="3" y="9" width="4" height="12" />
      <path d="M10 9h3.600v1.600c.600-1 1.900-1.900 3.800-1.900C21 8.700 22 11 22 14.300V21h-4v-6c0-1.400-.3-2.600-1.900-2.600-1.700 0-2.100 1.200-2.100 2.600v6h-4z" />
    </svg>
  );
}
