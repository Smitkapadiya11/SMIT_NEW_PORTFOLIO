"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

interface ScrollAnimatorProps {
  children: React.ReactNode;
}

export default function ScrollAnimator({ children }: ScrollAnimatorProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const type = el.dataset.animate || "fade-up";
          const delay = parseInt(el.dataset.delay || "0", 10);

          if (el.dataset.animated === "true") return;
          el.dataset.animated = "true";

          const baseConfig = {
            targets: el,
            duration: 800,
            delay,
            easing: "easeOutCubic",
          };

          switch (type) {
            case "fade-up":
              anime({
                ...baseConfig,
                opacity: [0, 1],
                translateY: [32, 0],
              });
              break;
            case "fade-left":
              anime({
                ...baseConfig,
                opacity: [0, 1],
                translateX: [-40, 0],
              });
              break;
            case "fade-right":
              anime({
                ...baseConfig,
                opacity: [0, 1],
                translateX: [40, 0],
              });
              break;
            case "scale":
              anime({
                ...baseConfig,
                opacity: [0, 1],
                scale: [0.92, 1],
              });
              break;
            default:
              anime({ ...baseConfig, opacity: [0, 1] });
          }

          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
