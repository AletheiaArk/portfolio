import "./globals.css";
import { Space_Grotesk, Averia_Gruesa_Libre } from "next/font/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  manifest: "/manifest.json",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary", title: site.title, description: site.description },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
    <html lang="en" className={`${sans.variable} ${display.variable}`} style={rootStyle} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
