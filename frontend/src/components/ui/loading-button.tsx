"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  loading?: boolean
  loadingText?: React.ReactNode
  loader?: React.ReactNode
  allowAdjustableWidth?: boolean
}

function LoadingButton({
  allowAdjustableWidth = false,
  children,
  className,
  disabled,
  loader,
  loading = false,
  loadingText,
  ...props
}: LoadingButtonProps) {
  const loadingIcon = loader ?? (
    <Loader2 data-icon="inline-start" className="animate-spin" />
  )

  return (
    <Button
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={cn(loading && allowAdjustableWidth && "relative", className)}
      {...props}
    >
      {loading && allowAdjustableWidth ? (
        <>
          <span className="invisible inline-flex items-center gap-1.5">
            {children}
          </span>
          <span className="absolute inset-0 grid place-items-center">
            {loadingIcon}
          </span>
        </>
      ) : loading ? (
        <>
          {loadingIcon}
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </Button>
  )
}

export { LoadingButton }
