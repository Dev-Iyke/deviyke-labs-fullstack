"use client";

import Link from "next/link";
import { FileQuestion, FolderOpen, RefreshCw, Unplug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";

type ContentStateVariant = "empty" | "error" | "unavailable";

type ContentStateAction =
  | {
      href: string;
      label: string;
      loading?: never;
      onClick?: never;
    }
  | {
      href?: never;
      label: string;
      loading?: boolean;
      onClick: () => void;
    };

interface ContentStateProps {
  action?: ContentStateAction;
  description: string;
  eyebrow?: string;
  title: string;
  variant?: ContentStateVariant;
}

const stateConfig = {
  empty: {
    icon: FolderOpen,
    iconClassName: "border-signal/25 bg-signal/10 text-signal",
    ringClassName: "border-signal/10",
  },
  error: {
    icon: Unplug,
    iconClassName: "border-chart-5/25 bg-chart-5/10 text-chart-5",
    ringClassName: "border-chart-5/10",
  },
  unavailable: {
    icon: FileQuestion,
    iconClassName: "border-chart-3/25 bg-chart-3/10 text-chart-3",
    ringClassName: "border-chart-3/10",
  },
} satisfies Record<
  ContentStateVariant,
  {
    icon: typeof FolderOpen;
    iconClassName: string;
    ringClassName: string;
  }
>;

export function ContentState({
  action,
  description,
  eyebrow = "Nothing to show",
  title,
  variant = "empty",
}: ContentStateProps) {
  const config = stateConfig[variant];
  const Icon = config.icon;

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/65 px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14"
      role={variant === "error" ? "alert" : "status"}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 size-40 rounded-full border-[24px] ${config.ringClassName}`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -bottom-12 -left-8 size-32 rounded-full border-[20px] ${config.ringClassName}`}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl">
        <div
          className={`mx-auto grid size-14 place-items-center rounded-2xl border ${config.iconClassName}`}
        >
          <Icon className="size-6" aria-hidden="true" />
        </div>
        <p className="mt-6 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>

        {action ? (
          <div className="mt-8 flex justify-center">
            {action.href ? (
              <Button asChild>
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ) : (
              <LoadingButton
                type="button"
                loading={action.loading}
                loadingText="Trying again"
                onClick={action.onClick}
                className="px-4"
              >
                <RefreshCw data-icon="inline-start" aria-hidden="true" />
                {action.label}
              </LoadingButton>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
