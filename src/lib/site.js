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
    "Aletheia is a software developer with a minimalist aesthetic, working across software and AI, and currently building a proprietary project in finance.",

  /* Motto — shown as the profile quote and on the About page --------------- */
  motto: "Your lack of commitment is an insult to those who believe in you.",

  /* Social links (leave a value blank to hide that button) ------------------ */
  social: {
    github: "https://github.com/AletheiaArk",
    email: "",
  },

  /* Where the home "Write" button links ------------------------------------ */
  writeUrl: "https://x.com/AletheiaArk",
};

/* Navigation — each item is a real page ------------------------------------ */
export const nav = [
  { key: "home", label: "Home", href: "/", icon: "home" },
  { key: "about", label: "About", href: "/about", icon: "about" },
  { key: "spec", label: "My Specs", href: "/spec", icon: "chip" },
  { key: "posts", label: "My Posts", href: "/posts", icon: "article" },
  { key: "projects", label: "My Projects", href: "/projects", icon: "projects" },
];

/* ---------------------------------------------------------------------------
 *  Projects & Posts now live as Markdown files, one per entry:
 *    content/projects/<slug>.md   and   content/posts/<slug>.md
 *  They are read + compiled (incl. KaTeX math) in src/lib/content.js.
 * ------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------
 *  My Spec — the hardware & software behind each setup. Fill in the values;
 *  add or remove rows freely. Each group renders a Hardware and Software list.
 * ------------------------------------------------------------------------- */
export const specs = [
  {
    key: "server",
    title: "Server",
    hardware: [
      { label: "CPU", value: "AMD Ryzen 7 H 255" },
      { label: "Memory", value: "24GB DDR5-4800" },
      { label: "Storage", value: "1TB + 128GB (OS)" },
      { label: "Network", value: "1 GbE" },
    ],
    software: [
      { label: "OS", value: "Windows 11" },
    ],
  },
  {
    key: "development",
    title: "Development",
    hardware: [
      { label: "Chip", value: "Apple M4" },
      { label: "Memory", value: "16GB" },
      { label: "Storage", value: "512GB" },
    ],
    software: [
      { label: "Editor", value: "VS Code, Claude Code, Codex" },
    ],
  },
  {
    key: "gaming",
    title: "Gaming",
    hardware: [
      { label: "CPU", value: "AMD Ryzen 5 9600X" },
      { label: "GPU", value: "AMD Radeon RX 9060 XT 16GB" },
      { label: "Memory", value: "G.SKILL Trident Z5 Royal Neo DDR5-6000 CL28 32GB" },
      { label: "Storage", value: "1TB + 1TB" },
      { label: "Monitor", value: "Gigabyte GS27QA (27\" 2K 180Hz)" },
      { label: "Keyboard", value: "Evoworks Evo80 Aluminum TKL Hotswap Wireless (Anodized Sand Gold)" },
      { label: "Mouse", value: "Logitech G304 X & ATK F1 V2" },
    ],
    software: [
      { label: "OS", value: "Windows 11" },
    ],
  },
];

export const about = {
  me: {
    heading: "About me",
    paragraphs: [
      "I'm Aletheia, a software developer with a minimalist aesthetic approach. I care about building things that are clean, deliberate, and do exactly what they need to, nothing more.",
      "Most of my work sits at the intersection of software and AI. I enjoy taking open-ended, ambiguous problems and shaping them into systems that are reliable, efficient, and genuinely useful, the kind of engineering that stays out of the way and simply works.",
      "Right now my focus is a proprietary project in the finance sector, where I apply AI to problems that demand a high degree of precision and reliability.",
    ],
  },
  siteSection: {
    heading: "About the site",
    paragraphs: [
      "This portfolio is an evolving collection of my work, a place where I gather the projects I care about and keep a record of what I'm building over time.",
      "Have a look through my projects to see what I've made, and check back now and then, as I add new work and writing along the way.",
    ],
  },
};
