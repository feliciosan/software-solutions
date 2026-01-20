"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TestimonialsSection() {
  const t = useTranslations("psychologist.testimonials");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: t("list.0.author"),
      role: t("list.0.role"),
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content: t("list.0.text"),
      rating: 5,
    },
    {
      name: t("list.1.author"),
      role: t("list.1.role"),
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content: t("list.1.text"),
      rating: 5,
    },
    {
      name: t("list.2.author"),
      role: t("list.2.role"),
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content: t("list.2.text"),
      rating: 5,
    },
  ];

  const stats = [
    {
      number: t("stats.patients"),
      label: t("stats.patientsLabel"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      number: t("stats.satisfaction"),
      label: t("stats.satisfactionLabel"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: t("stats.experience"),
      label: t("stats.experienceLabel"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-2 mb-6 border border-teal-100"
          >
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span className="text-sm font-semibold">{t("badge")}</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t("title")}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-slate-600 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 lg:gap-12 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 60, scale: 0.95 }
              }
              transition={{
                duration: 0.7,
                delay: 0.9 + index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image with Hand-drawn Sketch Frame */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Hand-drawn sketch style frame */}
            <div className="absolute -inset-6">
              {/* Top-left sketch lines */}
              <svg
                className="absolute top-0 left-0 w-24 h-24"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 5 50 Q 5 5, 50 5"
                  stroke="#14b8a6"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M 3 48 Q 3 3, 48 3"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 7 52 Q 7 7, 52 7"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              {/* Top-right sketch lines */}
              <svg
                className="absolute top-0 right-0 w-24 h-24"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 95 50 Q 95 5, 50 5"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M 97 48 Q 97 3, 52 3"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 93 52 Q 93 7, 48 7"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              {/* Bottom-left sketch lines */}
              <svg
                className="absolute bottom-0 left-0 w-24 h-24"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 5 50 Q 5 95, 50 95"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M 3 52 Q 3 97, 48 97"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 7 48 Q 7 93, 52 93"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              {/* Bottom-right sketch lines */}
              <svg
                className="absolute bottom-0 right-0 w-24 h-24"
                viewBox="0 0 100 100"
              >
                <path
                  d="M 95 50 Q 95 95, 50 95"
                  stroke="#14b8a6"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <path
                  d="M 97 52 Q 97 97, 52 97"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 93 48 Q 93 93, 48 93"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              {/* Random sketch dots/marks */}
              <div className="absolute top-12 left-1/4 w-1 h-3 bg-teal-500 opacity-60 rotate-12" />
              <div className="absolute top-12 right-1/4 w-1 h-3 bg-cyan-500 opacity-60 -rotate-12" />
              <div className="absolute bottom-12 left-1/3 w-1 h-3 bg-cyan-500 opacity-60 rotate-45" />
              <div className="absolute bottom-12 right-1/3 w-1 h-3 bg-teal-500 opacity-60 -rotate-45" />

              {/* Small sketch circles */}
              <svg
                className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3"
                viewBox="0 0 20 20"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="#14b8a6"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
              <svg
                className="absolute bottom-8 right-1/2 translate-x-1/2 w-3 h-3"
                viewBox="0 0 20 20"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke="#06b6d4"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Main image container */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 -top-[15%]">
                <Image
                  src="/dra.jpg"
                  alt="Dra. Ana Paula Silva - Psicóloga"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent pointer-events-none" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">
                      {t("about.badge")}
                    </div>
                    <div className="font-bold text-slate-900">
                      {t("about.credentials")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t("about.title")}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t("about.description")}
            </p>
            <ul className="space-y-4 mb-8">
              {[0, 1, 2, 3].map((i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 1.7 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">
                    {t(`about.benefits.${i}`)}
                  </span>
                </motion.li>
              ))}
            </ul>
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/20">
              Conheça o Consultório
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
