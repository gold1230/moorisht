"use client";

import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function MobileReservationButton() {

  const scrollToReservation = () => {
    const section = document.getElementById(
      "reservation-form"
    );

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="
        fixed
        z-3000
        bottom-0
        left-0
        right-0
        
        border-t
        border-slate-200
        bg-white/95
        px-4
        py-2
        shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
        backdrop-blur-md
        md:hidden
      "
    >

      <button
        type="button"
        onClick={scrollToReservation}
        className="
         cursor-pointer
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-amber-700
          px-4
          py-2
          text-base
          font-bold
          text-white
          shadow-md
          transition
          hover:bg-amber-800
          active:scale-[0.98]
        "
      >

        <CalendarDaysIcon className="h-5 w-5" />

        <span>
          Reserve Your Tour
        </span>

      </button>

    </div>
  );
}