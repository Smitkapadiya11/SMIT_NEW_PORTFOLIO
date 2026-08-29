"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const STEPS = [
  { label: "Scrape News", sub: "Node.js", icon: "🌐", color: "#7c6fff" },
  { label: "Refine + Clean", sub: "JavaScript", icon: "⚙️", color: "#9d7fff" },
  { label: "Grok AI Filters", sub: "Best 1-2 stories", icon: "🤖", color: "#00e5ff" },
  { label: "AI Scriptwriter", sub: "GPT / Claude", icon: "✍️", color: "#00ff94" },
  { label: "Client Review", sub: "Google Sheets", icon: "✅", color: "#ffb800" },
  { label: "AI Video Clone", sub: "Video + Audio", icon: "🎬", color: "#ff8c00" },
  { label: "Auto Publish", sub: "All Socials", icon: "🚀", color: "#ff4d6d" },
];

export default function PipelineDiagram() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="w-full">
      <div className="relative hidden overflow-x-auto md:block">
        <svg viewBox="0 0 860 120" xmlns="http://www.w3.org/2000/svg" className="min-w-[700px] w-full" aria-label="AI Automation Pipeline">
          <defs>
            {STEPS.map((s, i) => (
              <radialGradient key={i} id={`ng${i}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={s.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0.2" />
              </radialGradient>
            ))}
            <filter id="node-glow">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {STEPS.slice(0, -1).map((s, i) => {
            const x1 = 60 + i * 124 + 28;
            const x2 = 60 + (i + 1) * 124 - 28;
            return (
              <g key={`conn-${i}`}>
                <line x1={x1} y1={50} x2={x2} y2={50} stroke={s.color} strokeWidth="1" strokeOpacity="0.2" />
                <motion.line
                  x1={x1}
                  y1={50}
                  x2={x2}
                  y2={50}
                  stroke={s.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.18 }}
                />
                {inView && (
                  <circle r="3.5" fill={STEPS[i + 1].color} opacity="0.95" filter="url(#node-glow)">
                    <animateMotion dur="1.2s" repeatCount="indefinite" begin={`${i * 0.4}s`} path={`M ${x1} 50 L ${x2} 50`} />
                  </circle>
                )}
              </g>
            );
          })}

          {STEPS.map((s, i) => {
            const cx = 60 + i * 124;
            return (
              <motion.g
                key={s.label}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.16, type: "spring", stiffness: 180, damping: 14 }}
              >
                <circle cx={cx} cy={50} r={26} fill={`url(#ng${i})`} filter="url(#node-glow)" />
                <circle cx={cx} cy={50} r={26} fill="none" stroke={s.color} strokeWidth="1.2" opacity="0.6" />
                <text x={cx} y={50} textAnchor="middle" dominantBaseline="central" fontSize="16">
                  {s.icon}
                </text>
                <circle cx={cx + 20} cy={28} r={9} fill={s.color} />
                <text x={cx + 20} y={28} textAnchor="middle" dominantBaseline="central" fontSize="8" fill="white" fontWeight="700">
                  {i + 1}
                </text>
                <text x={cx} y={88} textAnchor="middle" fontSize="8.5" fill="#f0f0ff" fontWeight="600" fontFamily="Clash Display, sans-serif">
                  {s.label}
                </text>
                <text x={cx} y={102} textAnchor="middle" fontSize="7" fill="#8888bb" fontFamily="JetBrains Mono, monospace">
                  {s.sub}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-col gap-0 md:hidden">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-xl border text-xl"
                style={{ borderColor: `${s.color}60`, background: `${s.color}15`, boxShadow: `0 0 14px ${s.color}30` }}
              >
                {s.icon}
              </div>
              {i < STEPS.length - 1 && (
                <motion.div
                  className="my-1 min-h-[32px] w-px flex-1"
                  style={{ background: `linear-gradient(to bottom, ${s.color}, ${STEPS[i + 1].color})`, transformOrigin: "top" }}
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                />
              )}
            </div>
            <div className="pb-6 pt-1">
              <span className="mb-1 inline-block rounded px-1.5 py-0.5 font-mono text-[10px]" style={{ color: s.color, background: `${s.color}15` }}>
                Step {i + 1}
              </span>
              <p className="font-display text-sm font-semibold text-text-primary">{s.label}</p>
              <p className="font-mono text-xs text-text-muted">{s.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
