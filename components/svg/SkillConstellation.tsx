"use client";

import { motion } from "framer-motion";

type SkillNode = [string, number, number, "xl" | "lg" | "md" | "sm", string];

const SKILLS: SkillNode[] = [
  ["ChatGPT", 50, 50, "xl", "#10a37f"],
  ["Claude", 28, 30, "lg", "#d97706"],
  ["Gemini", 72, 30, "lg", "#4285f4"],
  ["Grok", 80, 55, "md", "#cccccc"],
  ["LangChain", 20, 55, "md", "#1c7ed6"],
  ["Python", 18, 78, "lg", "#3b82f6"],
  ["n8n", 35, 82, "sm", "#ea580c"],
  ["Automation", 65, 82, "md", "#7c6fff"],
  ["AI Agents", 82, 75, "md", "#a855f7"],
  ["Node.js", 65, 18, "sm", "#68a063"],
  ["HubSpot", 50, 88, "sm", "#ff5c35"],
];

const SIZE_MAP = { xl: 28, lg: 22, md: 16, sm: 12 };

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 4],
  [2, 3],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [0, 7],
];

export default function SkillConstellation({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 280"
      xmlns="http://www.w3.org/2000/svg"
      className={`hidden h-full w-full md:block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <defs>
        <filter id="sc-glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {EDGES.map(([a, b], i) => {
        const A = SKILLS[a];
        const B = SKILLS[b];
        const x1 = (A[1] / 100) * 400;
        const y1 = (A[2] / 100) * 280;
        const x2 = (B[1] / 100) * 400;
        const y2 = (B[2] / 100) * 280;
        const len = Math.hypot(x2 - x1, y2 - y1);
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={A[4]}
            strokeWidth="0.7"
            strokeOpacity="0.25"
            strokeDasharray={len}
            variants={{
              hidden: { strokeDashoffset: len, opacity: 0 },
              visible: {
                strokeDashoffset: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 + i * 0.06, ease: "easeOut" },
              },
            }}
          />
        );
      })}

      {SKILLS.map(([label, cxPct, cyPct, size, color], i) => {
        const cx = (cxPct / 100) * 400;
        const cy = (cyPct / 100) * 280;
        const r = SIZE_MAP[size];
        const fontSize = size === "xl" ? 9 : size === "lg" ? 8 : 7;

        return (
          <motion.g
            key={label}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2 + i * 0.08, type: "spring", stiffness: 200, damping: 15 },
              },
            }}
          >
            <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2" filter="url(#sc-glow)" />
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={fontSize}
              fill={color}
              fontWeight="600"
              fontFamily="JetBrains Mono, monospace"
            >
              {label}
            </text>
          </motion.g>
        );
      })}
    </motion.svg>
  );
}
