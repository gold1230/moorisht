import { ArticleSection } from "./ArticleElements";
import ArticlePhoto from "./ArticlePhoto";
import Link from "next/link";

export default function Section3(){
return <ArticleSection id="erg-chebbi-dunes" label="THE LANDSCAPE" title="Erg Chebbi Dunes: The Golden Heart of Merzouga">
<p className="mt-5 text-[17px] leading-8 text-slate-700">You do not need to be an expert photographer to enjoy Erg Chebbi. The sand changes color through the day, from soft yellow to deep orange, and even a short walk reveals new shapes around every ridge. Wind redraws the surface overnight. Small footprints and lines in the sand may be gone by morning, which makes each visit feel a little different.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Some dunes reach <strong className="font-semibold text-slate-900">roughly 150 metres high</strong>, although heights vary and not every dune is easy or safe to climb. Take your time if you decide to walk uphill. Fine sand gives way under your shoes, so a gentle climb can feel harder than it looks. A lower viewpoint is often just as beautiful, especially close to sunrise or sunset.</p>
<ArticlePhoto name="erg" />
<p className="mt-5 text-[17px] leading-8 text-slate-700">The best part of the dunes is not always the biggest one. It might be the little hollow where the wind goes quiet, or the moment you look back and see the camp far below. If you take pictures, remember to put your camera away for a few minutes. The stillness is a big part of the experience. For more desert travel ideas, see our <Link href="/erfoud-sahara-tours-4x4-desert-vehicles/" className="font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-800">Erfoud and Sahara excursion guide</Link>.</p>
</ArticleSection>;
}
