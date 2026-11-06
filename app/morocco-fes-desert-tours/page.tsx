import MoroccoToursHero from "@/Compentents/tourFrom/tourFrom"
import PopularMoroccoTours from "@/Compentents/tourFrom/mustPopular";
import  image1 from "@/public/plan/plan-your-morocco-tour-hero-extracted.jpg"
import TopDestinations from "@/Compentents/tourFrom/destinations";
import WhyTravelWithUs from "@/Compentents/tourFrom/whytravel";
import AchievementsCTA from "@/Compentents/tourFrom/ready";

const travelerReviews = [
  {
    quote:
      "Our Fes to Merzouga desert tour was one of the best experiences of our Morocco trip. The drive through the Middle Atlas was beautiful and the Sahara camp was unforgettable.",
    name: "Sarah Johnson",
    country: "United States",
    avatar: image1.src,
    avatarAlt: "Sarah Johnson",
    rating: 5,
  },
  {
    quote:
      "We loved traveling from Fes to the Sahara. Our driver was friendly and professional, and the stops in Ifrane, Midelt and the Ziz Valley made the journey very interesting.",
    name: "Michael Anderson",
    country: "Canada",
    avatar: image1.src,
    avatarAlt: "Michael Anderson",
    rating: 5,
  },
  {
    quote:
      "The camel ride in Merzouga and the night in the desert camp were amazing. Everything on our Fes desert tour was well organized and comfortable.",
    name: "Emily Carter",
    country: "United Kingdom",
    avatar: image1.src,
    avatarAlt: "Emily Carter",
    rating: 5,
  },
  {
    quote:
      "Our private desert tour from Fes was excellent from start to finish. We enjoyed the changing landscapes, Berber villages and the beautiful Erg Chebbi dunes.",
    name: "Daniel Wilson",
    country: "Australia",
    avatar: image1.src,
    avatarAlt: "Daniel Wilson",
    rating: 5,
  },
  {
    quote:
      "Moorish Tour made our journey from Fes to Merzouga easy and enjoyable. The Sahara sunset, camel trekking and local hospitality were the highlights for us.",
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
      "Travel with local Morocco experts who know the best routes from Fes to the Sahara Desert.",
    icon: "expertise",
  },
  {
    title: "Best Value",
    description:
      "Enjoy quality Fes desert tours with fair prices and no hidden fees.",
    icon: "value",
  },
  {
    title: "Flexible Options",
    description:
      "Choose private or small group tours and customize your desert itinerary.",
    icon: "flexible",
  },
  {
    title: "Comfort & Safety",
    description:
      "Travel in comfortable vehicles with experienced drivers and carefully selected accommodations.",
    icon: "safety",
  },
];

export default function FesDesertTours() {
  return (
    <>
      <MoroccoToursHero
        title="Unforgettable Fes Desert Tours"
        desc="Discover Fes desert tours that take you through the Middle Atlas Mountains, Ifrane, cedar forests, Midelt and the beautiful Ziz Valley before reaching Merzouga and the golden Erg Chebbi dunes. Enjoy camel trekking, Sahara sunsets and an unforgettable night in a desert camp."
        image={image1}
      />

      <PopularMoroccoTours
        collection="tours-from-fes"
        title="Popular Morocco Tours From Fes"
      />

      <TopDestinations />

      <WhyTravelWithUs
        title="Why Choose Our Fes Desert Tours?"
        benefits={travelBenefits}
        reviews={travelerReviews}
        image={image1.src}
        imageAlt="Travelers enjoying a Fes to Merzouga Sahara Desert tour"
        reviewsTitle="What Our Travelers Say"
      />

      <AchievementsCTA />
    </>
  );
}