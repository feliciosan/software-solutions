"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { scrollToHash } from "@/lib/scroll";

/**
 * Renders a native <a> for hash/anchor targets and a Next <Link> for regular
 * route changes. For hash targets it smooth-scrolls in place when the section
 * exists on the current page, otherwise it lets the browser navigate (e.g. from
 * a blog page back to a homepage section).
 */
export function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (href.includes("#")) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      scrollToHash(href, e);
      onClick?.();
    };
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
