import Link from "next/link";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MapIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f3ec]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-12 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* Left content */}
        <section className="sm:flex flex-row gap-6 lg:max-w-lg">
          <div >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1.5 text-sm font-semibold text-amber-700 shadow-sm">
            <MapIcon className="h-4 w-4" />
            Lost somewhere in Morocco?
          </div>

          

          <h1 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            This road doesn&apos;t lead anywhere.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            The page may have moved, the link may be old, or the destination
            no longer exists. You can return home or continue exploring
            Morocco&apos;s tours and locations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              <HomeIcon className="h-4 w-4" />
              Back to Home
            </Link>

            <Link
              href="/locations"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-amber-200 bg-white px-5 text-sm font-bold text-amber-800 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
            >
              Explore Locations
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-amber-700"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Need help? Contact us
          </Link>
          </div>
          <div className=" ">
             <span className="    
    text-[100px]
    sm:text-[160px]
    md:text-[220px]
    lg:text-[280px]
    xl:text-[330px]
    font-black
    leading-[0.8]
    tracking-[-0.08em]
    text-amber-700" style={{ fontSize: "200px" }}>
              404
            </span>
          </div>
        </section>

        {/* Right travel card */}
        <section className="relative">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border-[18px] border-amber-300/35 lg:block" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-slate-950 p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(245,158,11,0.22),transparent_28%)]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-amber-300">
                  <MapPinIcon className="h-4 w-4" />
                  Morocco
                </span>

                <span className="text-sm font-semibold text-white/40">
                  Route unavailable
                </span>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">
                  Suggested route
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  Keep exploring instead
                </h2>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  {
                    label: "Explore Morocco Locations",
                    href: "/locations",
                  },
                  {
                    label: "Browse Morocco Tours",
                    href: "/tour",
                  },
                  {
                    label: "Plan Your Morocco Tour",
                    href: "/plan-your-morocco-tour",
                  },
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 transition hover:border-amber-400/30 hover:bg-white/[0.09]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-sm font-black text-slate-950">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-semibold text-white">
                        {item.label}
                      </span>
                    </span>

                    <ArrowRightIcon className="h-4 w-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-amber-400" />
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
                <p className="text-sm leading-6 text-amber-100">
                  Tip: if you reached this page from an old tour or location
                  link, use the location archive to find the updated page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
