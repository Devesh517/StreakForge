// src/components/EmptyState.jsx
export default function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-line bg-surface/50 px-5 py-8 text-center">
      {Icon && (
        <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-surface2 text-muted">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
      )}
      <p className="font-display text-base font-semibold text-paper">{title}</p>
      <p className="max-w-xs text-sm text-muted">{description}</p>
      {action}
    </div>
  );
}