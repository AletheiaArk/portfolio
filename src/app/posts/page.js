import PageShell from "@/components/layout/PageShell";
import EntryList from "@/components/common/EntryList";
import { getAllMeta } from "@/lib/content";

const description = "Notes and writing on software, AI, and building things.";
export const metadata = {
  title: "My Posts",
  description,
  alternates: { canonical: "/posts" },
  openGraph: { title: "My Posts", description, url: "/posts", type: "website" },
};

export default function PostsPage() {
  return (
    <PageShell title="My Posts" subtitle="Notes and writing, newest first.">
      <EntryList items={getAllMeta("posts")} basePath="/posts" showDate />
    </PageShell>
  );
}
