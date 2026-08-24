import type { BlogTone } from "@/features/blogs/types/blog";

export const blogToneStyles: Record<
  BlogTone,
  {
    readonly badge: string;
    readonly border: string;
    readonly surface: string;
    readonly glow: string;
    readonly dot: string;
  }
> = {
  signal: {
    badge: "border-signal/25 bg-signal/10 text-signal",
    border: "border-signal/25",
    surface: "bg-linear-to-br from-signal/12 via-card to-card/80",
    glow: "bg-signal/10",
    dot: "bg-signal",
  },
  "chart-2": {
    badge: "border-chart-2/25 bg-chart-2/10 text-chart-2",
    border: "border-chart-2/25",
    surface: "bg-linear-to-br from-chart-2/12 via-card to-card/80",
    glow: "bg-chart-2/10",
    dot: "bg-chart-2",
  },
  "chart-3": {
    badge: "border-chart-3/25 bg-chart-3/10 text-chart-3",
    border: "border-chart-3/25",
    surface: "bg-linear-to-br from-chart-3/12 via-card to-card/80",
    glow: "bg-chart-3/10",
    dot: "bg-chart-3",
  },
  "chart-4": {
    badge: "border-chart-4/25 bg-chart-4/10 text-chart-4",
    border: "border-chart-4/25",
    surface: "bg-linear-to-br from-chart-4/12 via-card to-card/80",
    glow: "bg-chart-4/10",
    dot: "bg-chart-4",
  },
};
