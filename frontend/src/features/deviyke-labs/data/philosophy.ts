import type { LabStep } from "@/features/deviyke-labs/types/philosophy";

export const labSteps = [
  {
    number: "01",
    label: "Context",
    title: "Understand the business logic",
    description:
      "Before shaping screens, I look for the rules behind the request: who is using it, what they are trying to achieve, what can go wrong, and what the business needs the flow to protect.",
    outcome: "The interface solves the actual product problem, not just the visible UI request.",
    tone: "signal",
  },
  {
    number: "02",
    label: "Flow",
    title: "Turn complexity into usable decisions",
    description:
      "A good interface explains what is happening without making the user work too hard. I break product logic into clear states, actions, feedback, and paths forward.",
    outcome: "Users always know what changed, what failed, and what to do next.",
    tone: "cyan",
  },
  {
    number: "03",
    label: "Contract",
    title: "Build with backend reality in mind",
    description:
      "The frontend has to respect the system around it: payloads, validation, permissions, loading behavior, cache boundaries, and API edge cases.",
    outcome: "Backend integration feels deliberate instead of patched on after the UI is finished.",
    tone: "violet",
  },
  {
    number: "04",
    label: "Proof",
    title: "Show the reasoning without exposing private strategy",
    description:
      "Case studies should explain constraints, tradeoffs, architecture choices, and privacy boundaries. The goal is to show judgment, not leak private product strategy.",
    outcome: "Projects become credible engineering evidence recruiters and collaborators can trust.",
    tone: "green",
  },
] as const satisfies readonly LabStep[];
