"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { MagneticButton } from "@/components/motion";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import CircuitBackground from "@/components/svg/CircuitBackground";
import HeroMobileBG from "@/components/hero/HeroMobileBG";
import { site, heroBadges } from "@/data/site";

const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), { ssr: false });

const ROLES = [
  "AI Generalist",
  "Automation Specialist",
  "Generative AI Builder",
  "LLM Integration Expert",
  "Business AI Engineer",
];

const stats = [
  { value: 8, suffix: "+", label: "Months Building AI" },
  { value: 10, suffix: "+", label: "Businesses Helped" },
  { value: 15, suffix: "+", label: "AI Workflows Shipped" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-20 pb-12 md:px-12 lg:px-20">
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </ErrorBoundary>
      <HeroMobileBG />
      <CircuitBackground />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #05050f 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          className="mb-6 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-px w-6 bg-violet-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-accent md:text-xs">
            {site.titleAlt} · {site.locationShort}
          </span>
          <span className="ml-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-bright" />
            <span className="font-mono text-[10px] text-emerald-bright opacity-80">Open to work</span>
          </span>
        </motion.div>

        <motion.div
          className="mb-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {heroBadges.map((badge) => (
            <span key={badge} className="chip border-cyan/20 text-xs text-cyan">
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.h1
          className="mb-5 font-display text-[13vw] font-bold leading-[0.9] tracking-[-0.04em] xs:text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6rem] xl:text-[7rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-text-primary">Smit</span>
          <br />
          <span className="text-gradient">Kapadiya</span>
        </motion.h1>

        <motion.div
          className="mb-6 flex h-9 items-center overflow-hidden md:h-11"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span className="mr-2 font-mono text-sm text-text-muted md:text-base">I am a</span>
          <div className="relative flex h-full min-w-[200px] items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute font-display text-lg font-semibold text-gradient md:text-xl"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="ml-1 animate-blink font-mono text-sm text-violet-accent">_</span>
        </motion.div>

        <motion.p
          className="mb-8 max-w-lg text-sm leading-relaxed text-text-muted md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          I build AI systems that eliminate manual work —{" "}
          <span className="text-cyan-bright">automation pipelines</span>,{" "}
          <span className="text-emerald-bright">LLM-powered agents</span>, and{" "}
          <span className="text-violet-accent">generative AI integrations</span> for real businesses.
        </motion.p>

        <motion.div
          className="mb-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <MagneticButton className="w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative w-full overflow-hidden rounded-xl bg-violet-accent px-6 py-3 text-center text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(124,111,255,0.5)] md:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles size={16} />
                View My Work
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </MagneticButton>
          <MagneticButton className="w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-violet-accent/30 px-6 py-3 text-sm font-semibold text-violet-accent transition-all duration-300 hover:border-violet-accent/60 hover:bg-violet-accent/10 md:w-auto"
            >
              <Zap size={16} />
              Let&apos;s Connect →
            </a>
          </MagneticButton>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-bright/30 px-6 py-3 text-sm font-semibold text-emerald-bright transition-all hover:border-emerald-bright/50 md:w-auto"
          >
            WhatsApp {site.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 border-t border-border pt-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-gradient md:text-3xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-0.5 whitespace-pre-line font-mono text-[10px] leading-tight text-text-muted md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a
          href="#marquee"
          className="flex min-h-[44px] flex-col items-center justify-center gap-1 text-text-muted transition-colors hover:text-text-soft"
        >
          <motion.div
            className="mx-auto mb-1 h-12 w-px bg-gradient-to-b from-violet-accent to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
