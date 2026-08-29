"use client";

import { FadeUp } from "@/components/motion";
import SkillsConstellation from "@/components/skills/SkillsConstellation";
import { skillGroups } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30 content-auto">
      <div className="container-max">
        <FadeUp className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="heading-lg mb-4">Tools & expertise</h2>
          <p className="body-md">
            Platform-agnostic. I pick the right tool for the problem — not the trendiest one.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-10">
          <SkillsConstellation />
        </FadeUp>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <FadeUp key={group.title} delay={0.15 + i * 0.08}>
              <div className="glow-card h-full">
                <h3 className="mb-4 font-display text-lg font-medium">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip transition-colors hover:border-accent/40 hover:text-text-primary"
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
