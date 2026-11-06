"use client";

import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function NeedHelp() {
  return (
    <aside
      className="rounded-2xl border mb-8 border-gray-200 bg-white p-6 shadow-sm sm:p-7"
      aria-labelledby="need-help-title"
    >
      {/* Heading */}
      <h2
        id="need-help-title"
        className="text-2xl font-bold leading-tight text-slate-900"
      >
        Need Help?
      </h2>

      {/* Description */}
      <p className="mt-4 text-base leading-7 text-gray-700">
        Our travel experts are ready to help you
        <br className="hidden sm:block" />
        plan your perfect Morocco tour.
      </p>

      {/* Contact details */}
      <div className="mt-7 space-y-5">

        {/* WhatsApp */}
        <div className="flex items-center gap-4">
          <ChatBubbleLeftRightIcon
            className="h-6 w-6 shrink-0 text-amber-700"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <p className="text-base leading-6 text-slate-800">
            <span className="font-bold">WhatsApp:</span>{" "}
            <Link
              href="https://wa.me/212628812520"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-400 underline-offset-2 transition hover:text-amber-700"
            >
              +212628812520
            </Link>
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <EnvelopeIcon
            className="h-6 w-6 shrink-0 text-amber-700"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <p className="text-base leading-6 text-slate-800">
            <span className="font-bold">Email:</span>{" "}
            <Link
              href="mailto:moorishtour@gmail.com"
              className="underline decoration-gray-400 underline-offset-2 transition hover:text-amber-700"
            >
              moorishtour@gmail.com
            </Link>
          </p>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-4">
          <ClockIcon
            className="h-6 w-6 shrink-0 text-amber-700"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <p className="text-base leading-6 text-slate-800">
            <span className="font-bold">Hours:</span>{" "}
            Mon - Sun / 8:00 AM - 11:00 PM (GMT+1)
          </p>
        </div>

      </div>
    </aside>
  );
}