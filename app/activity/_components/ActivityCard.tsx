import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ActivityIcon } from "./ActivityIcon";

export type ActivityCardData = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  href: string;
  location: string;
  pace: string;
  accent: "amber" | "teal";
};

export function ActivityCard({item}: {item: ActivityCardData}) {
  const amber = item.accent === "amber";
  return (
    <article className="group relative isolate flex min-h-[540px] flex-col overflow-hidden rounded-[28px] bg-[#1b3148] shadow-[0_15px_48px_rgba(23,40,62,.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(23,40,62,.18)] sm:min-h-[560px]">
      <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.055]"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#101f35]/95 via-[#101f35]/25 to-[#101f35]/5"/>
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-7 sm:p-9">
        <span className="rounded-full border border-white/50 bg-white/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.17em] text-white backdrop-blur-md">{item.eyebrow}</span>
        <span className="font-serif text-5xl italic text-white/75">{item.number}</span>
      </div>
      <div className="relative mt-auto p-7 text-white sm:p-9">
        <div className="mb-5 flex flex-wrap gap-2 text-[12px] font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm"><ActivityIcon name="map-pin" className="h-3.5 w-3.5"/>{item.location}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm"><ActivityIcon name="wind" className="h-3.5 w-3.5"/>{item.pace}</span>
        </div>
        <h3 className="max-w-[470px] font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">{item.title}</h3>
        <p className="mt-4 max-w-md text-[15px] leading-7 text-white/85">{item.description}</p>
        <Link href={item.href} className={`mt-7 inline-flex items-center gap-4 rounded-full px-6 py-3.5 text-sm font-bold transition-transform hover:gap-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${amber ? "bg-[#eac48a] text-[#18253a]" : "bg-[#99e1d2] text-[#18253a]"}`}>
          Explore this activity <ActivityIcon name="arrow-up-right" className="h-4 w-4"/>
        </Link>
      </div>
    </article>
  );
}
