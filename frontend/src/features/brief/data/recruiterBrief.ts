export type RecruiterTrackKey = "frontend" | "backend";

export interface RecruiterSnapshotItem {
  readonly label: string;
  readonly value: string;
}

export interface RecruiterCvLink {
  readonly href: string;
  readonly label: string;
  readonly download: string;
}

export interface RecruiterEvidenceItem {
  readonly kicker: string;
  readonly title: string;
  readonly summary: string;
  readonly evidence: string;
  readonly href?: string;
}

export interface RecruiterTrack {
  readonly tabLabel: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: readonly string[];
  readonly cvLinks: readonly RecruiterCvLink[];
  readonly snapshot: readonly RecruiterSnapshotItem[];
  readonly strengths: readonly string[];
  readonly currentFocus: readonly string[];
  readonly coreStack: readonly string[];
  readonly evidenceLead: string;
  readonly evidence: readonly RecruiterEvidenceItem[];
}

export const recruiterTracks = {
  frontend: {
    tabLabel: "Frontend",
    eyebrow: "Frontend Engineer",
    title: "Building ambitious interfaces backed by dependable systems.",
    description: [
      "I work best on product-facing engineering problems where the interface has to stay clear even when workflows, backend dependencies, and user states become complex.",
      "My strongest work today is frontend-led, but the way I build is shaped by API contracts, validation, state management, resilience, and systems that can continue evolving as products grow.",
    ],
    cvLinks: [
      {
        href: "/cv/Obasi-ikechukwu-FE.pdf",
        label: "Download frontend CV (PDF)",
        download: "Obasi-Ikechukwu-Frontend-CV.pdf",
      },
    ],
    snapshot: [
      {
        label: "Role fit",
        value: "Frontend Engineer / Frontend-heavy Full-stack Developer",
      },
      {
        label: "Focus",
        value: "Interfaces, dashboards, workflows, and API-connected product surfaces",
      },
      {
        label: "Current direction",
        value: "Frontend architecture and scalable product engineering",
      },
      {
        label: "Best environment",
        value: "Product teams building ambitious web applications",
      },
    ],
    strengths: [
      "Translating business logic into clear product flows and usable interfaces",
      "Building dashboard-heavy and multi-role applications without losing interaction clarity",
      "Working comfortably around API contracts, validation, loading states, and backend-aware UI decisions",
      "Creating reusable frontend foundations that scale across routes, features, and product surfaces",
    ],
    currentFocus: [
      "Frontend architecture for workflow-heavy products",
      "Scalable product engineering across complex interface states",
      "Operational dashboards, learning platforms, ERP systems, and multi-role applications",
      "Case-study quality implementation that stands up in technical evaluation",
    ],
    coreStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
      "Axios",
      "React Hook Form",
      "Zod",
      "shadcn/ui",
      "Motion",
      "REST API integration",
    ],
    evidenceLead: "A few strong product stories that show the range of the frontend-led work.",
    evidence: [
      {
        kicker: "Multi-tenant school SaaS",
        title: "Greysoft School Management",
        summary:
          "A multi-tenant school platform with role-based dashboards for operations, academics, exams, payments, messaging, and school administration.",
        evidence:
          "Built reusable dashboard systems, tenant-aware flows, and realtime interaction patterns without losing clarity across many user roles.",
        href: "/work/greysoft-school-management-platform",
      },
      {
        kicker: "Multi-surface ERP frontend",
        title: "JOOAV ERP",
        summary:
          "A responsive ERP product connecting wholesalers and manufacturers through order management, procurement, reporting, and dashboard workflows.",
        evidence:
          "Handled workflow-heavy product surfaces where business logic, responsive behavior, and operational data all needed to stay understandable.",
        href: "/work/jooav-erp",
      },
      {
        kicker: "Multi-role learning platform",
        title: "WESOnline Marketplace",
        summary:
          "A learning and mentorship platform with student, mentor, admin, assessment, and tenant-aware product surfaces.",
        evidence:
          "Implemented route-aware frontend architecture, reusable dashboard patterns, and API-backed experiences across multiple role contexts.",
        href: "/work/wesonline-marketplace",
      },
      {
        kicker: "Student exam-prep platform",
        title: "NoonPrep",
        summary:
          "A student-facing learning product with dashboards, guided practice, timed simulations, analytics, and realtime quiz challenges.",
        evidence:
          "Delivered polished frontend flows around authenticated sessions, API-driven learning data, and realtime interaction behavior.",
        href: "/work/noonprep",
      },
    ],
  },
  backend: {
    tabLabel: "Backend",
    eyebrow: "Backend Engineer",
    title: "Building dependable systems that power modern web applications.",
    description: [
      "I enjoy designing the foundations behind great products—authentication, APIs, data flow, and application architecture that keep software reliable and maintainable.",
      "While my professional experience has primarily been frontend-focused, I have consistently worked across backend integrations and full-stack applications, and I am intentionally growing into deeper backend engineering through Node.js projects, RESTful APIs, and database-driven systems.",
    ],
    cvLinks: [
      {
        href: "/cv/Obasi-Ikechukwu-Backend-Dev.pdf",
        label: "Download backend CV (PDF)",
        download: "Obasi-Ikechukwu-Backend-CV.pdf",
      },
    ],
    snapshot: [
      {
        label: "Role fit",
        value: "Backend Engineer (Junior / Intern)",
      },
      {
        label: "Focus",
        value: "REST APIs, authentication, databases, and backend application structure",
      },
      {
        label: "Current direction",
        value: "Node.js, Express.js, Prisma, and stronger service design foundations",
      },
      {
        label: "Best environment",
        value: "Teams building reliable products with strong engineering practices and room to grow",
      },
    ],
    strengths: [
      "Building backend fundamentals around authentication, protected routes, and RESTful API design",
      "Thinking carefully about validation, data flow, and database-backed application structure",
      "Bringing real product empathy from frontend work into backend decisions that affect the whole user journey",
      "Growing deliberately through Node.js projects, backend training, and full-stack application practice",
    ],
    currentFocus: [
      "REST APIs, authentication flows, and cleaner service architecture",
      "Prisma, PostgreSQL, MongoDB, and backend data modeling practice",
      "Backend growth through small full-stack systems and production integration work",
      "Junior backend and intern roles with room for mentorship, ownership, and steady growth",
    ],
    coreStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Postman",
      "JavaScript",
    ],
    evidenceLead: "A few honest signals that show where the backend story is already real and where it is actively growing.",
    evidence: [
      {
        kicker: "Backend practice project",
        title: "Mini Mart",
        summary:
          "A small full-stack e-commerce application built to strengthen backend fundamentals around authentication, protected routes, and product workflows.",
        evidence:
          "Implemented JWT authentication, protected routes, product and user APIs, cart and wishlist flows, and a dummy checkout path on a Node.js, Express.js, and MongoDB foundation.",
        href: "/work/mini-mart",
      },
      {
        kicker: "Full-stack systems project",
        title: "Course Registration Platform",
        summary:
          "A full-stack registration platform with backend payment verification, dynamic pricing, discount management, and automated notification flow.",
        evidence:
          "Built around Node.js, Express.js, Prisma, PostgreSQL, and REST APIs, with backend logic for registration, payment confirmation, pricing rules, and application state updates.",
      },
      {
        kicker: "Production integration evidence",
        title: "Greysoft School Management",
        summary:
          "A real multi-tenant product where authenticated flows, role boundaries, realtime messaging, and request discipline all depended on clear backend contracts.",
        evidence:
          "Worked close to APIs, authentication behavior, and realtime communication patterns while keeping the frontend dependable across many user roles.",
        href: "/work/greysoft-school-management-platform",
      },
      {
        kicker: "Backend-aware product delivery",
        title: "NoonPrep",
        summary:
          "A learning product where authenticated sessions, realtime quiz behavior, and analytics flows all required tighter thinking around backend integration.",
        evidence:
          "Built production features while collaborating around REST APIs, authentication workflows, and realtime communication behavior across the app.",
        href: "/work/noonprep",
      },
    ],
  },
} as const satisfies Record<RecruiterTrackKey, RecruiterTrack>;

