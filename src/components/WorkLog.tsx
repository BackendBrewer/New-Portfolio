"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { workLog } from "@/data/work-log";

export default function WorkLog() {
  const sorted = [...workLog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (sorted.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-neutral-900 dark:text-white"
      >
        On the Job
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2 text-sm text-neutral-500"
      >
        Real challenges I've worked through while building on Palsome.
      </motion.p>

      <div className="mt-8 space-y-4">
        {sorted.map((entry, i) => (
          <motion.div
            key={entry.title + entry.date}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:border-orange-500/40 transition-colors"
          >
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="font-medium text-neutral-900 dark:text-white">
                {entry.title}
              </h3>
              <span className="flex items-center gap-1.5 text-xs text-neutral-500 shrink-0">
                <Calendar size={12} />
                {new Date(entry.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs font-semibold text-orange-500 mb-1">
                  Challenge
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {entry.challenge}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-green-600 dark:text-green-500 mb-1">
                  Solution
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {entry.solution}
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-2 flex-wrap">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}