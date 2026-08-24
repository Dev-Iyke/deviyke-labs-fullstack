# GetCassava Marketplace Platform

## Positioning

GetCassava is a multi-role agricultural marketplace frontend that connects buyers, farmers or vendors, and administrators through commerce flows, operational dashboards, and marketplace management tools.

The frontend is the primary product surface in this repository. It supports public discovery, authenticated buyer actions, vendor operations, and admin management while integrating with a separate backend API.

## Product summary

- Product type: Frontend-heavy full-stack marketplace product
- Status: Private / in progress
- Role: Frontend engineering, UI implementation, product workflows, and API integration

## Surface areas

- Public storefront
- Buyer dashboard
- Farmer or vendor dashboard
- Admin dashboard

## Supported roles

- Buyer
- Farmer or vendor
- Admin

## Core problem

Cassava supply and demand can be fragmented across offline or loosely coordinated channels. That makes discovery, trust, ordering, and marketplace operations harder to manage. The product aims to create a structured digital marketplace that supports both commerce and the operational workflows behind it.

## Core solution

Build a Next.js frontend with distinct role-based experiences for public users, buyers, vendors, and admins. Support authentication, product browsing, cart and checkout, order handling, payments, vendor operations, and admin marketplace control through reusable UI systems and centralized API integration.

## Technical stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Redux Toolkit
- redux-persist
- React Context
- React Hook Form
- Zod
- Radix UI
- Firebase Auth
- ApexCharts
- XLSX

## Strong implementation points

### 1. Multi-role marketplace architecture

The app supports four meaningful product surfaces inside one codebase: public storefront, buyer dashboard, farmer or vendor dashboard, and admin dashboard.

### 2. Real commerce flow coverage

The buyer experience goes beyond browsing and includes carts, wishlists, addresses, orders, checkout, reviews, and payment-provider redirects.

### 3. Vendor and admin operational tooling

The project includes realistic operational workflows such as product management, order requests, transactions, promotions, user management, exports, and analytics.

### 4. Centralized API handling

Backend request logic is consolidated in a shared API request layer, making the product easier to maintain across multiple dashboard surfaces.

### 5. Strong auth and verification scope

The app includes signup, signin, password reset, verification, social authentication, JWT cookies, and role-aware redirects.

## Engineering decisions worth highlighting

- Role-specific routes and dashboard separation
- Centralized API request layer
- Redux Toolkit for auth-heavy workflows
- Shared dashboard context for cross-surface operational data
- Reusable Radix and shadcn-style UI primitives
- Admin workflows built around search, filters, pagination, exports, and management actions

## Challenges and tradeoffs

- Managing multiple roles and surfaces in one frontend increases complexity
- Shared context can become too broad and should later be split by domain
- Payment and checkout flows require careful UX feedback and stronger failure handling
- Public portfolio screenshots must avoid exposing real user or transaction data

## Suggested screenshots

- Public homepage hero and discovery flow
- Product listing or product details
- Buyer dashboard overview
- Buyer cart and checkout
- Farmer or vendor dashboard
- Farmer order requests or transactions
- Admin dashboard overview
- Admin product management table
- Add or edit product form
- Promotions and discounts screen
- Mobile homepage or mobile dashboard state

## Portfolio outcome framing

GetCassava demonstrates a marketplace frontend with both product breadth and operational depth. It shows the ability to build multi-role interfaces, handle API-backed commerce workflows, and design reusable dashboard systems that support real marketplace use cases.

## Privacy note

Any public screenshots should use demo or seeded data only. Real names, emails, phone numbers, addresses, transaction identifiers, payment references, and production records should not be shown.

## Future refinement opportunities

- Split shared context into smaller domain-focused providers
- Replace mixed request handling with a more strongly typed API client
- Strengthen route protection and middleware-backed access control
- Improve consistency of loading and error states
- Add more automated tests around auth, checkout, and admin workflows
- Review the backend repo later to deepen the full-stack case-study story
