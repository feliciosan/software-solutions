import type { IconName } from "@/components/Icon";
import type { BlogCategory } from "./siteConfig";

/**
 * Topic visual identity (Moss & Stone).
 * Restrained and consistent: a neutral "code" fill with muted text for chips,
 * and a subtle green icon wrap. Topics are differentiated by their icon, not by
 * loud color, to keep the calm, premium, minimal feel.
 */
export const categoryStyles: Record<
  BlogCategory,
  { chip: string; iconWrap: string; icon: IconName }
> = {
  startup: { chip: "bg-code text-muted", iconWrap: "bg-code text-primary", icon: "rocket" },
  saas: { chip: "bg-code text-muted", iconWrap: "bg-code text-primary", icon: "layers" },
  ai: { chip: "bg-code text-muted", iconWrap: "bg-code text-primary", icon: "sparkles" },
  architecture: { chip: "bg-code text-muted", iconWrap: "bg-code text-primary", icon: "trending" },
  engineering: { chip: "bg-code text-muted", iconWrap: "bg-code text-primary", icon: "bolt" },
  product: { chip: "bg-code text-muted", iconWrap: "bg-code text-primary", icon: "bulb" },
  cloud: { chip: "bg-code text-muted", iconWrap: "bg-code text-primary", icon: "refresh" },
};

export function categoryStyle(category: string) {
  return (
    categoryStyles[category as BlogCategory] ?? {
      chip: "bg-code text-muted",
      iconWrap: "bg-code text-primary",
      icon: "sparkles" as IconName,
    }
  );
}
