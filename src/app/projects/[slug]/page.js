import Link from "next/link";
import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import PageShell from "@/components/layout/PageShell";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { getSlugs, getEntry } from "@/lib/content";

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = await getEntry("projects", slug);
  if (!p) return { title: "Project" };
  const url = `/projects/${slug}`;
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.summary,
      url,
      publishedTime: p.date ? p.date.replaceAll("/", "-") : undefined,
      tags: p.tags,
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.summary },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = await getEntry("projects", slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: p.title,
    description: p.summary,
    datePublished: p.date ? p.date.replaceAll("/", "-") : undefined,
    author: { "@type": "Person", name: site.name, url: site.social.github },
    keywords: p.tags?.join(", "),
  };

  return (
    <PageShell title={p.title} subtitle={p.summary} compact>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/projects" className="back-link">
        <Icon.chevron style={{ width: 16, height: 16, transform: "rotate(180deg)" }} aria-hidden="true" />
        Back to projects
      </Link>

      {p.tags?.length > 0 && (
        <div className="tag-row" style={{ marginBottom: 20 }}>
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}

      <article className="article" dangerouslySetInnerHTML={{ __html: p.html }} />

      {p.link && p.link !== "#" && (
        <a className="ext-link" href={p.link} target="_blank" rel="noreferrer">
          <Icon.github style={{ width: 18, height: 18 }} aria-hidden="true" /> View source
        </a>
      )}
    </PageShell>
  );
}
