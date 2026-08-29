"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  AnimatePresence,
  useInView,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { MagneticButton } from "@/components/motion";
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
  { value: 100, suffix: "%", label: "Real-World Projects" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(spring, "change", (v) => setDisplay(Math.round(v)));

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

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
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <div className="absolute inset-0 md:hidden" aria-hidden>
        <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-indigo-950 via-bg to-purple-950" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg" />

      <div className="container-max relative z-10 px-6 pt-28 md:px-12 md:pt-36 lg:px-20">
        <div className="max-w-4xl">
          <motion.div
            className="mb-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">{site.titleAlt}</span>
            <span className="hidden h-1 w-1 rounded-full bg-border md:block" />
            <span className="font-mono text-xs text-text-muted">{site.locationShort}</span>
          </motion.div>

          <motion.div
            className="mb-6 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heroBadges.map((badge) => (
              <span key={badge} className="chip border-cyan/20 text-xs text-cyan">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.h1
            className="heading-xl mb-4 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient">{site.heroHeadline.split("Manual Work.")[0]}</span>
            <span className="text-text-primary">Manual Work.</span>
          </motion.h1>

          <div className="mb-6 h-8 overflow-hidden md:h-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text font-display text-xl text-transparent md:text-2xl"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            className="body-lg mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Python · AI/ML · Automation · Data Science — {site.education}. {site.company} founder
            turning business processes into intelligent systems.
          </motion.p>

          <motion.div
            className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200, damping: 20 }}
          >
            <MagneticButton className="w-full sm:w-auto">
              <a href="#contact" className="btn-primary w-full md:w-auto">
                <Zap size={16} />
                Deploy Your AI Agent
              </a>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <a href="#projects" className="btn-secondary w-full md:w-auto">
                <Sparkles size={16} />
                See My Work
              </a>
            </MagneticButton>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full border-green-500/30 text-green-400 hover:border-green-500/50 md:w-auto"
            >
              WhatsApp {site.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 border-t border-border/50 pt-8 md:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-text-primary md:text-3xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="#marquee"
          className="flex min-h-[44px] flex-col items-center justify-center gap-2 text-text-muted transition-colors hover:text-text-soft"
        >
          <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
