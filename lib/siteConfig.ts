/**
 * Central site configuration: single source of truth consumed by the Header,
 * Footer, sitemap, JSON-LD and content sections. Keeping this data in one place
 * keeps navigation, SEO metadata and structured data consistent as the site grows.
 */

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://codacrew.com";

export const socialLinks = {
  github: "https://github.com/codacrew",
  linkedin: "https://linkedin.com/company/codacrew",
} as const;

/**
 * Primary navigation. `href` values starting with "#" are homepage anchors and
 * are prefixed with the locale + home path at render time; others are absolute
 * locale-relative routes.
 */
export const navItems = [
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "cases", href: "#cases" },
  { key: "team", href: "#team" },
  { key: "blog", href: "/blog" },
] as const;

export type ServiceKey =
  | "mvp"
  | "saas"
  | "ai"
  | "modernization"
  | "team";

export const services: { key: ServiceKey; icon: string }[] = [
  { key: "mvp", icon: "rocket" },
  { key: "saas", icon: "layers" },
  { key: "ai", icon: "sparkles" },
  { key: "modernization", icon: "refresh" },
  { key: "team", icon: "users" },
];

export const differentiators = [
  "seniorEngineers",
  "startupMindset",
  "fastDelivery",
  "scalableArchitecture",
  "productThinking",
  "partnership",
] as const;

export const processSteps = [
  "discovery",
  "architecture",
  "development",
  "testing",
  "launch",
  "improvement",
] as const;

export const caseStudies = [
  { key: "digitalMenu", tags: ["React", "Node.js", "Payments"] },
  { key: "managementSystem", tags: ["Next.js", "PostgreSQL", "Auth"] },
  { key: "dashboard", tags: ["React", "Charts", "APIs"] },
  { key: "marketplace", tags: ["Next.js", "Stripe", "AWS"] },
] as const;

export const founders = [
  {
    name: "Felício Santos",
    key: "felicio",
    photo: "/profile-photo.png",
    linkedin: socialLinks.linkedin,
    skills: ["React", "Node.js", "AWS", "Architecture", "Team Leadership"],
  },
  {
    name: "Gabriel Santos",
    key: "gabriel",
    photo: "/profile-photo-2.png",
    linkedin: socialLinks.linkedin,
    skills: ["React Native", "TypeScript", "APIs", "Product", "Cloud"],
  },
] as const;

export const blogCategories = [
  "startup",
  "saas",
  "ai",
  "architecture",
  "engineering",
  "product",
  "cloud",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

/** Prefix an anchor/route with the active locale for correct localized links. */
export function localizedHref(locale: string, href: string): string {
  if (href.startsWith("#")) return `/${locale}${href}`;
  return `/${locale}${href}`;
}
