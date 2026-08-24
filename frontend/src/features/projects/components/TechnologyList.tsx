const technologyTones = [
  "border-signal/25 bg-signal/12 text-signal",
  "border-chart-2/25 bg-chart-2/12 text-chart-2",
  "border-chart-3/25 bg-chart-3/12 text-chart-3",
  "border-chart-4/25 bg-chart-4/12 text-chart-4",
  "border-chart-5/25 bg-chart-5/12 text-chart-5",
  "border-foreground/15 bg-foreground/8 text-foreground/80",
] as const;

export function TechnologyList({
  technologies,
}: {
  technologies: readonly string[];
}) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {technologies.map((technology, index) => (
        <li
          key={technology}
          className={`rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] ${technologyTones[index % technologyTones.length]}`}
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
