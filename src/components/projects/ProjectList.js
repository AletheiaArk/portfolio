import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/**
 * Renders a list of projects as tappable rows.
 * @param {Array}   items    project objects
 * @param {boolean} showDate show the date column (used by the "Recent" page)
 * @param {boolean} showTags show the tag chips (used by the "Projects" page)
 */
export default function ProjectList({ items, showDate = false, showTags = false }) {
  if (!items.length) {
    return <p className="empty-note">Nothing here yet — check back soon.</p>;
  }
  return (
    <ul className="list">
      {items.map((p) => (
        <li key={p.slug}>
          <Link href={`/projects/${p.slug}`} className="list-row">
            {showDate && <span className="recent-date">{p.date}</span>}
            <span className="list-body">
              <span className="list-title">{p.title}</span>
              <span className="list-sub">{p.summary}</span>
              {showTags && p.tags?.length > 0 && (
                <span className="tag-row">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </span>
              )}
            </span>
            <Icon.chevron className="list-arrow" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
