import { toolSignalLabels } from "@/features/toolbox/config/toolboxToneStyles";
import type { ToolboxTool } from "@/features/toolbox/types/toolbox";

export function ToolPill({
  className,
  tool,
}: {
  className: string;
  tool: ToolboxTool;
}) {
  return (
    <li className={`rounded-2xl border px-3 py-2 ${className}`}>
      <span className="block font-medium text-foreground">{tool.name}</span>
      <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
        {toolSignalLabels[tool.signal]}
      </span>
    </li>
  );
}
