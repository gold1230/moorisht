import Link from "next/link";

import { SectionFrame, FeatureCards } from "./ArticleElements";



export default function Section2(){return <SectionFrame id="why-choose-local-marrakech-tour-operator" index={2} label="WHY LOCAL MATTERS" title="Why Travel with a Local Marrakech Tour Operator?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Local knowledge is useful in ways that are easy to miss when you are planning from far away. A guide can tell you which old-city entrance is best for your meeting point, how much time to allow at a palace and where to find a quiet break during a busy sightseeing day. On a road trip, a driver who knows the region can recommend sensible rest stops and adjust a plan when weather affects a mountain route.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A local company also helps connect the different parts of a journey. You might need an airport pickup, a hotel in the medina, a city guide for one morning and a separate driver for a desert tour. When these arrangements are coordinated, you spend less time organizing transport and more time enjoying the places you came to see. Still, confirm which services are provided directly and which are booked through local partners.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">One of the nicest parts of traveling with local people is hearing stories about everyday life. The little details—how families cook, why certain neighborhoods have their names, or what makes a regional craft special—add meaning to the places around you. Choose guides who listen to your questions and give people space rather than treating every visit as a shopping stop.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you are interested in arranging a journey around specific interests, such as architecture, local food, photography or rural culture, our <Link href="/plan-your-morocco-tour/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">custom Morocco tour planning page</Link> is a useful place to begin. A thoughtful local itinerary is not about visiting the greatest number of sites; it is about choosing the experiences that matter to you.</p>
<FeatureCards items={[["Map and timing", "Routes that account for realistic road conditions"], ["Human stories", "Local culture explained in simple language"], ["Flexible planning", "Time to adapt for families and photographers"], ["Clear logistics", "Coordinated transport, guiding and accommodation"]]}/>
</SectionFrame>;}
