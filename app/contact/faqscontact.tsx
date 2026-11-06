"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const contactFaqs = [
  {
    question: "Can I ask for a custom Morocco itinerary?",
    answer:
      "Yes. Tell us your travel dates, number of travelers, preferred destinations and the experiences you would like to include. Our local Morocco travel team can help create a customized itinerary around your plans.",
  },
  {
    question: "Can I contact you about a private Morocco tour?",
    answer:
      "Yes. We arrange private Morocco tours for couples, families, friends and small groups. Contact us with your dates, group size and preferred destinations so we can suggest suitable options.",
  },
  {
    question: "Can you arrange a Marrakech to Merzouga desert tour?",
    answer:
      "Yes. We can help arrange Marrakech to Merzouga desert tours, including transportation, accommodation, camel trekking, desert camps and visits to places such as Ait Ben Haddou, Dades Valley and Todra Gorge.",
  },
  {
    question: "Can I contact you on WhatsApp?",
    answer:
      "Yes. You can contact our Morocco travel team through WhatsApp using the phone number listed in the contact section of this page.",
  },
  {
    question: "How far in advance should I contact you?",
    answer:
      "We recommend contacting us as early as possible, especially for private Morocco tours, family trips, peak travel periods and specific accommodation requests. However, we can also help with shorter-notice travel when availability allows.",
  },
];

export default function ContactPlanningFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftFaqs = contactFaqs.slice(0, 3);
  const rightFaqs = contactFaqs.slice(3);

  const renderFaq = (
    faq: (typeof contactFaqs)[number],
    index: number,
  ) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={faq.question}
        className="overflow-hidden rounded-lg border border-gray-200 bg-white"
      >
        <button
          type="button"
          onClick={() =>
            setOpenIndex(isOpen ? null : index)
          }
          aria-expanded={isOpen}
          className="flex min-h-[52px] w-full items-center justify-between gap-4 px-5 py-3 text-left transition hover:bg-gray-50"
        >
          <span className="text-base font-medium leading-6 text-slate-900">
            {faq.question}
          </span>

          <ChevronDownIcon
            className={`h-5 w-5 shrink-0 text-slate-700 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div className="border-t border-gray-100 px-5 py-4">
            <p className="text-base leading-7 text-gray-700">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="contact-faqs"
      className="w-full bg-white py-10"
      aria-labelledby="contact-faqs-title"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div>
          <h2
            id="contact-faqs-title"
            className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl"
          >
            Contact & Morocco Trip Planning Questions
          </h2>

          {/* Decorative divider */}
          <div className="mt-2 flex items-center gap-2">
            <span className="h-[2px] w-8 bg-amber-700" />
            <span className="h-2 w-2 rotate-45 border border-amber-600 bg-white" />
            <span className="h-[2px] w-8 bg-amber-700" />
          </div>
        </div>

        {/* FAQ columns */}
        <div className="mt-6 grid gap-3 lg:grid-cols-2">
          
          <div className="space-y-3">
            {leftFaqs.map((faq, index) =>
              renderFaq(faq, index),
            )}
          </div>

          <div className="space-y-3">
            {rightFaqs.map((faq, index) =>
              renderFaq(faq, index + 3),
            )}
          </div>

        </div>
      </div>
    </section>
  );
}