# Aletheia's Portfolio

A personal portfolio built as a glassmorphism **bento dashboard** with Next.js.

## Stack

- **Next.js 15** (App Router) + **React 19**
- Plain CSS (`src/app/globals.css`) — no CSS framework, easy to tweak
- `next/font` (self-hosted, no external request): **Space Grotesk** for body & headings,
  *Averia Gruesa Libre* as the display font reserved for the name

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
npm run lint     # eslint (next/core-web-vitals)
```

## Make it yours

**Everything editable lives in [`src/lib/site.js`](src/lib/site.js)** — your name, role,
avatar, social links, motto, About text, and projects. Nothing is hard-coded in the
components, so you never have to hunt around.

```js
export const site = {
  name: "Aletheia",
  role: "Independent Developer",
  avatar: "/images/avatar-github.png",
  social: { github: "https://github.com/AletheiaArk", email: "" },
  ...
};
```

Swap the images in `public/images` for your own to finish personalising it.

When you deploy, set `NEXT_PUBLIC_SITE_URL` to your live URL (e.g. `https://aletheia.dev`)
so Open Graph / social-share metadata resolves to absolute URLs. It defaults to
`http://localhost:3000` for local development.

## Project structure

```
public/                 static assets (avatar, cursor, favicon, manifest)
src/
  app/                  routes (App Router)
    layout.js           root layout, fonts, metadata
    page.js             home dashboard
    globals.css         all styles
    not-found.js        styled 404
    recent/             "Recent Articles" — projects, newest first
    projects/           project list + [slug] detail
    about/              about page
    recommended/        recommended list
  components/
    layout/             Background, Sidebar, PageShell
    home/               Profile, Clock, Calendar, Controls
    projects/           ProjectList (shared by /recent and /projects)
    ui/                 Icon set
  lib/
    site.js             single source of content
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Home dashboard — profile card, motto quote, live clock, live calendar, actions |
| `/recent` | "Recent Articles" — projects sorted newest → oldest |
| `/projects` | All projects with tags |
| `/projects/[slug]` | Project detail (statically pre-rendered) |
| `/about` | Intro, quick facts, motto |
| `/recommended` | Recommended reads / tools (empty until you add some) |
| `*` | Styled 404 |

The glass sidebar ([`components/layout/Sidebar.js`](src/components/layout/Sidebar.js)) is
shared across every page and highlights the active route automatically. Only the sidebar
(active-link highlighting), clock, and calendar are client components; everything else
renders on the server.

## Colours

`--color-brand:#35bfab` · `--color-primary:#334f52` · `--color-secondary:#7b888e`
· `--color-brand-secondary:#1fc9e7` · `--color-bg:#eeeeee` — defined on `<html>` in
[`layout.js`](src/app/layout.js).
