import { SectionFrame, Checklist } from "./ArticleElements";
export default function Section22(){
  return <SectionFrame id={"what-to-pack"} label={"PRACTICAL PREPARATION"} title={"What to Pack for a Tour from Spain to Morocco"} index={22}>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Packing for a trip across the Strait is not difficult, but it is smart to think about variety. One journey might take you from a breezy ferry deck to a warm medina, cool mountain evenings and a sandy desert campsite. Light layers are much more useful than a suitcase full of clothing suited to one climate.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">Comfortable shoes are important because historic streets can be uneven. A scarf is useful for sun, wind or visits where more modest clothing feels appropriate. Keep a light jacket available if you travel at night or plan to see the sunrise in the desert. Sun protection, medication and refillable water bottles are everyday essentials.</p>
<p className="mt-5 text-[17px] leading-8 text-slate-700">If you will travel with a group, check baggage space in the vehicle before bringing very large suitcases. Some desert camps use separate transfers, so a small overnight bag can make the final part of the journey much easier.</p>
<Checklist items={["Passport and copies of important bookings", "Comfortable walking shoes and lightweight clothing", "A warm layer for mountains and desert nights", "Sun hat, sunscreen and sunglasses", "Necessary medicines and a small first-aid kit", "Phone charging cable and suitable travel adaptor", "Small overnight bag if staying in a remote desert camp", "Refillable water bottle and a little local cash"]}/>
  </SectionFrame>;
}
