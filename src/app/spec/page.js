import PageShell from "@/components/layout/PageShell";
import { specs } from "@/lib/site";

const description = "The hardware and software behind my server, development, and gaming setups.";
export const metadata = {
  title: "My Specs",
  description,
  alternates: { canonical: "/spec" },
  openGraph: { title: "My Specs", description, url: "/spec", type: "website" },
};

function SpecRows({ rows }) {
  return (
    <dl className="spec-list">
      {rows.map((row) => (
        <div key={row.label} className="spec-row">
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function SpecPage() {
  return (
    <PageShell title="My Specs" subtitle="The hardware &amp; software behind each setup." wide>
      {specs.map((group) => (
        <section key={group.key} className="spec-group">
          <h2 className="spec-title">{group.title}</h2>
          <div className="spec-col">
            <h3 className="spec-col-head">Hardware</h3>
            <SpecRows rows={group.hardware} />
            <h3 className="spec-col-head">Software</h3>
            <SpecRows rows={group.software} />
          </div>
        </section>
      ))}
    </PageShell>
  );
}
