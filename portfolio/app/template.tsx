// Remounts on every top-level navigation, which replays the fade-in below on
// just the card content while the shell (waves, papers, title bar) persists.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-card-in flex flex-1 flex-col">{children}</div>;
}
