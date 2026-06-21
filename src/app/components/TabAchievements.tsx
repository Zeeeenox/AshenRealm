import { useState } from "react";

const PIXEL = "'Press Start 2P', monospace";
const MONO = "'DM Mono', monospace";

type Rarity = "COMMON" | "RARE" | "EPIC" | "LEGENDARY";

const rarityColor: Record<Rarity, string> = {
  COMMON: "#8a7050",
  RARE: "#4a7a8a",
  EPIC: "#7c4f9a",
  LEGENDARY: "#c9a84c",
};

const achievements = [
  { id: 1, emoji: "🗡️", name: "FIRST KILL", desc: "Slay your first enemy in the Lands Between", xp: 50, rarity: "COMMON" as Rarity, unlocked: true, players: "96%" },
  { id: 2, emoji: "🛡️", name: "RAISED GUARD", desc: "Block 100 incoming attacks without breaking stance", xp: 120, rarity: "COMMON" as Rarity, unlocked: true, players: "68%" },
  { id: 3, emoji: "🔥", name: "DEATH'S PILGRIM", desc: "Die and respawn 50 times — embrace the cycle", xp: 200, rarity: "RARE" as Rarity, unlocked: true, players: "81%" },
  { id: 4, emoji: "🏰", name: "STORMVEIL CLEAR", desc: "Defeat Margit and Godrick without summoning", xp: 600, rarity: "RARE" as Rarity, unlocked: false, players: "22%" },
  { id: 5, emoji: "⚡", name: "PARRY GOD", desc: "Riposte a boss 10 times in a single playthrough", xp: 900, rarity: "EPIC" as Rarity, unlocked: false, players: "7%" },
  { id: 6, emoji: "🐉", name: "DRAGON SLAYER", desc: "Kill all 8 ancient dragons across the Realm", xp: 1400, rarity: "EPIC" as Rarity, unlocked: false, players: "2.4%" },
  { id: 7, emoji: "👑", name: "ELDEN LORD", desc: "Complete all questlines and claim the Elden Throne", xp: 5000, rarity: "LEGENDARY" as Rarity, unlocked: false, players: "0.3%" },
  { id: 8, emoji: "☠️", name: "NO DEATH RUN", desc: "Complete the main story without dying once", xp: 10000, rarity: "LEGENDARY" as Rarity, unlocked: false, players: "0.05%" },
];

const progressionLevels = [
  { level: 1, label: "WRETCH", xpNeeded: 0, reward: "Starter equipment" },
  { level: 5, label: "TARNISHED", xpNeeded: 500, reward: "Iron armor set" },
  { level: 10, label: "KNIGHT", xpNeeded: 2000, reward: "Stance break bonus" },
  { level: 20, label: "CHAMPION", xpNeeded: 8000, reward: "Golden particle trail" },
  { level: 35, label: "SHARDBEAR", xpNeeded: 25000, reward: "Ashes of War slot ×2" },
  { level: 50, label: "ELDEN LORD", xpNeeded: 80000, reward: "Exclusive Erdtree skin" },
];

const CURRENT_XP = 2400;
const CURRENT_LEVEL = 12;

export function TabAchievements() {
  const [filter, setFilter] = useState<"ALL" | Rarity>("ALL");
  const filtered = filter === "ALL" ? achievements : achievements.filter(a => a.rarity === filter);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="flex flex-col gap-4">
        <h2 style={{ fontFamily: PIXEL, fontSize: "0.55rem", color: "#6b5a3a", letterSpacing: "0.1em" }}>
          RUNE PROGRESSION
        </h2>

        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <span style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#6b5a3a" }}>LEVEL</span>
            <span style={{ fontFamily: PIXEL, fontSize: "1.2rem", color: "#c9a84c" }}>{CURRENT_LEVEL}</span>
          </div>
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#6b5a3a" }}>2,400 / 4,000 RUNES</span>
              <span style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#8b2020" }}>60%</span>
            </div>
            <div className="h-3 bg-secondary rounded-sm overflow-hidden">
              <div className="h-full bg-primary rounded-sm" style={{ width: "60%" }} />
            </div>
          </div>
          <p style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#6b5a3a" }}>1,600 Runes to next grace</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 flex flex-col gap-3">
          {progressionLevels.map(({ level, label, xpNeeded, reward }) => {
            const reached = CURRENT_XP >= xpNeeded;
            return (
              <div key={level} className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded flex items-center justify-center shrink-0"
                  style={{ background: reached ? "#c9a84c" : "#1c1609", border: "1px solid rgba(201,168,76,0.12)" }}
                >
                  <span style={{ fontFamily: PIXEL, fontSize: "0.4rem", color: reached ? "#0c0a07" : "#6b5a3a" }}>
                    {level}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: PIXEL, fontSize: "0.45rem", color: reached ? "#c9a84c" : "#6b5a3a" }}>{label}</p>
                  <p style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#6b5a3a", marginTop: "2px" }}>{reward}</p>
                </div>
                {reached && <span style={{ fontSize: "0.7rem" }}>✓</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 style={{ fontFamily: PIXEL, fontSize: "0.55rem", color: "#6b5a3a", letterSpacing: "0.1em" }}>
            ACHIEVEMENT SYSTEM
          </h2>
          <div className="flex gap-2 flex-wrap">
            {(["ALL", "COMMON", "RARE", "EPIC", "LEGENDARY"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-1 rounded border transition-colors"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.6rem",
                  borderColor: filter === f ? (f === "ALL" ? "#c9a84c" : rarityColor[f as Rarity]) : "rgba(201,168,76,0.12)",
                  color: filter === f ? (f === "ALL" ? "#c9a84c" : rarityColor[f as Rarity]) : "#6b5a3a",
                  background: "transparent",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map(({ id, emoji, name, desc, xp, rarity, unlocked, players }) => (
            <div
              key={id}
              className="bg-card border rounded-lg p-4 flex gap-3 transition-opacity"
              style={{
                borderColor: unlocked ? rarityColor[rarity] + "55" : "rgba(201,168,76,0.1)",
                opacity: unlocked ? 1 : 0.5,
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-2xl shrink-0"
                style={{ background: unlocked ? rarityColor[rarity] + "22" : "#1c1609" }}
              >
                {unlocked ? emoji : "🔒"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span style={{ fontFamily: PIXEL, fontSize: "0.45rem", color: rarityColor[rarity] }}>{name}</span>
                  <span style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#c9a84c" }}>+{xp} XP</span>
                </div>
                <p style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#8a7050", lineHeight: "1.5" }}>{desc}</p>
                <p style={{ fontFamily: MONO, fontSize: "0.55rem", color: "#6b5a3a", marginTop: "4px" }}>
                  {players} of players unlocked
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
