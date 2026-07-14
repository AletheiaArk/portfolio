import Link from "next/link";
import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import PageShell from "@/components/layout/PageShell";
import { Icon } from "@/components/ui/Icon";
import { getSlugs, getEntry } from "@/lib/content";

export function generateStaticParams() {
  return getSlugs("posts").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = await getEntry("posts", slug);
  return { title: p ? p.title : "Post" };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const p = await getEntry("posts", slug);
  if (!p) notFound();

  return (
    <PageShell title={p.title} subtitle={p.summary} compact>
      <Link href="/posts" className="back-link">
        <Icon.chevron style={{ width: 16, height: 16, transform: "rotate(180deg)" }} aria-hidden="true" />
        Back to posts
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
