// src/components/ProgressBar.jsx
export default function ProgressBar({ current, total, percent, label }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm text-muted">{label}</span>
        <span className="font-mono text-sm text-paper">
          {current}/{total} · {percent}%
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface2 border border-line">
        <div
          className="h-full rounded-full bg-gradient-to-r from-flame to-flameSoft transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}