// src/hooks/useStreak.js
import { useMemo } from "react";
import challengeDays from "../data/challengeDays.json";
import student from "../data/student.json";
import {
  getTodayDay,
  getCompletionPercent,
  getMostRecentMissedDay,
} from "../utils/streak";

export function useStreak() {
  return useMemo(() => {
    const days = challengeDays;
    const today = getTodayDay(days);
    const completionPercent = getCompletionPercent(days);
    const recentMiss = getMostRecentMissedDay(days);

    const isZeroStreak = !student.currentStreak || student.currentStreak <= 0;
    const isFirstDay = student.currentDay <= 1;
    const isEmptyProfile =
      student.totalDaysCompleted === 0 && (student.badges || []).length === 0;

    return {
      student,
      days,
      today,
      completionPercent,
      recentMiss,
      isZeroStreak,
      isFirstDay,
      isEmptyProfile,
    };
  }, []);
}