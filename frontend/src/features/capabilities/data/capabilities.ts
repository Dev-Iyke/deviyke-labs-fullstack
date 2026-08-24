import type { Capability } from "@/features/capabilities/types/capability";

export const capabilities = [
  {
    title: "Business-aware solution design",
    summary:
      "I work to understand the business rules, user intent, and product constraints behind a request, then shape the interface around the solution the product actually needs.",
    proofPoints: [
      "Turns rough ideas and requirements into clear user flows and interface decisions.",
      "Identifies rules, dependencies, and edge cases before they become broken product experiences.",
      "Connects business intent with technical implementation so the UI solves the right problem.",
    ],
    tools: ["Product logic", "Workflow mapping", "Requirements", "Edge cases"],
    tone: "signal",
    visual: "business",
  },
  {
    title: "Product-grade interfaces",
    summary:
      "I turn product requirements into interfaces that feel clear, responsive, performant, and dependable across real user journeys, not just polished static screens.",
    proofPoints: [
      "Reusable feature sections that support product growth.",
      "Responsive layouts shaped around hierarchy, scanning, and user intent.",
      "Accessibility, performance, loading states, and empty states treated as product requirements.",
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Performance",
    ],
    tone: "cyan",
    visual: "interface",
  },
  {
    title: "API-connected workflows",
    summary:
      "I build frontend flows around clear data contracts: payload shape, validation, server state, auth-aware screens, and graceful failure paths.",
    proofPoints: [
      "Clean collaboration around payloads, edge cases, and response states.",
      "UI presentation separated from data access so API changes stay manageable.",
      "Data boundaries modeled clearly so API integration stays predictable as the product grows.",
    ],
    tools: ["REST APIs", "TanStack Query", "Validation", "Auth flows"],
    tone: "violet",
    visual: "integration",
  },
  {
    title: "Maintainable delivery",
    summary:
      "I care about the structure behind the screen: naming, folders, component boundaries, documentation, and decisions that make a project easier to scale after the first version ships.",
    proofPoints: [
      "Focused custom components instead of oversized files.",
      "Documented tradeoffs, privacy boundaries, and implementation reasoning.",
      "Room for API, CMS, and content workflows without reshaping the UI from scratch.",
    ],
    tools: ["Feature folders", "Design tokens", "Scalability", "Documentation"],
    tone: "green",
    visual: "delivery",
  },
] as const satisfies readonly Capability[];

