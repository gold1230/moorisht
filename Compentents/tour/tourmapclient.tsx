"use client";

import dynamic from "next/dynamic";

const TourRouteMap = dynamic(
  () => import("./TourRouteMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-112.5 w-full items-center justify-center rounded-2xl bg-slate-100">
        <span className="text-sm text-slate-500">
          Loading map...
        </span>
      </div>
    ),
  }
);

export default TourRouteMap;