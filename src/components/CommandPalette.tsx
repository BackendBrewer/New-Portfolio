"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // palette khulte waqt background scroll lock — mobile pe zaroori hai
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const runCommand = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  // current page ko list se hide karo
  const filteredNav = navItems.filter((item) => item.href !== pathname);
  const filteredProjects = projects.filter(
    (p) => `/projects/${p.slug}` !== pathname
  );

  const itemClass =
    "px-3 py-2.5 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800";

  return (
    <>
      {/* Mobile trigger — sirf mobile pe dikhega, keyboard shortcut ka substitute */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open search"
        className="md:hidden fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center shadow-lg active:scale-95 transition-transform"
      >
        <Search size={20} />
      </button>

      {!open ? null : (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-start justify-center pt-0 sm:pt-24 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full sm:h-auto sm:max-w-lg sm:mx-4"
          >
            <Command
              className="h-full sm:h-auto flex flex-col rounded-none sm:rounded-xl border-0 sm:border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden"
              shouldFilter
            >
              <div className="flex items-center border-b border-neutral-200 dark:border-neutral-800 px-4">
                <Search size={16} className="text-neutral-400 shrink-0" />
                <Command.Input
                  autoFocus
                  placeholder="Search pages, projects..."
                  className="w-full px-3 py-3.5 sm:py-3 text-base sm:text-sm bg-transparent outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="sm:hidden text-sm text-neutral-500 shrink-0"
                >
                  Cancel
                </button>
              </div>

              <Command.List className="flex-1 sm:max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-neutral-500">
                  No results found.
                </Command.Empty>

                {filteredNav.length > 0 && (
                  <Command.Group heading="Navigate" className="text-xs font-medium text-neutral-500 px-3 py-2">
                    {filteredNav.map((item) => (
                      <Command.Item
                        key={item.href}
                        onSelect={() => runCommand(() => router.push(item.href))}
                        className={itemClass}
                      >
                        {item.label}
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}

                {filteredProjects.length > 0 && (
                  <Command.Group heading="Projects" className="text-xs font-medium text-neutral-500 px-3 py-2">
                    {filteredProjects.map((project) => (
                      <Command.Item
                        key={project.slug}
                        onSelect={() =>
                          runCommand(() => router.push(`/projects/${project.slug}`))
                        }
                        className={itemClass}
                      >
                        {project.title}
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}

                <Command.Group heading="Actions" className="text-xs font-medium text-neutral-500 px-3 py-2">
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))
                    }
                    className={itemClass}
                  >
                    Toggle theme
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open("https://github.com/ ", "_blank"))
                    }
                    className={itemClass}
                  >
                    Open GitHub
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}