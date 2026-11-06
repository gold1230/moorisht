import type { ReactNode } from "react";

import BlogContentSection from "./BlogContentSection";
import BlogFAQs from "./BlogFAQs";
import BlogInfoGrid from "./BlogInfoGrid";
import BlogOverview from "./BlogOverview";
import BlogTableOfContents from "./BlogTableOfContents";

import type {
  BlogFaqItem,
  BlogInfoCard,
  BlogSectionData,
  BlogTocItem,
} from "./types";

type BlogArticleContentProps = {
  tocItems: BlogTocItem[];

  overview: ReactNode;
  overviewTitle?: string;
  overviewTip?: ReactNode;
  overviewTipTitle?: string;

  infoGridTitle?: string;
  infoCards?: BlogInfoCard[];

  sections?: BlogSectionData[];

  faqs?: BlogFaqItem[];
  faqTitle?: string;
  faqDescription?: string;

  className?: string;
};

export default function BlogArticleContent({
  tocItems,
  overview,
  overviewTitle = "Overview",
  overviewTip,
  overviewTipTitle,
  infoGridTitle,
  infoCards = [],
  sections = [],
  faqs = [],
  faqTitle,
  faqDescription,
  className = "",
}: BlogArticleContentProps) {
  return (
    <article
      className={`mx-auto w-full max-w-5xl ${className}`}
      itemScope
      itemType="https://schema.org/Article"
    >
      <BlogTableOfContents items={tocItems} />

      <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-14">
        <BlogOverview
          title={overviewTitle}
          tip={overviewTip}
          tipTitle={overviewTipTitle}
        >
          {overview}
        </BlogOverview>

        {infoCards.length ? (
          <BlogInfoGrid
            title={infoGridTitle}
            cards={infoCards}
          />
        ) : null}

        {sections.map((section, index) => (
          <BlogContentSection
            key={section.id}
            {...section}
            number={index + 1}
          />
        ))}

        {faqs.length ? (
          <BlogFAQs
            items={faqs}
            title={faqTitle}
            description={faqDescription}
          />
        ) : null}
      </div>
    </article>
  );
}
