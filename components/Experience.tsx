"use client";

import { experience, vercelProjects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">Experience</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            Career & deployed work
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            From founding an AI automation practice to shipping 14+ projects on Vercel.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experience.map((item, i) => (
            <div
              key={item.period}
              className={`relative mb-12 flex flex-col md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-animate={i % 2 === 0 ? "fade-left" : "fade-right"}
              data-delay={String(i * 150)}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg md:left-1/2" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                <div className="card">
                  <p className="font-mono text-xs text-cyan">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-soft">
                    {item.company} · {item.type}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{item.location}</p>
                  {item.description && (
                    <p className="mt-4 text-sm leading-relaxed text-text-soft">{item.description}</p>
                  )}
                  {item.bullets && (
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-text-soft">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="heading-md mb-8" data-animate="fade-up">
            Vercel Deployments
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vercelProjects.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex flex-col"
                data-animate="scale"
                data-delay={String(i * 80)}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-display font-medium">{project.name}</h4>
                  <ExternalLink size={14} className="text-text-muted transition-colors group-hover:text-accent" />
                </div>
                <p className="mb-2 font-mono text-xs text-cyan">{project.framework}</p>
                <p className="text-xs text-text-muted truncate">{project.domains[0]}</p>
                {project.github && (
                  <p className="mt-2 font-mono text-[10px] text-text-muted">{project.github}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
