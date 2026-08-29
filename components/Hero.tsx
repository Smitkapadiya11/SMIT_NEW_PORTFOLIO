"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { site, heroStats, heroBadges } from "@/data/site";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

const subtitles = [
  "AI Automation Engineer",
  "AI Generalist",
  "Automation Specialist",
  "Generative AI Builder",
];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/15 blur-[80px] md:hidden" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/60 to-bg" />

      <div
        className={`container-max relative z-10 px-6 pt-28 transition-opacity duration-500 md:px-12 md:pt-36 lg:px-20 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="eyebrow">{site.title}</span>
            <span className="hidden h-1 w-1 rounded-full bg-border md:block" />
            <span className="font-mono text-xs text-text-muted">{site.locationShort}</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span key={badge} className="chip border-cyan/20 text-xs text-cyan">
                {badge}
              </span>
            ))}
          </div>

          <h1 className="heading-xl mb-4 max-w-3xl">
            <span className="text-gradient">{site.heroHeadline.split("Manual Work.")[0]}</span>
            <span className="text-text-primary">Manual Work.</span>
          </h1>

          <p className="mb-6 font-display text-xl text-accent-glow md:text-2xl">
            {subtitles[subtitleIndex]}
          </p>

          <p className="body-lg mb-8 max-w-2xl">
            Python · AI/ML · Automation · Data Science — {site.education}. {site.company} founder turning business processes into intelligent systems.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              <Zap size={16} />
              Deploy Your AI Agent
            </a>
            <a href="#projects" className="btn-secondary">
              <Sparkles size={16} />
              See My Work
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-green-500/30 text-green-400 hover:border-green-500/50"
            >
              WhatsApp {site.phoneDisplay}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-8 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-muted md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a href="#marquee" className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-text-soft">
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
