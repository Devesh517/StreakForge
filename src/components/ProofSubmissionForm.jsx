// src/components/ProofSubmissionForm.jsx
import { useState } from "react";
import { GitBranch, Link2, CheckCircle2, Pencil } from "lucide-react";

const GITHUB_PATTERN = /^https:\/\/(www\.)?github\.com\/.+/i;
const LINKEDIN_PATTERN = /^https:\/\/(www\.)?linkedin\.com\/.+/i;

export default function ProofSubmissionForm({ initialProof, disabled = false }) {
  const alreadySubmitted = Boolean(initialProof?.github && initialProof?.linkedin);

  const [github, setGithub] = useState(initialProof?.github || "");
  const [linkedin, setLinkedin] = useState(initialProof?.linkedin || "");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(alreadySubmitted);
  const [editing, setEditing] = useState(false);

  function validate() {
    const next = {};
    if (!github.trim()) next.github = "Add your GitHub commit or repo link.";
    else if (!GITHUB_PATTERN.test(github.trim())) next.github = "That doesn't look like a github.com link.";

    if (!linkedin.trim()) next.linkedin = "Add your LinkedIn post link.";
    else if (!LINKEDIN_PATTERN.test(linkedin.trim())) next.linkedin = "That doesn't look like a linkedin.com link.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    // No backend in this build — we simply mark today's proof as logged.
    setSubmitted(true);
    setEditing(false);
  }

  if (submitted && !editing) {
    return (
      <div className="rounded-xl border border-proof/30 bg-proof/10 p-4">
        <div className="mb-3 flex items-center gap-2 text-proof">
          <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
          <span className="font-display text-sm font-semibold">Proof submitted for today</span>
        </div>
        <ProofLinkRow icon={GitBranch} label="GitHub" value={github} />
        <ProofLinkRow icon={Link2} label="LinkedIn" value={linkedin} />
        {!disabled && (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-paper hover:text-flame"
          >
            <Pencil className="h-3.5 w-3.5" strokeWidth={2} />
            Edit submission
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-line bg-surface p-4" noValidate>
      <Field
        id="github-url"
        icon={GitBranch}
        label="GitHub commit or repo link"
        placeholder="https://github.com/your-handle/your-repo"
        value={github}
        onChange={setGithub}
        error={errors.github}
        disabled={disabled}
      />
      <Field
        id="linkedin-url"
        icon={Link2}
        label="LinkedIn post link"
        placeholder="https://linkedin.com/posts/your-handle_..."
        value={linkedin}
        onChange={setLinkedin}
        error={errors.linkedin}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={disabled}
        className="w-full rounded-lg bg-flame py-3 text-sm font-semibold text-ink transition-opacity disabled:opacity-40 disabled:cursor-not-allowed active:opacity-80"
      >
        {disabled ? "Not available for this day" : "Submit proof of work"}
      </button>
      {disabled && (
        <p className="text-center text-xs text-muted">
          This day is in the future — come back on its date to submit.
        </p>
      )}
    </form>
  );
}

function Field({ id, icon: Icon, label, placeholder, value, onChange, error, disabled }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-paper">
        <Icon className="h-4 w-4 text-muted" strokeWidth={2} />
        {label}
      </label>
      <input
        id={id}
        type="url"
        inputMode="url"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-ink px-3 py-2.5 text-sm text-paper placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-flame/50 disabled:opacity-50 ${
          error ? "border-miss" : "border-line"
        }`}
      />
      {error && <p className="mt-1 text-xs text-miss">{error}</p>}
    </div>
  );
}

function ProofLinkRow({ icon: Icon, label, value }) {
  return (
    <a
      href={value}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 truncate py-1 text-sm text-paper hover:text-flame"
    >
      <Icon
        className="h-4 w-4 flex-shrink-0 text-muted"
        strokeWidth={2}
      />
      <span className="flex-shrink-0 text-muted">{label}:</span>
      <span className="truncate">{value}</span>
    </a>
  );
}