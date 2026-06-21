import { Zap, BarChart2, Lock, RefreshCw, Globe, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant ingestion",
    body: "Events flow in under 50ms. Query your most recent data with zero cold-start lag.",
  },
  {
    icon: BarChart2,
    title: "Composable dashboards",
    body: "Drag, stack, and filter charts without touching SQL. Export to CSV or PDF in one click.",
  },
  {
    icon: Lock,
    title: "Row-level security",
    body: "Policies live next to your schema. Each team member sees exactly what they're allowed to.",
  },
  {
    icon: RefreshCw,
    title: "Live sync",
    body: "Connect Postgres, Snowflake, or Redshift. Changes upstream reflect here within seconds.",
  },
  {
    icon: Globe,
    title: "Edge delivery",
    body: "Dashboards are served from the region nearest your user — under 80ms globally.",
  },
  {
    icon: Layers,
    title: "Semantic layer",
    body: "Define metrics once in YAML. Reference them in any chart across any workspace.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
          >
            Built for the pace of modern teams.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Six capabilities that compound. Mix and match them to fit your stack
            and your team's workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-200"
            >
              <Icon
                size={20}
                className="text-primary mb-5"
                strokeWidth={1.5}
              />
              <h3
                className="text-foreground mb-2"
                style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.15rem" }}
              >
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
