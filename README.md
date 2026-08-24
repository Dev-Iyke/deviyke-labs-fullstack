# DevIyke Labs Full-Stack Showcase

DevIyke Labs is a full-stack portfolio and code-sample project for presenting Obasi Ikechukwu's software engineering work, project case studies, and contact flow in one coherent application.

This repository is a showcase copy created for review and submission. The frontend and backend originally lived as separate local projects and separate Git repositories. They were copied into this unified folder so reviewers can inspect the complete application together.

## Project Structure

```text
frontend/  Next.js portfolio frontend
backend/   NestJS portfolio API
```

The original individual repositories can still remain the source projects. This merged repository is currently intended as a submission-friendly full-stack view of the application.

## What The Application Does

- Presents selected software projects as structured case studies.
- Loads project data from the backend API.
- Provides project listing and project detail pages.
- Includes supporting portfolio pages such as About, Brief, Lab, and Blogs.
- Accepts contact form submissions from the frontend.
- Persists project content and contact submissions through Prisma and PostgreSQL.

## Architecture

```text
Browser
  -> Next.js frontend
  -> Axios + TanStack Query
  -> NestJS REST API
  -> Prisma
  -> PostgreSQL
```

The frontend owns the user experience, layout, form interaction, loading states, and client-side API integration. The backend owns request validation, API response shape, database access, project records, and contact submission persistence.

## Tech Stack

### Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Axios
- React Hook Form
- Zod
- next-themes
- Motion
- shadcn/Radix-style UI primitives
- Lucide icons

### Backend

- NestJS
- TypeScript
- Prisma
- PostgreSQL
- class-validator
- class-transformer
- Swagger/OpenAPI

## Main Frontend Routes

```text
/              Home page
/work          Project archive
/work/[slug]   Project detail page
/about         About page
/brief         Recruiter brief
/lab           Lab/experiments page
/blogs         Blog index
/blogs/[slug]  Blog detail page
/contact       Contact page
```

## API Routes

The backend sets a global API prefix of `/api/v1`.

```text
GET  /api/v1
GET  /api/docs
GET  /api/v1/projects
GET  /api/v1/projects/:slug
POST /api/v1/contact-submissions
```

## Data Flow

Project pages use frontend React Query hooks to call the API:

```text
frontend/src/features/projects/services/projects.api.ts
```

The contact form validates input on the client with React Hook Form and Zod, then submits to the backend:

```text
frontend/src/features/contact/components/ContactForm.tsx
frontend/src/features/contact/services/contact.api.ts
```

The backend validates incoming requests with DTOs and a global NestJS `ValidationPipe`, then uses Prisma for persistence:

```text
backend/src/main.ts
backend/src/projects
backend/src/contact-submissions
backend/src/prisma
```

## Database

The backend uses Prisma with PostgreSQL.

Main models:

- `Project`
- `ContactSubmission`

Prisma files:

```text
backend/prisma/schema.prisma
backend/prisma/migrations
backend/prisma/seed.ts
backend/prisma/data/projects.seed.ts
```

Project data is seeded into the database from structured project content. Contact submissions are created from the public contact form.

## Environment Variables

Do not commit real `.env` files.

Frontend:

```env
NEXT_PUBLIC_API_BASE_URL=
```

`NEXT_PUBLIC_API_BASE_URL` is used by the browser-side frontend, so it must only contain a public API base URL. It must not contain secrets.

Backend:

```env
PORT=
CORS_ORIGINS=
DATABASE_URL=
```

`DATABASE_URL` is sensitive and must stay out of Git. Use sanitized `.env.example` files for variable names and placeholders only.

## Running Locally

Install and run the backend:

```bash
cd backend
npm install
npm run prisma:generate
npm run start:dev
```

Install and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

The frontend expects `NEXT_PUBLIC_API_BASE_URL` to point at the backend API base URL.

## Useful Commands

Frontend:

```bash
cd frontend
npm run lint
npm run build
```

Backend:

```bash
cd backend
npm run lint
npm run test
npm run test:e2e
npm run build
```

Some backend commands require a valid local backend environment, especially `DATABASE_URL`.

## Deployment Notes

The backend documentation in this repository describes a Render deployment backed by Supabase PostgreSQL. The frontend is Vercel-oriented because it is a Next.js application.

This showcase repository does not currently include unified deployment configuration. It is primarily prepared as a public code sample that shows the full application structure in one repository.

## Testing Status

Current test coverage is limited. The backend contains starter-level tests, but the project and contact API flows need stronger coverage.

Highest-value future tests:

- Backend project listing and featured filtering.
- Backend project detail not-found behavior.
- Backend contact submission validation and persistence.
- Frontend contact form validation and submission states.
- Frontend project loading, empty, and error states.

## Security And Privacy

- Real `.env` files should remain ignored.
- `DATABASE_URL` and other credentials must never be committed.
- `NEXT_PUBLIC_*` values are exposed to the browser and must not contain secrets.
- Contact submissions are public-facing input and should eventually receive spam/rate-limit protection.
- Public project case studies should avoid private client data, credentials, internal URLs, and confidential business details.

## Current Strengths

- Clear frontend feature structure.
- Typed API integration through service hooks.
- Good loading, empty, and error state patterns.
- Client-side form validation with React Hook Form and Zod.
- Sensible NestJS module, controller, service, DTO, and Prisma separation.
- Database migrations and seed data are present.
- The project honestly shows a frontend-heavy engineer moving into deeper full-stack/backend work.

## Planned Improvements

- Replace starter README content inside the individual app folders.
- Remove temporary debug logs from request paths.
- Add sanitized `frontend/.env.example`.
- Add meaningful backend tests for project and contact flows.
- Add frontend tests for the contact form and API-backed project views.
- Pin the Node.js version for more reproducible deployment.
- Add CI for lint, build, and test checks.

## MLH Code Sample Context

This repository is intended to be representative, reviewable, and discussable in a technical interview. It combines a polished portfolio frontend with a practical backend API that persists project and contact data.

The goal is not to overstate the application as an enterprise platform. The goal is to show maintainable TypeScript application structure, thoughtful frontend work, practical backend foundations, and clear full-stack data flow.
