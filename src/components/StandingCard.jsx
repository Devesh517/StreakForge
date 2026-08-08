// src/components/StandingCard.jsx
import { Trophy } from "lucide-react";

export default function StandingCard({ rank, totalParticipants }) {
  const topPercent = Math.max(1, Math.round((rank / totalParticipants) * 100));

  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-flame/15 text-flame">
        <Trophy className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-lg font-semibold text-paper leading-tight">
          #{rank}
          <span className="text-sm font-normal text-muted"> of {totalParticipants.toLocaleString("en-IN")}</span>
        </p>
        <p className="text-xs text-muted">Top {topPercent}% on the leaderboard</p>
      </div>
    </div>
  );
}