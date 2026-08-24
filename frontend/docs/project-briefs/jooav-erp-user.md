# Portfolio Case Study Report

## Basic Info
- Project name: Jooav ERP Frontend
- Product/surface analyzed: Wholesaler-facing FMCG marketplace and dashboard frontend
- Suggested portfolio title: JOOAV ERP Marketplace and Inventory Dashboard
- Suggested slug: jooav-erp-marketplace-dashboard
- Project type: frontend-only, API-integrated
- Status: in progress / private product surface
- My role: Frontend engineer, inferred from the repo scope
- Team context if known: Not inferable from this repo
- Timeline if inferable: Not safely inferable; repository files suggest active work across late 2025 to early 2026
- Live URL if present: Not present in the repo
- GitHub visibility: Not inferable; package is marked private

## Product Surface / Repo Context
- Surface represented by this repo: A Next.js frontend for product discovery, wholesale ordering, checkout, payment verification, order tracking, and inventory reorder workflows.
- User roles supported in this repo: The type model includes `CUSTOMER` and `WHOLESALER`. The visible product flows primarily support an authenticated wholesaler/customer buying experience. Admin and procurement officer data appears in response types, but admin/procurement management screens are not implemented in this repo.
- Does this appear to be part of a larger product ecosystem? Yes.
- Related repo likely needed: yes
- If yes, what related surface should be analyzed next? The backend/API service, plus any admin or procurement operations dashboard that manages products, order assignment, fulfillment, users, and payment reconciliation.
- Notes on how this repo connects to other surfaces: This frontend depends on external API endpoints for authentication, product catalog, categories, orders, draft carts, checkout initiation, payment verification, and out-of-stock reporting. The frontend models operational concepts such as procurement officers and order assignment status, which implies another internal/admin surface exists or is planned.

## One-line Summary
A responsive B2B FMCG marketplace and inventory dashboard that helps wholesalers browse products, build draft orders, check out, track fulfillment, and reorder completed inventory.

## Short Portfolio Description
JOOAV ERP Frontend is an API-integrated marketplace and dashboard for wholesale FMCG purchasing. The product combines public product discovery with authenticated order, payment, inventory, and reorder workflows, giving buyers a structured way to restock inventory and manage procurement activity from one interface.

## Problem / Product Context
The project appears to solve a wholesale restocking problem: buyers need to discover products quickly, place bulk orders, recover cart intent after authentication, pay securely, and monitor order progress after checkout. The frontend also supports inventory continuity by turning completed orders into reorder and out-of-stock reporting workflows.

## My Contribution
- Built or contributed to the Next.js App Router frontend for the marketplace, dashboard, auth, checkout, and order flows.
- Implemented feature-based frontend modules for auth and marketplace workflows.
- Integrated frontend screens with backend APIs using Axios and TanStack Query.
- Managed authenticated user state, draft cart references, and cart/order UI state with Redux Toolkit.
- Built form validation with React Hook Form and Zod for login, registration, password reset, and forgot password flows.
- Implemented responsive product grids, product detail views, cart drawers, checkout summaries, order tables, loading skeletons, empty states, and status tags.
- Added token hydration and refresh-token handling around authenticated API requests.
- Added unit/integration test scaffolding for auth flows.

## Frontend Engineering Highlights
- UI architecture: Feature-based organization under `src/features`, shared UI primitives under `src/components/ui`, and reusable general components under `src/components/general`.
- Component structure: Product cards, order cards, grouped order tables, skeleton loaders, cart drawer content, search controls, category navigation, and form components are separated into reusable pieces.
- Routing: Uses Next.js App Router with grouped auth routes, public marketplace routes, product detail routes, authenticated dashboard routes, checkout completion, payment verification, and order-processing routes.
- State/data flow: TanStack Query handles server state and caching. Redux Toolkit stores auth state, draft cart number, and local cart UI state.
- Forms: React Hook Form and Zod provide client-side validation for auth flows.
- API integration: Axios instance centralizes base URL, auth headers, response toasts, mutation feedback, and token refresh behavior.
- Responsiveness: Layouts use responsive Tailwind utilities, adaptive grids, mobile-friendly drawers, and constrained content widths.
- Design system/styling: Tailwind CSS v4, shadcn/Radix-style primitives, Lucide icons, custom design tokens, local font loading, semantic color tokens, shadows, spacing, and typography utilities.
- Accessibility: Uses semantic form labels, aria-invalid on inputs, button labels, status spinners, keyboard-friendly Radix primitives, and image alt text in many places.
- Performance: Uses debounced search, React Query stale times, placeholder data, skeleton states, Next Image remote patterns, and route-level loading guards.

## Backend / API / Data Integration
This repo does not contain backend, database, schema, or API route code. It is a frontend-only application that integrates with a separate backend service through typed service hooks.

The frontend integrates with endpoints for auth, current user profile, product listing and details, categories, orders, draft cart updates, payment initiation/re-initiation, payment verification, and out-of-stock reports. Backend-specific details should be kept high level in a public case study unless the backend repo is reviewed separately.

## Role-Based / Multi-Surface Functionality
The visible application surface is mainly buyer/wholesaler oriented:

- Public users can browse marketplace products and categories.
- Unauthenticated users who try to cart or buy are routed into login/register, with temporary cart intent preserved locally.
- Authenticated users can maintain a draft cart/order, check out, pay, track orders, review inventory, reorder, and report out-of-stock items.
- Procurement officer/admin concepts are represented in API response types, order assignment fields, and comments, but this repo does not expose full admin or procurement screens.

Related repo likely needed: yes. To complete a full portfolio case study for the larger ERP ecosystem, analyze the backend API and any admin/procurement dashboard next.

## Technical Stack
- Framework: Next.js 16, React 19, TypeScript, App Router
- Styling/UI: Tailwind CSS v4, Radix UI primitives, shadcn-style components, Lucide React, class-variance-authority, tailwind-merge, custom CSS design tokens
- State/data fetching: TanStack Query, Redux Toolkit, React Redux, Axios
- Forms/validation: React Hook Form, Zod, `@hookform/resolvers`
- Backend/API: External REST API consumed through Axios service hooks
- Database/storage: No database code in this repo; browser cookies and localStorage are used for tokens and temporary cart intent
- Tooling: ESLint, Jest, Testing Library, jsdom, TypeScript, Next Image, React Compiler, Vercel-oriented config in README

## Feature Inventory
### Authentication
- User roles that use it: Public users, authenticated buyers/wholesalers
- What it does: Login, registration, forgot password, reset password, logout, current-user hydration, token storage, and refresh handling.
- Key screens/routes/components: `/login`, `/register`, `/reset-password`, auth layout, `LoginForm`, `RegisterForm`, `ForgotPasswordForm`, `ResetPasswordForm`, `LogoutButton`.
- API/service/state integration: Auth API hooks call login/register/profile/refresh/logout/password endpoints; Redux stores user, token, auth status, and draft cart number.
- Forms/validation: React Hook Form with Zod schemas.
- Portfolio-safe description: Built a complete authentication experience with validated forms, persisted sessions, and protected dashboard hydration.

### Marketplace Browsing
- User roles that use it: Public users and authenticated buyers
- What it does: Product discovery, category navigation, debounced search, responsive product grids, product detail pages, and loading/empty states.
- Key screens/routes/components: `/marketplace`, `/marketplace/[categoryId]`, `/marketplace/product/[id]`, `MarketplacePageComponent`, `MarketplaceByCategoriesPageComponent`, `ProductCard`, `ProductDetailsPageComponent`, `SearchBar`, `CategoryTabs`.
- API/service/state integration: Product and category queries use TanStack Query with query keys, stale times, filters, and pagination parameters.
- Portfolio-safe description: Created a searchable B2B product catalog with category filtering, responsive grids, and resilient API loading states.

### Cart And Draft Order Flow
- User roles that use it: Authenticated buyers/wholesalers; unauthenticated users with saved intent
- What it does: Adds products to a draft cart/order, prevents duplicate items, updates quantities, removes items, and restores temporary cart intent after login/register.
- Key screens/routes/components: Product card/detail actions, `MarketplaceNavbar`, `DashboardDrawer`, `CartOrderList`, `CartItem`, checkout page.
- API/service/state integration: Draft order create/update hooks, order detail query, Redux draft cart number, localStorage temporary cart item.
- Forms/validation/uploads/real-time: Quantity input uses debounced update logic; no uploads or real-time sockets visible.
- Portfolio-safe description: Implemented a cart-to-draft-order flow that preserves buying intent across authentication and keeps server-backed order state in sync.

### Checkout And Payment
- User roles that use it: Authenticated buyers/wholesalers
- What it does: Displays checkout summary, lets users edit delivery address, initiates or re-initiates payment, handles checkout URL expiry logic, redirects to payment completion, and verifies payment callbacks.
- Key screens/routes/components: `/dashboard/checkout`, `/dashboard/checkout/complete-payment`, `/dashboard/payment-verification`, `/order-processing`, `CheckoutSummaryPageComponent`, `PaymentVerificationPageComponent`.
- API/service/state integration: Order detail, draft update, initiate payment, re-initiate payment, and verify payment mutations.
- Forms/validation: Delivery address editing uses a textarea and API update.
- Portfolio-safe description: Built a checkout workflow that handles draft order review, delivery details, payment initiation, expiry-aware redirects, and post-payment verification.

### Orders
- User roles that use it: Authenticated buyers/wholesalers
- What it does: Lists orders, filters by pending/processing/fulfilled/pending payment, supports search, excludes empty draft artifacts, and surfaces payment initiation for incomplete orders.
- Key screens/routes/components: `/dashboard/orders`, `OrdersPageComponent`, `OrdersGroupedTable`, `OrderCard`, status/tag utilities.
- API/service/state integration: Order list query with search, pagination, and status filtering.
- Portfolio-safe description: Designed an order management screen that translates operational order states into clear buyer-facing tabs and actions.

### Inventory
- User roles that use it: Authenticated buyers/wholesalers
- What it does: Shows completed order history as inventory context, supports search, reorders previous purchases, and reports out-of-stock items.
- Key screens/routes/components: `/dashboard/inventory`, `InventoryPageComponent`, `OrdersGroupedTable`.
- API/service/state integration: Completed orders query, re-initiate payment mutation, out-of-stock report mutation.
- Portfolio-safe description: Connected completed orders to inventory maintenance, enabling repeat purchasing and issue reporting from a single operational view.

### Shared UI And Design System
- User roles that use it: All users
- What it does: Provides buttons, inputs, field wrappers, dialogs, drawers/sheets, tabs, tooltips, skeletons, avatars, spinners, badges, search boxes, empty states, breadcrumbs, tables, and status tags.
- Key screens/routes/components: `src/components/ui`, `src/components/general`, `src/app/globals.css`.
- Portfolio-safe description: Built on a tokenized design system with reusable primitives, consistent status styling, and responsive layout patterns.

## Key Engineering Decisions
### Decision: Feature-based module organization
- Why it mattered: Auth and marketplace workflows have different responsibilities and APIs.
- Result: The repo is easier to scan, extend, and present as a product-grade frontend rather than a page-only prototype.

### Decision: TanStack Query for server state
- Why it mattered: Product, category, order, and payment workflows depend on remote state with loading, caching, retry, and invalidation needs.
- Result: Query keys, stale times, placeholders, retries, and invalidating mutations keep user-facing screens responsive and consistent.

### Decision: Redux for app/session UI state
- Why it mattered: User session and draft cart references need to be accessible across nav, marketplace, product, checkout, and dashboard components.
- Result: Auth state, current user, and cart draft number are shared without prop drilling.

### Decision: Server-backed draft order model
- Why it mattered: In B2B buying, a cart is closer to a draft procurement order than a purely local shopping basket.
- Result: Authenticated users can resume cart/order state across screens, while unauthenticated intent is temporarily preserved until login/register.

### Decision: Centralized Axios client with auth and mutation feedback
- Why it mattered: The app needs consistent auth headers, token refresh behavior, and user feedback across many API mutations.
- Result: API hooks stay smaller and more focused on product behavior.

### Decision: Tokenized UI system
- Why it mattered: Marketplace, auth, checkout, and dashboard screens need to feel like one product.
- Result: Global tokens, reusable components, Radix primitives, and utility classes support a coherent visual language.

## Challenges and Tradeoffs
- External backend dependency: The frontend is well integrated but cannot be fully understood without the backend/API repo. Public case-study language should describe integration patterns, not private endpoint internals.
- Role modeling is wider than visible UI: Types include customer, wholesaler, admin profile, and procurement officer profile concepts, but visible routes focus on buyer/wholesaler flows. A full ecosystem case study should include the admin/procurement surface.
- Auth token storage: Cookies and refresh-token logic are implemented client-side. This is practical for the current frontend but should be reviewed carefully for production security posture.
- Draft cart complexity: Preserving cart intent across anonymous browsing, login/register, server draft orders, and checkout adds useful product polish, but it also increases edge cases around duplicate items and stale draft IDs.
- Payment lifecycle complexity: Checkout URL expiry, re-initiation, verification callbacks, and order status updates require clear loading states and resilient failure handling.
- Test freshness: Jest and Testing Library setup exists, but at least one auth test file appears to reference older UI copy/routes. This should be refreshed before presenting automated testing as a project strength.
- Configuration drift: README/env example references `NEXT_PUBLIC_API_BASE_URL`, while the Axios client uses `NEXT_PUBLIC_BACKEND_BASE_URL`. This should be aligned before handoff or deployment documentation is shown publicly.

## Performance / Scalability Notes
- Debounced search reduces unnecessary product/order query traffic.
- React Query stale times reduce repeat network requests for product and category data.
- Placeholder data keeps product lists stable during filter changes.
- Skeleton loaders and empty states improve perceived performance.
- Query invalidation after mutations keeps order, cart, and payment screens synchronized.
- Next Image remote patterns support optimized external product images from approved hosts.
- Feature folders and shared UI primitives support maintainability as the product grows.

## Screenshots Needed
- Marketplace home with product grid and category navigation.
- Product detail page with image gallery, quantity, and cart/buy actions.
- Cart drawer showing draft order items.
- Checkout summary with delivery address and total.
- Payment handoff or safe mocked payment verification state.
- Orders dashboard with tabs for pending, processing, fulfilled, and payment initiation.
- Inventory page with completed orders, reorder, and out-of-stock report action.
- Auth screen, preferably login or register.
- Mobile view of marketplace and checkout.
- Sensitive areas to blur or replace with demo data: customer names, emails, phone numbers, order numbers, addresses, payment references, real product prices if confidential, backend URLs, and any internal status metadata.

## Safe Case Study Content
### Overview
JOOAV ERP Frontend is a B2B marketplace and dashboard for FMCG restocking. It gives buyers a way to browse products, build draft orders, move through checkout, verify payment, track fulfillment, and reorder inventory from previous purchases.

### Role
I worked on the frontend architecture and implementation, including routing, reusable UI components, API integration, auth flows, cart/draft order behavior, checkout states, order screens, and responsive dashboard interfaces.

### Problem
Wholesale buyers need a smoother way to restock products without losing order intent between browsing, authentication, checkout, and fulfillment. The interface also needs to expose operational order states in a way that is simple for buyers to understand.

### Solution
The application combines a public product catalog with authenticated dashboard workflows. Users can search and browse products, preserve cart intent through login or registration, maintain a server-backed draft order, initiate payment, verify checkout status, and manage orders and inventory after purchase.

### Engineering Decisions
The frontend uses Next.js App Router for route organization, TanStack Query for server state, Redux Toolkit for session-level state, Axios interceptors for API consistency, React Hook Form and Zod for validation, and a tokenized Tailwind/Radix UI system for consistent screens.

### Outcome
The result is a portfolio-worthy frontend that demonstrates product thinking, frontend architecture, state management, API integration, and operational workflow design. The strongest story is not just visual UI, but how the app carries a buyer from discovery to order continuity and post-purchase inventory actions.

## Portfolio Strength Rating
- Visual presentation: 4/5
- Frontend engineering depth: 4/5
- Backend/API integration depth: 4/5
- Product complexity: 4/5
- Case-study strength: 4/5
- Hiring relevance: 4/5

### What should be emphasized on the portfolio
- B2B marketplace and procurement workflow complexity.
- Draft order and cart persistence across anonymous and authenticated states.
- API-integrated checkout/payment lifecycle.
- Order and inventory dashboards with operational statuses.
- Design system, reusable components, loading states, and responsive UI.

### What should be kept brief
- Exact backend endpoint details.
- Internal order assignment mechanics.
- Payment provider implementation details.
- Incomplete or older route variants.
- Testing claims until tests are refreshed.

### What should not be shown publicly
- Real users, customer contacts, order numbers, payment references, addresses, backend URLs, tokens, credentials, `.env.local`, sensitive pricing, private operational rules, or proprietary fulfillment details.

## Recruiter-Friendly Talking Points
- Built a Next.js marketplace that supports public product browsing while preserving purchase intent through login and registration.
- Used TanStack Query to manage product, category, order, checkout, and payment server state with caching and invalidation.
- Modeled the shopping cart as a server-backed draft order, which better matched the B2B procurement workflow.
- Implemented checkout logic that handles payment initiation, expired checkout links, and post-payment verification states.
- Created order and inventory dashboards that translate backend order statuses into buyer-friendly tabs and actions.
- Built auth forms with React Hook Form and Zod to keep client-side validation consistent and maintainable.
- Used Redux Toolkit for shared auth and draft cart state across navigation, marketplace, product, and checkout screens.
- Developed reusable UI primitives and product-specific components to keep the interface consistent across marketplace and dashboard surfaces.

## Suggested Project Data Object
```ts
{
  title: "JOOAV ERP Marketplace and Inventory Dashboard",
  slug: "jooav-erp-marketplace-dashboard",
  summary: "A B2B FMCG marketplace and dashboard for product discovery, draft orders, checkout, order tracking, and inventory reordering.",
  description: "Built an API-integrated Next.js frontend that helps wholesalers browse products, preserve cart intent through authentication, manage server-backed draft orders, initiate payment, and track post-purchase inventory workflows.",
  role: "Frontend Engineer",
  projectType: "Frontend-only, API-integrated",
  status: "Private / in progress",
  featured: true,
  timeline: "Not publicly specified",
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Radix UI",
    "TanStack Query",
    "Redux Toolkit",
    "Axios",
    "React Hook Form",
    "Zod",
    "Jest",
    "Testing Library"
  ],
  surfaces: [
    "Public marketplace",
    "Authenticated buyer dashboard",
    "Checkout and payment flow",
    "Orders dashboard",
    "Inventory/reorder workflow"
  ],
  highlights: [
    "Public product browsing with authenticated checkout",
    "Server-backed draft order/cart flow",
    "Auth-aware cart intent restoration",
    "Payment initiation and verification states",
    "Order status tabs and inventory reorder actions",
    "Reusable tokenized UI system"
  ],
  engineeringDecisions: [
    "Used TanStack Query for remote product, order, and checkout state",
    "Used Redux Toolkit for auth and draft cart state shared across the app",
    "Centralized API behavior in an Axios client with auth headers, token refresh, and mutation feedback",
    "Modeled cart behavior around backend draft orders for B2B procurement",
    "Used React Hook Form and Zod for validated auth flows",
    "Organized code by product features and reusable UI primitives"
  ],
  outcomes: [
    "Reduced friction between browsing and authenticated checkout",
    "Created a maintainable frontend foundation for marketplace and dashboard workflows",
    "Improved buyer visibility into orders, payment status, and inventory actions"
  ],
  links: {
    live: "",
    github: "",
    figma: "Private or internal design reference"
  },
  screenshots: [
    "Marketplace product grid",
    "Product detail page",
    "Cart drawer",
    "Checkout summary",
    "Payment verification state",
    "Orders dashboard",
    "Inventory reorder page",
    "Mobile marketplace view"
  ],
  caseStudySections: {
    overview: "A B2B FMCG marketplace and dashboard for restocking workflows.",
    role: "Frontend architecture, UI implementation, API integration, auth, checkout, and order workflows.",
    problem: "Wholesale buyers need to browse products, preserve buying intent, complete checkout, and manage orders without fragmented tools.",
    solution: "Built a Next.js frontend with public product discovery, authenticated draft orders, checkout/payment flows, and order/inventory dashboards.",
    engineeringDecisions: "Next.js App Router, TanStack Query, Redux Toolkit, Axios interceptors, React Hook Form, Zod, and tokenized Tailwind/Radix UI.",
    outcome: "A strong frontend case study showing product workflow complexity, API integration, and maintainable UI architecture."
  },
  features: [
    "Authentication",
    "Marketplace browsing",
    "Product detail",
    "Draft cart/order",
    "Checkout",
    "Payment verification",
    "Orders dashboard",
    "Inventory and reorder",
    "Out-of-stock reporting",
    "Responsive shared UI system"
  ]
}
```

