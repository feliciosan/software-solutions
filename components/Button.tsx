"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { scrollToHash } from "@/lib/scroll";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover",
  secondary: "bg-code text-foreground hover:bg-border active:bg-border",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-code hover:border-muted",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isExternal =
      /^(https?:|mailto:|tel:)/.test(href) || target === "_blank";
    // Hash links (same-page or locale-prefixed anchors) use native anchor
    // behavior with smooth in-page scrolling instead of a navigation reset.
    const isHashLink = !isExternal && href.includes("#");

    if (isExternal || isHashLink) {
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHashLink) scrollToHash(href, e);
        onClick?.();
      };
      return (
        <a
          href={href}
          onClick={handleClick}
          className={classes}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
