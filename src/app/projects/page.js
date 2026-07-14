import PageShell from "@/components/layout/PageShell";
import EntryList from "@/components/common/EntryList";
import { getAllMeta } from "@/lib/content";

const description = "Things I've built and shipped — projects in software and AI.";
export const metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "My Projects", description, url: "/projects", type: "website" },
};

export default function ProjectsPage() {
  return (
    <PageShell title="My Projects" subtitle="Things I've built and shipped.">
      <EntryList items={getAllMeta("projects")} basePath="/projects" showTags />
    </PageShell>
  );
}
