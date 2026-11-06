import { SOCIAL_PROFILES } from "@/lib/socialProfiles";

type SocialLinksProps = {
  variant?: "footer" | "contact";
};

// Server component: accessible links without extra client-side JavaScript.
export default function SocialLinks({ variant = "footer" }: SocialLinksProps) {
  const isFooter = variant === "footer";

  return (
    <nav aria-label="Official Moorish Tour social media" className={isFooter ? "mt-6" : "mx-auto max-w-7xl px-6 pb-10 sm:px-8 lg:px-10"}>
      <h2 className={isFooter ? "text-base font-semibold text-white" : "text-xl font-bold text-slate-900"}>
        Follow Moorish Tour
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {SOCIAL_PROFILES.map(({ name, url }) => (
          <li key={url}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`Moorish Tour on ${name} (opens in new tab)`}
              className={isFooter
                ? "inline-flex min-h-10 items-center rounded-lg border border-white/20 px-3 py-2 text-sm text-gray-200 transition-colors hover:border-amber-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                : "inline-flex min-h-10 items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-amber-600 hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              }
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
