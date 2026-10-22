"use client";

import { useState, type FormEvent } from "react";
import { Button, Container } from "@/module/lib/components/shared";
import { site } from "@/module/lib/utility/data/site";
import { submitJson, validateNewsletter } from "@/module/lib/utility/services";
import type { SubmitStatus } from "@/module/lib/utility/types/content.interface";
import "./Newsletter.css";

type Tone = "sent" | "info" | "error";

const messages: Partial<Record<SubmitStatus, { text: string; tone: Tone }>> = {
  sent: { text: "Thanks, you are subscribed.", tone: "sent" },
  unconfigured: {
    text: "Your email looks valid, but newsletter sign-up is not connected yet, so nothing was saved.",
    tone: "info",
  },
  error: {
    text: "Something went wrong and you were not subscribed. Please try again.",
    tone: "error",
  },
};

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = validateNewsletter(email);
    setError(message);
    if (message) {
      document.getElementById("newsletter-email")?.focus();
      return;
    }
    setStatus("submitting");
    const result = await submitJson(site.endpoints.newsletter, { email: email.trim() });
    setStatus(result);
    if (result === "sent") setEmail("");
  }

  const feedback = messages[status];
  const tone: Tone | undefined = error ? "error" : feedback?.tone;

  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="sc-newsletter">
      <Container>
        <div className="sc-newsletter__box">
          <div className="sc-newsletter__intro">
            <h2 id="newsletter-title" className="sc-newsletter__title">
              Subscribe for the latest newsletter
            </h2>
            <p className="sc-newsletter__text">
              Technology and business updates from {site.name}.
            </p>
          </div>
          <form noValidate onSubmit={handleSubmit} className="sc-newsletter__form">
            <label htmlFor="newsletter-email" className="sc-sr-only">
              Email address
            </label>
            <div className="sc-newsletter__row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error ? "true" : undefined}
                aria-describedby="newsletter-feedback"
                className={`sc-newsletter__input${error ? " sc-newsletter__input--invalid" : ""}`}
              />
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Subscribing…" : "Subscribe"}
              </Button>
            </div>
            <p
              id="newsletter-feedback"
              role="status"
              className={`sc-newsletter__feedback${tone && tone !== "info" ? ` sc-newsletter__feedback--${tone}` : ""}`}
            >
              {error || feedback?.text}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
