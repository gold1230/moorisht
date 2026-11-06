import Link from "next/link";
import PlaceHoverCard from "@/Compentents/placeCard";
import { SectionFrame } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section5(){
  return <SectionFrame id={"fes-history-crafts-medina"} label={"IMPERIAL HISTORY"} title={"Fes: An Old Medina Where Craft Traditions Continue"} index={5}>
<p className="mt-5 text-[17px] leading-8 text-slate-700"><PlaceHoverCard place="fes">Fes</PlaceHoverCard> feels different from Marrakech. Its ancient city unfolds along narrow streets that turn past decorated fountains, neighborhood shops, schools and workshops. Some lanes are lively and busy; others become surprisingly quiet just a few steps away. Walking with a knowledgeable local guide is often worthwhile because the medina can be confusing and the story of each neighborhood adds depth to what you see.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Fes is particularly rewarding for people interested in crafts. Metalworkers shape trays and lanterns, potters produce colorful tiles, and leather workshops show how traditional skills remain part of daily life. You may visit viewpoints over the tanneries, but remember these are working places rather than sets created for tourists. Shopping should always be a choice, not an expectation.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Give the city a full day if you can, and consider a second night for a quieter morning. After exploring, find a terrace and enjoy a slow meal while the rooftops glow in the afternoon light. If the imperial cities are your main reason for traveling, the <Link href="/morocco-expedition-the-ultimate-journey/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Morocco expedition guide</Link> offers a broader look at historic routes.</p>
<ArticlePhoto name="fes"/>
  </SectionFrame>;
}
