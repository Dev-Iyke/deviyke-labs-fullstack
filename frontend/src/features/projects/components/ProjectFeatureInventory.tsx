import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectFeature } from "@/features/projects/types/project";

export function ProjectFeatureInventory({
  features,
}: {
  features?: readonly ProjectFeature[];
}) {
  if (!features?.length) {
    return null;
  }

  return (
    <Card className="border-border/70 bg-card/70">
      <CardHeader>
        <CardTitle className="text-2xl">Feature inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.name}
              className="rounded-2xl border border-border/75 bg-surface/65 p-5"
            >
              <h2 className="font-heading text-xl font-medium">
                {feature.name}
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {feature.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {feature.roles.map((role) => (
                  <Badge
                    key={role}
                    variant="outline"
                    className="h-auto rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-border/70 bg-card/65 p-3">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Engineering angle
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/85">
                  {feature.engineering}
                </p>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
