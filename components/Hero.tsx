"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { site, heroStats } from "@/data/site";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

const subtitles = [
  "AI Generalist",
  "Automation Specialist",
  "Generative AI Builder",
  "I make businesses smarter with AI",
];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden gradient-mesh">
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Mobile ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px] md:hidden" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg md:via-bg/30" />

      <div className="container-max relative z-10 px-6 pt-28 md:px-12 md:pt-36 lg:px-20">
        <div className="max-w-4xl">
          <motion.div {...fadeUp(0)} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="eyebrow">AI Systems Builder</span>
            <span className="hidden h-1 w-1 rounded-full bg-border md:block" />
            <span className="font-mono text-xs text-text-muted">{site.locationShort}</span>
            <span className="chip border-cyan/30 text-cyan">{site.availability}</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.15)} className="heading-xl mb-4">
            <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className="mb-6 h-9 overflow-hidden md:h-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={subtitleIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="font-display text-xl text-accent-glow md:text-2xl"
              >
                {subtitles[subtitleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p {...fadeUp(0.45)} className="body-lg mb-8 max-w-2xl">
            {site.tagline} Real systems, real clients, real results.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="mb-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group">
              <Sparkles size={16} className="transition-transform group-hover:rotate-12" />
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Connect
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-green-500/30 text-green-400 hover:border-green-500/50 hover:text-green-300"
            >
              WhatsApp Me
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.7)}
            className="grid grid-cols-2 gap-4 border-t border-border/50 pt-8 sm:grid-cols-4"
          >
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
          </motion.div>
        </div>
      </div>

      <motion.div
        {...fadeUp(0.9)}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#marquee"
          className="flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-text-soft"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
