"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import confetti from "canvas-confetti";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed");
      }

      setSent(true);
      toast.success("Message received! Smit will reply shortly.");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#6366f1", "#22d3ee", "#a855f7"],
      });
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast.error(`Something went wrong. Email directly: ${site.email}`);
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
          {...register("message", { required: true, minLength: 20 })}
          placeholder="Tell me what you want to automate or build... *"
          rows={5}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">Please add a message (min 20 chars)</p>
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
        Your message goes directly to Smit&apos;s inbox. Typical reply: under 24 hours.
      </p>
    </form>
  );
}
