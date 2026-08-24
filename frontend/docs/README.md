# DevIyke Labs — Portfolio Product Plan

## Project overview

This repository contains the frontend for **Obasi Ikechukwu's portfolio**, presented through the supporting creative identity **DevIyke Labs**.

The portfolio is not intended to be a decorative resume. It should demonstrate frontend craftsmanship, product thinking, accessibility, performance awareness, and growing full-stack capability through the quality of the product itself.

The primary audience is recruiters, engineering managers, and technical collaborators. A visitor should quickly understand:

- What Ikechukwu builds
- The problems he has solved
- His specific contribution to each project
- His strength in frontend engineering
- His ability to design and integrate dependable backend systems
- How to contact or evaluate him for an opportunity

## Product positioning

**Primary identity:** Obasi Ikechukwu  
**Creative label:** DevIyke Labs  
**Role:** Frontend-Heavy Full-Stack Developer  
**GitHub:** [Dev-Iyke](https://github.com/Dev-Iyke)

Working headline:

> I build ambitious interfaces backed by dependable systems.

The site should feel like a **living product-engineering laboratory**: polished and atmospheric, but grounded in useful content and technical evidence.

## Experience principles

- Dark mode is the signature presentation; light mode remains fully supported.
- Mobile layouts are designed intentionally rather than treated as compressed desktop layouts.
- Typography, spacing, hierarchy, and project storytelling carry the experience.
- Motion should explain relationships or provide feedback, not delay navigation.
- Glass effects and gradients are accents, not the entire visual language.
- Technical depth should be available without overwhelming a recruiter scanning the site.
- Every published claim must be accurate and attributable.
- Accessibility and performance are product requirements.

## Visual system

### Direction

- Refined editorial layouts combined with modular product-interface panels
- Graphite and near-black dark surfaces with warm off-white text
- Restrained accent color, subtle grid textures, and layered depth
- Sharp information hierarchy with moderately rounded controls
- Interactive diagrams and annotated artifacts inside project case studies

### Typography

- **Satoshi Variable:** body copy, navigation, and controls
- **Recoleta:** major display headings, loaded only at the weights used
- **Geist Mono:** technical labels, dates, status text, code, and diagram annotations
- Font files are self-hosted through `next/font/local` using WOFF2 variable files
- Supported Satoshi weight range: `300–900`, including matching variable italics

### Component foundation

- shadcn/ui using the **Radix Nova** preset
- Neutral base palette
- Lucide icons
- CSS variables for theme tokens
- Components remain locally owned and may be adapted to the portfolio's visual language

## Planned routes

| Route | Purpose |
| --- | --- |
| `/` | Main narrative, selected work, capabilities, timeline, and contact CTA |
| `/work` | Project laboratory with meaningful filters |
| `/work/[slug]` | Detailed engineering case study |
| `/about` | Journey, working principles, strengths, and current growth |
| `/brief` | Concise, printable recruiter summary |
| `/contact` | Contact methods and validated inquiry form |
| `/lab` | Experiments and technical notes; planned after the initial launch |
| `/admin` | Private portfolio content management; delivered with the backend |

## Homepage structure

1. Hero, role, availability, and primary actions
2. Selected project case studies
3. Capability narrative: interface craft, systems, and product thinking
4. Interactive engineering timeline
5. Technical principles and toolbox
6. DevIyke Labs engineering philosophy
7. Contact call-to-action

The first screen must communicate identity, role, value, and the path to view work without requiring an animation to finish.

## Project laboratory

Projects are presented as engineering evidence rather than image-only cards.

### Evidence levels

- **Shipped:** production work with verifiable responsibilities and outcomes
- **Active build:** substantial work currently under development
- **Experiment:** focused learning, prototypes, and technical explorations

### Case-study structure

Each flagship case study should include:

1. Product context and user problem
2. Constraints and collaborators
3. Ikechukwu's role and specific responsibilities
4. Interface and product decisions
5. Technical architecture and data flow
6. A difficult engineering problem and its solution
7. Tradeoffs and rejected alternatives
8. Responsive, accessibility, and performance considerations
9. Verified outcome or honest qualitative evidence
10. Lessons and future improvements

Initial flagship candidates are **Noonprep** and **WesOnline Marketplace**. Their final copy must be created after repository inspection and a short project interview. Private client or organizational work must be described without exposing confidential details.

## Frontend architecture

### Core stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- shadcn/ui
- Motion
- TanStack Query and Query Devtools
- Zustand
- next-themes

### State boundaries

- **Server Components:** default for public, content-led pages
- **TanStack Query:** remote server state that needs client-side fetching, caching, mutation, or refresh behavior
- **Zustand:** small amounts of shared client state, such as command-palette state or persistent interface preferences
- **URL state:** filters, selected categories, and shareable navigation state
- **Local React state:** isolated component interaction
- **next-themes:** theme preference

API responses and theme state must not be duplicated in Zustand.

### Intended source organization

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── shared/
├── features/
│   ├── projects/
│   ├── profile/
│   ├── timeline/
│   ├── contact/
│   └── recruiter-brief/
├── data/
├── hooks/
├── lib/
├── stores/
└── types/
```

Feature folders should be introduced as features are built; empty architecture should not be scaffolded prematurely.

## Backend plan

The backend will live in a separate `portfolio-api` repository and will begin after the frontend's content model and case-study requirements are stable.

### Planned stack

- NestJS
- PostgreSQL
- Prisma
- REST API with OpenAPI documentation
- Secure single-admin authentication
- Cloudinary or equivalent managed media storage
- Structured logging, validation, and rate limiting

### Initial responsibilities

- Project and case-study CMS
- Timeline and editable profile content
- Contact-message processing
- Privacy-conscious first-party analytics
- Public read-only portfolio endpoints
- Health checks and API documentation

Stable brand copy and design configuration may remain version-controlled. The CMS is for content that genuinely benefits from being updated without a frontend deployment.

### Proposed public API

```text
GET  /v1/profile
GET  /v1/projects
GET  /v1/projects/:slug
GET  /v1/timeline
POST /v1/contact
POST /v1/events
GET  /health
GET  /docs
```

The frontend should begin with typed local repositories. Those repository interfaces will later be backed by the API without coupling UI components directly to transport details.

## Implementation sequence

### Phase 1 — Foundation

- [x] Initialize Next.js, TypeScript, Tailwind CSS, and ESLint
- [x] Initialize shadcn/ui with the Radix Nova preset
- [x] Install TanStack Query, Devtools, Zustand, Motion, and next-themes
- [x] Add the initial application provider composition
- [x] Add local Satoshi font assets
- [x] Finalize Satoshi, Recoleta, and Geist Mono CSS mappings
- [x] Add the dark-first theme provider and accessible theme control
- [x] Replace starter metadata and starter page content
- [x] Establish design tokens, layout primitives, and responsive containers
- [x] Establish feature, type, data, and component conventions

### Phase 2 — Application shell

- [x] Responsive header and navigation
- [x] Mobile navigation sheet
- [x] Footer and global contact affordance
- [x] Skip link, focus treatment, reduced-motion behavior, and page container
- [ ] Shared loading, empty, and error treatments

### Phase 3 — Homepage narrative

- [x] Hero and availability foundation
- [x] Featured project presentation
- [x] Capability narrative
- [x] DevIyke Labs engineering philosophy
- [ ] Engineering timeline
- [x] Technical toolbox
- [x] Contact CTA
- [x] Add centralized, reduced-motion-safe animation primitives
- [x] Add a restrained hero entrance sequence

### Phase 4 — Project laboratory

- [x] Define the initial project TypeScript contract
- [x] Create typed local project repositories and conservative seed content
- [x] Define the initial case-study TypeScript contract
- [x] Build the initial work index page
- [ ] Add work index filters
- [x] Build initial project detail pages
- [ ] Add media, architecture diagrams, and evidence labels
- [ ] Interview and verify the initial flagship projects

### Phase 5 — Supporting experience

- [ ] About page
- [ ] Recruiter brief and print styles
- [ ] Contact page and form states
- [ ] Metadata, sitemap, Open Graph images, and structured data
- [ ] Cross-browser, accessibility, and performance hardening

### Phase 6 — Backend integration

- [ ] Initialize the NestJS API repository
- [ ] Define PostgreSQL and Prisma models from the stable frontend contracts
- [ ] Add public read endpoints and OpenAPI documentation
- [ ] Generate or maintain a typed frontend API client
- [ ] Replace local repositories with API-backed implementations
- [ ] Add authentication, CMS workflows, media, contact processing, and analytics

### Phase 7 — Post-launch expansion

- [ ] Command palette
- [ ] Richer interactive architecture diagrams
- [ ] Curated GitHub highlights
- [ ] Technical lab and writing
- [ ] Retrieval-grounded portfolio assistant, only after sufficient verified content exists

## Quality requirements

### Accessibility

- Target WCAG 2.2 AA
- Complete keyboard navigation and visible focus states
- Semantic landmarks and heading hierarchy
- Screen-reader labels for icon-only controls
- Reduced-motion support
- Accessible validation and status feedback
- Adequate contrast in both themes

### Performance

- Target Lighthouse scores of 95+ for performance, accessibility, SEO, and best practices on primary public routes
- Use optimized WOFF2 variable fonts and optimized responsive images
- Keep most content pages server-rendered
- Avoid shipping animation and state-management code where it is not needed
- Prevent layout shifts and animation-blocked interactions

### Testing

- Unit tests for data transformations and shared behavior
- Component tests for interactive controls and form states
- Integration tests for project repositories and API clients
- End-to-end tests for navigation, theme persistence, project discovery, recruiter brief, and contact flow
- Responsive checks from 320px mobile widths through wide desktop layouts
- Automated lint, type-check, test, and production-build checks in CI

## Content and privacy rules

- Never invent metrics, responsibilities, technologies, or production status.
- Distinguish personal ownership from team contribution.
- Clearly label shipped work, active builds, and experiments.
- Do not expose private source code, client data, credentials, or confidential architecture.
- Analytics must not persist raw IP addresses or sensitive form content.
- Years of experience and availability claims must be kept current and verifiable.

## Deferred from the first release

The following are valuable but must not delay the initial portfolio:

- Full blog CMS
- AI portfolio assistant
- Developer terminal interface
- Live unfiltered commit feed
- Redis
- Multi-role administration
- Elaborate real-time analytics dashboard

## Immediate next milestone

The selected-work foundation has started. Current status:

- [x] Define the typed project content model and local repository boundary.
- [x] Create conservative seed entries for Noonprep, WesOnline Marketplace, and this portfolio.
- [x] Build the responsive selected-work section and evidence-level presentation.
- [ ] Review the animated hero, footer, active navigation, selected work, and both themes at mobile widths.
- [ ] Run lint and a production build before expanding the homepage narrative.

The next frontend milestone should be the **capability narrative**, followed by work-index filters and deeper case-study structure. Backend planning should begin only after project, case-study, profile, timeline, and contact-form content needs are clear.
