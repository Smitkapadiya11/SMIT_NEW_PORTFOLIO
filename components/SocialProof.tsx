"use client";

export default function SocialProof() {
  const logos = [
    { name: "Royal Swag", region: "India" },
    { name: "Amazora", region: "Australia" },
    { name: "Silk Room", region: "India" },
    { name: "ApnaTree", region: "India" },
    { name: "Vercel", region: "Platform" },
    { name: "OpenAI", region: "AI" },
    { name: "Anthropic", region: "AI" },
  ];

  return (
    <section className="section-padding border-b border-border">
      <div className="container-max text-center">
        <p className="eyebrow mb-3" data-animate="fade-up">
          Trusted by businesses across industries
        </p>
        <p className="body-md mx-auto mb-10 max-w-lg" data-animate="fade-up" data-delay="80">
          From health & wellness brands to international e-commerce — production AI systems, not prototypes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((item, i) => (
            <div
              key={item.name}
              className="group text-center"
              data-animate="fade-up"
              data-delay={String(i * 60)}
            >
              <span className="font-display text-lg font-medium text-text-muted/70 transition-colors group-hover:text-text-soft md:text-xl">
                {item.name}
              </span>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted/50">
                {item.region}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
