export type CapabilityTone = "signal" | "cyan" | "violet" | "green";

export type CapabilityVisual =
  | "business"
  | "interface"
  | "integration"
  | "delivery";

export interface Capability {
  readonly title: string;
  readonly summary: string;
  readonly proofPoints: readonly string[];
  readonly tools: readonly string[];
  readonly tone: CapabilityTone;
  readonly visual: CapabilityVisual;
}
