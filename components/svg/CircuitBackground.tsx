export default function CircuitBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-[0.07] md:block"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id="circuit-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <line x1="0" y1="40" x2="80" y2="40" stroke="#7c6fff" strokeWidth="0.5" />
          <line x1="40" y1="0" x2="40" y2="80" stroke="#7c6fff" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="2" fill="#7c6fff" opacity="0.6" />
          <circle cx="0" cy="40" r="1.5" fill="#00e5ff" opacity="0.4" />
          <circle cx="40" cy="0" r="1.5" fill="#00e5ff" opacity="0.4" />
        </pattern>
        <linearGradient id="trace-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c6fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#7c6fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-grid)" />
      {[
        "M 0 200 H 400 V 400 H 800",
        "M 200 0 V 300 H 600 V 600",
        "M 0 500 H 300 V 200 H 900",
        "M 500 0 V 450 H 100 V 700",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="url(#trace-glow)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: 200,
            animation: `trace-pulse 4s ${i * 1.2}s ease-in-out infinite`,
          }}
        />
      ))}
    </svg>
  );
}
