import { createFileRoute } from "@tanstack/react-router";
import etherGarden from "@/assets/ether-garden.jpg";
import { Trophy, Coins, Star, Lock } from "lucide-react";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards — Aether" },
      { name: "description", content: "Grow your virtual garden, evolve digital pets, and unlock rare collectibles." },
      { property: "og:title", content: "Rewards — Aether" },
      { property: "og:description", content: "Gamified rewards for staying focused." },
      { property: "og:image", content: etherGarden },
    ],
  }),
  component: RewardsPage,
});

const achievements = [
  { name: "Sunrise Champion", desc: "5 morning sessions", earned: true },
  { name: "Iron Will", desc: "30-day streak", earned: true },
  { name: "Phoenix", desc: "Recover a broken streak", earned: false },
  { name: "Ether Master", desc: "100h focus total", earned: false },
];

function RewardsPage() {
  return (
    <div>
      <header className="mb-10">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-2">Garden</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Rewards & Collectibles</h1>
      </header>

      <section className="rounded-4xl overflow-hidden relative mb-8 min-h-[420px] border border-white/10">
        <img src={etherGarden} alt="Ether garden" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end min-h-[420px]">
          <div className="flex flex-wrap gap-4 mb-6">
            <Pill icon={<Coins className="size-4 text-gold" />} label="2,480 Coins" />
            <Pill icon={<Star className="size-4 text-primary" />} label="LVL 42 · 8,200 XP" />
            <Pill icon={<Trophy className="size-4 text-luxe" />} label="14-Day Streak" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">The Neon Fern is blooming</h2>
          <p className="text-foreground/70 max-w-xl">
            Three more focus sessions unlock the Crystal Stag, a rare evolution available only in
            World 4.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8 glass rounded-4xl p-8">
          <h2 className="text-xl font-bold mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((a) => (
              <div
                key={a.name}
                className={[
                  "rounded-3xl p-5 border transition-all",
                  a.earned
                    ? "bg-gradient-to-br from-luxe/20 to-primary/15 border-primary/30"
                    : "bg-white/[0.03] border-white/5 opacity-60",
                ].join(" ")}
              >
                <div className="size-12 rounded-2xl bg-white/5 grid place-items-center mb-3">
                  {a.earned ? (
                    <Trophy className="size-5 text-gold" />
                  ) : (
                    <Lock className="size-5 text-foreground/40" />
                  )}
                </div>
                <div className="font-bold">{a.name}</div>
                <div className="text-xs text-foreground/50 mt-1">{a.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="col-span-12 lg:col-span-4 glass rounded-4xl p-8">
          <h2 className="text-xl font-bold mb-6">Daily Quests</h2>
          <ul className="space-y-4">
            {[
              { name: "Complete 1 deep focus", xp: 100, done: true },
              { name: "Stay under 3h screen time", xp: 150, done: false },
              { name: "5 min meditation", xp: 50, done: false },
            ].map((q) => (
              <li key={q.name} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      "size-5 rounded-md border-2",
                      q.done ? "bg-primary border-primary" : "border-white/20",
                    ].join(" ")}
                  />
                  <span className={q.done ? "line-through text-foreground/40" : ""}>{q.name}</span>
                </div>
                <span className="text-xs font-mono text-primary">+{q.xp} XP</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="glass-strong px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
      {icon} {label}
    </div>
  );
}
