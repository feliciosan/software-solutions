import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  size?: "default" | "narrow";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  const sizeStyles = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
}
