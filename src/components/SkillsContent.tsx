"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const levelColor: Record<string, string> = {
  Strong: "bg-orange-500",
  Comfortable: "bg-orange-500/60",
  Learning: "bg-orange-500/25",
};

export default function SkillsContent() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-neutral-900 dark:text-white"
      >
        Skills
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 text-neutral-600 dark:text-neutral-400"
      >
        Technologies I work with regularly, and where I'm still growing.
      </motion.p>

      <div className="mt-12 space-y-10">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + gi * 0.1 }}
          >
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
              {group.category}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between border border-neutral-200 dark:border-neutral-800 rounded-lg px-4 py-3"
                >
                  <span className="text-sm text-neutral-800 dark:text-neutral-200">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500">
                      {skill.level}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${
                            (skill.level === "Strong" && dot <= 3) ||
                            (skill.level === "Comfortable" && dot <= 2) ||
                            (skill.level === "Learning" && dot <= 1)
                              ? levelColor[skill.level]
                              : "bg-neutral-200 dark:bg-neutral-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}