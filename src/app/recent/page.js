import PageShell from "@/components/layout/PageShell";
import ProjectList from "@/components/projects/ProjectList";
import { recentProjects } from "@/lib/site";

export const metadata = { title: "Recent Articles" };

export default function RecentPage() {
  return (
    <PageShell title="Recent Articles" subtitle="My latest projects, newest first.">
      <ProjectList items={recentProjects()} showDate />
    </PageShell>
  );
}
