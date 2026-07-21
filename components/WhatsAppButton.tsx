"use client";

import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "./Icon";

/** Floating WhatsApp button for fast, low-friction contact on every screen. */
export function WhatsAppButton() {
  const t = useTranslations("footer");

  const handleClick = () => {
    posthog.capture("whatsapp_clicked", { source: "floating_button" });
  };

  return (
    <a
      href={getWhatsAppUrl(t("whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={t("whatsapp")}
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Icon name="whatsapp" className="w-7 h-7" />
    </a>
  );
}
