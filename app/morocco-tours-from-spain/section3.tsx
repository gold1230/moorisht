import Link from "next/link";
import { SectionFrame, InfoPanel, CompareTable } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
export default function Section3(){
  return <SectionFrame id={"ferry-from-spain-to-morocco"} label={"ARRIVAL OPTIONS"} title={"Taking the Ferry from Spain to Morocco"} index={3}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The ferry is part of the adventure. You see the land ahead grow larger, walk off the boat, and know that your trip has really begun. It can also be a practical choice for visitors already spending time in Andalusia. But one detail matters more than almost anything else: <strong className="font-extrabold text-[#102043]">not every ferry lands in central Tangier</strong>.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The Algeciras–Tangier Med route reaches a modern port outside the city. You will need onward transport to Tangier itself, a hotel, or the beginning of your tour. The Tarifa–Tangier Ville route, when operating on your chosen date, arrives much nearer Tangier&apos;s central sights. Ferry companies and sailing patterns change, so check the specific route and port, not just the word “Tangier” on your ticket.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Allow time for check-in, border procedures and possible delays caused by weather or busy travel dates. On a same-day visit, book the return carefully and keep extra room in your schedule. <Link href="/morocco-desert-tours-from-tangier/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Explore travel ideas beginning in Tangier</Link> if you prefer to continue beyond the port.</p>
<ArticlePhoto name="port"/>
<CompareTable headings={["Spain departure", "Morocco arrival", "Planning point"]} rows={[["Algeciras", "Tangier Med", "Large port away from central Tangier; arrange ground transfer"], ["Tarifa", "Tangier Ville (when service operates)", "Closer to central Tangier; confirm current operator and sailing"], ["Almería (selected services)", "Nador or other eastern ports", "More suitable for certain eastern Morocco routes; verify current service"]]}/>
<InfoPanel title={"Important ferry detail"}><p>Tangier Ville and Tangier Med are different ports. A tour pickup must use the exact arrival port shown on your confirmed ticket. Tarifa services should be reconfirmed because operators and timetables can change.</p></InfoPanel>
  </SectionFrame>;
}
