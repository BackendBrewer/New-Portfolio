"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 relative flex flex-col items-center text-center">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Profile image — animated entrance + floating loop + glow ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mb-8"
      >
        {/* rotating gradient ring behind image */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#f97316,transparent_60%,#f97316)] blur-[2px]"
        />

        {/* gentle floating animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-black"
        >
          <Image
            src="/images/profile.png"
            alt="Muhammad Salman"
            fill
            priority
            sizes="160px"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold tracking-tight relative text-neutral-900 dark:text-white"
      >
        Laravel Developer, building fast web apps.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 relative max-w-xl"
      >
        I build clean, performant backend systems and modern frontends —
        currently working on Palsome, a social platform used by real users.
      </motion.p>
    </section>
  );
}