import { createFileRoute } from "@tanstack/react-router";
import { FocusRing } from "@/components/FocusRing";
import { TrendingDown, TrendingUp, Brain, Heart } from "lucide-react";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Aether" },
      { name: "description", content: "Weekly and monthly insights on screen time, focus, and wellness trends." },
      { property: "og:title", content: "Analytics — Aether" },
      { property: "og:description", content: "Interactive charts, heatmaps, and AI-generated wellness reports." },
    ],
  }),
  component: AnalyticsPage,
});

const week = [3.2, 4.1, 2.4, 5.0, 3.6, 2.1, 1.8];
const days = ["M", "T", "W", "T", "F", "S", "S"];

function AnalyticsPage() {
  const max = Math.max(...week);
  return (
    <div>
      <header className="mb-10">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-2">Insights</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Wellness Analytics</h1>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <Stat label="Avg Screen Time" value="3h 12m" delta="-14%" down Icon={TrendingDown} />
        <Stat label="Focus Score" value="84/100" delta="+8%" Icon={TrendingUp} />
        <Stat label="Wellness Score" value="91" delta="+5%" Icon={Heart} />
        <Stat label="AI Insights" value="12" delta="this week" Icon={Brain} />

        <section className="col-span-12 lg:col-span-8 glass rounded-4xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Weekly Screen Time</h2>
            <span className="text-xs text-foreground/40 font-mono">hours</span>
          </div>
          <div className="h-64 flex items-end gap-3">
            {week.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex-1 flex items-end">
                  <div
                    className="w-full rounded-t-xl bg-gradient-to-t from-primary to-luxe shadow-glow-cyan"
                    style={{ height: `${(v / max) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-foreground/50 font-mono">{days[i]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="col-span-12 lg:col-span-4 glass rounded-4xl p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4 self-start">Productivity</h2>
          <FocusRing value={88} label="88%" sublabel="This Week" color="var(--color-neon)" />
          <p className="mt-4 text-sm text-foreground/60 text-center">
            You spent 68% of your screen time on productive apps.
          </p>
        </section>

        <section className="col-span-12 glass rounded-4xl p-8">
          <h2 className="text-xl font-bold mb-6">Usage Heatmap</h2>
          <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}>
            {Array.from({ length: 7 * 24 }).map((_, i) => {
              const v = (Math.sin(i * 0.7) + 1) / 2;
              return (
                <div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{ background: `oklch(0.78 0.15 200 / ${0.08 + v * 0.6})` }}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
  down,
  Icon,
}: {
  label: string;
  value: string;
  delta: string;
  down?: boolean;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="col-span-6 md:col-span-3 glass rounded-3xl p-5">
      <div className="flex justify-between items-start">
        <span className="text-xs text-foreground/50">{label}</span>
        <Icon className={`size-4 ${down ? "text-neon" : "text-primary"}`} />
      </div>
      <div className="text-2xl font-bold mt-3 font-mono">{value}</div>
      <div className={`text-xs mt-1 ${down ? "text-neon" : "text-primary"}`}>{delta}</div>
    </div>
  );
}
