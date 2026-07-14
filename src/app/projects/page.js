import PageShell from "@/components/layout/PageShell";
import EntryList from "@/components/common/EntryList";
import { getAllMeta } from "@/lib/content";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageShell title="My Projects" subtitle="Things I've built and shipped.">
      <EntryList items={getAllMeta("projects")} basePath="/projects" showTags />
    </PageShell>
  );
}
