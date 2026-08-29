"use client";

import { Mail, Phone, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { FadeUp } from "@/components/motion";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";

const AVAILABLE_FOR = [
  "AI Consulting",
  "Automation Builds",
  "LLM Integration",
  "Founding Team Roles",
];

export default function Contact() {
  const contacts = [
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: site.phoneDisplay, href: `tel:+${site.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", href: site.whatsapp },
    { icon: Linkedin, label: "linkedin.com/in/smitkapadiya", href: site.linkedin },
    { icon: MapPin, label: site.locationShort, href: null },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="heading-lg mb-4">Have a process that needs automating? Let&apos;s talk.</h2>
              <p className="body-md mb-4">
                Open to AI consulting, automation projects, freelance builds, and founding-team roles.
              </p>
              <p className="mb-6 font-mono text-sm text-cyan">{site.availability}</p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mb-8 flex flex-wrap gap-2">
                {AVAILABLE_FOR.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs text-accent-glow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeUp>

            <div className="flex flex-col gap-3">
              {contacts.map((c, i) => (
                <FadeUp key={c.label} delay={0.2 + i * 0.08}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex min-h-[44px] items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/40 hover:bg-surface-2"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        <c.icon size={18} />
                      </div>
                      <p className="text-sm text-text-primary">{c.label}</p>
                    </a>
                  ) : (
                    <div className="flex min-h-[44px] items-center gap-4 rounded-xl border border-border bg-surface p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <c.icon size={18} />
                      </div>
                      <p className="text-sm text-text-primary">{c.label}</p>
                    </div>
                  )}
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.2} className="card relative overflow-hidden">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <ContactForm />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
