"use client";

import { valueProps } from "@/data/site";

export default function ValueProps() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, i) => (
            <div
              key={prop.title}
              className="glow-card group relative overflow-hidden"
              data-animate="fade-up"
              data-delay={String(i * 100)}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/5 transition-all duration-500 group-hover:bg-accent/10" />
              <span className="text-2xl">{prop.icon}</span>
              <h3 className="mt-4 font-display text-lg font-medium">{prop.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
