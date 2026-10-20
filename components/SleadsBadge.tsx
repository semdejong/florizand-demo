/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed bottom-[5.35rem] left-3 z-30 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-black/10 bg-white/85 px-3 py-1.5 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-black min-[1100px]:bottom-4 min-[1100px]:left-4 sm:text-xs print:hidden"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
