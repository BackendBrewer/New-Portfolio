"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { memories } from "@/data/memories";

function flattenImages(data: typeof memories) {
  return data.flatMap((memory) =>
    memory.images.map((src) => ({ src, caption: memory.caption }))
  );
}

const rotations = [-4, 3, -2, 4, -3, 2, -2.5, 3.5];
// har photo ko alternate size dete hain — organic, non-uniform feel ke liye
const sizes = ["w-36 sm:w-44", "w-32 sm:w-40", "w-40 sm:w-48", "w-36 sm:w-44"];

function PushPin() {
  return (
    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
      <div
        className="w-4 h-4 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #fdba74, #f97316 60%, #c2410c)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      />
      <div className="w-[2px] h-2 bg-neutral-400/60 mx-auto" />
    </div>
  );
}

export default function MemoriesGallery() {
  const flat = flattenImages(memories);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + flat.length) % flat.length)),
    [flat.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % flat.length)),
    [flat.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (memories.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
        <div className="flex items-center gap-2 text-orange-500 text-xs font-mono tracking-wider">
          <Camera size={13} />
          PHOTO ALBUM
        </div>
        <span className="text-xs text-neutral-400 font-mono">
          {flat.length} {flat.length === 1 ? "photo" : "photos"}
        </span>
      </div>
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
        A Few Memories
      </h2>
      <p className="mt-1 text-sm text-neutral-500">
        Some moments from university — where it all started.
      </p>

      {/* corkboard backdrop with dot texture */}
      <div
        className="relative mt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-6 py-10 sm:px-10 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(249,115,22,0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          backgroundColor: "rgba(250,250,249,0.4)",
        }}
      >
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {flat.map((item, i) => (
            <motion.button
              key={`memory-img-${i}`}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 30, rotate: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: rotations[i % rotations.length],
                scale: 1,
              }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                y: -6,
                zIndex: 10,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`relative bg-white p-2.5 pb-7 rounded-sm cursor-zoom-in ${sizes[i % sizes.length]}`}
              style={{
                transformOrigin: "center",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.1), 0 10px 20px -5px rgba(0,0,0,0.15)",
              }}
            >
              <PushPin />

              <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] pointer-events-none" />
              </div>

              <p className="mt-2.5 text-[10px] text-neutral-500 text-center italic truncate px-1 font-serif">
                {item.caption.split("—")[0].trim()}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center px-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close preview"
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white active:scale-90 transition-transform"
            >
              <X size={20} />
            </button>

            {flat.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white active:scale-90 transition-transform"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white active:scale-90 transition-transform"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white p-4 pb-10 rounded-sm shadow-2xl"
            >
              <div className="relative w-full h-[50vh]">
                <Image
                  src={flat[activeIndex].src}
                  alt={flat[activeIndex].caption}
                  fill
                  sizes="(max-width: 672px) 100vw, 672px"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-600 text-center px-4 font-serif italic">
                {flat[activeIndex].caption}
              </p>
            </motion.div>

            {/* thumbnail strip — neeche, kitni aur photos hain dikhane ke liye */}
            {flat.length > 1 && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="mt-5 flex gap-2 max-w-full overflow-x-auto px-4 pb-1"
              >
                {flat.map((item, i) => (
                  <button
                    key={`thumb-${i}`}
                    onClick={() => setActiveIndex(i)}
                    className={`relative w-12 h-12 shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                      i === activeIndex
                        ? "border-orange-500 opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <span className="mt-2 text-xs text-white/50 font-mono">
              {activeIndex + 1} / {flat.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}