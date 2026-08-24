import { toolboxOutcomes } from "@/features/toolbox/data/toolbox";

export function ToolboxSignalBoard() {
  return (
    <div className="relative overflow-hidden">
      {/* <div
        className="absolute -left-16 -top-16 size-44 rounded-full bg-signal/15 blur-3xl"
        aria-hidden="true"
      /> */}
      {/* <div
        className="absolute -bottom-20 right-0 size-56 rounded-full bg-chart-2/15 blur-3xl"
        aria-hidden="true"
      /> */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] opacity-25 [background-size:20px_20px]"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="grid gap-3 lg:grid-cols-3">
          {toolboxOutcomes.map((outcome, index) => (
            <div
              key={outcome.label}
              className="grid gap-3 rounded-2xl border border-border/70 bg-background/45 p-4 sm:grid-cols-[2.75rem_1fr] lg:grid-cols-1"
            >
              <span className="grid size-9 place-items-center rounded-2xl border border-border bg-surface font-mono text-[0.68rem] font-semibold text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium text-foreground">{outcome.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
