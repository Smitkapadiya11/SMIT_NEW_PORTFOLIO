"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { label: "ChatGPT API", x: 50, y: 15, size: "lg" as const, color: "#10a37f" },
  { label: "Claude", x: 80, y: 30, size: "md" as const, color: "#d97706" },
  { label: "Gemini", x: 20, y: 28, size: "md" as const, color: "#4285f4" },
  { label: "Grok API", x: 65, y: 52, size: "sm" as const, color: "#ffffff" },
  { label: "LangChain", x: 35, y: 55, size: "md" as const, color: "#1c7ed6" },
  { label: "Python", x: 15, y: 60, size: "lg" as const, color: "#3b82f6" },
  { label: "n8n", x: 82, y: 65, size: "sm" as const, color: "#ea580c" },
  { label: "RAG", x: 50, y: 75, size: "sm" as const, color: "#a855f7" },
  { label: "AI Agents", x: 28, y: 80, size: "md" as const, color: "#6366f1" },
  { label: "Automation", x: 70, y: 82, size: "md" as const, color: "#22d3ee" },
];

export default function SkillsConstellation() {
  return (
    <div className="relative hidden h-80 w-full overflow-hidden rounded-2xl border border-border bg-surface md:block">
      {SKILLS.map((skill, i) => (
        <motion.div
          key={skill.label}
          className="skill-float absolute cursor-default select-none whitespace-nowrap rounded-full border px-3 py-1.5 font-mono font-medium"
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            color: skill.color,
            borderColor: `${skill.color}40`,
            background: `${skill.color}0d`,
            fontSize:
              skill.size === "lg" ? "0.85rem" : skill.size === "md" ? "0.75rem" : "0.65rem",
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + i * 0.4}s`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, type: "spring", stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.15, boxShadow: `0 0 16px ${skill.color}60` }}
        >
          {skill.label}
        </motion.div>
      ))}
    </div>
  );
}
