"use client";

import { site } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center md:p-20"
          data-animate="scale"
        >
          <div className="absolute inset-0 gradient-mesh opacity-60" />
          <div className="pointer-events-none absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan/10 blur-[80px]" />
          <div className="relative z-10">
            <p className="eyebrow mb-4">Ready when you are</p>
            <h2 className="heading-lg mb-4">
              Let&apos;s eliminate the manual work
            </h2>
            <p className="body-md mx-auto mb-8 max-w-xl">
              Tell me about your process. I&apos;ll tell you what an AI system could do for it — honestly, with no fluff.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-primary">
                Start a Conversation
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                WhatsApp {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
