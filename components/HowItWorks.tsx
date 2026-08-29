"use client";

const steps = [
  {
    num: "01",
    title: "Understand the problem",
    desc: "Map the workflow, identify bottlenecks, and define what success looks like in measurable terms.",
  },
  {
    num: "02",
    title: "Design the system",
    desc: "Architect an AI pipeline — choose the right models, APIs, and automation tools for the job.",
  },
  {
    num: "03",
    title: "Build & deploy",
    desc: "Ship production code to Vercel or client infrastructure. No localhost demos — real deployments.",
  },
  {
    num: "04",
    title: "Measure & iterate",
    desc: "Track hours saved, tasks eliminated, and outcomes. Refine with data, not assumptions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding border-y border-border">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">Process</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            How I work
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            Outcome-driven. Every step exists to move from manual chaos to automated clarity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="card group"
              data-animate="fade-up"
              data-delay={String(i * 100)}
            >
              <span className="font-display text-3xl font-semibold text-accent/30 transition-colors group-hover:text-accent/60">
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
