import {
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface TourInclusionsProps {
  title: string;
  included: string[];
  notIncluded: string[];
}

export default function TourInclusions({title,
  included,
  notIncluded,
}: TourInclusionsProps) {
  return (
    <div>
    <h2 className="mb-8 text-3xl font-bold text-slate-900">
        What&apos;s Included in the {title}:
      </h2>
    
  
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* What's Included */}
      <div
        className="
          rounded-xl
          border
          border-slate-200
          bg-amber-50/30
          p-6
          
        "
      >
        <h3 className="text-lg font-bold text-slate-900">
          What&apos;s Included
        </h3>

        <ul className="mt-5 space-y-3">
          {included.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-start gap-3"
            >
              <CheckIcon
                className="
                  mt-0.5
                  h-4
                  w-4
                  shrink-0
                  text-green-600
                "
                aria-hidden="true"
              />

              <span className="text-sm leading-5 text-slate-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>


      {/* What's Not Included */}
      <div
        className="
          rounded-xl
          border
          border-slate-200
          bg-amber-50/30
          p-6
          
        "
      >
        <h3 className="text-lg font-bold text-slate-900">
          What&apos;s Not Included
        </h3>

        <ul className="mt-5 space-y-3">
          {notIncluded.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-start gap-3"
            >
              <XMarkIcon
                className="
                  mt-0.5
                  h-4
                  w-4
                  shrink-0
                  text-red-500
                "
                aria-hidden="true"
              />

              <span className="text-sm leading-5 text-slate-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </section>
      </div>
  );
}
