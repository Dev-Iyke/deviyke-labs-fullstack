import type { CapabilityTone } from "@/features/capabilities/types/capability";

export const capabilityToneStyles: Record<
  CapabilityTone,
  {
    shell: string;
    glow: string;
    visual: string;
    icon: string;
    dot: string;
    tool: string;
  }
> = {
  signal: {
    shell:
      "border-signal/30 bg-linear-to-br from-signal/15 via-card/80 to-card/65 hover:border-signal/45",
    glow: "bg-signal/25",
    visual: "border-signal/25 bg-signal/10",
    icon: "border-signal/35 bg-signal text-signal-foreground",
    dot: "bg-signal text-signal",
    tool: "border-signal/25 bg-signal/10",
  },
  cyan: {
    shell:
      "border-chart-2/30 bg-linear-to-br from-chart-2/15 via-card/80 to-card/65 hover:border-chart-2/45",
    glow: "bg-chart-2/25",
    visual: "border-chart-2/25 bg-chart-2/10",
    icon: "border-chart-2/35 bg-chart-2 text-background",
    dot: "bg-chart-2 text-chart-2",
    tool: "border-chart-2/25 bg-chart-2/10",
  },
  violet: {
    shell:
      "border-chart-3/30 bg-linear-to-br from-chart-3/15 via-card/80 to-card/65 hover:border-chart-3/45",
    glow: "bg-chart-3/25",
    visual: "border-chart-3/25 bg-chart-3/10",
    icon: "border-chart-3/35 bg-chart-3 text-background",
    dot: "bg-chart-3 text-chart-3",
    tool: "border-chart-3/25 bg-chart-3/10",
  },
  green: {
    shell:
      "border-chart-4/30 bg-linear-to-br from-chart-4/15 via-card/80 to-card/65 hover:border-chart-4/45",
    glow: "bg-chart-4/25",
    visual: "border-chart-4/25 bg-chart-4/10",
    icon: "border-chart-4/35 bg-chart-4 text-background",
    dot: "bg-chart-4 text-chart-4",
    tool: "border-chart-4/25 bg-chart-4/10",
  },
};
