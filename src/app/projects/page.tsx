import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects built by Muhammad Salman — Laravel developer.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          A collection of things I've built — from live production apps to
          personal experiments.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}