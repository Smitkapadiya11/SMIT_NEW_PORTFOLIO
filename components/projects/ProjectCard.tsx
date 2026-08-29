"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import PipelineDiagram from "@/components/projects/PipelineDiagram";
import ProjectVisual from "@/components/projects/ProjectVisual";

const accentMap: Record<string, string> = {
  "Full Automation Pipeline": "#7c6fff",
  "Business AI": "#00e5ff",
  "International Client": "#00ff94",
  "Personal Build": "#a855f7",
  "ML Product": "#ffb800",
  "Digital Identity": "#7c6fff",
};

function getAccent(project: Project) {
  return accentMap[project.category] || "#7c6fff";
}

interface ProjectCardProps {
  project: Project;
  size?: "large" | "medium";
}

function CardVisual({ project, accent }: { project: Project; accent: string }) {
  if (project.featured) {
    return (
      <div className="flex h-full items-center p-3">
        <PipelineDiagram />
      </div>
    );
  }
  return <ProjectVisual projectId={project.id} accent={accent} className="h-full min-h-[144px]" />;
}

function ProjectCardDesktop({ project, size = "medium" }: ProjectCardProps) {
  const isLarge = size === "large";
  const accent = getAccent(project);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.article
      className="card-glow group relative hidden flex-col overflow-hidden rounded-2xl border border-border bg-surface md:flex"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative h-48 overflow-hidden bg-surface-2">
        <CardVisual project={project} accent={accent} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div
          className="absolute left-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold"
          style={{ borderColor: accent, color: accent, background: `${accent}18` }}
        >
          {project.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className={`mb-2 font-display font-semibold ${isLarge ? "text-2xl" : "text-lg"}`}>
          {project.name}
        </h3>
        <p className="mb-4 flex-1 text-sm text-text-soft">{project.description}</p>
        <ul className="mb-4 space-y-1.5">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-xs text-text-soft">
              <span className="mt-0.5 flex-shrink-0 text-accent">→</span>
              {b}
            </li>
          ))}
        </ul>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-text-muted"
            >
              {s}
            </span>
          ))}
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-glow"
          >
            View live site
            <ExternalLink size={14} />
          </a>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            Client work · No public link
          </span>
        )}
      </div>
    </motion.article>
  );
}

function ProjectCardMobile({ project }: ProjectCardProps) {
  const accent = getAccent(project);

  return (
    <motion.article
      className="card-glow rounded-xl border border-border bg-surface transition-transform active:scale-[0.98] md:hidden"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-36 overflow-hidden border-b border-border bg-surface-2">
        <CardVisual project={project} accent={accent} />
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-text-primary">{project.name}</h3>
          <span
            className="rounded-full border px-2 py-0.5 font-mono text-[10px]"
            style={{ color: accent, borderColor: `${accent}40` }}
          >
            {project.category}
          </span>
        </div>
        <p className="mb-3 text-sm leading-relaxed text-text-soft">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-text-muted"
            >
              {s}
            </span>
          ))}
        </div>
        {!project.url && (
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-text-muted">
            Client work · No public link
          </p>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-[44px] items-center gap-2 text-sm text-accent"
          >
            View live site
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <>
      <ProjectCardDesktop {...props} />
      <ProjectCardMobile {...props} />
    </>
  );
}
