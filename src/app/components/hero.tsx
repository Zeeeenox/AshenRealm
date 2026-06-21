export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532190872407-280735d27e08?w=1600&h=900&fit=crop&auto=format"
          alt="Abstract dark technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090f]/60 via-[#09090f]/40 to-[#09090f]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
          Now in public beta
        </span>

        <h1
          className="text-foreground mb-6 leading-[1.1] tracking-tight"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          }}
        >
          Clarity for every
          <br />
          <em className="text-primary not-italic">decision you make.</em>
        </h1>

        <p
          className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem" }}
        >
          Lumina surfaces the insights buried in your data — in real time, without
          the noise. Ship faster. Understand deeper.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-primary text-primary-foreground px-7 py-3 rounded-md hover:opacity-90 transition-opacity text-sm tracking-wide">
            Start for free
          </button>
          <button className="border border-border text-foreground px-7 py-3 rounded-md hover:bg-secondary transition-colors text-sm tracking-wide">
            See a demo
          </button>
        </div>

        {/* social proof strip */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {["Stripe", "Vercel", "Linear", "Figma", "Notion"].map((co) => (
            <span
              key={co}
              className="text-muted-foreground/50 text-sm tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {co}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground/40 text-xs mt-3">
          Trusted by teams at
        </p>
      </div>
    </section>
  );
}
