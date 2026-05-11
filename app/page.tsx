import Link from "next/link";

const features = [
  {
    tag: "Abertura animada",
    title: "Um presente que parece uma surpresa viva.",
    copy:
      "Capa impactante, atmosfera romantica, fotos em destaque e detalhes que fazem a experiencia parecer especial desde o primeiro segundo."
  },
  {
    tag: "Linha do tempo",
    title: "Memorias com ritmo e contexto.",
    copy:
      "Cada marco vira um capitulo com profundidade visual, ideal para contar a historia com emocao e sem cara de formulario frio."
  },
  {
    tag: "Link + QR Code",
    title: "Pronto para compartilhar com encanto.",
    copy:
      "A pessoa recebe uma pagina bonita no celular, com abertura marcante, musica, galeria e clima de retrospectiva."
  }
];

const journey = [
  "Conte quem esta presenteando e para quem e a surpresa.",
  "Suba as fotos favoritas e organize os momentos mais especiais.",
  "Adicione musica, mensagem, tema visual e publique a experiencia."
];

export default function HomePage() {
  return (
    <div className="page-shell landing-shell">
      <header className="site-header">
        <div className="container topbar">
          <Link href="/" className="brand">
            Memoria Digital
          </Link>
          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#precos">Precos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Link href="/criar" className="button-ghost">
            Criar presente
          </Link>
        </div>
      </header>

      <main>
        <section className="hero hero-cinematic">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Presente digital com brilho, atmosfera e emocao real</span>
              <h1>
                Uma surpresa que parece magia, feita com fotos, musica e uma historia que pulsa.
              </h1>
              <p className="hero-lead">
                Crie uma pagina-presente com ceu estrelado, abertura impactante, galeria imersiva,
                linha do tempo e carta final. Tudo pronto para emocionar no celular e parecer
                muito maior do que um simples link.
              </p>
              <div className="hero-actions">
                <Link href="/criar" className="button">
                  Criar meu presente
                </Link>
                <Link href="/login" className="button-secondary">
                  Entrar para editar
                </Link>
              </div>

              <div className="hero-floating-row">
                <div className="floating-chip">
                  <strong>UX encantadora</strong>
                  <span>efeitos, brilho e clima romantico</span>
                </div>
                <div className="floating-chip">
                  <strong>Mobile first</strong>
                  <span>feito para abrir bonito no celular</span>
                </div>
              </div>
            </div>

            <div className="hero-showcase">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-phone hero-phone-luxe">
                <div className="hero-phone-screen">
                  <div className="phone-cover phone-cover-premium">
                    <span className="eyebrow">Experiencia final</span>
                    <h2>Ana &amp; Leo</h2>
                    <p>Desde 19/12/2019, tudo ganhou outra cor.</p>
                  </div>

                  <div className="phone-stats">
                    <div className="mini-card mini-card-strong">
                      <strong>1 link</strong>
                      <span>compartilhavel</span>
                    </div>
                    <div className="mini-card mini-card-strong">
                      <strong>1 QR Code</strong>
                      <span>pronto para surpreender</span>
                    </div>
                    <div className="mini-card mini-card-strong">
                      <strong>30 fotos</strong>
                      <span>em uma narrativa elegante</span>
                    </div>
                  </div>

                  <div className="story-glimpse-card">
                    <div className="story-glimpse-header">
                      <span className="pill">Capitulo 1</span>
                      <strong>Onde tudo comecou</strong>
                    </div>
                    <p>
                      Uma abertura cheia de brilho, profundidade e pequenos movimentos para dar cara
                      de presente premium.
                    </p>
                  </div>
                </div>
              </div>

              <div className="floating-badge floating-badge-top">
                <span>efeito de surpresa</span>
              </div>
              <div className="floating-badge floating-badge-bottom">
                <span>retrospectiva romantica</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section marquee-section">
          <div className="container">
            <div className="love-marquee">
              <span>fotos</span>
              <span>musica</span>
              <span>timeline</span>
              <span>abertura cinematografica</span>
              <span>mensagem final</span>
              <span>link e QR Code</span>
              <span>fotos</span>
              <span>musica</span>
              <span>timeline</span>
              <span>abertura cinematografica</span>
              <span>mensagem final</span>
              <span>link e QR Code</span>
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="container">
            <div className="section-heading center-heading">
              <span className="eyebrow">Experiencia visual</span>
              <h2 className="section-title">Mais atmosfera, mais movimento, mais vontade de compartilhar.</h2>
            </div>

            <div className="highlight-grid">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card feature-card-rich">
                  <span className="pill">{feature.tag}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <div className="container feature-layout">
            <div>
              <span className="eyebrow">Como funciona</span>
              <h2 className="section-title">Uma jornada simples por fora, mas muito mais rica por dentro.</h2>
              <p className="section-copy">
                O criador continua rapido, mas a entrega final pode ter muito mais presenca visual:
                brilhos, profundidade, camadas, storytelling e uma pagina publica com cara de momento
                importante.
              </p>

              <div className="journey-list">
                {journey.map((item, index) => (
                  <article key={item} className="journey-item">
                    <div className="journey-index">0{index + 1}</div>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="preview-card luxe-panel">
              <span className="eyebrow">Visao do produto</span>
              <div className="step-tabs">
                <div className="step-tab active">
                  <strong>Abertura emocionante</strong>
                  <div className="muted">ceu estrelado, brilhos e destaque forte para a pessoa presenteada</div>
                </div>
                <div className="step-tab active">
                  <strong>Galeria com profundidade</strong>
                  <div className="muted">cards mais sensiveis, molduras sutis e hover mais bonito</div>
                </div>
                <div className="step-tab active">
                  <strong>Timeline com clima</strong>
                  <div className="muted">nao so datas, mas capitulos com atmosfera de memoria especial</div>
                </div>
              </div>
              <div className="notice" style={{ marginTop: "1rem" }}>
                O proximo salto natural depois disso e integrar checkout e liberar efeitos diferentes por plano.
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="precos">
          <div className="container">
            <div className="section-heading center-heading">
              <span className="eyebrow">Planos sugeridos</span>
              <h2 className="section-title">Cada plano pode entregar mais emocao visual e mais recursos.</h2>
            </div>

            <div className="highlight-grid">
              <article className="feature-card pricing-card">
                <span className="pill">Basico</span>
                <h3>Comece bonito</h3>
                <p>10 fotos, 1 musica, capa elegante, mensagem final, link e QR Code.</p>
              </article>
              <article className="feature-card pricing-card pricing-card-featured">
                <span className="pill">Premium</span>
                <h3>O mais encantador</h3>
                <p>30 fotos, timeline, retrospectiva, efeitos mais ricos e edicao posterior.</p>
              </article>
              <article className="feature-card pricing-card">
                <span className="pill">Completo</span>
                <h3>Experiencia maxima</h3>
                <p>60 fotos, slug personalizado, PDF do QR Code e detalhes especiais de casal.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="section-heading center-heading">
              <span className="eyebrow">FAQ</span>
              <h2 className="section-title">Perguntas que ajudam o produto a parecer confiavel e premium.</h2>
            </div>

            <div className="highlight-grid">
              <article className="feature-card">
                <h3>Posso editar depois?</h3>
                <p>Sim. O comprador pode voltar ao painel e ajustar textos, fotos, tema e timeline.</p>
              </article>
              <article className="feature-card">
                <h3>Funciona no celular?</h3>
                <p>Sim. Toda a experiencia foi pensada para abrir no celular com impacto e leveza.</p>
              </article>
              <article className="feature-card">
                <h3>Ja posso testar tudo?</h3>
                <p>Sim. A base esta pronta para autenticacao, criacao, edicao e visualizacao publica.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>Memoria Digital</strong>
            <p className="muted">
              Presentes digitais com fotos, musica, atmosfera romantica, timeline e pagina publica.
            </p>
          </div>
          <div className="inline-actions">
            <Link href="/criar" className="button">
              Comecar agora
            </Link>
            <Link href="/meus-presentes" className="button-secondary">
              Meu painel
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
