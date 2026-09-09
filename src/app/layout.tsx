import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBackground from "@/components/AmbientBackground";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.vercel.app"
  ),
  title: {
    default: "Muhammad Salman — Laravel Developer",
    template: "%s | Muhammad Salman",
  },
  description: "Laravel developer building fast, modern web applications.",
  openGraph: { type: "website", locale: "en_US", siteName: "Muhammad Salman" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AmbientBackground />
          <ScrollProgress />
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}