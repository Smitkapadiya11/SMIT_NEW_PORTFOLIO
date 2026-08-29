"use client";

import { testimonials } from "@/data/projects";

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4" data-animate="fade-up">Results</p>
          <h2 className="heading-lg" data-animate="fade-up" data-delay="100">
            What clients say
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.author}
              className="card-hover relative flex flex-col"
              data-animate="fade-up"
              data-delay={String(i * 120)}
            >
              <span className="absolute -top-2 left-6 font-display text-5xl text-accent/20">&ldquo;</span>
              {t.metric && (
                <span className="mb-4 inline-flex w-fit rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan">
                  {t.metric}
                </span>
              )}
              <p className="relative mb-6 flex-1 text-base leading-relaxed text-text-primary">
                {t.quote}
              </p>
              <footer className="border-t border-border pt-4">
                <p className="font-display font-medium">{t.author}</p>
                <p className="text-sm text-text-muted">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
