import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import camelSunset from "../assets/camel-sunset.webp";
import camelGolden from "../assets/camel-golden-dunes.webp";
import quadDunes from "../assets/quad-merzouga.webp";
import quadPalms from "../assets/quad-palmeraie.webp";
import { ActivityIcon, type ActivityIconName } from "./ActivityIcon";
import { ActivityFaqs, type ActivityFaqItem } from "./ActivityFaqs";
import { ActivityCta } from "./ActivityCta";

export const camelQuestions: ActivityFaqItem[] = [
  { question: "How long does a camel trek in Merzouga take?", answer: "The existing Moorish Tour activity is described as a two-hour camel trekking experience. Confirm the exact ride time, meeting point and departure details when booking." },
  { question: "Do I need camel riding experience?", answer: "No previous experience is normally needed for a guided first-time ride. Let the team know about any mobility concerns or other needs before booking." },
  { question: "Can I ride a camel at sunset?", answer: "Sunset is a popular time for dune views, but departures depend on the season, weather and available schedule. Ask for a sunset departure specifically if it is important to you." },
  { question: "Is an overnight desert camp included?", answer: "Not automatically. A short camel ride and an overnight desert camp are different experiences. Confirm whether camp accommodation, dinner or transfers are included in your chosen option." },
  { question: "What clothes should I wear?", answer: "Wear comfortable long trousers, closed shoes and breathable layers. Pack sunglasses, sun protection and water. Bring a warmer layer for cool desert mornings or evenings." },
  { question: "Can children join a camel trek?", answer: "It depends on their age, comfort, supervision needs and the activity operator's rules. Ask before booking, rather than assuming a ride is suitable for every child." },
];

export const quadQuestions: ActivityFaqItem[] = [
  { question: "Where can I go quad biking in Marrakech?", answer: "The Palmeraie area is a popular location for guided quad outings, with palm groves and off-road tracks. Confirm the exact meeting point, route and transfer arrangements for your session." },
  { question: "Is quad biking in Merzouga different?", answer: "Yes. Merzouga has a Sahara landscape with sandy terrain. The routes and driving conditions are different from the palm-lined tracks around Marrakech." },
  { question: "Can I ride a quad bike with no experience?", answer: "Some guided tours welcome first-time riders after a briefing and practice, but participation is subject to the operator's age, safety and fitness requirements. Always follow the guide." },
  { question: "Are helmets and safety equipment provided?", answer: "Helmets are commonly part of organized guided quad tours, but you should confirm exactly what equipment is included and check that it fits correctly before riding." },
  { question: "Do I need a driving license?", answer: "Requirements can differ according to the activity route, vehicle and operator. Ask about the exact licensing, minimum age and identification rules when reserving." },
  { question: "Can I do camel trekking and quad biking together?", answer: "Sometimes, especially when both are arranged around Merzouga. They are separate activities unless your booking confirms a combined experience and its schedule." },
];

const camelLink = "/activity/camel-trekking-in-the-desert/";
const quadLink = "/activity/quad-biking-in-marrakech-and-merzouga/";

type DetailKind = "camel" | "quad";

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-5 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#815426]"><span className="h-px w-7 bg-[#ba8b55]"/>{children}</p>;
}

function DetailFact({ icon, label, text }: { icon: ActivityIconName; label: string; text: string }) {
  return (
    <div className="flex items-center gap-4 px-5 py-6 sm:px-7">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f4eae0] text-[#80592d]"><ActivityIcon name={icon} className="h-5 w-5"/></div>
      <div><span className="block text-[10px] font-bold uppercase tracking-widest text-[#535d69]">{label}</span><strong className="mt-1 block text-[14px] font-semibold leading-6 text-[#22354a]">{text}</strong></div>
    </div>
  );
}

function MiniCard({number, title, description}: {number: string;title: string;description: string}) {
  return <div className="rounded-[21px] border border-[#e8e3dc] bg-white p-7 shadow-[0_12px_30px_rgba(27,43,61,.04)]"><span className="mb-7 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f4e9d8] font-serif text-[18px] text-[#815426]">{number}</span><h3 className="font-serif text-2xl text-[#1b2d43]">{title}</h3><p className="mt-3 text-[15px] leading-7 text-[#67737c]">{description}</p></div>;
}

function CamelExperience() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <MiniCard number="01" title="Meet your guide" description="Arrive at the agreed meeting point, get comfortable, and ask anything you'd like to know about riding a camel."/>
        <MiniCard number="02" title="Move with the dunes" description="Let the steady rhythm of the camel carry you into the broad, open desert landscape near Merzouga."/>
        <MiniCard number="03" title="Enjoy the quiet" description="Look back at the changing dune shapes, pause for photos if your route allows, and enjoy the soft light."/>
        <MiniCard number="04" title="Return with memories" description="Finish your ride back at the agreed location. Exact stops and timing depend on the selected departure."/>
      </div>
      <div className="mt-7 rounded-2xl border-l-4 border-[#cfaa77] bg-[#f6efe4] px-6 py-5 text-[15px] leading-8 text-[#5d5a51]"><strong className="text-[#392f25]">A small planning tip:</strong> If seeing sunset over the dunes is your priority, ask for a sunset-timed trek and check the departure time before booking.</div>
    </>
  );
}

function QuadExperience() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-[24px] border border-[#e9e3d9] bg-white shadow-[0_12px_30px_rgba(27,43,61,.05)]">
          <div className="relative h-56"><Image src={quadPalms} alt="Original artwork showing quad biking among Marrakech Palmeraie palm trees" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/></div>
          <div className="p-7"><span className="mb-3 inline-flex rounded-full bg-[#f3ecdf] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#976a3d]">Location 01</span><h3 className="font-serif text-3xl text-[#1c3045]">Marrakech Palmeraie</h3><p className="mt-3 text-[15px] leading-7 text-[#68727c]">An active break from the city with palm-lined trails and open spaces. A good option when your trip is based around Marrakech.</p><p className="mt-4 text-xs font-semibold text-[#966c44]">Best for: a Marrakech-based activity day</p></div>
        </article>
        <article className="overflow-hidden rounded-[24px] border border-[#e9e3d9] bg-white shadow-[0_12px_30px_rgba(27,43,61,.05)]">
          <div className="relative h-56"><Image src={quadDunes} alt="Original artwork of a guided quad bike adventure in Merzouga's sandy landscape" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/></div>
          <div className="p-7"><span className="mb-3 inline-flex rounded-full bg-[#deeee9] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#397d72]">Location 02</span><h3 className="font-serif text-3xl text-[#1c3045]">Merzouga Desert</h3><p className="mt-3 text-[15px] leading-7 text-[#68727c]">A wide-open Sahara setting with golden sandy terrain and sweeping views. A natural fit when you&apos;re already visiting Merzouga.</p><p className="mt-4 text-xs font-semibold text-[#397d72]">Best for: a Sahara-based adventure</p></div>
        </article>
      </div>
      <div className="mt-7 rounded-2xl border-l-4 border-[#72afa4] bg-[#e7f3ee] px-6 py-5 text-[15px] leading-8 text-[#4c6664]"><strong className="text-[#244b47]">Important:</strong> Marrakech and Merzouga are far apart. These are alternative quad biking locations—not stops on one short quad ride.</div>
    </>
  );
}

export function ActivityDetail({ kind }: { kind: DetailKind }) {
  const isCamel = kind === "camel";
  const title = isCamel ? "Camel Trekking in the Desert" : "Quad Biking in Marrakech & Merzouga";
  const kicker = isCamel ? "The slow Sahara experience" : "The open-air adventure";
  const description = isCamel
    ? "Leave the noise behind. Follow the golden dunes of Merzouga by camel, watch the light change, and enjoy the Sahara at a slower pace."
    : "Follow new tracks, feel the fresh air, and enjoy a guided quad biking experience in the landscapes of Marrakech or Merzouga.";
  const hero = isCamel ? camelSunset : quadDunes;
  const heroAlt = isCamel ? "Illustration of camel trekking across sunset dunes in Merzouga" : "Illustration of a helmeted traveler quad biking through the Merzouga desert";
  const questions = isCamel ? camelQuestions : quadQuestions;
  const otherHref = isCamel ? quadLink : camelLink;
  const otherTitle = isCamel ? "Quad biking in Marrakech & Merzouga" : "Camel trekking in the desert";
  const otherDescription = isCamel ? "Ready to add more energy to your adventure? Try guided quad biking next." : "Prefer a peaceful desert experience? See the dunes from the back of a camel.";
  const otherImage = isCamel ? quadPalms : camelGolden;
  const introTitle = isCamel ? "The beauty of going a little slower." : "Choose the landscape that matches your trip.";
  const introBody = isCamel
    ? "Camel trekking is one of the simplest ways to experience the atmosphere of the Sahara. You rise above the sand, notice small changes in the dunes, and have time to enjoy the view. This activity focuses on a guided ride near Merzouga; a desert camp stay is a separate booking unless stated otherwise."
    : "Quad biking adds a lively outdoor experience to your time in Morocco. You can ride in the Palmeraie area around Marrakech or choose a sandy setting near Merzouga. Your guide and the selected route shape the experience, so it's worth checking the details before you go.";
  const sideIntro = isCamel ? "A journey through Erg Chebbi" : "Palms or dunes?";
  const sideText = isCamel ? "Expect a calm pace and changing sand colors. The activity is listed as around two hours, but the precise route and departure should be confirmed when you reserve." : "Both locations offer memorable views, but travel times between Marrakech and Merzouga mean they need separate planning.";

  return (
    <main className="overflow-hidden bg-[#fcfaf7] text-[#17283e]">
      <section className="bg-[#13283e] pb-24 text-white md:pb-36">
        <div className="mx-auto max-w-7xl px-5 pt-9 md:px-10">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/65"><Link href="/" className="hover:text-white">Home</Link><span>/</span><Link href="/activity/" className="hover:text-white">Activities</Link><span>/</span><span className="font-medium text-[#edc48d]">{isCamel ? "Camel Trekking" : "Quad Biking"}</span></nav>
          <div className="grid items-center gap-12 pb-6 pt-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:pt-20">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bda47f]/45 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.17em] text-[#ecc990]"><ActivityIcon name="sparkle" className="h-4 w-4"/>{kicker}</span>
              <h1 className="max-w-2xl font-serif text-[50px] leading-[1.06] tracking-tight sm:text-[65px] lg:text-[72px]">{title}</h1>
              <p className="mt-7 max-w-xl text-[17px] leading-8 text-white/80">{description}</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#experience" className="inline-flex items-center gap-3 rounded-full bg-[#eac48a] px-7 py-4 text-[14px] font-extrabold text-[#16283f] transition-all hover:bg-[#f2d5a8]">Explore the experience <ActivityIcon name="arrow-right" className="h-4 w-4"/></a><Link href="/plan-your-morocco-tour/" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-4 text-sm font-bold text-white hover:bg-white/10">Plan this activity <ActivityIcon name="arrow-up-right" className="h-4 w-4"/></Link></div>
              <p className="mt-8 flex items-center gap-2 text-sm text-white/60"><ActivityIcon name="map-pin" className="h-4 w-4 text-[#eac48a]"/>{isCamel ? "Merzouga • Erg Chebbi • Sahara" : "Marrakech Palmeraie or Merzouga • Choose your location"}</p>
            </div>
            <div className="relative isolate h-[385px] overflow-hidden rounded-[28px] shadow-[0_28px_85px_rgba(0,0,0,.25)] sm:h-[485px] lg:h-[560px]">
              <Image src={hero} alt={heroAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2637]/50 to-transparent"/>
              <span className="absolute bottom-6 left-6 rounded-full border border-white/45 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-white backdrop-blur-sm">{isCamel ? "A slower kind of adventure" : "Where adventure begins"}</span>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-5 md:px-10">
        <div className="grid overflow-hidden rounded-[22px] border border-[#e7dfd3] bg-white shadow-[0_20px_55px_rgba(29,44,61,.13)] sm:grid-cols-2 lg:grid-cols-4">
          <DetailFact icon="map-pin" label="Location" text={isCamel ? "Merzouga, Sahara" : "Marrakech or Merzouga"}/>
          <DetailFact icon="clock" label="Duration" text={isCamel ? "Around 2 hours*" : "Depends on chosen route"}/>
          <DetailFact icon="users" label="Experience" text={isCamel ? "Guided camel ride" : "Guided quad adventure"}/>
          <DetailFact icon="shield" label="Before booking" text="Confirm details & suitability"/>
        </div>
        {isCamel && <p className="mt-3 text-xs text-[#555049]">* Duration based on the existing Moorish Tour activity listing. Confirm when reserving.</p>}
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 pb-5 pt-12 text-[13px] font-bold text-[#6b7179] md:px-10"><a className="hover:text-[#815426]" href="#overview">Overview</a><a className="hover:text-[#815426]" href="#experience">The experience</a><a className="hover:text-[#815426]" href="#planning">How to prepare</a><a className="hover:text-[#815426]" href="#questions">FAQs</a></div>

      <section id="overview" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_.9fr] md:px-10">
          <div><Eyebrow>About this activity</Eyebrow><h2 className="max-w-2xl font-serif text-4xl leading-[1.15] tracking-tight md:text-5xl">{introTitle}</h2><p className="mt-6 text-[16px] leading-8 text-[#64717c]">{introBody}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{(isCamel ? ["Take in the Sahara views", "Capture lovely dune moments", "Enjoy a gentle rhythm", "Make time for golden-hour light"] : ["Explore outdoor landscapes", "Follow a guided route", "Receive a safety briefing", "Enjoy stops when scheduled"]).map((value) => <div className="flex items-center gap-2 text-[14px] font-medium text-[#3c4e60]" key={value}><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf2e8] text-[#296746]"><ActivityIcon name="check" className="h-3.5 w-3.5"/></span>{value}</div>)}</div></div>
          <div className="relative h-[340px] overflow-hidden rounded-[26px] sm:h-[480px]"><Image src={isCamel ? camelGolden : quadPalms} alt={isCamel ? "Original artwork showing camels across warm golden dunes" : "Original illustration of quad biking on palm-lined Marrakech tracks"} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover"/><div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-white/50 bg-white/90 p-5 backdrop-blur-sm"><h3 className="font-serif text-xl text-[#1c3147]">{sideIntro}</h3><p className="mt-2 text-[13px] leading-6 text-[#65717d]">{sideText}</p></div></div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 bg-[#f4f0e9] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10"><div className="mb-11 max-w-3xl"><Eyebrow>{isCamel ? "A typical ride" : "Two great settings"}</Eyebrow><h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">{isCamel ? "From the first step to the last golden view." : "One activity. Two very different landscapes."}</h2><p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#67737d]">{isCamel ? "Here is how a short desert trek may unfold. The precise itinerary depends on your guide, route and booking." : "Pick the location that fits your wider trip. Your actual riding route, duration and stops depend on the operator and selected session."}</p></div>{isCamel ? <CamelExperience/> : <QuadExperience/>}</div>
      </section>

      <section id="planning" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 md:px-10">
          <div><Eyebrow>Make the most of your day</Eyebrow><h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">A little preparation makes it <em className="text-[#835a34]">even better.</em></h2><p className="mt-6 text-[16px] leading-8 text-[#67737e]">{isCamel ? "You do not need a suitcase full of equipment. Pack for the weather, dress for comfort and make sure the ride is right for everyone in your group." : "Comfort and safety come before speed. Know where your session starts, follow your guide and ask about protective equipment and rider requirements."}</p>
            <div className="mt-8 rounded-[22px] bg-[#172e45] p-7 text-white"><ActivityIcon name="shield" className="h-8 w-8 text-[#f1cc94]"/><h3 className="mt-4 font-serif text-2xl">Before you confirm</h3><p className="mt-3 text-[14px] leading-7 text-white/80">Ask for the exact departure time, meeting point, latest total price, inclusions, cancellation policy and any restrictions that apply to your group.</p></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {(isCamel ? [
              ["sun", "Protect yourself", "Take sunscreen, sunglasses and a hat for strong desert sunlight."],
              ["leaf", "Dress comfortably", "Long trousers and closed shoes are helpful when riding."],
              ["camera", "Bring a camera", "Keep your camera secure and ask where photo stops are possible."],
              ["clock", "Check the weather", "Cool evenings and seasonal heat can change what you need."],
            ] : [
              ["shield", "Use protective gear", "Confirm a properly fitting helmet and follow all safety instructions."],
              ["leaf", "Wear practical clothes", "Choose closed shoes, comfortable trousers and clothing suitable for dust."],
              ["route", "Stay with the guide", "Follow the planned route, speed guidance and environmental rules."],
              ["clock", "Plan your timing", "Ask about the meeting point, practice session and total activity time."],
            ]).map(([icon, heading, text]) => <div className="rounded-[20px] border border-[#e8e3db] bg-white p-6 shadow-[0_8px_24px_rgba(27,43,61,.035)]" key={heading}><div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4ece0] text-[#815626]"><ActivityIcon name={icon as ActivityIconName} className="h-6 w-6"/></div><h3 className="font-serif text-2xl text-[#24364b]">{heading}</h3><p className="mt-3 text-[14px] leading-7 text-[#67737e]">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dfd2] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[.65fr_1fr] md:px-10">
          <div className="relative min-h-[290px] overflow-hidden rounded-[24px] sm:min-h-[370px]"><Image src={otherImage} alt={isCamel ? "Original illustration of quad biking in a palm-filled landscape" : "Original illustration of camels walking across golden Sahara dunes"} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover"/></div>
          <div><Eyebrow>Keep exploring</Eyebrow><h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">Want to try the <em className="text-[#80552f]">other side</em> of adventure?</h2><h3 className="mt-5 font-serif text-2xl text-[#26384b]">{otherTitle}</h3><p className="mt-3 max-w-xl text-[16px] leading-8 text-[#62707c]">{otherDescription}</p><Link href={otherHref} className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#20364c] px-7 py-4 text-sm font-bold text-white hover:bg-[#314a61]">View the other activity <ActivityIcon name="arrow-up-right" className="h-4 w-4"/></Link></div>
        </div>
      </section>
      <ActivityFaqs items={questions} heading={isCamel ? "Your camel trekking questions" : "Your quad biking questions"} subtitle="Easy answers to help you make the right choice before your trip."/>
      <ActivityCta title={isCamel ? "A quiet moment in the dunes is waiting." : "Your next desert adventure is calling."} description={isCamel ? "Ask about guided camel trekking near Merzouga, timing, availability and how it fits into your Sahara itinerary." : "Tell us whether you will be in Marrakech or Merzouga, and ask about available quad routes, safety details and booking options."} primaryLabel="Ask about this activity"/>
      <div className="bg-[#10243a] px-5 pb-9 text-center"><Link href="/activity/" className="inline-flex items-center gap-2 text-xs font-bold text-white/65 hover:text-white"><ActivityIcon name="arrow-left" className="h-4 w-4"/> Back to all activities</Link></div>
    </main>
  );
}
