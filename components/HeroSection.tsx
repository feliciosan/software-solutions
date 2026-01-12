"use client";

import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Button } from "./Button";
import Image from "next/image";
import posthog from "posthog-js";

export function HeroSection() {
  const t = useTranslations("hero");

  const handleCtaClick = () => {
    posthog.capture("cta_hero_clicked", {
      button_text: t("cta"),
      destination: "#contact",
    });
  };

  const handleLearnMoreClick = () => {
    posthog.capture("cta_learn_more_clicked", {
      button_text: t("learnMore"),
      destination: "#about",
    });
  };

  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 -z-10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              {t("availableBadge")}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              {t("headline")}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("subheadline")}
            </p>

            <p className="mt-6 text-base text-slate-700 max-w-2xl mx-auto lg:mx-0 border-l-4 border-blue-500 pl-4 italic">
              {t("foundersIntro")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                href="#contact"
                onClick={handleCtaClick}
                className="shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20 transition-all"
              >
                {t("cta")}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                href="#about"
                onClick={handleLearnMoreClick}
                className="border-2 border-slate-200 hover:border-slate-300"
              >
                {t("learnMore")}
              </Button>
            </div>
          </div>

          {/* Photos */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center gap-4">
              {/* Team Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {t("teamBadge")}
              </div>

              <div className="relative flex gap-4 sm:gap-6">
                {/* Avatar 1 - Top Left - Multiple users */}
                <div className="absolute -top-4 left-0 sm:-left-8 z-10 animate-float">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    {/* Plus icon badge */}
                    <div className="absolute -top-1 -left-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Avatar 2 - Top Right - Single user */}
                <div
                  className="absolute -top-6 right-0 sm:-right-8 z-10 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    {/* Plus icon badge */}
                    <div className="absolute -top-1 -left-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Avatar 3 - Bottom Right - Multiple users */}
                <div
                  className="absolute bottom-8 right-0 sm:-right-6 z-10 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    {/* Plus icon badge */}
                    <div className="absolute -top-1 -left-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Photo 1 */}
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-slate-900/20 rounded-3xl blur-2xl"></div>

                  {/* Photo container */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1.5 shadow-2xl">
                    <div className="bg-slate-100 rounded-[22px] w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/profile-photo.png"
                        alt="CodaCrew - Senior Software Development Team specializing in React, Next.js and TypeScript"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Photo 2 */}
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-slate-900/20 rounded-3xl blur-2xl"></div>

                  {/* Photo container */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1.5 shadow-2xl">
                    <div className="bg-slate-100 rounded-[22px] w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/profile-photo-2.png"
                        alt="Senior Full Stack Developer specializing in React, Node.js and mobile development"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Floating badge - Centered below both photos */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 border border-slate-200 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {t("experienceBadge.years")}
                      </p>
                      <p className="text-xs text-slate-600">
                        {t("experienceBadge.label")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
