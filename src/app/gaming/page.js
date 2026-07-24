import PageShell from "@/components/layout/PageShell";
import EntryList from "@/components/common/EntryList";
import { getAllMeta } from "@/lib/content";

const description = "Gaming notes, setups, and whatever I'm playing.";
export const metadata = {
  title: "Gaming Post",
  description,
  alternates: { canonical: "/gaming" },
  openGraph: { title: "Gaming Post", description, url: "/gaming", type: "website" },
};

export default function GamingPage() {
  return (
    <PageShell title="Gaming Post" subtitle="Gaming notes and setups, newest first.">
      <EntryList items={getAllMeta("gaming")} basePath="/gaming" showDate />
    </PageShell>
  );
}
