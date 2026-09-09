"use client";

import { useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Terminal,
  FileText,
  Mail,
  Phone,
  Link as LinkIcon,
  FolderGit2,
  User,
  BookOpen,
  Wrench,
  Home,
  Moon,
} from "lucide-react";
import { projects } from "@/data/projects";
import { useCommandPalette } from "@/lib/command-palette-store";

const CONTACT_EMAIL = "muhammadsalmanzubair5@gmail.com";
const CONTACT_PHONE = "+92 310 4471034";
const GITHUB_URL = "https://github.com/backendbrewer";
const LINKEDIN_URL = "https://www.linkedin.com/in/m-salman-zubair-140073263";

const navItems = [
  { href: "/", label: "Home", icon: Home, badge: "PAGE" },
  { href: "/about", label: "About", icon: User, badge: "PAGE" },
  { href: "/experience", label: "Experience", icon: Wrench, badge: "PAGE" },
  { href: "/skills", label: "Skills", icon: Terminal, badge: "PAGE" },
  { href: "/projects", label: "Projects", icon: FolderGit2, badge: "PAGE" },
  { href: "/blog", label: "Blog", icon: BookOpen, badge: "PAGE" },
];

const itemClass =
  "group flex items-center gap-3 px-3 py-2.5 text-sm rounded-md cursor-pointer data-[selected=true]:bg-orange-500/10 data-[selected=true]:ring-1 data-[selected=true]:ring-orange-500/30";

function Badge({ children }: { children: string }) {
  return (
    <span className="shrink-0 text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded border border-neutral-700 text-neutral-500 bg-neutral-900">
      {children}
    </span>
  );
}

function ExecuteHint() {
  return (
    <span className="hidden sm:inline-flex opacity-0 group-data-[selected=true]:opacity-100 items-center gap-1 text-[10px] font-mono text-orange-500 tracking-wider transition-opacity ml-auto">
      EXECUTE <span className="text-xs">↵</span>
    </span>
  );
}

export default function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const router = useRouter();
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const runCommand = useCallback(
    (action: () => void) => {
      setOpen(false);
      action();
    },
    [setOpen]
  );

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
  }, []);

  const filteredNav = navItems.filter((item) => item.href !== pathname);
  const filteredProjects = projects.filter(
    (p) => `/projects/${p.slug}` !== pathname
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-0 sm:pt-24 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full sm:h-auto sm:max-w-xl sm:mx-4"
      >
        <Command
          className="h-full sm:h-auto flex flex-col rounded-none sm:rounded-xl border-0 sm:border border-orange-500/20 bg-neutral-950 shadow-[0_0_40px_-5px_rgba(249,115,22,0.15)] overflow-hidden font-mono"
          shouldFilter
        >
          <div className="flex items-center gap-2 border-b border-neutral-800 px-4">
            <span className="text-orange-500 text-sm shrink-0">⌘K</span>
            <Command.Input
              autoFocus
              placeholder="Type a command (e.g. cv, github, projects, contact)..."
              className="w-full px-2 py-3.5 sm:py-3 text-sm bg-transparent outline-none text-neutral-200 placeholder:text-neutral-600"
            />
            <button
              onClick={() => setOpen(false)}
              className="text-[10px] px-1.5 py-0.5 rounded border border-neutral-700 text-neutral-500 shrink-0"
            >
              ESC
            </button>
          </div>

          <Command.List className="flex-1 sm:max-h-96 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-xs text-neutral-600">
              No matching command found.
            </Command.Empty>

            {filteredNav.length > 0 && (
              <Command.Group>
                {filteredNav.map((item) => (
                  <Command.Item
                    key={item.href}
                    onSelect={() => runCommand(() => router.push(item.href))}
                    className={itemClass}
                  >
                    <Badge>{item.badge}</Badge>
                    <item.icon size={15} className="text-neutral-400 shrink-0" />
                    <span className="text-neutral-200">{item.label}</span>
                    <ExecuteHint />
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            {filteredProjects.length > 0 && (
              <Command.Group>
                {filteredProjects.map((project) => (
                  <Command.Item
                    key={project.slug}
                    onSelect={() =>
                      runCommand(() => router.push(`/projects/${project.slug}`))
                    }
                    className={itemClass}
                  >
                    <Badge>PROJECT</Badge>
                    <FolderGit2 size={15} className="text-neutral-400 shrink-0" />
                    <span className="text-neutral-200">{project.title}</span>
                    <ExecuteHint />
                  </Command.Item>
                ))}
              </Command.Group>
            )}

            <Command.Group>
              <Command.Item
                onSelect={() =>
                  runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))
                }
                className={itemClass}
              >
                <Badge>SYSTEM</Badge>
                <Moon size={15} className="text-neutral-400 shrink-0" />
                <span className="text-neutral-200">Toggle Theme</span>
                <ExecuteHint />
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => window.open("/cv.pdf", "_blank"))}
                className={itemClass}
              >
                <Badge>CANDIDATE</Badge>
                <FileText size={15} className="text-neutral-400 shrink-0" />
                <span className="text-neutral-200">Download CV (PDF)</span>
                <ExecuteHint />
              </Command.Item>
            </Command.Group>

            <Command.Group>
              <Command.Item
                onSelect={() => runCommand(() => copyToClipboard(CONTACT_EMAIL, "Email"))}
                className={itemClass}
              >
                <Badge>CONTACT</Badge>
                <Mail size={15} className="text-neutral-400 shrink-0" />
                <span className="text-neutral-200">
                  Copy Contact Email{" "}
                  <span className="text-neutral-500">({CONTACT_EMAIL})</span>
                </span>
                <ExecuteHint />
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => copyToClipboard(CONTACT_PHONE, "Phone number"))}
                className={itemClass}
              >
                <Badge>CONTACT</Badge>
                <Phone size={15} className="text-neutral-400 shrink-0" />
                <span className="text-neutral-200">
                  Copy Phone Number{" "}
                  <span className="text-neutral-500">({CONTACT_PHONE})</span>
                </span>
                <ExecuteHint />
              </Command.Item>
            </Command.Group>

            <Command.Group>
              <Command.Item
                onSelect={() => runCommand(() => window.open(GITHUB_URL, "_blank"))}
                className={itemClass}
              >
                <Badge>LINKS</Badge>
                <LinkIcon size={15} className="text-neutral-400 shrink-0" />
                <span className="text-neutral-200">
                  Open GitHub Profile{" "}
                  <span className="text-neutral-500">
                    ({GITHUB_URL.replace("https://", "")})
                  </span>
                </span>
                <ExecuteHint />
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => window.open(LINKEDIN_URL, "_blank"))}
                className={itemClass}
              >
                <Badge>LINKS</Badge>
                <LinkIcon size={15} className="text-neutral-400 shrink-0" />
                <span className="text-neutral-200">
                  Open LinkedIn Profile{" "}
                  <span className="text-neutral-500">
                    ({LINKEDIN_URL.replace("https://", "")})
                  </span>
                </span>
                <ExecuteHint />
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}