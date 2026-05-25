import { createFileRoute } from "@tanstack/react-router";
import { Crown, Bell, Lock, Globe, Eye, Cloud, Smartphone } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Aether" },
      { name: "description", content: "Theme, notifications, privacy, accessibility, and subscription." },
      { property: "og:title", content: "Settings — Aether" },
      { property: "og:description", content: "Customize Aether to fit your wellness routine." },
    ],
  }),
  component: SettingsPage,
});

const groups = [
  { Icon: Bell, name: "Notifications", desc: "Smart timing & quiet hours" },
  { Icon: Lock, name: "Privacy", desc: "End-to-end encryption" },
  { Icon: Eye, name: "Accessibility", desc: "Large text, color-blind modes" },
  { Icon: Globe, name: "Language", desc: "12 languages supported" },
  { Icon: Cloud, name: "Cloud Sync", desc: "Backup & restore data" },
  { Icon: Smartphone, name: "Family Controls", desc: "Monitor & schedule" },
];

function SettingsPage() {
  return (
    <div>
      <header className="mb-10">
        <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-2">Account</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Settings</h1>
      </header>

      <section className="glass rounded-4xl p-8 mb-6 relative overflow-hidden bg-gradient-to-br from-gold/15 to-luxe/15">
        <div className="absolute -top-20 -right-20 size-72 bg-gold/20 blur-[120px] rounded-full" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-bold mb-3">
              <Crown className="size-3.5" /> AETHER PREMIUM
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Unlock everything</h2>
            <p className="text-foreground/70 max-w-md">
              Advanced analytics, unlimited app blocking, AI coaching, family controls, and
              exclusive themes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-gold text-background font-bold px-6 py-3 rounded-2xl hover:scale-105 transition-transform">
              Go Yearly · $59
            </button>
            <button className="glass px-6 py-3 rounded-2xl text-sm">Monthly · $7.99</button>
            <button className="text-xs text-foreground/50 hover:text-primary">Lifetime · $199</button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(({ Icon, name, desc }) => (
          <button
            key={name}
            className="glass rounded-3xl p-6 text-left hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <div className="size-12 rounded-2xl bg-primary/15 border border-primary/30 grid place-items-center mb-4">
              <Icon className="size-5 text-primary" />
            </div>
            <div className="font-bold">{name}</div>
            <div className="text-xs text-foreground/50 mt-1">{desc}</div>
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-foreground/30 mt-10 font-mono">
        Aether v1.0 · Built with ❤ for your focus
      </p>
    </div>
  );
}
