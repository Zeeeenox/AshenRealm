const PIXEL = "'Press Start 2P', monospace";
const MONO = "'DM Mono', monospace";

export function PixelHeader() {
  return (
    <header className="border-b border-border px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-xl select-none">
          ⚔️
        </div>
        <div>
          <h1 style={{ fontFamily: PIXEL, fontSize: "0.7rem", color: "#c9a84c", letterSpacing: "0.04em" }}>
            ASHEN REALM
          </h1>
          <p style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#6b5a3a", marginTop: "4px" }}>
            GAMIFICATION STRATEGY DASHBOARD
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {[
          { label: "SEASON", value: "S3" },
          { label: "TARNISHED", value: "2.1M" },
          { label: "DAU", value: "287K" },
        ].map(({ label, value }) => (
          <div key={label} className="text-right">
            <p style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#6b5a3a" }}>{label}</p>
            <p style={{ fontFamily: PIXEL, fontSize: "0.65rem", color: "#8b2020", marginTop: "3px" }}>{value}</p>
          </div>
        ))}
        <div className="flex items-center gap-1.5 ml-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#8b2020" }}>LIVE</span>
        </div>
      </div>
    </header>
  );
}
