import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";

// Static paths — sab project pages build time pe generate ho jayenge
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: { "@type": "Person", name: "Muhammad Salman" },
    ...(project.liveUrl && { url: project.liveUrl }),
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-neutral-600">{project.description}</p>

      <div className="mt-4 flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-neutral-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" className="underline">
            Live Site
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" className="underline">
            GitHub
          </a>
        )}
      </div>
    </main>
  );
}