export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10 text-sm text-neutral-500 dark:text-neutral-500 flex justify-between border-t border-neutral-200 dark:border-neutral-800 mt-10">
      <span>© {new Date().getFullYear()} Muhammad Salman</span>
      <div className="flex gap-4">
        <a href="https://github.com/backendbrewer" target="_blank" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/m-salman-zubair-140073263" target="_blank" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}