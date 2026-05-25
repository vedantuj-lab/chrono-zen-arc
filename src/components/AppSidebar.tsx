import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Timer,
  ShieldHalf,
  BarChart3,
  Sparkles,
  Users,
  Settings,
  Crown,
} from "lucide-react";
import type { ComponentType } from "react";

type NavItem = {
  to: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
};

const nav: NavItem[] = [
  { to: "/", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/focus", label: "Focus", Icon: Timer },
  { to: "/blocker", label: "Blocker", Icon: ShieldHalf },
  { to: "/analytics", label: "Analytics", Icon: BarChart3 },
  { to: "/rewards", label: "Rewards", Icon: Sparkles },
  { to: "/social", label: "Social", Icon: Users },
  { to: "/settings", label: "Settings", Icon: Settings },
];

export function AppSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 w-[72px] z-50 hidden md:block">
      <div className="glass rounded-3xl flex flex-col items-center py-6 gap-2 shadow-glow-luxe">
        <Link
          to="/"
          className="size-10 rounded-2xl bg-[var(--gradient-primary)] grid place-items-center font-bold italic text-background shadow-[0_0_24px_oklch(0.78_0.15_200/0.45)] mb-4"
          aria-label="Aether home"
        >
          A
        </Link>

        <div className="flex flex-col gap-2">
          {nav.map(({ to, label, Icon }) => {
            const active = path === to;
            return (
              <Link
                key={to}
                to={to}
                aria-label={label}
                className={[
                  "size-11 rounded-2xl grid place-items-center transition-all relative group",
                  active
                    ? "bg-primary/15 text-primary border border-primary/40 shadow-glow-cyan"
                    : "text-foreground/40 hover:text-primary hover:bg-white/5 border border-transparent",
                ].join(" ")}
              >
                <Icon className="size-5" />
                <span className="absolute left-full ml-3 px-2 py-1 text-xs rounded-md bg-card border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        <Link
          to="/settings"
          className="mt-auto size-10 rounded-full bg-white/10 border border-white/20 grid place-items-center text-xs font-bold"
          aria-label="Profile"
        >
          AX
        </Link>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50 glass-strong rounded-3xl px-3 py-2 flex justify-around">
      {nav.slice(0, 5).map(({ to, label, Icon }) => {
        const active = path === to;
        return (
          <Link
            key={to}
            to={to}
            aria-label={label}
            className={[
              "flex flex-col items-center gap-1 px-3 py-2 rounded-2xl text-[10px] transition-colors",
              active ? "text-primary" : "text-foreground/50",
            ].join(" ")}
          >
            <Icon className="size-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function UpgradeBadge() {
  return (
    <Link
      to="/settings"
      className="hidden lg:flex fixed top-6 right-6 z-40 items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold hover:border-gold/40 transition-colors"
    >
      <Crown className="size-4 text-gold" />
      <span className="text-gold">Upgrade to Premium</span>
    </Link>
  );
}
