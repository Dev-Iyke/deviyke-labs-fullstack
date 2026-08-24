# DevIyke Labs Full-Stack Portfolio

DevIyke Labs is a full-stack portfolio project for presenting Obasi Ikechukwu's software engineering work, project case studies, and contact flow in one coherent application.

The frontend and backend originally lived as separate projects. This repository brings them together so the complete application can be viewed, run, and reviewed as one full-stack system.

## Live Site

- Frontend: [https://deviyke-labs.vercel.app](https://deviyke-labs.vercel.app)

## Project Structure

```text
frontend/  Next.js portfolio frontend
backend/   NestJS portfolio API
```

The individual frontend and backend projects may continue to evolve separately. This repository keeps the current full-stack application structure visible in one place.

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

Current models:

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

Backend:

```env
PORT=
CORS_ORIGINS=
DATABASE_URL=
```

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
npm run build
```

Some backend commands require a valid local backend environment, especially `DATABASE_URL`.

## Deployment Notes

The frontend is deployed on Vercel. The backend deployment notes describe a Render service backed by Supabase PostgreSQL.

This repository does not currently include unified deployment configuration. The frontend and backend can still be deployed independently.

## Testing

Backend tests can be run from the backend folder:

```bash
cd backend
npm run test
```

The frontend currently uses lint and production build checks as the main verification commands:

```bash
cd frontend
npm run lint
npm run build
```

## Configuration And Privacy

- Real environment files are kept out of Git.
- Example environment files document required variables without private values.
- Public frontend configuration uses `NEXT_PUBLIC_*` only where browser exposure is intended.
- Project case studies are written for public viewing and avoid private client data, credentials, internal URLs, and confidential business details.
- Contact submissions are stored through the backend API instead of being handled directly by the frontend.

## Current Strengths

- Clear frontend feature structure.
- Typed API integration through service hooks.
- Good loading, empty, and error state patterns.
- Client-side form validation with React Hook Form and Zod.
- Sensible NestJS module, controller, service, DTO, and Prisma separation.
- Database migrations and seed data are present.
- The project honestly shows a frontend-heavy engineer moving into deeper full-stack/backend work.
