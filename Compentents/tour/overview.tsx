import {
  TruckIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import type { ReactNode, ElementType } from "react";

interface OverviewProps {
  children: ReactNode;
  highlightsOverview?: {
    icon: ElementType;
    title: string;
    subtitle: string;
  }[];
}



const info = [
  {
    icon: TruckIcon,
    text: "Free pickup & drop-off from your hotel/riad",
  },
  {
    icon: ShieldCheckIcon,
    text: "Comfortable A/C transportation",
  },
  {
    icon: CheckBadgeIcon,
    text: "Experienced local driver/guide",
  },
  {
    icon: CheckCircleIcon,
    text: "Authentic Moroccan experiences",
  },
];



export default function Overview({children  , highlightsOverview}: OverviewProps) {    

return(
    <>
   
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
  <div className="lg:col-span-7">
    

    <p className="mt-5 leading-8 text-slate-900">

        {children}
      
    </p>
  </div>

  <div className="lg:col-span-5  flex items-center">
    <div className="rounded-2xl border border-slate-200 bg-amber-50/30 p-6">

      <ul className="space-y-5">

        {info.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.text}
              className="flex items-start gap-3"
            >
              <Icon className="mt-1 h-5 w-5 text-orange-700" />

              <span className="text-sm leading-7 text-slate-700">
                {item.text}
              </span>
            </li>
          );
        })}

      </ul>

    </div>
  </div>

</div>
   <div className="mt-12 grid grid-cols-2 gap-y-8 border-b border-slate-200 pb-5 md:grid-cols-3 lg:grid-cols-5">

  {highlightsOverview?.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className={`
          flex items-start gap-3 px-4
          ${index !== highlightsOverview.length - 1 ? "lg:border-r lg:border-slate-200" : ""}
          ${index === 0 ? "pl-0" : ""}
        `}
      >
        <Icon className="h-8 w-8 shrink-0 text-orange-700" />

        <div>

          <h3 className="font-semibold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {item.subtitle}
          </p>

        </div>

      </div>
    );
  })}

</div> 
    </>
)


}