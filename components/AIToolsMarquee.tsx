"use client";

import { motion } from "framer-motion";
import { aiTools } from "@/data/projects";

const DOUBLED = [...aiTools, ...aiTools];

export default function AIToolsMarquee() {
  return (
    <section id="marquee" className="relative w-full overflow-hidden border-y border-border py-6">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
        {DOUBLED.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="group flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 transition-colors duration-300 hover:border-accent/35"
          >
            <span
              className="h-2 w-2 flex-shrink-0 rounded-full"
              style={{ background: tool.color, boxShadow: `0 0 6px ${tool.color}` }}
            />
            <span className="font-mono text-sm font-medium text-text-soft transition-colors group-hover:text-text-primary">
              {tool.name}
            </span>
          </div>
        ))}
        </motion.div>
      </div>

      <div className="mt-3 hidden overflow-hidden md:block">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
        {DOUBLED.map((tool, i) => (
          <div
            key={`rev-${tool.name}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 opacity-50"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: tool.color }} />
            <span className="font-mono text-xs text-text-muted">{tool.name}</span>
          </div>
        ))}
        </motion.div>
      </div>
    </section>
  );
}
