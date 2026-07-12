import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import { Icon } from "@/components/ui/Icon";
import { projects, getProject } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p ? p.title : "Project" };
}

const anchor = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <PageShell title={p.title} subtitle={p.summary}>
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

      <article className="article">
        {p.body.map((b, i) =>
          b.type === "h" ? (
            <h2 key={i} id={anchor(b.text)} className="article-h">{b.text}</h2>
          ) : (
            <p key={i} className="article-p">{b.text}</p>
          )
        )}
      </article>

      {p.link && p.link !== "#" && (
        <a className="ext-link" href={p.link} target="_blank" rel="noreferrer">
          <Icon.github style={{ width: 18, height: 18 }} aria-hidden="true" /> View source
        </a>
      )}
    </PageShell>
  );
}
