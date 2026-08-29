"use client";

import { philosophyQuotes } from "@/data/murex";

export default function PhilosophyQuotes() {
  return (
    <section className="section-padding border-y border-border bg-surface/50">
      <div className="container-max">
        <div className="grid gap-8 md:grid-cols-3">
          {philosophyQuotes.map((quote, i) => (
            <blockquote
              key={quote}
              className="text-center"
              data-animate="fade-up"
              data-delay={String(i * 120)}
            >
              <p className="font-display text-xl font-medium leading-snug text-text-primary md:text-2xl">
                &ldquo;{quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
