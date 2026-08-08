// src/pages/Dashboard.jsx
import { Sparkles, ListChecks } from "lucide-react";
import Navbar from "../components/Navbar";
import StreakFlame from "../components/StreakFlame";
import ProgressBar from "../components/ProgressBar";
import CommitGraph from "../components/CommitGraph";
import DayCard from "../components/DayCard";
import BadgeChip from "../components/BadgeChip";
import StandingCard from "../components/StandingCard";
import EmptyState from "../components/EmptyState";
import RecoveryNudge from "../components/RecoveryNudge";
import { useStreak } from "../hooks/useStreak";

export default function Dashboard() {
  const {
    student,
    days,
    today,
    completionPercent,
    recentMiss,
    isZeroStreak,
    isFirstDay,
    isEmptyProfile,
  } = useStreak();

  return (
    <div className="min-h-screen bg-ink text-paper pb-10">
      <Navbar currentStreak={student.currentStreak} />

      <main className="mx-auto max-w-xl px-4 pt-5 space-y-6">
        {/* Greeting */}
        <div>
          <p className="text-sm text-muted">Welcome back,</p>
          <h1 className="font-display text-2xl font-bold text-paper">{student.name.split(" ")[0]}</h1>
        </div>

        {/* Streak hero */}
        <section className="rounded-xl border border-line bg-surface p-4">
          {isZeroStreak || isFirstDay ? (
            <EmptyState
              icon={Sparkles}
              title="Your streak starts with today"
              description="No pressure to have a streak yet — you just need to finish today's task and submit proof."
              action={
                today && (
                  <span className="mt-1 rounded-full bg-flame/15 px-3 py-1 text-xs font-mono text-flame">
                    Day {today.id} of {student.totalDays}
                  </span>
                )
              }
            />
          ) : (
            <div className="flex items-center justify-between">
              <StreakFlame currentStreak={student.currentStreak} size="lg" />
              <div className="text-right">
                <p className="font-mono text-xs text-muted">longest</p>
                <p className="font-mono text-sm text-paper">{student.longestStreak} days</p>
              </div>
            </div>
          )}
        </section>

        {/* Recovery nudge — thoughtful UX addition, only when relevant */}
        {!isZeroStreak && !isFirstDay && (
          <RecoveryNudge missedDay={recentMiss} currentStreak={student.currentStreak} />
        )}

        {/* Today's task */}
        <section>
          <h2 className="mb-2 font-display text-base font-semibold">Today's task</h2>
          {today ? (
            <DayCard day={today} ctaLabel={today.status === "completed" ? "Review today" : "Open today's task"} />
          ) : (
            <EmptyState
              icon={ListChecks}
              title="Nothing scheduled"
              description="Your track doesn't have a task queued right now. Check back tomorrow."
            />
          )}
        </section>

        {/* Progress */}
        <section className="rounded-xl border border-line bg-surface p-4">
          <ProgressBar
            current={student.totalDaysCompleted}
            total={student.totalDays}
            percent={completionPercent}
            label="Challenge progress"
          />
          <div className="mt-4">
            <CommitGraph days={days} activeId={today?.id} compact />
          </div>
        </section>

        {/* Standing */}
        <section>
          <h2 className="mb-2 font-display text-base font-semibold">Your standing</h2>
          <StandingCard rank={student.rank} totalParticipants={student.totalParticipants} />
        </section>

        {/* Achievements / empty profile edge case */}
        <section>
          <h2 className="mb-2 font-display text-base font-semibold">Achievements</h2>
          {isEmptyProfile ? (
            <EmptyState
              icon={Sparkles}
              title="No badges yet"
              description="Submit your first day's proof of work to earn your first badge."
            />
          ) : (
            <div className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {student.badges.map((badge) => (
                <BadgeChip key={badge.id} label={badge.label} icon={badge.icon} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}