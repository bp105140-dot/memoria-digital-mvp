import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container topbar">
          <Link href="/" className="brand">
            Memoria Digital
          </Link>
          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#precos">Precos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Link href="/criar" className="button-ghost">
            Criar presente
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Presente digital com emocao real</span>
              <h1>Transforme fotos, musica e memorias em uma surpresa inesquecivel.</h1>
              <p>
                Monte uma pagina-presente com galeria, musica, linha do tempo,
                carta final, link publico e QR Code. Pronta para emocionar em
                poucos minutos.
              </p>
              <div className="hero-actions">
                <Link href="/criar" className="button">
                  Criar meu presente
                </Link>
                <Link href="/login" className="button-secondary">
                  Entrar para editar
                </Link>
              </div>
            </div>

            <div className="hero-phone">
              <div className="hero-phone-screen">
                <div className="phone-cover">
                  <span className="eyebrow">Experiencia final</span>
                  <h2>Ana &amp; Leo</h2>
                  <p>Uma retrospectiva feita de fotos, datas e carinho.</p>
                </div>
                <div className="phone-stats">
                  <div className="mini-card">
                    <strong>1 link</strong>
                    <span>compartilhavel</span>
                  </div>
                  <div className="mini-card">
                    <strong>1 QR Code</strong>
                    <span>pronto para enviar</span>
                  </div>
                  <div className="mini-card">
                    <strong>30 fotos</strong>
                    <span>no plano premium</span>
                  </div>
                </div>
                <div className="mini-card">
                  <strong>19/12/2019</strong>
                  <p>Onde tudo comecou</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="highlight-grid">
              <article className="feature-card">
                <span className="pill">5 min</span>
                <h3>Fluxo rapido para vender bem</h3>
                <p>Dados, fotos, musica, timeline, preview e pagamento em uma jornada simples.</p>
              </article>
              <article className="feature-card">
                <span className="pill">Pix imediato</span>
                <h3>Publicacao automatica</h3>
                <p>Depois do pagamento, a pagina fica publica e o comprador recebe o link e o QR Code.</p>
              </article>
              <article className="feature-card">
                <span className="pill">Mobile first</span>
                <h3>Feito para abrir bonito no celular</h3>
                <p>Design emocional, carregamento leve e experiencia pensada para WhatsApp e Instagram.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <div className="container">
            <span className="eyebrow">Como funciona</span>
            <h2 className="section-title">Uma jornada curta, clara e pronta para o MVP.</h2>
            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">01</span>
                <h3>Conte a historia</h3>
                <p>Defina nomes, data especial, relacao e mensagem principal.</p>
              </article>
              <article className="step-card">
                <span className="step-number">02</span>
                <h3>Envie as fotos</h3>
                <p>Suba imagens para o bucket do Supabase, escolha a capa e reorganize a ordem.</p>
              </article>
              <article className="step-card">
                <span className="step-number">03</span>
                <h3>Monte a timeline</h3>
                <p>Adicione marcos com data, titulo, descricao e foto opcional.</p>
              </article>
              <article className="step-card">
                <span className="step-number">04</span>
                <h3>Publique e compartilhe</h3>
                <p>Depois do checkout, o presente vira uma pagina publica com link unico.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="recursos">
          <div className="container feature-layout">
            <div>
              <span className="eyebrow">Recursos principais</span>
              <h2 className="section-title">Tudo o que o MVP precisa para ser funcional de verdade.</h2>
              <p className="section-copy">
                A base ja nasce com autenticacao por link magico, Supabase para
                dados e storage, painel do comprador, edicao posterior e pagina
                publica do presente.
              </p>
              <div className="highlight-grid">
                <article className="feature-card">
                  <h3>Autenticacao simples</h3>
                  <p>Login por link magico para reduzir atrito de cadastro.</p>
                </article>
                <article className="feature-card">
                  <h3>Criador em etapas</h3>
                  <p>Fluxo com preview, temas, musica externa, fotos e timeline.</p>
                </article>
                <article className="feature-card">
                  <h3>Painel do comprador</h3>
                  <p>Lista dos presentes criados, status e acesso rapido para editar ou abrir.</p>
                </article>
                <article className="feature-card">
                  <h3>Pagina publica</h3>
                  <p>URL unica com capa, galeria, linha do tempo e mensagem final.</p>
                </article>
              </div>
            </div>

            <aside className="preview-card">
              <span className="eyebrow">Fluxo do criador</span>
              <div className="step-tabs">
                <div className="step-tab active">
                  <strong>Dados basicos</strong>
                  <div className="muted">Quem presenteia, quem recebe, titulo e data especial</div>
                </div>
                <div className="step-tab">
                  <strong>Fotos e tema</strong>
                  <div className="muted">Upload real no Supabase Storage com capa e ordem</div>
                </div>
                <div className="step-tab">
                  <strong>Timeline e preview</strong>
                  <div className="muted">Edicao visual com publicacao posterior</div>
                </div>
              </div>
              <div className="notice" style={{ marginTop: "1rem" }}>
                Proximo passo natural: integrar checkout e webhooks para liberar publicacao automatica apos Pix.
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="precos">
          <div className="container">
            <span className="eyebrow">Planos sugeridos</span>
            <h2 className="section-title">Monetizacao alinhada ao PRD.</h2>
            <div className="highlight-grid">
              <article className="feature-card">
                <h3>Basico</h3>
                <p>10 fotos, 1 musica, mensagem final, link e QR Code.</p>
              </article>
              <article className="feature-card">
                <h3>Premium</h3>
                <p>30 fotos, timeline, retrospectiva e edicao posterior.</p>
              </article>
              <article className="feature-card">
                <h3>Completo</h3>
                <p>60 fotos, slug personalizado, QR Code em PDF e contador especial.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Perguntas que ajudam a fechar a compra.</h2>
            <div className="highlight-grid">
              <article className="feature-card">
                <h3>Posso editar depois?</h3>
                <p>Sim. O comprador pode voltar ao painel e ajustar textos, fotos, tema e timeline.</p>
              </article>
              <article className="feature-card">
                <h3>Funciona no celular?</h3>
                <p>Sim. O fluxo inteiro foi pensado para criacao e visualizacao mobile-first.</p>
              </article>
              <article className="feature-card">
                <h3>Ja esta conectado ao Supabase?</h3>
                <p>A estrutura esta pronta. Basta configurar as variaveis de ambiente e rodar o SQL.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>Memoria Digital</strong>
            <p className="muted">Presentes digitais com fotos, musica, timeline e pagina publica.</p>
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
