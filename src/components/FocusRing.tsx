type Props = {
  size?: number;
  stroke?: number;
  value: number; // 0-100
  label?: string;
  sublabel?: string;
  color?: string;
};

export function FocusRing({
  size = 240,
  stroke = 14,
  value,
  label,
  sublabel,
  color = "var(--color-primary)",
}: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;

  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{ background: color, opacity: 0.15 }}
        aria-hidden
      />
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="oklch(1 0 0 / 0.06)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${dash} ${c}`}
          style={{ filter: `drop-shadow(0 0 12px ${color})`, transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      <div className="absolute text-center">
        {label && <div className="text-4xl md:text-5xl font-bold tracking-tight">{label}</div>}
        {sublabel && (
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground/40">
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
