// src/utils/streak.js
export function getDayById(days, id) {
  const numericId = Number(id);
  return days.find((day) => day.id === numericId) || null;
}

export function getTodayDay(days) {
  return (
    days.find((day) => day.status === "today") ||
    days.find((day) => day.status === "upcoming") ||
    days[days.length - 1] ||
    null
  );
}

export function getCompletionPercent(days) {
  if (!days.length) return 0;
  const completed = days.filter((d) => d.status === "completed").length;
  return Math.round((completed / days.length) * 100);
}

export function getMostRecentMissedDay(days) {
  const missed = days.filter((d) => d.status === "missed");
  if (!missed.length) return null;
  return missed.reduce((latest, day) => (day.id > latest.id ? day : latest));
}

export function getStreakTone(currentStreak) {
  if (!currentStreak || currentStreak <= 0) {
    return { label: "No streak yet", tone: "cold" };
  }
  if (currentStreak >= 10) return { label: `${currentStreak}-day streak`, tone: "hot" };
  return { label: `${currentStreak}-day streak`, tone: "warm" };
}