import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026/07/24" -> { day: "24", monthYear: "Jul 2026" } */
function splitDate(date) {
  if (!date) return null;
  const [y, m, d] = String(date).split(/[/-]/);
  const month = MONTHS[Number(m) - 1];
  if (!month || !d) return null;
  return { day: String(Number(d)), monthYear: `${month} ${y}` };
}

/**
 * Editorial entry rows (projects · posts · gaming): a large day numeral in the
 * left rail, the entry itself in the middle, an optional cover on the right.
 * @param {Array}   items    entry objects (need slug, title, summary; optional date/tags/category/cover)
 * @param {string}  basePath route prefix each row links to, e.g. "/projects"
 * @param {boolean} showDate render the left date rail
 */
export default function EntryList({ items, basePath, showDate = false }) {
  if (!items.length) {
    return <p className="empty-note">Nothing here yet — check back soon.</p>;
  }
  return (
    <ul className="jlist">
      {items.map((it) => {
        const href = `${basePath}/${it.slug}`;
        const date = showDate ? splitDate(it.date) : null;
        const eyebrow = it.category || it.tags?.[0];
        return (
          <li key={it.slug}>
            <article className={"jrow" + (it.cover ? " has-cover" : "") + (date ? "" : " no-date")}>
              {date && (
                <div className="jrow-date">
                  <span className="jrow-day">{date.day}</span>
                  <span className="jrow-rule" aria-hidden="true" />
                  <span className="jrow-when">{date.monthYear}</span>
                </div>
              )}

              <div className="jrow-body">
                {eyebrow && <div className="jrow-eyebrow">{eyebrow}</div>}
                <Link href={href} className="jrow-titlelink">
                  <h3 className="jrow-title">{it.title}</h3>
                </Link>
                {it.summary && <p className="jrow-excerpt">{it.summary}</p>}
                <Link href={href} className="jrow-more">
                  Read More
                  <Icon.arrow className="jrow-arrow" aria-hidden="true" />
                </Link>
              </div>

              {it.cover && (
                <Link href={href} className="jrow-photo" tabIndex={-1} aria-hidden="true">
                  <img src={it.cover} alt="" />
                </Link>
              )}
            </article>
          </li>
        );
      })}
    </ul>
  );
}
