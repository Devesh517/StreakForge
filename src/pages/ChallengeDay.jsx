// src/pages/ChallengeDay.jsx
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, CircleDashed, XCircle, Clock, ListChecks } from "lucide-react";
import Navbar from "../components/Navbar";
import ProofSubmissionForm from "../components/ProofSubmissionForm";
import EmptyState from "../components/EmptyState";
import { formatShortDate } from "../utils/dateHelpers";
import { getDayById } from "../utils/streak";
import { useStreak } from "../hooks/useStreak";

const statusBanner = {
  completed: {
    className: "border-proof/30 bg-proof/10 text-proof",
    Icon: CheckCircle2,
    text: "You completed this day.",
  },
  today: {
    className: "border-flame/30 bg-flame/10 text-flame",
    Icon: CircleDashed,
    text: "This is today's task.",
  },
  missed: {
    className: "border-miss/30 bg-miss/10 text-miss",
    Icon: XCircle,
    text: "This day was missed — it's still part of your record, and that's okay.",
  },
  upcoming: {
    className: "border-line bg-surface2 text-muted",
    Icon: Clock,
    text: "This day hasn't started yet.",
  },
};

export default function ChallengeDay() {
  const { id } = useParams();
  const { student, days } = useStreak();
  const day = getDayById(days, id);

  if (!day) {
    return (
      <div className="min-h-screen bg-ink text-paper">
        <Navbar currentStreak={student.currentStreak} />
        <main className="mx-auto max-w-xl px-4 pt-8">
          <EmptyState
            icon={ListChecks}
            title={`Day ${id} doesn't exist`}
            description={`This track only runs for ${student.totalDays} days. Head back to your dashboard to find today's task.`}
            action={
              <Link
                to="/dashboard"
                className="mt-2 rounded-lg bg-flame px-4 py-2 text-sm font-semibold text-ink"
              >
                Back to dashboard
              </Link>
            }
          />
        </main>
      </div>
    );
  }

  const banner = statusBanner[day.status] || statusBanner.upcoming;
  const BannerIcon = banner.Icon;
  const isFuture = day.status === "upcoming";

  return (
    <div className="min-h-screen bg-ink text-paper pb-10">
      <Navbar currentStreak={student.currentStreak} />

      <main className="mx-auto max-w-xl px-4 pt-5 space-y-5">
        <div>
          <p className="font-mono text-xs text-muted">{formatShortDate(day.date)}</p>
          <h1 className="mt-1 font-display text-xl font-bold leading-tight text-paper">{day.title}</h1>
        </div>

        <div className={`flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm ${banner.className}`}>
          <BannerIcon className="h-4 w-4 flex-shrink-0" strokeWidth={2} />
          <span>{banner.text}</span>
        </div>

        <section>
          <h2 className="mb-2 font-display text-base font-semibold">What to build</h2>
          <p className="text-sm text-muted">{day.brief}</p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-base font-semibold">Today's checklist</h2>
          <ul className="space-y-2">
            {day.tasks.map((task, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 rounded-lg border border-line bg-surface px-3.5 py-3 text-sm text-paper"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-surface2 font-mono text-[11px] text-muted">
                  {i + 1}
                </span>
                {task}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-2 font-display text-base font-semibold">Submit proof of work</h2>
          <ProofSubmissionForm initialProof={day.proof} disabled={isFuture} />
        </section>
      </main>
    </div>
  );
}