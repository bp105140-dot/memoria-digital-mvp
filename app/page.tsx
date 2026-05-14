import Link from "next/link";
import { LumiMascot, RibbonDoodle, SparkleDoodle } from "@/components/landing/lumi-mascot";

const steps = [
  {
    number: "1",
    icon: "01",
    title: "Conte a história de vocês",
    copy: "Escreva a mensagem principal, escolha os nomes e defina o tom da surpresa em poucos minutos."
  },
  {
    number: "2",
    icon: "02",
    title: "Personalize cada detalhe",
    copy: "Envie as fotos, organize os momentos mais importantes e escolha a música que acompanha a experiência."
  },
  {
    number: "3",
    icon: "03",
    title: "Receba o link e o QR Code",
    copy: "Publique o presente, compartilhe de forma elegante e entregue a surpresa do jeito que fizer mais sentido."
  },
  {
    number: "4",
    icon: "04",
    title: "Emocione quem você ama",
    copy: "A pessoa abre no celular e encontra uma página bonita, fluida e feita para marcar aquele momento."
  }
];

const resources = [
  {
    eyebrow: "Página de abertura",
    title: "Uma primeira impressão que já comunica valor e cuidado.",
    copy: "Título forte, mensagem central, mockups elegantes e uma atmosfera visual que parece presente premium."
  },
  {
    eyebrow: "Música incorporada",
    title: "A trilha certa muda completamente a emoção da experiência.",
    copy: "Adicione YouTube ou Spotify para transformar a página em algo mais íntimo, memorável e envolvente."
  },
  {
    eyebrow: "Linha do tempo",
    title: "Capítulos visuais para contar a história sem parecer um formulário.",
    copy: "Cada marco ganha ritmo, contexto e presença, valorizando os momentos mais importantes da relação."
  }
];

const testimonials = [
  {
    name: "Fernanda",
    detail: "Presente para namorado",
    quote: "Ficou com cara de algo muito maior do que um link. Parecia uma surpresa realmente preparada para aquele dia."
  },
  {
    name: "Ana Clara",
    detail: "Aniversário de namoro",
    quote: "O melhor foi conseguir rápido sem perder a sensação de cuidado. A apresentação fez toda a diferença."
  },
  {
    name: "Lucas",
    detail: "Presente de última hora",
    quote: "Abriu lindo no celular. A música e a linha do tempo deixaram a experiência muito mais forte."
  },
  {
    name: "Juliana",
    detail: "Presente para esposa",
    quote: "Tem aparência de produto premium, não de página improvisada. Foi exatamente o que eu queria entregar."
  }
];

const faqs = [
  {
    question: "O que vem no presente digital?",
    answer: "Mensagem, fotos, música, linha do tempo, página pública, link compartilhável e QR Code para entregar a surpresa."
  },
  {
    question: "Posso editar depois de criar?",
    answer: "Sim. O comprador pode voltar ao painel, ajustar textos, fotos, tema, música e outros detalhes do presente."
  },
  {
    question: "Funciona bem no celular?",
    answer: "Sim. Toda a experiência foi pensada para abrir com impacto no celular, que é onde a maioria das pessoas vai viver a surpresa."
  },
  {
    question: "Já posso testar a experiência?",
    answer: "Sim. A base já está pronta para autenticação, criação, edição e visualização pública dos presentes."
  }
];

export default function HomePage() {
  return (
    <div className="page-shell landing-shell landing-v2">
      <header className="site-header landing-header">
        <div className="container topbar">
          <Link href="/" className="brand landing-brand">
            Memória Digital
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
              <span className="landing-kicker">Presente digital personalizado</span>
              <h1>
                Declare o seu amor com uma surpresa que parece feita sob medida.
              </h1>
              <p className="landing-hero-lead">
                Monte uma página com fotos, música, linha do tempo e mensagem final. Tudo com
                visual elegante, pronto para abrir no celular e despertar a vontade de assistir até o fim.
              </p>

              <div className="hero-actions">
                <Link href="/criar" className="button landing-primary">
                  Criar presente agora
                </Link>
                <Link href="/login" className="button-secondary landing-secondary">
                  Entrar para editar
                </Link>
              </div>

              <div className="landing-trust-row">
                <div className="trust-chip">Pronto em poucos minutos</div>
                <div className="trust-chip">Link + QR Code</div>
                <div className="trust-chip">Edição posterior</div>
              </div>

              <div className="landing-social-proof">
                <div className="landing-avatar">F</div>
                <div>
                  <strong>Ideal para datas especiais</strong>
                  <p>
                    Perfeito para aniversário de namoro, Dia dos Namorados, pedido especial ou
                    qualquer surpresa que mereça uma entrega bonita.
                  </p>
                </div>
              </div>
            </div>

            <div className="landing-hero-visual">
              <RibbonDoodle className="landing-ribbon landing-ribbon-hero" size={210} />
              <SparkleDoodle className="landing-sparkles landing-sparkles-hero" size={88} />
              <div className="landing-heart heart-a" />
              <div className="landing-heart heart-b" />
              <div className="landing-heart heart-c" />

              <div className="landing-floating-stat">
                <strong>Entrega imediata</strong>
                <span>Crie, publique e compartilhe no mesmo dia.</span>
              </div>

              <div className="landing-mascot-chip">
                <LumiMascot className="landing-mascot-mini" size={86} />
                <div>
                  <strong>Conheça a Lumi</strong>
                  <span>Uma mascote criada para dar leveza, afeto e identidade à experiência.</span>
                </div>
              </div>

              <div className="landing-phones">
                <div className="landing-phone phone-back left">
                  <div className="landing-phone-screen alt-screen">
                    <span className="mini-pill">Linha do tempo</span>
                    <strong>Nossa jornada</strong>
                    <div className="phone-list">
                      <span>Primeira conversa</span>
                      <span>Nosso primeiro encontro</span>
                      <span>Um dia que mudou tudo</span>
                    </div>
                  </div>
                </div>

                <div className="landing-phone phone-front">
                  <div className="landing-phone-screen main-screen">
                    <div className="music-bar">
                      <span className="dot coral" />
                      <span className="dot peach" />
                      <span className="dot mint" />
                    </div>
                    <div className="album-cover" />
                    <p className="track-title">Nossa música</p>
                    <p className="track-meta">A trilha que acompanha a surpresa</p>
                    <div className="player-line" />
                    <div className="player-button">▶</div>
                  </div>
                </div>

                <div className="landing-phone phone-back right">
                  <div className="landing-phone-screen message-screen">
                    <span className="mini-pill">Mensagem final</span>
                    <strong>Você é a melhor parte da minha vida.</strong>
                    <p className="phone-copy">
                      Uma página que parece preparada com calma, carinho e intenção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section landing-section landing-section-white" id="como-funciona">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Como funciona</span>
              <h2 className="landing-title">Crie um presente inesquecível em 4 passos simples</h2>
              <p className="landing-subtitle">
                A experiência foi desenhada para parecer caprichada para quem recebe e simples para quem cria.
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

        <section className="section landing-section landing-section-soft">
          <div className="container landing-demo-grid">
            <div className="landing-demo-phone">
              <div className="landing-phone tall-phone">
                <div className="landing-phone-screen timeline-screen">
                  <span className="mini-pill">Preview mobile</span>
                  <strong>Nossa jornada</strong>
                  <div className="timeline-mini-card">
                    <small>19/12/2019</small>
                    <span>Onde tudo começou</span>
                  </div>
                  <div className="timeline-mini-card">
                    <small>Primeira viagem</small>
                    <span>Um capítulo marcante</span>
                  </div>
                  <div className="timeline-mini-card">
                    <small>Hoje</small>
                    <span>E isso é só o começo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="landing-demo-copy">
              <span className="landing-kicker">Linha do tempo</span>
              <h2 className="landing-title">Uma experiência que guia o olhar e valoriza cada lembrança</h2>
              <p className="landing-subtitle left">
                Reviva a jornada com uma linha do tempo visual, destaque para as fotos mais importantes
                e uma composição que deixa a história mais gostosa de acompanhar.
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

        <section className="section landing-section landing-section-white" id="recursos">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Recursos</span>
              <h2 className="landing-title">Crie um presente memorável e verdadeiramente especial</h2>
              <p className="landing-subtitle">
                Cada detalhe foi pensado para transformar fotos, música e palavras em uma surpresa
                com presença, emoção e acabamento premium.
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
                <span className="resource-kicker">Demonstração visual</span>
                <h3>Uma vitrine com cara de produto premium, não de página genérica</h3>
                <p>
                  Mockups, hierarquia clara, blocos bem definidos e uma apresentação que faz o
                  visitante imaginar imediatamente a própria surpresa pronta.
                </p>
                <div className="landing-wide-showcase">
                  <RibbonDoodle className="landing-ribbon landing-ribbon-showcase" size={220} />
                  <SparkleDoodle className="landing-sparkles landing-sparkles-showcase" size={76} />
                  <div className="landing-showcase-stage">
                    <div className="showcase-floating-tag">Fotos, trilha e mensagem no mesmo presente</div>
                    <div className="landing-phone mini-left">
                      <div className="landing-phone-screen alt-screen">
                        <span className="mini-pill">Galeria</span>
                        <strong>Momentos favoritos</strong>
                        <div className="showcase-thumbs">
                          <span className="thumb thumb-warm" />
                          <span className="thumb thumb-cool" />
                          <span className="thumb thumb-soft" />
                        </div>
                        <div className="showcase-stack">
                          <span>Fotos em destaque</span>
                          <span>Ordem inteligente</span>
                          <span>Lembranças com contexto</span>
                        </div>
                      </div>
                    </div>
                    <div className="landing-phone mini-center">
                      <div className="landing-phone-screen main-screen">
                        <span className="mini-pill">Trilha + capa</span>
                        <div className="album-cover small" />
                        <p className="track-title">Momento especial</p>
                        <p className="track-meta">Uma cena que já parece presente pronto</p>
                        <div className="player-line" />
                        <div className="showcase-player-row">
                          <span>01:12</span>
                          <div className="player-button">▶</div>
                          <span>03:47</span>
                        </div>
                      </div>
                    </div>
                    <div className="landing-phone mini-right">
                      <div className="landing-phone-screen message-screen">
                        <span className="mini-pill">Mensagem</span>
                        <strong>Seu amor em palavras</strong>
                        <div className="showcase-note-card">
                          “Você faz qualquer data comum virar memória bonita.”
                        </div>
                        <div className="showcase-lines">
                          <span />
                          <span />
                          <span className="short" />
                        </div>
                        <p className="showcase-message">
                          Um fechamento íntimo, elegante e pronto para emocionar na primeira leitura.
                        </p>
                        <div className="showcase-signature">Com carinho, Van</div>
                      </div>
                    </div>
                    <div className="landing-showcase-mascot">
                      <LumiMascot size={112} />
                    </div>
                  </div>
                </div>
              </article>

              <article className="landing-resource-card landing-metrics-card">
                <span className="resource-kicker">O que o cliente leva</span>
                <div className="landing-metrics-intro">
                  <strong className="landing-metrics-lead">Tudo pronto para enviar no mesmo dia.</strong>
                  <div className="landing-metrics-visual">
                    <div className="landing-metrics-link">
                      <span>Entrega rápida</span>
                      <strong>Link privado com visual premium</strong>
                    </div>
                    <div className="landing-metrics-qr" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <p className="landing-metrics-copy">
                    Tudo sai pronto para emocionar, compartilhar e continuar disponível para ajustes
                    depois.
                  </p>
                  <div className="landing-metrics-tags">
                    <span>Sem app</span>
                    <span>QR Code</span>
                    <span>Edição posterior</span>
                  </div>
                </div>
                <div className="landing-metric-list">
                  <div>
                    <strong>Até 60 fotos</strong>
                    <span>dependendo do plano</span>
                  </div>
                  <div>
                    <strong>1 trilha especial</strong>
                    <span>YouTube ou Spotify</span>
                  </div>
                  <div>
                    <strong>Link + QR Code</strong>
                    <span>prontos para compartilhar</span>
                  </div>
                  <div>
                    <strong>Edição posterior</strong>
                    <span>para ajustar quando quiser</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section landing-section landing-section-soft landing-mascot-section">
          <div className="container landing-mascot-grid">
            <div className="landing-mascot-copy">
              <span className="landing-kicker">Assinatura visual</span>
              <h2 className="landing-title">A Lumi nasceu para fazer a marca parecer lembrança desde o primeiro olhar</h2>
              <p className="landing-subtitle left">
                Pequenos desenhos, brilhos e uma personagem própria deixam a página mais memorável,
                mais encantadora e muito menos genérica. É esse tipo de acabamento que faz a marca
                ficar na cabeça.
              </p>
              <div className="landing-trust-row">
                <div className="trust-chip">Ilustração proprietária</div>
                <div className="trust-chip">Visual afetivo</div>
                <div className="trust-chip">Mais reconhecimento</div>
              </div>
            </div>

            <div className="landing-mascot-stage">
              <RibbonDoodle className="landing-ribbon landing-ribbon-stage" size={250} />
              <SparkleDoodle className="landing-sparkles landing-sparkles-stage" size={92} />
              <div className="landing-mascot-stage-card">
                <LumiMascot className="landing-lumi-large" size={220} />
                <div className="landing-mascot-note">
                  <strong>Lumi, a mensageira do afeto</strong>
                  <p>
                    Ela aparece nos detalhes da experiência para amarrar a narrativa com ternura,
                    leveza e personalidade própria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section landing-section landing-section-soft">
          <div className="container">
            <div className="landing-banner">
              <div>
                <span className="landing-kicker">Pronto para impressionar</span>
                <h2>Monte uma surpresa com presença, ritmo e emoção desde o primeiro toque</h2>
                <p>
                  Escolha a trilha, organize os momentos mais marcantes e entregue uma experiência
                  que parece exclusiva para quem vai receber.
                </p>
              </div>
              <Link href="/criar" className="button landing-primary">
                Explorar o criador
              </Link>
            </div>
          </div>
        </section>

        <section className="section landing-section landing-section-white">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Depoimentos</span>
              <h2 className="landing-title">Reações que mostram o valor de uma surpresa bem entregue</h2>
              <p className="landing-subtitle">
                Quem cria busca praticidade. Quem recebe percebe cuidado, intenção e beleza em cada detalhe.
              </p>
            </div>

            <div className="landing-testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="landing-testimonial-card">
                  <div className="testimonial-stars">Excelente experiência</div>
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

        <section className="section landing-section landing-section-soft" id="planos">
          <div className="container">
            <div className="landing-section-heading center-heading">
              <span className="landing-kicker">Planos e preços</span>
              <h2 className="landing-title">Escolha o plano ideal para a sua surpresa</h2>
              <p className="landing-subtitle">
                Pagamento único, sem mensalidade, com tudo o que você precisa para criar, publicar e compartilhar.
              </p>
            </div>

            <div className="landing-pricing-grid">
              <article className="landing-price-card">
                <span className="resource-kicker">Presente essencial</span>
                <h3>R$ 24,90</h3>
                <ul>
                  <li>Acesso por 1 ano</li>
                  <li>Até 10 fotos</li>
                  <li>1 música incorporada</li>
                  <li>Link e QR Code</li>
                </ul>
              </article>

              <article className="landing-price-card featured">
                <span className="resource-kicker">Para guardar por mais tempo</span>
                <h3>R$ 34,90</h3>
                <ul>
                  <li>Mais fotos e linha do tempo</li>
                  <li>Visual mais completo</li>
                  <li>Edição posterior</li>
                  <li>Experiência mais rica</li>
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

        <section className="section landing-section landing-section-white" id="faq">
          <div className="container landing-faq-layout">
            <div className="landing-faq-intro">
              <span className="landing-kicker">Perguntas frequentes</span>
              <h2 className="landing-title">Tire suas dúvidas</h2>
              <p className="landing-subtitle left">
                Separamos as dúvidas mais comuns para você decidir com tranquilidade e criar com segurança.
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
            <strong>Memória Digital</strong>
            <p>
              Crie experiências digitais com fotos, música, linha do tempo e uma entrega romântica pronta
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
