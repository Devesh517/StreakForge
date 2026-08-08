// src/components/DayCard.jsx
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, CircleDashed, XCircle } from "lucide-react";
import { formatWeekdayDate } from "../utils/dateHelpers";

const statusMeta = {
  completed: { label: "Completed", className: "text-proof", Icon: CheckCircle2 },
  today: { label: "Today", className: "text-flame", Icon: CircleDashed },
  missed: { label: "Missed", className: "text-miss", Icon: XCircle },
  upcoming: { label: "Upcoming", className: "text-muted", Icon: CircleDashed },
};

export default function DayCard({ day, ctaLabel = "Open today's task" }) {
  const meta = statusMeta[day.status] || statusMeta.upcoming;
  const { Icon } = meta;

  return (
    <Link
      to={`/day/${day.id}`}
      className="block rounded-xl border border-line bg-surface p-4 transition-colors hover:border-flame/40"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 text-xs font-mono ${meta.className}`}>
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
          {meta.label}
        </span>
        <span className="text-xs text-muted">{formatWeekdayDate(day.date)}</span>
      </div>
      <h3 className="font-display text-base font-semibold text-paper leading-snug">{day.title}</h3>
      <p className="mt-1 text-sm text-muted line-clamp-2">{day.brief}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-flame">
        {ctaLabel}
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </span>
    </Link>
  );
}