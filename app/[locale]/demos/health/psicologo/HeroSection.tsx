"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("psychologist.hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Detect if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen lg:h-screen overflow-hidden bg-slate-50"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-20 right-0 w-[700px] h-[700px] bg-teal-200/30 rounded-full filter blur-[120px]"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Minimal Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content Container - WIDER */}
      <div className="relative h-full container mx-auto px-6 lg:px-12 max-w-[1800px] flex items-center pt-24 pb-16 lg:pt-20 lg:pb-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center w-full">
          {/* Left Content - Text (5 columns) */}
          <motion.div
            style={isMobile ? {} : { y: textY, opacity }}
            className="relative z-10 space-y-6 lg:space-y-10 lg:col-span-5"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-5 py-2.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span className="text-sm text-teal-700 font-medium">
                {t("availableBadge")}
              </span>
            </motion.div>

            {/* Title */}
            <div className="space-y-4 lg:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight"
              >
                <span className="text-slate-800 font-normal block mb-2">
                  {t("headline1")}
                </span>
                <span className="text-teal-600 font-semibold">
                  {t("headline2")}
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 w-24 bg-teal-500 rounded-full origin-left"
              />

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base lg:text-xl text-slate-600 leading-relaxed max-w-lg"
              >
                {t("description")}
              </motion.p>
            </div>

            {/* Professional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2 pt-3 pb-4 lg:pt-4 lg:pb-6 border-t border-slate-200"
            >
              <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-slate-900">
                {t("name")}
              </p>
              <p className="text-slate-600 text-base lg:text-lg">
                {t("credentials")}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 lg:gap-4"
            >
              {[
                {
                  number: t("stats.experience"),
                  label: t("stats.experienceLabel"),
                },
                {
                  number: t("stats.patients"),
                  label: t("stats.patientsLabel"),
                },
                {
                  number: t("stats.satisfaction"),
                  label: t("stats.satisfactionLabel"),
                },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 lg:p-5 hover:shadow-lg hover:border-teal-300 transition-all duration-300 h-full flex flex-col">
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-600">
                      {stat.number}
                    </p>
                    <p className="text-xs text-slate-500 mt-2 whitespace-pre-line leading-relaxed flex-grow">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4 pt-4 lg:pt-6"
            >
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:shadow-teal-600/20 hover:-translate-y-0.5 w-full sm:w-auto">
                {t("cta")}
              </button>

              <button className="group px-6 lg:px-8 py-3 lg:py-4 bg-white border-2 border-slate-300 rounded-lg font-semibold text-slate-700 hover:border-teal-600 hover:text-teal-600 transition-all w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  {t("learnMore")}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Large Image WITHOUT frame (7 columns) */}
          <motion.div
            style={isMobile ? {} : { y: imageY }}
            className="relative lg:col-span-7 max-h-[500px] lg:max-h-none overflow-hidden lg:overflow-visible"
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 -z-10 hidden lg:block">
              {/* Soft gradient blob behind image */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-100/40 to-blue-100/40 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-slate-100/50 to-teal-50/50 rounded-full blur-3xl"
              />
            </div>

            {/* Decorative Shapes with Teal Colors - ALWAYS VISIBLE */}
            <div className="absolute inset-0 -z-5 pointer-events-none hidden lg:block">
              {/* Top-right curved shape */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute top-20 right-0 w-32 h-32 border-4 border-teal-300/30 rounded-3xl rotate-12" />

              {/* Bottom-left geometric shape - REMOVED the blur effect that was cutting the wave */}
              <div className="absolute bottom-32 left-8 w-24 h-24 border-4 border-teal-400/40 rounded-2xl -rotate-12" />

              {/* Floating circles */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 -left-4 w-20 h-20 border-4 border-teal-300/50 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/3 -right-6 w-16 h-16 bg-cyan-400/20 rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Large Image - Simulating transparent background */}
              <div className="relative w-full h-full lg:h-auto">
                {/* Image with wave overlay effect */}
                <div className="relative h-full lg:h-auto">
                  {/* Main Image - Layer 1 (z-10) */}
                  <div className="relative h-full lg:h-auto">
                    <Image
                      src="/dra.png"
                      alt="Dra. Sofia Mendes - Psicóloga Clínica"
                      width={1200}
                      height={1400}
                      className="w-full h-auto object-contain relative z-10"
                      priority
                      style={{
                        filter:
                          "drop-shadow(0 20px 60px rgba(0,0,0,0.12)) contrast(1.05) brightness(1.02)",
                      }}
                    />
                  </div>

                  {/* Wave Overlay Effect - Layer 3 (z-20) - Passes IN FRONT of image */}
                  <div className="absolute bottom-0 left-0 right-0 h-[45%] overflow-hidden pointer-events-none z-20">
                    {/* Single wave layer - animated - SLATE-50 COLOR - MORE MOVEMENT */}
                    <motion.div
                      animate={{
                        x: ["0%", "-15%", "0%"],
                        y: ["0%", "3%", "0%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0"
                    >
                      <svg
                        className="absolute bottom-0 w-[150%] h-full"
                        viewBox="0 0 1440 400"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          {/* Gradient - SLATE-50 to match background perfectly */}
                          <linearGradient
                            id="wave1"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(248, 250, 252, 0)"
                            />
                            <stop offset="8%" stopColor="rgb(248, 250, 252)" />
                            <stop
                              offset="100%"
                              stopColor="rgb(248, 250, 252)"
                            />
                          </linearGradient>
                        </defs>
                        {/* Organic wave shape */}
                        <path
                          d="M0,180 C320,100 420,220 720,180 C1020,140 1120,240 1440,180 L1440,400 L0,400 Z"
                          fill="url(#wave1)"
                        />
                      </svg>
                    </motion.div>

                    {/* Solid base to ensure full coverage at bottom - SLATE-50 */}
                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-slate-50" />
                  </div>
                </div>

                {/* Floating Info Card - MOVED HIGHER */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-[55%] lg:bottom-[35%] left-4 lg:left-10 right-auto lg:right-auto lg:max-w-sm z-[25]"
                >
                  <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-lg lg:rounded-2xl p-2 lg:p-6 shadow-lg lg:shadow-2xl">
                    <div className="flex items-center gap-1.5 lg:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 lg:w-14 lg:h-14 bg-teal-100 rounded-md lg:rounded-xl flex items-center justify-center">
                        <svg
                          className="w-4 h-4 lg:w-7 lg:h-7 text-teal-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs lg:text-xl font-bold text-slate-900">
                          <span className="lg:hidden">
                            {t("certification.titleShort")}
                          </span>
                          <span className="hidden lg:inline">
                            {t("certification.title")}
                          </span>
                        </p>
                        <p className="text-[10px] lg:text-sm text-slate-600">
                          <span className="lg:hidden">
                            {t("certification.subtitleShort")}
                          </span>
                          <span className="hidden lg:inline">
                            {t("certification.subtitle")}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs font-medium">{t("scrollHint")}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
