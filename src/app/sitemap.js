import { getSlugs } from "@/lib/content";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/spec", priority: 0.7 },
    { path: "/posts", priority: 0.7 },
    { path: "/projects", priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));

  const projects = getSlugs("projects").map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const posts = getSlugs("posts").map((slug) => ({
    url: `${base}/posts/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...projects, ...posts];
}
