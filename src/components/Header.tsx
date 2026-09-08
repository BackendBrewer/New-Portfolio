"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";

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
  const filteredLinks = navLinks.filter((link) => link.href !== pathname);

  return (
    <header className="mx-auto max-w-3xl px-6 py-6 flex justify-between items-center">
      <Link
        href="/"
        className="font-semibold text-lg text-neutral-900 dark:text-white"
      >
        Muhammad Salman
      </Link>

      <nav className="hidden md:flex gap-5 items-center text-sm">
        {filteredLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <kbd className="hidden lg:inline-block text-xs px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-400">
          ⌘K
        </kbd>
        <ThemeToggle />
      </nav>

      <div className="flex md:hidden items-center gap-4">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </header>
  );
}