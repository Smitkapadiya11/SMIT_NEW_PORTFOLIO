"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, MapPin, Send, Loader2, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
          to_email: site.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "key_placeholder"
      );
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const contacts = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: `tel:+${site.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: site.whatsapp },
    { icon: Linkedin, label: "LinkedIn", value: "smitkapadiya", href: site.linkedin },
    { icon: MapPin, label: "Location", value: site.locationShort, href: null },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4" data-animate="fade-up">Contact</p>
            <h2 className="heading-lg mb-4" data-animate="fade-up" data-delay="100">
              Have a process that needs automating? Let&apos;s talk.
            </h2>
            <p className="body-md mb-4" data-animate="fade-up" data-delay="200">
              Open to AI consulting, automation projects, freelance builds, and founding-team roles.
            </p>
            <p className="mb-8 font-mono text-sm text-cyan" data-animate="fade-up" data-delay="250">
              {site.availability}
            </p>

            <div className="flex flex-col gap-3">
              {contacts.map((c, i) => (
                <div key={c.label} data-animate="fade-up" data-delay={String(300 + i * 80)}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/40 hover:bg-surface-2"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        <c.icon size={18} />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">{c.label}</p>
                        <p className="text-sm text-text-primary">{c.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <c.icon size={18} />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">{c.label}</p>
                        <p className="text-sm text-text-primary">{c.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="card relative overflow-hidden space-y-4"
            data-animate="scale"
            data-delay="200"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent/50"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent/50"
                placeholder="Tell me about your project or process..."
              />
            </div>
            <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
            {status === "sent" && (
              <p className="text-center text-sm text-cyan">Message sent. I&apos;ll get back to you within 24 hours.</p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Couldn&apos;t send — email me at {site.email} or WhatsApp {site.phoneDisplay}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
