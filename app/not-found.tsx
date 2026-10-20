import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Niet op de tekening</p>
        <h1>Deze pagina staat er niet op</h1>
        <p className="lede">Het adres klopt niet, of het blad is verplaatst. De tuin zelf begint op de homepage.</p>
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
