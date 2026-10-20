/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="sleads-badge"
    >
      <span className="sleads-dot" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
