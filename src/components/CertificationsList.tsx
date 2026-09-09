"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function CertificationsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12"
    >
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
        Certifications
      </h2>
      <div className="flex flex-wrap gap-3">
        {certifications.map((cert, i) =>
            cert.url ? (
                
              <a  key={`${cert.name}-${i}`}
                href={cert.url}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                <Award size={15} />
                {cert.name}
                <ExternalLink size={12} className="opacity-50" />
                </a>
            ) : (
                <span
                key={`${cert.name}-${i}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300"
                >
                <Award size={15} />
                {cert.name}
                </span>
            )
        )}
      </div>
    </motion.div>
  );
}