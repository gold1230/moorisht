import {
  SunIcon,
  CameraIcon,
   ShieldCheckIcon,
  BeakerIcon,
  BackwardIcon,
} from "@heroicons/react/24/solid";

interface Item {
  text: string;
  icon?: React.ElementType;
}

interface WhatToBringProps {
  items?: Item[];
  description?: string;
}

const defaultItems: Item[] = [
  {
    text: "Comfortable walking shoes",
    icon: ShieldCheckIcon,
  },
  {
    text: "Sunscreen and sunglasses",
    icon: SunIcon,
  },
  {
    text: "Hat or cap",
    icon: SunIcon,
  },
  {
    text: "Camera or smartphone",
    icon: CameraIcon,
  },
  {
    text: "Personal medication",
    icon: BeakerIcon,
  },
  {
    text: "Light jacket for cool evenings",
    icon: BackwardIcon,
  },
];

export default function WhatToBring({
  items = defaultItems, description
}: WhatToBringProps) {
  return (
    <div
     
    >
      {/* Card */}
      <div
        className="
          rounded-xl
          border
          border-slate-200
          bg-white
          p-6
          
        "
      >
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            What should I bring with me for this tour?
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-700">
            {description}
          </p>
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.text}-${index}`}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-lg
                  bg-orange-50/50
                  px-4
                  py-3
                "
              >
                {/* Icon */}
                {Icon && (
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-100
                    "
                  >
                    <Icon
                      className="h-5 w-5 text-orange-700"
                      aria-hidden="true"
                    />
                  </span>
                )}

                {/* Text */}
                <span className="text-sm font-medium text-slate-600">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}