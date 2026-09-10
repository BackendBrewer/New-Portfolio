import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";
import StatsStrip from "@/components/StatsStrip";
import Highlights from "@/components/Highlights";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <Header />
      <Hero />
      <StatsStrip />
      <Highlights />

      {/* Brief intro — full detail /about pe */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Laravel developer at TRZ Technologies, currently working on
          Palsome — a live social platform. Focused on clean backend
          systems and fast, modern frontends.
        </p>
        <Link
          href="/about"
          className="inline-block mt-4 text-sm text-orange-500 hover:underline"
        >
          More about me →
        </Link>
      </section>

      {/* Featured projects — full list /projects pe */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-orange-500 hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}