import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

// ============================================================================
//  Content layer — one Markdown file per entry.
//    content/projects/<slug>.md   ->  /projects/<slug>
//    content/posts/<slug>.md      ->  /posts/<slug>
//  Frontmatter: title, date (YYYY/MM/DD), summary, tags[] (optional),
//               link (optional). Body is Markdown with $inline$ / $$block$$
//               math (KaTeX).
// ============================================================================

const CONTENT_DIR = path.join(process.cwd(), "content");

function dirFor(type) {
  return path.join(CONTENT_DIR, type);
}

function readFiles(type) {
  const dir = dirFor(type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

const byNewest = (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

// Compile Markdown (incl. math) to an HTML string at build time.
async function markdownToHtml(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

// Metadata only (frontmatter), sorted newest first — used by list pages.
export function getAllMeta(type) {
  return readFiles(type)
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dirFor(type), file), "utf8");
      const { data } = matter(raw);
      return { slug, tags: [], ...data };
    })
    .sort(byNewest);
}

// Every slug of a type — used by generateStaticParams.
export function getSlugs(type) {
  return readFiles(type).map((f) => f.replace(/\.md$/, ""));
}

// Full entry (frontmatter + compiled HTML body) — used by detail pages.
export async function getEntry(type, slug) {
  const file = path.join(dirFor(type), `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  return { slug, tags: [], ...data, html };
}
