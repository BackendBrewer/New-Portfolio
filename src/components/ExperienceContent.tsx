"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function ExperienceContent() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-neutral-900 dark:text-white"
      >
        Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 text-neutral-600 dark:text-neutral-400"
      >
        A timeline of where I've worked and what I've built.
      </motion.p>

      <div className="mt-12 space-y-10">
        {experience.map((item, i) => (
          <motion.div
            key={item.company + item.role}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-6 relative"
          >
            {/* <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-white dark:ring-black" /> */}

            <div className="flex flex-wrap justify-between gap-2">
              <h2 className="font-semibold text-lg text-neutral-900 dark:text-white">
                {item.role}
              </h2>
              <span className="text-sm text-neutral-500">{item.duration}</span>
            </div>
            <p className="text-sm text-orange-500 mt-1">{item.company}</p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}