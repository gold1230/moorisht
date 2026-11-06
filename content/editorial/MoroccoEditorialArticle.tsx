import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BlogPostHeader from "@/Compentents/blog/BlogPostHeader";
import BlogContentSection from "@/Compentents/blog/BlogContentSection";
import BlogOverview from "@/Compentents/blog/BlogOverview";
import BlogFAQs from "@/Compentents/blog/BlogFAQs";
import BlogSidebar from "@/Compentents/blogtour/sidebareBlogTou";
import articles from "@/data/editorial/posts.json";
import { EditorialDestinationCards, EditorialRelatedReading, EditorialRelatedTours } from "./EditorialExplorationCards";
import { makeEditorialTextLinker } from "./editorialInlineLinks";

const ORIGIN = "https://moorishtour.com";
const AUTHOR_IMAGE = "/images/morocco-desert-author.jpg";
const FALLBACK_IMAGE = "/blog/banner/morocco-sahara-desert-tour-travelers-1439x520.webp";

type EditorialPost = (typeof articles)[number];

function findPost(slug: string): EditorialPost {
  const post = articles.find((item) => item.slug === slug);
  if (!post) throw new Error(`Missing editorial article: ${slug}`);
  return post;
}

export function editorialMetadata(slug: string): Metadata {
  const post = findPost(slug);
  const canonical = `${ORIGIN}/${post.slug}/`;
  const image = `${ORIGIN}${post.image || FALLBACK_IMAGE}`;
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonical,
      siteName: "Moorish Tour",
      publishedTime: post.dateISO,
      modifiedTime: post.dateISO,
      images: [{ url: image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export default function MoroccoEditorialArticle({ slug }: { slug: string }) {
  const post = findPost(slug);
  const canonical = `${ORIGIN}/${post.slug}/`;
  const toc = [
    ...post.sections.map((section) => ({ label: section.title, href: `#${section.id}` })),
    { label: "Places in this guide", href: "#places-in-this-guide" },
    { label: "Related Morocco tours", href: "#related-morocco-tours" },
    ...(slug === "is-there-a-war-in-morocco-safe-to-visit-2026" ? [{ label: "Official travel advice", href: "#official-travel-advice" }] : []),
    { label: "Frequently asked questions", href: "#faqs" },
  ];
  const renderLinkedText = makeEditorialTextLinker(slug);
  const image = `${ORIGIN}${post.image || FALLBACK_IMAGE}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: [image],
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        inLanguage: "en",
        author: { "@type": "Organization", name: "Moorish Tour Editorial Team", url: ORIGIN },
        publisher: { "@type": "Organization", name: "Moorish Tour", url: ORIGIN, logo: { "@type": "ImageObject", url: `${ORIGIN}/moorishtours3white.png` } },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Morocco Travel Blog", item: `${ORIGIN}/blog/` },
          { "@type": "ListItem", position: 3, name: post.title, item: canonical },
        ],
      },
    ],
  };

  return (
    <main className="bg-[#fffdfa] pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <BlogPostHeader
        category={post.category}
        title={post.title}
        excerpt={post.excerpt}
        author={{ name: "Moorish Tour Editorial Team", avatar: AUTHOR_IMAGE, role: "Morocco travel guides" }}
        publishedDate={new Date(`${post.dateISO}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}
        readTime={post.readTime}
        heroImage={post.image || FALLBACK_IMAGE}
        heroAlt={post.imageAlt}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: post.title }]}
        tableOfContents={toc}
      />
      <div className="mx-auto mt-12 grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <div className="min-w-0">
          <BlogOverview title="About this guide" tip="Morocco has many different climates and travel styles. Allow extra time for journeys and double-check local opening times, availability and weather before you go." tipTitle="Planning tip">
            {post.introduction.map((paragraph, index) => <p key={index}>{renderLinkedText(paragraph)}</p>)}
          </BlogOverview>
          <div className="mt-12 space-y-14">
            {post.sections.map((section, index) => (
              <div key={section.id} className="space-y-10">
                <BlogContentSection
                  number={index + 1}
                  id={section.id}
                  title={section.title}
                  content={<>
                    {section.paragraphs.map((paragraph, i) => <p key={i}>{renderLinkedText(paragraph)}</p>)}
                    {section.tips.length ? (
                      <ul>{section.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
                    ) : null}
                  </>}
                />
                {index === 1 ? <EditorialRelatedReading slug={slug} /> : null}
                {index === 2 ? <EditorialDestinationCards slug={slug} /> : null}
                {index === 5 ? <EditorialRelatedTours slug={slug} /> : null}
              </div>
            ))}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-[#13294b]">Keep planning your Morocco trip</h2>
              <p className="mt-3 text-slate-700 leading-7">Explore more local travel guides or ask Moorish Tour about a private route designed around your interests, dates and preferred pace.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/blog/" className="rounded-lg border border-amber-700 px-5 py-3 text-sm font-bold text-amber-800 hover:bg-white">More travel guides</Link>
                <Link href="/plan-your-morocco-tour/" className="rounded-lg bg-amber-800 px-5 py-3 text-sm font-bold text-white hover:bg-amber-900">Plan your Morocco tour</Link>
              </div>
            </div>
            {slug === "is-there-a-war-in-morocco-safe-to-visit-2026" ? (
              <section id="official-travel-advice" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="advisory-sources-heading">
                <h2 id="advisory-sources-heading" className="font-serif text-2xl font-bold text-[#13294b]">Official travel advice to check before departure</h2>
                <p className="mt-3 leading-7 text-slate-700">This guide was researched on November 6, 2026. Advice can change, so always check official sources close to your travel date. These are independent government advisories, not guarantees of safety.</p>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-amber-900">
                  {[
                    { label: "United States — State Department Morocco advisory", href: "https://travel.state.gov/en/international-travel/travel-advisories/morocco.html" },
                    { label: "United Kingdom — FCDO Morocco travel advice", href: "https://www.gov.uk/foreign-travel-advice/morocco" },
                    { label: "Canada — Travel advice for Morocco", href: "https://travel.gc.ca/destinations/morocco" },
                    { label: "Australia — Smartraveller Morocco advice", href: "https://www.smartraveller.gov.au/destinations/africa/morocco" },
                  ].map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-slate-900">{source.label}</a></li>)}
                </ul>
              </section>
            ) : null}
            <BlogFAQs items={post.faqs} includeSchema={false} />
          </div>
          <section className="mt-14" aria-labelledby="related-morocco-guides">
            <h2 id="related-morocco-guides" className="mb-6 font-serif text-3xl font-bold text-[#13294b]">You may also enjoy</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {post.related.map((relatedSlug) => {
                const related = articles.find((item) => item.slug === relatedSlug);
                if (!related) return null;
                return <Link key={related.slug} href={`/${related.slug}/`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/9] overflow-hidden bg-amber-50">
                    <Image src={related.image || FALLBACK_IMAGE} alt={related.imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-3 left-3 rounded-md bg-slate-950/80 px-3 py-1 text-xs font-bold text-white">Travel guide</span>
                  </div>
                  <div className="p-5"><span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">{related.category}</span><h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 group-hover:text-amber-800">{related.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{related.excerpt}</p></div>
                </Link>;
              })}
            </div>
          </section>
        </div>
        <aside className="min-w-0"><BlogSidebar ctaImage="/blog/banner/morocco-sahara-desert-tour-travelers-1439x520.webp" /></aside>
      </div>
    </main>
  );
}
