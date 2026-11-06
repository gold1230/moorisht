import { SparklesIcon } from "@heroicons/react/24/solid";

interface TourHighlightsProps {
  title?: string;
  highlights: string[];
}

export default function TourHighlights({
  title = "The Highlights of 3 Days tour from Marrakech to Fes:",
  highlights,
}: TourHighlightsProps) {
  return (
    <div className="w-full  rounded-2xl border border-slate-200 bg-amber-50/30 p-6">

      {/* Title */}
      <h2 className="mb-5 text-2xl font-bold leading-tight  md:text-3xl">
        {title}
      </h2>

      {/* Highlights */}
      <ul className="space-y-3 md:space-y-4">
        {highlights.map((highlight, index) => (
          <li
            key={`${highlight}-${index}`}
            className="flex items-center gap-3"
          >
            {/* Icon */}
            <span
              className="
                flex
                h-7
                w-7
               shrink-0
                items-center
                justify-center
                rounded-full
                bg-orange-50
              "
            >
              <SparklesIcon
                className="size-4 text-orange-700"
                aria-hidden="true"
              />
            </span>

            {/* Text */}
            <span className="text-base leading-7 text-slate-600 md:text-md">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
}