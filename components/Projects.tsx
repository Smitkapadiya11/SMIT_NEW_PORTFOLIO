"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects, otherProjectTypes } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const featured = projects.find((p) => p.featured)!;
  const mainProjects = projects.filter((p) => !p.featured && p.id !== "biodata-maker" && p.id !== "smitcard");
  const extraProjects = projects.filter((p) => p.id === "biodata-maker" || p.id === "smitcard");

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">Selected Work</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            AI systems built for real businesses
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            From full automation pipelines to client e-commerce integrations — every project ships to production.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard project={featured} size="large" />
          {mainProjects.map((project, i) => (
            <div key={project.id} data-animate="scale" data-delay={String(100 + i * 100)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 font-mono text-sm text-text-soft transition-colors hover:text-text-primary"
            data-animate="fade-up"
          >
            More Projects
            <ChevronDown size={16} className={`transition-transform ${showMore ? "rotate-180" : ""}`} />
          </button>

          {showMore && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {extraProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {otherProjectTypes.map((item) => (
                <div key={item.name} className="card flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-display font-medium">{item.name}</h4>
                    <p className="mt-1 text-sm text-text-soft">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
