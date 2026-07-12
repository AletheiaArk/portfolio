import PageShell from "@/components/layout/PageShell";
import { about, site, facts } from "@/lib/site";

export const metadata = { title: "About" };

const handle = site.social.github.split("/").pop();

export default function AboutPage() {
  return (
    <PageShell title={about.heading} subtitle={`@${handle}`}>
      <div className="prose">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <dl className="facts">
        {facts.map((f) => (
          <div key={f.label} className="fact">
            <dt><span className="info-ico" aria-hidden="true">{f.icon}</span>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      {site.motto && <blockquote className="motto">{site.motto}</blockquote>}
    </PageShell>
  );
}
