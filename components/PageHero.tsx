import Contour from "@/components/Contour";

export default function PageHero({
  eyebrow,
  title,
  lede,
  index,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  index?: string;
}) {
  return (
    <section className="page-hero">
      <Contour className="page-hero-contour" />
      <div className="container page-hero-grid">
        {index ? (
          <p className="chapter-no">
            <span className="sr-only">Blad </span>
            {index}
          </p>
        ) : null}
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>
      </div>
    </section>
  );
}
