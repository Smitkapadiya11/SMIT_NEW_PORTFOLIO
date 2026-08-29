export const LLM_LAYERS = [
  { id: "prompt", label: "Prompt & Context", color: "#7c6fff", desc: "User input, docs, memory" },
  { id: "tokenize", label: "Tokenize & Embed", color: "#9d7fff", desc: "Chunk, vectorize, RAG" },
  { id: "llm", label: "LLM Core", color: "#00e5ff", desc: "GPT · Claude · Grok · Gemini" },
  { id: "agents", label: "Agents & Tools", color: "#00ff94", desc: "Reasoning, function calls" },
  { id: "automate", label: "Automation", color: "#ffb800", desc: "n8n · APIs · workflows" },
  { id: "deploy", label: "Production", color: "#ff4d6d", desc: "Live systems · 24/7" },
] as const;

export const LAYER_Y = LLM_LAYERS.map((_, i) => (i - (LLM_LAYERS.length - 1) / 2) * 0.72);
