"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { Icon } from "./Icon";

/**
 * Persistent "Schedule a Free Call" pill that appears after the user scrolls past
 * the hero. Dismissible, keyboard-accessible, and positioned to avoid the
 * floating WhatsApp button (bottom-right).
 */
export function StickyCta() {
  const t = useTranslations("nav");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  const handleClick = () => {
    posthog.capture("sticky_cta_clicked", { button_text: t("cta") });
  };

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 rounded-full bg-slate-900 text-white shadow-xl pl-5 pr-2 py-2">
        <a
          href="#contact"
          onClick={handleClick}
          className="text-sm font-semibold hover:text-blue-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          {t("cta")}
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label={t("closeMenu")}
          className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
