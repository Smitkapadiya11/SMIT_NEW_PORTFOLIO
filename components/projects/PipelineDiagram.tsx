"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const STEPS = [
  { id: 1, label: "Scrape News", sub: "Node.js scrapers", color: "#6366f1", icon: "🌐" },
  { id: 2, label: "Refine Data", sub: "JavaScript processing", color: "#8b5cf6", icon: "⚙️" },
  { id: 3, label: "Grok AI Filters", sub: "Best 1-2 stories", color: "#a855f7", icon: "🤖" },
  { id: 4, label: "Script Writer AI", sub: "Video scripts", color: "#22d3ee", icon: "✍️" },
  { id: 5, label: "Client Review", sub: "Google Sheets", color: "#10b981", icon: "✅" },
  { id: 6, label: "AI Video Gen", sub: "Clone + Audio API", color: "#f59e0b", icon: "🎬" },
  { id: 7, label: "Auto Publish", sub: "All social platforms", color: "#ef4444", icon: "🚀" },
];

export default function PipelineDiagram() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="w-full overflow-x-auto py-4">
      <div className="hidden min-w-[700px] items-center justify-between gap-2 px-4 md:flex">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              className="group flex cursor-default flex-col items-center gap-2"
            >
              <div
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-2xl"
                style={{
                  borderColor: step.color,
                  background: `${step.color}18`,
                  boxShadow: `0 0 20px ${step.color}30`,
                }}
              >
                {step.icon}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2"
                  style={{ borderColor: step.color }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <div className="max-w-[80px] text-center">
                <p className="text-[10px] font-semibold leading-tight text-text-primary">{step.label}</p>
                <p className="mt-0.5 text-[9px] leading-tight text-text-muted">{step.sub}</p>
              </div>
            </motion.div>

            {i < STEPS.length - 1 && (
              <motion.div
                className="flex-shrink-0"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                style={{ originX: 0 }}
              >
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <motion.path
                    d="M0 8 H26"
                    stroke={`url(#grad-${i})`}
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    animate={{ strokeDashoffset: [-6, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <path
                    d="M22 4 L30 8 L22 12"
                    stroke={`url(#grad-${i})`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor={STEPS[i].color} />
                      <stop offset="1" stopColor={STEPS[i + 1].color} />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-0 px-4 md:hidden">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <motion.div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg"
                style={{ background: `${step.color}20`, border: `1.5px solid ${step.color}` }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {step.icon}
              </motion.div>
              {i < STEPS.length - 1 && (
                <motion.div
                  className="mt-1 h-8 w-px"
                  style={{
                    background: `linear-gradient(to bottom, ${step.color}, ${STEPS[i + 1].color})`,
                  }}
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                />
              )}
            </div>
            <motion.div
              className="pb-6 pt-1.5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.15, duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-text-primary">{step.label}</p>
              <p className="text-xs text-text-muted">{step.sub}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
