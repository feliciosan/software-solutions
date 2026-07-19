import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon } from "./Icon";
import { PostCard } from "./blog/PostCard";
import { getAllPosts } from "@/lib/blog";

/** Shows the latest (up to 3) blog posts on the homepage for internal linking,
 *  freshness signals and softer-funnel engagement. Renders nothing if empty. */
export function BlogPreviewSection() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const posts = getAllPosts(locale).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section id="blog-preview" background="default">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              {t("homeTitle")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
              {t("subtitle")}
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl">
              {t("homeSubtitle")}
            </p>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
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
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            {t("viewAll")}
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
