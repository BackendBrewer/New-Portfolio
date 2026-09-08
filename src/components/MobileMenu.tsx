"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const filteredLinks = navLinks.filter((link) => link.href !== pathname);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="text-neutral-600 dark:text-neutral-400"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white dark:bg-black overflow-hidden"
          >
            {/* subtle glow accent, matches command palette vibe */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex justify-between items-center px-6 py-6 relative"
            >
              <span className="font-mono text-sm text-orange-500 tracking-wider">
                MENU
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 active:scale-90 transition-transform"
              >
                <X size={18} />
              </button>
            </motion.div>

            <nav className="flex flex-col px-6 mt-4 relative">
              {filteredLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + i * 0.06,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-4 border-b border-neutral-100 dark:border-neutral-900"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-neutral-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-2xl font-semibold text-neutral-900 dark:text-white group-active:text-orange-500 transition-colors">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-neutral-300 dark:text-neutral-700 group-active:text-orange-500 group-active:translate-x-0.5 group-active:-translate-y-0.5 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute bottom-8 left-6 text-xs text-neutral-400 font-mono"
            >
              tip: ⌘K works on mobile too
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}