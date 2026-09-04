"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { projects } from "@/data/projects";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
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

  const runCommand = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/50 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg mx-4"
      >
        <Command
          className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden"
          shouldFilter
        >
          <Command.Input
            autoFocus
            placeholder="Type a command or search..."
            className="w-full px-4 py-3 text-sm bg-transparent border-b border-neutral-200 dark:border-neutral-800 outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-neutral-500">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigate" className="text-xs text-neutral-500 px-2 py-1">
            <Command.Item onSelect={() => runCommand(() => router.push("/about"))} className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800">
                About
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/experience"))} className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800">
                Experience
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/skills"))} className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800">
                Skills
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/blog"))} className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800">
                Blog
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => router.push("/cv"))} className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800">
                CV
            </Command.Item>
            </Command.Group>

            <Command.Group heading="Projects" className="text-xs text-neutral-500 px-2 py-1">
              {projects.map((project) => (
                <Command.Item
                  key={project.slug}
                  onSelect={() =>
                    runCommand(() => router.push(`/projects/${project.slug}`))
                  }
                  className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800"
                >
                  {project.title}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions" className="text-xs text-neutral-500 px-2 py-1">
              <Command.Item
                onSelect={() =>
                  runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))
                }
                className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800"
              >
                Toggle theme
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(() => window.open("https://github.com/yourusername", "_blank"))
                }
                className="px-2 py-2 text-sm rounded-md cursor-pointer text-neutral-800 dark:text-neutral-200 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800"
              >
                Open GitHub
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}