import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const PIXEL = "'Press Start 2P', monospace";
const MONO = "'DM Mono', monospace";

const cohortRetention = [
  { day: "D0", before: 100, after: 100 },
  { day: "D1", before: 31, after: 58 },
  { day: "D3", before: 18, after: 41 },
  { day: "D7", before: 11, after: 29 },
  { day: "D14", before: 7, after: 21 },
  { day: "D30", before: 4, after: 15 },
  { day: "D60", before: 2, after: 9 },
];

const dailyActive = [
  { date: "Jun 1", dau: 241000 },
  { date: "Jun 5", dau: 263000 },
  { date: "Jun 8", dau: 287000 },
  { date: "Jun 10", dau: 271000 },
  { date: "Jun 12", dau: 309000 },
  { date: "Jun 14", dau: 287000 },
];

const interventions = [
  {
    title: "SITE OF GRACE PUSH",
    desc: "Day 2 re-engagement: 'A new Grace awaits in the Lands Between…' — personalised to last zone",
    lift: "+14% D3 ret.",
    color: "#c9a84c",
    status: "ACTIVE",
  },
  {
    title: "RUNE STREAK CHEST",
    desc: "Logarithmic login multiplier — day 7 chest contains rare Ashes of War",
    lift: "+11% D7 ret.",
    color: "#8b2020",
    status: "ACTIVE",
  },
  {
    title: "PHANTOM DUEL",
    desc: "Async PvP: beat a friend's ghost score before 24hr expiry with double-Rune reward",
    lift: "+8% D14 ret.",
    color: "#7c4f9a",
    status: "TESTING",
  },
  {
    title: "SEASON END OMEN",
    desc: "Countdown banner with boss skull drives 26% spike in session frequency in final week",
    lift: "+26% final wk",
    color: "#c9a84c",
    status: "ACTIVE",
  },
  {
    title: "MAIDEN'S MERCY",
    desc: "Day 5+ lapse triggers Maiden's letter on return: 500 bonus Runes + full estus refill",
    lift: "+6% D30 ret.",
    color: "#4a7a8a",
    status: "PLANNED",
  },
];

export function TabRetention() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#6b5a3a", letterSpacing: "0.1em" }}>
              RETENTION CURVE
            </h2>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5" style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#8a7050" }}>
                <span className="w-3 h-0.5 bg-[#8a7050] inline-block rounded" /> Pre-gamification
              </span>
              <span className="flex items-center gap-1.5" style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#c9a84c" }}>
                <span className="w-3 h-0.5 bg-[#c9a84c] inline-block rounded" /> After
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={cohortRetention} margin={{ left: -20, bottom: 0 }}>
              <CartesianGrid stroke="rgba(201,168,76,0.05)" strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fill: "#6b5a3a", fontSize: 9, fontFamily: MONO }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fill: "#6b5a3a", fontSize: 9, fontFamily: MONO }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `${v}%`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#131008", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "6px", fontFamily: MONO, fontSize: "11px", color: "#e8dcc8" }}
                formatter={(v: number) => `${v}%`}
              />
              <Line type="monotone" dataKey="before" stroke="#8a7050" strokeWidth={1.5} dot={{ fill: "#8a7050", r: 3 }} strokeDasharray="5 3" />
              <Line type="monotone" dataKey="after" stroke="#c9a84c" strokeWidth={2} dot={{ fill: "#c9a84c", r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h2 style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#6b5a3a", letterSpacing: "0.1em", marginBottom: "16px" }}>
            DAILY ACTIVE TARNISHED — JUNE 2026
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={dailyActive} margin={{ left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="dauGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b2020" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#8b2020" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(201,168,76,0.05)" strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ fill: "#6b5a3a", fontSize: 9, fontFamily: MONO }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fill: "#6b5a3a", fontSize: 9, fontFamily: MONO }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `${(v / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#131008", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "6px", fontFamily: MONO, fontSize: "11px", color: "#e8dcc8" }}
                formatter={(v: number) => `${(v / 1000).toFixed(0)}K`}
              />
              <Area type="monotone" dataKey="dau" stroke="#8b2020" strokeWidth={1.5} fill="url(#dauGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: PIXEL, fontSize: "0.55rem", color: "#6b5a3a", letterSpacing: "0.1em", marginBottom: "16px" }}>
          RETENTION INTERVENTIONS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {interventions.map(({ title, desc, lift, color, status }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-lg p-5 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span style={{ fontFamily: PIXEL, fontSize: "0.45rem", color, lineHeight: "1.8" }}>{title}</span>
                <span
                  className="px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.55rem",
                    background: status === "ACTIVE" ? "#c9a84c22" : status === "TESTING" ? "#7c4f9a22" : "#8b202022",
                    color: status === "ACTIVE" ? "#c9a84c" : status === "TESTING" ? "#9b6fba" : "#cc5555",
                  }}
                >
                  {status}
                </span>
              </div>
              <p style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#8a7050", lineHeight: "1.6", marginBottom: "10px" }}>{desc}</p>
              <div
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded"
                style={{ background: color + "18" }}
              >
                <span style={{ fontSize: "0.7rem" }}>⚔️</span>
                <span style={{ fontFamily: PIXEL, fontSize: "0.4rem", color }}>{lift}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
