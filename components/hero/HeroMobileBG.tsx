export default function HeroMobileBG() {
  return (
    <div className="absolute inset-0 overflow-hidden md:hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0820] via-bg to-[#050f1a]" />
      <div
        className="orb h-[280px] w-[280px] bg-violet-accent opacity-[0.12] -left-16 -top-16"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb h-[200px] w-[200px] bg-cyan-bright opacity-[0.1] -right-12 bottom-[15%]"
        style={{ animationDelay: "-3.5s" }}
      />
      <div
        className="orb h-[150px] w-[150px] bg-emerald-bright opacity-[0.08] left-[30%] top-[40%]"
        style={{ animationDelay: "-7s" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden>
        <defs>
          <pattern id="mob-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7c6fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mob-grid)" />
      </svg>
    </div>
  );
}
