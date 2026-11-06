/** Canonical public origin: structured-data links must be absolute on every deployment. */
export const SITE_URL = "https://moorishtour.com";

/** Return an absolute public URL for a page, even without a site URL environment variable. */
export function absoluteSiteUrl(path: string): string {
  const url = new URL(path, `${SITE_URL}/`);
  if (url.origin !== SITE_URL) {
    throw new Error("External URLs are not allowed in Moorish Tour breadcrumb paths");
  }
  if (!url.pathname.endsWith("/") && !/\.[a-z0-9]+$/i.test(url.pathname)) {
    url.pathname += "/";
  }
  return url.toString();
}
