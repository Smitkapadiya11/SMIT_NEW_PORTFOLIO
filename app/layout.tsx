import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollAnimator from "@/components/ScrollAnimator";
import VisualBackdrop from "@/components/VisualBackdrop";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    type: "website",
    locale: "en_IN",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Generalist`,
    description: site.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395010",
    addressCountry: "IN",
  },
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-screen bg-bg text-text-primary antialiased">
        <VisualBackdrop />
        <SmoothScroll />
        <Navbar />
        <ScrollAnimator>
          <div className="relative z-10">{children}</div>
        </ScrollAnimator>
      </body>
    </html>
  );
}
