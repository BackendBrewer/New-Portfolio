import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectCard from "@/components/ProjectCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://mszdev.vercel.app";
  const absoluteImageUrl = `${siteUrl}${project.image}`;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: absoluteImageUrl, width: 1200, height: 630, alt: project.title }],
    },
    twitter: { card: "summary_large_image", images: [absoluteImageUrl] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Muhammad Salman",
    },
    ...(project.liveUrl && { url: project.liveUrl }),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap gap-8 text-sm border-y border-neutral-200 dark:border-neutral-800 py-4">
          <div>
            <p className="text-neutral-500">Role</p>
            <p className="text-neutral-900 dark:text-white font-medium">
              {project.role}
            </p>
          </div>
          <div>
            <p className="text-neutral-500">Duration</p>
            <p className="text-neutral-900 dark:text-white font-medium">
              {project.duration}
            </p>
          </div>
          {project.liveUrl && (
            <div>
              <p className="text-neutral-500">Live</p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline font-medium"
              >
                Visit site ↗
              </a>
            </div>
          )}
          {project.githubUrl && (
            <div>
              <p className="text-neutral-500">Code</p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline font-medium"
              >
                GitHub ↗
              </a>
            </div>
          )}
        </div>

        {/* Main image */}
        <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden mt-8 border border-neutral-200 dark:border-neutral-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Overview */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
            Overview
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* Challenges & Solutions */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-5">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((item, i) => (
              <div
                key={i}
                className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5"
              >
                <p className="text-sm font-semibold text-orange-500 mb-1">
                  Challenge
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                  {item.problem}
                </p>
                <p className="text-sm font-semibold text-green-600 dark:text-green-500 mb-1">
                  Solution
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-5">
              Gallery
            </h2>
            <ProjectGallery images={project.gallery} title={project.title} />
          </section>
        )}
        {/* Related projects */}
        {(() => {
          const related = projects.filter((p) => p.slug !== slug).slice(0, 2);
          if (related.length === 0) return null;

          return (
            <section className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-5">
                More Projects
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>
          );
        })()}
      </main>
      <Footer />
    </>
  );
}
