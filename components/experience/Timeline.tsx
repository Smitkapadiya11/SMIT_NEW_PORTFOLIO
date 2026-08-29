"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/projects";

const COLORS = ["#6366f1", "#22d3ee", "#a855f7"];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-border md:block">
        <motion.div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-accent via-cyan to-purple"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-12 md:pl-20">
        {experience.map((exp, i) => {
          const color = COLORS[i % COLORS.length];
          return (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                className="absolute -left-[72px] top-1 hidden h-5 w-5 items-center justify-center rounded-full border-2 md:flex"
                style={{ borderColor: color, background: `${color}20` }}
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-2 w-2 rounded-full" style={{ background: color }} />
              </motion.div>

              <div className="rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/35 md:p-6">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-2 py-0.5 font-mono text-[10px]"
                        style={{
                          color,
                          background: `${color}18`,
                          border: `1px solid ${color}40`,
                        }}
                      >
                        {exp.type}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">{exp.location}</span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary md:text-lg">{exp.title}</h3>
                    <p className="text-sm text-text-soft">{exp.company}</p>
                  </div>
                  <span className="whitespace-nowrap rounded-lg border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-text-muted">
                    {exp.period}
                  </span>
                </div>

                {exp.description && (
                  <p className="mb-4 text-sm leading-relaxed text-text-soft">{exp.description}</p>
                )}

                {exp.bullets && (
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <motion.li
                        key={b}
                        className="flex gap-2 text-sm text-text-soft"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 + 0.3, duration: 0.4 }}
                      >
                        <span style={{ color }} className="mt-0.5 flex-shrink-0">
                          ›
                        </span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
