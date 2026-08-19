import "./globals.css";
import {
  Space_Grotesk,
  Averia_Gruesa_Libre,
  Cormorant_Garamond,
  Zen_Old_Mincho,
  Zen_Kaku_Gothic_New,
} from "next/font/google";
import { site } from "@/lib/site";

// Self-hosted fonts (no external request, no layout shift).
// Space Grotesk — modern body/heading text. Averia — the name's signature font.
const sans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Averia_Gruesa_Libre({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

// Editorial trio used by the entry lists: a Garamond for the small caps labels
// and dates, a Mincho serif for entry titles, a gothic sans for summaries.
const serif = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const mincho = Zen_Old_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mincho",
});

const gothic = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gothic",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const twitterHandle = "@" + site.writeUrl.split("/").pop();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.name, url: site.social.github }],
  creator: site.name,
  publisher: site.name,
  keywords: [site.name, "software developer", "AI", "portfolio", site.role],
  manifest: "/manifest.json",
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: site.title,
    title: site.title,
    description: site.description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: twitterHandle,
  },
};

// Structured data (JSON-LD) so search engines understand who/what this is.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: siteUrl,
  sameAs: [site.social.github, site.writeUrl].filter(Boolean),
};
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.title,
  url: siteUrl,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Let the page paint under the notch / home indicator; the mobile layout
  // pads itself back out with env(safe-area-inset-*).
  viewportFit: "cover",
  themeColor: "#35bfab",
};

// Brand colour tokens, exposed as CSS variables for globals.css.
const rootStyle = {
  cursor: "url(/images/cursor.svg) 2 1, auto",
  "--color-brand": "#35bfab",
  "--color-primary": "#334f52",
  "--color-secondary": "#7b888e",
  "--color-brand-secondary": "#1fc9e7",
  "--color-bg": "#eeeeee",
  "--color-border": "#ffffff",
  "--color-card": "#ffffff66",
  "--color-article": "#ffffffcc",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${mincho.variable} ${gothic.variable}`}
      style={rootStyle}
      suppressHydrationWarning
    >
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        {children}
      </body>
    </html>
  );
}
