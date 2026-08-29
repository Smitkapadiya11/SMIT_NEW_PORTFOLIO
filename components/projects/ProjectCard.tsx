"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import PipelineDiagram from "@/components/projects/PipelineDiagram";

interface ProjectCardProps {
  project: Project;
  size?: "large" | "medium";
}

export default function ProjectCard({ project, size = "medium" }: ProjectCardProps) {
  const isLarge = size === "large";

  return (
    <article
      className={`card-hover group flex flex-col ${
        isLarge ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
      data-animate="scale"
    >
      {project.featured ? (
        <div className="mb-4 rounded-xl border border-border bg-surface-2 p-4">
          <PipelineDiagram />
        </div>
      ) : project.screenshot ? (
        <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border border-border bg-surface-2">
          <Image
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        </div>
      ) : null}

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="chip text-cyan">{project.category}</span>
        {project.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="chip">{tag}</span>
        ))}
      </div>

      <h3 className={`font-display font-semibold ${isLarge ? "text-2xl" : "text-xl"} mb-2`}>
        {project.name}
      </h3>

      <p className="body-md mb-4 flex-1 text-sm">{project.description}</p>

      <ul className="mb-4 space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-text-soft">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            {tech}
          </span>
        ))}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-glow"
        >
          View live site
          <ExternalLink size={14} />
        </a>
      )}
    </article>
  );
}
