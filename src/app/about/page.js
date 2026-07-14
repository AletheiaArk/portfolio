import PageShell from "@/components/layout/PageShell";
import { about, site } from "@/lib/site";

const description = about.me.paragraphs[0];
export const metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About", description, url: "/about", type: "profile" },
};

const handle = site.social.github.split("/").pop();

export default function AboutPage() {
  return (
    <PageShell>
      <section className="about-block">
        <h2 className="about-heading">{about.me.heading}</h2>
        <p className="about-handle">@{handle}</p>
        <div className="prose">
          {about.me.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="about-block">
        <h2 className="about-heading">{about.siteSection.heading}</h2>
        <div className="prose">
          {about.siteSection.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
