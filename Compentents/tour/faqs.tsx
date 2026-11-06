"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface FAQ {
  question: string;
  answer: string;
}
interface Head {
  title: string;    
  description: string;
}

interface TourFAQsProps {
  head: Head[];
  faqs: FAQ[];
}

export default function TourFAQs({ head, faqs }: TourFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      
    >
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          {head[0].title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-800">
          {head[0].description}
        </p>
      </div>

      {/* FAQ Card */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={`${faq.question}-${index}`}
              className={`
                border-b border-slate-200
                last:border-b-0
                ${isOpen ? "bg-orange-50/30" : "bg-white"}
              `}
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-6
                  px-5
                  py-5
                  text-left
                  transition-colors
                  hover:bg-orange-50/40
                "
              >
                <span className="text-sm font-semibold text-slate-900 md:text-base">
                  {faq.question}
                </span>

                <ChevronDownIcon
                  className={`
                    h-5
                    w-5
                    shrink-0
                    text-orange-700
                    transition-transform
                    duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Answer */}
              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-7 text-slate-900">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}