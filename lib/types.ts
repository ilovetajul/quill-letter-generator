export type ApplicationType =
  | "Leave Application"
  | "Job Application"
  | "Complaint"
  | "Resignation"
  | "Internship Application"
  | "Scholarship Application"
  | "Bank Application"
  | "Others";

export type LanguageType = "English" | "Bengali";
export type ToneType = "Highly Formal" | "Standard" | "Urgent";

export interface LetterFormData {
  applicationType: ApplicationType;
  subject: string;
  applicantInfo: string;
  recipientInfo: string;
  language: LanguageType;
  tone: ToneType;
  additionalContext: string;
}

export const APPLICATION_TYPES: ApplicationType[] = [
  "Leave Application",
  "Job Application",
  "Complaint",
  "Resignation",
  "Internship Application",
  "Scholarship Application",
  "Bank Application",
  "Others",
];

export const LANGUAGE_OPTIONS: LanguageType[] = ["English", "Bengali"];
export const TONE_OPTIONS: ToneType[] = ["Highly Formal", "Standard", "Urgent"];
