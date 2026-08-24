import type {
  ToolboxGroup,
  ToolboxOutcome,
} from "@/features/toolbox/types/toolbox";

export const toolboxOutcomes = [
  {
    label: "Fast interfaces",
    description: "Frontend choices that keep pages responsive and readable.",
  },
  {
    label: "Reliable data flows",
    description: "Server-state and API boundaries that make behavior clear.",
  },
  {
    label: "Maintainable delivery",
    description:
      "Structure and documentation that make projects easier to extend.",
  },
] as const satisfies readonly ToolboxOutcome[];

export const toolboxGroups = [
  {
    title: "Frontend systems",
    eyebrow: "Interface layer",
    description:
      "The core stack for building polished, responsive, accessible product surfaces with a strong component foundation.",
    outcome:
      "Ship interfaces that feel deliberate across landing pages, dashboards, marketplaces, and content-heavy flows.",
    tone: "signal",
    visual: "frontend",
    tools: [
      { name: "Next.js", signal: "core" },
      { name: "React", signal: "core" },
      { name: "TypeScript", signal: "core" },
      { name: "Tailwind CSS", signal: "core" },
      { name: "shadcn/ui", signal: "working" },
      { name: "Motion", signal: "working" },
    ],
  },
  {
    title: "Data and state",
    eyebrow: "Behavior layer",
    description:
      "The tools and patterns I use to keep client behavior predictable: server state, local state, form payloads, and UI state boundaries.",
    outcome:
      "Make loading, caching, mutation, validation, and error paths understandable to both users and developers.",
    tone: "cyan",
    visual: "state",
    tools: [
      { name: "TanStack Query", signal: "working" },
      { name: "Zustand", signal: "expanding" },
      { name: "Redux", signal: "working" },
      { name: "API contracts", signal: "core" },
      { name: "Validation patterns", signal: "working" },
      { name: "Form states", signal: "core" },
    ],
  },
  {
    title: "Backend foundation",
    eyebrow: "System layer",
    description:
      "Backend-aware foundations for understanding how product data, authentication, APIs, and persistence shape the frontend experience.",
    outcome:
      "Integrate confidently with backend teams while taking ownership of smaller services, API contracts, and data-aware UI decisions.",
    tone: "violet",
    visual: "backend",
    tools: [
      { name: "Node.js", signal: "foundation" },
      { name: "REST APIs", signal: "working" },
      { name: "NestJS", signal: "expanding" },
      { name: "PostgreSQL", signal: "foundation" },
      { name: "Prisma", signal: "foundation" },
      { name: "Auth flows", signal: "working" },
    ],
  },
  {
    title: "Quality and delivery",
    eyebrow: "Trust layer",
    description:
      "The non-negotiables that make frontend work feel professional: accessibility, responsive behavior, performance, metadata, and clear handoff notes.",
    outcome:
      "Deliver work that is easier to evaluate, easier to maintain, and safer to grow after the first release.",
    tone: "green",
    visual: "quality",
    tools: [
      { name: "Accessibility", signal: "core" },
      { name: "Responsive QA", signal: "core" },
      { name: "Performance", signal: "working" },
      { name: "SEO metadata", signal: "working" },
      { name: "Documentation", signal: "core" },
      { name: "Deployment awareness", signal: "working" },
    ],
  },
] as const satisfies readonly ToolboxGroup[];
