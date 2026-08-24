"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/axiosInstance";
import type {
  ContactMessagePayload,
  ContactMessageResponse,
} from "@/features/contact/types/contact";
import { MutationResponse } from "@/lib/api/queryTypes";

const contactEndpoint = `/v1/contact-submissions`;

export async function submitContactMessage(
  payload: ContactMessagePayload,
): Promise<MutationResponse<ContactMessageResponse>> {
  const response = await api.post<MutationResponse<ContactMessageResponse>, ContactMessagePayload>(
    contactEndpoint,
    payload,
  );

  return response.data;
}

export function useSubmitContactMessage() {
  return useMutation({
    mutationFn: (payload: ContactMessagePayload) =>
      submitContactMessage(payload),
  });
}

