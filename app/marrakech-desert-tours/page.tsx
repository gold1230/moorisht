import Link from "next/link";
import MoroccoToursHero from "@/Compentents/tourFrom/tourFrom"
import PopularMoroccoTours from "@/Compentents/tourFrom/mustPopular";
import  image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg"
import TopDestinations from "@/Compentents/tourFrom/destinations";
import WhyTravelWithUs from "@/Compentents/tourFrom/whytravel";
import AchievementsCTA from "@/Compentents/tourFrom/ready";




const travelerReviews= [
  {
    quote:
      "The 3-day desert tour was the highlight of our Morocco trip! Everything was perfectly organized and our guide was amazing.",
    name: "Sarah Johnson",
    country: "United States",
    avatar: image1.src,
    avatarAlt: "Sarah Johnson",
    rating: 5,
  },
  {
    quote:
      "Our Marrakech to Merzouga journey was incredible. The itinerary was well planned, the desert camp was beautiful, and every day felt special.",
    name: "Michael Anderson",
    country: "Canada",
    avatar: image1.src,
    avatarAlt: "Michael Anderson",
    rating: 5,
  },
  {
    quote:
      "We loved having a private Morocco tour that was customized around our family. Everything was comfortable and easy from start to finish.",
    name: "Emily Carter",
    country: "United Kingdom",
    avatar: image1.src,
    avatarAlt: "Emily Carter",
    rating: 5,
  },
  {
    quote:
      "From Marrakech to the Sahara, the experience was fantastic. Our driver was professional, friendly and made the journey enjoyable.",
    name: "Daniel Wilson",
    country: "Australia",
    avatar: image1.src,
    avatarAlt: "Daniel Wilson",
    rating: 5,
  },
  {
    quote:
      "Moorish Tour made our Morocco trip unforgettable. We especially loved the desert experience, local food and time spent in the Atlas Mountains.",
    name: "Olivia Brown",
    country: "United States",
    avatar: image1.src,
    avatarAlt: "Olivia Brown",
    rating: 5,
  },
];

const travelBenefits = [
  {
    title: "Local Expertise",
    description:
      "Born and raised in Morocco, we know every hidden gem.",
    icon: "expertise",
  },
  {
    title: "Best Value",
    description:
      "Quality tours at competitive prices with no hidden fees.",
    icon: "value",
  },
  {
    title: "Flexible Options",
    description:
      "Customize your itinerary to match your preferences.",
    icon: "flexible",
  },
  {
    title: "Comfort & Safety",
    description:
      "Modern vehicles, quality accommodations, your safety first.",
    icon: "safety",
  },
];

export default function marrakech(){

return (

    <>
    <MoroccoToursHero
        title="Unforgettable Marrakech Desert Tours"
        desc="Discover Marrakech desert tours that take you from the Red City through the High Atlas Mountains, ancient kasbahs and into the Sahara Desert. Explore Morocco with local guides and flexible private tours from Marrakech."
        image={image1}
        />

    <PopularMoroccoTours
      collection="tours-from-marrakech"
      title="Popular Morocco Tours From Marrakech"
    />

    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8" aria-labelledby="marrakech-to-fes-tours">
      <h2 id="marrakech-to-fes-tours" className="text-2xl font-bold text-slate-900">Marrakech to Fes Tours via the Sahara</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-700">Travel from Marrakech through Ait Ben Haddou, Todra Gorge and Merzouga before arriving in Fes. Choose a classic three-day desert crossing or ask for a private itinerary.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/tour/3-days-desert-tour-from-marrakech-to-fes/" className="inline-flex min-h-11 items-center rounded-lg bg-amber-700 px-5 font-semibold text-white hover:bg-amber-800">3-Day Desert Tour to Fes</Link>
        <Link href="/tour/3-days-tour-from-marrakech-to-fes/" className="inline-flex min-h-11 items-center rounded-lg border border-amber-700 px-5 font-semibold text-amber-800 hover:bg-amber-50">Private 3-Day Marrakech to Fes Tour</Link>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Planning a 3-Day Marrakech to Merzouga Tour?
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-700">
          See the full three-day Sahara itinerary, with stops at Ait Ben Haddou,
          Dades Valley and Todra Gorge, plus a night near the Erg Chebbi dunes.
        </p>
        <Link
          href="/tour/3-days-tour-from-marrakech-to-merzouga/"
          className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-amber-700 px-6 font-semibold text-white hover:bg-amber-800"
        >
          View 3 Days Marrakech to Merzouga Tour
        </Link>
      </div>
    </section>

    <TopDestinations />
    <WhyTravelWithUs
  title="Why Travel With Us?"
  benefits={travelBenefits}
  reviews={travelerReviews}
  image={image1.src}
  imageAlt="Travelers enjoying a Morocco Sahara Desert experience"
  reviewsTitle="What Our Travelers Say"
/>
   <AchievementsCTA/>
    
    
    </>
)


}