import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function PageContainer({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
