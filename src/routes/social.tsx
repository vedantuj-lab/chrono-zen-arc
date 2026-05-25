import { createFileRoute } from "@tanstack/react-router";
import { Users, Flame, Sparkles, Trophy } from "lucide-react";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      { title: "Squads — Aether" },
      { name: "description", content: "Live focus squads, leaderboards, and group focus battles." },
      { property: "og:title", content: "Squads — Aether" },
      { property: "og:description", content: "Compete, focus together, and climb the leaderboard." },
    ],
  }),
  component: SocialPage,
});

const squads = [
  { name: "Morning Grind", members: 4, color: "from-neon/25 to-primary/15", border: "border-neon/40", Icon: Flame },
  { name: "Deep Work Sprint", members: 8, color: "from-luxe/25 to-electric/15", border: "border-luxe/40", Icon: Sparkles },
  { name: "Zen Meditation", members: 12, color: "from-gold/25 to-soft-pink/15", border: "border-gold/40", Icon: Trophy },
];

const leaderboard = [
  { name: "Mira K.", xp: 12400 },
  { name: "Alex (you)", xp: 8200, you: true },
  { name: "Noah R.", xp: 7980 },
  { name: "Yuki T.", xp: 7340 },
  { name: "Sasha P.", xp: 6100 },
];

function SocialPage() {
  return (
    <div>
      <header className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-2">Together</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Live Focus Squads</h1>
        </div>
        <div className="flex -space-x-3">
          {["MK", "NR", "YT"].map((i) => (
            <div
              key={i}
              className="size-10 rounded-full border-2 border-background bg-card grid place-items-center text-xs font-bold"
            >
              {i}
            </div>
          ))}
          <div className="size-10 rounded-full border-2 border-background bg-white/10 grid place-items-center text-xs font-bold">
            +12
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {squads.map((s) => (
              <div
                key={s.name}
                className={`glass rounded-3xl p-6 bg-gradient-to-br ${s.color} border ${s.border} hover:-translate-y-1 transition-transform`}
              >
                <div className="size-12 rounded-2xl bg-white/10 grid place-items-center mb-4">
                  <s.Icon className="size-5 text-primary" />
                </div>
                <div className="font-bold">{s.name}</div>
                <div className="text-xs text-foreground/50 italic mt-1 flex items-center gap-1.5">
                  <span className="size-1.5 bg-neon rounded-full animate-pulse" />
                  {s.members} members focusing
                </div>
                <button className="mt-5 w-full bg-white text-background py-2.5 rounded-xl font-bold text-sm hover:bg-primary transition-colors">
                  Join
                </button>
              </div>
            ))}
          </div>

          <div className="glass rounded-4xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Users className="size-5 text-primary" /> Weekly Tournament
            </h2>
            <p className="text-foreground/60 mb-4">
              Climb the squad leaderboard by completing focus sessions together. Top squad earns
              the Crystal Crown.
            </p>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[62%] bg-[var(--gradient-primary)] rounded-full shadow-glow-cyan" />
            </div>
            <div className="flex justify-between text-xs text-foreground/50 mt-2 font-mono">
              <span>62% to next rank</span>
              <span>3 days left</span>
            </div>
          </div>
        </section>

        <section className="col-span-12 lg:col-span-4 glass rounded-4xl p-8">
          <h2 className="text-xl font-bold mb-6">Leaderboard</h2>
          <ol className="space-y-3">
            {leaderboard.map((u, i) => (
              <li
                key={u.name}
                className={[
                  "flex items-center justify-between p-3 rounded-2xl border",
                  u.you
                    ? "bg-primary/10 border-primary/40"
                    : "bg-white/[0.03] border-white/5",
                ].join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-full bg-white/10 grid place-items-center text-xs font-bold font-mono">
                    {i + 1}
                  </span>
                  <span className={u.you ? "font-bold text-primary" : "font-medium"}>{u.name}</span>
                </div>
                <span className="text-xs font-mono text-foreground/60">
                  {u.xp.toLocaleString()} XP
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
