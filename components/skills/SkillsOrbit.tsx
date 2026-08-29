"use client";

import { motion } from "framer-motion";

const NODES = [
  { id: "python", label: "Python", x: 50, y: 18, color: "#3b82f6" },
  { id: "openai", label: "OpenAI", x: 78, y: 32, color: "#10a37f" },
  { id: "node", label: "Node.js", x: 22, y: 32, color: "#22c55e" },
  { id: "claude", label: "Claude", x: 85, y: 58, color: "#d97706" },
  { id: "next", label: "Next.js", x: 15, y: 58, color: "#f8fafc" },
  { id: "grok", label: "Grok", x: 50, y: 72, color: "#a855f7" },
  { id: "n8n", label: "n8n", x: 72, y: 82, color: "#ea580c" },
  { id: "ml", label: "ML", x: 28, y: 82, color: "#22d3ee" },
];

const EDGES: [string, string][] = [
  ["python", "openai"],
  ["python", "node"],
  ["python", "ml"],
  ["openai", "claude"],
  ["openai", "grok"],
  ["node", "next"],
  ["grok", "n8n"],
  ["ml", "n8n"],
];

function getNode(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export default function SkillsOrbit() {
  return (
    <div className="relative mx-auto mb-10 max-w-xl overflow-hidden rounded-2xl border border-border bg-surface/80 p-4 md:p-6">
      <svg viewBox="0 0 100 100" className="h-auto w-full" aria-hidden>
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="28" fill="url(#hubGlow)" />

        {EDGES.map(([a, b], i) => {
          const na = getNode(a);
          const nb = getNode(b);
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            />
          );
        })}

        <motion.circle
          cx="50"
          cy="50"
          r="6"
          fill="#6366f1"
          fillOpacity="0.2"
          stroke="#818cf8"
          strokeWidth="0.4"
          animate={{ r: [6, 7, 6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="50" y="51.5" textAnchor="middle" fill="#f8fafc" fontSize="3.2" fontFamily="monospace">
          AI
        </text>

        {NODES.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4.5"
              fill={`${node.color}22`}
              stroke={node.color}
              strokeWidth="0.35"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.07, type: "spring", stiffness: 200 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="none"
              stroke={node.color}
              strokeWidth="0.15"
              opacity="0.4"
              animate={{ r: [6, 8, 6], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
            />
            <text
              x={node.x}
              y={node.y + 8.5}
              textAnchor="middle"
              fill="#94a3b8"
              fontSize="2.8"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
