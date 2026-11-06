import { SectionFrame, Timeline } from "./ArticleElements";
export default function Section24(){
return <SectionFrame id="ten-day-country-tour" label="EXTENDED ROUTES" title="Ten Days in Morocco: Cities, Crafts, Valleys and Dunes" index={24}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Ten days allows more variety, but the route still needs sensible choices. One popular direction begins in Casablanca, moves toward Rabat and Fes, then crosses the Middle Atlas to Merzouga. From there the journey heads west through the Dades region and Ait Ben Haddou before reaching Marrakech.</p>
<Timeline items={[["Days 1–2 — Casablanca and Rabat", "Arrive, adjust to local time and enjoy the coast and historic capital"], ["Days 3–4 — Fes", "Travel inland and allow a full guided day in the old medina"], ["Day 5 — Middle Atlas", "Enjoy the journey south with breaks rather than racing to the dunes"], ["Day 6 — Merzouga", "Experience the desert and stay in a camp or nearby accommodation"], ["Day 7 — Todra and Dades", "Continue west through gorge and valley landscapes"], ["Day 8 — Ait Ben Haddou and Atlas", "Visit earthen architecture and cross toward Marrakech"], ["Days 9–10 — Marrakech", "Explore the city, shop at your own pace and arrange departure"]]}/>
<p className="mt-5 text-[17px] leading-8 text-slate-700">This plan leaves out Chefchaouen. Add it only if you are willing to change the route or extend the trip. Trying to squeeze every northern destination into ten days can reduce the quality of the experience.</p>
</SectionFrame>;
}
