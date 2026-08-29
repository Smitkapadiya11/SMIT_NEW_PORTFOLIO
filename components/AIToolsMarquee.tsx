"use client";

import { aiTools } from "@/data/projects";

export default function AIToolsMarquee() {
  const row1 = [...aiTools, ...aiTools];
  const row2 = [...[...aiTools].reverse(), ...[...aiTools].reverse()];

  return (
    <section id="marquee" className="relative overflow-hidden border-y border-border bg-surface py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

      <div className="mb-4 flex animate-marquee whitespace-nowrap">
        {row1.map((tool, i) => (
          <div key={`r1-${tool.name}-${i}`} className="mx-6 flex items-center gap-3">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full shadow-[0_0_8px_currentColor]"
              style={{ backgroundColor: tool.color, color: tool.color }}
            />
            <span className="font-mono text-sm font-medium uppercase tracking-wider text-text-soft">
              {tool.name}
            </span>
            <span className="text-border">·</span>
          </div>
        ))}
      </div>

      <div className="flex animate-marquee-reverse whitespace-nowrap opacity-60">
        {row2.map((tool, i) => (
          <div key={`r2-${tool.name}-${i}`} className="mx-6 flex items-center gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: tool.color }}
            />
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {tool.name}
            </span>
            <span className="text-border">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
