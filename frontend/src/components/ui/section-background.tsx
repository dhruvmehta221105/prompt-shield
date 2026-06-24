export function SectionBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(62,213,221,0.08),transparent_55%)]" />
      <svg
        className="absolute -left-20 top-0 h-full w-1/2 opacity-20"
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 Q100 150 200 200 T400 200 V800 H0 Z"
          stroke="rgba(62,213,221,0.3)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 350 Q120 300 240 350 T480 350"
          stroke="rgba(62,213,221,0.2)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 500 Q80 450 160 500 T320 500"
          stroke="rgba(62,213,221,0.15)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}
