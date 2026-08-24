"use client";

import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactMessage } from "@/features/contact/services/contact.api";
import type { ContactInquiryType } from "@/features/contact/types/contact";

const inquiryTypes = [
  {
    label: "Role opportunity",
    value: "role-opportunity",
  },
  {
    label: "Project collaboration",
    value: "project-collaboration",
  },
  {
    label: "Technical discussion",
    value: "technical-discussion",
  },
  {
    label: "Other",
    value: "other",
  },
] as const satisfies readonly {
  label: string;
  value: ContactInquiryType;
}[];

const contactSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  inquiryType: z.enum([
    "role-opportunity",
    "project-collaboration",
    "technical-discussion",
    "other",
  ]),
  message: z
    .string()
    .trim()
    .min(20, "Please add a little more detail so I can respond well."),
  name: z.string().trim().min(2, "Please enter your name."),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

const defaultValues: ContactFormSchema = {
  email: "",
  inquiryType: "role-opportunity",
  message: "",
  name: "",
};

export function ContactForm() {
  const {
    mutateAsync: sendContactMessage,
    isPending,
    isError,
    isSuccess,
  } = useSubmitContactMessage();
  const form = useForm<ContactFormSchema>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  const { control, handleSubmit, reset } = form;

  const statusMessage = useMemo(() => {
    if (isPending) {
      return "Sending your message...";
    }

    if (isSuccess) {
      return "Message received. I will review the context and respond with a clear next step.";
    }

    if (isError) {
      return "The request did not complete. Your message is still here, so you can try again.";
    }

    return "Share enough context to make the first response useful.";
  }, [isPending, isError, isSuccess]);

  async function onSubmit(values: ContactFormSchema) {
    try {
      const {inquiryType, ...rest} = values
      await sendContactMessage({
        ...rest,
        subject: inquiryType,
      });
      reset(defaultValues);
    } catch {
      // Toasts and inline status are handled by the API/interceptor layer.
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] border border-border/80 bg-card/75 p-5 shadow-sm shadow-foreground/5 sm:p-6 dark:border-white/[0.12] dark:bg-card/80 dark:shadow-black/20"
    >
      <FieldSet className="gap-6">
        <FieldGroup className="grid gap-5 sm:grid-cols-2">
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <FieldContent>
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                  <Input
                    {...field}
                    id="contact-name"
                    autoComplete="name"
                    aria-invalid={fieldState.invalid}
                    disabled={isPending}
                    placeholder="Your name"
                  />
                </Field>
                <FieldError errors={[fieldState.error]} />
              </FieldContent>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <FieldContent>
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={fieldState.invalid}
                    disabled={isPending}
                    placeholder="you@example.com"
                  />
                </Field>
                <FieldError errors={[fieldState.error]} />
              </FieldContent>
            )}
          />
        </FieldGroup>

        <Controller
          control={control}
          name="inquiryType"
          render={({ field, fieldState }) => (
            <FieldContent>
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-inquiry-type">
                  What should we talk about?
                </FieldLabel>
                <Select
                  disabled={isPending}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <SelectTrigger
                    id="contact-inquiry-type"
                    aria-invalid={fieldState.invalid}
                    onBlur={field.onBlur}
                  >
                    <SelectValue placeholder="Choose a conversation type" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <FieldError errors={[fieldState.error]} />
            </FieldContent>
          )}
        />

        <Controller
          control={control}
          name="message"
          render={({ field, fieldState }) => (
            <FieldContent>
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                <Textarea
                  {...field}
                  id="contact-message"
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  placeholder="Tell me what you are building, hiring for, or trying to solve..."
                />
              </Field>
              <FieldError errors={[fieldState.error]} />
            </FieldContent>
          )}
        />
      </FieldSet>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          className="text-sm leading-6 text-muted-foreground"
          aria-live="polite"
        >
          {statusMessage}
        </p>
        <LoadingButton
          type="submit"
          loading={isPending}
          allowAdjustableWidth
          className="bg-signal text-signal-foreground hover:bg-signal/85"
        >
          Send message
          <Send data-icon="inline-end" aria-hidden="true" />
        </LoadingButton>
      </div>
    </form>
  );
}


