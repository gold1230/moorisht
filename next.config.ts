import type { NextConfig } from "next";
import { enforceTrustedTypes, reportTrustedTypes, securityPolicy, strictCspEnabled, trustedTypesReportOnly } from "./lib/securityPolicy";



const nextConfig: NextConfig = {
  trailingSlash: true,

   compress: true,
   images: {
    formats: ["image/webp"],
    qualities: [50, 60, 70, 75, 80, 90, 95],
  },
  async headers() {
    return [
    // Public assets have stable URLs (not content-hashed), so cache for only
    // one week. Versioned /_next/static chunks keep their immutable Next.js TTL.
    ...["/images/:path*", "/home/:path*", "/tours/:path*", "/blog/:path*", "/locations/:path*", "/plan/:path*"].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
    })),
    {
      source: "/(.*)",
      headers: [
        // A strict CSP comes from the per-request proxy. Using a static nonce
        // here would block the hydration scripts on statically rendered pages.
        ...(!strictCspEnabled ? [{
          key: "Content-Security-Policy",
          value: securityPolicy(undefined, process.env.NODE_ENV === "development"),
        }] : []),
        ...(!enforceTrustedTypes && reportTrustedTypes ? [{
          key: "Content-Security-Policy-Report-Only",
          value: trustedTypesReportOnly,
        }] : []),
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      ],
    }];
  },
};

export default nextConfig;
