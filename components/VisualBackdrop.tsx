"use client";

export default function VisualBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
    </div>
  );
}
