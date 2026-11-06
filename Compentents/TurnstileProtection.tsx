"use client";

import Script from "next/script";

export default function TurnstileProtection() {
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <div className="mt-5">
        <div
          className="cf-turnstile"
          data-sitekey={siteKey}
          data-theme="light"
          data-size="flexible"
        />
      </div>
    </>
  );
}