/**
 * Lightweight, keyboard-accessible contact menu.
 * Native <details> needs no client hydration, event listeners, or portals.
 * Update the WhatsApp destination to your verified business number when available.
 */
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function FloatingContactButtons() {
  return (
    <details className="group fixed bottom-6 left-5 z-50 sm:bottom-8 sm:left-7">
      <summary
        className="flex h-14 w-14 cursor-pointer list-none items-center justify-center rounded-full bg-amber-700 text-white shadow-lg transition-colors hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 [&::-webkit-details-marker]:hidden"
        aria-label="Show contact options"
      >
        <ChatBubbleLeftRightIcon className="h-7 w-7" aria-hidden="true" />
        <span className="sr-only">Contact Moorish Tour</span>
      </summary>
      <div className="absolute bottom-17 left-0 flex w-max max-w-[calc(100vw-2.5rem)] flex-col gap-2 rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
        <a
          href="https://wa.me/212628812520"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-amber-700"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-700" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="mailto:moorishtour@gmail.com"
          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-amber-700"
        >
          <EnvelopeIcon className="h-5 w-5 text-amber-700" aria-hidden="true" />
          Email Moorish Tour
        </a>
      </div>
    </details>
  );
}
