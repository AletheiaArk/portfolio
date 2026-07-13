import PageShell from "@/components/layout/PageShell";
import { specs } from "@/lib/site";

export const metadata = { title: "My Spec" };

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
    <PageShell title="My Spec" subtitle="The hardware &amp; software behind each setup." wide>
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
