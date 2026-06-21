import { useState } from "react";

const PIXEL = "'Press Start 2P', monospace";
const MONO = "'DM Mono', monospace";

const players = [
  { rank: 1, name: "MalikurdVeil", score: 9840, streak: 18, level: 50, country: "🇯🇵", badge: "👑" },
  { rank: 2, name: "AshbornOne", score: 9102, streak: 12, level: 48, country: "🇺🇸", badge: "🥈" },
  { rank: 3, name: "GravestoneFell", score: 8771, streak: 9, level: 46, country: "🇩🇪", badge: "🥉" },
  { rank: 4, name: "RuinSentinel", score: 7430, streak: 5, level: 42, country: "🇧🇷", badge: "⚔️" },
  { rank: 5, name: "NightBladeX", score: 6894, streak: 14, level: 39, country: "🇰🇷", badge: "🗡️" },
  { rank: 6, name: "CrimsonFlask", score: 6210, streak: 7, level: 36, country: "🇫🇷", badge: "🔥" },
  { rank: 7, name: "ObsidianGrace", score: 5577, streak: 3, level: 31, country: "🇬🇧", badge: "🌟" },
  { rank: 8, name: "PhantomLore", score: 4920, streak: 8, level: 28, country: "🇨🇦", badge: "🌟" },
  { rank: 9, name: "ErdtreeWalker", score: 4203, streak: 2, level: 25, country: "🇦🇺", badge: "🌟" },
  { rank: 10, name: "you", score: 1840, streak: 5, level: 12, country: "🌍", badge: "🥚", isMe: true },
];

const seasons = ["SEASON 3", "SEASON 2", "SEASON 1"];

export function TabLeaderboard() {
  const [period, setPeriod] = useState<"DAILY" | "WEEKLY" | "ALL TIME">("WEEKLY");
  const [season, setSeason] = useState("SEASON 3");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 flex flex-col gap-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 style={{ fontFamily: PIXEL, fontSize: "0.55rem", color: "#6b5a3a", letterSpacing: "0.1em" }}>
            GLOBAL RANKINGS
          </h2>
          <div className="flex gap-1">
            {(["DAILY", "WEEKLY", "ALL TIME"] as const).map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className="px-3 py-1.5 rounded transition-colors"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.6rem",
                  background: period === p ? "#c9a84c" : "#1c1609",
                  color: period === p ? "#0c0a07" : "#6b5a3a",
                  border: "none",
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* podium */}
        <div className="grid grid-cols-3 gap-3 mb-1">
          {[players[1], players[0], players[2]].map((p, i) => {
            const sizes = ["h-20", "h-28", "h-20"];
            const accentColors = ["#8a7050", "#c9a84c", "#a0785a"];
            return (
              <div
                key={p.rank}
                className={`bg-card border border-border rounded-lg flex flex-col items-center justify-end pb-4 ${sizes[i]}`}
                style={{ borderColor: accentColors[i] + "44" }}
              >
                <p style={{ fontSize: "1.4rem", marginBottom: "4px" }}>{p.badge}</p>
                <p style={{ fontFamily: PIXEL, fontSize: "0.45rem", color: accentColors[i] }}>#{p.rank}</p>
                <p style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#e8dcc8", marginTop: "3px" }}>{p.name}</p>
                <p style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: accentColors[i], marginTop: "4px" }}>{p.score.toLocaleString()}</p>
              </div>
            );
          })}
        </div>

        {/* table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div
            className="grid px-4 py-2 border-b border-border"
            style={{ gridTemplateColumns: "40px 1fr 90px 70px 60px" }}
          >
            {["#", "TARNISHED", "RUNES", "STREAK", "LVL"].map(h => (
              <span key={h} style={{ fontFamily: PIXEL, fontSize: "0.4rem", color: "#6b5a3a" }}>{h}</span>
            ))}
          </div>
          {players.map(p => (
            <div
              key={p.rank}
              className="grid px-4 py-3 border-b border-border last:border-0 hover:bg-secondary/50 transition-colors"
              style={{
                gridTemplateColumns: "40px 1fr 90px 70px 60px",
                background: (p as any).isMe ? "rgba(201,168,76,0.06)" : undefined,
              }}
            >
              <span style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: p.rank <= 3 ? "#c9a84c" : "#6b5a3a" }}>
                {p.rank}
              </span>
              <div className="flex items-center gap-2 min-w-0">
                <span style={{ fontSize: "0.85rem" }}>{p.country}</span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.7rem",
                    color: (p as any).isMe ? "#c9a84c" : "#e8dcc8",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.name}
                </span>
                {(p as any).isMe && (
                  <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: "#c9a84c" }}>(you)</span>
                )}
              </div>
              <span style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#8b2020" }}>{p.score.toLocaleString()}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.65rem", color: p.streak >= 10 ? "#c9a84c" : "#8a7050" }}>
                ⚔️ {p.streak}d
              </span>
              <span style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#7c4f9a" }}>{p.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* season panel */}
      <div className="flex flex-col gap-4">
        <h2 style={{ fontFamily: PIXEL, fontSize: "0.55rem", color: "#6b5a3a", letterSpacing: "0.1em" }}>
          SEASON REWARDS
        </h2>

        <div className="flex gap-2">
          {seasons.map(s => (
            <button
              key={s}
              onClick={() => setSeason(s)}
              className="flex-1 py-1.5 rounded border text-center transition-colors"
              style={{
                fontFamily: MONO,
                fontSize: "0.6rem",
                borderColor: season === s ? "#c9a84c" : "rgba(201,168,76,0.12)",
                color: season === s ? "#c9a84c" : "#6b5a3a",
                background: "transparent",
              }}
            >
              {s.replace("SEASON ", "S")}
            </button>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <p style={{ fontFamily: PIXEL, fontSize: "0.45rem", color: "#6b5a3a", marginBottom: "12px" }}>GRACE REMAINING</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[["18", "DAYS"], ["07", "HRS"], ["43", "MIN"]].map(([val, label]) => (
              <div key={label} className="bg-secondary rounded p-2">
                <p style={{ fontFamily: PIXEL, fontSize: "0.9rem", color: "#c9a84c" }}>{val}</p>
                <p style={{ fontFamily: MONO, fontSize: "0.55rem", color: "#6b5a3a", marginTop: "4px" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {[
          { tier: "ELDEN LORD", top: "Top 1%", reward: "Erdtree armor + 5000 Runes", color: "#c9a84c" },
          { tier: "SHARDBEAR", top: "Top 5%", reward: "Fractured halo + 2000 Runes", color: "#7c4f9a" },
          { tier: "CHAMPION", top: "Top 15%", reward: "Gold weapon trail + 800 Runes", color: "#4a7a8a" },
          { tier: "KNIGHT", top: "Top 35%", reward: "Iron sigil + 300 Runes", color: "#8a7050" },
          { tier: "TARNISHED", top: "Top 60%", reward: "Season crest + 100 Runes", color: "#a0785a" },
        ].map(({ tier, top, reward, color }) => (
          <div key={tier} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
            <div
              className="w-9 h-9 rounded flex items-center justify-center shrink-0"
              style={{ background: color + "22" }}
            >
              <span style={{ fontFamily: PIXEL, fontSize: "0.4rem", color }}>{tier.slice(0, 2)}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: PIXEL, fontSize: "0.45rem", color }}>{tier}</span>
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#6b5a3a" }}>{top}</span>
              </div>
              <p style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#8a7050", marginTop: "3px" }}>{reward}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
