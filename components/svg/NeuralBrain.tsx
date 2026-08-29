"use client";

import { motion } from "framer-motion";

const NODES = [
  { id: "n1", cx: 100, cy: 20, r: 8, color: "#7c6fff" },
  { id: "n2", cx: 50, cy: 55, r: 6, color: "#00e5ff" },
  { id: "n3", cx: 150, cy: 55, r: 6, color: "#00e5ff" },
  { id: "n4", cx: 30, cy: 100, r: 5, color: "#00ff94" },
  { id: "n5", cx: 100, cy: 100, r: 10, color: "#7c6fff" },
  { id: "n6", cx: 170, cy: 100, r: 5, color: "#00ff94" },
  { id: "n7", cx: 50, cy: 145, r: 6, color: "#00e5ff" },
  { id: "n8", cx: 150, cy: 145, r: 6, color: "#00e5ff" },
  { id: "n9", cx: 100, cy: 180, r: 8, color: "#7c6fff" },
];

const EDGES: [string, string][] = [
  ["n1", "n2"],
  ["n1", "n3"],
  ["n2", "n4"],
  ["n2", "n5"],
  ["n3", "n5"],
  ["n3", "n6"],
  ["n4", "n7"],
  ["n5", "n7"],
  ["n5", "n8"],
  ["n6", "n8"],
  ["n7", "n9"],
  ["n8", "n9"],
  ["n1", "n5"],
  ["n5", "n9"],
];

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function NeuralBrain({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-full w-full ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <defs>
        <filter id="glow-node">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {EDGES.map(([a, b], i) => {
        const A = nodeMap[a];
        const B = nodeMap[b];
        const len = Math.hypot(B.cx - A.cx, B.cy - A.cy);
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={A.cx}
            y1={A.cy}
            x2={B.cx}
            y2={B.cy}
            stroke={A.color}
            strokeWidth="0.8"
            opacity="0.4"
            strokeDasharray={len}
            variants={{
              hidden: { strokeDashoffset: len },
              visible: {
                strokeDashoffset: 0,
                transition: { duration: 0.8, delay: i * 0.08, ease: "easeOut" },
              },
            }}
          />
        );
      })}

      {NODES.map((n, i) => (
        <motion.g
          key={n.id}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 },
            },
          }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        >
          <circle cx={n.cx} cy={n.cy} r={n.r + 4} fill="none" stroke={n.color} strokeWidth="0.8" opacity="0.25">
            <animate
              attributeName="r"
              values={`${n.r + 2};${n.r + 10};${n.r + 2}`}
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color} opacity="0.85" filter="url(#glow-node)" />
          <circle cx={n.cx} cy={n.cy} r={n.r * 0.35} fill="white" opacity="0.5" />
        </motion.g>
      ))}
    </motion.svg>
  );
}
