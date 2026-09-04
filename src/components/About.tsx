"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-white"
      >
        About
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        I'm a Laravel developer currently working at TRZ Technologies, where
        I build and maintain features for Palsome, a live social media
        platform. I focus on writing clean, maintainable backend code and
        pairing it with fast, modern frontends.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 grid gap-6 sm:grid-cols-3"
      >
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
              {group.category}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-neutral-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}