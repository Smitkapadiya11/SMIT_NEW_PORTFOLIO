"use client";

import { metrics } from "@/data/projects";

export default function Metrics() {
  return (
    <section className="section-padding border-y border-border bg-surface/50">
      <div className="container-max">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={m.label} className="text-center" data-animate="fade-up" data-delay={String(i * 100)}>
              <p className="font-display text-4xl font-semibold text-gradient md:text-5xl">
                {m.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-text-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
