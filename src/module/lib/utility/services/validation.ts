import type {
  ContactValues,
  FormErrors,
} from "@/module/lib/utility/types/content.interface";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidEmail = (value: string): boolean =>
  EMAIL_PATTERN.test(value.trim());

export const isValidPhone = (value: string): boolean => {
  const trimmed = value.trim();
  if (trimmed === "") return true; // phone is optional
  const digits = trimmed.replace(/\D/g, "");
  return (
    /^[+()\-\s\d.]+$/.test(trimmed) && digits.length >= 7 && digits.length <= 15
  );
};

export function validateNewsletter(email: string): string {
  if (!email.trim()) return "Enter your email address.";
  if (!isValidEmail(email))
    return "Enter a valid email address, like name@company.com.";
  return "";
}

export function validateContact(values: ContactValues): FormErrors<ContactValues> {
  const errors: FormErrors<ContactValues> = {};
  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!isValidEmail(values.email))
    errors.email = "Enter a valid email address, like name@company.com.";
  if (!isValidPhone(values.phone))
    errors.phone = "Enter a valid phone number (7 to 15 digits), or leave it blank.";
  if (!values.service) errors.service = "Choose the service you are interested in.";
  if (!values.message.trim()) errors.message = "Tell us a little about your project.";
  else if (values.message.trim().length < 10)
    errors.message = "Add a few more details (at least 10 characters).";
  return errors;
}
