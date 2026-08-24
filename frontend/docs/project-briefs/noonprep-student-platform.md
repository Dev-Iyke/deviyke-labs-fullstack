# NoonPrep Student Exam Preparation Platform

## Positioning

NoonPrep is a student-focused exam-preparation platform built around guided learning, exam simulation, progress visibility, and competitive engagement.

This case-study pass covers the student-facing frontend and public product surface only. It intentionally does not attempt to represent the full backend or admin ecosystem yet.

## Product summary

- Product type: Frontend-heavy full-stack learning product
- Status: Private / in progress
- Surface covered here: Public site plus student application
- Role: Frontend engineering

## Current surface areas

- Public landing pages
- Authentication and onboarding
- Student dashboard
- Study Arena
- Practice sessions
- Exam sessions
- Quiz Arena
- Live challenges
- Analytics
- Resources
- Profile and settings

## Core problem

Students preparing for WAEC, JAMB, and school exams often need more than a bank of questions. They need structure, motivation, progress tracking, and clarity about what to improve next.

## Core solution

NoonPrep gives students a personalized learning workspace where they can set goals, configure practice and exam sessions, track readiness, review performance, access resources, and engage in live quiz challenges.

## Technical stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Redux Toolkit
- Axios
- React Hook Form
- Zod
- Laravel Echo
- Recharts

## Strong implementation points

### 1. Personalized learner dashboard

The dashboard turns backend learning data into readiness signals, study guidance, streaks, recommendations, and subject-level progress.

### 2. Structured practice and exam flows

The app supports both guided practice and timed exam simulation, with validated setup forms and runtime behaviors tailored to each mode.

### 3. Realtime live challenges

One of the strongest technical parts of the app is the live quiz challenge system, which combines REST-backed state with WebSocket events, reconnect handling, and ranking views.

### 4. Clean state separation

React Query handles API-backed product data while Redux focuses on authenticated user state and hydration.

### 5. Feature-first architecture

The codebase is organized around product domains such as auth, dashboard, study arena, quiz arena, analytics, resources, and profile rather than only technical layers.

## Engineering decisions worth highlighting

- React Query for server state and Redux for auth state
- Centralized Axios client for transport behavior
- Feature-first domain modules
- Server-driven realtime challenge phases
- Schema-validated forms for setup-heavy flows
- Reusable loading, empty, and error states across API-backed surfaces

## Challenges and tradeoffs

- Realtime reliability and reconnect handling are naturally complex
- Session restoration requires careful coordination with backend state
- Resource UI is scaffolded more strongly than its final data maturity
- This case study only covers the student surface for now, not the full product ecosystem

## Suggested screenshots

- Landing page hero
- Student dashboard overview
- Study Arena mode selection
- Practice session with feedback
- Exam session with timer
- Quiz Arena home
- Live challenge lobby or active round
- Analytics dashboard
- Profile or settings
- Mobile dashboard state

## Portfolio outcome framing

NoonPrep demonstrates strong frontend engineering depth in a learning product context: validated onboarding, dashboard design, session runtime handling, analytics, and realtime interaction. Even in active-build form, it already presents a compelling case study.

## Privacy note

Public screenshots should avoid real student names, emails, school codes, invite links, internal API URLs, tokens, and any non-demo academic data.

## Future refinement opportunities

- Add stronger screenshots for the core student flows
- Merge this student case study later with the admin and backend surfaces
- Deepen the engineering narrative around practice setup and session-state modeling once those flows stabilize further
