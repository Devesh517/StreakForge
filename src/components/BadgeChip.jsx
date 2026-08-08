// src/components/BadgeChip.jsx
import { Flame, GitCommit, Link2, RotateCcw, Award } from "lucide-react";

const iconMap = {
  flame: Flame,
  "git-commit": GitCommit,
  linkedin: Link2,
  "rotate-ccw": RotateCcw,
};

export default function BadgeChip({ label, icon }) {
  const Icon = iconMap[icon] || Award;
  return (
    <div className="flex flex-shrink-0 flex-col items-center gap-1.5 rounded-xl border border-line bg-surface px-3 py-2.5 w-[92px]">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-flame/15 text-flame">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </div>
      <span className="text-center text-[11px] leading-tight text-muted">{label}</span>
    </div>
  );
}