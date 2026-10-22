export type IconName =
  | "briefcase"
  | "code"
  | "cloud"
  | "users"
  | "layers"
  | "award"
  | "target"
  | "support"
  | "phone"
  | "pin"
  | "mail"
  | "menu"
  | "close";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  featured?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  icon: IconName;
  placeholder?: boolean;
}

export interface Insight {
  title: string;
  text: string;
  image: string;
  alt: string;
}

export interface AboutPoint {
  title: string;
  text: string;
  icon: IconName;
}

export interface Client {
  name: string;
  logo: string | null;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  copyrightYear: number;
  aboutVideoUrl: string | null;
  contact: {
    email: string | null;
    phone: string | null;
    address: string | null;
  };
  socials: SocialLink[];
  endpoints: {
    contact: string | undefined;
    newsletter: string | undefined;
  };
}

export interface ContactValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export type FormErrors<T> = Partial<Record<keyof T, string>>;

export type SubmitStatus = "idle" | "submitting" | "sent" | "unconfigured" | "error";
