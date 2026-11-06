"use client";

import Image, { type StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import {
  CalendarDaysIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeIcon,
  ListBulletIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

type ImageSource = string | StaticImageData;

export type BlogBreadcrumb = {
  label: string;
  href?: string;
};

export type BlogTocItem = {
  label: string;
  href: string;
};

export type BlogPostHeaderSiteStyleProps = {
  category: string;
  title: string;
  excerpt: string;

  author: {
    name: string;
    avatar: ImageSource;
    role?: string;
  };

  publishedDate: string;
  updatedDate?: string;
  readTime: string;

  heroImage: ImageSource;
  heroAlt: string;

  locationLabel?: string;

  breadcrumbs?: BlogBreadcrumb[];
  tableOfContents: BlogTocItem[];

  /** Base domain used to build share URLs automatically. */
  siteUrl?: string;

  className?: string;
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M13.8 22v-9h3l.45-3.5H13.8V7.26c0-1.01.28-1.7 1.74-1.7H17.4V2.43c-.32-.04-1.42-.13-2.7-.13-2.67 0-4.5 1.63-4.5 4.62V9.5H7.18V13h3.02v9h3.6Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.48 22H3.36l7.27-8.31L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.44 4.05H6.59L17.8 19.84Z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-1.58-.02-3.48.39-5.19l1.29-5.47s-.33-.66-.33-1.64c0-1.54.89-2.69 2-2.69.94 0 1.4.71 1.4 1.56 0 .95-.61 2.37-.92 3.69-.26 1.1.55 2 1.64 2 1.97 0 3.48-2.08 3.48-5.08 0-2.66-1.91-4.52-4.64-4.52-3.16 0-5.02 2.37-5.02 4.82 0 .95.37 1.98.83 2.54.09.11.1.2.08.32l-.31 1.26c-.05.2-.16.24-.37.15-1.38-.64-2.24-2.66-2.24-4.28 0-3.49 2.53-6.69 7.3-6.69 3.83 0 6.81 2.73 6.81 6.38 0 3.81-2.4 6.87-5.73 6.87-1.12 0-2.17-.58-2.53-1.27l-.69 2.62c-.25.96-.92 2.16-1.37 2.9.99.31 2.03.47 3.1.47A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function ShareButton({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  const classes =
    "grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-900";

  if (!href) {
    return (
      <span aria-hidden="true" className={`${classes} opacity-50`}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={classes}
    >
      {children}
    </a>
  );
}

export default function BlogPostHeaderSiteStyle({
  category,
  title,
  excerpt,
  author,
  publishedDate,
  updatedDate,
  readTime,
  heroImage,
  heroAlt,
  locationLabel,
  breadcrumbs = [],
  tableOfContents,
  siteUrl = "https://moorishtour.com",
  className = "",
}: BlogPostHeaderSiteStyleProps) {
  const pathname = usePathname();

  const cleanSiteUrl = siteUrl.replace(/\/$/, "");
  const cleanPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pageUrl = `${cleanSiteUrl}${cleanPathname}`;

  const heroImageSrc =
    typeof heroImage === "string"
      ? heroImage
      : heroImage.src;

  const absoluteHeroImage = heroImageSrc.startsWith("http")
    ? heroImageSrc
    : `${cleanSiteUrl}${heroImageSrc.startsWith("/") ? heroImageSrc : `/${heroImageSrc}`}`;

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedImage = encodeURIComponent(absoluteHeroImage);

  const dynamicShare = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(
      `I thought you might like this article: ${title}\n\n${pageUrl}`
    )}`,
  };

  return (
    <section className={`bg-white ${className}`} aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-7 lg:px-10">
        {breadcrumbs.length > 0 ? (
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500"
          >
            <HomeIcon className="h-4 w-4 text-amber-700" />

            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <div key={`${item.label}-${index}`} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span className="text-slate-600">/</span>
                  ) : null}

                  {item.href && !isLast ? (
                    <a
                      href={item.href}
                      className="transition hover:text-amber-700"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className={isLast ? "text-slate-700" : ""}>
                      {item.label}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>
        ) : null}

        <div className="relative mt-5 overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.65)]">
          <div className="relative min-h-[520px] lg:min-h-[580px]">
            <Image
              src={heroImage}
              alt={heroAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-slate-950/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

            <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-6 sm:p-9 lg:min-h-[580px] lg:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-500 bg-amber-500/15 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-amber-500 backdrop-blur">
                  <SparklesIcon className="h-4 w-4" />
                  {category}
                </span>

                {locationLabel ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <MapPinIcon className="h-4 w-4 text-amber-500" />
                    {locationLabel}
                  </span>
                ) : null}
              </div>

              <h1
                id="blog-title"
                className="max-w-[760px] text-4xl font-extrabold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
              >
                {title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                {excerpt}
              </p>

              <div className="mt-7 flex flex-col gap-5 border-t border-white/15 pt-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/60">
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>

                    <div>
                      <p className="font-bold text-white">
                        {author.name}
                      </p>

                      {author.role ? (
                        <p className="mt-0.5 text-[11px] text-slate-300">
                          {author.role}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <span className="hidden h-7 w-px bg-white/15 sm:block" />

                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDaysIcon className="h-4 w-4 text-amber-500" />
                    {publishedDate}
                  </span>

                  {updatedDate ? (
                    <span className="text-slate-300">
                      Updated {updatedDate}
                    </span>
                  ) : null}

                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon className="h-4 w-4 text-amber-300" />
                    {readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="mr-1 text-xs font-semibold text-slate-300">
                    Share
                  </span>

                  <ShareButton href={dynamicShare.facebook} label="Share on Facebook">
                    <FacebookIcon />
                  </ShareButton>

                  <ShareButton href={dynamicShare.twitter} label="Share on X">
                    <TwitterIcon />
                  </ShareButton>

                  <ShareButton href={dynamicShare.pinterest} label="Share on Pinterest">
                    <PinterestIcon />
                  </ShareButton>

                  <ShareButton href={dynamicShare.email} label="Share by email">
                    <EnvelopeIcon className="h-4 w-4" />
                  </ShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav
          aria-label="Table of contents"
          className="relative z-20 mx-auto mt-8 max-w-6xl rounded-2xl border border-amber-100 bg-white p-5 shadow-[0_18px_50px_-25px_rgba(15,23,42,0.35)] sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-col lg:items-start">
            <div className="flex min-w-[190px] items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fff7ed] text-amber-700 ring-1 ring-amber-100">
                <ListBulletIcon className="h-5 w-5" />
              </span>

              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-700">
                  Article Guide
                </p>

                <h2 className="text-base font-extrabold text-slate-900">
                  Table of Contents
                </h2>
              </div>
            </div>

            <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {tableOfContents.map((item, index) => (
                <a
                  key={`${item.href}-${index}`}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[#fffaf3]"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-100 text-[11px] font-black text-amber-700 transition group-hover:bg-amber-800 group-hover:text-white">
                    {index + 1}
                  </span>

                  <span className="text-sm font-semibold text-slate-700 transition group-hover:text-slate-950">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
