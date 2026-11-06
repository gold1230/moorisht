import Image from "next/image";
import Link from "next/link";
import type { NewTourConfig } from "@/lib/newTourPages";
import places from "@/data/places.json";
import {
  BuildingLibraryIcon,
  CameraIcon,
  FireIcon,
  MapIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import ReviewsSection from "@/Compentents/tour/Reveiws";
import BookingPopup from "@/Compentents/contact/booking";
import TourSidebar from "@/Compentents/tour/sidebar";
import TourFeatures from "@/Compentents/tour/whychose";
import TourNavigation from "@/Compentents/tour/contenttable";
import TourHighlights from "@/Compentents/tour/highlights";
import TourItinerary from "@/Compentents/tour/itinerary";
import TourInclusions from "@/Compentents/tour/include";
import WhatToBring from "@/Compentents/tour/bring";
import TourFAQs from "@/Compentents/tour/faqs";
import TourMap from "@/Compentents/tour/tourmapclient";
import PlaceHoverCard from "@/Compentents/placeCard";
import InlinePlaceLinks from "@/Compentents/tour/InlinePlaceLinks";
import RelatedGuestFeedback from "@/Compentents/tour/RelatedGuestFeedback";
import popularTourIndex from "@/data/popular-tour-index.json";
import YouMayAlsoLike from "@/Compentents/tour/youmaylike";

/** Uses the same content and visual components as the established /tour/ pages. */
export default function NewTourDetail({ tour, jsonLd }: { tour: NewTourConfig; jsonLd: string }) {
  const url = `https://moorishtour.com/tour/${tour.slug}/`;
  const startingPrice = tour.suggestedPriceEUR ?? 0;
  const otherTours = [
    { title: "4 Days Marrakech to Fes Desert Tour", href: "/tour/4-days-tour-from-marrakech-to-fes/", image: "/tours/related/4-days-tour-from-marrakech-to-fes.jpg", duration: "4 DAYS" },
    { title: "3 Days Marrakech to Merzouga", href: "/tour/3-days-tour-from-marrakech-to-merzouga/", image: "/tours/3-days-desert-tour-from-marrakech-to-merzouga.jpg", duration: "3 DAYS" },
    { title: "8 Days Casablanca Desert Tour", href: "/tour/8-days-desert-tour-in-morocco-from-casablanca/", image: "/tours/related/morocco-itinerary-10-days-from-marrakech.jpg", duration: "8 DAYS" },
    { title: "3 Days Marrakech to Fes Private Tour", href: "/tour/3-days-tour-from-marrakech-to-fes/", image: "/tours/related/4-days-tour-from-marrakech-to-fes.jpg", duration: "3 DAYS" },
  ].filter((item) => !item.href.endsWith(`/${tour.slug}/`)).slice(0, 4);
  const recommended = tour.suggestedPriceEUR
    ? popularTourIndex.filter((item) => item.slug !== tour.slug).slice(0, 4).map((item) => ({
        title: item.title, href: `/tour/${item.slug}/`, image: item.image, duration: item.duration,
      }))
    : otherTours;

  return (
    <main className="bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div className="border-b border-neutral-800 bg-[#151515]">
        <nav aria-label="Breadcrumb" className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-gray-200 sm:gap-3">
          <Link href="/" className="hover:text-amber-300">Home</Link><span aria-hidden="true">/</span>
          <Link href="/tour/" className="hover:text-amber-300">Tours</Link><span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold text-amber-300">{tour.title}</span>
        </nav>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16" aria-labelledby="tour-heading">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
            <Image src={tour.image} alt={tour.imageAlt} width={1200} height={720} priority sizes="(min-width:1024px) 55vw, 100vw" className="aspect-[4/3] w-full object-cover" />
            <span className="absolute left-5 top-5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">{tour.duration}</span>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-800">{tour.kicker}</p>
            <h1 id="tour-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">{tour.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">{tour.subtitle}</p>
            <p className="mt-4 text-sm font-semibold text-slate-700">{tour.route}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookingPopup variant="button" buttonLabel="Get Price & Availability" startPrice={startingPrice} tourTitle={tour.title} />
              <a href="#itinerary" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 px-6 font-semibold text-slate-900 hover:bg-amber-50">View Itinerary</a>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection url={url} />
      {tour.suggestedPriceEUR ? <RelatedGuestFeedback tour={tour} /> : <section className="mx-auto max-w-7xl px-5 py-5 sm:px-8" aria-label="Guest feedback about Moorish Tour"><p className="leading-7 text-slate-700">Explore <Link href="/#traveler-reviews" className="font-semibold text-amber-800 underline">more Moorish Tour traveler feedback</Link>.</p></section>}
      <TourFeatures />
      <TourNavigation />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-5 sm:px-8 lg:grid-cols-[minmax(0,3fr)_minmax(285px,1fr)]">
        <div className="min-w-0">
          <section id="overview" className="scroll-mt-36 py-12">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-800">Morocco travel experience</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">About This {tour.duration.split(" /")[0]} {tour.start} to {tour.end} Tour</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">{tour.intro.map((p, i) => <p key={i}>{i === 0 ? <InlinePlaceLinks text={p} /> : p}</p>)}</div>
            <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-slate-900">Explore places along the route</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">Hover over or tap a destination name to preview its photo and follow the link to our local travel guide.</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3 text-sm font-semibold">
                {tour.places.map((place) => <PlaceHoverCard key={place} place={place}>{places[place].title}</PlaceHoverCard>)}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { Icon: MapIcon, value: tour.start, label: "Start city" },
                { Icon: FireIcon, value: tour.end, label: "Finish city" },
                { Icon: SunIcon, value: tour.duration, label: "Trip duration" },
                { Icon: CameraIcon, value: tour.badge, label: "Tour style" },
              ].map(({ Icon, value, label }) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white px-3 py-5 text-center"><Icon aria-hidden="true" className="mx-auto mb-2 h-5 w-5 text-amber-800" /><p className="text-sm font-bold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-600">{label}</p></div>
              ))}
            </div>
          </section>

          <section id="highlights" className="scroll-mt-36 py-10"><TourHighlights title={`Highlights of the ${tour.title}`} highlights={tour.highlights} /></section>

          <section id="itinerary" className="scroll-mt-36 py-12">
            <p className="mb-3 text-sm leading-7 text-slate-600">This day-by-day plan is designed around realistic travel routes. The order of sightseeing stops may change because of weather, traffic, hotel location or your confirmed private arrangement.</p>
            <TourItinerary title={tour.title} days={tour.days.map((description, i) => ({ title: `Day ${i + 1}: ${tour.dayTitles[i]}`, description, details: tour.dayDetails[i] }))} linkPlaceMentions={false} />
          </section>

          <section id="tourPrice" className="scroll-mt-36 py-8">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900">Price, Accommodation &amp; Availability</h2>
              {tour.suggestedPriceEUR && <p className="mt-4 text-2xl font-bold text-amber-800">Suggested from €{tour.suggestedPriceEUR} <span className="text-sm font-medium text-slate-700">per person · indicative only</span></p>}
              <p className="mt-3 leading-7 text-slate-700">{tour.priceText}</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">Your personalized quote will confirm what is included, availability and the final rate before you book.</p>
              <div className="mt-5"><BookingPopup variant="button" buttonLabel="Request a Quote" startPrice={startingPrice} tourTitle={tour.title} /></div>
            </div>
          </section>

          <section id="included" className="scroll-mt-36 py-12">
            <p className="mb-3 text-sm leading-7 text-slate-700">Typical services available for this itinerary are listed below. These are suggestions, not a confirmed inclusion list: your final booking confirmation determines the included services.</p>
            <TourInclusions title={tour.title} included={[
              "Driver and private or agreed tour transport (subject to final quote)",
              `Proposed ${tour.duration.toLowerCase()} travel route with planned sightseeing stops`,
              "Hotel and desert camp accommodation options on request",
              "Airport, riad or hotel pickup/drop-off options as agreed",
            ]} notIncluded={[
              "International flights, travel insurance and personal expenses",
              "Lunches and beverages unless confirmed in writing",
              "Local guide and monument entrance fees unless included in your package",
              "Optional excursions, camel transfers and gratuities unless confirmed",
            ]} />
          </section>

          <section id="info" className="scroll-mt-36 py-10">
            <WhatToBring description="For mountain drives, historical walking visits and Sahara time, bring comfortable shoes, sun protection, layered clothing, a warm jacket for cooler evenings, personal medication, a reusable water bottle and a small overnight bag for the desert. Temperature changes between mountain cities and dunes can be significant." />
          </section>

          <section id="map" className="scroll-mt-36 py-10">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">{tour.start} to {tour.end} Tour Route Map</h2>
            <p className="mb-6 leading-7 text-slate-700">See the main route stops for this {tour.days.length}-day itinerary. The map is illustrative rather than a live driving schedule.</p>
            <TourMap locations={tour.stops.map(([name, lat, lng, day], i) => ({ id: `stop-${i}`, name, lat, lng, day, description: `${name} – day ${day}` }))} />
          </section>

          <section id="faqs" className="scroll-mt-36 py-12">
            <TourFAQs head={[{ title: `FAQs: ${tour.title}`, description: "Practical answers to help you plan your Morocco tour, including the route, accommodation and what to expect." }]} faqs={tour.faqs.map(([question, answer]) => ({ question, answer }))} />
          </section>

          <section className="scroll-mt-36 py-8" aria-label="More Morocco travel tips">
            <h2 className="text-2xl font-bold text-slate-900">More Morocco Travel Advice</h2>
            <p className="mt-3 leading-7 text-slate-700">Planning flights, transport and the best season for the desert? Explore our <Link href="/blog/" className="font-semibold text-amber-800 underline underline-offset-4">Morocco travel blog</Link>, the <Link href="/city-of-merzouga-easy-travel-guide/" className="font-semibold text-amber-800 underline underline-offset-4">Merzouga guide</Link> and the <Link href="/tour/" className="font-semibold text-amber-800 underline underline-offset-4">full Morocco tour collection</Link>.</p>
          </section>
        </div>

        <aside className="py-8 lg:py-12">
          {/* Identical booking card + popup/form used by established tour pages. */}
          <TourSidebar price={startingPrice} tourTitle={tour.title} quoteOnly />
        </aside>
      </div>

      <section id="book-tour" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center sm:p-12">
          <BuildingLibraryIcon aria-hidden="true" className="mx-auto h-9 w-9 text-amber-800" />
          <h2 className="mt-4 text-3xl font-bold text-slate-900">Ready to Explore Morocco?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-700">Share your travel dates and ideas. We can help you shape this {tour.duration.toLowerCase()} {tour.start} to {tour.end} adventure to fit your group.</p>
          <div className="mt-6 flex justify-center"><BookingPopup variant="button" buttonLabel="Ask About This Tour" startPrice={startingPrice} tourTitle={tour.title} /></div>
        </div>
      </section>
      <YouMayAlsoLike tours={recommended} />
    </main>
  );
}
