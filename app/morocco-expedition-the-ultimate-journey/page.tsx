import type { Metadata } from "next";
import type { ComponentType } from "react";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import MoroccoExpeditionArticle from "./MoroccoExpeditionArticle";
import { expeditionTableOfContents } from "./tableOfContents";
import MarrakechToFes4DayHero from "@/public/tours/related/4-days-tour-from-marrakech-to-fes.jpg";

const PAGE_URL = "https://moorishtour.com/morocco-expedition-the-ultimate-journey/";
const HERO_IMAGE = `${MarrakechToFes4DayHero.src}`;
const SIDEBAR_IMAGE = `${MarrakechToFes4DayHero.src}`;
const articleTitle = "Morocco Expedition: The Ultimate Journey Across Desert, Mountains & Imperial Cities";
const articleDescription = "Plan the ultimate Morocco expedition across the Sahara Desert, Atlas Mountains and imperial cities. Explore Merzouga, Marrakech, Fes, 4x4 routes, private tours, itineraries and expedition travel tips.";

export const metadata: Metadata = {
  title: "Morocco Expedition: Desert, Mountains & Imperial Cities",
  description: articleDescription,
  alternates: { canonical: "/morocco-expedition-the-ultimate-journey/" },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: PAGE_URL,
    siteName: "Moorish Tour",
    type: "article",
    images: [{ url: HERO_IMAGE, alt: "Morocco expedition through desert and mountains" }],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: [HERO_IMAGE],
  },
};

// Dates are intentionally omitted for sidebar entries: the supplied source
// contains no verifiable blog publication dates. Add genuine recent blog posts
// here if you use the original manual-posts sidebar implementation.
const sidebarPosts: { title: string; href: string; image: string; imageAlt: string; date: string; dateTime: string }[] = [];

// Compatible with both the earlier manual-posts BlogSidebar and the newer
// getBlogs() sidebar: older versions receive an empty posts array, while the
// newer variant can automatically load posts and ignore that optional prop.
const ExpeditionSidebar = BlogSidebar as ComponentType<{
  posts?: typeof sidebarPosts;
  ctaImage: string;
  ctaImageAlt?: string;
  ctaHref?: string;
}>;

export default function MoroccoExpeditionPage() {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]">
        <article className="min-w-0 w-full">
          <BlogPostHeader
            category="Morocco Expeditions"
            title={articleTitle}
            excerpt="Plan the ultimate Morocco expedition across the Sahara Desert, Atlas Mountains, imperial cities, Amazigh villages, ancient kasbahs and off-road landscapes. Discover private expeditions, itineraries, activities and practical travel tips."
            author={{ name: "Mohamed", avatar: "/images/author.jpg" }}
            publishedDate="October 8, 2026"
            readTime="40 min read"
            heroImage={HERO_IMAGE}
            heroAlt="Morocco expedition across Sahara Desert dunes, mountains and imperial cities"
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Morocco Tours", href: "/tour/" },
              { label: "Morocco Expedition" },
            ]}
            tableOfContents={expeditionTableOfContents}
          />

          <main className="w-full min-w-0 px-5 pb-12 pt-6 sm:px-7 sm:pb-14 lg:px-10 lg:pb-16">
            <MoroccoExpeditionArticle />
          </main>
        </article>

        <aside className="min-w-0 w-full py-10 lg:sticky lg:top-24 lg:self-start">
          <div className="mx-auto grid w-full max-w-xl gap-5 lg:max-w-none">
            <ExpeditionSidebar
              posts={sidebarPosts}
              ctaImage={SIDEBAR_IMAGE}
              ctaImageAlt="Private Sahara expedition with Moorish Tour"
              ctaHref="/plan-your-morocco-tour"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
