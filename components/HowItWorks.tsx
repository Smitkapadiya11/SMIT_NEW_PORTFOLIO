"use client";

import { processSteps } from "@/data/site";

export default function HowItWorks() {
  return (
    <section className="section-padding border-y border-border">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">Process</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            Idea to automation in 72 hours
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            We move at the speed of intelligence. No months-long consulting phases — absolute focus and rapid deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
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
