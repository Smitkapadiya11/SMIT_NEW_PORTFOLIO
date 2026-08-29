"use client";

import { aiTools } from "@/data/projects";

export default function AIToolsMarquee() {
  const items = [...aiTools, ...aiTools];

  return (
    <section id="marquee" className="relative overflow-hidden border-y border-border bg-surface py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {items.map((tool, i) => (
          <div key={`${tool.name}-${i}`} className="mx-5 flex items-center gap-2.5">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: tool.color, boxShadow: `0 0 6px ${tool.color}` }}
            />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-text-soft">
              {tool.name}
            </span>
            <span className="text-border">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
