import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { PageShell } from "./components/page-shell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tricia Gubaton | Portfolio",
  description: "Portfolio of Tricia Gubaton, 3rd year Information Technology student.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
