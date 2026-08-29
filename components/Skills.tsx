"use client";

import { FadeUp } from "@/components/motion";
import SkillsOrbit from "@/components/skills/SkillsOrbit";
import { skillGroups } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30 content-auto">
      <div className="container-max">
        <FadeUp className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="heading-lg mb-4">Tools & expertise</h2>
          <p className="body-md">
            Platform-agnostic. I pick the right tool for the problem — not the trendiest one.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <SkillsOrbit />
        </FadeUp>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeUp key={group.title} delay={0.12 + i * 0.06}>
              <div className="rounded-xl border border-border bg-surface/60 p-5">
                <h3 className="mb-3 font-display text-base font-medium">{group.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border/80 bg-surface-2/80 px-2.5 py-1 font-mono text-[10px] text-text-soft transition-colors hover:border-accent/40 hover:text-text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
