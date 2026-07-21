import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon } from "./Icon";
import { PostCard } from "./blog/PostCard";
import { getAllPosts } from "@/lib/blog";

/** Latest (up to 3) blog posts on the homepage: internal linking, freshness,
 *  and a low-friction entry point. Renders nothing if empty. */
export function BlogPreviewSection() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const posts = getAllPosts(locale).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section id="blog-preview" background="default" className="border-t border-border">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              {t("homeTitle")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
              {t("subtitle")}
            </h2>
            <p className="mt-2 text-lg text-muted max-w-2xl">
              {t("homeSubtitle")}
            </p>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-sm text-foreground hover:gap-2.5 transition-all flex-shrink-0"
          >
            {t("viewAll")}
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-1.5 font-mono text-sm text-foreground"
          >
            {t("viewAll")}
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
