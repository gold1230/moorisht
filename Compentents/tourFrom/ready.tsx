import Image from "next/image"
import Link from "next/link";
import  image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg"
const stats = [
  { value: "10+", line1: "Years", line2: "Experience" },
  { value: "5000+", line1: "Happy", line2: "Travelers" },
  { value: "98%", line1: "Positive", line2: "Reviews" },
  { value: "50+", line1: "Unique", line2: "Tours" },
  { value: "24/7", line1: "Customer", line2: "Support" },
  { value: "100%", line1: "Local", line2: "Team" },
];

export default function AchievementsCTA() {
  return (
    <section className="mx-auto w-full   bg-zinc-800 ">
      {/* Achievements */}
      
        

        <div className="  py-10">
          <h2 className="text-center mb-8 text-2xl font-bold leading-5 text-white">
            Our Achievements
          </h2>

          <div className="mt-0.75 grid h-18 grid-cols-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-3 ${
                  index !== stats.length - 1
                    ? "border-r border-white/15"
                    : ""
                }`}
              >
                <div className="whitespace-nowrap text-[24px] font-bold  text-amber-600">
                  {stat.value}
                </div>

                <div className="flex flex-col whitespace-nowrap text-[18px] font-medium leading-5 text-white/95">
                  <span>{stat.line1}</span>
                  <span>{stat.line2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      

      {/* CTA */}
     <div className="relative  overflow-hidden ">
  {/* SEO-friendly background image */}
  <Image
    src={image1}
    alt="Morocco desert tour with a traditional kasbah and camel at sunset"
    fill
    sizes="(max-width: 768px) 100vw, 1200px"
    className="object-cover object-center"
  />

  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-linear-to-r from-zinc-900/95 via-[#4a3428]/85 via-40% to-transparent" />

  {/* Content */}
  <div className="relative z-10 px-11.5 py-15">
    <h3 className="mb-1 text-3xl font-bold leading-10 text-white">
      Ready to Start Your Adventure?
    </h3>

    <p className="text-xl font-normal leading-10 text-white/80">
      Let us help you plan the perfect Morocco tour
      <br />
      that exceeds your expectations.
    </p>

    <div className="mt-2 flex items-center gap-4">
      <Link
        href="/contact"
        className="rounded-[5px] bg-amber-700 px-5 py-2 text-white transition hover:bg-amber-800"
      >
        Contact Us Today
      </Link>

      <a
        href="tel:+212628812520"
        className="flex items-center gap-1.75 font-sans text-[14px] font-semibold tracking-[0.4px] text-white no-underline"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5.5 w-5.5 text-white/60"
          aria-hidden="true"
        >
          <path
            d="M21 15.46V19a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3.54a1 1 0 0 1 1 .76l.7 2.8a1 1 0 0 1-.27.95l-1.49 1.49a16 16 0 0 0 6.26 6.26l1.49-1.49a1 1 0 0 1 .95-.27l2.8.7a1 1 0 0 1 .76 1Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>+212628812520</span>
      </a>
    </div>
  </div>
</div>
    </section>
  );
}