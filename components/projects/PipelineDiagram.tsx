export default function PipelineDiagram() {
  const steps = [
    { label: "Scrape", sub: "News articles" },
    { label: "Refine", sub: "JavaScript" },
    { label: "Grok Filter", sub: "Best 1-2 stories" },
    { label: "AI Script", sub: "Video scripts" },
    { label: "Google Sheet", sub: "Client review" },
    { label: "AI Video", sub: "Clone + audio" },
    { label: "Social Upload", sub: "All platforms" },
  ];

  return (
    <div className="overflow-x-auto py-4">
      <div className="flex min-w-max items-center gap-2 md:gap-3">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 md:gap-3">
            <div className="flex flex-col items-center">
              <div className="rounded-lg border border-accent/30 bg-surface-2 px-3 py-2 text-center md:px-4 md:py-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan md:text-xs">
                  {step.label}
                </p>
                <p className="mt-0.5 text-[10px] text-text-muted md:text-xs">{step.sub}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <svg width="24" height="12" viewBox="0 0 24 12" className="shrink-0 text-accent/50">
                <path d="M0 6h20M16 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
