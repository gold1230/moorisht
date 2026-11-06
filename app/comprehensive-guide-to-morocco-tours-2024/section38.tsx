import Link from "next/link";
import { SectionFrame, Checklist } from "./ArticleElements";
export default function Section38(){
return <SectionFrame id="what-to-pack-morocco" label="PRACTICAL PREPARATION" title="What to Pack for Cities, Mountains and Desert Camps" index={38}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The easiest packing approach is layers. Comfortable walking shoes help in old medinas and on uneven paths. A light extra layer is useful for windy coastlines, mountain mornings and cooler desert evenings. Sun protection is important even outside the hottest months.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">For the Sahara, bring a small overnight bag if your main suitcase stays in a vehicle or guesthouse. Check whether your camp provides towels, warm bedding, heating or a place to charge devices. Packing a flashlight and a reusable water bottle can also be helpful.</p>
<Checklist items={["Comfortable closed walking shoes", "Breathable day clothes and a warmer layer", "Sun hat, sunglasses and sunscreen", "Medication and everyday essentials", "Small overnight bag for desert camp", "Phone charger and appropriate travel adapter", "Reusable water bottle", "A respectful outfit for cultural visits"]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Packing modestly does not require expensive special clothing. Choose what feels comfortable, suits the season and respects local settings. If Marrakech is the main part of your trip, our <Link href="/ultimate-guide-what-to-wear-in-marrakech-morocco/" className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950">Marrakech packing and clothing guide</Link> offers more detailed ideas.</p>
</SectionFrame>;
}
