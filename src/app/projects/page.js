import PageShell from "@/components/layout/PageShell";
import ProjectList from "@/components/projects/ProjectList";
import { projects } from "@/lib/site";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <PageShell title="My Projects" subtitle="Things I've built and shipped.">
      <ProjectList items={projects} showTags />
    </PageShell>
  );
}
