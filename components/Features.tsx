"use client";

import { features } from "@/data/site";

export default function Features() {
  return (
    <section id="features" className="section-padding bg-surface/30">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">What I Build</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            AI systems for every business layer
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            Not one-size-fits-all templates — custom systems designed around your workflow, your data, your outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="card-hover group"
              data-animate="scale"
              data-delay={String(i * 80)}
            >
              <div className="mb-4 h-px w-12 bg-gradient-to-r from-accent to-cyan transition-all duration-300 group-hover:w-full" />
              <h3 className="font-display text-xl font-medium">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">{feature.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span key={tag} className="chip text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
