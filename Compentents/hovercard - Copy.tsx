"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
} from "react";

interface HoverCardProps {
  href: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  children: ReactNode;
}

const CARD_WIDTH = 330;
const CARD_HEIGHT = 340;
const VIEWPORT_MARGIN = 14;
const GAP = 10;

export default function HoverCard({
  href,
  title,
  description,
  image,
  children,
}: HoverCardProps) {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openCard = (
    element: HTMLElement
  ) => {
    clearCloseTimer();

    const rect = element.getBoundingClientRect();

    /*
      Center the card around the hovered place name.
    */
    let left =
      rect.left +
      rect.width / 2 -
      CARD_WIDTH / 2;

    /*
      Keep card inside browser on the right.
    */
    if (
      left + CARD_WIDTH >
      window.innerWidth - VIEWPORT_MARGIN
    ) {
      left =
        window.innerWidth -
        CARD_WIDTH -
        VIEWPORT_MARGIN;
    }

    /*
      Keep card inside browser on the left.
    */
    if (left < VIEWPORT_MARGIN) {
      left = VIEWPORT_MARGIN;
    }

    /*
      Prefer showing above the text.
      If there is not enough space, show below.
    */
    const spaceAbove = rect.top;
    const spaceBelow =
      window.innerHeight - rect.bottom;

    let top: number;

    if (
      spaceAbove >= CARD_HEIGHT + GAP ||
      spaceAbove > spaceBelow
    ) {
      top = Math.max(
        VIEWPORT_MARGIN,
        rect.top - CARD_HEIGHT - GAP
      );
    } else {
      top = Math.min(
        window.innerHeight -
          CARD_HEIGHT -
          VIEWPORT_MARGIN,
        rect.bottom + GAP
      );
    }

    setPosition({
      top,
      left,
    });

    setOpen(true);
  };

  const handleMouseEnter = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    openCard(event.currentTarget);
  };

  const handleFocus = (
    event: FocusEvent<HTMLAnchorElement>
  ) => {
    openCard(event.currentTarget);
  };

  const scheduleClose = () => {
    clearCloseTimer();

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  return (
    <span
      className="relative inline"
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      {/* Place link */}
      <Link
        href={href}
        onMouseEnter={handleMouseEnter}
        onFocus={handleFocus}
        onBlur={scheduleClose}
        aria-expanded={open}
        className="
          relative inline-flex items-center gap-0.5
          font-semibold text-amber-700
          underline decoration-amber-400
          decoration-[1.5px] underline-offset-4
          transition duration-200
          hover:text-amber-800
          hover:decoration-amber-600
          focus:outline-none
          focus-visible:rounded-sm
          focus-visible:ring-2
          focus-visible:ring-amber-500
          focus-visible:ring-offset-2
        "
      >
        {children}
      </Link>

      {/* Hover card */}
      {open && (
        <span
          role="dialog"
          aria-label={`More about ${title}`}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          className="
            fixed z-[1000]
            block w-[330px]
            overflow-hidden rounded-2xl
            border border-amber-100
            bg-white
            shadow-[0_20px_60px_-15px_rgba(15,23,42,0.35)]
            ring-1 ring-black/5
          "
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {/* Image */}
          <Link
            href={href}
            className="group/image relative block h-[180px] overflow-hidden bg-slate-100"
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="330px"
              className="
                object-cover
                transition duration-500
                group-hover/image:scale-105
              "
            />

            {/* Image overlay */}
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

            {/* Small badge */}
            <span
              className="
                absolute left-3 top-3
                inline-flex items-center gap-1.5
                rounded-full
                border border-white/70
                bg-white/90
                px-2.5 py-1
                text-[11px] font-bold
                uppercase tracking-[0.08em]
                text-amber-700
                shadow-sm backdrop-blur
              "
            >
              <MapPinIcon
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
              Morocco
            </span>
          </Link>

          {/* Content */}
          <span className="block p-4">
            <span
              className="
                block text-lg font-bold
                leading-6 text-slate-900
              "
            >
              {title}
            </span>

            <span
              className="
                mt-2 block
                line-clamp-3
                text-sm leading-6
                text-slate-600
              "
            >
              {description}
            </span>

            <span
              className="
                mt-4 flex items-center
                justify-between
                border-t border-slate-100
                pt-3
              "
            >
              <span className="text-xs font-medium text-slate-500">
                Discover this place
              </span>

              <Link
                href={href}
                className="
                  inline-flex items-center
                  gap-1.5 rounded-lg
                  bg-amber-700
                  px-3.5 py-2
                  text-sm font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-amber-800
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-amber-500
                  focus-visible:ring-offset-2
                "
              >
                Explore
                <ArrowRightIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </span>
          </span>
        </span>
      )}
    </span>
  );
}
