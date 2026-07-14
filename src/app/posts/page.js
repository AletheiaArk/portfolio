import PageShell from "@/components/layout/PageShell";
import EntryList from "@/components/common/EntryList";
import { getAllMeta } from "@/lib/content";

export const metadata = { title: "My Posts" };

export default function PostsPage() {
  return (
    <PageShell title="My Posts" subtitle="Notes and writing, newest first.">
      <EntryList items={getAllMeta("posts")} basePath="/posts" showDate />
    </PageShell>
  );
}
