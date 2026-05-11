import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell section center">
      <div className="container">
        <span className="eyebrow">Nao encontrado</span>
        <h1 className="section-title">Essa pagina nao existe ou nao esta publica.</h1>
        <p className="section-copy">Volte para a landing ou entre no seu painel para criar um novo presente.</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="button">
            Ir para a home
          </Link>
          <Link href="/meus-presentes" className="button-secondary">
            Meu painel
          </Link>
        </div>
      </div>
    </div>
  );
}
