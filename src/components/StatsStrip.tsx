"use client";

import { motion } from "framer-motion";
import { FolderGit2, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { icon: FolderGit2, value: "4+", label: "Projects" },
  { icon: Briefcase, value: "2", label: "Internships" },
  { icon: GraduationCap, value: "BSCS", label: "Graduate" },
];

export default function StatsStrip() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-6">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="group relative flex flex-col items-center text-center gap-2 py-5 px-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm overflow-hidden"
          >
            {/* hover glow */}
            <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300" />

            <stat.icon
              size={18}
              className="text-orange-500 relative"
            />
            <span className="text-xl font-bold text-neutral-900 dark:text-white relative">
              {stat.value}
            </span>
            <span className="text-xs text-neutral-500 relative">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}