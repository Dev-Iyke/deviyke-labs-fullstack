import { Badge } from "@/components/ui/badge";
import type { ProjectEvidenceStatus } from "@/features/projects/types/project";

const statusLabel: Record<ProjectEvidenceStatus, string> = {
  "SHIPPED": "Shipped",
  "ACTIVE_BUILD": "Active build",
  "EXPERIMENT": "Experiment",
};

export function ProjectStatusBadge({
  status,
}: {
  status: ProjectEvidenceStatus;
}) {
  return (
    <Badge
      variant="outline"
      className="border-signal/30 bg-signal/8 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-foreground"
    >
      {statusLabel[status]}
    </Badge>
  );
}
