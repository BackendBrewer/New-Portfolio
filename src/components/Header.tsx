import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-3xl px-6 py-6 flex justify-between items-center">
      <Link href="/" className="font-semibold text-lg">
        Muhammad Salman
      </Link>
      <nav className="flex gap-6 text-sm text-neutral-600">
        <Link href="/#projects">Projects</Link>
        <Link href="/#experience">Experience</Link>
        <a href="mailto:you@example.com">Contact</a>
      </nav>
    </header>
  );
}