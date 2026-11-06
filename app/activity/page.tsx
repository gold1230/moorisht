import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "./assets/activities-desert-hero.webp";
import camelImage from "./assets/camel-sunset.webp";
import quadImage from "./assets/quad-merzouga.webp";
import palmImage from "./assets/quad-palmeraie.webp";
import duskImage from "./assets/desert-dusk.webp";
import { ActivityIcon } from "./_components/ActivityIcon";
import { ActivityCard, type ActivityCardData } from "./_components/ActivityCard";
import { ActivityFaqs } from "./_components/ActivityFaqs";
import { ActivityCta } from "./_components/ActivityCta";

const origin = "https://moorishtour.com";
const camelHref = "/activity/camel-trekking-in-the-desert/";
const quadHref = "/activity/quad-biking-in-marrakech-and-merzouga/";

export const metadata: Metadata = {
  title: "Morocco Activities: Camel Trekking & Quad Biking | Moorish Tour",
  description: "Discover two unforgettable Morocco activities: a peaceful camel trek in the Merzouga desert and an exciting quad bike adventure in Marrakech or Merzouga.",
  keywords: ["Morocco activities", "camel trekking Merzouga", "quad biking Marrakech", "quad biking Merzouga", "Sahara desert experiences", "Moorish Tour activities"],
  alternates: { canonical: `${origin}/activity/` },
  openGraph: {
    title: "Desert Activities in Morocco | Moorish Tour",
    description: "Two ways to experience Morocco: slow camel rides and adventurous quad biking.",
    url: `${origin}/activity/`,
    type: "website",
    images: [{ url: `${origin}${heroImage.src}`, width: 1800, height: 1125, alt: "Illustrated Sahara dunes with a camel and a quad bike" }],
  },
  twitter: { card: "summary_large_image", title: "Morocco Activities | Moorish Tour", description: "Camel trekking and quad biking adventures in Morocco." },
};

const experiences: ActivityCardData[] = [
  {
    number: "01", eyebrow: "The peaceful journey", title: "Camel Trekking in the Desert",
    description: "Slow down, follow the dunes, and discover why sunset feels different in the Sahara.",
    image: camelImage, imageAlt: "Original illustration of camels moving through Sahara dunes at sunset",
    href: camelHref, location: "Merzouga • Sahara", pace: "Relaxed pace", accent: "amber",
  },
  {
    number: "02", eyebrow: "The adventure journey", title: "Quad Biking in Morocco",
    description: "Feel the open air as you explore desert tracks or palm-lined paths with a local guide.",
    image: quadImage, imageAlt: "Original illustration of a helmeted rider on a quad bike in golden desert dunes",
    href: quadHref, location: "Marrakech & Merzouga", pace: "Active pace", accent: "teal",
  },
];

const faqs = [
  { question: "Where can I go camel trekking in Morocco?", answer: "Merzouga, beside the Erg Chebbi dunes, is a well-known place for a Sahara camel trek. The exact meeting point, route and departure time should be confirmed before you travel." },
  { question: "Is quad biking available in both Marrakech and Merzouga?", answer: "Yes. Marrakech's Palmeraie offers palm-lined tracks, while Merzouga provides a desert setting. They are two different locations, so choose the one that fits your itinerary." },
  { question: "Can beginners try these activities?", answer: "Camel treks are often suitable for first-time riders, provided they are comfortable mounting and sitting on a camel. Guided quad sessions may also welcome beginners after a safety briefing, but age, fitness and other participation rules depend on the operator." },
  { question: "Can we do a camel ride and quad biking on the same day?", answer: "It may be possible if both activities are planned in the same area and you allow time between them. Ask for a coordinated schedule rather than assuming both experiences are included in one booking." },
  { question: "What should I bring for a desert activity?", answer: "Comfortable clothing, closed shoes, sunscreen, a hat, sunglasses and drinking water are useful. For quad biking, follow the operator's protective-gear and safety instructions." },
  { question: "Are prices, transfers and equipment included?", answer: "Inclusions depend on the activity and booking option. Confirm the latest price, meeting point, transfer arrangements, equipment and cancellation terms before paying." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage", "@id": `${origin}/activity/#webpage`, "url": `${origin}/activity/`,
      "name": "Morocco Activities: Camel Trekking and Quad Biking",
      "description": "Explore guided camel trekking and quad biking experiences in Morocco.",
      "inLanguage": "en", "isPartOf": { "@id": `${origin}/#website` },
      "mainEntity": { "@type": "ItemList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Camel Trekking in the Desert", "url": `${origin}${camelHref}` },
        { "@type": "ListItem", "position": 2, "name": "Quad Biking in Marrakech and Merzouga", "url": `${origin}${quadHref}` },
      ] },
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${origin}/` },
      { "@type": "ListItem", "position": 2, "name": "Activities", "item": `${origin}/activity/` },
    ] },
    { "@type": "FAQPage", "mainEntity": faqs.map((item) => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) },
  ],
};

export default function ActivitiesPage() {
  return (
    <main className="overflow-hidden bg-[#fcfaf7] text-[#17283e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Editorial opening; the site's global header/footer remain outside this route. */}
      <section className="relative isolate min-h-[720px] overflow-hidden bg-[#152940] text-white lg:min-h-[770px]">
        <Image src={heroImage} alt="Illustrated Sahara scene with a camel and quad bike in the dunes" fill priority sizes="100vw" className="object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14283f]/95 via-[#14283f]/82 to-[#14283f]/15 lg:from-[#14283f]/95 lg:via-[#14283f]/75" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col px-5 pb-16 pt-11 md:px-10 lg:min-h-[770px]">
          <nav aria-label="Breadcrumb" className="mb-24 flex items-center gap-2 text-xs text-white/70 md:mb-28">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span><span className="font-semibold text-[#f5cd91]">Activities</span>
          </nav>
          <div className="max-w-[790px]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#f4ce99] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#e9bb7c]"/> Outdoor adventures · Moorish Tour
            </div>
            <h1 className="max-w-[850px] font-serif text-[51px] font-medium leading-[1.05] tracking-tight sm:text-[68px] lg:text-[88px]">
              Two ways to <span className="italic text-[#f1c88e]">feel</span> the desert.
            </h1>
            <p className="mt-8 max-w-[550px] text-[17px] leading-8 text-white/85 md:text-lg">
              A peaceful camel journey. An exciting quad adventure. Discover simple, memorable things to do in <Link href="/morocco/" className="font-semibold text-[#f4cf96] underline decoration-[#f4cf96]/50 underline-offset-4 hover:text-white">Morocco</Link>—and choose the experience that feels right for you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#activities" className="inline-flex items-center gap-3 rounded-full bg-[#eac48a] px-7 py-4 text-[14px] font-extrabold text-[#19273c] transition-all hover:bg-[#f4d8aa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore activities <ActivityIcon name="arrow-right" className="h-4 w-4"/></a>
              <Link href="/plan-your-morocco-tour/" className="inline-flex items-center gap-3 rounded-full border border-white/50 px-7 py-4 text-[14px] font-bold text-white transition-all hover:bg-white/10">Plan a custom trip <ActivityIcon name="arrow-up-right" className="h-4 w-4"/></Link>
            </div>
          </div>
          <div className="mt-auto grid max-w-[650px] grid-cols-1 gap-3 border-t border-white/30 pt-6 text-sm sm:grid-cols-3 sm:gap-7">
            <div><span className="block font-serif text-3xl text-[#f7d69f]">02</span><span className="text-white/75">Signature activities</span></div>
            <div><span className="block font-serif text-3xl text-[#f7d69f]">02</span><span className="text-white/75">Travel moods</span></div>
            <div><span className="block font-serif text-3xl text-[#f7d69f]">Your pace</span><span className="text-white/75">Your kind of adventure</span></div>
          </div>
        </div>
      </section>

      {/* The only two activity cards. */}
      <section id="activities" className="scroll-mt-16 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#855728]"><span className="h-px w-7 bg-[#b58958]"/> Choose your experience</p>
              <h2 className="font-serif text-4xl tracking-tight md:text-6xl">Two unforgettable <span className="italic text-[#87582e]">adventures.</span></h2>
              <p className="mt-5 max-w-lg text-[16px] leading-8 text-[#65707a]">Choose calm or excitement. Both make time outdoors feel special, and each deserves its own moment.</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e4d6c2] bg-white px-5 py-3 text-xs font-bold text-[#655647]"><ActivityIcon name="sparkle" className="h-4 w-4 text-[#805323]"/> 2 experiences to explore</span>
          </div>
          <div className="grid gap-7 md:grid-cols-2">{experiences.map((item) => <ActivityCard item={item} key={item.href}/>)}</div>
        </div>
      </section>

      {/* Short, genuinely useful comparison. */}
      <section className="bg-[#f2ede4] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#855728]">Find your travel style</p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">Slow and peaceful, or <span className="italic text-[#82552d]">full of energy?</span></h2>
          </div>
          <div className="grid overflow-hidden rounded-[26px] border border-[#e6ddce] bg-white shadow-[0_20px_50px_rgba(27,43,61,.06)] lg:grid-cols-[230px_1fr_1fr]">
            <div className="hidden bg-[#182d43] p-7 text-sm font-semibold text-white lg:block">
              <div className="mb-12 font-serif text-2xl">At a glance</div>
              <div className="space-y-12 text-[#cbd4db]"><p>Experience</p><p>Best setting</p><p>What it feels like</p><p>Before you go</p></div>
            </div>
            <div className="space-y-6 border-b border-[#e9e2d7] p-7 lg:border-b-0 lg:border-r lg:p-9">
              <div className="mb-8"><span className="mb-3 inline-flex rounded-full bg-[#f8ede0] p-3 text-[#835426]"><ActivityIcon name="sun" className="h-6 w-6"/></span><h3 className="font-serif text-3xl">Camel trekking</h3></div>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#855728] lg:hidden">Experience</span>Gentle, scenic journey</p>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#855728] lg:hidden">Best setting</span>Merzouga and the Erg Chebbi dunes</p>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#855728] lg:hidden">What it feels like</span>Quiet views, warm light and time for photos</p>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#855728] lg:hidden">Before you go</span>Confirm comfort, meeting point and ride length</p>
              <Link className="inline-flex items-center gap-2 pt-1 text-sm font-bold text-[#976132] hover:underline" href={camelHref}>Discover camel trekking <ActivityIcon name="arrow-up-right" className="h-4 w-4"/></Link>
            </div>
            <div className="space-y-6 p-7 lg:p-9">
              <div className="mb-8"><span className="mb-3 inline-flex rounded-full bg-[#dff0e8] p-3 text-[#28695e]"><ActivityIcon name="wind" className="h-6 w-6"/></span><h3 className="font-serif text-3xl">Quad biking</h3></div>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#236f62] lg:hidden">Experience</span>Active, guided off-road adventure</p>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#236f62] lg:hidden">Best setting</span>Marrakech Palmeraie or Merzouga</p>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#236f62] lg:hidden">What it feels like</span>Fresh air, new tracks and changing landscapes</p>
              <p className="text-sm leading-7 text-[#63707c]"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#236f62] lg:hidden">Before you go</span>Confirm helmets, briefing, route and age rules</p>
              <Link className="inline-flex items-center gap-2 pt-1 text-sm font-bold text-[#377d76] hover:underline" href={quadHref}>Discover quad biking <ActivityIcon name="arrow-up-right" className="h-4 w-4"/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual editorial break. */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 md:px-10">
          <div className="relative min-h-[340px] overflow-hidden rounded-[26px] sm:min-h-[450px]">
            <Image src={palmImage} alt="Original illustration of a quad ride among palm trees" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/>
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/60 bg-white/85 px-5 py-3 text-xs font-bold tracking-wide text-[#274456] backdrop-blur">MARRAKECH PALMERAIE</div>
          </div>
          <div>
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#825628]">Designed around your trip</p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.13] tracking-tight md:text-5xl">Good adventures start with <em className="text-[#87582e]">good planning.</em></h2>
            <p className="mt-6 text-[16px] leading-8 text-[#63707b]">Marrakech and Merzouga are not next to each other. If you have a short stay in Marrakech, the Palmeraie can fit more easily into your plans. If you are spending time beside Erg Chebbi, camel trekking and guided quad adventures can become part of a desert day.</p>
            <div className="mt-8 grid gap-5">
              {[
                ["map-pin", "Start in the right place", "Choose the activity location that matches your route."],
                ["clock", "Leave time to enjoy it", "Plan around the heat, transfers and comfortable breaks."],
                ["shield", "Confirm the details", "Ask about safety, ride duration, equipment and inclusions."],
              ].map(([name, title, desc]) => (
                <div key={title} className="flex gap-4"><span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f6efe6] text-[#85582a]"><ActivityIcon name={name as "map-pin" | "clock" | "shield"} className="h-5 w-5"/></span><div><h3 className="font-semibold text-[#23354a]">{title}</h3><p className="mt-1 text-[14px] leading-6 text-[#697783]">{desc}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e9ddcd] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-10">
          <div><p className="mb-4 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#815426]">Stay a little longer</p><h2 className="font-serif text-4xl leading-tight md:text-5xl">Make your desert day <span className="italic text-[#85522a]">a lasting memory.</span></h2><p className="mt-5 max-w-xl text-[16px] leading-8 text-[#596572]">Enjoy the landscape, take your time with photographs, and let your plans leave room for the unexpected. Browse both activities to see what fits your travel style.</p><div className="mt-7 flex flex-wrap gap-3"><Link href={camelHref} className="rounded-full bg-[#1c3146] px-6 py-3 text-sm font-bold text-white hover:bg-[#30475e]">Camel trekking</Link><Link href={quadHref} className="rounded-full border border-[#7f654a] px-6 py-3 text-sm font-bold text-[#45392d] hover:bg-white/40">Quad biking</Link></div></div>
          <div className="relative min-h-[310px] overflow-hidden rounded-[25px] md:min-h-[350px]"><Image src={duskImage} alt="Original illustration of quiet dunes and camel trekking at dusk" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover"/></div>
        </div>
      </section>
      <ActivityFaqs items={faqs} heading="Before you set off" subtitle="A few simple answers help you choose an activity with confidence."/>
      <ActivityCta title="Ready to choose your adventure?" description="Tell us whether you're visiting Marrakech or Merzouga, and which experience interests you. We'll help you plan around your itinerary."/>
    </main>
  );
}
