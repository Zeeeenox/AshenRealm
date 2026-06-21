import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const PIXEL = "'Press Start 2P', monospace";
const MONO = "'DM Mono', monospace";

const engagementLoop = [
  { axis: "Onboarding", value: 72 },
  { axis: "Daily Hooks", value: 85 },
  { axis: "Progression", value: 94 },
  { axis: "Social", value: 58 },
  { axis: "Monetization", value: 61 },
  { axis: "Retention", value: 88 },
];

const sessionData = [
  { day: "MON", avg: 38 },
  { day: "TUE", avg: 42 },
  { day: "WED", avg: 35 },
  { day: "THU", avg: 51 },
  { day: "FRI", avg: 64 },
  { day: "SAT", avg: 87 },
  { day: "SUN", avg: 79 },
];

const rewardLoops = [
  {
    step: "01",
    title: "FIRST BLOOD",
    desc: "First boss kill grants Rune burst + Tarnished title. Immediate identity hook anchors new players.",
    color: "#c9a84c",
  },
  {
    step: "02",
    title: "RUNE CHAIN",
    desc: "Consecutive kills compound Rune multiplier ×1.5 → ×3. Death resets it — risk/reward tension.",
    color: "#8b2020",
  },
  {
    step: "03",
    title: "DAILY MANDATE",
    desc: "3 rotating quests refresh at 00:00 UTC. Clearing all 3 drops a Blessed Chest with rare Ashes.",
    color: "#a0785a",
  },
  {
    step: "04",
    title: "ERDTREE RANK",
    desc: "Rune accumulation drives Wretch → Elden Lord prestige. Top 1% earn the Shardbearing skin.",
    color: "#7c4f9a",
  },
];

export function TabOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-1 flex flex-col gap-4">
        <h2 style={{ fontFamily: PIXEL, fontSize: "0.55rem", color: "#6b5a3a", letterSpacing: "0.1em" }}>
          CORE REWARD LOOP
        </h2>
        {rewardLoops.map(({ step, title, desc, color }) => (
          <div
            key={step}
            className="bg-card border border-border rounded-lg p-4 hover:bg-secondary transition-colors"
            style={{ borderLeftColor: color, borderLeftWidth: "3px" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#6b5a3a" }}>{step}</span>
              <span style={{ fontFamily: PIXEL, fontSize: "0.55rem", color }}>{title}</span>
            </div>
            <p style={{ fontFamily: MONO, fontSize: "0.7rem", color: "#8a7050", lineHeight: "1.6" }}>{desc}</p>
          </div>
        ))}
      </div>

      <div className="lg:col-span-2 flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-card border border-border rounded-lg p-5">
            <h2 style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#6b5a3a", letterSpacing: "0.1em", marginBottom: "16px" }}>
              ENGAGEMENT HEALTH
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={engagementLoop}>
                <PolarGrid stroke="rgba(201,168,76,0.08)" />
                <PolarAngleAxis
                  dataKey="axis"
                  tick={{ fill: "#6b5a3a", fontSize: 8, fontFamily: MONO }}
                />
                <Radar
                  dataKey="value"
                  stroke="#c9a84c"
                  fill="#c9a84c"
                  fillOpacity={0.15}
                  strokeWidth={1.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h2 style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#6b5a3a", letterSpacing: "0.1em", marginBottom: "16px" }}>
              AVG SESSION (MIN)
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={sessionData} margin={{ left: -20, bottom: 0 }}>
                <CartesianGrid stroke="rgba(201,168,76,0.05)" strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fill: "#6b5a3a", fontSize: 8, fontFamily: MONO }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b5a3a", fontSize: 8, fontFamily: MONO }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#131008", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "6px", fontFamily: MONO, fontSize: "11px", color: "#e8dcc8" }}
                />
                <Bar dataKey="avg" fill="#8b2020" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-5">
          <h2 style={{ fontFamily: PIXEL, fontSize: "0.5rem", color: "#6b5a3a", letterSpacing: "0.1em", marginBottom: "20px" }}>
            PLAYER CONVERSION FUNNEL
          </h2>
          {[
            { stage: "INSTALL", count: "2,100,000", pct: 100, color: "#c9a84c" },
            { stage: "FIRST BOSS ATTEMPT", count: "1,680,000", pct: 80, color: "#c9a84c" },
            { stage: "DAY 1 RETURN", count: "882,000", pct: 42, color: "#8b2020" },
            { stage: "DAY 7 RETAIN", count: "378,000", pct: 18, color: "#a0785a" },
            { stage: "DAY 30 RETAIN", count: "126,000", pct: 6, color: "#7c4f9a" },
            { stage: "SPENDER", count: "25,200", pct: 1.2, color: "#4a7a8a" },
          ].map(({ stage, count, pct, color }) => (
            <div key={stage} className="mb-3">
              <div className="flex justify-between mb-1">
                <span style={{ fontFamily: MONO, fontSize: "0.65rem", color: "#8a7050" }}>{stage}</span>
                <span style={{ fontFamily: MONO, fontSize: "0.65rem", color }}>{count}</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.85 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
