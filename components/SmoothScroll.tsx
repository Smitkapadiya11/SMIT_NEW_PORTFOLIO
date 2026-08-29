"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (prefersReducedMotion || isMobile) return;

    let lenis: InstanceType<typeof import("lenis").default> | null = null;
    let rafId = 0;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 0.7, lerp: 0.12, smoothWheel: true });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    const onAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || !lenis) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -80 });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", onAnchorClick);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", onAnchorClick);
      });
    };
  }, []);

  return null;
}
