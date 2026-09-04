"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 relative">
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold tracking-tight relative text-neutral-900 dark:text-white"
      >
        Laravel Developer, building fast web apps.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 relative"
      >
        I build clean, performant backend systems and modern frontends —
        currently working on Palsome, a social platform used by real users.
      </motion.p>
    </section>
  );
}