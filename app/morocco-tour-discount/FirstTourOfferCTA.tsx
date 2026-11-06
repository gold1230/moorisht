import Link from "next/link";

import {
  ArrowRightIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

export default function FirstTourOfferCTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white sm:p-8 lg:p-10">
          <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-amber-500/20 blur-2xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-700">
                <GiftIcon className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-400">
                  First Trip Special
                </p>

                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                  Your First Morocco Adventure Starts With 20% Off
                </h2>

                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-300">
                  Tell us where you want to go, when you are traveling and
                  what kind of Morocco experience you want. Ask for your
                  first-tour offer when you send your request.
                </p>
              </div>
            </div>

            <Link
              href="/plan-your-morocco-tour"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-700 px-6 text-base font-semibold text-white transition hover:bg-amber-800"
            >
              Claim 20% Off
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
