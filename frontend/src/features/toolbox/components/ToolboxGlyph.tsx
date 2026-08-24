import {
  Braces,
  DatabaseZap,
  type LucideIcon,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import type { ToolboxVisual } from "@/features/toolbox/types/toolbox";

const glyphs: Record<ToolboxVisual, LucideIcon> = {
  frontend: MonitorSmartphone,
  state: Braces,
  backend: DatabaseZap,
  quality: ShieldCheck,
};

export function ToolboxGlyph({ visual }: { visual: ToolboxVisual }) {
  const Icon = glyphs[visual];

  return <Icon className="size-5" aria-hidden="true" />;
}
