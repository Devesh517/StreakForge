# StreakForge

> **Turn Daily Effort into Lasting Skills**

StreakForge is a modern, mobile-first redesign concept for the **ABTalks
60-Day Coding Challenge**.

The project is built for the **ABTalks Vibe Code Hackathon 2026** and
focuses on making the daily coding-challenge experience clearer, more
motivating, and easier to use on a mobile device.

## Overview

ABTalks helps college students build consistency by completing a coding
challenge every day and maintaining public proof of work through:

-   GitHub commits
-   LinkedIn posts
-   A 60-day learning streak

StreakForge redesigns the student-facing experience around three core
screens:

-   Landing page
-   Student dashboard
-   Individual challenge day

The interface is designed mobile-first, with the primary target viewport
being **390px**.

## Core Routes

  Route          Purpose
  -------------- ------------------------------------------
  `/`            Landing page for new students
  `/dashboard`   Student progress and daily activity
  `/day/12`      Complete experience for Challenge Day 12

## Key Features

### Landing Page

-   Clear introduction to the 60-day challenge
-   Motivation and value proposition
-   Explanation of how the challenge works
-   Student-focused call to action
-   Mobile-first layout

### Student Dashboard

-   Current coding streak
-   Challenge progress
-   Today's task
-   Overall completion
-   Student standing/rank
-   Achievements
-   Recent activity

### Challenge Day

-   Day-specific task information
-   Task requirements
-   Helpful resources
-   GitHub proof-of-work submission
-   LinkedIn proof-of-work submission
-   Submission status feedback

### Edge Cases

The redesign also considers real-world student situations such as:

-   Starting Day 1 with no existing streak
-   Missing a challenge day
-   Having an incomplete/empty profile

### Thoughtful Student Experience

StreakForge is designed around the idea that a coding challenge should
not only track completion, but also encourage students to return and
continue building their learning habit.

## Technology Stack

-   **React**
-   **Vite**
-   **JavaScript**
-   **Tailwind CSS**
-   **React Router**
-   **JSON mock data**

## Data

This project does not require a production backend, authentication
system, or database.

Mock data is stored locally in JSON files and consumed by the React
application to create a realistic student experience.

## Project Structure

``` text
StreakForge/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

-   Node.js
-   npm

### Installation

Clone the repository:

``` bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Move into the project:

``` bash
cd StreakForge
```

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

The application will be available at the local URL shown by Vite.

## Build for Production

``` bash
npm run build
```

To preview the production build locally:

``` bash
npm run preview
```

## Live Demo

**Live Demo:** `<YOUR_DEPLOYED_URL>`

## GitHub Repository

**Repository:** `<YOUR_GITHUB_REPOSITORY_URL>`

## Hackathon Submission

This project is submitted for the **ABTalks Vibe Code Hackathon 2026**.

The submission includes:

1.  Public GitHub repository
2.  Live deployed application
3.  `PROMPTS.md` containing the AI usage log

### Route Map

``` text
/
/dashboard
/day/12
```

## AI Usage

AI tools were used during the development process for planning,
implementation assistance, debugging, UI ideas, and documentation.

A detailed record of prompts and AI-assisted development is maintained
in:

``` text
PROMPTS.md
```

## License

This project is available under the MIT License.
