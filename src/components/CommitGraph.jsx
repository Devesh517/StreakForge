// src/components/CommitGraph.jsx
const cellStyles = {
  completed: "bg-flame border-flame",
  missed: "border border-dashed border-miss/70 bg-transparent",
  today: "bg-proof border-proof motion-safe:animate-pulse",
  upcoming: "bg-surface2 border border-line",
};

export default function CommitGraph({ days, activeId = null, compact = false }) {
  return (
    <div>
      <div
        className={`grid grid-cols-10 ${compact ? "gap-1" : "gap-1.5"}`}
        role="img"
        aria-label="60-day challenge progress grid"
      >
        {days.map((day) => {
          const isActive = activeId != null && Number(activeId) === day.id;
          return (
            <div
              key={day.id}
              title={`Day ${day.id}: ${day.status}`}
              className={`aspect-square rounded-[3px] border ${cellStyles[day.status] || cellStyles.upcoming} ${
                isActive ? "ring-2 ring-paper ring-offset-1 ring-offset-ink" : ""
              }`}
            />
          );
        })}
      </div>
      {!compact && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted font-mono">
          <LegendItem swatchClass="bg-flame" label="done" />
          <LegendItem swatchClass="border border-dashed border-miss/70" label="missed" />
          <LegendItem swatchClass="bg-proof" label="today" />
          <LegendItem swatchClass="bg-surface2 border border-line" label="upcoming" />
        </div>
      )}
    </div>
  );
}

function LegendItem({ swatchClass, label }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-2.5 w-2.5 rounded-[2px] ${swatchClass}`} />
      {label}
    </span>
  );
}