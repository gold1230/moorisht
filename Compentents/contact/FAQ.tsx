"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "How can I book a tour?",
    answer:
      "You can book directly through our website, WhatsApp, or by sending us an email. Our team will confirm availability and help you complete your reservation.",
  },
  {
    question: "Can I customize my tour?",
    answer:
      "Yes. We specialize in custom Morocco tours. Tell us your travel dates, interests, and budget, and we will create a personalized itinerary.",
  },
  {
    question: "What is included in the tour price?",
    answer:
      "Most tours include transportation, accommodation, a local driver-guide, and selected meals. The exact inclusions are listed on each tour page.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes, airport transfers are available in Marrakech, Casablanca, Fes, Tangier, and other Moroccan cities.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (

    <>
    <section className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Frequently Asked <span className="text-amber-700">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDownIcon
                  className={`size-6 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-7">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

</>
  );
}