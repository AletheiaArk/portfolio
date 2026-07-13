import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

// The row of actions under the calendar: X · Projects · Github (+ optional email).
export default function Controls() {
  const external = site.writeUrl.startsWith("http");
  const { github, email } = site.social;

  return (
    <div className="home-controls">
      <Link
        href={site.writeUrl}
        className="write-btn"
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <Icon.x aria-hidden="true" /> Twitter
      </Link>

      <Link className="grid-btn" href="/projects" aria-label="My projects">
        <Icon.grid style={{ width: 18, height: 18 }} aria-hidden="true" />
      </Link>

      <a className="github" href={github} target="_blank" rel="noreferrer">
        <Icon.github style={{ width: 18, height: 18 }} aria-hidden="true" /> Github
      </a>

      {email && (
        <a className="icon-only" href={`mailto:${email}`} aria-label="Email" style={{ color: "var(--color-brand)" }}>
          <Icon.mail style={{ width: 20, height: 20 }} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
