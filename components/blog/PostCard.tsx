import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import { categoryStyle } from "@/lib/categories";
import { Icon } from "@/components/Icon";

export function PostCard({ post }: { post: BlogPost }) {
  const t = useTranslations("blog");
  const locale = useLocale();
  const localized = post.content[locale];
  const style = categoryStyle(post.category);
  const dateLabel = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col bg-surface rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-sm transition-all">
      {post.cover && (
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="relative block aspect-[1200/630] bg-code overflow-hidden"
        >
          <Image
            src={post.cover}
            alt={localized.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        </Link>
      )}

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted mb-3">
          <span className={`px-2 py-0.5 rounded-md font-medium ${style.chip}`}>
            {t(`categories.${post.category}`)}
          </span>
          <time dateTime={post.date}>{dateLabel}</time>
          <span aria-hidden="true">·</span>
          <span>
            {post.readingMinutes} {t("minRead")}
          </span>
        </div>

        <h2 className="text-lg font-bold text-foreground mb-2 leading-snug">
          <Link
            href={`/${locale}/blog/${post.slug}`}
            className="hover:text-muted transition-colors"
          >
            {localized.title}
          </Link>
        </h2>
        <p className="text-muted leading-relaxed text-[15px] flex-1">
          {localized.description}
        </p>

        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-foreground hover:gap-2.5 transition-all"
        >
          {t("readMore")}
          <Icon name="arrowRight" className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
