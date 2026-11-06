import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { securityPolicy, strictCspEnabled } from "./lib/securityPolicy";

/**
 * Optional nonce-based CSP for production security-hardening.
 * IMPORTANT: must use MOORISH_STRICT_CSP=1 for both next build and next start.
 * Strict mode forces dynamic SSR via app/layout.tsx and affects site speed.
 * Default mode retains static page generation and uses next.config.ts CSP.
 */
export function proxy(request: NextRequest) {
  if (!strictCspEnabled) return NextResponse.next();

  const nonce = randomBytes(16).toString("base64");
  const csp = securityPolicy(nonce, process.env.NODE_ENV === "development");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api/|_next/static/|_next/image/|favicon.ico|robots.txt|sitemap.xml|llms.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
