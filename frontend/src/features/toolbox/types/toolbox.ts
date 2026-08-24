export type ToolboxTone = "signal" | "cyan" | "violet" | "green";

export type ToolboxVisual = "frontend" | "state" | "backend" | "quality";

export type ToolSignal = "core" | "working" | "foundation" | "expanding";

export interface ToolboxTool {
  readonly name: string;
  readonly signal: ToolSignal;
}

export interface ToolboxGroup {
  readonly title: string;
  readonly eyebrow: string;
  readonly description: string;
  readonly outcome: string;
  readonly tone: ToolboxTone;
  readonly visual: ToolboxVisual;
  readonly tools: readonly ToolboxTool[];
}

export interface ToolboxOutcome {
  readonly label: string;
  readonly description: string;
}
