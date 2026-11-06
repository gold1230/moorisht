"use client";
import { useState } from "react";
import Link from "next/link";
import { itineraries } from "./itineraries";
const profiles=[{id:"first",label:"First visit"},{id:"desert",label:"See the Sahara"},{id:"slow",label:"Travel slowly"}] as const;
export default function ItineraryFinder(){
 const [days,setDays]=useState(10);const [profile,setProfile]=useState<"first"|"desert"|"slow">("first");
 const route=itineraries.find(x=>x.days===days)??itineraries[0]!;
 const notes:Record<typeof profile,string>={
  first:days<=5?"A focused trip is often more enjoyable than trying to see all of the country in a few days.":"A mix of history, food, cities and beautiful scenery gives you a memorable introduction.",
  desert:days<=5?"For a relaxed desert experience, consider at least seven days or an open-jaw trip. A three-day desert return is possible but involves long driving days.":"The longer routes give you more time for the dunes, mountain roads and oasis villages.",
  slow:days<10?"For slower travel, pick fewer bases and skip destinations that require long transfers.":"Use the extra nights to enjoy medinas, coastlines and everyday moments rather than constant hotel changes."
 };
 return <div className="rounded-[2rem] border border-amber-200 bg-white p-5 shadow-[0_16px_70px_rgba(16,32,67,.08)] sm:p-7">
 <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-amber-900">Interactive trip finder</span><p className="text-sm text-slate-500">Choose your days and your travel style</p></div>
 <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
  <div><p className="font-bold text-[#102043]">1. How much time do you have?</p><div className="mt-3 flex flex-wrap gap-2" aria-label="Select number of travel days">{itineraries.map(item=><button type="button" key={item.days} aria-pressed={days===item.days} onClick={()=>setDays(item.days)} className={`rounded-xl px-4 py-2.5 text-sm font-extrabold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${days===item.days?"bg-[#102043] text-white":"bg-slate-100 text-[#102043] hover:bg-amber-100"}`}>{item.days} days</button>)}</div>
  <p className="mt-6 font-bold text-[#102043]">2. What matters most?</p><div className="mt-3 flex flex-wrap gap-2">{profiles.map(x=><button key={x.id} type="button" aria-pressed={profile===x.id} onClick={()=>setProfile(x.id)} className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${profile===x.id?"border-amber-500 bg-amber-50 text-amber-900":"border-slate-200 bg-white text-slate-600 hover:border-amber-300"}`}>{x.label}</button>)}</div></div>
  <div aria-live="polite" className="rounded-2xl bg-[#102043] p-6 text-white"><p className="text-xs font-black uppercase tracking-[.17em] text-amber-300">Your suggested starting point</p><p className="mt-2 text-2xl font-black">{route.days} days · {route.title}</p><p className="mt-3 text-sm leading-7 text-slate-200">{notes[profile]}</p><p className="mt-3 text-xs font-semibold text-amber-200">{route.start} → {route.end}</p><Link href={`#itinerary-${route.days}-days`} className="mt-5 inline-flex items-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-extrabold text-[#102043] hover:bg-amber-400">Read this itinerary <span aria-hidden="true" className="ml-2">↗</span></Link></div>
 </div></div>;
}
