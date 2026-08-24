export type LabStepTone = "signal" | "cyan" | "violet" | "green";

export interface LabStep {
  readonly number: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly outcome: string;
  readonly tone: LabStepTone;
}
