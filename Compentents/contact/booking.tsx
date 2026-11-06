"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import BookingForm from "./ContactFormBooking";

type BookingPopupProps = {
  startPrice: number;
  currency?: string;
  priceUnit?: string;
  tourTitle?: string;
  variant?: "card" | "button";
  buttonLabel?: string;
};

export default function BookingPopup({
  startPrice,
  currency = "€",
  priceUnit = "per person",
  tourTitle,
  variant = "card",
  buttonLabel = "Check Availability",
}: BookingPopupProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Mount
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | ESC + Lock Background Scroll
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!open) {
      return;
    }

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  /*
  |--------------------------------------------------------------------------
  | Popup
  |--------------------------------------------------------------------------
  */

  const popup =
    open && mounted
      ? createPortal(
          <div
            className="
              fixed
              inset-0
              z-[2147483647]

              flex
              items-center
              justify-center

              bg-black/60
              p-3
              backdrop-blur-[3px]

              sm:p-5
            "
            onMouseDown={() =>
              setOpen(false)
            }
          >
            {/* ==================================
                MODAL
            ================================== */}

            <div
              role="dialog"
              aria-modal="true"
              aria-label="Book your Morocco tour"
              onMouseDown={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                z-[2147483647]

                flex
                w-full
                max-w-[490px]
                flex-col

                overflow-hidden
                rounded-2xl
                border
                border-white/20
                bg-white

                shadow-[0_25px_80px_rgba(0,0,0,0.35)]

                max-h-[calc(100dvh-24px)]

                sm:max-h-[calc(100dvh-40px)]
              "
            >
              {/* ==================================
                  HEADER
              ================================== */}

              <div
                className="
                  relative
                  z-50

                  flex
                  shrink-0
                  items-center
                  justify-between
                  gap-4

                  border-b
                  border-slate-100
                  bg-white

                  px-5
                  py-3
                "
              >
                {/* TITLE + PRICE */}

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#b45309]
                    "
                  >
                    Tour Booking
                  </p>

                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      From
                    </span>

                    <span
                      className="
                        text-lg
                        font-bold
                        text-[#102043]
                      "
                    >
                      {currency}
                      {startPrice}
                    </span>

                    <span
                      className="
                        text-xs
                        text-slate-500
                      "
                    >
                      {priceUnit}
                    </span>
                  </div>
                </div>

                {/* ==================================
                    CLOSE BUTTON
                ================================== */}

                <button
                  type="button"
                  onClick={() =>
                    setOpen(false)
                  }
                  aria-label="Close booking form"
                  title="Close"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-slate-200
                    bg-white

                    text-slate-500

                    shadow-sm

                    transition-all
                    duration-200

                    hover:rotate-90
                    hover:border-orange-300
                    hover:bg-orange-50
                    hover:text-[#b45309]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-300
                  "
                >
                  <XMarkIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* ==================================
                  SCROLLABLE BOOKING FORM
              ================================== */}

              <div
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain

                  bg-white
                  p-3

                  sm:p-4

                  [scrollbar-color:#cbd5e1_transparent]
                  [scrollbar-width:thin]
                "
              >
                <BookingForm
                  startPrice={startPrice}
                  currency={currency}
                  priceUnit={priceUnit}
                  tourTitle={tourTitle}
                />
              </div>

              {/* ==================================
                  MOBILE CLOSE BUTTON
              ================================== */}

              <div
                className="
                  shrink-0
                  border-t
                  border-slate-100
                  bg-white
                  p-3
                  sm:hidden
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    flex
                    h-11
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-lg
                    border
                    border-slate-200
                    bg-white

                    text-sm
                    font-bold
                    text-[#102043]

                    transition

                    hover:border-orange-300
                    hover:bg-orange-50
                    hover:text-[#b45309]
                  "
                >
                  <XMarkIcon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  Close Booking Form
                </button>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {/* ==================================
          SMALL BOOKING CARD
      ================================== */}

      {variant === "button" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber-700 px-6 font-semibold text-white shadow-sm transition hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
          aria-label={`${buttonLabel}${tourTitle ? ` for ${tourTitle}` : ""}`}
        >
          {buttonLabel}
        </button>
      ) : (
      <div
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* PRICE */}

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-slate-500
              "
            >
              Starting From
            </p>

            <div
              className="
                mt-1
                flex
                items-end
                gap-1.5
              "
            >
              <span
                className="
                  text-3xl
                  font-bold
                  leading-none
                  text-[#b45309]
                "
              >
                {currency}
                {startPrice}
              </span>

              <span
                className="
                  pb-0.5
                  text-xs
                  text-slate-500
                "
              >
                {priceUnit}
              </span>
            </div>
          </div>

          {/* OPEN POPUP */}

          <button
            type="button"
            onClick={() =>
              setOpen(true)
            }
            className="
              flex
              h-11
              shrink-0
              items-center
              justify-center

              rounded-lg
              bg-[#b45309]

              px-5

              text-sm
              font-bold
              text-white

              shadow-sm

              transition-all
              duration-200

              hover:-translate-y-0.5
              hover:bg-[#9c4700]
              hover:shadow-md
            "
          >
            Check Availability
          </button>
        </div>

        <p
          className="
            mt-3
            text-xs
            leading-5
            text-slate-500
          "
        >
          Final price depends on travel dates,
          group size, accommodation and selected
          options.
        </p>
      </div>
      )}

      {/* POPUP PORTAL */}

      {popup}
    </>
  );
}