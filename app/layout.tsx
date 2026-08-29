import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/providers/Providers";
import ScrollAnimator from "@/components/ScrollAnimator";
import VisualBackdrop from "@/components/VisualBackdrop";
import CursorGlow from "@/components/CursorGlow";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — AI Generalist & Automation Specialist`,
  description:
    "I build AI systems that eliminate manual work — automation pipelines, LLM integrations, chatbots, and AI agents for real businesses. Based in Surat, India.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — AI Generalist`,
    description:
      "8+ months building real AI for real clients. From automation pipelines to generative AI integrations.",
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
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
  jobTitle: "AI Generalist & Automation Specialist",
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
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
        <Providers>
          <VisualBackdrop />
          <ErrorBoundary fallback={null}>
            <CursorGlow />
          </ErrorBoundary>
          <Navbar />
          <ScrollAnimator>
            <div className="relative z-10">{children}</div>
          </ScrollAnimator>
        </Providers>
      </body>
    </html>
  );
}
