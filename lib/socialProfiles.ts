// Official Moorish Tour social profiles. Keep this as the single source of truth.
export const SOCIAL_PROFILES = [
  { name: "Instagram", url: "https://www.instagram.com/moorishtours/" },
  { name: "X (Twitter)", url: "https://x.com/MoorishTours" },
  { name: "Threads", url: "https://www.threads.com/@moorishtours" },
  { name: "Pinterest", url: "https://www.pinterest.com/moorishtour/" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61561111442261" },
] as const;

export const SOCIAL_PROFILE_URLS = SOCIAL_PROFILES.map(({ url }) => url);
