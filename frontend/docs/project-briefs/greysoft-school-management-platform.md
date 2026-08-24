# Greysoft Portfolio Case Study Brief

Use this document as source material for implementing the Greysoft project page in a developer portfolio. Keep the final portfolio write-up professional, concise, and safe: do not expose secrets, credentials, private business logic, proprietary algorithms, hidden company strategy, or real user/school data.

## Basic Info

- Project name: Greysoft
- Product/surface analyzed: Multi-tenant school management frontend, public site, role-based dashboards, exam portals, and Greysoft platform admin
- Suggested portfolio title: Greysoft School Management Platform
- Suggested slug: `greysoft-school-management-platform`
- Project type: Frontend-heavy full-stack
- Status: Private / in progress
- Role: Frontend Engineer / Full-stack Integration Engineer
- Team context: Not inferable from repo
- Timeline: Not inferable from repo
- Live URL: Not present in repo
- GitHub visibility: Private/unknown

## Product Surface / Repo Context

This repo represents a Next.js frontend for Greysoft's school SaaS platform. It includes several connected surfaces:

- Public marketing/landing pages
- Tenant-specific school portals using subdomain-aware routing
- School admin dashboard
- Teacher dashboard
- Student dashboard
- Sponsor/parent dashboard
- Applicant onboarding and entrance exam flows
- Exam portals
- Greysoft global super-admin / platform operations dashboard

User roles visible in the repo:

- Greysoft super admin
- Greysoft admin / GAdmin
- School super admin
- School admin
- Teacher
- Student
- Sponsor/parent
- Applicant

This appears to be part of a larger product ecosystem. The backend/API service is likely a separate related repo and should be analyzed next if a complete full-stack case study is needed.

Related repo likely needed: yes.

Related surface to analyze next: Backend/API service for schools, users, authentication, exams, payments, messaging, permissions, media, logs, and analytics.

## One-line Portfolio Summary

A multi-tenant school management platform with role-based dashboards for administrators, teachers, students, sponsors, applicants, and Greysoft platform operators.

## Short Portfolio Description

Greysoft is a school operations platform that brings admissions, academics, exams, payments, messaging, reporting, and platform administration into one multi-tenant web app. The frontend supports multiple user roles, tenant-specific school portals, secure dashboard routing, real-time workflows, and reusable data-driven UI patterns.

## Problem / Product Context

Schools often manage academics, admissions, payments, communication, reporting, and exams across disconnected tools. Greysoft addresses this by giving each user type a focused dashboard while keeping school operations centralized under one platform.

The product supports both individual schools and Greysoft's internal platform operations team. Schools can manage academic and administrative workflows, while Greysoft admins can oversee schools, permissions, support, user logs, and data-management views across the platform.

## My Contribution

Safe contribution points to use in the portfolio:

- Built multi-role dashboard experiences for admin, teacher, student, sponsor, applicant, and Greysoft platform users.
- Implemented tenant-aware frontend routing using school subdomains.
- Created reusable dashboard components for sidebars, tables, filters, dialogs, uploads, pagination, exports, and empty/loading states.
- Integrated frontend workflows with backend REST APIs using Axios and TanStack Query.
- Implemented JWT-based authentication flows with role-scoped cookies and protected dashboard layouts.
- Built permission-aware navigation and feature access across dashboards.
- Developed form-heavy onboarding and settings flows with React Hook Form and Zod.
- Integrated real-time features using Socket.IO for messaging and exam progress workflows.
- Supported file/media upload flows with Cloudinary integration and upload progress states.
- Added operational export flows for CSV and PDF reporting.

## Frontend Engineering Highlights

### UI Architecture

The app uses Next.js App Router with a structured route tree for global pages, tenant-domain pages, dashboards, and exam portals. Shared UI primitives live under `src/components/ui`, while product-specific components are grouped under `src/components/dashboard`, `src/components/authentication`, and `src/components/landing-page`.

### Routing

Tenant school pages are organized under `src/app/[domain]`, while global Greysoft platform routes live under `src/app/(global)`. Middleware resolves subdomains and rewrites requests into the correct tenant namespace.

### State and Data Flow

The app separates client/session state from server state:

- Redux Toolkit handles auth, exam, and messaging state.
- TanStack Query handles server data, caching, retries, loading states, and stale times.
- Axios centralizes API calls, auth headers, and success/error feedback.

### Forms and Validation

Forms use React Hook Form with Zod validation. The app includes schemas for sign-in, password reset, onboarding, school creation, student/sponsor details, teacher details, admin details, contact forms, and demo booking.

### API Integration

The frontend integrates with backend endpoints for:

- Authentication
- Users
- Schools
- Classes
- Subjects
- Sections
- Timetables
- Attendance
- Assignments
- Learning materials
- Exams
- Entrance exams
- Results
- School fees and payments
- Announcements
- Messaging
- Permissions
- Greysoft admin operations
- Support tickets
- Logs

### Real-time Features

Socket.IO is used for:

- Messaging
- Exam progress save acknowledgements
- Online/connection status feedback

### Responsive Design

Dashboards use responsive layouts with collapsible sidebars, mobile overlays, adaptive spacing, and custom breakpoints. The sidebar adapts to role, permissions, school branding, and screen size.

### Design System and Styling

The project uses:

- Tailwind CSS v4
- shadcn-style component structure
- Radix UI primitives
- CSS variables
- Custom Satoshi, Inter, and Urbanist fonts
- lucide-react icons
- Recharts for dashboards/charts
- School-specific theme colors for branded tenant experiences

### Accessibility

The use of Radix UI primitives gives the project a good accessibility foundation for dialogs, tabs, selects, popovers, scroll areas, labels, and tooltips. Form labels, error messages, and structured loading/empty states are also visible patterns.

### Performance and Maintainability

The app uses paginated data fetching, cached lookup queries, reusable query functions, loading states, empty states, and scoped query keys. Reusable dashboard components reduce repeated implementation across the large number of role-specific screens.

## Backend / API / Data Integration

This repo is primarily frontend, but it includes a small Next API route for Cloudinary media deletion. The main backend is external and is consumed through REST APIs and Socket.IO.

Safe way to describe this in a portfolio:

The frontend was built to integrate with a separate backend API responsible for authentication, school data, users, payments, academic records, exams, messaging, and permissions. The frontend uses typed query wrappers, shared API utilities, role-aware token handling, and real-time sockets to coordinate complex workflows across roles.

Do not claim ownership of backend internals unless confirmed by another repo.

## Role-Based / Multi-Surface Functionality

### School Admin / Super Admin

Admin users can manage:

- Dashboard overview
- Announcements
- Messages
- Payments
- Subjects
- Sections
- Teacher assignments
- Classes
- Timetables
- Learning materials
- Assignments
- Students
- Teachers
- Admins
- Applicants
- Past students
- Grades
- Exam types
- Exam setup
- Entrance exams
- Results
- School styling
- Permissions
- User settings
- Payment settings

### Teacher

Teacher users can access:

- Dashboard overview
- Timetable
- Learning materials
- Assignments
- Exams
- Entrance exams
- Messaging
- Class reports
- Attendance
- Class performance
- Grading

### Student

Student users can access:

- Dashboard overview
- Timetable
- Learning materials
- Assignments
- Exams
- Results
- School fees
- Settings

### Sponsor / Parent

Sponsor users can access:

- Student-related dashboard views
- Timetable
- Learning materials
- Assignments
- Results
- Messaging
- School fees
- Performance
- Settings

### Applicant

Applicant users can access:

- Signup and signin flows
- Applicant dashboard
- Entrance exam signin
- Entrance exam portal

### Greysoft Super Admin / GAdmin

Greysoft platform users can access:

- Platform dashboard
- School management
- Data management
- Permissions
- Customization
- Communications
- User logs
- Support
- Settings

## Technical Stack

### Framework

- Next.js 15
- React 18
- TypeScript
- Next.js App Router

### Styling / UI

- Tailwind CSS v4
- Radix UI
- shadcn-style UI primitives
- lucide-react
- Framer Motion
- Recharts
- Custom local fonts

### State / Data Fetching

- Redux Toolkit
- React Redux
- TanStack Query
- Axios
- Socket.IO Client

### Forms / Validation

- React Hook Form
- Zod
- `@hookform/resolvers`
- `libphonenumber-js`
- `react-phone-input-2`
- `input-otp`

### Backend / API

- External REST API
- Socket.IO backend
- Next API route for Cloudinary deletion
- Cloudinary media upload integration

### Database / Storage

- Database is backend-owned and not visible in this repo.
- Cloudinary is used for media/file handling.

### Tooling

- ESLint
- TypeScript strict mode
- npm
- Next.js config
- Tailwind CSS config through CSS theme variables

## Key Engineering Decisions

### Decision: Use subdomain-aware middleware for tenant routing

Why it mattered: The platform serves many schools from one frontend while preserving tenant-specific URLs and school-branded experiences.

Result: The app can support multiple schools through a shared codebase and route structure.

### Decision: Separate dashboards by role and route tree

Why it mattered: Admins, teachers, students, sponsors, applicants, and Greysoft admins have different workflows and permissions.

Result: Each role gets focused navigation and protected dashboard layouts while still sharing reusable components.

### Decision: Use React Query for server state and Redux for session state

Why it mattered: API data and auth/session state have different lifecycles.

Result: The app gets caching, retries, stale times, and clean loading states for server data while keeping auth data globally available.

### Decision: Centralize API authentication and response feedback

Why it mattered: Almost every dashboard feature depends on authenticated backend calls.

Result: Axios interceptors provide consistent token handling, success toasts, and error feedback.

### Decision: Build reusable dashboard primitives

Why it mattered: Operational dashboards repeat tables, filters, pagination, uploads, dialogs, and exports.

Result: The platform can scale across many screens while maintaining visual and behavioral consistency.

### Decision: Add real-time sockets for interactive workflows

Why it mattered: Messaging and exam progress require faster feedback than ordinary request/response flows.

Result: The frontend can support live communication and progress-save acknowledgement during exams.

## Challenges and Tradeoffs

- Multi-role complexity: Supporting many user roles increases routing, navigation, token, and permission complexity.
- Tenant routing complexity: Subdomain routing is powerful but requires careful middleware, environment, and local development configuration.
- Frontend-heavy architecture: The frontend contains many integration points, but the backend repo is needed to fully explain API and database design.
- Permissions complexity: UI access is role-aware and permission-aware, which improves user experience but requires consistent backend alignment.
- Media handling: Cloudinary uploads support progress and file validation. For production hardening, server-only Cloudinary secrets should not use `NEXT_PUBLIC` names.
- Testing gap: No visible test script or test suite was found in `package.json`. Mention manual QA unless project tests exist elsewhere.
- Documentation gap: The README appears close to the starter template and does not reflect the current application scope.

## Performance / Scalability Notes

- Uses paginated query patterns for large admin datasets.
- Uses query stale times for stable data such as school details and lookup lists.
- Uses reusable filters and `URLSearchParams` to keep API calls scoped.
- Uses loading, empty, and refetch states across data-heavy tables.
- Supports CSV and PDF exports for operational reporting.
- Uses Socket.IO for real-time workflows rather than repeated polling.
- Uses component reuse to reduce maintenance cost across many dashboard surfaces.

## Screenshots Needed For Portfolio

Capture screenshots using demo data only. Blur or replace real names, emails, phone numbers, payment records, logs, tickets, school records, and student details.

Recommended screenshots:

- Public landing page
- Contact or demo page
- School admin dashboard home
- Admin user management table
- Admin payments or results page
- Teacher assignment/exam setup flow
- Teacher class report or attendance screen
- Student dashboard home
- Student assignments or learning materials screen
- Sponsor performance or fees page
- Exam portal with demo questions only
- Greysoft super-admin school management page
- Greysoft permissions or support page
- Mobile dashboard view with sidebar open and closed

## Portfolio-Ready Case Study Draft

### Overview

Greysoft is a multi-tenant school management platform designed to help schools manage academic, administrative, communication, payment, and exam workflows from one web application. The product supports tenant-specific school portals as well as Greysoft's internal platform administration tools.

### Role

I worked on the frontend architecture and API integration for a role-based SaaS dashboard experience. My work included reusable components, protected layouts, data-fetching hooks, form workflows, media uploads, permission-aware navigation, and real-time interactions.

### Problem

Schools often rely on disconnected tools for admissions, teaching workflows, exams, payments, parent communication, and reporting. This creates duplicated work, inconsistent access to information, and extra overhead for administrators, teachers, students, and sponsors.

### Solution

Greysoft organizes school operations into focused dashboards for each user type. Admins manage school setup and users, teachers handle academic workflows, students access learning tasks and results, sponsors monitor student progress and fees, applicants complete entrance workflows, and Greysoft operators manage schools across the platform.

The frontend uses tenant-aware routing, role-based protection, reusable dashboard components, cached API data, form validation, and real-time sockets to support these workflows at scale.

### Engineering Decisions

The app uses Next.js App Router for structured routing, middleware for subdomain-based tenant resolution, role-scoped auth cookies for session isolation, Redux for auth/session state, TanStack Query for server state, Zod-backed forms for validation, and Socket.IO for real-time messaging and exam progress updates.

### Outcome

The result is a scalable frontend foundation for a multi-school SaaS product, with reusable patterns that support many roles, repeated operational screens, tenant customization, and complex school workflows without exposing sensitive implementation details.

## Suggested Project Data Object

```ts
{
  title: "Greysoft School Management Platform",
  slug: "greysoft-school-management-platform",
  summary: "A multi-tenant school management platform with role-based dashboards for school operations, academics, payments, exams, messaging, and platform administration.",
  description: "Greysoft brings school administration, teaching workflows, student access, sponsor visibility, applicant onboarding, and platform operations into one tenant-aware web app.",
  role: "Frontend Engineer / Full-stack Integration Engineer",
  projectType: "Frontend-heavy full-stack",
  status: "Private / In progress",
  featured: true,
  timeline: "Not publicly specified",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
    "Axios",
    "Zod",
    "React Hook Form",
    "Socket.IO",
    "Cloudinary"
  ],
  surfaces: [
    "Public site",
    "School admin dashboard",
    "Teacher dashboard",
    "Student dashboard",
    "Sponsor dashboard",
    "Applicant portal",
    "Exam portal",
    "Greysoft super-admin"
  ],
  highlights: [
    "Tenant-aware subdomain routing",
    "Role-based protected dashboards",
    "Reusable data tables, dialogs, filters, uploads, and export tools",
    "Real-time messaging and exam progress support",
    "Form-heavy onboarding and settings workflows"
  ],
  engineeringDecisions: [
    "Separated role dashboards into dedicated route trees",
    "Used React Query for server state and Redux for auth/session state",
    "Centralized API auth and toast handling through Axios",
    "Implemented permission-aware navigation and UI",
    "Built reusable operational dashboard components"
  ],
  outcomes: [
    "Scalable frontend architecture for multi-school SaaS workflows",
    "Consistent dashboard UX across multiple user roles",
    "Improved maintainability through shared hooks and components"
  ],
  links: {
    live: "",
    github: ""
  },
  screenshots: [
    "Admin dashboard",
    "Teacher workflow",
    "Student dashboard",
    "Sponsor performance or fees",
    "Exam portal",
    "Greysoft super-admin",
    "Mobile dashboard"
  ],
  caseStudySections: {
    overview: "A tenant-aware school management platform for academic and administrative workflows.",
    problem: "Schools need one place to coordinate users, classes, exams, payments, communication, and reporting.",
    solution: "Role-based dashboards and reusable frontend systems support each workflow safely and consistently.",
    outcome: "A scalable frontend foundation for a multi-role school SaaS product."
  }
}
```

## Prompt To Paste Into Another Codex Session

```text
I am implementing this project in my developer portfolio. Use the attached Greysoft portfolio brief as the source of truth.

Please create a polished portfolio project entry and case study page for "Greysoft School Management Platform".

Important safety rules:
- Do not expose secrets, credentials, private business logic, proprietary algorithms, company strategy, or real user/school data.
- Keep the case study high-level but specific enough to show engineering depth.
- Treat this as a private/in-progress frontend-heavy full-stack project.
- Mention that the backend/API repo would be needed for a complete full-stack case study.
- Use demo/blurred screenshot placeholders where needed.

Suggested project framing:
- Multi-tenant school management platform
- Role-based dashboards
- Tenant-aware subdomain routing
- Admin, teacher, student, sponsor, applicant, and Greysoft platform admin surfaces
- Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, Axios, Zod, React Hook Form, Socket.IO, Cloudinary

Build or update:
- Portfolio project data object
- Project card content
- Case study page content
- Screenshot checklist/placeholders
- Highlights, engineering decisions, challenges, and outcomes

Tone:
- Professional
- Portfolio-ready
- Specific but safe
- Clear about frontend architecture and API integration
```

## Feature Inventory

These are the portfolio-safe product features visible from the Greysoft brief. They should be used to shape the project detail page and interview talking points without exposing private school/user data.

### Multi-tenant school portals

- User roles: schools, admins, teachers, students, sponsors/parents, applicants
- What it does: routes different school experiences through tenant-aware URLs and school-specific branding.
- Engineering angle: subdomain-aware middleware, shared frontend codebase, tenant-specific route namespaces, branded dashboards.
- Portfolio-safe framing: a multi-school SaaS frontend that can serve many institutions from one application shell.

### Role-based dashboards

- User roles: school admins, teachers, students, sponsors, applicants, Greysoft platform admins
- What it does: gives each user type a focused dashboard with navigation and workflows relevant to their role.
- Engineering angle: protected route layouts, role-scoped cookies, permission-aware navigation, reusable dashboard primitives.
- Portfolio-safe framing: complex role-based frontend architecture with shared components and tailored workflows.

### Messaging across users

- User roles: teachers, students, sponsors/parents, admins, platform users where applicable
- What it does: supports communication between school stakeholders.
- Engineering angle: Socket.IO integration, connection status, server-state/client-state separation, realtime feedback.
- Portfolio-safe framing: realtime messaging workflows for a multi-role education platform.

### Exam and entrance exam portals

- User roles: students, applicants, teachers/admins configuring or reviewing exams
- What it does: supports exam-taking, entrance assessment flows, progress feedback, and exam-related dashboard views.
- Engineering angle: dedicated exam routes, socket-powered progress acknowledgements, protected flows, validation, loading states.
- Portfolio-safe framing: interactive assessment workflows with realtime progress support.

### Academic workflow management

- User roles: admins, teachers, students, sponsors
- What it does: handles classes, subjects, sections, timetables, assignments, learning materials, attendance, grading, and results.
- Engineering angle: reusable data tables, filters, paginated queries, forms, upload states, API-backed dashboard modules.
- Portfolio-safe framing: data-heavy academic operations built with reusable frontend systems.

### Payments and school fees

- User roles: school admins, sponsors/parents, students where applicable
- What it does: exposes fee/payment-related dashboards and reporting flows.
- Engineering angle: protected finance-oriented screens, tables, exports, role-aware access, backend API integration.
- Portfolio-safe framing: operational payment visibility and reporting surfaces without exposing real financial data.

### Applicant onboarding

- User roles: applicants and admins reviewing applicants
- What it does: supports signup/signin, applicant dashboard access, entrance exam sign-in, and admissions-related flows.
- Engineering angle: form-heavy onboarding, React Hook Form, Zod validation, protected applicant routes, API integration.
- Portfolio-safe framing: structured admissions workflow with validation-driven forms.

### Permissions and platform operations

- User roles: Greysoft super admin / GAdmin, school admins
- What it does: supports school management, permissions, customization, logs, support, data-management views, and platform-level operations.
- Engineering angle: permission-aware UI, super-admin dashboard surfaces, reusable operational screens, audit/log style tables.
- Portfolio-safe framing: internal operations dashboard for managing a multi-tenant SaaS platform.

### Media upload and management

- User roles: admins, teachers, platform users where applicable
- What it does: supports file/media upload workflows for school content and platform assets.
- Engineering angle: Cloudinary upload integration, progress states, file validation, small Next API route for media deletion.
- Portfolio-safe framing: media workflows with upload feedback and safe asset handling.

### Reporting and exports

- User roles: admins, teachers, platform admins
- What it does: supports CSV/PDF export flows for operational reporting.
- Engineering angle: reusable export actions, table data shaping, report-oriented screens, API integration.
- Portfolio-safe framing: admin reporting tools for school operations and platform oversight.

## Portfolio Strength Rating

- Visual presentation: 4/5 — broad dashboard surface area, strong role variety, and good screenshot potential if demo data is used.
- Frontend engineering depth: 5/5 — multi-tenant routing, role dashboards, protected layouts, query/state architecture, forms, realtime flows, and reusable dashboard components.
- Backend/API integration depth: 4/5 — extensive REST and Socket.IO integration is visible, but backend internals require a separate repo analysis before claiming full backend ownership.
- Product complexity: 5/5 — many user roles, tenant-specific experiences, academic workflows, operations dashboards, exams, messaging, and payments.
- Case-study strength: 5/5 — this should be one of the primary case studies because it proves product complexity and frontend architecture depth.
- Hiring relevance: 5/5 — strongly relevant for frontend-heavy full-stack roles, SaaS dashboards, education technology, admin systems, realtime workflows, and API-integrated product UI.

### What to emphasize

- Multi-tenant frontend architecture.
- Role-based dashboards and permission-aware UI.
- Reusable dashboard systems across many modules.
- TanStack Query + Redux split for server/session state.
- Realtime Socket.IO features for messaging and exam progress.
- Form-heavy workflows with React Hook Form and Zod.
- Safe API integration and protected dashboard layouts.

### What to keep brief

- Backend/database internals until the backend repo is analyzed.
- Business-specific implementation details.
- Any payment, student, school, support, or log details that could expose real users.

### What not to show publicly

- Real student/school/user records.
- Payment details, logs, support tickets, real messages, phone numbers, emails, or school private data.
- Any credentials, private env values, internal endpoints, or proprietary business logic.

## Recruiter-Friendly Talking Points

- Built a multi-tenant school SaaS frontend that serves school-specific portals through subdomain-aware routing and shared application architecture.
- Created role-based dashboard experiences for admins, teachers, students, sponsors, applicants, and platform operators.
- Integrated REST APIs with TanStack Query for cache-aware server state while using Redux Toolkit for auth, exam, and messaging session state.
- Implemented realtime product workflows with Socket.IO, including messaging and exam progress feedback.
- Built form-heavy onboarding and settings flows with React Hook Form and Zod validation.
- Developed reusable dashboard primitives for data tables, filters, dialogs, upload flows, pagination, empty states, loading states, and exports.
- Supported permission-aware navigation so users only see actions and screens relevant to their role and access level.
- Helped shape a scalable frontend foundation for a complex multi-role SaaS product without exposing sensitive implementation details.
