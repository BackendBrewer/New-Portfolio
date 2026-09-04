import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />

      <section id="projects" className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      
      <Contact />
      <Footer />
    </>
  );
}