// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import { Flame, GitBranch, Link2, Quote } from "lucide-react";
import CommitGraph from "../components/CommitGraph";
import platform from "../data/platform.json";
import testimonials from "../data/testimonials.json";

export default function Landing() {
  const demoDays = platform.sampleCommitGraph.map((status, i) => ({ id: i + 1, status }));

  return (
    <div className="min-h-screen bg-ink text-paper">
      {/* Top bar */}
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-4">
        <span className="flex items-center gap-1.5 font-display text-lg font-semibold">
          <Flame className="h-5 w-5 text-flame" strokeWidth={2.5} />
          StreakForge
        </span>
        <Link
          to="/dashboard"
          className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-paper hover:border-flame/40"
        >
          Log in
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-xl px-4 pt-4 pb-8">
        <p className="mb-3 inline-block rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
          A 60-day public build challenge
        </p>
        <h1 className="font-display text-[2rem] leading-[1.1] font-bold tracking-tight">
          Build every day.
          <br />
          <span className="text-flame">Let your streak</span> do the talking.
        </h1>
        <p className="mt-4 text-base text-muted">
          Pick a track, ship one small thing a day, and prove it with a GitHub commit and a LinkedIn post. In 60
          days you don't just learn to code — you have 60 days of public evidence that you can.
        </p>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <Link
            to="/dashboard"
            className="rounded-lg bg-flame py-3 text-center text-sm font-semibold text-ink active:opacity-80"
          >
            Start your streak
          </Link>
          <Link
            to="/day/12"
            className="rounded-lg border border-line py-3 text-center text-sm font-medium text-paper hover:border-flame/40"
          >
            See a sample day
          </Link>
        </div>

        {/* Signature visual: commit graph, illustrative */}
        <div className="mt-8 rounded-xl border border-line bg-surface p-4">
          <p className="mb-3 text-xs font-mono text-muted">
            what 60 days of showing up actually looks like
          </p>
          <CommitGraph days={demoDays} />
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-4 px-4 py-6">
          <Stat value={platform.stats.activeStudents.toLocaleString("en-IN")} label="students building right now" />
          <Stat value={platform.stats.collegesRepresented} label="colleges represented" />
          <Stat value={platform.stats.commitsLogged.toLocaleString("en-IN")} label="commits logged" />
          <Stat value={`${platform.stats.avgStreak} days`} label="average active streak" />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-xl px-4 py-8">
        <h2 className="font-display text-xl font-semibold">How it works</h2>
        <div className="mt-4 space-y-3">
          {platform.howItWorks.map((step, i) => (
            <div key={step.id} className="flex gap-3 rounded-xl border border-line bg-surface p-4">
              <span className="font-mono text-sm text-flame">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-display text-sm font-semibold text-paper">{step.title}</p>
                <p className="mt-0.5 text-sm text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-4 rounded-xl border border-dashed border-line px-4 py-3 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <GitBranch className="h-3.5 w-3.5" /> commit
          </span>
          <span className="flex items-center gap-1.5">
            <Link2 className="h-3.5 w-3.5" /> post
          </span>
          <span>= one day logged</span>
        </div>
      </section>

      {/* Tracks */}
      <section className="mx-auto max-w-xl px-4 py-8">
        <h2 className="font-display text-xl font-semibold">Pick a track</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {platform.tracks.map((track) => (
            <div key={track.id} className="rounded-xl border border-line bg-surface p-3.5">
              <p className="font-display text-sm font-semibold leading-snug text-paper">{track.name}</p>
              <p className="mt-1 text-xs text-muted">{track.days} days</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-xl px-4 py-8">
        <h2 className="font-display text-xl font-semibold">From students who kept the streak alive</h2>
        <div className="mt-4 space-y-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-xl border border-line bg-surface p-4">
              <Quote className="h-4 w-4 text-flame" strokeWidth={2} />
              <p className="mt-2 text-sm text-paper">{item.quote}</p>
              <p className="mt-3 text-xs text-muted">
                {item.name} · {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-xl px-4 pb-12">
        <div className="rounded-xl border border-flame/30 bg-flame/10 p-5 text-center">
          <p className="font-display text-lg font-semibold text-paper">Day 1 takes ten minutes.</p>
          <p className="mt-1 text-sm text-muted">Day 60 is the part recruiters notice.</p>
          <Link
            to="/dashboard"
            className="mt-4 inline-block w-full rounded-lg bg-flame py-3 text-sm font-semibold text-ink active:opacity-80"
          >
            Start your streak
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-mono text-2xl font-semibold text-paper">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}