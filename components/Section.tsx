import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "subtle";
}

export function Section({
  children,
  className = "",
  background = "default",
}: SectionProps) {
  const bgStyles = {
    default: "bg-slate-50",
    subtle: "bg-white",
  };

  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${bgStyles[background]} ${className}`}
    >
      {children}
    </section>
  );
}
