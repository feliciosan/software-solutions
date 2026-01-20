"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import Image from "next/image";

export function HealthMissionSection() {
  const t = useTranslations("health.mission");

  return (
    <section className="py-20 bg-white" aria-labelledby="mission-heading">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Intro humanizado */}
          <div className="text-center mb-16">
            <h2
              id="mission-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              {t("headline")}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("subheadline")}
            </p>
          </div>

          {/* Fotos e apresentação */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Felício */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50/20 rounded-3xl p-8 shadow-lg border border-blue-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-1 shadow-xl">
                    <div className="w-full h-full bg-slate-100 rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src="/profile-photo.png"
                        alt="Felício Santos - Co-fundador CodaCrew, especialista em desenvolvimento web"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Badge verificado */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Felício Santos
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {t("member1.role")}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {t("member1.bio")}
                </p>
              </div>
            </div>

            {/* Gabriel */}
            <div className="bg-gradient-to-br from-green-50/50 to-blue-50 rounded-3xl p-8 shadow-lg border border-green-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-700 rounded-full p-1 shadow-xl">
                    <div className="w-full h-full bg-slate-100 rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src="/profile-photo-2.png"
                        alt="Gabriel Santos - Co-fundador CodaCrew, especialista em design e UX"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Badge verificado */}
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Gabriel Santos
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  {t("member2.role")}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {t("member2.bio")}
                </p>
              </div>
            </div>
          </div>

          {/* Nossa missão - destaque */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="font-semibold text-sm uppercase tracking-wider">
                  {t("missionBadge")}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                {t("missionTitle")}
              </h3>

              <p className="text-lg sm:text-xl leading-relaxed opacity-95 mb-8">
                {t("missionDescription")}
              </p>

              {/* Stats rápidos */}
              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold mb-1">
                    {t("stat1Value")}
                  </div>
                  <div className="text-sm opacity-90">{t("stat1Label")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold mb-1">
                    {t("stat2Value")}
                  </div>
                  <div className="text-sm opacity-90">{t("stat2Label")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl font-bold mb-1">
                    {t("stat3Value")}
                  </div>
                  <div className="text-sm opacity-90">{t("stat3Label")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
