import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { FocusRing } from "@/components/FocusRing";
import { Play, Pause, RotateCcw, Music2, Wind, Cloud, Waves } from "lucide-react";

export const Route = createFileRoute("/focus")({
  head: () => ({
    meta: [
      { title: "Focus Session — Aether" },
      { name: "description", content: "Pomodoro, deep work, and marathon focus sessions with ambient soundscapes." },
      { property: "og:title", content: "Focus Session — Aether" },
      { property: "og:description", content: "Cinematic focus timer with ambient soundscapes." },
    ],
  }),
  component: FocusPage,
});

const presets = [
  { label: "Pomodoro", minutes: 25 },
  { label: "Deep Work", minutes: 50 },
  { label: "Marathon", minutes: 90 },
  { label: "Quick", minutes: 10 },
];

const ambient = [
  { Icon: Music2, label: "Lofi" },
  { Icon: Wind, label: "Forest" },
  { Icon: Cloud, label: "Rain" },
  { Icon: Waves, label: "Ocean" },
];

function FocusPage() {
  const [duration, setDuration] = useState(25 * 60);
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setRemaining((r) => (r <= 1 ? (setRunning(false), 0) : r - 1));
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const pct = duration ? ((duration - remaining) / duration) * 100 : 0;
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  return (
    <div>
      <header className="mb-10">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-2">Session</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Focus Timer</h1>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8 glass rounded-4xl p-10 flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-luxe/10" />
          <div className="relative">
            <FocusRing size={320} stroke={18} value={pct} label={`${mm}:${ss}`} sublabel="Remaining" />
          </div>

          <div className="relative mt-10 flex gap-3">
            <button
              onClick={() => setRunning((r) => !r)}
              className="bg-primary text-primary-foreground font-bold px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform shadow-glow-cyan"
            >
              {running ? <Pause className="size-5" /> : <Play className="size-5" />}
              {running ? "Pause" : "Start"}
            </button>
            <button
              onClick={() => {
                setRunning(false);
                setRemaining(duration);
              }}
              className="glass px-6 py-4 rounded-2xl flex items-center gap-2 hover:border-primary/40 transition-colors"
            >
              <RotateCcw className="size-5" />
              Reset
            </button>
          </div>

          <div className="relative mt-10 flex flex-wrap gap-2 justify-center">
            {presets.map((p) => {
              const active = duration === p.minutes * 60;
              return (
                <button
                  key={p.label}
                  onClick={() => {
                    setDuration(p.minutes * 60);
                    setRemaining(p.minutes * 60);
                    setRunning(false);
                  }}
                  className={[
                    "px-5 py-2.5 rounded-full text-sm font-medium border transition-colors",
                    active
                      ? "bg-primary/20 border-primary/50 text-primary"
                      : "bg-white/5 border-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  {p.label} · {p.minutes}m
                </button>
              );
            })}
          </div>
        </section>

        <section className="col-span-12 lg:col-span-4 space-y-6">
          <div className="glass rounded-4xl p-6">
            <h3 className="font-bold mb-4">Ambient Soundscape</h3>
            <div className="grid grid-cols-2 gap-3">
              {ambient.map(({ Icon, label }) => (
                <button
                  key={label}
                  className="glass rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:-translate-y-1 transition-all"
                >
                  <Icon className="size-6 text-primary" />
                  <span className="text-xs font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-4xl p-6">
            <h3 className="font-bold mb-4">Today's Sessions</h3>
            <ul className="space-y-3 text-sm">
              {[
                { t: "08:15", l: "Deep Work", d: "50m" },
                { t: "11:00", l: "Pomodoro", d: "25m" },
                { t: "14:30", l: "Meditation", d: "10m" },
              ].map((s) => (
                <li
                  key={s.t}
                  className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                >
                  <div>
                    <div className="font-medium">{s.l}</div>
                    <div className="text-xs text-foreground/40 font-mono">{s.t}</div>
                  </div>
                  <span className="text-primary font-mono text-xs">{s.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
