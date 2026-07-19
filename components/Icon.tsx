/**
 * Lightweight inline icon set (Heroicons-style outline paths).
 * Keeps the bundle free of an icon dependency while giving sections a shared,
 * consistent visual language. Add new icons to the `paths` map as needed.
 */

type IconName =
  | "rocket"
  | "layers"
  | "sparkles"
  | "refresh"
  | "users"
  | "award"
  | "bolt"
  | "clock"
  | "trending"
  | "bulb"
  | "heart"
  | "check"
  | "arrowRight"
  | "linkedin"
  | "github"
  | "whatsapp"
  | "menu"
  | "close";

const paths: Record<IconName, React.ReactNode> = {
  rocket: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 8-10c1.5 3 2.5 6 0 12l-5 1zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
    />
  ),
  layers: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    />
  ),
  sparkles: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.94 4.66 11 2l1.06 2.66L14.72 6 12.06 7.06 11 10 9.94 7.06 7.28 6l2.66-1.34zM18 10l.7 1.8L20.5 12.5l-1.8.7L18 15l-.7-1.8-1.8-.7 1.8-.7L18 10zM6.5 13l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3z"
    />
  ),
  refresh: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v5h5M20 20v-5h-5M20 9a8 8 0 0 0-14.5-3L4 9m16 6-1.5 3A8 8 0 0 1 4 15"
    />
  ),
  users: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 0 0-5.36-1.86M17 20H7m10 0v-2c0-.66-.13-1.28-.36-1.86M7 20H2v-2a3 3 0 0 1 5.36-1.86M7 20v-2c0-.66.13-1.28.36-1.86m0 0a5 5 0 0 1 9.28 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
    />
  ),
  award: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.2 13.9 7 22l5-3 5 3-1.2-8.1"
    />
  ),
  bolt: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  ),
  clock: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
  ),
  trending: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5"
    />
  ),
  bulb: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"
    />
  ),
  heart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.5 1.1-1a5.5 5.5 0 0 0 0-7.9z"
    />
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  ),
  arrowRight: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  ),
  linkedin: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    />
  ),
  github: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.6 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.6 1.3a12 12 0 0 0-6.4 0C6.6 1.4 5.5 1.7 5.5 1.7a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 8.8c0 5 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V22"
    />
  ),
  whatsapp: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21zM9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"
    />
  ),
  menu: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  ),
  close: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  ),
};

export function Icon({
  name,
  className = "w-6 h-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
