"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { site } from "@/data/site";

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
  budget?: string;
};

const BUDGETS = [
  "Quick consultation",
  "Small project (< ₹50k)",
  "Full build (> ₹50k)",
  "Ongoing retainer",
];

async function sendViaFormSubmit(data: FormData) {
  const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      company: data.company || "—",
      budget: data.budget || "—",
      message: data.message,
      _subject: `Portfolio Contact — ${data.name}`,
      _template: "table",
    }),
  });
  if (!res.ok) throw new Error("FormSubmit failed");
}

async function sendViaEmailJS(data: FormData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) return false;

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      from_email: data.email,
      company: data.company || "—",
      budget: data.budget || "—",
      message: data.message,
      to_email: site.email,
    },
    publicKey
  );
  return true;
}

async function sendViaApi(data: FormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.ok;
}

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      let delivered = false;

      if (await sendViaApi(data)) {
        delivered = true;
      } else if (await sendViaEmailJS(data)) {
        delivered = true;
      } else {
        await sendViaFormSubmit(data);
        delivered = true;
      }

      if (!delivered) throw new Error("All send methods failed");

      setSent(true);
      toast.success("Message sent! Smit will reply within 24 hours.");
      const { default: confetti } = await import("canvas-confetti");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#6366f1", "#22d3ee", "#a855f7"],
      });
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "—"}\nBudget: ${data.budget || "—"}\n\n${data.message}`
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Portfolio Inquiry")}&body=${body}`;
      toast.info("Opening your email app as backup…");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <input {...register("name", { required: true })} placeholder="Your name *" className={inputClass} />
          {errors.name && <p className="mt-1 text-xs text-red-400">Name is required</p>}
        </div>
        <div>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            placeholder="Email address *"
            type="email"
            className={inputClass}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">Valid email required</p>}
        </div>
      </div>

      <input
        {...register("company")}
        placeholder="Company / brand name (optional)"
        className={inputClass}
      />

      <div className="flex flex-wrap gap-2">
        {BUDGETS.map((b) => (
          <label key={b} className="cursor-pointer">
            <input {...register("budget")} type="radio" value={b} className="sr-only peer" />
            <span className="block select-none rounded-full border border-border px-3 py-1.5 text-xs text-text-muted transition-colors duration-200 peer-checked:border-accent peer-checked:text-accent hover:border-accent/50 hover:text-accent">
              {b}
            </span>
          </label>
        ))}
      </div>

      <div>
        <textarea
          {...register("message", { required: true, minLength: 10 })}
          placeholder="Tell me what you want to automate or build... *"
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">Please add a message (min 10 chars)</p>
        )}
      </div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full rounded-xl border border-emerald-500/40 bg-emerald-500/20 py-3 text-center text-sm font-medium text-emerald-400"
          >
            ✓ Sent! Smit will be in touch soon.
          </motion.div>
        ) : (
          <motion.button
            key="btn"
            type="submit"
            disabled={sending}
            className="relative w-full overflow-hidden rounded-xl bg-accent py-3.5 text-sm font-semibold text-white disabled:opacity-60"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative">{sending ? "Sending..." : "Send Message →"}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <p className="text-center text-xs text-text-muted">
        Message goes to {site.email}. Typical reply: under 24 hours.
      </p>
    </form>
  );
}
