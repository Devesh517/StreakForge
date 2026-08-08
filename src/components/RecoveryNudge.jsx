// src/components/RecoveryNudge.jsx
import { Link } from "react-router-dom";
import { RotateCcw, ArrowRight } from "lucide-react";
import { formatWeekdayDate } from "../utils/dateHelpers";

export default function RecoveryNudge({ missedDay, currentStreak }) {
  if (!missedDay) return null;

  return (
    <div className="rounded-xl border border-flame/25 bg-gradient-to-br from-flame/10 to-transparent p-4">
      <div className="mb-1.5 flex items-center gap-1.5 text-flame">
        <RotateCcw className="h-4 w-4" strokeWidth={2} />
        <span className="text-xs font-mono font-medium uppercase tracking-wide">Comeback logged</span>
      </div>
      <p className="text-sm text-paper">
        You missed <span className="font-medium">{formatWeekdayDate(missedDay.date)}</span>, and you kept going
        anyway — that's a {currentStreak}-day streak since then. One missed day doesn't erase 60.
      </p>
      <Link
        to={`/day/${missedDay.id}`}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-flame"
      >
        Look back at that day
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
      </Link>
    </div>
  );
}