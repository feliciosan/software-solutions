"use client";

import HeroSection from "./HeroSection";

export default function PsicologoDemoPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Placeholder for more sections */}
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-400 text-2xl">Próximas seções virão aqui...</p>
      </div>
    </div>
  );
}
