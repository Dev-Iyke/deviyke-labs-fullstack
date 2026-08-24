"use client";

import { toast } from "sonner";

type ToastVariant = "success" | "error" | "info" | "warning";

interface ShowToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
}

export function showToast({
  description,
  title,
  variant = "info",
}: ShowToastOptions) {
  toast[variant](title, {
    description,
  });
}
