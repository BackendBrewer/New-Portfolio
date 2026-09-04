import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mszdev.vercel.app";

  const projectUrls = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    ...projectUrls,
  ];
}