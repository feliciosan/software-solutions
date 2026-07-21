"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef } from "react";
import posthog from "posthog-js";

// Validation schema (content-first contact: name optional, no budget)
const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Please provide a bit more detail"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const formStartedRef = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFormStarted = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      posthog.capture("contact_form_started", {
        timestamp: new Date().toISOString(),
      });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      // Track successful form submission
      posthog.capture("contact_form_submitted", {
        message_length: data.message.length,
      });

      // Identify user by email after successful submission
      posthog.identify(data.email, {
        email: data.email,
        name: data.company,
      });

      setSubmitStatus({
        type: "success",
        message: t("success"),
      });
      reset();
      formStartedRef.current = false;
    } catch (error: unknown) {
      console.error("Error submitting form:", error);

      // Track form submission error
      posthog.capture("contact_form_error", {
        error_message: error instanceof Error ? error.message : "Unknown error",
      });

      // Also capture exception for error tracking
      posthog.captureException(error);

      setSubmitStatus({
        type: "error",
        message: t("error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInvalidSubmit = () => {
    // Track validation errors
    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      posthog.capture("contact_form_validation_error", {
        error_fields: errorFields,
        error_count: errorFields.length,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <form
        onSubmit={handleSubmit(onSubmit, handleInvalidSubmit)}
        className="space-y-6"
      >
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-white/80 mb-2"
          >
            {t("email.label")}
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            onFocus={handleFormStarted}
            className={`w-full px-4 py-3 bg-surface border-2 ${
              errors.email ? "border-red-500" : "border-border"
            } rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm`}
            placeholder={t("email.placeholder")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-300">{t("email.error")}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-white/80 mb-2"
          >
            {t("company.label")}
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className={`w-full px-4 py-3 bg-surface border-2 ${
              errors.company ? "border-red-500" : "border-border"
            } rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm`}
            placeholder={t("company.placeholder")}
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-white/80 mb-2"
          >
            {t("message.label")}
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className={`w-full px-4 py-3 bg-surface border-2 ${
              errors.message ? "border-red-500" : "border-border"
            } rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm resize-none`}
            placeholder={t("message.placeholder")}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-300">{t("message.error")}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t("sending") : t("submit")}
        </button>

        {/* Status Messages */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-500/20 border border-green-500/50 text-green-300"
                : "bg-red-500/20 border border-red-500/50 text-red-300"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
