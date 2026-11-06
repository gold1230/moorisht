import type { LocationPageData } from "@/lib/locationPageTypes";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

type Props = {
  location: LocationPageData;
};

export default function LocationFAQ({ location }: Props) {
  return (
    <section className="bg-[#f7f5f1] py-12 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-7 lg:px-10">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
            Travel Questions
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {location.name} Travel FAQ
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Find quick answers to common questions about visiting{" "}
            {location.name}. Click any question below to see the full answer.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-8 space-y-3">
          {location.faq.map((faq) => (
            <details
              key={faq.question}
              className="
                group
                overflow-hidden
                rounded-2xl
                border border-stone-200
                bg-white
                shadow-sm
                transition-all
                duration-300

                hover:border-amber-200
                hover:shadow-md

                open:border-amber-200
                open:shadow-md
              "
            >
              <summary
                className="
                  flex cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-4
                  px-5 py-4

                  [&::-webkit-details-marker]:hidden
                "
              >
                {/* Question */}
                <span className="flex min-w-0 items-start gap-3">

                  <span
                    className="
                      mt-0.5
                      flex h-8 w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-amber-50
                      text-amber-700
                      transition

                      group-open:bg-amber-700
                      group-open:text-white
                    "
                  >
                    <QuestionMarkCircleIcon className="h-5 w-5" />
                  </span>

                  <span>
                    <span
                      className="
                        block
                        text-base
                        font-bold
                        leading-6
                        text-slate-900
                        transition

                        group-hover:text-amber-700
                        group-open:text-amber-700
                      "
                    >
                      {faq.question}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-xs
                        font-medium
                        text-slate-600

                        group-open:hidden
                      "
                    >
                      Click to see answer
                    </span>
                  </span>

                </span>

                {/* Arrow */}
                <span
                  className="
                    flex h-9 w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border border-stone-200
                    bg-stone-50
                    text-slate-500
                    transition-all
                    duration-300

                    group-hover:border-amber-200
                    group-hover:bg-amber-50
                    group-hover:text-amber-700

                    group-open:rotate-180
                    group-open:border-amber-600
                    group-open:bg-amber-700
                    group-open:text-white
                  "
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </span>
              </summary>

              {/* Answer */}
              <div className="border-t  border-gray-200 px-5 py-5">
                <p className="text-base leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}