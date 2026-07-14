import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

/**
 * Renders a list of entries (projects or posts) as tappable rows.
 * @param {Array}   items    entry objects (need slug, title, summary; optional date/tags)
 * @param {string}  basePath route prefix each row links to, e.g. "/projects" or "/posts"
 * @param {boolean} showDate show the date column
 * @param {boolean} showTags show the tag chips
 */
export default function EntryList({ items, basePath, showDate = false, showTags = false }) {
  if (!items.length) {
    return <p className="empty-note">Nothing here yet — check back soon.</p>;
  }
  return (
    <ul className="list">
      {items.map((it) => (
        <li key={it.slug}>
          <Link href={`${basePath}/${it.slug}`} className="list-row">
            {showDate && <span className="recent-date">{it.date}</span>}
            <span className="list-body">
              <span className="list-title">{it.title}</span>
              <span className="list-sub">{it.summary}</span>
              {showTags && it.tags?.length > 0 && (
                <span className="tag-row">
                  {it.tags.map((t) => (
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
