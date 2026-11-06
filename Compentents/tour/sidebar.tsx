 
import Link from "next/link";

import {
  CheckIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";


import MobileReservationButton from "./btuttonresirvation";

import BookingPopup from "../contact/booking";



const whyTravel = [
  "Local & experienced guides",
  "Comfort & safety guaranteed",
  "Best value for your money",
  "Authentic Moroccan experiences",
];


const defaultItems = [
  "Confirmation: Instant booking confirmation",
  "Cancellation: Free up to 24h before tour",
  "What to bring: Comfortable shoes, sun screen, camera",
  "Language: English, French",
];

export default function TourSidebar({ price, tourTitle, quoteOnly = false }: {
  price: number;
  tourTitle?: string;
  quoteOnly?: boolean;
}) {
  return (
    <aside className="space-y-6 sticky top-30 ">
        <div id="reservation-form"
            className="scroll-mt-24">

            <BookingPopup
              startPrice={price}
              currency="€"
              priceUnit="per person"
              tourTitle={tourTitle}
            />
        </div>
         

      {/* Map */}

       <div
      className="
        rounded-xl
        border  border-slate-200
         bg-amber-50/30 
        p-5
        
      "
    >
      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900">
        Important Information
      </h3>

      {/* Information List */}
      <ul className="mt-4 space-y-3">
        {(quoteOnly ? [
          "Availability and final prices are confirmed by our team",
          "Cancellation conditions confirmed before reservation",
          "What to bring: Comfortable shoes, sun protection and camera",
          "Languages: English and French on request",
        ] : defaultItems).map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-start gap-3"
          >
            {/* Icon */}
            <InformationCircleIcon
              className="
                mt-0.5
                h-4
                w-4
                shrink-0
                text-blue-500
              "
              aria-hidden="true"
            />

            {/* Text */}
            <span className="text-sm leading-5 text-slate-600">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

      {/* Why Travel */}

      <div className="rounded-2xl border border-neutral-200 bg-white p-7">

        <h3 className="mb-6 text-2xl font-bold text-slate-900">
          Why Travel With Us?
        </h3>

        <ul className="space-y-4">

          {whyTravel.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
            >
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-green-500" />

              <span className="text-[15px] leading-7 text-slate-600">
                {item}
              </span>
            </li>
          ))}

        </ul>

        <Link
          href="/about"
          className="group mt-8 inline-flex items-center gap-2 font-semibold text-amber-700 transition hover:text-amber-700"
        >
          Learn more about us

          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>

      {/* Need Help */}

      <div className="rounded-2xl border border-neutral-200 bg-white p-7">

        <div className="flex gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">

            <ChatBubbleLeftRightIcon className="h-6 w-6 text-amber-700" />

          </div>

          <div>

            <h4 className="font-bold text-slate-900">
              Need Help?
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Our travel experts are here to help you plan your perfect trip.
            </p>

          </div>

        </div>

        <Link
          href="/contact"
          className="
            mt-8
            inline-flex
            items-center
            justify-center
            rounded-xl
            border
            border-amber-600
            px-6
            py-3
            font-semibold
            text-amber-700
            transition-all
            duration-300
            hover:bg-amber-800
            hover:text-white
          "
        >
          Contact Us
        </Link>

      </div>
           <MobileReservationButton />
    </aside>
  );
}