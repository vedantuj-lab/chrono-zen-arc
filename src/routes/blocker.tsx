import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shield, Lock, Clock, MapPin, Zap, BookOpen, Moon, Dumbbell, Leaf } from "lucide-react";

export const Route = createFileRoute("/blocker")({
  head: () => ({
    meta: [
      { title: "App Blocker — Aether" },
      { name: "description", content: "Block distractions, schedule focus modes, and prevent uninstall cheating." },
      { property: "og:title", content: "App Blocker — Aether" },
      { property: "og:description", content: "Smart, scheduled, location-aware app blocking." },
    ],
  }),
  component: BlockerPage,
});

const apps = [
  { name: "Instagram", category: "Social", blocked: true },
  { name: "TikTok", category: "Social", blocked: true },
  { name: "X / Twitter", category: "Social", blocked: false },
  { name: "Reddit", category: "Forum", blocked: true },
  { name: "YouTube", category: "Media", blocked: false },
  { name: "Discord", category: "Chat", blocked: false },
];

const modes = [
  { Icon: BookOpen, name: "Study", desc: "Block social + games" },
  { Icon: Zap, name: "Deep Work", desc: "Allow only productivity apps" },
  { Icon: Leaf, name: "Meditation", desc: "Block everything" },
  { Icon: Dumbbell, name: "Workout", desc: "Music + fitness only" },
  { Icon: Moon, name: "Sleep", desc: "Lock screen after 10 PM" },
];

function BlockerPage() {
  const [state, setState] = useState(apps);

  return (
    <div>
      <header className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-2">Defense</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">App Blocker</h1>
        </div>
        <button className="self-start bg-destructive/90 text-destructive-foreground px-6 py-3 rounded-2xl font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
          <Lock className="size-4" /> Activate Strict Lock
        </button>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-7 glass rounded-4xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Shield className="size-5 text-primary" /> Blocked Apps
          </h2>
          <div className="space-y-3">
            {state.map((a, i) => (
              <div
                key={a.name}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div>
                  <div className="font-semibold">{a.name}</div>
                  <div className="text-xs text-foreground/40">{a.category}</div>
                </div>
                <button
                  onClick={() =>
                    setState((s) => s.map((x, j) => (i === j ? { ...x, blocked: !x.blocked } : x)))
                  }
                  className={[
                    "w-12 h-6 rounded-full relative transition-colors",
                    a.blocked ? "bg-primary" : "bg-white/10",
                  ].join(" ")}
                  aria-pressed={a.blocked}
                  aria-label={`Toggle ${a.name}`}
                >
                  <span
                    className={[
                      "absolute top-0.5 size-5 bg-white rounded-full transition-transform",
                      a.blocked ? "translate-x-6" : "translate-x-0.5",
                    ].join(" ")}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="col-span-12 lg:col-span-5 space-y-6">
          <div className="glass rounded-4xl p-8">
            <h2 className="text-xl font-bold mb-6">Focus Modes</h2>
            <div className="space-y-3">
              {modes.map(({ Icon, name, desc }) => (
                <button
                  key={name}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/40 transition-colors text-left"
                >
                  <div className="size-12 rounded-2xl bg-primary/15 border border-primary/30 grid place-items-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs text-foreground/50">{desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-4xl p-8 bg-gradient-to-br from-luxe/15 to-electric/10">
            <h2 className="text-xl font-bold mb-4">Automation</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="size-4 text-primary" />
                Auto-block social apps 9am – 5pm
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" />
                Block games at "Office" location
              </li>
              <li className="flex items-center gap-3">
                <Zap className="size-4 text-primary" />
                AI detects distraction patterns
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
