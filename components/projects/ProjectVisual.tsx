"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ProjectVisualProps {
  projectId: string;
  accent?: string;
  className?: string;
}

function VisualFrame({
  accent,
  children,
  className = "",
}: {
  accent: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${accent}28 0%, transparent 55%), linear-gradient(135deg, #10102a 0%, #0a0a1f 100%)`,
      }}
    >
      <motion.svg
        viewBox="0 0 320 180"
        className="h-full w-full max-h-full max-w-full p-6"
        aria-hidden
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <filter id="pv-glow">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {children}
      </motion.svg>
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,111,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,111,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle at 70% 30%, ${accent}18 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}

function PulseRing({ cx, cy, r, color }: { cx: number; cy: number; r: number; color: string }) {
  return (
    <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="0.8" opacity="0.4">
      <animate attributeName="r" values={`${r};${r + 12};${r}`} dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
  );
}

export default function ProjectVisual({ projectId, accent = "#7c6fff", className = "" }: ProjectVisualProps) {
  switch (projectId) {
    case "lungdetox":
      return (
        <VisualFrame accent="#00ff94" className={className}>
          <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#00ff94" />
          </linearGradient>
          <PulseRing cx={160} cy={90} r={52} color="#00e5ff" />
          <circle cx={160} cy={90} r={52} fill="none" stroke="url(#healthGrad)" strokeWidth="1.5" opacity="0.6" filter="url(#pv-glow)" />
          <path
            d="M160 118 C160 118 130 95 130 78 C130 68 138 62 148 62 C154 62 160 68 160 74 C160 68 166 62 172 62 C182 62 190 68 190 78 C190 95 160 118 160 118Z"
            fill="url(#healthGrad)"
            opacity="0.9"
          />
          <path d="M95 130 Q160 105 225 130" fill="none" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="20;0" dur="2s" repeatCount="indefinite" />
          </path>
          <circle cx={95} cy={130} r={4} fill="#00e5ff">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={225} cy={130} r={4} fill="#00ff94" />
          <text x={160} y={158} textAnchor="middle" fill="#8888bb" fontSize="11" fontFamily="monospace">
            Health · AI Integration
          </text>
        </VisualFrame>
      );

    case "amazora":
      return (
        <VisualFrame accent="#00ff94" className={className}>
          <linearGradient id="auGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff94" />
            <stop offset="100%" stopColor="#7c6fff" />
          </linearGradient>
          <PulseRing cx={160} cy={88} r={42} color="#00ff94" />
          <circle cx={160} cy={88} r={42} fill="none" stroke="url(#auGrad)" strokeWidth="1.5" filter="url(#pv-glow)" />
          <ellipse cx={160} cy={88} rx={42} ry={16} fill="none" stroke="#00ff94" strokeWidth="1" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="0 160 88" to="360 160 88" dur="20s" repeatCount="indefinite" />
          </ellipse>
          <rect x={148} y={118} width={24} height={18} rx={3} fill="none" stroke="#00ff94" strokeWidth="1.5" />
          <path d="M152 118 L160 108 L168 118" fill="none" stroke="#00ff94" strokeWidth="1.5" />
          <text x={160} y={158} textAnchor="middle" fill="#8888bb" fontSize="11" fontFamily="monospace">
            E-commerce · Australia
          </text>
        </VisualFrame>
      );

    case "silkroom":
      return (
        <VisualFrame accent="#a855f7" className={className}>
          <path d="M120 55 L200 55 L185 125 L135 125 Z" fill="none" stroke="#a855f7" strokeWidth="1.5" filter="url(#pv-glow)" />
          <path d="M135 125 Q160 140 185 125" fill="none" stroke="#c084fc" strokeWidth="1.5" />
          <line x1={160} y1={55} x2={160} y2={125} stroke="#a855f7" strokeWidth="1" opacity="0.4" />
          <circle cx={160} cy={48} r={6} fill="none" stroke="#c084fc" strokeWidth="1.5">
            <animate attributeName="r" values="6;9;6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <path d="M100 90 Q130 70 160 90 T220 90" fill="none" stroke="#7c6fff" strokeWidth="1" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="30;0" dur="3s" repeatCount="indefinite" />
          </path>
          <text x={160} y={158} textAnchor="middle" fill="#8888bb" fontSize="11" fontFamily="monospace">
            Fashion · Lifestyle AI
          </text>
        </VisualFrame>
      );

    case "apnatree":
      return (
        <VisualFrame accent="#00ff94" className={className}>
          <rect x={154} y={105} width={12} height={30} rx={2} fill="#00ff94" opacity="0.7" />
          <circle cx={160} cy={78} r={28} fill="none" stroke="#00ff94" strokeWidth="1.5" filter="url(#pv-glow)" />
          <circle cx={145} cy={72} r={14} fill="#00ff94" opacity="0.25">
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={175} cy={72} r={14} fill="#00e5ff" opacity="0.2" />
          <circle cx={160} cy={58} r={12} fill="#7c6fff" opacity="0.2" />
          <path d="M120 135 H200" stroke="#7c6fff" strokeWidth="1" opacity="0.4" />
          <text x={160} y={158} textAnchor="middle" fill="#8888bb" fontSize="11" fontFamily="monospace">
            Full-Stack · Vercel
          </text>
        </VisualFrame>
      );

    case "inventory-ai":
      return (
        <VisualFrame accent="#ffb800" className={className}>
          <polyline
            points="70,120 110,95 145,105 180,70 220,55"
            fill="none"
            stroke="#ffb800"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#pv-glow)"
          />
          {[
            [70, 120, "#ffb800"],
            [110, 95, "#ffd54f"],
            [145, 105, "#ffb800"],
            [180, 70, "#7c6fff"],
            [220, 55, "#00e5ff"],
          ].map(([cx, cy, fill], i) => (
            <circle key={i} cx={cx as number} cy={cy as number} r={i === 4 ? 5 : 4} fill={fill as string}>
              <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <rect x={68} y={128} width={160} height={4} rx={2} fill="#16163a" />
          <rect x={68} y={128} width={110} height={4} rx={2} fill="#ffb800" opacity="0.7">
            <animate attributeName="width" values="80;140;80" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x={160} y={158} textAnchor="middle" fill="#8888bb" fontSize="11" fontFamily="monospace">
            ML · Demand Forecast
          </text>
        </VisualFrame>
      );

    case "smitcard":
      return (
        <VisualFrame accent="#7c6fff" className={className}>
          <rect x={95} y={52} width={130} height={76} rx={10} fill="none" stroke="#7c6fff" strokeWidth="1.5" filter="url(#pv-glow)" />
          <rect x={95} y={52} width={130} height={22} rx={10} fill="#7c6fff" opacity="0.25" />
          <circle cx={115} cy={88} r={10} fill="none" stroke="#a48fff" strokeWidth="1.5" />
          <line x1={132} y1={84} x2={200} y2={84} stroke="#a48fff" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={132} y1={94} x2={185} y2={94} stroke="#8888bb" strokeWidth="1" strokeLinecap="round" />
          <text x={160} y={158} textAnchor="middle" fill="#8888bb" fontSize="11" fontFamily="monospace">
            Digital Identity Card
          </text>
        </VisualFrame>
      );

    default:
      return (
        <VisualFrame accent={accent} className={className}>
          <PulseRing cx={160} cy={90} r={40} color={accent} />
          <rect x={100} y={60} width={120} height={60} rx={8} fill="none" stroke={accent} strokeWidth="1.5" filter="url(#pv-glow)" />
          <circle cx={130} cy={90} r={10} fill={accent} opacity="0.35" />
          <line x1={150} y1={84} x2={200} y2={84} stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <line x1={150} y1={98} x2={185} y2={98} stroke="#8888bb" strokeWidth="1" strokeLinecap="round" />
          <text x={160} y={158} textAnchor="middle" fill="#8888bb" fontSize="11" fontFamily="monospace">
            AI Project
          </text>
        </VisualFrame>
      );
  }
}
