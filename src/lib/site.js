// ============================================================================
//  SITE CONFIG — edit this one file to make the portfolio yours.
//  All user-facing text, links, and content live here.
// ============================================================================

export const site = {
  /* Identity ---------------------------------------------------------------- */
  name: "Aletheia", // shown on the home profile card
  role: "Independent Developer", // shown under the name
  avatar: "/images/avatar-github.png", // profile picture

  /* Browser tab / SEO ------------------------------------------------------- */
  title: "Aletheia's Portfolio",
  description:
    "Aletheia — independent developer. CS graduate, Hong Kong Polytechnic University.",

  /* Motto — shown as the profile quote and on the About page --------------- */
  motto: "Your lack of commitment is an insult to those who believe in you.",

  /* Social links (leave a value blank to hide that button) ------------------ */
  social: {
    github: "https://github.com/AletheiaArk",
    email: "",
  },

  /* Where the home "Write" button links ------------------------------------ */
  writeUrl: "https://github.com/AletheiaArk",
};

/* Quick facts — shown on the About page ------------------------------------- */
export const facts = [
  { icon: "💻", label: "Focus", value: "Independent developer, coding with passion" },
  { icon: "🎓", label: "Education", value: "BSc Computer Science — Hong Kong Polytechnic University" },
  { icon: "📍", label: "Based in", value: "Hong Kong" },
  { icon: "🗣️", label: "Languages", value: "English · Mandarin (native) · Japanese (learning)" },
];

/* Navigation — each item is a real page ------------------------------------ */
export const nav = [
  { key: "home", label: "Home", href: "/", icon: "home" },
  { key: "recent", label: "Recent Articles", href: "/recent", icon: "article" },
  { key: "projects", label: "My Projects", href: "/projects", icon: "projects" },
  { key: "about", label: "About", href: "/about", icon: "about" },
  { key: "recommended", label: "Recommended", href: "/recommended", icon: "share" },
];

/* ---------------------------------------------------------------------------
 *  Projects. `body` blocks render on the detail page:
 *    { type: "h", text }  -> section heading
 *    { type: "p", text }  -> paragraph
 * ------------------------------------------------------------------------- */
export const projects = [
  {
    slug: "github",
    title: "GitHub",
    date: "2026/01/01",
    summary: "My open-source work and experiments live here.",
    tags: ["@AletheiaArk"],
    link: "https://github.com/AletheiaArk",
    body: [
      {
        type: "p",
        text: "I build and share things on GitHub. Follow along at github.com/AletheiaArk — more projects are on the way.",
      },
    ],
  },
];

/* Recommended reads / tools / talks (empty until you add some) ------------- */
export const recommended = [];

export const about = {
  heading: "About",
  paragraphs: [
    "Hey — I'm Aletheia, an independent developer coding with passion.",
    "I'm a Computer Science graduate from the Hong Kong Polytechnic University. I speak English and Mandarin natively, and I'm currently learning Japanese.",
    "I like building things end to end and shipping them. This site is where I'll collect my projects over time.",
  ],
};

/* Helpers ------------------------------------------------------------------ */
export const getProject = (slug) => projects.find((p) => p.slug === slug);

// Projects sorted newest → oldest (used by the "Recent Articles" page).
export const recentProjects = () =>
  [...projects].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
