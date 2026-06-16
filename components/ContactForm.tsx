"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setValues(initialState);
    } catch {
      const subject = encodeURIComponent(`Inquiry from ${site.name} website`);
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setValues(initialState);
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-accent" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="mt-2 w-full border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-accent" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="mt-2 w-full resize-y border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-accent" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-accent px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-surface transition-colors hover:bg-accent-hover disabled:opacity-60 md:w-auto"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-secondary" role="status">
          Thank you for reaching out. We&apos;ll be in touch soon.
        </p>
      )}
    </form>
  );
}
