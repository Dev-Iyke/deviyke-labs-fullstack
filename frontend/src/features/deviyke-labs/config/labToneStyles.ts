import type { LabStepTone } from "@/features/deviyke-labs/types/philosophy";

export const labToneStyles: Record<
  LabStepTone,
  {
    shell: string;
    marker: string;
    label: string;
    output: string;
    dot: string;
  }
> = {
  signal: {
    shell:
      "border-signal/35 bg-linear-to-br from-signal/15 via-card/75 to-card/65",
    marker: "bg-signal text-signal-foreground shadow-[0_0_1.5rem_var(--signal)]",
    label: "text-signal",
    output: "border-signal/25 bg-signal/10",
    dot: "bg-signal text-signal",
  },
  cyan: {
    shell:
      "border-chart-2/35 bg-linear-to-br from-chart-2/15 via-card/75 to-card/65",
    marker: "bg-chart-2 text-background shadow-[0_0_1.5rem_var(--chart-2)]",
    label: "text-chart-2",
    output: "border-chart-2/25 bg-chart-2/10",
    dot: "bg-chart-2 text-chart-2",
  },
  violet: {
    shell:
      "border-chart-3/35 bg-linear-to-br from-chart-3/15 via-card/75 to-card/65",
    marker: "bg-chart-3 text-background shadow-[0_0_1.5rem_var(--chart-3)]",
    label: "text-chart-3",
    output: "border-chart-3/25 bg-chart-3/10",
    dot: "bg-chart-3 text-chart-3",
  },
  green: {
    shell:
      "border-chart-4/35 bg-linear-to-br from-chart-4/15 via-card/75 to-card/65",
    marker: "bg-chart-4 text-background shadow-[0_0_1.5rem_var(--chart-4)]",
    label: "text-chart-4",
    output: "border-chart-4/25 bg-chart-4/10",
    dot: "bg-chart-4 text-chart-4",
  },
};
