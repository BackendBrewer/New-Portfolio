export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10 text-sm text-neutral-500 flex justify-between">
      <span>© {new Date().getFullYear()} Muhammad Salman</span>
      <div className="flex gap-4">
        <a href="https://github.com/yourusername" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}   