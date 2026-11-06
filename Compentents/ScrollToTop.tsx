/** A no-JavaScript scroll-to-top link. It works with a keyboard too. */
export default function ScrollToTop() {
  return (
    <a
      href="#top"
      aria-label="Scroll to top"
      title="Back to top"
      className="scroll-to-top fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-700 text-white shadow-lg transition-[background-color,transform,opacity] duration-300 hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 sm:bottom-8 sm:right-8"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </a>
  );
}
