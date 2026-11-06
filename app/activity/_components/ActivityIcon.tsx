import type { SVGProps, ReactNode } from "react";

export type ActivityIconName =
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-left"
  | "map-pin"
  | "clock"
  | "sun"
  | "shield"
  | "check"
  | "sparkle"
  | "wind"
  | "camera"
  | "mountain"
  | "users"
  | "calendar"
  | "leaf"
  | "help"
  | "route";

type Props = Omit<SVGProps<SVGSVGElement>, "name"> & { name: ActivityIconName };

export function ActivityIcon({ name, className, ...rest }: Props) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<ActivityIconName, ReactNode> = {
    "arrow-right": <><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></>,
    "arrow-up-right": <><path d="M6 18 18 6"/><path d="M8 6h10v10"/></>,
    "arrow-left": <><path d="M20 12H4"/><path d="m11 19-7-7 7-7"/></>,
    "map-pin": <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    "clock": <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    "sun": <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    "shield": <><path d="M12 22s8-4.2 8-10V5l-8-3-8 3v7c0 5.8 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    "check": <path d="m5 12 4 4L19 6"/>,
    "sparkle": <><path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z"/></>,
    "wind": <><path d="M3 7h12a3 3 0 1 0-3-3M2 12h18a2 2 0 1 1-2 2M3 17h9a3 3 0 1 1-3 3"/></>,
    "camera": <><path d="M3 7h4l2-3h6l2 3h4v13H3V7Z"/><circle cx="12" cy="13" r="4"/></>,
    "mountain": <><path d="m2 20 7-13 5 9 3-5 5 9H2Z"/><path d="m7 11 2 2 2-2"/></>,
    "users": <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2H3Z"/><path d="M17 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1h-4"/></>,
    "calendar": <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 10h18"/></>,
    "leaf": <><path d="M21 3c-12 0-17 6-17 12a6 6 0 0 0 6 6c6 0 12-5 11-18Z"/><path d="M4 20c4-6 9-10 15-13"/></>,
    "help": <><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 1 1 4.5 2.3c-1.3.9-2 1.4-2 3.2"/><path d="M12 18h.01"/></>,
    "route": <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h5a5 5 0 0 0 0-10h-2a5 5 0 0 0-5 5"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...shared} {...rest}>
      {paths[name]}
    </svg>
  );
}
