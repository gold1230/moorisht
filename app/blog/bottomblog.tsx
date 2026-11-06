

import {
  EnvelopeIcon,
  BellIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";


const benefits = [
  {
    title: "Local Travel Experts",
    description: "Authentic local knowledge",
    icon: BellIcon,
  },
  {
    title: "Best Price Guarantee",
    description: "Competitive & transparent",
    icon: ShieldCheckIcon,
  },
  {
    title: "Secure Booking",
    description: "Safe & trusted payments",
    icon: CalendarDaysIcon,
  },
  {
    title: "24/7 Support",
    description: "We're here to help",
    icon: LifebuoyIcon,
  },
];

export default function MoroccoNewsletter() {
  return (
    <section className="w-full py-6">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

        {/* ========================================
            NEWSLETTER BANNER
        ======================================== */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#fff1dc] via-[#fff4e5] to-[#f9d9ae] px-6 py-7 sm:px-10 lg:px-12">

          {/* Desert background */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-full bg-cover bg-right bg-no-repeat opacity-90"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Left side */}
            <div className="flex items-center gap-5">

              {/* Envelope */}
              <div className="hidden shrink-0 sm:block">
                <EnvelopeIcon
                  className="h-12 w-12 text-amber-700"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h2 className=" text-xl font-bold text-slate-900 sm:text-[21px]">
                  Never Miss a New Guide
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-700 sm:text-[12px]">
                  Subscribe to get our latest Morocco travel guides and tips.
                </p>
              </div>
            </div>

            {/* Subscription form */}
            <form
              action="#"
              method="post"
              className="relative z-10 flex w-full max-w-[430px] overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Your email address..."
                required
                className="min-w-0 flex-1 bg-white px-4 py-3 text-xs text-slate-800 outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-amber-500"
              />

              <button
                type="submit"
                className="shrink-0 bg-amber-700 px-5 py-3 text-xs font-bold text-white transition hover:bg-amber-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ========================================
            BENEFITS / TRUST ROW
        ======================================== */}
        <div className="grid grid-cols-1 divide-y divide-gray-100 px-5 py-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-gray-200 lg:px-8">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center gap-4 px-4 py-3 lg:px-6 lg:py-2"
              >
                {/* Icon */}
                <Icon
                  className="h-7 w-7 shrink-0 text-amber-700"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                {/* Text */}
                <div>
                  <h3 className="text-[12px] font-bold text-slate-800 sm:text-[13px]">
                    {benefit.title}
                  </h3>

                  <p className="mt-0.5 text-[11px] leading-4 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}