"use client";

import { academicProjects } from "@/data/murex";

export default function EarlyWork() {
  return (
    <section id="early-work" className="section-padding border-t border-border">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">Where It Started</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            Academic roots. Production mindset.
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            BCA projects at CHARUSAT that built the foundation for shipping real AI systems.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {academicProjects.map((project, i) => (
            <div
              key={project.name}
              className="card-hover"
              data-animate="scale"
              data-delay={String(i * 60)}
            >
              <h3 className="font-display text-lg font-medium">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] uppercase text-text-muted">
                    {tag}
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
