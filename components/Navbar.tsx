"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "AI Arsenal", href: "#ai-arsenal" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-[padding,background,border] duration-200 ${
          scrolled ? "nav-blur py-3" : "bg-transparent py-5"
        }`}
        style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="container-max flex items-center justify-between px-6 md:px-12 lg:px-20">
          <a href="#" className="font-display text-lg font-semibold tracking-tight">
            Smit<span className="text-violet-accent">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-soft transition-colors duration-200 hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary hidden text-sm md:inline-flex">
            Let&apos;s Connect
          </a>

          <button
            className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-border md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={18} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[70] flex w-[280px] flex-col border-l border-border bg-bg/95 backdrop-blur-xl md:hidden"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <div>
                  <p className="font-display text-lg font-semibold">Smit Kapadiya</p>
                  <p className="font-mono text-[10px] text-violet-accent">AI Generalist</p>
                </div>
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-1 px-4 py-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block min-h-[44px] rounded-xl px-4 py-3 text-sm text-text-soft transition-colors hover:bg-surface hover:text-text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border p-4">
                <a
                  href="#contact"
                  className="btn-primary w-full text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  Let&apos;s Connect
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
