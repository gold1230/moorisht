import Link from "next/link";

import { SectionFrame, Checklist } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";


export default function Section4(){return <SectionFrame id="best-marrakech-city-tours" index={4} label="DISCOVER THE RED CITY" title="Best Marrakech City Tours: Medina, Palaces and Souks">
<p className="mt-5 text-[17px] leading-8 text-slate-700">A guided walk through Marrakech is a good introduction to the city. The old medina feels like a living maze, with small workshops, historic gates, market streets and quiet courtyards hidden behind busy lanes. A knowledgeable guide can help you understand why the area grew this way and how its crafts and everyday routines continue today.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The famous Jemaa el-Fnaa square changes character through the day. Early visits feel different from a lively evening when food stalls and performers attract crowds. Around the Koutoubia Mosque, visitors can enjoy the tower and surrounding gardens from outside. Non-Muslim travelers cannot normally enter this working mosque, so a responsible guide should not promise an interior visit.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Bahia Palace is well worth exploring for its tilework, carved wood and peaceful interior spaces. The Saadian Tombs and other historic sites can also fit into a longer city tour, but it is better to explore a few places properly than rush between every monument. Garden lovers may choose Majorelle Garden or a quieter historic garden, allowing time for a slow lunch.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Our <Link href="/tour/3-days-in-marrakech-a-simple-and-fun-plan-for-your-trip/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-950">3 Days in Marrakech itinerary</Link> offers a good way to mix guided sightseeing with personal time. If you are visiting for only one morning, tell the guide which places you care about most. A focused city experience often feels richer than an exhausting checklist.</p>
<ArticlePhoto name="panorama"/>
<Checklist items={["Jemaa el-Fnaa and lively market lanes", "Bahia Palace architecture and history", "Koutoubia exterior and gardens", "Time for a tea break or artisan workshop"]}/>
</SectionFrame>;}
