"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const ShowcaseCanvas = dynamic(() => import("@/components/three/ShowcaseCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  ),
});

export default function ProductShowcase() {
  const [inView, setInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} id="showcase" className="section-padding relative overflow-hidden">
      <div className="container-max">
        <div className="mb-16 text-center" data-animate="fade-up">
          <p className="eyebrow mb-4">Interactive</p>
          <h2 className="heading-lg mb-4">See the system in motion</h2>
          <p className="body-md mx-auto max-w-xl">
            Drag to explore. Every layer represents a real capability — from LLM integration to production automation.
          </p>
        </div>

        <div
          className="glow-card relative mx-auto h-[360px] max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface/50 md:h-[480px]"
          data-animate="scale"
          data-delay="100"
        >
          {inView ? (
            <ErrorBoundary fallback={
              <div className="flex h-full items-center justify-center">
                <p className="font-mono text-xs text-text-muted">Interactive preview unavailable</p>
              </div>
            }>
              <Suspense fallback={null}>
                <ShowcaseCanvas scrollProgress={scrollProgress} />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="font-mono text-xs text-text-muted">Loading 3D…</p>
            </div>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <p className="font-mono text-xs text-text-muted">Drag to rotate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
