"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors"
      >
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-neutral-400 mt-1">
            {project.description}
          </p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}