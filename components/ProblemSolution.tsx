"use client";

export default function ProblemSolution() {
  return (
    <>
      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-16 lg:grid-cols-2">
            <div data-animate="fade-left">
              <p className="eyebrow mb-4">The Problem</p>
              <h2 className="heading-md mb-6">
                Manual work is killing your team&apos;s capacity
              </h2>
              <ul className="space-y-4">
                {[
                  "Repetitive tasks eat hours that should go to growth",
                  "Data scattered across tools with no intelligent layer",
                  "AI hype without systems that actually ship",
                  "Processes that break every time volume increases",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div data-animate="fade-right">
              <p className="eyebrow mb-4">The Solution</p>
              <h2 className="heading-md mb-6">
                AI systems that run while you sleep
              </h2>
              <ul className="space-y-4">
                {[
                  "End-to-end automation pipelines from scrape to delivery",
                  "LLM integrations that filter, generate, and act on data",
                  "Production deployments on Vercel — not localhost demos",
                  "Measurable outcomes: hours saved, tasks eliminated, revenue protected",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
