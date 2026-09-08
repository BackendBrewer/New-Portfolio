"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-neutral-900 dark:text-white"
      >
        About
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 flex flex-col sm:flex-row gap-8 items-start"
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shrink-0">
          <Image
            src="/images/profile.png"
            alt="Muhammad Salman"
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>

        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            I'm a Laravel developer currently working at TRZ Technologies,
            where I build and maintain features for Palsome — a live social
            media platform used by real users.
          </p>
          <p>
            I completed my BSCS in December 2025, after starting my journey
            with an ADP in Computer Science. Alongside development, I also
            manage operations part-time at a local coaching academy.
          </p>
          <p>
            My focus is on writing clean, maintainable backend systems and
            pairing them with modern, fast frontends — this portfolio itself
            is built with that same philosophy: no bloated CMS, no
            unnecessary complexity, just fast and functional.
          </p>
        </div>
      </motion.div>
    </main>
  );
}