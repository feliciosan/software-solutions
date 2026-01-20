"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("psychologist.faq");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
    question: t(`list.${i}.question`),
    answer: t(`list.${i}.answer`),
  }));

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-semibold mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-teal-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 lg:px-8 lg:py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg lg:text-xl font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-2">
                      <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-4" />
                      <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">{t("stillHaveQuestions")}</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-lg group"
          >
            {t("contactCTA")}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
