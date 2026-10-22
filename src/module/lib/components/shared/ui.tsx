import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import "./ui.css";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`sc-container ${className}`.trim()}>{children}</div>;
}

export function SectionHeading({
  title,
  description,
  id,
}: {
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="sc-section-heading">
      <h2 id={id} className="sc-section-heading__title">
        {title}
      </h2>
      {description && <p className="sc-section-heading__text">{description}</p>}
    </div>
  );
}

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)
  | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)
);

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `sc-btn sc-btn--${variant} ${className}`.trim();
  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export interface ControlProps {
  id: string;
  name: string;
  required?: boolean;
  className: string;
  "aria-invalid"?: "true";
  "aria-describedby"?: string;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  wide?: boolean;
  // Render the actual <input>, <textarea> or <select>, spreading the props it is given.
  children: (control: ControlProps) => ReactNode;
}

// Visible label + control + linked error text.
export function Field({ id, label, error, required, wide = false, children }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className={wide ? "sc-field--wide" : undefined}>
      <label htmlFor={id} className="sc-field__label">
        {label}
        {required && (
          <span className="sc-field__required" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children({
        id,
        name: id,
        required,
        className: `sc-field__control${error ? " sc-field__control--invalid" : ""}`,
        "aria-invalid": error ? "true" : undefined,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="sc-field__error">
          {error}
        </p>
      )}
    </div>
  );
}
