import { SectionFrame, Timeline } from "./ArticleElements";
export default function Section20(){
return <SectionFrame id="tour-from-tangier" label="STARTING POINT" title="Morocco Tours from Tangier: A Route Through the North" index={20}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Tangier is a practical base if you enter from Spain or have a flight into northern Morocco. For a relaxed four- or five-day trip, you can explore Tangier, Chefchaouen and Fes. Adding Rabat is possible on a longer route, while including the Sahara usually means allocating several more days.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The joy of a northern route is variety without crossing the entire country. You can move between the sea, the Rif Mountains, blue lanes and historic medinas while still allowing time for cafés, artisan workshops and city walks.</p>
<Timeline items={[["Day 1 — Tangier", "Meet your driver, walk in the old town and rest after arrival"], ["Day 2 — Tangier to Chefchaouen", "Travel to the Rif Mountains and enjoy an afternoon in the blue town"], ["Day 3 — Chefchaouen", "Slow walks, viewpoints and local food without another long transfer"], ["Day 4 — Travel to Fes", "Arrive with time for a gentle evening"], ["Day 5 — Fes", "Explore the old medina with a local guide, then continue or depart"]]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">This is a <strong className="font-extrabold text-[#102043]">sample route</strong>, not a promise of a particular tour departure. Adjust the final day around your flight or train connection.</p>
</SectionFrame>;
}
