export const labModes = [
  {
    title: "Interface experiments",
    description:
      "Small explorations around layout, interaction feedback, motion, and state communication before those ideas harden into product patterns.",
    accent: "signal",
  },
  {
    title: "System notes",
    description:
      "Practical thinking about data boundaries, reusable architecture, validation, API behavior, and backend-aware frontend decisions.",
    accent: "chart-3",
  },
  {
    title: "Product observations",
    description:
      "Short notes on why certain flows work, where interfaces become noisy, and how complex products can stay understandable.",
    accent: "chart-4",
  },
] as const

export const labTracks = [
  {
    status: "Active track",
    title: "Reusable case-study systems",
    summary:
      "Exploring how one typed content model can power homepage highlights, work indexes, detail pages, and future CMS-backed content without turning presentation components into data plumbing.",
    direction: [
      "Typed project repositories",
      "Portable content structures",
      "Frontend-to-CMS migration readiness",
    ],
  },
  {
    status: "Current focus",
    title: "Backend-aware form and service patterns",
    summary:
      "Refining how forms, request helpers, mutation feedback, and validation layers work together so product surfaces can move cleanly from mock mode into live integration.",
    direction: [
      "Validation-first UX",
      "Mutation feedback consistency",
      "Service-layer discipline",
    ],
  },
  {
    status: "Ongoing study",
    title: "Multi-role product UI",
    summary:
      "Looking closely at how dashboards for different user types can share foundations without collapsing into generic interfaces that hide the real job each role needs to do.",
    direction: [
      "Role-sensitive layout systems",
      "Operational clarity under complexity",
      "Shared primitives without repetition",
    ],
  },
] as const

export const labEntries = [
  {
    category: "Architecture",
    title: "Keeping frontend systems easy to extend",
    description:
      "Feature folders, typed repositories, and provider composition are all part of a larger experiment: making product code easier to grow without scattering global concerns everywhere.",
    outcome:
      "That usually leads to cleaner UI components, better state boundaries, and fewer rewrites when the backend or product shape evolves.",
  },
  {
    category: "Workflow design",
    title: "Turning product complexity into calmer interfaces",
    description:
      "A lot of the work I enjoy sits in products with many roles, many states, and heavy workflow pressure. The lab is where I think through how to keep those experiences understandable.",
    outcome:
      "This often shows up later in dashboards, setup flows, runtime states, and the way information is grouped before it is styled.",
  },
  {
    category: "Full-stack direction",
    title: "Growing from integration fluency into deeper backend ownership",
    description:
      "Even when I am building from the frontend, I keep testing ideas around API structure, content models, validation boundaries, analytics, and admin-ready systems.",
    outcome:
      "The aim is to become stronger at full-stack product delivery without losing the frontend polish and usability discipline that already anchors my work.",
  },
  {
    category: "Motion and interaction",
    title: "Making motion explain state instead of decorating it",
    description:
      "A recurring theme in this portfolio is using restrained motion to reveal hierarchy, transition between states, and give interfaces more confidence without slowing them down.",
    outcome:
      "The goal is not spectacle. It is clearer relationships between elements, especially on section entrances, overlays, and stateful UI.",
  },
] as const

export const labQuestions = [
  "How do multi-role products stay clear when every role has different priorities and states?",
  "What should live in a frontend content model now so that a later backend CMS does not force UI rewrites?",
  "How much motion actually improves understanding before it starts competing with the content?",
  "What patterns make API-heavy forms feel dependable even when the backend is still evolving?",
] as const
