"use client";

const TOOLS = [
  { name: "OpenAI", dot: "#10a37f" },
  { name: "Claude", dot: "#d97706" },
  { name: "Gemini", dot: "#4285f4" },
  { name: "Grok · xAI", dot: "#eeeeee" },
  { name: "LangChain", dot: "#1c7ed6" },
  { name: "Python", dot: "#3b82f6" },
  { name: "n8n", dot: "#ea580c" },
  { name: "HubSpot", dot: "#ff5c35" },
  { name: "Replit", dot: "#f59e0b" },
  { name: "Vercel", dot: "#eeeeee" },
  { name: "Node.js", dot: "#68a063" },
  { name: "Anthropic", dot: "#d97706" },
];

function Pill({ tool }: { tool: (typeof TOOLS)[0] }) {
  return (
    <div className="group flex flex-shrink-0 cursor-default items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-surface/80 px-4 py-2 backdrop-blur-sm transition-colors duration-300 hover:border-violet-accent/35">
      <span
        className="h-2 w-2 flex-shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150"
        style={{ background: tool.dot, boxShadow: `0 0 8px ${tool.dot}` }}
      />
      <span className="font-mono text-xs font-medium text-text-muted transition-colors duration-300 group-hover:text-text-primary">
        {tool.name}
      </span>
    </div>
  );
}

const DOUBLED = [...TOOLS, ...TOOLS, ...TOOLS];

export default function AIToolsMarquee() {
  return (
    <section id="marquee" className="relative w-full overflow-hidden border-y border-border bg-surface/40 py-5">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-bg to-transparent" />

      <div className="mb-3 flex w-max animate-marquee gap-3">
        {DOUBLED.map((t, i) => (
          <Pill key={`a${i}`} tool={t} />
        ))}
      </div>

      <div className="hidden w-max animate-marquee-rev gap-3 opacity-45 md:flex">
        {[...DOUBLED].reverse().map((t, i) => (
          <Pill key={`b${i}`} tool={t} />
        ))}
      </div>
    </section>
  );
}
