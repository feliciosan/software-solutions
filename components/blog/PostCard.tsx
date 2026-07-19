import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import { Icon } from "@/components/Icon";

export function PostCard({ post }: { post: BlogPost }) {
  const t = useTranslations("blog");
  const locale = useLocale();
  const localized = post.content[locale];
  const dateLabel = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300">
      {post.cover && (
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="relative block aspect-[1200/630] bg-slate-100 overflow-hidden"
        >
          <Image
            src={post.cover}
            alt={localized.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
        </Link>
      )}

      <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
          {t(`categories.${post.category}`)}
        </span>
        <time dateTime={post.date}>{dateLabel}</time>
        <span aria-hidden="true">·</span>
        <span>
          {post.readingMinutes} {t("minRead")}
        </span>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        <Link href={`/${locale}/blog/${post.slug}`}>{localized.title}</Link>
      </h2>
      <p className="text-slate-600 leading-relaxed flex-1">
        {localized.description}
      </p>

      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
      >
        {t("readMore")}
        <Icon name="arrowRight" className="w-4 h-4" />
      </Link>
      </div>
    </article>
  );
}
