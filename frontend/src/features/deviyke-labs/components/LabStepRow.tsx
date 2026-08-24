import { labToneStyles } from "@/features/deviyke-labs/config/labToneStyles";
import type { LabStep } from "@/features/deviyke-labs/types/philosophy";

export function LabStepRow({ step }: { step: LabStep }) {
  const tone = labToneStyles[step.tone];

  return (
    <article
      className={`relative overflow-hidden rounded-[1.75rem] border p-5 shadow-sm ${tone.shell}`}
    >
      <div
        className="absolute right-0 top-0 size-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-foreground/5 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative grid gap-5 sm:grid-cols-[4.5rem_1fr]">
        <div>
          <span
            className={`grid size-12 place-items-center rounded-2xl font-mono text-sm font-semibold ${tone.marker}`}
          >
            {step.number}
          </span>
        </div>
        <div>
          <p
            className={`font-mono text-[0.68rem] uppercase tracking-[0.18em] ${tone.label}`}
          >
            {step.label}
          </p>
          <h3 className="mt-2 font-heading text-2xl leading-tight font-medium">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}
