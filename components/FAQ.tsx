"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/projects";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-surface/30">
      <div className="container-max max-w-3xl">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4" data-animate="fade-up">FAQ</p>
          <h2 className="heading-lg" data-animate="fade-up" data-delay="100">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="card cursor-pointer"
              data-animate="fade-up"
              data-delay={String(i * 80)}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display font-medium">{faq.q}</h3>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-text-muted transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-text-soft">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
