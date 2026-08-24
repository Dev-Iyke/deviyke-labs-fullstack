import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-xl border border-border/80 bg-background/70 px-3 py-2 text-base leading-6 text-foreground transition-colors outline-none placeholder:text-muted-foreground/75 focus-visible:border-signal focus-visible:ring-1 focus-visible:ring-signal/25 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-sm dark:border-white/[0.12] dark:bg-input/20 dark:disabled:bg-input/60 dark:focus-visible:border-signal/70 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
