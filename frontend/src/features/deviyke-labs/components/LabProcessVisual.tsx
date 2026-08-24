import { labToneStyles } from "@/features/deviyke-labs/config/labToneStyles";
import type { LabStep } from "@/features/deviyke-labs/types/philosophy";

const orbitItems = ["Context", "Flow", "Contract", "Proof"] as const;

export function LabProcessVisual({ steps }: { steps: readonly LabStep[] }) {
  return (
    <div className="relative min-w-0 rounded-[2rem] border border-border/70 bg-card/70 p-3 shadow-sm sm:p-5">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
        aria-hidden="true"
      >
        <div className="absolute -left-20 -top-20 size-56 rounded-full bg-signal/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 size-72 rounded-full bg-chart-3/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] opacity-30 [background-size:22px_22px]" />
      </div>

      <div className="relative flex flex-col gap-6 sm:gap-8">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
            Operating loop
          </p>
          <h3 className="mt-4 max-w-[420px] font-heading text-3xl leading-tight font-semibold">
            From business idea to reliable product interface.
          </h3>
          <p className="mt-4 max-w-[420px] text-sm leading-7 text-muted-foreground">
            The work moves through business context, user flow, backend
            contract, and public proof. Each layer keeps the next one honest.
          </p>
        </div>

        <div className="relative mx-auto grid size-56 place-items-center sm:size-72">
          <div
            className="absolute inset-3 rounded-full border border-dashed border-signal/35 sm:inset-4"
            aria-hidden="true"
          />
          <div
            className="absolute inset-12 rounded-full border border-border bg-background/55 backdrop-blur sm:inset-14"
            aria-hidden="true"
          />
          <div className="relative z-10 rounded-3xl border border-border bg-surface/85 px-5 py-4 text-center shadow-sm">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
              DevIyke Labs
            </p>
            <p className="mt-1 font-heading text-xl font-medium">Method</p>
          </div>

          {orbitItems.map((item, index) => (
            <span
              key={item}
              className={getOrbitClassName(index)}
              aria-label={item}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="rounded-3xl bg-background/35 backdrop-blur">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            What this produces
          </p>
          <div className="mt-4 grid gap-3">
            {steps.map((step) => {
              const tone = labToneStyles[step.tone];

              return (
                <div
                  key={step.outcome}
                  className={`flex items-start gap-3 rounded-lg border px-3 py-2 ${tone.output}`}
                >
                  <span
                    className={`mt-1 lg:mt-2 size-2.5 shrink-0 rounded-full shadow-[0_0_1rem_currentColor] ${tone.dot}`}
                    aria-hidden="true"
                  />
                  <p className="text-sm text-foreground/85">
                    {step.outcome}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function getOrbitClassName(index: number) {
  const base =
    "absolute z-20 rounded-full border px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] shadow-sm backdrop-blur sm:px-3 sm:py-1.5 sm:text-[0.65rem] sm:tracking-[0.14em]";

  const positions = [
    "left-1/2 top-0 -translate-x-1/2 border-signal/40 bg-signal/15 text-foreground",
    "right-1 top-1/2 -translate-y-1/2 border-chart-2/40 bg-chart-2/15 text-foreground sm:right-0",
    "bottom-0 left-1/2 -translate-x-1/2 border-chart-3/40 bg-chart-3/15 text-foreground",
    "left-1 top-1/2 -translate-y-1/2 border-chart-4/40 bg-chart-4/15 text-foreground sm:left-0",
  ] as const;

  return `${base} ${positions[index]}`;
}
