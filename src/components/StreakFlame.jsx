// src/components/StreakFlame.jsx
import { Flame, Snowflake } from "lucide-react";
import { getStreakTone } from "../utils/streak";

const toneStyles = {
  hot: "bg-flame/15 text-flame border-flame/40",
  warm: "bg-flame/10 text-flame border-flame/25",
  cold: "bg-surface2 text-muted border-line",
};

export default function StreakFlame({ currentStreak, size = "sm" }) {
  const { label, tone } = getStreakTone(currentStreak);
  const isLarge = size === "lg";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border ${toneStyles[tone]} ${
        isLarge ? "px-4 py-2" : "px-3 py-1.5"
      }`}
    >
      {tone === "cold" ? (
        <Snowflake className={isLarge ? "h-5 w-5" : "h-4 w-4"} strokeWidth={2} />
      ) : (
        <Flame className={isLarge ? "h-5 w-5" : "h-4 w-4"} strokeWidth={2} />
      )}
      <span className={`font-mono font-medium ${isLarge ? "text-base" : "text-sm"}`}>
        {label}
      </span>
    </div>
  );
}