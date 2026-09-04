"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-white"
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.company + item.role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-5 relative"
          >
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-orange-500" />

            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-neutral-900 dark:text-white">
                {item.role}
              </h3>
              <span className="text-sm text-neutral-500">{item.duration}</span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">{item.company}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}