"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  MapPinIcon,
  SparklesIcon,
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

const CARD_WIDTH = 360;
const CARD_HEIGHT = 245;
const EDGE_SPACE = 14;
const GAP = 12;

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

  const calculatePosition = (element: HTMLElement) => {
    clearCloseTimer();

    const rect = element.getBoundingClientRect();

    let left = rect.left + rect.width / 2 - CARD_WIDTH / 2;

    if (left < EDGE_SPACE) {
      left = EDGE_SPACE;
    }

    if (left + CARD_WIDTH > window.innerWidth - EDGE_SPACE) {
      left = window.innerWidth - CARD_WIDTH - EDGE_SPACE;
    }

    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    let top: number;

    if (spaceAbove >= CARD_HEIGHT + GAP || spaceAbove > spaceBelow) {
      top = rect.top - CARD_HEIGHT - GAP;
    } else {
      top = rect.bottom + GAP;
    }

    if (top < EDGE_SPACE) {
      top = EDGE_SPACE;
    }

    if (top + CARD_HEIGHT > window.innerHeight - EDGE_SPACE) {
      top = window.innerHeight - CARD_HEIGHT - EDGE_SPACE;
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
    calculatePosition(event.currentTarget);
  };

  const handleFocus = (
    event: FocusEvent<HTMLAnchorElement>
  ) => {
    calculatePosition(event.currentTarget);
  };

  const scheduleClose = () => {
    clearCloseTimer();

    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 140);
  };

  return (
    <span
      className="relative inline"
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      {/* Text link */}
      <Link
        href={href}
        onMouseEnter={handleMouseEnter}
        onFocus={handleFocus}
        onBlur={scheduleClose}
        aria-expanded={open}
        className="
          group/place
          relative inline-flex items-center
          font-semibold text-amber-700
          transition-colors duration-200
          hover:text-amber-800
          focus:outline-none
          focus-visible:rounded
          focus-visible:ring-2
          focus-visible:ring-amber-500
          focus-visible:ring-offset-2
        "
      >
        <span
          className="
            bg-[linear-gradient(transparent_72%,rgba(245,158,11,0.25)_0)]
            bg-[length:100%_100%]
            transition-all duration-300
            group-hover/place:bg-[linear-gradient(transparent_58%,rgba(245,158,11,0.32)_0)]
          "
        >
          {children}
        </span>

        <ArrowUpRightIcon
          className="
            ml-0.5 h-3.5 w-3.5
            translate-y-[-1px]
            opacity-60
            transition
            group-hover/place:-translate-y-1
            group-hover/place:translate-x-0.5
            group-hover/place:opacity-100
          "
          aria-hidden="true"
        />
      </Link>

      {/* Hover popup */}
      {open && (
        <span
          role="dialog"
          aria-label={`Discover ${title}`}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          className="
            fixed z-[1000]
            block w-[360px]
            overflow-hidden
            rounded-[22px]
            border border-white/70
            bg-white/95
            shadow-[0_24px_70px_-20px_rgba(15,23,42,0.45)]
            ring-1 ring-slate-900/5
            backdrop-blur-xl
          "
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          <span className="grid grid-cols-[135px_1fr]">
            {/* Left image */}
            <Link
              href={href}
              className="group/image relative block min-h-[245px] overflow-hidden bg-slate-100"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="135px"
                className="
                  object-cover
                  transition duration-500
                  group-hover/image:scale-110
                "
              />

              <span className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-black/5" />

              <span
                className="
                
                  absolute bottom-3 left-3 right-3
                  rounded-xl
                  border border-white/30
                  bg-black/30
                  px-2 py-2
                  text-center
                  text-[12px] font-semibold
                  uppercase tracking-[0.12em]
                  text-white
                  backdrop-blur-md
                "
              >
                Explore
              </span>
            </Link>

            {/* Right content */}
            <span className="flex min-h-[245px] flex-col p-4">
              <span className="flex items-center justify-between gap-3">
                <span
                  className="
                    inline-flex items-center gap-1.5
                    rounded-full bg-amber-50
                    px-2.5 py-1
                    text-[11px] font-bold
                    uppercase tracking-[0.08em]
                    text-amber-700
                  "
                >
                  <MapPinIcon
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                  Morocco
                </span>

                <SparklesIcon
                  className="h-4 w-4 text-amber-700"
                  aria-hidden="true"
                />
              </span>

              <span
                className="
                  mt-3 block
                  text-xl font-bold
                  leading-6 text-slate-900
                "
              >
                {title}
              </span>

              <span
                className="
                  mt-2 block
                  line-clamp-4
                  text-sm leading-6
                  text-slate-600
                "
              >
                {description}
              </span>

              <span className="mt-auto pt-4">
                <Link
                  href={href}
                  className="
                    inline-flex w-full
                    items-center justify-center gap-2
                    rounded-xl
                    border border-amber-200
                    bg-amber-50
                    px-4 py-2.5
                    text-sm font-bold
                    text-amber-800
                    transition
                    hover:border-amber-300
                    hover:bg-amber-800
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-amber-500
                    focus-visible:ring-offset-2
                  "
                >
                  Discover {title}
                  <ArrowUpRightIcon
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
              </span>
            </span>
          </span>
        </span>
      )}
    </span>
  );
}
