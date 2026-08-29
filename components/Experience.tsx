"use client";

import { ExternalLink, Lock } from "lucide-react";
import { FadeUp } from "@/components/motion";
import Timeline from "@/components/experience/Timeline";
import { vercelProjects } from "@/data/projects";

function DeploymentCard({
  project,
  index,
}: {
  project: (typeof vercelProjects)[0];
  index: number;
}) {
  const inner = (
    <>
      <div className="mb-3 flex items-center justify-between gap-2">
        <h4 className="font-display font-medium">{project.name}</h4>
        {project.url ? (
          <ExternalLink size={14} className="shrink-0 text-text-muted transition-colors group-hover:text-accent" />
        ) : (
          <Lock size={13} className="shrink-0 text-text-muted/60" />
        )}
      </div>
      {project.framework && (
        <p className="mb-2 font-mono text-xs text-cyan">{project.framework}</p>
      )}
      <div className="mb-3 flex flex-wrap gap-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border/80 bg-surface-2/80 px-1.5 py-0.5 font-mono text-[9px] text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-xs text-text-muted">{project.domains[0]}</p>
      {!project.url && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-text-muted/70">
          Private · Work sample only
        </p>
      )}
    </>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-hover group flex min-h-[44px] flex-col"
        data-animate="scale"
        data-delay={String(index * 60)}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      className="card group flex flex-col border-border/80 opacity-95 transition-transform duration-200 hover:-translate-y-0.5"
      data-animate="scale"
      data-delay={String(index * 60)}
    >
      {inner}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding content-auto">
      <div className="container-max">
        <FadeUp className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="heading-lg mb-4">Career & deployed work</h2>
          <p className="body-md">
            From founding an AI automation practice to shipping 14+ projects on Vercel.
          </p>
        </FadeUp>

        <div className="mb-20">
          <Timeline />
        </div>

        <FadeUp>
          <h3 className="heading-md mb-8">Deployed Projects</h3>
        </FadeUp>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vercelProjects.map((project, i) => (
            <DeploymentCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
