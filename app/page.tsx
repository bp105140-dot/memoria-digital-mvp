import Link from "next/link";

const steps = [
  {
    number: "1",
    icon: "01",
    title: "Conte a sua historia",
    copy: "Escreva a mensagem, escolha os nomes e monte a abertura do presente em poucos minutos."
  },
  {
    number: "2",
    icon: "02",
    title: "Personalize cada detalhe",
    copy: "Suba fotos, organize os melhores momentos e escolha a musica que vai dar o clima certo."
  },
  {
    number: "3",
    icon: "03",
    title: "Receba seu link",
    copy: "Publique a experiencia, compartilhe por link ou QR Code e entregue de um jeito memoravel."
  },
  {
    number: "4",
    icon: "04",
    title: "Emocione quem voce ama",
    copy: "A pessoa abre no celular e encontra uma surpresa bonita, romantica e pronta para tocar."
  }
];

const resources = [
  {
    eyebrow: "Feito para emocionar",
    title: "Uma pagina-presente que parece especial desde o primeiro segundo.",
    copy: "Hero de impacto, mensagem central, fotos em destaque e uma trilha que acompanha toda a experiencia."
  },
  {
    eyebrow: "Linha do tempo",
    title: "Capitulos visuais para contar a historia sem parecer formulario.",
    copy: "Cada marco aparece com ritmo, contexto e profundidade, reforcando a narrativa do casal ou da relacao."
  },
  {
    eyebrow: "Retrospectiva e clima",
    title: "Mais atmosfera, mais brilho, mais vontade de compartilhar.",
    copy: "Camadas, cards definidos, transicoes suaves e um visual que deixa o produto com cara de presente premium."
  }
];

const testimonials = [
  {
    name: "Fernanda",
    detail: "Presente para namorado",
    quote: "Ficou com cara de algo feito por uma marca grande, mas com a nossa historia dentro."
  },
  {
    name: "Ana Clara",
    detail: "Aniversario de namoro",
    quote: "O melhor foi conseguir montar rapido e ainda parecer uma surpresa super caprichada."
  },
  {
    name: "Lucas",
    detail: "Presente de ultima hora",
    quote: "Abriu lindo no celular. A parte da musica e da timeline deixou tudo muito mais forte."
  },
  {
    name: "Juliana",
    detail: "Presente para esposa",
    quote: "Tem cara de experiencia premium, nao de pagina improvisada. Era exatamente isso que eu queria."
  }
];

const faqs = [
  {
    question: "O que vem no presente digital?",
    answer: "Mensagem, fotos, musica, linha do tempo, pagina publica e uma experiencia pronta para compartilhar."
  },
  {
    question: "Posso editar depois de criar?",
    answer: "Sim. O comprador consegue voltar ao painel, alterar texto, fotos, tema e outros detalhes do presente."
  },
  {
    question: "Funciona bem no celular?",
    answer: "Sim. Toda a estrutura foi pensada para abrir bonito no celular, que e onde a maioria das pessoas vai viver a surpresa."
  },
  {
    question: "Ja posso testar a experiencia?",
    answer: "Sim. O fluxo de criacao, autenticacao e visualizacao publica ja existe e esta pronto para refinamento."
  }
];

export default function HomePage() {
  return (
    <div className="page-shell landing-shell landing-v2">
      <header className="site-header landing-header">
        <div className="container topbar">
          <Link href="/" className="brand landing-brand">
            Memoria Digital
          </Link>
          <nav className="nav landing-nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#planos">Planos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Link href="/criar" className="button landing-primary">
            Criar presente
          </Link>
        </div>
      </header>

      <main>
        <section className="landing-hero">
          <div className="container landing-hero-grid">
            <div className="landing-hero-copy">
              <span className="landing-kicker">O presente que emociona, pronto em minutos</span>
              <h1>
                Declare o seu amor
                <span> de um jeito que parece grande.</span>
              </h1>
              <p className="landing-hero-lead">
                Crie um presente digital com fotos, musica, linha do tempo e uma experiencia visual
                envolvente. Tudo pensado para abrir bonito no celular e emocionar de verdade.
              </p>

              <div className="hero-actions">
                <Link href="/criar" className="button landing-primary">
                  Criar presente agora
                </Link>
                <Link href="/login" className="button-secondary landing-secondary">
                  Entrar para editar
                </Link>
              </div>

              <div className="landing-social-proof">
                <div className="landing-avatar">F</div>
                <div>
                  <strong>Fernanda</strong>
                  <p>O tipo de surpresa que abre no celular e faz a pessoa parar tudo para ver.</p>
                </div>
              </div>
            </div>

            <div className="landing-hero-visual">
              <div className="landing-heart heart-a" />
              <div className="landing-heart heart-b" />
              <div className="landing-heart heart-c" />

              <div className="landing-floating-stat stat-top">
                <strong>+50k</strong>
                <span>momentos registrados</span>
              </div>

              <div className="landing-phones">
                <div className="landing-phone phone-back left">
                  <div className="landing-phone-screen alt-screen">
                    <span className="mini-pill">Timeline</span>
                    <strong>Nossa Jornada</strong>
                  </div>
                </div>

                <div className="landing-phone phone-front">
                  <div className="landing-phone-screen main-screen">
                    <div className="music-bar">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="album-cover" />
                    <p className="track-title">Until It Was A Thin</p>
                    <p className="track-meta">Nossa musica especial</p>
                    <div className="player-line" />
                    <div className="player-button">||</div>
                  </div>
                </div>

                <div className="landing-phone phone-back right">
                  <div className="landing-phone-screen alt-screen blue-screen">
                    <span className="mini-pill">Mensagem</span>
                    <strong>Voce e a melhor parte</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section landing-section" id="como-funciona">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Como funciona</span>
              <h2 className="landing-title">Crie um presente inesquecivel em 4 passos simples</h2>
              <p className="landing-subtitle">
                Nossa plataforma foi feita para transformar memoria, texto e musica em uma surpresa
                digital com cara de produto premium.
              </p>
            </div>

            <div className="landing-steps-grid">
              {steps.map((step) => (
                <article key={step.number} className="landing-step-card">
                  <div className="landing-step-badge">{step.number}</div>
                  <div className="landing-step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section landing-section">
          <div className="container landing-demo-grid">
            <div className="landing-demo-phone">
              <div className="landing-phone tall-phone">
                <div className="landing-phone-screen timeline-screen">
                  <span className="mini-pill">Preview mobile</span>
                  <strong>Nossa Jornada</strong>
                  <div className="timeline-mini-card">
                    <small>19/12/2019</small>
                    <span>Onde tudo comecou</span>
                  </div>
                  <div className="timeline-mini-card">
                    <small>Primeira viagem</small>
                    <span>Um capitulo marcante</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-demo-copy">
              <span className="landing-kicker">Linha do tempo</span>
              <h2 className="landing-title">Uma experiencia que guia o olhar e valoriza cada momento</h2>
              <p className="landing-subtitle left">
                Reviva a jornada com uma linha do tempo animada, destaque para as fotos mais
                importantes e uma composicao visual que deixa a historia mais gostosa de acompanhar.
              </p>
              <div className="landing-slider-dots">
                <span className="active" />
                <span />
                <span />
                <span />
              </div>
              <Link href="/criar" className="button landing-primary">
                Criar meu presente
              </Link>
            </div>
          </div>
        </section>

        <section className="section landing-section" id="recursos">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Recursos</span>
              <h2 className="landing-title">Crie um presente memoravel e unico</h2>
              <p className="landing-subtitle">
                A base do produto esta aqui: clareza comercial, visual mais definido e uma experiencia
                que comunica valor antes mesmo da pessoa clicar.
              </p>
            </div>

            <div className="landing-resources-grid">
              {resources.map((item) => (
                <article key={item.title} className="landing-resource-card">
                  <span className="resource-kicker">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}

              <article className="landing-resource-card landing-resource-wide">
                <span className="resource-kicker">Demo visual</span>
                <h3>Uma landing que parece produto de verdade, nao so uma pagina explicando ideia</h3>
                <div className="landing-wide-showcase">
                  <div className="landing-phone mini-left">
                    <div className="landing-phone-screen alt-screen">
                      <strong>Momentos</strong>
                    </div>
                  </div>
                  <div className="landing-phone mini-center">
                    <div className="landing-phone-screen main-screen">
                      <div className="album-cover small" />
                      <p className="track-title">Momento Especial</p>
                    </div>
                  </div>
                  <div className="landing-phone mini-right">
                    <div className="landing-phone-screen alt-screen blue-screen">
                      <strong>Mensagem Final</strong>
                    </div>
                  </div>
                </div>
              </article>

              <article className="landing-resource-card landing-numbers-card">
                <span className="resource-kicker">Retrospectiva visual</span>
                <div className="landing-number-stack">
                  <strong>39.670</strong>
                  <strong>39.670</strong>
                  <strong>39.670</strong>
                  <strong>39.670</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section landing-section">
          <div className="container">
            <div className="landing-banner">
              <div>
                <span className="landing-kicker">Demo interativa</span>
                <h2>Teste uma experiencia com cara de surpresa premium</h2>
                <p>Essa landing pode virar a vitrine perfeita para o nosso criador real.</p>
              </div>
              <Link href="/criar" className="button landing-primary">
                Explorar criador
              </Link>
            </div>
          </div>
        </section>

        <section className="section landing-section">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Depoimentos</span>
              <h2 className="landing-title">O que nossos clientes diriam ao abrir uma surpresa assim</h2>
              <p className="landing-subtitle">
                O desenho da pagina agora sustenta muito melhor prova social, conversao e percepcao de valor.
              </p>
            </div>

            <div className="landing-testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="landing-testimonial-card">
                  <div className="testimonial-stars">5 estrelas</div>
                  <p>{item.quote}</p>
                  <div className="testimonial-author">
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section landing-section" id="planos">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Planos e precos</span>
              <h2 className="landing-title">Escolha o plano ideal para voce</h2>
              <p className="landing-subtitle">
                Pagamento unico, sem mensalidade. Um presente digital com aparencia premium e valor percebido maior.
              </p>
            </div>

            <div className="landing-pricing-grid">
              <article className="landing-price-card">
                <span className="resource-kicker">Presente Essencial</span>
                <h3>R$ 24,90</h3>
                <ul>
                  <li>Acesso por 1 ano</li>
                  <li>10 fotos</li>
                  <li>1 musica</li>
                  <li>Link e QR Code</li>
                </ul>
              </article>

              <article className="landing-price-card featured">
                <span className="resource-kicker">Para sempre</span>
                <h3>R$ 34,90</h3>
                <ul>
                  <li>Pagina sem limite de carinho</li>
                  <li>Mais fotos e timeline</li>
                  <li>Visual premium</li>
                  <li>Edicao posterior</li>
                </ul>
              </article>
            </div>

            <div className="center">
              <Link href="/criar" className="button landing-primary">
                Criar meu presente
              </Link>
            </div>
          </div>
        </section>

        <section className="section landing-section" id="faq">
          <div className="container landing-faq-layout">
            <div className="landing-faq-intro">
              <span className="landing-kicker">Perguntas frequentes</span>
              <h2 className="landing-title">Tire suas duvidas</h2>
              <p className="landing-subtitle left">
                Essa estrutura tambem ajuda muito a pagina a parecer mais completa, confiavel e pronta para vender.
              </p>
              <div className="landing-contact-card">
                <strong>Instagram</strong>
                <span>@memoriadigital</span>
              </div>
              <div className="landing-contact-card">
                <strong>E-mail</strong>
                <span>suporte@memoriadigital.com.br</span>
              </div>
              <Link href="/criar" className="button landing-primary">
                Criar meu presente
              </Link>
            </div>

            <div className="landing-faq-list">
              {faqs.map((item, index) => (
                <details key={item.question} className="landing-faq-item" open={index === 0}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="container landing-footer-grid">
          <div>
            <strong>Memoria Digital</strong>
            <p>
              Crie experiencias digitais com fotos, musica, timeline e uma entrega romantica pronta
              para compartilhar.
            </p>
          </div>
          <div>
            <strong>Produto</strong>
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#planos">Planos</a>
          </div>
          <div>
            <strong>Presentes</strong>
            <a href="/criar">Criar presente</a>
            <a href="/login">Entrar</a>
            <a href="/meus-presentes">Meu painel</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="#faq">FAQ</a>
            <a href="/">Privacidade</a>
            <a href="/">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}