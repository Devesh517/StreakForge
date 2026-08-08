// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, Flame } from "lucide-react";
import StreakFlame from "./StreakFlame";

export default function Navbar({ currentStreak }) {
  const location = useLocation();
  const isDayPage = location.pathname.startsWith("/day/");

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          {isDayPage ? (
            <Link
              to="/dashboard"
              className="flex items-center gap-1 rounded-full p-1.5 -ml-1.5 text-muted hover:text-paper"
              aria-label="Back to dashboard"
            >
              <ChevronLeft className="h-5 w-5" />
            </Link>
          ) : (
            <Flame className="h-5 w-5 text-flame" strokeWidth={2.5} />
          )}
          <Link to="/dashboard" className="font-display text-lg font-semibold tracking-tight text-paper">
            StreakForge
          </Link>
        </div>
        {typeof currentStreak === "number" && <StreakFlame currentStreak={currentStreak} size="sm" />}
      </div>
    </header>
  );
}