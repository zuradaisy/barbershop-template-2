import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Oswald } from "next/font/google";
import { FloatingWa } from "@/components/layouts/floating-wa";
import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { SkipLink } from "@/components/layouts/skip-link";
import { ThemeScript } from "@/components/layouts/theme-script";
import { site } from "@/content/site";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`h-full antialiased ${manrope.variable} ${oswald.variable}`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
        <ThemeScript />
        <SkipLink label={site.skipLinkLabel} />
        <Navbar />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <FloatingWa />
      </body>
    </html>
  );
}
