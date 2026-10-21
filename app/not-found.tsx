import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Pagina niet gevonden</p>
        <h1>Deze pagina is er niet</h1>
        <p className="lede">Het adres klopt niet. De rest van de site begint op de homepage.</p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/">
            Naar home
          </Link>
          <Link className="btn btn-ghost" href="/diensten">
            Naar de diensten
          </Link>
        </div>
      </div>
    </section>
  );
}
