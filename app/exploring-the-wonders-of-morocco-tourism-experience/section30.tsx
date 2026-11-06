import Link from "next/link";
import { SectionFrame, Checklist } from "./ArticleElements";
export default function Section30(){
  return <SectionFrame id={"packing-and-weather-essentials"} label={"TRAVEL PREP"} title={"What to Pack for Cities, Mountains and Desert Nights"} index={30}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">One bag needs to work for very different conditions. Comfortable walking shoes matter in medinas, where streets may be uneven. Light clothing can be useful in warm weather, while a sweater or jacket helps with cool evenings in the mountains or Sahara. Sun protection is important, especially on exposed roads and dunes.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Pack medicines you normally need, copies of key travel documents and a way to charge your phone. A smaller overnight bag can be handy for a remote camp, where carrying a full suitcase may be inconvenient. Ask your tour provider about luggage arrangements instead of assuming all vehicles reach the tent entrance.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you plan to visit traditional neighborhoods or religious areas, clothing that covers shoulders and knees may help you feel comfortable and respectful. Requirements vary by location. More practical advice is available in the <Link href="/ultimate-guide-what-to-wear-in-marrakech-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Marrakech what-to-wear guide</Link>.</p>
<Checklist items={["Valid passport and travel documents", "Comfortable closed walking shoes", "Light clothes plus a warm layer", "Sun hat, sunscreen and sunglasses", "Any medicines you need and basic first-aid items", "Small daypack and refillable water bottle", "Phone charger and power adapter", "Extra socks and a small overnight desert bag", "Cash for small purchases and tips if needed"]}/>
  </SectionFrame>;
}
