import type {
  ToolSignal,
  ToolboxTone,
} from "@/features/toolbox/types/toolbox";

export const toolboxToneStyles: Record<
  ToolboxTone,
  {
    shell: string;
    glow: string;
    icon: string;
    accent: string;
    pill: string;
  }
> = {
  signal: {
    shell:
      "border-signal/30 bg-linear-to-br from-signal/15 via-card/80 to-card/65 hover:border-signal/45",
    glow: "bg-signal/25",
    icon: "border-signal/35 bg-signal text-signal-foreground",
    accent: "text-signal",
    pill: "border-signal/25 bg-signal/10",
  },
  cyan: {
    shell:
      "border-chart-2/30 bg-linear-to-br from-chart-2/15 via-card/80 to-card/65 hover:border-chart-2/45",
    glow: "bg-chart-2/25",
    icon: "border-chart-2/35 bg-chart-2 text-background",
    accent: "text-chart-2",
    pill: "border-chart-2/25 bg-chart-2/10",
  },
  violet: {
    shell:
      "border-chart-3/30 bg-linear-to-br from-chart-3/15 via-card/80 to-card/65 hover:border-chart-3/45",
    glow: "bg-chart-3/25",
    icon: "border-chart-3/35 bg-chart-3 text-background",
    accent: "text-chart-3",
    pill: "border-chart-3/25 bg-chart-3/10",
  },
  green: {
    shell:
      "border-chart-4/30 bg-linear-to-br from-chart-4/15 via-card/80 to-card/65 hover:border-chart-4/45",
    glow: "bg-chart-4/25",
    icon: "border-chart-4/35 bg-chart-4 text-background",
    accent: "text-chart-4",
    pill: "border-chart-4/25 bg-chart-4/10",
  },
};

export const toolSignalLabels: Record<ToolSignal, string> = {
  core: "Core",
  working: "Working",
  foundation: "Foundation",
  expanding: "Expanding",
};
