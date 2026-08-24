export type ContactInquiryType =
  | "role-opportunity"
  | "project-collaboration"
  | "technical-discussion"
  | "other";

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject: ContactInquiryType;
  message: string;
}

export interface ContactMessageResponse {
  id: string;
  createdAt?: string;
}
