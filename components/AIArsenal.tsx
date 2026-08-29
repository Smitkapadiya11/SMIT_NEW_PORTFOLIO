"use client";

import { aiProducts } from "@/data/murex";

export default function AIArsenal() {
  return (
    <section id="ai-arsenal" className="section-padding bg-surface/30">
      <div className="container-max">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4" data-animate="fade-up">AI Arsenal</p>
          <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
            7 intelligent systems. Built in Surat. Deployed everywhere.
          </h2>
          <p className="body-md" data-animate="fade-up" data-delay="200">
            Production AI products — not slide decks. Each one solves a real business problem.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {aiProducts.map((product, i) => (
            <article
              key={product.id}
              className={`glow-card relative overflow-hidden ${
                product.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              data-animate="fade-up"
              data-delay={String(i * 80)}
            >
              <span className="font-mono text-xs text-cyan">PRODUCT {product.num}</span>
              <h3 className="mt-2 font-display text-xl font-semibold">{product.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">{product.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.stack.map((tag) => (
                  <span key={tag} className="chip text-[10px] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              {product.id === "custom-builds" && (
                <a href="#contact" className="btn-primary mt-6 text-sm">
                  Build My Custom Agent
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
