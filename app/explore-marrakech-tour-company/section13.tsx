import { SectionFrame, CompareTable } from "./ArticleElements";

import ArticlePhoto from "./ArticlePhoto";
import { tables } from "./tables";

export default function Section13(){return <SectionFrame id="marrakech-private-vs-small-group-tours" index={13} label="MAKE IT YOUR OWN" title="Private Marrakech Tours or Shared Group Tours?">
<p className="mt-5 text-[17px] leading-8 text-slate-700">A private tour gives you more control over the day. It can be useful when you travel with children, love photography or simply prefer a quieter experience. You can often agree on extra breaks and focus on the places you find most interesting, within the available driving time and any booking restrictions. You also know who is traveling with you.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Shared tours are a different style. They can be sociable and may spread some transport costs across a larger group, but they normally follow a more fixed schedule. Ask for the number of participants, vehicle arrangement, pickup details and accommodation setup before confirming. A small group is not automatically the same as a private tour.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Neither choice is right for everyone. The best Marrakech tour company will explain the difference without pressuring you toward the more expensive option. A couple looking for privacy, a solo traveler seeking company and a large family with young children may reasonably choose very different packages.</p>
<ArticlePhoto name="group"/>
<CompareTable headings={tables.travelstyles.headings} rows={tables.travelstyles.rows}/>
</SectionFrame>;}
