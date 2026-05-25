import { createFileRoute, Link } from "@tanstack/react-router";
import { FocusRing } from "@/components/FocusRing";
import { Flame, Sparkles, Instagram, Twitter, Gamepad2, ArrowRight, Leaf, Zap, Moon } from "lucide-react";
import etherGarden from "@/assets/ether-garden.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Aether" },
      {
        name: "description",
        content:
          "Your daily digital balance, focus score, AI insights, app limits and live focus squads at a glance.",
      },
      { property: "og:title", content: "Aether Dashboard" },
      { property: "og:description", content: "System overview of your focus, screen time and rewards." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div>
      {/* Header */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
        <div>
          <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-2">
            Welcome back, Alex
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            System Overview
          </h1>
        </div>
        <div className="flex gap-3">
          <div className="glass px-5 py-3 rounded-2xl">
            <span className="text-foreground/40 text-xs block">Focus Streak</span>
            <span className="text-lg font-bold text-gold flex items-center gap-1.5">
              14 Days <Flame className="size-4" />
            </span>
          </div>
          <div className="glass px-5 py-3 rounded-2xl">
            <span className="text-foreground/40 text-xs block">XP Level</span>
            <span className="text-lg font-bold text-primary">LVL 42</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Primary Focus Card */}
        <section className="col-span-12 lg:col-span-8 glass rounded-4xl p-8 md:p-10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-8">
            <div className="max-w-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Daily Digital Balance</h2>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                You have <span className="text-primary font-semibold">45 minutes</span> of
                recreational screen time remaining today.
              </p>
              <Link
                to="/focus"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-4 rounded-2xl hover:scale-[1.02] transition-transform shadow-glow-cyan"
              >
                START DEEP FOCUS <ArrowRight className="size-4" />
              </Link>
            </div>
            <FocusRing value={72} label="2h 12m" sublabel="Total Use" />
          </div>

          {/* Decorative waveform */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent flex items-end gap-1 px-6 pb-4 pointer-events-none">
            {[8, 12, 16, 24, 14, 10, 18, 28, 20, 12, 14, 22, 30, 18, 10, 14, 26, 16, 10].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/30 rounded-t-sm"
                  style={{ height: `${h * 3}px`, opacity: 0.4 + h / 80 }}
                />
              )
            )}
          </div>
        </section>

        {/* AI Coach */}
        <section className="col-span-12 lg:col-span-4 rounded-4xl p-8 flex flex-col glass-strong bg-gradient-to-br from-luxe/20 to-electric/15 border border-white/10">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-12 rounded-full bg-luxe grid place-items-center shadow-glow-luxe">
              <Sparkles className="size-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold">Aura AI</h3>
              <span className="text-xs text-foreground/50">Productivity Coach</span>
            </div>
          </div>
          <div className="bg-black/30 rounded-2xl p-4 mb-4 text-sm leading-relaxed border border-white/5">
            "I noticed your focus drops significantly after 3 PM. Shall we schedule a 10-minute
            meditation at 2:45 today?"
          </div>
          <div className="mt-auto flex gap-2">
            <button className="flex-1 bg-white/5 border border-white/10 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors">
              Dismiss
            </button>
            <button className="flex-1 bg-luxe py-3 rounded-xl text-sm font-semibold shadow-glow-luxe">
              Schedule
            </button>
          </div>
        </section>

        {/* App Limits */}
        <section className="col-span-12 lg:col-span-5 glass rounded-4xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">App Limits</h3>
            <Link to="/blocker" className="text-primary text-sm hover:underline">
              Edit Limits
            </Link>
          </div>
          <div className="space-y-5">
            <AppLimit Icon={Instagram} name="Instagram" used="42m" total="45m" pct={92} color="bg-destructive" />
            <AppLimit Icon={Twitter} name="X / Twitter" used="12m" total="30m" pct={40} color="bg-primary" />
            <AppLimit Icon={Gamepad2} name="Discord" used="05m" total="60m" pct={8} color="bg-neon" />
          </div>
        </section>

        {/* Virtual Garden */}
        <section className="col-span-12 lg:col-span-7 rounded-4xl p-8 relative overflow-hidden border border-white/10 group min-h-[280px]">
          <img
            src={etherGarden}
            alt="Bioluminescent ether garden"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative z-10 flex flex-col h-full justify-between gap-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-1">Ether Garden</h3>
                <p className="text-foreground/70 text-sm">Stay focused to evolve your fauna.</p>
              </div>
              <div className="glass px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest">
                WORLD #04
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <div className="bg-primary/20 border border-primary/40 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2">
                <span className="size-2 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  3 Seeds Ready
                </span>
              </div>
              <Link
                to="/rewards"
                className="px-5 py-2.5 bg-white text-background rounded-xl font-bold text-sm hover:bg-primary transition-colors"
              >
                Enter World
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Focus Modes */}
        <section className="col-span-12">
          <h2 className="text-2xl font-bold mb-5">Focus Modes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ModeCard Icon={Zap} title="Deep Work" minutes="50 min" tint="from-primary/25 to-electric/15" />
            <ModeCard Icon={Leaf} title="Meditation" minutes="15 min" tint="from-neon/25 to-primary/10" />
            <ModeCard Icon={Moon} title="Sleep Mode" minutes="8h" tint="from-luxe/25 to-electric/10" />
            <ModeCard Icon={Flame} title="Marathon" minutes="2h+" tint="from-gold/25 to-soft-pink/15" />
          </div>
        </section>
      </div>
    </div>
  );
}

function AppLimit({
  Icon,
  name,
  used,
  total,
  pct,
  color,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  used: string;
  total: string;
  pct: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
        <Icon className="size-5 text-foreground/70" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-sm mb-2 font-medium">
          <span>{name}</span>
          <span className="text-foreground/40 font-mono">
            {used} / {total}
          </span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}

function ModeCard({
  Icon,
  title,
  minutes,
  tint,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  minutes: string;
  tint: string;
}) {
  return (
    <Link
      to="/focus"
      className={`glass rounded-3xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 bg-gradient-to-br ${tint}`}
    >
      <Icon className="size-7 text-primary mb-4" />
      <div className="font-bold">{title}</div>
      <div className="text-xs text-foreground/50 mt-1 font-mono">{minutes}</div>
    </Link>
  );
}
