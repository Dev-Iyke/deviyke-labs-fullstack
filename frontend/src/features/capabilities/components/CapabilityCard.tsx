import { capabilityToneStyles } from "@/features/capabilities/config/capabilityToneStyles";
import { CapabilityIllustration } from "@/features/capabilities/components/CapabilityIllustration";
import type { Capability } from "@/features/capabilities/types/capability";

export function CapabilityCard({ capability }: { capability: Capability }) {
  const tone = capabilityToneStyles[capability.tone];

  return (
    <article
      className={`relative h-full overflow-hidden rounded-[2rem] border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:p-6 ${tone.shell}`}
    >
      <div
        className={`absolute -right-16 -top-16 size-40 rounded-full blur-3xl ${tone.glow}`}
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col">
        <CapabilityIllustration
          tone={capability.tone}
          visual={capability.visual}
        />

        <div className="flex flex-1 flex-col gap-6">
          <h3 className="font-heading text-2xl leading-tight font-medium">
            {capability.title}
          </h3>

          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {capability.summary}
          </p>

          <div>
            <p className="mb-3 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              How this shows up
            </p>
            <ul className="space-y-3 text-sm leading-6 text-foreground/85">
              {capability.proofPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    className={`mt-2 size-2 shrink-0 rounded-full shadow-[0_0_1rem_currentColor] ${tone.dot}`}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul
            className="mt-auto flex flex-wrap gap-2"
            aria-label="Related tools"
          >
            {capability.tools.map((tool) => (
              <li
                key={tool}
                className={`rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground ${tone.tool}`}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
