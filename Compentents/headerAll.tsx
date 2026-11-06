"use client";

import { usePathname } from "next/navigation";
import HeaderMain from "./header";

/**
 * One persistent header for every route. The header changes colors/layout
 * based on the pathname without unmounting and remounting a different
 * component when visitors move between the homepage and a tour page.
 */
export default function HeaderAll() {
  const pathname = usePathname() || "/";
  return <HeaderMain pathname={pathname} />;
}
