// components/contact/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[650px]">
      <Image
        src="/abdou-faiz-mBo2EUfJ7sY-unsplash.jpg"
        alt="Morocco Desert"
        fill
        fetchPriority="high"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <span className="text-amber-500 uppercase">
            Contact Us
          </span>

          <h1 className="text-6xl font-bold mt-4">
            We&apos;re Here To Help Plan Your Perfect Morocco Adventure
          </h1>

          <p className="mt-6 text-lg">
            Have a question, need travel advice, or ready to
            book your tour? Get in touch with our team.
          </p>
        </div>
      </div>
    </section>
  );
}