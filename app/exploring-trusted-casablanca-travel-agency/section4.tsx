import { ArticleSection, ArticleNote, ArticleTable } from "./ArticleElements";
import { tables } from "./tables";

export default function Section4(){
return <ArticleSection id="casablanca-things-to-see-city-tour" label="CITY HIGHLIGHTS" title="Best Things to See on a Private Casablanca City Tour">
<p className="mt-5 text-[17px] leading-8 text-slate-700">Casablanca is more than a quick airport stop. It feels different from the old imperial cities: broad streets, lively neighborhoods, the rhythm of an Atlantic port and architecture that moves between traditional design and modern city life. It is a good place to begin a trip gently, especially after a long flight.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The first highlight for many visitors is <strong className="font-semibold text-slate-900">Hassan II Mosque</strong>, rising beside the ocean. The exterior, courtyard and decorative details are impressive. Interior visits for non-Muslim visitors operate through guided visiting arrangements, with schedules that can change around prayers and religious dates. Confirm official visiting times, entry arrangements and clothing requirements before you travel.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">The Habous Quarter offers a slower walk among arcades, bookshops, cafés and shops selling traditional products. Nearby architecture reflects an interesting meeting of Moroccan design and twentieth-century planning. The Old Medina, meanwhile, shows ordinary city life and small local businesses. Neither area needs to be treated as a shopping challenge: slow down, explore and take a tea break.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">A final stop by Ain Diab or the Corniche introduces the oceanfront. The fresh air is welcome after a busy day, particularly around the late afternoon. If you enjoy architecture, ask your guide about the city&apos;s Art Deco buildings and public spaces. If you have only a few hours, choose two or three stops rather than trying to race across the whole city.</p>
<ArticleTable headings={tables.casablancaHighlights.headings} rows={tables.casablancaHighlights.rows} />
<ArticleNote title="Mosque visiting tip"><p>Hassan II Mosque is an active place of worship. Tourist access, ticketing and tour times can change. Respect signs and dress expectations, and avoid describing an interior visit as guaranteed until the day&apos;s schedule is confirmed.</p></ArticleNote>
</ArticleSection>;
}
