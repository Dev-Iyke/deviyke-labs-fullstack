import { toolboxToneStyles } from "@/features/toolbox/config/toolboxToneStyles";
import { ToolPill } from "@/features/toolbox/components/ToolPill";
import { ToolboxGlyph } from "@/features/toolbox/components/ToolboxGlyph";
import type { ToolboxGroup } from "@/features/toolbox/types/toolbox";

export function ToolboxGroupPanel({ group }: { group: ToolboxGroup }) {
  const tone = toolboxToneStyles[group.tone];

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border p-5 shadow-sm transition-colors sm:p-6 ${tone.shell}`}
    >
      <div
        className={`absolute -right-16 -top-16 size-40 rounded-full blur-3xl ${tone.glow}`}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p
              className={`mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] ${tone.accent}`}
            >
              {group.eyebrow}
            </p>
            <h3 className="font-heading text-2xl leading-tight font-medium">
              {group.title}
            </h3>
          </div>
          <div
            className={`grid size-12 shrink-0 place-items-center rounded-2xl border shadow-sm ${tone.icon}`}
          >
            <ToolboxGlyph visual={group.visual} />
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          {group.description}
        </p>

        <div className="mt-6 rounded-2xl border border-border/70 bg-background/45 p-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
            Outcome
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground/85">
            {group.outcome}
          </p>
        </div>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2" aria-label="Tools">
          {group.tools.map((tool) => (
            <ToolPill key={tool.name} className={tone.pill} tool={tool} />
          ))}
        </ul>
      </div>
    </article>
  );
}
