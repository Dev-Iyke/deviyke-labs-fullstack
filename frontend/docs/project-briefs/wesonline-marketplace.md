# WESOnline Marketplace Frontend

## Portfolio Case Study Report

### Basic Info

- Project name: WESOnline Marketplace Frontend
- Product/surface analyzed: Multi-surface learning marketplace web app
- Suggested portfolio title: Multi-Role Learning Marketplace for Mentorship, Courses, Assessments, and Admin Operations
- Suggested slug: `wesonline-marketplace`
- Project type: Frontend-heavy full-stack / backend-integrated frontend
- Status: Private, production-adjacent, or in progress
- Role: Frontend Engineer / Product-Focused Frontend Developer
- Team context: Not inferable from this repo
- Timeline: Not safely inferable from this repo
- Live URL: Not confirmed from this repo
- GitHub visibility: Likely private

## Product Surface / Repo Context

This repository represents a large React frontend for WESOnline Marketplace. It includes public marketing pages and multiple authenticated product surfaces for students, mentors, admins, assessment users, tenants, and institutions.

### Surface Represented By This Repo

- Public website and product marketing pages
- Student learning dashboard
- Mentor dashboard
- Admin operations dashboard
- Assessment/job simulation surface
- Authentication and onboarding flows
- Tenant and institution pages

### User Roles Supported

- Public visitors
- Students/fellows
- Mentors
- Career counselors
- Admin users
- Tenants/institutions

### Larger Product Ecosystem

This repo appears to be part of a larger product ecosystem. It integrates with multiple backend services for authentication, users, courses, mentorship, projects, chat, assessments, rewards, institutions, tenants, and admin operations.

Related repo likely needed: yes.

The related surface that should be analyzed next is the backend/API service, plus any dedicated chat, assessment, or production admin API repositories. Backend and database internals are not present in this frontend repo, so they should not be invented in a public case study.

## One-Line Summary

Built a multi-role learning marketplace frontend with dashboards for students, mentors, and admins, supporting courses, assessments, mentorship, projects, chat, rewards, and tenant-based experiences.

## Short Portfolio Description

WESOnline Marketplace is a role-aware learning platform frontend for managing digital learning, mentorship, assessments, job simulations, projects, and operational workflows. The codebase demonstrates complex frontend architecture across public marketing pages, authenticated dashboards, real-time messaging, course management, and admin analytics.

## Problem / Product Context

The product appears designed to help learners access structured upskilling programs while giving mentors and administrators tools to manage cohorts, learning content, mentorship sessions, projects, assessments, rewards, and reporting. It solves both learner experience problems and operational platform management problems.

## My Contribution

Safe contribution areas to describe publicly:

- Built role-based dashboard flows for student, mentor, and admin users.
- Implemented course discovery, course details, learning paths, and media/resource rendering.
- Developed admin management screens for users, cohorts, courses, projects, rewards, institutions, integrations, and analytics.
- Integrated authenticated API flows with React Query, Axios interceptors, cache invalidation, pagination, and loading states.
- Built form-heavy workflows using Mantine Form and Zod validation.
- Added real-time chat and notification behavior through Socket.IO and service worker support.
- Implemented tenant-aware branding/bootstrap for multi-tenant experiences.

## Frontend Engineering Highlights

### UI Architecture

The app is organized around feature surfaces, including public pages, authentication, personalization, student dashboard, mentor dashboard, admin dashboard, and assessment flows. This makes the codebase easier to reason about despite the product having many user roles.

### Routing

The app uses React Router with protected route wrappers, nested route modules, lazy-loaded dashboard surfaces, route-level loading states, and error boundaries.

Major route groups include:

- `/auth`
- `/personalize`
- `/student`
- `/mentor`
- `/admin`
- `/esa`
- Public feature, pricing, blog, tenant, course, and institution routes

### State And Data Flow

- React Query manages server state, caching, loading states, mutations, stale times, pagination, filtering, and invalidation.
- Zustand manages local/session state such as auth tokens, socket state, onboarding progress, drafts, notifications, tasks, projects, tenant config, and user state.
- Axios instances isolate service-specific API behavior.

### Forms And Validation

The app uses Mantine Form and Zod for validation-heavy workflows, including:

- Authentication and onboarding
- Student and mentor profiles
- Project and task creation
- Course setup
- Course chapter/content management
- Assessment setup
- Question banks
- Bulk upload forms
- Settings and 2FA-related flows

### API Integration

The frontend integrates with several API surfaces:

- Main product API
- Microservice API
- Chat API
- Assessment API
- Tenant/institution APIs

API clients include token injection, global unauthorized handling, notifications, and service-specific request behavior.

### Responsiveness And Design System

The UI uses Mantine components, custom theming, CSS modules, global styles, icons, reusable layout components, cards, data tables, skeleton loaders, modals, drawers, and responsive breakpoints.

### Accessibility

Mantine primitives provide a useful baseline for accessibility. Some custom components include accessible labels, such as table row selection controls. A dedicated accessibility pass would still be valuable before public launch or portfolio demo recording.

### Performance

Performance-oriented patterns include:

- Route-level lazy loading
- Suspense loading states
- React Query stale times and cache invalidation
- Skeleton screens
- Paginated data tables
- `keepPreviousData` style pagination behavior
- Service worker registration
- Socket lifecycle tied to authenticated sessions

## Backend / API / Data Integration

This repo is frontend-only, but it is deeply backend-integrated. It communicates with backend services for:

- Authentication and OTP verification
- Social login and SSO
- User profiles
- Role and permission management
- Courses and learning paths
- Course authoring and content uploads
- Projects and tasks
- Mentorship sessions and meetings
- Chat and message status
- Notifications
- Rewards and badges
- Grading
- Assessments, questions, certificates, and CSV operations
- Tenants, cohorts, institutions, organizations, and integrations

Backend/database schemas are not present in this repository, so backend architecture should be described only from the frontend integration perspective.

## Role-Based / Multi-Surface Functionality

### Student Surface

Students can access learning paths, courses, assessments/job simulations, mentorship, group sessions, counselor marketplace, events, projects/tasks, rewards, chat, and settings.

### Mentor Surface

Mentors can access their dashboard, mentorship sessions, appointments, student management, project/task creation, grading, courses, rewards, chat, and settings.

### Admin Surface

Admins can manage users, mentor approvals, cohorts, groups, matching, project analytics, course management, question banks, assessments, rewards, tenants, institutions, organizations, integrations, and platform settings.

### Public Surface

Public users can access marketing pages, product features, pricing, blog/news, reports, contact pages, tenant registration, institution landing pages, and public course detail routes.

### Permission-Aware UI

The repo includes route-level separation by user surface and API hooks for roles and permissions. Fine-grained permission enforcement likely depends on backend responses and should not be overstated without reviewing the backend.

## Technical Stack

### Framework

- React 18
- TypeScript
- Vite
- React Router

### Styling/UI

- Mantine
- CSS Modules
- Global CSS
- Tabler Icons
- HugeIcons
- Framer Motion
- GSAP

### State/Data Fetching

- TanStack React Query
- Zustand
- Axios
- Socket.IO Client

### Forms/Validation

- Mantine Form
- Zod
- mantine-form-zod-resolver

### Backend/API

- REST APIs
- Socket.IO chat
- Service worker and push notification support
- OAuth/SSO integrations
- Assessment API integration

### Database/Storage

No database implementation is present in this frontend repo.

### Tooling

- ESLint
- Prettier
- TypeScript
- Docker
- Netlify SPA redirects
- Vite SWC React plugin

## Feature Inventory

### Public Website

- Roles: Public visitors
- What it does: Presents product pages, feature pages, pricing, blog/news, reports, privacy, contact, and tenant registration.
- Key areas: Public WESOnline routes and sections.
- Portfolio-safe description: Built responsive product pages for a learning marketplace.

### Authentication And Onboarding

- Roles: Students, mentors, admins, SSO users
- What it does: Handles registration, OTP, login, email-only login, password reset, social login, SSO, account type selection, profile setup, and track selection.
- Key areas: Auth routes, personalization routes, auth hooks, auth store.
- Portfolio-safe description: Implemented multi-step onboarding and role-aware post-login navigation.

### Student Dashboard

- Roles: Students/fellows
- What it does: Gives learners access to home dashboard, learning paths, courses, assessments, mentorship, projects, events, counselors, rewards, chat, and settings.
- Key areas: Student routes and student marketplace pages.
- Portfolio-safe description: Built a learner workspace for courses, mentorship, and task progress.

### Mentor Dashboard

- Roles: Mentors
- What it does: Lets mentors manage students, projects, tasks, meetings, appointments, courses, rewards, chat, and profile/settings.
- Key areas: Mentor routes and mentor marketplace pages.
- Portfolio-safe description: Built mentor operations tools for project-based guidance and learner support.

### Admin Dashboard

- Roles: Admin users
- What it does: Supports user management, mentor approvals, groups, cohorts, matching, course management, assessments, analytics, rewards, tenants, institutions, integrations, and settings.
- Key areas: Admin routes, admin pages, admin hooks, reusable data table.
- Portfolio-safe description: Built internal admin tools for managing a multi-role education platform.

### Course Management And Learning

- Roles: Students, mentors, admins
- What it does: Supports course discovery, course details, departments, groups, instructors, chapters, content, resources, assessments, file uploads, issue reports, and course consumption.
- Key areas: Course hooks, course management components, shared course detail components.
- Portfolio-safe description: Developed course authoring and consumption workflows.

### Assessments And Job Simulations

- Roles: Students, admins
- What it does: Supports assessment setup, question banks, assessment-taking flows, progress, categories, CSV uploads, result exports, certificates, and job simulation validation.
- Key areas: ESA routes, assessment API hooks, assessment services.
- Portfolio-safe description: Integrated assessment workflows with question and certificate management.

### Projects And Tasks

- Roles: Students, mentors, admins
- What it does: Supports project creation, approval, assignment, task creation, task submission, comments, grading, project analytics, and progress tracking.
- Key areas: Project hooks, student project pages, mentor project pages, admin project pages.
- Portfolio-safe description: Built project lifecycle and task-tracking interfaces.

### Mentorship Sessions And Meetings

- Roles: Students, mentors, admins
- What it does: Supports meetings, appointment calendars, RSVP, session details, participants, meeting stats, Jitsi/Zoom-style meeting flows, and bulk session operations.
- Key areas: Meeting hooks, mentor meeting components, admin mentorship sessions.
- Portfolio-safe description: Integrated scheduled mentorship sessions and video meeting workflows.

### Chat And Notifications

- Roles: Students, mentors
- What it does: Supports direct conversations, message lists, infinite message pagination, socket-backed updates, typing/read behavior, notification panels, and push permission prompts.
- Key areas: Chat hooks, shared chat components, socket store, notification hooks.
- Portfolio-safe description: Added real-time communication using socket-backed messaging.

### Rewards And Badges

- Roles: Students, mentors, admins
- What it does: Supports reward balances/activity, badges, action points, reward config, transactions, withdrawals, and fraud review screens.
- Key areas: Rewards hooks and rewards pages.
- Portfolio-safe description: Built gamified engagement and reward operations screens.

### Tenant And Institution Management

- Roles: Admins, tenants, public visitors
- What it does: Supports tenant bootstrap, tenant branding, institution landing pages, organizations, integrations, cohorts, and tenant management screens.
- Key areas: Tenant bootstrap, tenant store, public institution routes, admin tenant/institution pages.
- Portfolio-safe description: Supported multi-tenant branding and organization management.

## Key Engineering Decisions

### 1. Role-Based Route Modules

- Decision: Split the app into route modules for public, auth, student, mentor, admin, ESA, and personalization flows.
- Why it mattered: Each surface has different workflows, permissions, layouts, and navigation.
- Result: Large multi-role functionality remains easier to reason about and extend.

### 2. React Query For Server State

- Decision: Use React Query for API data, pagination, mutations, cache invalidation, stale times, and loading states.
- Why it mattered: The app has many API-backed dashboards and operational workflows.
- Result: Data fetching patterns are more consistent across admin, mentor, student, course, project, rewards, and assessment modules.

### 3. Zustand For Client State

- Decision: Use Zustand for auth/session, socket, onboarding, drafts, notifications, task/project creation state, and tenant state.
- Why it mattered: These states are shared across unrelated components but do not require heavier global-state machinery.
- Result: Session and UI state remain centralized with low boilerplate.

### 4. Reusable Admin Primitives

- Decision: Build reusable dashboard components such as data tables, skeletons, stats cards, modals, drawers, empty states, filters, and status renderers.
- Why it mattered: Admin workflows repeat actions like view, edit, approve, reject, match, grade, paginate, and select rows.
- Result: Operational screens can be built faster while preserving UX consistency.

### 5. Tenant-Aware Bootstrap

- Decision: Load tenant configuration before rendering the app and apply tenant brand settings at runtime.
- Why it mattered: The platform appears to support institution or tenant-specific experiences.
- Result: The frontend can adapt to different organizations without duplicating the whole app.

### 6. Service-Specific API Clients

- Decision: Use separate Axios clients for main product APIs, microservices, chat, and assessment services.
- Why it mattered: Different services have different base URLs, token behavior, and error handling needs.
- Result: Integrations are isolated enough to evolve per service.

## Challenges And Tradeoffs

- Multi-surface complexity: Keeping student, mentor, admin, public, tenant, and assessment workflows in one repo improves shared UI reuse but increases maintenance complexity.
- API dependency: Most features depend on external services, so local development and testing require mocks, stable environments, or contract fixtures.
- Auth complexity: OTP, email-only login, social login, SSO, 2FA, mentor approval states, and role-based navigation create many edge cases.
- Sensitive config risk: A credential-like value appears in client-side social auth code. Public documentation, screenshots, and code snippets should avoid exposing configuration details, and sensitive auth exchange logic should be moved server-side where appropriate.
- Naming consistency: Some legacy or typo-prone file/folder names may slow onboarding.
- Production deployment clarity: Docker config appears development-oriented, while production deployment should document build and static hosting behavior clearly.

## Performance / Scalability Notes

- Route-level lazy loading reduces initial dashboard loading cost.
- React Query stale times reduce unnecessary refetching.
- Pagination and `keepPreviousData` patterns improve large-list UX.
- Skeleton screens improve perceived performance.
- Service worker registration supports offline/cache/update foundations.
- Socket connection is tied to authenticated sessions.
- As the app grows, bundle analysis and stricter feature boundaries would help manage long-term scalability.

## Screenshots Needed

Recommended portfolio screenshots:

- Public landing page or feature page
- Student dashboard home
- Learning path or course detail
- Assessment/job simulation flow with demo data
- Mentor project/task management
- Mentor session or appointment page
- Admin analytics dashboard
- Admin user management or course management
- Chat interface with anonymized demo users
- Rewards/badges page
- Mobile view of public page and dashboard

Blur or replace:

- Names, emails, user IDs, tenant data, cohort data, analytics, chat messages, admin records, tokens, API URLs, and sensitive internal labels.

## Safe Case Study Draft

### Overview

WESOnline Marketplace is a multi-role learning platform frontend that brings together courses, mentorship, assessments, projects, chat, rewards, and admin operations in one web application.

### Role

I worked as a frontend engineer responsible for building role-aware user experiences, integrating backend APIs, managing complex dashboard workflows, and creating reusable UI/data patterns.

### Problem

Learners need a guided digital learning environment, while mentors and admins need operational tools to manage people, content, projects, sessions, and progress.

### Solution

I built a React/TypeScript frontend with protected route groups for students, mentors, admins, and assessment users. The app uses React Query for server state, Zustand for session and UI state, Mantine for UI patterns, and service-specific API clients for platform integrations.

### Engineering Decisions

I organized the app around product surfaces, reused dashboard primitives, added validation-backed forms, handled authenticated API state with interceptors and cache invalidation, and supported tenant-aware configuration.

### Outcome

The project demonstrates the ability to deliver complex, production-style frontend systems that serve multiple user roles and connect deeply with backend services.

## Portfolio Strength Rating

- Visual presentation: 4/5
- Frontend engineering depth: 5/5
- Backend/API integration depth: 4/5
- Product complexity: 5/5
- Case-study strength: 5/5
- Hiring relevance: 5/5

### What To Emphasize

- Multi-role architecture
- Admin dashboards
- API integration
- React Query and Zustand patterns
- Course, assessment, project, and mentorship workflows
- Real-time chat
- Tenant support
- Reusable dashboard components

### What To Keep Brief

- Internal business processes
- Exact endpoint details
- Private operational rules
- Legacy naming or incomplete areas
- Internal team/company strategy

### What Not To Show Publicly

- Credentials or config snippets
- Raw `.env` values
- Access tokens or OAuth secrets
- User records
- Private analytics
- Admin-sensitive screens with real data
- Chat content
- Proprietary backend behavior

## Recruiter-Friendly Talking Points

- Built role-aware routing for student, mentor, admin, assessment, and public surfaces.
- Used React Query to manage paginated dashboards, cache invalidation, mutations, loading states, and filtered API views.
- Created reusable operational UI patterns including tables, skeletons, modals, drawers, status badges, and row actions.
- Integrated real-time messaging and notifications using Socket.IO, service worker hooks, and shared chat components.
- Implemented form-heavy workflows with Mantine Form and Zod for safer course, project, task, assessment, and profile data entry.
- Supported multi-tenant behavior by bootstrapping tenant configuration and applying tenant branding at runtime.
- Built learning and mentorship workflows spanning courses, project submissions, grading, meetings, and rewards.
- Connected public marketing pages with authenticated product surfaces while preserving protected route boundaries.

## Suggested Portfolio Data Object

```ts
export const project = {
  title: "WESOnline Marketplace",
  slug: "wesonline-marketplace",
  summary:
    "A multi-role learning marketplace frontend for courses, mentorship, assessments, projects, chat, rewards, and admin operations.",
  description:
    "Built a React/TypeScript platform frontend with student, mentor, admin, assessment, public, and tenant-aware surfaces. The app integrates multiple backend APIs, real-time chat, role-based workflows, and reusable dashboard systems.",
  role: "Frontend Engineer",
  projectType: "Frontend-heavy full-stack / backend-integrated frontend",
  status: "Private / production-adjacent",
  featured: true,
  timeline: "Not publicly specified",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "React Router",
    "Mantine",
    "React Query",
    "Zustand",
    "Axios",
    "Zod",
    "Socket.IO",
    "Framer Motion",
    "GSAP",
  ],
  surfaces: [
    "Public website",
    "Student dashboard",
    "Mentor dashboard",
    "Admin dashboard",
    "Assessment surface",
    "Tenant/institution pages",
  ],
  highlights: [
    "Role-based route architecture",
    "Reusable admin dashboard components",
    "Course, project, mentorship, and assessment workflows",
    "Real-time chat and notification integration",
    "Tenant-aware configuration and branding",
  ],
  engineeringDecisions: [
    "Separated route modules by product surface",
    "Used React Query for server-state caching and mutations",
    "Used Zustand for session, socket, draft, and tenant state",
    "Centralized validation with Zod-backed forms",
    "Created reusable table and dashboard primitives",
  ],
  outcomes: [
    "Delivered a complex multi-role frontend experience",
    "Improved maintainability through feature-based organization",
    "Supported operational workflows for admins and mentors",
    "Enabled learners to access courses, assessments, projects, mentorship, and rewards",
  ],
  links: {
    live: "",
    github: "",
  },
  screenshots: [
    "Public landing page",
    "Student dashboard",
    "Course detail",
    "Assessment flow",
    "Mentor project management",
    "Admin analytics",
    "Chat",
    "Mobile view",
  ],
  caseStudySections: [
    "Overview",
    "Role",
    "Problem",
    "Solution",
    "Engineering Decisions",
    "Outcome",
  ],
  features: [
    "Authentication and onboarding",
    "Student learning dashboard",
    "Mentor management dashboard",
    "Admin operations dashboard",
    "Course management",
    "Assessments and job simulations",
    "Projects and task submissions",
    "Mentorship meetings",
    "Chat and notifications",
    "Rewards and badges",
    "Tenant and institution management",
  ],
};
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint:

```bash
npm run lint
```

## Public Case Study Safety Note

This README is written for portfolio positioning and intentionally avoids exposing private business logic, credentials, user data, proprietary algorithms, hidden strategy, or sensitive implementation details. Before publishing screenshots or code snippets, replace all real data with demo data and verify that no secrets or private operational records are visible.
