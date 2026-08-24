# Projects Backend Handoff Brief

This document captures the current frontend contract for the Projects feature in `portfolio-web` so the backend repo (`deviyke-labs-api`) can design a matching `ProjectsModule`, Prisma model, and seed strategy without breaking the existing UI expectations.

Important scope:

- This brief is inspection-only.
- It reflects the current frontend implementation as of August 10, 2026.
- It avoids printing any secrets or environment values.

## 1. Project Data Source

Current source of truth:

- `src/features/projects/data/projects.ts`
- The file exports `projects` as a local static array:

```ts
export const projects = [...] as const satisfies readonly Project[];
```

Related files:

- Types/interfaces: `src/features/projects/types/project.ts`
- Repository helpers: `src/features/projects/repositories/projectsRepository.ts`
- Work index route: `src/app/work/page.tsx`
- Work detail route: `src/app/work/[slug]/page.tsx`

UI consumers:

- Homepage selected work: `src/features/projects/components/SelectedWorkSection.tsx`
- Work listing grid: `src/features/projects/components/WorkIndexGrid.tsx`
- Work page hero: `src/features/projects/components/WorkIndexHero.tsx`
- Project card: `src/features/projects/components/ProjectCard.tsx`
- Detail hero: `src/features/projects/components/ProjectDetailHero.tsx`
- Detail body: `src/features/projects/components/ProjectDetailBody.tsx`
- Feature inventory: `src/features/projects/components/ProjectFeatureInventory.tsx`
- Status badge: `src/features/projects/components/ProjectStatusBadge.tsx`
- Technology chips: `src/features/projects/components/TechnologyList.tsx`

Current behavior:

- Data is fully static/local.
- Data is not fetched from an API.
- Data is not transformed heavily.
- Repository helpers only read, filter, and find projects.

Repository behavior:

```ts
import { projects } from "@/features/projects/data/projects";

const featuredProjectSlugs = [
  "greysoft-school-management-platform",
  "jooav-erp",
  "wesonline-marketplace",
  "noonprep",
] as const;

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return featuredProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
```

Important implication:

- The backend should preserve both:
  - a `featured` concept
  - a way to control featured ordering
- The homepage is not currently driven by `featured: true` alone. It is driven by an explicit slug order in the repository layer.

## 2. Current TypeScript Shape

Source: `src/features/projects/types/project.ts`

```ts
export type ProjectEvidenceStatus = "shipped" | "active-build" | "experiment";

export type ProjectImpactArea =
  | "frontend-architecture"
  | "product-interface"
  | "backend-foundation"
  | "workflow-design"
  | "performance-accessibility";

export interface ProjectLink {
  readonly label: string;
  readonly href: string;
  readonly kind: "case-study" | "live" | "github" | "external";
}

export interface ProjectDecision {
  readonly title: string;
  readonly description: string;
}

export interface ProjectFeature {
  readonly name: string;
  readonly roles: readonly string[];
  readonly description: string;
  readonly engineering: string;
}

export interface ProjectScreenshot {
  readonly label: string;
  readonly src?: string;
  readonly alt?: string;
}

export interface ProjectCaseStudy {
  readonly problem: string;
  readonly approach: string;
  readonly decisions: readonly ProjectDecision[];
  readonly privacyNote: string;
  readonly nextSteps: readonly string[];
  readonly outcome?: string;
  readonly backendNote?: string;
  readonly challenges?: readonly ProjectDecision[];
  readonly screenshots?: readonly ProjectScreenshot[];
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly kicker: string;
  readonly summary: string;
  readonly heroImage?: {
    readonly src: string;
    readonly alt?: string;
  };
  readonly evidenceStatus: ProjectEvidenceStatus;
  readonly role: string;
  readonly timeframe: string;
  readonly stack: readonly string[];
  readonly impactAreas: readonly ProjectImpactArea[];
  readonly highlights: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly caseStudy: ProjectCaseStudy;
  readonly featured: boolean;
  readonly projectType?: string;
  readonly surfaces?: readonly string[];
  readonly features?: readonly ProjectFeature[];
  readonly outcomes?: readonly string[];
  readonly talkingPoints?: readonly string[];
}
```

Notes:

- `ProjectEvidenceStatus` and `ProjectImpactArea` are strong candidates for backend enums.
- `heroImage` is optional.
- `projectType`, `surfaces`, `features`, `outcomes`, and `talkingPoints` are optional.
- `ProjectCaseStudy.outcome`, `backendNote`, `challenges`, `screenshots` are optional.
- There are no stored computed fields in the data itself.

Frontend-derived behavior:

- `ProjectDetailHero` falls back from `heroImage` to the first screenshot with a `src`.
- Homepage featured content is derived from a hard-coded slug order in the repository layer.

## 3. Full Field Inventory

### Top-Level `Project` Fields

#### `slug`

- Purpose: canonical route key and lookup key
- Example: `"mini-mart"`
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes, but with caution because routes depend on it

#### `title`

- Purpose: display name and detail page title
- Example: `"Mini Mart"`
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `kicker`

- Purpose: eyebrow/short label on cards and detail hero
- Example: `"Backend-focused practice project"`
- Required or optional: required in current UI
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `summary`

- Purpose: card summary, detail introduction, and metadata description
- Example: short descriptive paragraph
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `heroImage`

- Purpose: preferred detail-page banner image
- Example:

```ts
{
  src: "/projects/foo/banner.png",
  alt: "Foo preview"
}
```

- Required or optional: optional
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

Note:

- I did not find any current `heroImage:` entries in the project data file, so the detail UI mostly relies on screenshot fallback today.

#### `evidenceStatus`

- Purpose: status badge and project maturity signal
- Example: `"experiment"`
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `role`

- Purpose: role label on cards
- Example: `"Full-stack / Backend practice project"`
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `timeframe`

- Purpose: timeframe label
- Example: `"Personal project"`
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `stack`

- Purpose: technology chips
- Example:

```ts
["Node.js", "Express.js", "MongoDB", "JWT"]
```

- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `impactAreas`

- Purpose: semantic classification for the type of engineering evidence
- Example:

```ts
["backend-foundation", "workflow-design", "product-interface"]
```

- Required or optional: required in current data
- Store in DB: yes
- Frontend-only: not currently rendered, but not presentation-only
- Likely admin-editable later: yes

#### `highlights`

- Purpose: short summary bullets on project cards
- Example: three summary bullets
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `links`

- Purpose: external/live/GitHub links
- Example:

```ts
{
  label: "Visit Noonprep",
  href: "https://noonprep.com",
  kind: "live"
}
```

- Required or optional: required as an array, may be empty
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

Important UI note:

- The frontend takes the first non-`case-study` link as the external CTA.

#### `caseStudy`

- Purpose: main detail-page content block
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `featured`

- Purpose: semantic featured flag
- Example: `false`
- Required or optional: required
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

Important note:

- This is not enough by itself to reproduce homepage behavior. The frontend also uses manual featured ordering.

#### `projectType`

- Purpose: type capsule on the detail hero
- Example: `"Backend-focused full-stack practice"`
- Required or optional: optional
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `surfaces`

- Purpose: domain-facing list of product areas or interface surfaces
- Example:

```ts
[
  "Authentication flows",
  "Product catalog APIs",
  "User management APIs"
]
```

- Required or optional: optional
- Store in DB: yes
- Frontend-only: not currently rendered
- Likely admin-editable later: yes

#### `features`

- Purpose: detail-page feature inventory
- Required or optional: optional
- Store in DB: yes
- Frontend-only: no
- Likely admin-editable later: yes

#### `outcomes`

- Purpose: additional outcome bullets
- Required or optional: optional
- Store in DB: yes
- Frontend-only: not currently rendered
- Likely admin-editable later: yes

#### `talkingPoints`

- Purpose: recruiter/interview talking points
- Required or optional: optional
- Store in DB: yes
- Frontend-only: currently not rendered publicly
- Likely admin-editable later: yes

Potential future question:

- `talkingPoints` may eventually belong to a private/admin-only surface rather than the public API.

### Nested `ProjectCaseStudy` Fields

#### `problem`

- Purpose: first project context block
- Required or optional: required
- Store in DB: yes
- Likely admin-editable later: yes

#### `approach`

- Purpose: solution/context block
- Required or optional: required
- Store in DB: yes
- Likely admin-editable later: yes

#### `decisions`

- Purpose: "Core engineering decisions" list
- Shape:

```ts
{
  title: string;
  description: string;
}
```

- Required or optional: required
- Store in DB: yes
- Likely admin-editable later: yes

#### `privacyNote`

- Purpose: public-safety note for screenshots/content
- Required or optional: required in type
- Store in DB: yes
- Frontend-only: currently not rendered
- Likely admin-editable later: yes

#### `nextSteps`

- Purpose: future iteration notes
- Required or optional: required in type
- Store in DB: yes
- Frontend-only: currently not rendered
- Likely admin-editable later: yes

#### `outcome`

- Purpose: optional third context block
- Required or optional: optional
- Store in DB: yes
- Likely admin-editable later: yes

#### `backendNote`

- Purpose: integration or architecture note about the backend side
- Required or optional: optional
- Store in DB: yes
- Frontend-only: currently not rendered
- Likely admin-editable later: yes

#### `challenges`

- Purpose: "Challenges and tradeoffs" list
- Shape:

```ts
{
  title: string;
  description: string;
}
```

- Required or optional: optional
- Store in DB: yes
- Likely admin-editable later: yes

#### `screenshots`

- Purpose: detail hero fallback image source and future gallery content
- Shape:

```ts
{
  label: string;
  src?: string;
  alt?: string;
}
```

- Required or optional: optional
- Store in DB: yes
- Likely admin-editable later: yes

Important UI note:

- The frontend supports screenshot placeholders with no `src`.

### Nested `ProjectFeature`

- `name`: required, DB yes
- `roles`: required string array, DB yes
- `description`: required, DB yes
- `engineering`: required, DB yes

### Nested `ProjectLink`

- `label`: required, DB yes
- `href`: required, DB yes
- `kind`: required, DB yes

### Nested `ProjectDecision`

- `title`: required, DB yes
- `description`: required, DB yes

### Nested `ProjectScreenshot`

- `label`: required, DB yes
- `src`: optional, DB yes
- `alt`: optional, DB yes

## 4. Example Data

Representative complete object from `src/features/projects/data/projects.ts`:

```ts
{
  slug: "mini-mart",
  title: "Mini Mart",
  kicker: "Backend-focused practice project",
  summary:
    "A small e-commerce application built to strengthen backend fundamentals around REST APIs, JWT authentication, protected routes, product and user APIs, cart behavior, wishlist flows, and a dummy checkout journey.",
  evidenceStatus: "experiment",
  role: "Full-stack / Backend practice project",
  timeframe: "Personal project",
  projectType: "Backend-focused full-stack practice",
  stack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST APIs",
    "JavaScript",
    "Postman",
  ],
  impactAreas: [
    "backend-foundation",
    "workflow-design",
    "product-interface",
  ],
  surfaces: [
    "Authentication flows",
    "Product catalog APIs",
    "User management APIs",
    "Cart and wishlist flows",
    "Dummy checkout flow",
  ],
  highlights: [
    "Built REST API foundations for product and user management with Node.js and Express.",
    "Implemented JWT authentication and protected-route behavior for account-aware flows.",
    "Modeled practical e-commerce workflows including cart, wishlist, and checkout-ready state transitions.",
  ],
  features: [
    {
      name: "JWT authentication and protected access",
      roles: ["Users"],
      description:
        "Users can move through account-aware flows where protected actions depend on authenticated access.",
      engineering:
        "JWT-based authentication, protected route handling, request validation thinking, and separation between public and account-owned actions.",
    },
    {
      name: "Product and user API foundations",
      roles: ["Users", "System"],
      description:
        "The app exposes basic commerce data through API-driven product and user flows rather than static local-only UI state.",
      engineering:
        "Node.js and Express route structure, MongoDB-backed persistence, RESTful endpoint design, and Postman-driven API testing.",
    },
    {
      name: "Cart and wishlist behavior",
      roles: ["Users"],
      description:
        "Users can work with store-like actions such as saving products, building a cart, and moving through purchase preparation.",
      engineering:
        "User-owned state modeling, relationship boundaries between products and accounts, and state transitions that mirror practical e-commerce behavior.",
    },
    {
      name: "Dummy checkout flow",
      roles: ["Users"],
      description:
        "Checkout is represented as a safe practice flow so the project can exercise order-like movement without pretending to be a production payment system.",
      engineering:
        "Scoped checkout modeling, payload-shape discipline, and intentionally limited transaction behavior for a portfolio-safe backend practice project.",
    },
  ],
  outcomes: [
    "Created a practical backend-focused project for exercising authentication, API design, and e-commerce workflow modeling.",
    "Strengthened Node.js, Express.js, MongoDB, JWT, REST API, and Postman fundamentals.",
    "Added clearer backend evidence for junior backend and intern-role applications.",
  ],
  talkingPoints: [
    "Built a small e-commerce backend around Node.js, Express.js, MongoDB, and JWT.",
    "Practiced protected routes, account-aware flows, product and user API design, and cart or wishlist behavior.",
    "Used the project as backend-focused evidence alongside production frontend and API integration experience.",
  ],
  links: [],
  caseStudy: {
    problem:
      "Small commerce systems are useful backend practice because they force real product concerns into a manageable scope: authentication, product data, user-owned state, cart behavior, wishlist actions, and checkout boundaries.",
    approach:
      "Mini Mart models a compact store experience around REST APIs, JWT authentication, MongoDB persistence, protected routes, product and user endpoints, cart and wishlist flows, and a dummy checkout journey. The goal is not to overstate the project as a production marketplace, but to show practical backend foundations through a familiar product domain.",
    decisions: [
      {
        title: "Use JWT authentication for account-aware flows",
        description:
          "Authentication gives the project a real backend boundary: some actions can stay public, while user-specific actions require protected access.",
      },
      {
        title: "Keep the API RESTful and explicit",
        description:
          "Products, users, cart actions, wishlist actions, and checkout behavior are easier to reason about when the endpoint structure mirrors the product workflow.",
      },
      {
        title: "Model commerce around user-owned state",
        description:
          "Cart and wishlist flows make the backend more meaningful because data belongs to a user and has to stay consistent across requests.",
      },
      {
        title: "Scope checkout as a dummy flow",
        description:
          "The checkout flow supports learning around payloads and state transitions without claiming payment processing or production-grade transaction handling.",
      },
    ],
    challenges: [
      {
        title: "Scope control",
        description:
          "The project is intentionally small, so the value comes from clear backend foundations instead of trying to simulate a full enterprise commerce platform.",
      },
      {
        title: "Auth and state boundaries",
        description:
          "User-specific behavior needs careful separation from public product browsing so protected state does not leak into unauthenticated flows.",
      },
      {
        title: "Practice project limits",
        description:
          "Because this is a personal backend practice project, the public case study should stay honest about what is implemented and avoid presenting it as production infrastructure.",
      },
    ],
    outcome:
      "Mini Mart gives the portfolio a direct backend-focused case study that complements stronger frontend-led projects with practical evidence of API design, authentication, persistence, and workflow modeling.",
    backendNote:
      "Mini Mart is represented as a backend-focused personal project rather than a production system. The public case study stays intentionally scoped to the confirmed CV details.",
    privacyNote:
      "Use sample data only. Do not expose tokens, credentials, database URLs, private environment values, or personal user data.",
    screenshots: [
      { label: "Authentication and account flow" },
      { label: "Product catalog or API-backed product list" },
      { label: "Cart and wishlist flow" },
      { label: "Dummy checkout state" },
    ],
    nextSteps: [
      "Add demo screenshots or API documentation snapshots when available.",
      "Document the data model and endpoint boundaries more deeply if the backend repo is reviewed later.",
      "Add repository or live demo links once a public-safe version is ready.",
    ],
  },
  featured: false,
}
```

Notes:

- This is a strong representative example because it includes many of the optional arrays and nested structures.
- Some other project records contain real image `src` values inside `caseStudy.screenshots`.
- `links` can be empty.

## 5. Frontend Usage

### Route Patterns

- Work index route: `/work`
- Work detail route: `/work/[slug]`
- Slug is the canonical public lookup key.

Source:

```ts
export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}
```

Metadata usage:

```ts
return {
  title: `${project.title} | Work | DevIyke Labs`,
  description: project.summary,
};
```

### Pages and Components That Consume Project Data

- Homepage: `src/app/page.tsx` via `SelectedWorkSection`
- Work page: `src/app/work/page.tsx`
- Work detail page: `src/app/work/[slug]/page.tsx`

### Fields Used on Project Cards

Source: `src/features/projects/components/ProjectCard.tsx`

Used fields:

- `slug`
- `kicker`
- `title`
- `evidenceStatus`
- `summary`
- `role`
- `timeframe`
- `highlights`
- `stack`
- `links` only to find the first non-`case-study` external link

Card behavior:

- Builds case study link as `/work/${project.slug}`
- Shows first non-`case-study` link as external CTA if available

### Fields Used on Project Detail Hero

Source: `src/features/projects/components/ProjectDetailHero.tsx`

Used fields:

- `links`
- `caseStudy.screenshots`
- `heroImage`
- `title`
- `evidenceStatus`
- `timeframe`
- `projectType`
- `kicker`
- `summary`
- `stack`

Important hero behavior:

- `heroImage` is preferred
- otherwise the first screenshot with a `src` is used
- otherwise a visual placeholder is rendered

### Fields Used on Project Detail Body

Source: `src/features/projects/components/ProjectDetailBody.tsx`

Used fields:

- `caseStudy.problem`
- `caseStudy.approach`
- `caseStudy.outcome`
- `features`
- `caseStudy.decisions`
- `caseStudy.challenges`

### Fields Used for Featured Sections

Homepage selected work:

- `SelectedWorkSection` calls `getFeaturedProjects()`
- That helper uses a hard-coded slug order, not just `featured: true`

### Fields Used for Filtering, Sorting, SEO, or Navigation

Currently used for navigation or SEO:

- `slug`
- `title`
- `summary`

Current sorting/filtering state:

- No filtering UI exists yet
- No dynamic sorting UI exists yet
- `/work` currently uses the array order from `projects.ts`

### Fields Present in Data but Not Currently Rendered

These appear to be meaningful domain data, not dead fields:

- `impactAreas`
- `surfaces`
- `outcomes`
- `talkingPoints`
- `caseStudy.privacyNote`
- `caseStudy.backendNote`
- `caseStudy.nextSteps`
- most `caseStudy.screenshots` beyond the first one with `src`

## 6. Backend API Implications

Recommended v1 endpoints:

- `GET /api/v1/projects`
- `GET /api/v1/projects/:slug`

Useful query params for `GET /api/v1/projects`:

- `featured=true|false`
- `status=shipped|active-build|experiment`
- `limit=4`
- `orderBy=displayOrder|title|createdAt`

Optional future query params:

- `impactArea=backend-foundation`
- `slugIn=a,b,c` if you ever need curated frontend ordering from the backend
- `include=detail` if you later want lighter list payloads

### Suggested Response Shape for `GET /api/v1/projects`

Current frontend could consume the full project payload safely because the project count is still small.

Example:

```ts
{
  success: true,
  data: [
    {
      slug: "mini-mart",
      title: "Mini Mart",
      kicker: "Backend-focused practice project",
      summary: "...",
      heroImage: null,
      evidenceStatus: "experiment",
      role: "Full-stack / Backend practice project",
      timeframe: "Personal project",
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST APIs",
        "JavaScript",
        "Postman"
      ],
      impactAreas: [
        "backend-foundation",
        "workflow-design",
        "product-interface"
      ],
      highlights: ["...", "...", "..."],
      links: [],
      featured: false,
      projectType: "Backend-focused full-stack practice"
    }
  ]
}
```

### Suggested Response Shape for `GET /api/v1/projects/:slug`

- Return the full project object expected by the detail page.

Example:

```ts
{
  success: true,
  data: {
    // full Project object
  }
}
```

Recommended backend ordering support:

- `featured: boolean`
- `featuredOrder: number | null`
- `displayOrder: number | null`

That would let the backend own:

- homepage selected work ordering
- `/work` page ordering

without relying on frontend-only repository logic.

## 7. Prisma Model Proposal

Recommended v1 direction:

- One main `Project` model
- Preserve the current response shape as closely as practical
- Use enums for strong controlled values
- Avoid over-normalizing too early

### Suggested Main `Project` Fields for V1

- `id`
- `slug` unique
- `title`
- `kicker`
- `summary`
- `heroImageSrc` nullable
- `heroImageAlt` nullable
- `evidenceStatus` enum
- `role`
- `timeframe`
- `projectType` nullable
- `featured` boolean
- `featuredOrder` nullable
- `displayOrder` nullable
- `problem`
- `approach`
- `outcome` nullable
- `backendNote` nullable
- `privacyNote`
- `createdAt`
- `updatedAt`

### V1 Fields To Implement Now

- Everything currently rendered publicly
- `privacyNote`
- `nextSteps`
- `impactAreas`
- `surfaces`
- `featuredOrder`
- `displayOrder`

### Fields That May Belong in Related Tables Later

- `stack`
- `highlights`
- `links`
- `features`
- `decisions`
- `challenges`
- `screenshots`
- `nextSteps`
- `surfaces`
- `outcomes`
- `talkingPoints`

### Fields That Can Be JSON in V1

To move faster without overengineering, these can safely be JSON fields for now:

- `stack`
- `impactAreas`
- `highlights`
- `surfaces`
- `outcomes`
- `talkingPoints`
- `links`
- `features`
- `decisions`
- `challenges`
- `screenshots`
- `nextSteps`

Why JSON is reasonable for v1:

- The frontend already consumes nested arrays directly.
- There is no current relational admin editor.
- Seed migration will be much simpler.
- The project count is still small.
- You can normalize later if admin workflows or filtering needs grow.

### Suggested Enums

```prisma
enum ProjectEvidenceStatus {
  SHIPPED
  ACTIVE_BUILD
  EXPERIMENT
}

enum ProjectImpactArea {
  FRONTEND_ARCHITECTURE
  PRODUCT_INTERFACE
  BACKEND_FOUNDATION
  WORKFLOW_DESIGN
  PERFORMANCE_ACCESSIBILITY
}
```

Note:

- If `impactAreas` stays JSON in v1, the Prisma enum may be deferred.

## 8. Seed Strategy

The current frontend project array can be converted directly into `prisma/seed.ts`.

Recommended steps:

1. Copy the project objects from `src/features/projects/data/projects.ts`
2. Convert them into backend seed payloads
3. Normalize enum values if using Prisma enums
4. Convert optional fields into consistent `null` or empty arrays
5. Preserve slug values exactly
6. Set ordering fields explicitly during seed

### Fields That Need Normalization

- `evidenceStatus` if converting to enum casing
- `impactAreas` if converting to enum casing
- `heroImage` if splitting into scalar DB columns

### Order Preservation

Because the frontend currently depends on order in two ways:

- `/work` uses the array order directly
- homepage featured uses explicit slug ordering

the backend seed should include:

- `displayOrder`
- `featuredOrder`

### Asset URL Concerns

Current image paths are frontend-relative public asset paths, for example:

- `/projects/dev-iyke-labs/dev-iyke-labs-banner.png`

V1 recommendation:

- Store them as strings exactly as they are
- Let the frontend keep using them unchanged

Future recommendation:

- If assets move to a CDN or object storage later, only the stored URL values need to change

### Screenshot Placeholder Support

The backend should preserve screenshot entries with no `src`, because the frontend already supports them.

## 9. Risks And Questions

These are the main modeling decisions worth discussing before building the backend `Project` model:

- Should homepage featured order be controlled by:
  - `featured + featuredOrder`
  - or a separate curated homepage collection?
- Should `/work` page ordering be:
  - manual `displayOrder`
  - created date
  - title
  - or something else?
- Should `talkingPoints` stay public, or eventually move to an admin-only/private field?
- Does `impactAreas` need to be queryable in v1?
  - if yes, JSON may become limiting later
- Should `features.roles` remain free-text strings, or eventually become structured enums?
- Should `heroImage` stay separate from screenshots, or should media eventually be unified?
- Should the backend return full project payloads even in the list endpoint?
  - today that is acceptable
  - later summary/detail DTO split may be cleaner
- Are `privacyNote`, `backendNote`, `nextSteps`, `outcomes`, and `surfaces` all intended for the public API from day one?
- Should `projectType` remain free-text or become a controlled category field?

## 10. Practical Recommendation For Backend V1

- Use `slug` as the public lookup key.
- Add `featuredOrder` and `displayOrder`.
- Preserve the current frontend response shape as much as possible.
- Keep nested repeatable content as JSON initially unless there is a strong reason to normalize now.
- Build:
  - `GET /api/v1/projects`
  - `GET /api/v1/projects/:slug`
- Seed directly from the current frontend data.

## 11. Relevant File Paths

- `src/features/projects/data/projects.ts`
- `src/features/projects/types/project.ts`
- `src/features/projects/repositories/projectsRepository.ts`
- `src/app/work/page.tsx`
- `src/app/work/[slug]/page.tsx`
- `src/features/projects/components/SelectedWorkSection.tsx`
- `src/features/projects/components/WorkIndexGrid.tsx`
- `src/features/projects/components/WorkIndexHero.tsx`
- `src/features/projects/components/ProjectCard.tsx`
- `src/features/projects/components/ProjectDetailHero.tsx`
- `src/features/projects/components/ProjectDetailBody.tsx`
- `src/features/projects/components/ProjectFeatureInventory.tsx`
- `src/features/projects/components/ProjectStatusBadge.tsx`
- `src/features/projects/components/TechnologyList.tsx`

