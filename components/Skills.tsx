"use client";

import { skillGroups } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">Capabilities</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            Tools & expertise
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            Platform-agnostic. I pick the right tool for the problem — not the trendiest one.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="card"
              data-animate="fade-up"
              data-delay={String(i * 100)}
            >
              <h3 className="mb-4 font-display text-lg font-medium">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip transition-colors hover:border-accent/40 hover:text-text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
