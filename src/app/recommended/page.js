import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { Icon } from "@/components/ui/Icon";
import { recommended } from "@/lib/site";

export const metadata = { title: "Recommended" };

export default function RecommendedPage() {
  return (
    <PageShell title="Recommended" subtitle="Things worth your time.">
      {recommended.length === 0 ? (
        <p className="empty-note">Nothing here yet — check back soon.</p>
      ) : (
        <ul className="list">
          {recommended.map((r) => (
            <li key={r.title}>
              <Link href={r.link} className="list-row">
                <span className="list-body">
                  <span className="list-title">
                    {r.title} <span className="pill">{r.meta}</span>
                  </span>
                  <span className="list-sub">{r.summary}</span>
                </span>
                <Icon.chevron className="list-arrow" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
