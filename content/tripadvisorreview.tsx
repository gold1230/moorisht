import Image from "next/image";

export default function TripadvisorReview() {
  return (
    <div className="sm:max-w-4xl w-full rounded-2xl border border-white/20 bg-black/30  text-white">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        
        {/* Left Side */}
        <div className="flex items-center gap-4 p-6 md:border-r border-white/20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <Image
              src="/images/tripadvisor-desert-trips.png"
              alt="Tripadvisor Logo"
              
              width={60}
              height={60}
              quality={70}
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Tripadvisor</h2>

            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="h-4 w-4 rounded-full bg-[#00AA6C]"
                  />
                ))}
              </div>

              <span className="text-2xl font-semibold">5.0</span>
            </div>

            <p className="text-sm text-white/80">
              Based on 30 reviews
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-between gap-4 p-6">
          <div>
            <p className="text-lg font-medium italic">
              "Amazing experience with Moorish Tour!"
            </p>

            <p className="mt-2 text-white/80">
              Everything was perfectly organized and our guide
              made the trip unforgettable.
            </p>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g293733-d27417833-Reviews-Moorish_Tour-Fez_Fez_Meknes.html"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Read more reviews
            </a>
          </div>

          <div className="hidden sm:flex -space-x-3">
            <Image
              src="/images/toursits-comes-to-morocco.jpeg"
              alt="Tourist visiting Morocco"
              width={48}
              height={48}
              quality={70}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/images/closeup-shot-of-a-multiracial-female-with-long-hai-in-morocco.jpg"
              alt="Close-up shot of a multiracial female with long hair in Morocco"
              width={48}
              height={48}
              quality={70}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/images/diverse-group-of-friends-relaxing-outdoors-on-picn-on-moorish-tour.jpg"
              alt="Diverse group of friends relaxing outdoors on a Moorish tour"
              width={48}
              height={48}
              quality={70}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/images/happy-female-tourist-with-photo-camera-standing-on-morocco-tours.jpg"
              alt="Happy female tourist with photo camera standing on Morocco tours"
              width={48}
              height={48}
              quality={70}
              className="rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}