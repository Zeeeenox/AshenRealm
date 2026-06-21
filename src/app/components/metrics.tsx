import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", queries: 1240, users: 320 },
  { month: "Feb", queries: 1890, users: 410 },
  { month: "Mar", queries: 2200, users: 520 },
  { month: "Apr", queries: 1800, users: 480 },
  { month: "May", queries: 3100, users: 690 },
  { month: "Jun", queries: 2700, users: 640 },
  { month: "Jul", queries: 3800, users: 810 },
  { month: "Aug", queries: 4200, users: 920 },
];

const stats = [
  { label: "Events processed", value: "4.2B", change: "+18% this month" },
  { label: "Avg query latency", value: "34ms", change: "−12% vs last month" },
  { label: "Active workspaces", value: "12,400", change: "+920 this month" },
  { label: "Data freshness", value: "< 1s", change: "p99 guarantee" },
];

export function Metrics() {
  return (
    <section id="metrics" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Numbers that tell the story.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Real platform statistics, updated daily.
          </p>
        </div>

        {/* stat tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map(({ label, value, change }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-6">
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2">{label}</p>
              <p
                className="text-foreground mb-1"
                style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem" }}
              >
                {value}
              </p>
              <p className="text-primary text-xs">{change}</p>
            </div>
          ))}
        </div>

        {/* chart */}
        <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h3
              className="text-foreground"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem" }}
            >
              Query volume & active users
            </h3>
            <div className="flex items-center gap-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-primary inline-block rounded" /> Queries
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-muted-foreground inline-block rounded" /> Users
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={chartData} margin={{ top: 4, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gradQueries" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e8b86d" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#e8b86d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c7a88" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#7c7a88" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#7c7a88", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#7c7a88", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111118",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  color: "#f0ede8",
                }}
              />
              <Area
                type="monotone"
                dataKey="queries"
                stroke="#e8b86d"
                strokeWidth={1.5}
                fill="url(#gradQueries)"
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#7c7a88"
                strokeWidth={1.5}
                fill="url(#gradUsers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
