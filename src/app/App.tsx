import { useState } from "react";
import { PixelHeader } from "./components/PixelHeader";
import { TabOverview } from "./components/TabOverview";
import { TabAchievements } from "./components/TabAchievements";
import { TabLeaderboard } from "./components/TabLeaderboard";
import { TabRetention } from "./components/TabRetention";

const PIXEL = "'Press Start 2P', monospace";
const MONO = "'DM Mono', monospace";

const TABS = ["OVERVIEW", "ACHIEVEMENTS", "LEADERBOARD", "RETENTION"] as const;
type Tab = typeof TABS[number];

export default function App() {
  {/* MARKER-MAKE-KIT-INVOKED */}
  const [tab, setTab] = useState<Tab>("OVERVIEW");

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: MONO }}
    >
      <PixelHeader />

      {/* tab bar */}
      <div className="border-b border-border px-6 overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-5 py-3.5 border-b-2 transition-colors relative"
              style={{
                fontFamily: PIXEL,
                fontSize: "0.45rem",
                letterSpacing: "0.08em",
                borderBottomColor: tab === t ? "#f5d020" : "transparent",
                color: tab === t ? "#f5d020" : "#5a6a9a",
                background: "transparent",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {tab === "OVERVIEW" && <TabOverview />}
        {tab === "ACHIEVEMENTS" && <TabAchievements />}
        {tab === "LEADERBOARD" && <TabLeaderboard />}
        {tab === "RETENTION" && <TabRetention />}
      </main>
    </div>
  );
}
