# StreakForge --- AI Usage Log

## Hackathon Project

**Project:** StreakForge\
**Hackathon Problem Statement:** Redesign ABTalks\
**Stack:** React + Vite + Tailwind CSS\
**Architecture:** Frontend-only with mock JSON data\
**Required Routes:** `/`, `/dashboard`, `/day/12`

This document records the AI-assisted development used while building
and debugging StreakForge.

> **Attribution note:** The supplied conversation PDFs explicitly
> identify the first two prompt sessions as **Claude** sessions. The
> third supplied PDF (`vite_import_error_qa.pdf`) does not identify the
> AI model used, so it is intentionally recorded as **AI Assistant ---
> model not specified** rather than falsely attributing it to Claude or
> GPT.

------------------------------------------------------------------------

# 1. Claude --- Project Build Prompt

**Source:** `streakforge-conversation-prompts.pdf`

### User Prompt

I have taken part in a hackathon and am making the project described in
the problem statement. I have already set up React and Tailwind. I am
making it frontend-only, without a backend, and I am using mock data in
JSON files to demonstrate how the project will work.

I will provide the problem statement and my existing project structure.
Create a prompt that I can paste into an AI tool so that I receive the
required files individually and can paste them into my existing project.

I only want the individual files, not a complete project folder or ZIP.

The project structure is:

``` text
StreakForge/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
```

The prompt should ensure:

-   React + Vite + Tailwind
-   No backend
-   No real authentication
-   No production database
-   Mock JSON data in `src/data/`
-   Mobile-first design for 390px
-   React Router
-   Required routes:
    -   `/`
    -   `/dashboard`
    -   `/day/12`
-   Handling of:
    -   first day / zero streak
    -   missed day
    -   empty profile
-   At least one thoughtful UX improvement
-   Full, paste-ready files
-   No truncated code
-   Exact file paths
-   Required npm install commands and manual setup steps

### Result / Purpose

Claude produced a reusable frontend-only hackathon build prompt that
enforced the project constraints, mobile-first design, required routes,
mock-data approach, edge cases, and file-by-file output format.

------------------------------------------------------------------------

# 2. Claude --- Debugging Prompt Template

**Source:** `streakforge-conversation-prompts.pdf`

### User Prompt

The project is giving some errors. Create a prompt that I can use with
an uploaded ZIP of my project.

The prompt should instruct the AI to:

-   Extract and inspect the project ZIP.
-   Find the actual problems and bugs.
-   Trace the root cause.
-   Check imports, routing, Tailwind configuration, and JSON data usage.
-   Fix only what is necessary.
-   Preserve the existing project structure and coding style.
-   Find the same bug pattern elsewhere if it exists.
-   Return only the files that need changes.
-   Provide complete corrected files rather than partial snippets.
-   Explain the root cause.
-   Explain what was changed.
-   Mention any required npm/configuration changes.

### Result / Purpose

Claude created a reusable debugging prompt requiring root-cause
analysis, minimal fixes, complete paste-ready files, and explicit
explanations of changes.

------------------------------------------------------------------------

# 3. Claude --- StreakForge Debugging Session

**Source:** `StreakForge_Debug_Session.pdf`

## 3.1 Debug Session --- Initial ZIP Inspection

### User Prompt

Uploaded the current `StreakForge1.zip` and used the previously created
Debug & Fix Errors prompt.

### Claude's Response

Claude identified that the uploaded debugging template still contained
placeholder sections for:

-   Exact error message
-   What was being done when the error occurred
-   Expected vs actual behavior

Claude requested those details before attempting to guess at the bug.

### Purpose

This ensured the debugging process was based on the actual error instead
of an assumed problem.

------------------------------------------------------------------------

## 3.2 Debug Session --- `challengeDays.json` Import Error

### User Prompt

Uploaded a screenshot of the Vite error:

``` text
[plugin:vite:import-analysis]
Failed to resolve import "../data/challengeDays.json"
from "src/hooks/useStreak.js".
Does the file exist?
```

### Claude's Diagnosis

Claude identified that:

-   `useStreak.js` imported `../data/challengeDays.json`.
-   The actual JSON file was located in the wrong place.
-   The filename/casing did not match the import.
-   Case-sensitive environments such as Linux/CI can fail even when
    Windows appears to work.
-   The fix was to move the data file into `src/data/` and use the exact
    filename expected by the import.

### Fix Applied

The data file was moved/renamed so that the import path and filename
matched.

### Purpose

This fixed the Vite import-resolution problem and also prevented a
deployment-only failure caused by case sensitivity.

------------------------------------------------------------------------

## 3.3 Claude --- Tailwind CSS Not Applying

### User Prompt

Uploaded a screenshot showing the StreakForge page rendered as unstyled
browser-default content and asked why the CSS was not working.

### Claude's Diagnosis

Claude identified that:

-   The project was using Tailwind CSS v4.
-   `@tailwindcss/vite` was installed.
-   `vite.config.js` was only registering the React plugin.
-   The Tailwind Vite plugin had not been added.
-   Therefore `@import "tailwindcss";` in `index.css` was not being
    processed correctly.

### Fix Applied

`vite.config.js` was updated to register Tailwind:

``` js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

No additional npm installation was required because the Tailwind Vite
plugin was already installed.

### Purpose

This restored Tailwind processing and allowed the project's utility
classes to produce the intended UI.

------------------------------------------------------------------------

# 4. AI Assistant --- Model Not Specified

**Source:** `vite_import_error_qa.pdf`

> The supplied PDF does not identify whether this session was Claude,
> GPT, or another AI model. It is therefore recorded without inventing
> an attribution.

## 4.1 `useStreak` Import Error

### User Prompt

Reported a Vite import-analysis error from:

``` text
src/pages/Dashboard.jsx
```

The error referenced:

``` js
import { useStreak } from "../hooks/useStreak";
```

### AI Diagnosis

The response explained that Vite could not resolve
`src/hooks/useStreak.js` and suggested checking:

1.  Whether `useStreak.js` existed inside `src/hooks/`.
2.  Whether the filename casing was exactly `useStreak.js`.
3.  Whether `challengeDays.json` was correctly located in `src/data/`.
4.  Whether the JSON filename casing matched the import.
5.  Restarting the Vite development server after adding/moving files.

### Purpose

This debugging session helped identify the relationship between the
missing hook/import and the challenge-day JSON file location.

------------------------------------------------------------------------

# 5. Development Decisions Captured by the AI Workflow

Throughout the AI-assisted development process, the following project
decisions were established:

## Architecture

-   Frontend-only React application.
-   No backend.
-   No production database.
-   Mock JSON data used to simulate realistic platform data.

## Required Screens

``` text
/
/dashboard
/day/12
```

## Mobile-first Requirement

The primary design target is a **390px mobile viewport**, with desktop
as a secondary layout.

## Product Concept

StreakForge is a redesign of the student-facing ABTalks 60-Day Coding
Challenge experience.

The core student journey is:

``` text
Discover the challenge
        ↓
Track progress
        ↓
See today's task
        ↓
Complete the coding task
        ↓
Submit GitHub proof
        ↓
Submit LinkedIn proof
        ↓
Continue the streak
```

## Thoughtful UX Direction

The redesign includes student-focused improvements such as:

-   Streak/recovery messaging
-   Progress visibility
-   Achievement feedback
-   Clear daily task presentation
-   Proof-of-work submission feedback
-   Edge-case handling for missed days and zero streaks

------------------------------------------------------------------------

# 6. Final AI Usage Summary

AI assistance was used for:

-   Project architecture and planning
-   Creating reusable development prompts
-   UI/UX feature planning
-   React/Tailwind implementation assistance
-   Mock-data structure
-   Debugging import errors
-   Debugging Tailwind configuration
-   Deployment-related debugging
-   Root-cause analysis
-   Code correction and verification

The AI was used as a development assistant; the resulting project was
reviewed, integrated, tested, and deployed as part of the hackathon
build process.

------------------------------------------------------------------------

# 7. Attribution Summary

  -----------------------------------------------------------------------
  Session                 AI Attribution          Purpose
  ----------------------- ----------------------- -----------------------
  Frontend build prompt   **Claude**              Created reusable
                                                  project-generation
                                                  prompt

  Debug prompt template   **Claude**              Created reusable ZIP
                                                  debugging prompt

  Debugging session       **Claude**              Diagnosed JSON import
                                                  and Tailwind issues

  Vite import-error Q&A   **Model not specified** Diagnosed
                                                  `useStreak`/JSON import
                                                  issue
  -----------------------------------------------------------------------

> No AI model attribution has been invented where the supplied
> conversation record did not explicitly identify the model.
