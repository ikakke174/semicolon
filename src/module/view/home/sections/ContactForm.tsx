"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Container, Field, Icon, SectionHeading } from "@/module/lib/components/shared";
import { serviceOptions, site } from "@/module/lib/utility/data/site";
import { submitJson, validateContact } from "@/module/lib/utility/services";
import type {
  ContactValues,
  FormErrors,
  IconName,
  SubmitStatus,
} from "@/module/lib/utility/types/content.interface";
import "./ContactForm.css";

const initialValues: ContactValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const fieldOrder: (keyof ContactValues)[] = ["fullName", "email", "phone", "service", "message"];

type Tone = "sent" | "info" | "error";

const statusMessages: Partial<Record<SubmitStatus, { text: string; tone: Tone }>> = {
  sent: {
    text: "Thanks, your message was sent. We will reply to the email address you gave.",
    tone: "sent",
  },
  unconfigured: {
    text: "Your details look valid, but this form is not connected to a service yet, so nothing was sent.",
    tone: "info",
  },
  error: {
    text: "Your message was not sent because of a problem on our side. Please try again.",
    tone: "error",
  },
};

interface ContactCard {
  icon: IconName;
  title: string;
  value: string | null;
  href?: string | null;
  featured?: boolean;
}

function getContactCards(): ContactCard[] {
  const { email, phone, address } = site.contact;
  return [
    { icon: "phone", title: "Call us", value: phone, href: phone && `tel:${phone.replace(/[^\d+]/g, "")}` },
    { icon: "pin", title: "Visit us", value: address },
    { icon: "mail", title: "Email us", value: email, href: email && `mailto:${email}`, featured: true },
  ];
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors<ContactValues>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => (current[name as keyof ContactValues] ? { ...current, [name]: undefined } : current));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    const firstInvalid = fieldOrder.find((name) => found[name]);
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setStatus("submitting");
    const result = await submitJson(site.endpoints.contact, values);
    setStatus(result);
    if (result === "sent") setValues(initialValues);
  }

  const feedback = statusMessages[status];

  return (
    <section id="contact" aria-labelledby="contact-title" className="sc-contact">
      <Container>
        <SectionHeading
          id="contact-title"
          title="Get In Touch"
          description="Tell us about your project and what you want to achieve."
        />

        <ul className="sc-contact__cards">
          {getContactCards().map((card) => (
            <li
              key={card.title}
              className={`sc-contact-card${card.featured ? " sc-contact-card--featured" : ""}`}
            >
              <span className="sc-contact-card__icon">
                <Icon name={card.icon} className="sc-icon-lg" />
              </span>
              <h3 className="sc-contact-card__title">{card.title}</h3>
              {card.value && card.href ? (
                <a href={card.href} className="sc-contact-card__value">
                  {card.value}
                </a>
              ) : (
                <p className="sc-contact-card__value">{card.value || "Not added yet"}</p>
              )}
            </li>
          ))}
        </ul>

        <form
          id="contact-form"
          noValidate
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-title"
          className="sc-form"
        >
          <h3 id="contact-form-title" className="sc-form__title">
            Send us a project enquiry
          </h3>
          <div className="sc-form__grid">
            <Field id="fullName" label="Full name" required error={errors.fullName}>
              {(control) => (
                <input {...control} autoComplete="name" value={values.fullName} onChange={handleChange} />
              )}
            </Field>
            <Field id="email" label="Email address" required error={errors.email}>
              {(control) => (
                <input {...control} type="email" autoComplete="email" value={values.email} onChange={handleChange} />
              )}
            </Field>
            <Field id="phone" label="Phone number" error={errors.phone}>
              {(control) => (
                <input {...control} type="tel" autoComplete="tel" value={values.phone} onChange={handleChange} />
              )}
            </Field>
            <Field id="company" label="Company name">
              {(control) => (
                <input {...control} autoComplete="organization" value={values.company} onChange={handleChange} />
              )}
            </Field>
            <Field id="service" label="Service interested in" required wide error={errors.service}>
              {(control) => (
                <select {...control} value={values.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </Field>
            <Field id="message" label="Project details" required wide error={errors.message}>
              {(control) => (
                <textarea {...control} rows={5} value={values.message} onChange={handleChange} />
              )}
            </Field>
          </div>

          <div className="sc-form__footer">
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send enquiry"}
            </Button>
            <p className="sc-form__hint">Fields marked * are required.</p>
          </div>

          <div role="status" aria-live="polite">
            {feedback && (
              <p
                className={`sc-form__status${feedback.tone !== "info" ? ` sc-form__status--${feedback.tone}` : ""}`}
              >
                {feedback.text}
              </p>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
}
