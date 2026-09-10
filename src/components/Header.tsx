"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useCommandPalette } from "@/lib/command-palette-store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
];

export default function Header() {
  const pathname = usePathname();
  const setOpen = useCommandPalette((s) => s.setOpen);

  return (
    <header className="mx-auto max-w-4xl px-6 py-6 flex justify-between items-center gap-4">
      <Link
        href="/"
        className="font-semibold text-lg text-neutral-900 dark:text-white shrink-0"
      >
        Muhammad Salman Zubair
      </Link>

      <nav className="hidden md:flex gap-4 items-center text-sm shrink-0">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition-colors ${
                isActive
                  ? "text-orange-500 font-medium"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <button
          onClick={() => setOpen(true)}
          className="hidden lg:inline-block text-xs px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors shrink-0"
        >
          ⌘K
        </button>
        <ThemeToggle />
      </nav>

      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open command palette"
          className="flex items-center justify-center w-9 h-9 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs font-mono"
        >
          <Terminal size={16} />
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}