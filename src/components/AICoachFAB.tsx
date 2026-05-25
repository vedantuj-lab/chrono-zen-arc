import { Sparkles } from "lucide-react";

export function AICoachFAB() {
  return (
    <button
      aria-label="Open AI Coach"
      className="fixed bottom-20 md:bottom-8 right-6 z-50 size-14 md:size-16 rounded-full bg-[var(--gradient-primary)] grid place-items-center shadow-glow-cyan hover:scale-110 active:scale-95 transition-transform group"
    >
      <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20"></span>
      <Sparkles className="size-6 text-background group-hover:rotate-12 transition-transform" />
    </button>
  );
}
