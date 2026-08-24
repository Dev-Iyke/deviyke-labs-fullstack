import {
  Blocks,
  BrainCircuit,
  Cable,
  type LucideIcon,
  PanelsTopLeft,
} from "lucide-react";
import { capabilityToneStyles } from "@/features/capabilities/config/capabilityToneStyles";
import type {
  CapabilityTone,
  CapabilityVisual,
} from "@/features/capabilities/types/capability";

const visualConfig: Record<
  CapabilityVisual,
  {
    Icon: LucideIcon;
    label: string;
    nodes: readonly string[];
  }
> = {
  business: {
    Icon: BrainCircuit,
    label: "Logic first",
    nodes: ["Rules", "Users", "Outcome"],
  },
  interface: {
    Icon: PanelsTopLeft,
    label: "Screen systems",
    nodes: ["Layout", "States", "Access"],
  },
  integration: {
    Icon: Cable,
    label: "Connected flows",
    nodes: ["Payload", "Cache", "Errors"],
  },
  delivery: {
    Icon: Blocks,
    label: "Built to extend",
    nodes: ["Folders", "Tokens", "Docs"],
  },
};

export function CapabilityIllustration({
  tone,
  visual,
}: {
  tone: CapabilityTone;
  visual: CapabilityVisual;
}) {
  const toneStyle = capabilityToneStyles[tone];
  const config = visualConfig[visual];
  const Icon = config.Icon;

  return (
    <div
      className={`relative mb-6 overflow-hidden rounded-3xl border p-4 ${toneStyle.visual}`}
    >
      <div
        className={`absolute -right-12 -top-12 size-32 rounded-full blur-3xl ${toneStyle.glow}`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] opacity-25 [background-size:18px_18px]"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div
          className={`grid size-12 shrink-0 place-items-center rounded-2xl border shadow-sm ${toneStyle.icon}`}
        >
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
            {config.label}
          </p>
          <div className="mt-4 grid gap-2">
            {config.nodes.map((node) => (
              <div key={node} className="flex items-center gap-2">
                <span
                  className={`size-2 shrink-0 rounded-full shadow-[0_0_1rem_currentColor] ${toneStyle.dot}`}
                  aria-hidden="true"
                />
                <span className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
                <span className="rounded-full border border-border/70 bg-background/55 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                  {node}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
