# Portfolio Case Study Report

## Basic Info
- Project name: JOOAV ERP Admin
- Product/surface analyzed: Admin and operations dashboard for inventory, catalog, users, procurement, orders, and payment operations.
- Suggested portfolio title: JOOAV ERP Admin Dashboard
- Suggested slug: `jooav-erp-admin-dashboard`
- Project type: frontend-only, backend-integrated
- Status: private/in progress
- My role: Frontend engineer / admin dashboard implementation
- Team context if known: Not inferable from this repo.
- Timeline if inferable: Not inferable from this repo.
- Live URL if present: Not present.
- GitHub visibility: Private.

## Product Surface / Repo Context
- Surface represented by this repo: Internal admin and operations dashboard.
- User roles supported in this repo: `SUPER_ADMIN`, `ADMIN`, `PROCUREMENT_OFFICER`, and `WHOLESALER` references.
- Does this appear to be part of a larger product ecosystem? Yes. The repo consumes a separate backend API and references wholesaler/user-facing behavior.
- Related repo likely needed: yes.
- If yes, what related surface should be analyzed next? Backend/API service, plus any wholesaler/customer-facing ordering surface if it exists.
- Notes on how this repo connects to other surfaces: This dashboard manages catalog data, operational users, procurement workflows, payment verification, and order states that likely originate from a customer or wholesaler-facing product.

## One-line Summary
Built a role-aware ERP admin dashboard for managing retail inventory, catalog entities, users, procurement assignments, orders, and payment operations.

## Short Portfolio Description
JOOAV ERP Admin is an internal operations dashboard for managing inventory-heavy retail workflows across catalog, user, order, and procurement teams. The frontend is built with Next.js, TypeScript, React Query, Redux Toolkit, Tailwind CSS, shadcn/Radix UI primitives, and a typed API service layer connected to a separate backend.

## Problem / Product Context
The product appears to solve the operational challenge of managing products, manufacturers, brands, variants, categories, users, stock exceptions, and order fulfillment from one controlled dashboard. It gives admins and procurement officers role-specific tools for handling catalog setup, order processing, assignment, payment confirmation, and issue resolution without exposing backend or business internals publicly.

## My Contribution
- Implemented a feature-based Next.js App Router dashboard structure.
- Built role-aware navigation and screens for admins and procurement officers.
- Created reusable dashboard primitives for tables, drawers, filters, stats, loading states, empty states, confirmations, and upload flows.
- Integrated API calls through Axios, React Query hooks, cache invalidation helpers, and mutation feedback toasts.
- Built form-heavy workflows using React Hook Form and Zod validation.
- Implemented catalog CRUD screens for products, manufacturers, brands, variants, and categories.
- Implemented operational order workflows, including draft orders, item status updates, procurement assignment/response, manual payment confirmation, and fulfilled-order views.
- Added auth flows for super admin, admin, procurement officer, reset password, token persistence, and session hydration.

## Frontend Engineering Highlights
- UI architecture: Feature-based modules under `src/features`, reusable UI primitives under `src/components`, and shared hooks/providers under `src/lib` and `src/hooks`.
- Component structure: Reusable `DataTable`, grouped tables, `DashboardDrawer`, filters, stats cards, skeletons, empty states, image upload boxes, and role dropdown components.
- Routing: Next.js App Router with auth route group, dashboard layout, role-specific login pages, dashboard pages, and payment verification page.
- State/data flow: React Query handles server state, cache keys, retries, stale times, and invalidation. Redux Toolkit stores authenticated user/session state.
- Forms: React Hook Form plus Zod powers login, reset password, user, product, order, catalog, and profile forms.
- API integration: Axios instance centralizes base URL, auth token attachment, refresh-token handling, mutation toasts, and status-specific error handling.
- Responsiveness: Dashboard shell supports collapsible/mobile sidebar, responsive grids, drawer workflows, and wrapped filter/action bars.
- Design system/styling: Tailwind CSS v4 with semantic design tokens, local brand font, Radix/shadcn-style primitives, Lucide icons, and consistent operational UI styling.
- Accessibility: Uses semantic inputs, labels, `aria-invalid`, checkbox labels, button states, and accessible Radix primitives.
- Performance: React Query caching, skeleton loaders, debounced search, paginated query parameters, lazy detail views through drawers, and reusable mutation invalidation reduce unnecessary UI work.

## Backend / API / Data Integration
This repo does not contain backend/database code. It integrates with a separate backend through environment-configured Axios requests. The frontend is structured around typed service modules per feature, including auth, users, products, brands, categories, variants, manufacturers, uploads, orders, dashboard stats, and out-of-stock reports. The backend/API repo is needed for a full end-to-end case study.

## Role-Based / Multi-Surface Functionality
- Super admin/admin users can access dashboard stats, catalog management, users, roles/permissions, orders, fulfilled orders, and profile management.
- Procurement officers see a narrower operational surface focused on order logs and fulfilled orders.
- The sidebar hides catalog, dashboard overview, and user management for procurement officers.
- Dashboard order pages switch between admin and procurement-specific components based on the authenticated user role.
- Procurement officers can update availability and respond to assigned orders.
- Wholesaler appears as an operational/customer role referenced in users, orders, and assignment flows, but this repo does not include a wholesaler-facing app.

## Technical Stack
- Framework: Next.js 16 App Router, React 19, TypeScript.
- Styling/UI: Tailwind CSS v4, custom design tokens, Radix UI primitives, shadcn-style components, Lucide React, local fonts.
- State/data fetching: TanStack React Query, Redux Toolkit, React Redux, Axios.
- Forms/validation: React Hook Form, Zod, `@hookform/resolvers`.
- Backend/API: External REST API consumed by feature service hooks.
- Database/storage: Not present in this repo; file/image uploads are sent to backend upload endpoints.
- Tooling: ESLint, Jest, React Testing Library, jsdom, TypeScript, Next config with React Compiler.

## Feature Inventory
### Authentication and Session Management
- User roles: Super admin, admin, procurement officer.
- What it does: Role-specific login, password reset, token storage, refresh handling, logout, and current-user hydration.
- Screens/components: `/super-admin/login`, `/admin/login`, `/procurement-officer/login`, `/reset-password`, `LoginForm`, `ForgotPasswordForm`, `ResetPasswordForm`, `useAuthHydration`.
- Integration: Admin auth login/me/refresh/logout endpoints, cookies, JWT decode, Redux auth slice.
- Portfolio-safe description: Built secure admin authentication UX with role-aware routing and session hydration.

### Dashboard Overview
- User roles: Admin and super admin.
- What it does: Shows revenue/transaction, completed orders, live products, user stats, active orders, recent users, and out-of-stock reports.
- Screens/components: `/dashboard`, `DashboardStatsCard`, `DashboardActiveOrders`, `DashboardOutOfStock`, `DashboardUsers`.
- Integration: Dashboard stats query and out-of-stock report query.
- Portfolio-safe description: Built an executive operations overview with cached stats, loading states, and exception monitoring.

### Product Catalog Management
- User roles: Admin and super admin.
- What it does: Manage products, manufacturers, brands, variants, categories, subcategories, pack sizes/types, product media, statuses, and bulk operations.
- Screens/components: `/dashboard/product`, `/dashboard/manufacturer`, `/dashboard/brand`, `/dashboard/variant`, `/dashboard/category`, related feature forms/page components.
- Integration: Feature-specific query/mutation hooks, multipart form uploads, CSV bulk upload, template download, status and bulk mutation APIs.
- Portfolio-safe description: Built a scalable catalog administration system with entity-specific forms, search/filtering, media upload, and bulk import support.

### Order Management
- User roles: Admin, super admin, procurement officer.
- What it does: Create draft orders, add/update/remove order items, proceed to manual payment, confirm payment, group order items, update item statuses, assign procurement officers, and manage fulfilled orders.
- Screens/components: `/dashboard/order-logs`, `/dashboard/fulfilled-orders`, `OrderLogsPageComponent`, `ProcurementOrderLogsPageComponent`, `OrderCard`, `OrdersGroupedTable`, `OrderForm`, `FormOrderList`, `ManualPaymentScreen`.
- Integration: Orders query/stats hooks, create/update/cancel, item status updates, bulk item updates, procurement assignment, officer response, payment initiation and verification.
- Portfolio-safe description: Implemented a complex operational order workflow spanning draft creation, payment confirmation, assignment, and fulfillment tracking.

### Procurement Workflow
- User roles: Procurement officer, admin/super admin.
- What it does: Admins assign officers; officers accept/decline assigned work, update availability, and process relevant order views.
- Screens/components: procurement-specific order logs/fulfilled logs, `SidebarDropdown`, `OrderCard`.
- Integration: Officer availability, assignment, auto-assignment, and assignment response mutations.
- Portfolio-safe description: Built role-specific procurement workflows that adapt the UI and available actions based on operational responsibility.

### User and Role Management
- User roles: Admin and super admin.
- What it does: Create/update/delete users, filter by role, group users by role, bulk-delete users, generate reset links, and share reset links.
- Screens/components: `/dashboard/users`, `/dashboard/roles-and-permissions`, `UserPageComponent`, `RolesAndPermissionsPageComponent`, `UserForm`, `UsersGroupedDataTable`, `CopyLinkBox`.
- Integration: Users query/stats hooks, create/update/delete, reset-token regeneration, role filters.
- Portfolio-safe description: Built administrative user management with grouped role views, bulk actions, and onboarding reset-link flows.

### Uploads and Bulk Imports
- User roles: Admin and super admin.
- What it does: Upload product media and import catalog data from CSV/XLSX files.
- Screens/components: `ImageUploadBox`, `CSVUpload`, `FileUploadArea`, `FileUploadList`, `useBulkTabSetup`, upload hooks.
- Integration: Multipart file upload and bulk catalog upload endpoints.
- Portfolio-safe description: Built reusable upload workflows for both media-rich product forms and catalog-scale imports.

### Payment Verification
- User roles: Admin/super admin, system callback surface.
- What it does: Reads a payment reference from the URL, verifies payment, and updates user-facing verification state.
- Screens/components: `/payment-verification`, `PaymentVerificationPageComponent`.
- Integration: Order payment verification mutation.
- Portfolio-safe description: Added a lightweight verification surface for payment confirmation handoff.

## Key Engineering Decisions
### Decision: Feature-based module structure
- Why it mattered: The app has many operational domains, so feature folders keep service hooks, forms, types, and page components close together.
- Result: Catalog, orders, users, auth, uploads, and dashboard code can evolve independently.

### Decision: React Query for server state and Redux for auth/session state
- Why it mattered: API data needs caching and invalidation, while current-user session state needs app-wide access.
- Result: Data-heavy screens remain responsive while auth-driven UI decisions stay centralized.

### Decision: Centralized Axios client with token refresh and toast handling
- Why it mattered: Every feature depends on authenticated backend calls and consistent feedback.
- Result: Request auth, refresh retry, mutation success/error messaging, and status-specific error behavior are handled once.

### Decision: Role-aware UI composition
- Why it mattered: Admins and procurement officers use different dashboard surfaces and actions.
- Result: Navigation, dashboard routes, order components, and available actions adapt to the authenticated role.

### Decision: Drawer-based operational workflows
- Why it mattered: Admin users need to inspect and act on dense data without losing list context.
- Result: Create/edit/detail/payment/order-item flows happen in focused side drawers while preserving the table/list view.

### Decision: Reusable bulk import and table patterns
- Why it mattered: Catalog entities share search, filters, stats, empty states, bulk delete, import, and pagination patterns.
- Result: Less repeated UI logic and a more consistent admin experience across entity modules.

## Challenges and Tradeoffs
- Multi-role complexity: The UI must keep admin and procurement actions separate. Current approach uses role wrappers and conditional components; longer-term permission metadata from the backend would make this more scalable.
- Dense operational data: Orders and catalog screens have many fields and statuses. Drawers and grouped cards help, but careful mobile QA is important.
- File upload reliability: Product drafts intentionally avoid silently reusing reconstructed files, requiring users to reselect images after draft restoration.
- API contract dependence: The repo is frontend-only, so some behavior depends on backend response shapes and status enums.
- Testing freshness: Jest/RTL tests exist for auth, but at least one older integration test appears out of sync with the current `LoginForm` contract.
- Documentation drift: README mentions Next.js v15+ while `package.json` uses Next.js 16.

## Performance / Scalability Notes
- Query keys include filters, search, page, status, and role values for targeted caching.
- Mutations invalidate focused query keys after writes.
- Search inputs are debounced before triggering API requests.
- Tables and dashboards include skeleton and empty states.
- Server-side pagination parameters are wired in service query functions.
- Shared table, grouped table, drawer, filter, upload, and stats components reduce maintenance cost.
- React Compiler is enabled in Next config.

## Screenshots Needed
- Dashboard overview with stats, active orders, out-of-stock reports, and recent users using demo data.
- Product management table with filters, stats, and drawer open.
- Product form showing catalog relationships and image upload slots.
- Bulk import drawer for product/brand/category CSV upload.
- Order management page with grouped order cards and status tags.
- Order drawer showing order details and manual payment confirmation.
- Procurement officer order view showing accept/decline or assigned-work state.
- Roles and permissions grouped user table.
- Mobile sidebar/dashboard view.
- Blur or replace customer names, emails, phone numbers, delivery addresses, order numbers, payment references, and any real financial values.

## Safe Case Study Content
### Overview
JOOAV ERP Admin is a private operations dashboard for managing inventory, catalog setup, users, procurement workflows, orders, and payment confirmation. The project focuses on turning complex retail operations into a structured, role-aware admin experience.

### Role
I worked on the frontend architecture and implementation, including route structure, reusable dashboard components, API integration hooks, role-aware UI behavior, data-heavy tables, forms, uploads, and order workflow screens.

### Problem
Retail operations teams need a reliable internal tool for maintaining catalog data, monitoring order activity, assigning procurement work, handling exceptions, and confirming payment/fulfillment states. The challenge was to support multiple operational roles while keeping workflows discoverable and efficient.

### Solution
The app uses a feature-based Next.js architecture with React Query-powered service modules, Redux-backed auth state, and a reusable dashboard component system. Admins manage catalog and user records through searchable, filterable screens and drawer-based forms, while procurement officers receive a focused workflow for assigned order processing.

### Engineering Decisions
I separated server state from session state, centralized API behavior in a shared Axios client, reused table/drawer/upload patterns across modules, and encoded role-aware navigation and screens around the authenticated user. For catalog workflows, I used multipart forms and reusable bulk-import UI; for orders, I modeled the flow as drawer states that move from form entry to item review to payment confirmation.

### Outcome
The result is a portfolio-worthy admin dashboard with meaningful product complexity: multi-role access, catalog CRUD, bulk imports, media uploads, user management, order operations, procurement assignment, payment verification, caching, loading states, and a custom design-token-driven UI system.

## Portfolio Strength Rating
- Visual presentation: 4/5
- Frontend engineering depth: 4.5/5
- Backend/API integration depth: 4/5
- Product complexity: 4.5/5
- Case-study strength: 4.5/5
- Hiring relevance: 4.5/5

### What should be emphasized on the portfolio
- Multi-role admin dashboard design.
- Order/procurement workflow complexity.
- Catalog management with bulk import and media upload.
- React Query API architecture and cache invalidation.
- Reusable dashboard primitives and design-token system.

### What should be kept brief
- Exact API routes and backend implementation details.
- Internal names, operational metrics, and real customer/order data.
- Incomplete or stale test details.

### What should not be shown publicly
- `.env.local`, secrets, API base URLs, real tokens, private backend URLs.
- Real user emails, phone numbers, delivery addresses, reset links, payment references, or order identifiers.
- Sensitive business rules or backend-only strategy not visible in demo data.

## Recruiter-Friendly Talking Points
- Built a role-aware dashboard where admins and procurement officers see different navigation, screens, and available actions.
- Used React Query to model server state across catalog, users, orders, uploads, dashboard stats, and procurement workflows.
- Centralized Axios auth behavior with token attachment, refresh-token retry, and consistent mutation feedback.
- Created reusable table, grouped table, drawer, filter, skeleton, empty-state, and upload components for a consistent admin UX.
- Implemented multipart product forms with image management, catalog relationships, validation, and draft restoration behavior.
- Built a complex order workflow from draft creation to item review, payment confirmation, procurement assignment, and fulfilled-order tracking.
- Added bulk import flows for catalog operations, reducing repetitive manual data entry.
- Used design tokens and Radix/shadcn-style primitives to keep the UI maintainable and consistent.

## Suggested Project Data Object
```ts
{
  title: "JOOAV ERP Admin Dashboard",
  slug: "jooav-erp-admin-dashboard",
  summary: "A role-aware ERP admin dashboard for inventory, catalog, user, procurement, order, and payment operations.",
  description: "Built a private operations dashboard for retail inventory management with multi-role workflows, catalog CRUD, bulk imports, media uploads, order processing, procurement assignment, and payment verification.",
  role: "Frontend engineer",
  projectType: "Frontend-only, backend-integrated admin dashboard",
  status: "Private / in progress",
  featured: true,
  timeline: "Not publicly specified",
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Radix UI",
    "shadcn-style components",
    "TanStack React Query",
    "Redux Toolkit",
    "Axios",
    "React Hook Form",
    "Zod",
    "Jest",
    "React Testing Library"
  ],
  surfaces: [
    "Admin dashboard",
    "Super admin dashboard",
    "Procurement officer dashboard",
    "Payment verification page"
  ],
  highlights: [
    "Role-aware navigation and dashboard surfaces",
    "Catalog CRUD across products, manufacturers, brands, variants, and categories",
    "Order workflow with draft creation, item status updates, payment confirmation, and fulfillment tracking",
    "Procurement assignment and officer response flow",
    "Bulk CSV/XLSX import and multipart media upload",
    "Reusable operational UI system with drawers, grouped tables, filters, stats, skeletons, and empty states"
  ],
  engineeringDecisions: [
    "Feature-based architecture for domain separation",
    "React Query for server state and cache invalidation",
    "Redux Toolkit for authenticated user/session state",
    "Centralized Axios client for auth, refresh, errors, and mutation feedback",
    "Drawer-based workflows to keep users in context",
    "Design-token-driven Tailwind system for consistent admin UI"
  ],
  outcomes: [
    "Delivered a scalable internal dashboard architecture",
    "Reduced repeated dashboard UI through reusable table, drawer, filter, and upload primitives",
    "Supported different operational roles in one codebase",
    "Created portfolio-ready examples of complex frontend/API integration"
  ],
  links: {
    live: null,
    github: null
  },
  screenshots: [
    "Dashboard overview with demo data",
    "Product catalog table",
    "Product form with media upload",
    "Bulk import drawer",
    "Order management grouped cards",
    "Manual payment confirmation drawer",
    "Procurement officer order view",
    "Roles and permissions grouped users",
    "Mobile dashboard/sidebar"
  ],
  caseStudySections: {
    overview: "Private ERP admin dashboard for inventory, catalog, user, procurement, order, and payment operations.",
    role: "Frontend architecture and implementation.",
    problem: "Operations teams needed one controlled dashboard for managing complex retail inventory and fulfillment workflows.",
    solution: "Built a feature-based Next.js dashboard with role-aware routing, reusable operational UI, typed service hooks, validated forms, uploads, and cache-aware API integration.",
    outcome: "A strong portfolio project demonstrating multi-role product complexity, admin UX, and frontend/backend integration."
  },
  features: [
    "Authentication and session hydration",
    "Dashboard stats and operational overview",
    "Product/catalog management",
    "Bulk imports and media uploads",
    "User and role management",
    "Order creation and processing",
    "Procurement assignment workflow",
    "Payment verification",
    "Profile management"
  ]
}
```
