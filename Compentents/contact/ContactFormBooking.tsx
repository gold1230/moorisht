"use client";

import { useState } from "react";

type BookingFormProps = {
  startPrice: number;
  currency?: string;
  priceUnit?: string;
  tourTitle?: string;
};

export default function BookingForm({
  startPrice,
  currency = "€",
  priceUnit = "per person",
  tourTitle,
}: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  /*
  |--------------------------------------------------------------------------
  | Submit Booking
  |--------------------------------------------------------------------------
  */

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formElement =
      event.currentTarget;

    setIsSubmitting(true);
    setError("");

    try {
      const formData =
        new FormData(formElement);

      /*
      |--------------------------------------------------------------------------
      | Booking identification
      |--------------------------------------------------------------------------
      */

      formData.append(
        "formType",
        "booking"
      );

      // Identify the chosen itinerary in the enquiry sent to Moorish Tour.
      if (tourTitle) formData.set("tourName", tourTitle);

      /*
      |--------------------------------------------------------------------------
      | Tour Price
      |--------------------------------------------------------------------------
      */

      formData.append(
        "startPrice",
        String(startPrice)
      );

      formData.append(
        "currency",
        currency
      );

      formData.append(
        "priceUnit",
        priceUnit
      );

      /*
      |--------------------------------------------------------------------------
      | Send Request
      |--------------------------------------------------------------------------
      */

      const response = await fetch(
        "/api/book-now",
        {
          method: "POST",
          body: formData,
        }
      );

      /*
      |--------------------------------------------------------------------------
      | Read response safely
      |--------------------------------------------------------------------------
      */

      const responseText =
        await response.text();

      let data: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        data = responseText
          ? JSON.parse(responseText)
          : {};
      } catch {
        console.error(
          "Server returned non-JSON response:",
          responseText
        );

        throw new Error(
          "The server returned an unexpected response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Unable to send booking request."
        );
      }

      /*
      |--------------------------------------------------------------------------
      | Success
      |--------------------------------------------------------------------------
      */

      formElement.reset();

      setSuccess(true);
    } catch (error) {
      console.error(
        "Booking form error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to send your booking request."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Success Screen
  |--------------------------------------------------------------------------
  */

  if (success) {
    return (
      <div
        className="
          relative
          w-full
          max-w-[435px]
          rounded-[20px]
          border
          border-gray-200
          bg-white
          p-5
          shadow-sm
          sm:p-6
        "
      >
        {/* CLOSE X */}

        <button
          type="button"
          onClick={() => {
            setSuccess(false);
            setError("");
          }}
          aria-label="Close success message"
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            text-xl
            font-bold
            leading-none
            text-gray-500
            shadow-sm
            transition
            hover:border-orange-200
            hover:bg-orange-50
            hover:text-[#b45309]
          "
        >
          ×
        </button>

        <div
          className="
            rounded-2xl
            border
            border-green-100
            bg-green-50
            p-5
          "
        >
          {/* ICON */}

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-green-100
              text-xl
              font-bold
              text-green-700
            "
          >
            ✓
          </div>

          <h2
            className="
              mt-4
              text-2xl
              font-bold
              text-[#102043]
            "
          >
            Request Received
          </h2>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-gray-600
            "
          >
            Thank you for your booking request.
            Our Morocco travel team will check
            availability and contact you as soon
            as possible.
          </p>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-gray-500
            "
          >
            You do not need to submit the form
            again.
          </p>

          <button
            type="button"
            onClick={() => {
              setSuccess(false);
              setError("");
            }}
            className="
              mt-5
              flex
              h-10
              w-full
              items-center
              justify-center
              rounded-lg
              bg-[#b45309]
              px-6
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#9c4700]
            "
          >
            Back to Booking Form
          </button>
        </div>
      </div>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Booking Form
  |--------------------------------------------------------------------------
  */

  return (
    <div
      className="
        w-full
        max-w-[435px]
        overflow-hidden
        rounded-[20px]
        border
        border-gray-200
        bg-white
        shadow-sm

        lg:sticky
        lg:top-24
        lg:flex
        lg:max-h-[calc(100dvh-7rem)]
        lg:flex-col
      "
    >
      {/* ================================
          HEADER
      ================================= */}

      <div
        className="
          shrink-0
          border-b
          border-gray-100
          bg-white
          px-5
          py-3
          sm:px-6
        "
      >
        <div
          className="
            flex
            items-end
            justify-between
           
          "
        >
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
              Reserve Your Tour
            </p>

            <h2
              className="
                text-[28px]
                font-bold
                
                text-[#102043]
              "
            >
              Book Now
            </h2>
          </div>

          {/* PRICE */}

          <div
            className="
              shrink-0
              text-right
            "
          >
            <p
              className="
                text-xs
                font-medium
                text-gray-500
              "
            >
              From
            </p>

            <p
              className="
                mt-0.5
                text-[27px]
                font-bold
                leading-none
                text-[#b45309]
              "
            >
              {currency}
              {startPrice}
            </p>

            <p
              className="
                mt-1
                text-[11px]
                text-gray-500
              "
            >
              {priceUnit}
            </p>
          </div>
        </div>

        <p
          className="
            mt-1
            text-[13px]
            leading-5
            text-gray-500
          "
        >
          {tourTitle ? `Enquiry for ${tourTitle}. ` : ""}
          Check availability and receive the
          final price for your trip.
        </p>
      </div>

      {/* ================================
          SCROLLABLE FORM AREA
      ================================= */}

      <form
        onSubmit={handleSubmit}
        className="
          space-y-4
          px-5
          py-3
          sm:px-6

          lg:min-h-0
          lg:flex-1
          lg:overflow-y-auto
          lg:overscroll-contain

          [scrollbar-color:#cbd5e1_transparent]
          scrollbar-thin
        "
      >
        {/* ================================
            HONEYPOT
        ================================= */}

        <div
          className="
            absolute
            -left-[9999px]
            h-px
            w-px
            overflow-hidden
          "
          aria-hidden="true"
        >
          <label htmlFor="website">
            Website
          </label>

          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* ================================
            NAME
        ================================= */}

        <div>
          <label
            htmlFor="name"
            className="
              mb-1.5
              block
              text-[15px]
              font-bold
              text-[#102043]
            "
          >
            Your Name{" "}
            <span className="text-red-500">
              *
            </span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            className="
              h-10
              w-full
              rounded-lg
              border
              border-slate-300
              bg-white
              px-4
              
              text-[15px]
              text-slate-900
              outline-none
              transition
              placeholder:text-gray-600
              focus:border-[#ea7600]
              focus:ring-1
              focus:ring-[#ea7600]
            "
          />
        </div>

        {/* ================================
            EMAIL + PHONE
        ================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-1
            sm:grid-cols-2
          "
        >
          {/* EMAIL */}

          <div>
            <label
              htmlFor="email"
              className="
                mb-1.5
                block
                text-[15px]
                font-bold
                text-[#102043]
              "
            >
              Email{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                text-[14px]
                text-slate-900
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-[#ea7600]
                focus:ring-1
                focus:ring-[#ea7600]
              "
            />
          </div>

          {/* PHONE */}

          <div>
            <label
              htmlFor="phone"
              className="
                mb-1.5
                block
                text-[15px]
                font-bold
                text-[#102043]
              "
            >
              WhatsApp{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+1 234..."
              className="
                h-10
                w-full
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                text-[14px]
                text-slate-900
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-[#ea7600]
                focus:ring-1
                focus:ring-[#ea7600]
              "
            />
          </div>
        </div>

        {/* ================================
            DATE + GUESTS
        ================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
          "
        >
          {/* TRAVEL DATE */}

          <div>
            <label
              htmlFor="travelDate"
              className="
                mb-1.5
                block
                text-[15px]
                font-bold
                text-[#102043]
              "
            >
              Travel Date{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <input
              id="travelDate"
              name="travelDate"
              type="date"
              required
              className="
                h-10
                w-full
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                text-[13px]
                text-slate-700
                outline-none
                transition
                focus:border-[#ea7600]
                focus:ring-1
                focus:ring-[#ea7600]
              "
            />
          </div>

          {/* GUESTS */}

          <div>
            <label
              htmlFor="guests"
              className="
                mb-1.5
                block
                text-[15px]
                font-bold
                text-[#102043]
              "
            >
              Guests{" "}
              <span className="text-red-500">
                *
              </span>
            </label>

            <select
              id="guests"
              name="guests"
              required
              defaultValue=""
              className="
                h-10
                w-full
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                text-[14px]
                text-slate-700
                outline-none
                transition
                focus:border-[#ea7600]
                focus:ring-1
                focus:ring-[#ea7600]
              "
            >
              <option
                value=""
                disabled
              >
                Select
              </option>

              <option value="1">
                1 Guest
              </option>

              <option value="2">
                2 Guests
              </option>

              <option value="3">
                3 Guests
              </option>

              <option value="4">
                4 Guests
              </option>

              <option value="5">
                5 Guests
              </option>

              <option value="6">
                6 Guests
              </option>

              <option value="7">
                7 Guests
              </option>

              <option value="8">
                8 Guests
              </option>

              <option value="9">
                9 Guests
              </option>

              <option value="10">
                10 Guests
              </option>

              <option value="10+">
                10+ Guests
              </option>
            </select>
          </div>
        </div>

        {/* ================================
            CITY + ACCOMMODATION
        ================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
          "
        >
          {/* STARTING CITY */}

          <div>
            <label
              htmlFor="pickupCity"
              className="
                mb-1.5
                block
                text-[15px]
                font-bold
                text-[#102043]
              "
            >
              Starting City
            </label>

            <select
              id="pickupCity"
              name="pickupCity"
              defaultValue=""
              className="
                h-10
                w-full
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                text-[14px]
                text-slate-700
                outline-none
                transition
                focus:border-[#ea7600]
                focus:ring-1
                focus:ring-[#ea7600]
              "
            >
              <option value="">
                Select city
              </option>

              <option value="Marrakech">
                Marrakech
              </option>

              <option value="Casablanca">
                Casablanca
              </option>

              <option value="Fes">
                Fes
              </option>

              <option value="Tangier">
                Tangier
              </option>

              <option value="Rabat">
                Rabat
              </option>

              <option value="Errachidia">
                Errachidia
              </option>

              <option value="Merzouga">
                Merzouga
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* ACCOMMODATION */}

          <div>
            <label
              htmlFor="accommodation"
              className="
                mb-1.5
                block
                text-[15px]
                font-bold
                text-[#102043]
              "
            >
              Accommodation
            </label>

            <select
              id="accommodation"
              name="accommodation"
              defaultValue=""
              className="
                h-10
                w-full
                rounded-lg
                border
                border-slate-300
                bg-white
                px-3
                text-[14px]
                text-slate-700
                outline-none
                transition
                focus:border-[#ea7600]
                focus:ring-1
                focus:ring-[#ea7600]
              "
            >
              <option value="">
                No preference
              </option>

              <option value="Standard">
                Standard
              </option>

              <option value="Comfort">
                Comfort
              </option>

              <option value="Luxury">
                Luxury
              </option>

              <option value="Mixed">
                Mixed
              </option>
            </select>
          </div>
        </div>

        {/* ================================
            MESSAGE
        ================================= */}

        <div>
          <label
            htmlFor="message"
            className="
              mb-1.5
              block
              text-[15px]
              font-bold
              text-[#102043]
            "
          >
            Additional Information
          </label>

          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Children, hotel preference, pickup, dietary needs or special requests..."
            className="
              min-h-[90px]
              w-full
              resize-y
              rounded-lg
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-[14px]
              leading-6
              text-slate-900
              outline-none
              transition
              placeholder:text-gray-600
              focus:border-[#ea7600]
              focus:ring-1
              focus:ring-[#ea7600]
            "
          />
        </div>

        {/* ================================
            ERROR
        ================================= */}

        {error && (
          <div
            className="
              rounded-lg
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-sm
              leading-5
              text-red-700
            "
          >
            {error}
          </div>
        )}

        {/* ================================
            SUBMIT
        ================================= */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            flex
            h-10
            w-full
            items-center
            justify-center
            rounded-lg
            bg-[#b45309]
            px-6
            text-[16px]
            font-bold
            text-white
            transition
            hover:bg-[#9c4700]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isSubmitting
            ? "Checking..."
            : "Check Availability"}
        </button>

        {/* ================================
            PRICE INFO
        ================================= */}

        <div
          className="
            rounded-xl
            bg-[#fffaf3]
            px-4
            py-2.5
            text-center
          "
        >
          <p
            className="
              text-[12px]
              leading-5
              text-gray-600
            "
          >
            Starting from{" "}
            <strong
              className="
                font-bold
                text-[#102043]
              "
            >
              {currency}
              {startPrice}
            </strong>{" "}
            {priceUnit}. Final price depends
            on dates, group size and selected
            options.
          </p>
        </div>

        <p
          className="
            text-center
            text-[11px]
            leading-4
            text-gray-600
          "
        >
          No payment is required when sending
          this request.
        </p>
      </form>
    </div>
  );
}