import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBackground from "@/components/AmbientBackground";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mszdev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Salman — Laravel Developer",
    template: "%s | Muhammad Salman",
  },
  description: "Laravel developer building fast, modern web applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Salman",
    images: [
      {
        url: `${siteUrl}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Salman — Laravel Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteUrl}/images/og-default.png`],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Salman",
  jobTitle: "Laravel Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mszdev.vercel.app",
  sameAs: [
    "https://github.com/backendbrewer",
    "https://www.linkedin.com/in/m-salman-zubair-140073263",
  ],
  worksFor: {
    "@type": "Organization",
    name: "TRZ Technologies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        
        <a  href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-orange-500 focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <AmbientBackground />
          <ScrollProgress />
          {children}
          <CommandPalette />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}