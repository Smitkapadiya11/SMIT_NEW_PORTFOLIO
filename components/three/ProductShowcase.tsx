"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LLM_LAYERS } from "@/data/llmLayers";

const ShowcaseCanvas = dynamic(() => import("@/components/three/ShowcaseCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-accent border-t-transparent" />
    </div>
  ),
});

export default function ProductShowcase() {
  const [inView, setInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLayer, setActiveLayer] = useState(2);
  const sectionRef = useRef<HTMLElement>(null);

  const handleActiveLayer = useCallback((index: number) => {
    setActiveLayer(index);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const viewObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    viewObserver.observe(section);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking = false;
          return;
        }
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollProgress(progress);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      viewObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const current = LLM_LAYERS[activeLayer];

  return (
    <section ref={sectionRef} id="showcase" className="section-padding relative overflow-hidden">
      <div className="container-max">
        <div className="mb-12 text-center md:mb-16" data-animate="fade-up">
          <p className="eyebrow mb-4">Interactive</p>
          <h2 className="heading-lg mb-4">See the LLM stack in motion</h2>
          <p className="body-md mx-auto max-w-xl">
            Drag to orbit the pipeline. Each ring is a real layer — prompt → tokenize → LLM → agents → automation → production.
          </p>
        </div>

        <div
          className="glow-card relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface/50 md:h-[520px]"
          data-animate="scale"
          data-delay="100"
        >
          {/* Layer legend — desktop left rail */}
          <div className="pointer-events-none absolute bottom-20 left-4 top-4 z-10 hidden w-44 flex-col justify-center gap-1.5 md:flex">
            {LLM_LAYERS.map((layer, i) => (
              <div
                key={layer.id}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 transition-all duration-300 ${
                  activeLayer === i ? "bg-surface/90 backdrop-blur-sm" : "opacity-50"
                }`}
              >
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full"
                  style={{
                    background: layer.color,
                    boxShadow: activeLayer === i ? `0 0 10px ${layer.color}` : "none",
                  }}
                />
                <div className="min-w-0">
                  <p className="truncate font-mono text-[10px] font-semibold text-text-primary">{layer.label}</p>
                  {activeLayer === i && (
                    <p className="truncate font-mono text-[9px] text-text-muted">{layer.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 md:pl-36">
            {inView && (
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-accent border-t-transparent" />
                  </div>
                }
              >
                <ShowcaseCanvas scrollProgress={scrollProgress} onActiveLayer={handleActiveLayer} />
              </Suspense>
            )}
          </div>

          {/* Active layer readout — mobile + bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-border/60 bg-bg/80 px-4 py-3 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full animate-pulse"
                    style={{ background: current.color, boxShadow: `0 0 12px ${current.color}` }}
                  />
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-text-primary">{current.label}</p>
                    <p className="truncate font-mono text-[10px] text-text-muted md:text-xs">{current.desc}</p>
                  </div>
                </div>
                <p className="hidden flex-shrink-0 font-mono text-[10px] text-text-muted sm:block">
                  ↑ tokens flowing
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] text-text-muted md:text-xs">
          Drag to orbit · Watch data tokens pulse through each layer
        </p>
      </div>
    </section>
  );
}
