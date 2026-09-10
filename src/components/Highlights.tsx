"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { Sparkles, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { workLog } from "@/data/work-log";

const highlightDates = ["2026-08-21", "2026-06-17", "2026-05-11"];

function TiltCard({
  entry,
  index,
}: {
  entry: (typeof workLog)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 25,
  });

  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative rounded-2xl p-[1px] overflow-hidden"
      >
        {/* animated gradient border */}
        <motion.div
          animate={{
            background: hovered
              ? "conic-gradient(from 0deg, #f97316, #fb923c, #f97316, #7c2d12, #f97316)"
              : "conic-gradient(from 0deg, transparent, transparent)",
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        />
        {hovered && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, #f97316 15%, transparent 30%)",
            }}
          />
        )}

        {/* card body */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative bg-white dark:bg-[#0d0c0b] rounded-2xl p-6 h-full"
        >
          {/* mouse-following glow */}
          <motion.div
            style={{
              left: glowX,
              top: glowY,
            }}
            className="pointer-events-none absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <div className="relative flex items-center justify-between mb-4">
            <motion.div
              animate={hovered ? { rotate: [0, -15, 15, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center"
            >
              <Zap size={17} className="text-orange-500" />
            </motion.div>
            <span className="text-5xl font-bold text-neutral-100 dark:text-neutral-900">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="relative font-semibold text-neutral-900 dark:text-white leading-snug text-[15px]">
            {entry.title}
          </h3>

          <p className="relative mt-2 text-sm text-neutral-500 leading-relaxed line-clamp-3">
            {entry.challenge}
          </p>

          <div className="relative mt-4 flex gap-1.5 flex-wrap">
            {entry.tags.slice(0, 2).map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Highlights() {
  const highlights = workLog.filter((entry) =>
    highlightDates.includes(entry.date)
  );

  if (highlights.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-10 flex-wrap gap-4"
      >
        <div>
          <motion.div
            className="flex items-center gap-2 text-orange-500 text-xs font-mono tracking-wider mb-3"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Sparkles size={13} />
            </motion.span>
            RECENT HIGHLIGHTS
          </motion.div>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Real problems, real fixes
          </h2>
        </div>
        <Link
          href="/experience"
          className="group flex items-center gap-1 text-sm text-orange-500 shrink-0"
        >
          View all
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </Link>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-3">
        {highlights.map((entry, i) => (
          <TiltCard key={entry.date + entry.title} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}