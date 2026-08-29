"use client";

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
        background: `radial-gradient(circle at 30% 30%, ${accent}22 0%, transparent 55%), linear-gradient(135deg, #12122a 0%, #0c0c1e 100%)`,
      }}
    >
      <svg
        viewBox="0 0 320 180"
        className="h-full w-full max-h-full max-w-full p-6"
        aria-hidden
      >
        {children}
      </svg>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}

export default function ProjectVisual({ projectId, accent = "#6366f1", className = "" }: ProjectVisualProps) {
  switch (projectId) {
    case "lungdetox":
      return (
        <VisualFrame accent="#22d3ee" className={className}>
          <defs>
            <linearGradient id="healthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="90" r="52" fill="none" stroke="url(#healthGrad)" strokeWidth="1.5" opacity="0.5" />
          <path
            d="M160 118 C160 118 130 95 130 78 C130 68 138 62 148 62 C154 62 160 68 160 74 C160 68 166 62 172 62 C182 62 190 68 190 78 C190 95 160 118 160 118Z"
            fill="url(#healthGrad)"
            opacity="0.85"
          />
          <path d="M95 130 Q160 105 225 130" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
          <circle cx="95" cy="130" r="4" fill="#22d3ee" />
          <circle cx="225" cy="130" r="4" fill="#10b981" />
          <text x="160" y="158" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
            Health · AI Integration
          </text>
        </VisualFrame>
      );

    case "amazora":
      return (
        <VisualFrame accent="#10b981" className={className}>
          <defs>
            <linearGradient id="auGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="88" r="42" fill="none" stroke="url(#auGrad)" strokeWidth="1.5" />
          <ellipse cx="160" cy="88" rx="42" ry="16" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5" />
          <path d="M118 88 A42 42 0 0 1 202 88" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
          <rect x="148" y="118" width="24" height="18" rx="3" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <path d="M152 118 L160 108 L168 118" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <text x="160" y="158" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
            E-commerce · Australia
          </text>
        </VisualFrame>
      );

    case "silkroom":
      return (
        <VisualFrame accent="#a855f7" className={className}>
          <path d="M120 55 L200 55 L185 125 L135 125 Z" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <path d="M135 125 Q160 140 185 125" fill="none" stroke="#c084fc" strokeWidth="1.5" />
          <line x1="160" y1="55" x2="160" y2="125" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
          <circle cx="160" cy="48" r="6" fill="none" stroke="#c084fc" strokeWidth="1.5" />
          <path d="M100 90 Q130 70 160 90 T220 90" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
          <text x="160" y="158" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
            Fashion · Lifestyle AI
          </text>
        </VisualFrame>
      );

    case "apnatree":
      return (
        <VisualFrame accent="#10b981" className={className}>
          <rect x="154" y="105" width="12" height="30" rx="2" fill="#10b981" opacity="0.7" />
          <circle cx="160" cy="78" r="28" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="145" cy="72" r="14" fill="#10b981" opacity="0.25" />
          <circle cx="175" cy="72" r="14" fill="#22d3ee" opacity="0.2" />
          <circle cx="160" cy="58" r="12" fill="#6366f1" opacity="0.2" />
          <path d="M120 135 H200" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
          <text x="160" y="158" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
            Full-Stack · Vercel
          </text>
        </VisualFrame>
      );

    case "inventory-ai":
      return (
        <VisualFrame accent="#f59e0b" className={className}>
          <polyline
            points="70,120 110,95 145,105 180,70 220,55"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="70" cy="120" r="4" fill="#f59e0b" />
          <circle cx="110" cy="95" r="4" fill="#fbbf24" />
          <circle cx="145" cy="105" r="4" fill="#f59e0b" />
          <circle cx="180" cy="70" r="4" fill="#6366f1" />
          <circle cx="220" cy="55" r="5" fill="#22d3ee" />
          <rect x="68" y="128" width="160" height="4" rx="2" fill="#1e1e35" />
          <rect x="68" y="128" width="110" height="4" rx="2" fill="#f59e0b" opacity="0.6" />
          <text x="160" y="158" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
            ML · Demand Forecast
          </text>
        </VisualFrame>
      );

    case "smitcard":
      return (
        <VisualFrame accent="#6366f1" className={className}>
          <rect x="95" y="52" width="130" height="76" rx="10" fill="none" stroke="#6366f1" strokeWidth="1.5" />
          <rect x="95" y="52" width="130" height="22" rx="10" fill="#6366f1" opacity="0.2" />
          <circle cx="115" cy="88" r="10" fill="none" stroke="#818cf8" strokeWidth="1.5" />
          <line x1="132" y1="84" x2="200" y2="84" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="132" y1="94" x2="185" y2="94" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
          <line x1="105" y1="108" x2="215" y2="108" stroke="#475569" strokeWidth="1" opacity="0.5" />
          <text x="160" y="158" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
            Digital Identity Card
          </text>
        </VisualFrame>
      );

    default:
      return (
        <VisualFrame accent={accent} className={className}>
          <rect x="100" y="60" width="120" height="60" rx="8" fill="none" stroke={accent} strokeWidth="1.5" />
          <circle cx="130" cy="90" r="10" fill={accent} opacity="0.3" />
          <line x1="150" y1="84" x2="200" y2="84" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="150" y1="98" x2="185" y2="98" stroke="#475569" strokeWidth="1" strokeLinecap="round" />
          <text x="160" y="158" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
            AI Project
          </text>
        </VisualFrame>
      );
  }
}
