import Image from "next/image";
import Link from "next/link";
import  image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg"

export default function PlanTourHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-115 sm:h-115 lg:h-150">
        {/* Hero image */}
        <Image
          src={image1}
          alt="Traveler exploring a Moroccan kasbah with Atlas Mountains in the background"
          fill
          fetchPriority="high"
          priority
          sizes="100vw"
          className="object-cover w-full object-top"
        />

        {/* Left-side soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf4]/80 via-[#fffaf4]/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-10">
          <div className=" pt-2">

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-7"
            >
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="font-bold transition text-amber-700"
                  >
                    Home
                  </Link>
                </li>

                <li
                  aria-hidden="true"
                  className="text-gray-800"
                >
                  ›
                </li>

                <li className="font-medium text-gray-800">
                  Plan Your Morocco Tour
                </li>
              </ol>
            </nav>

            {/* Main heading */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
              Plan Your Morocco Tour
            </h1>

            {/* Script subtitle */}
            <p className="mt-3 text-3xl font-medium leading-none text-amber-700 sm:text-4xl lg:text-[42px]">
              <span className="font-cursive">
                Your Trip, Your Way
              </span>
            </p>

            {/* Description */}
            <p className="mt-6 max-w-[500px] text-base font-bold leading-7 text-slate-900 sm:text-lg">
              Customize your perfect Morocco trip. Tell us your preferences
              and we&apos;ll create the ideal itinerary for you.
            </p>
          </div>
        </div>

        {/* White curved transition */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[75px] w-full overflow-hidden rotate-y-180 sm:h-[150px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff"  d="M0,0L80,26.7C160,53,320,107,480,106.7C640,107,800,53,960,32C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        </div>
      </div>
    </section>
  );
}