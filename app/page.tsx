import Image from "next/image";
import LeadForm from "./LeadForm";
import Parallax from "./Parallax";

const WA_LINK =
  "https://wa.me/5511972808075?text=" +
  encodeURIComponent("Olá Getulio! Vi o site da Geevheit e gostaria de conversar sobre um projeto/orçamento.");

const EMAIL = "geevheittecnology@gmail.com";

const services = [
  { 
    icon: "📱", 
    title: "Aplicativos Mobile (Android & iOS)", 
    desc: "Desenvolvimento de apps modernos, fluidos e intuitivos, prontos para publicação na Google Play e App Store." 
  },
  { 
    icon: "🌐", 
    title: "Sistemas Web & SaaS", 
    desc: "Plataformas completas e dashboards inteligentes sob medida para automatizar e escalar a operação do seu negócio." 
  },
  { 
    icon: "💻", 
    title: "Sites Profissionais & Portais", 
    desc: "Sites institucionais ultra velozes, responsivos e otimizados para conquistar as primeiras posições do Google." 
  },
  { 
    icon: "🚀", 
    title: "Landing Pages de Alta Conversão", 
    desc: "Páginas projetadas com gatilhos de vendas e design persuasivo para converter cliques e tráfego pago em clientes reais." 
  },
];

const steps = [
  { t: "1. Conversa e Alinhamento", d: "Entendemos a fundo sua ideia, regras de negócio e objetivo, sem compromisso." },
  { t: "2. Proposta Clara & Transparente", d: "Definimos o escopo, cronograma de entregas e investimento de forma justa." },
  { t: "3. Desenvolvimento Ágil", d: "Você acompanha cada tela e versão do sistema em tempo real durante a criação." },
  { t: "4. Publicação & Suporte Contínuo", d: "Lançamento oficial com garantia, suporte e acompanhamento pós-entrega." },
];

const appsShowcase = [
  {
    id: "delivery",
    title: "GeevFood Delivery & Gestão",
    category: "Mobile App (Android / iOS) + Painel Web",
    badge: "Disponível para Demonstração",
    badgeClass: "badge-green",
    image: "/mockup-delivery.jpg",
    desc: "Aplicativo completo de delivery com cardápio dinâmico, checkout inteligente, integração direta com WhatsApp e PIX automático, acompanhado de painel web para gestão de pedidos em tempo real.",
    tags: ["React Native", "Next.js", "PIX Automático", "Push Notification", "Cloud Database"],
    features: [
      "Rastreamento de pedidos em tempo real",
      "Notificações push direto no celular",
      "Painel de pedidos para cozinha e entregador",
      "Gestão de cupons, taxas e cardápio"
    ],
    waMessage: "Olá Getulio! Gostaria de ver a demonstração do GeevFood Delivery."
  },
  {
    id: "saas",
    title: "GeevGestão Pro - SaaS Empresarial",
    category: "Plataforma Web SaaS & Dashboard ERP",
    badge: "Em Demonstração",
    badgeClass: "badge-purple",
    image: "/mockup-saas.jpg",
    desc: "Sistema web moderno para gestão financeira, controle de clientes (CRM), faturamento, relatórios analíticos interativos e emissão de orçamentos para prestadores de serviço e empresas.",
    tags: ["Next.js / React", "TypeScript", "PostgreSQL", "Gráficos Interativos", "Multi-tenancy"],
    features: [
      "Dashboard analítico com métricas em tempo real",
      "Fluxo de caixa e conciliação financeira",
      "Controle de clientes e histórico de compras",
      "Exportação de relatórios em PDF e planilhas"
    ],
    waMessage: "Olá Getulio! Tenho interesse em testar a demonstração do GeevGestão Pro."
  },
  {
    id: "agendamento",
    title: "GeevAgendamento Pro",
    category: "Mobile App & Web Multiplataforma",
    badge: "Disponível para Teste",
    badgeClass: "badge-green",
    image: "/mockup-agendamento.jpg",
    desc: "Plataforma de agendamento online com confirmação automática pelo WhatsApp para clínicas, barbearias, salões de beleza e consultorias, reduzindo faltas e organizando a agenda.",
    tags: ["React Native", "Tailwind CSS", "WhatsApp Bot", "Google Calendar Sync", "Cloud"],
    features: [
      "Agendamento 24h sem necessidade de atendimento manual",
      "Lembrete automático para clientes via WhatsApp",
      "Controle de horários e comissões por profissional",
      "Pagamento de sinal de reserva integrado"
    ],
    waMessage: "Olá Getulio! Quero agendar uma demonstração do GeevAgendamento Pro."
  }
];

const techSkills = [
  "React Native (Android & iOS)",
  "Next.js 15 & React",
  "TypeScript",
  "Node.js & Express",
  "Tailwind CSS",
  "PostgreSQL & MySQL",
  "Docker & DevOps",
  "REST APIs & GraphQL",
  "Vercel & AWS Cloud",
  "Integrações de Pagamento (PIX, Stripe)"
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Geevheit Software Solutions",
    description: "Desenvolvimento profissional de aplicativos mobile (Android e iOS), sistemas web, sites e landing pages.",
    telephone: "+5511972808075",
    email: EMAIL,
    areaServed: "BR",
    address: { 
      "@type": "PostalAddress", 
      addressLocality: "São Paulo", 
      addressRegion: "SP", 
      addressCountry: "BR" 
    },
  };

  return (
    <>
      <Parallax />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Geevheit Software Solutions">
            <Image src="/logo.jpg" alt="Logo Geevheit" width={42} height={42} />
            <div>
              <span className="grad-text">Geevheit</span>
              <small>Software Solutions</small>
            </div>
          </a>
          <nav className="nav" aria-label="Navegação Principal">
            <a href="#vitrine" className="nav-highlight">
              📱 Vitrine de Apps
            </a>
            <a href="#services">Serviços</a>
            <a href="#process">Como funciona</a>
            <a href="#about">Sobre</a>
            <a href="#contact">Contato</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero">
          <div className="blob blob-a" data-parallax="0.25" aria-hidden />
          <div className="blob blob-b" data-parallax="-0.15" aria-hidden />
          <div className="container">
            <div className="hero-grid">
              <div className="fade-up">
                <div className="status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  <span>Disponível para novos projetos e contratos</span>
                </div>
                
                <h1 className="grad-text">
                  Seu negócio online, gerando clientes todos os dias
                </h1>
                
                <p className="lead">
                  Transformamos suas ideias em aplicativos móveis de alto padrão, sistemas web inteligentes e sites modernos orientados à máxima conversão.
                </p>
                
                <div className="hero-actions">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <span>Falar no WhatsApp</span>
                  </a>
                  <a href="#vitrine" className="btn btn-primary">
                    <span>Ver Vitrine de Apps</span>
                  </a>
                  <a href="#orcamento" className="btn btn-outline">
                    Pedir orçamento
                  </a>
                </div>

                <ul className="hero-points">
                  <li>Atendimento ágil e consultoria técnica direto com o desenvolvedor</li>
                  <li>Aplicativos nativos e híbridos para Android e iOS prontos para as lojas</li>
                  <li>Sistemas sob medida e sites rápidos com nota máxima no Google</li>
                </ul>
              </div>

              <div className="hero-img fade-up" data-parallax="0.08">
                <Image 
                  src="/fotoapresentacao03.jpg" 
                  alt="Tecnologia de ponta e desenvolvimento de software - Geevheit" 
                  width={600} 
                  height={480} 
                  priority 
                  style={{ width: "100%", height: "auto" }} 
                />
              </div>
            </div>

            {/* Banner de Estatísticas e Destaques */}
            <div className="stats-banner">
              <div className="stat-item">
                <span className="stat-num grad-text">+15</span>
                <span className="stat-label">Projetos Entregues</span>
              </div>
              <div className="stat-item">
                <span className="stat-num grad-text">Android & iOS</span>
                <span className="stat-label">Mobile Multiplataforma</span>
              </div>
              <div className="stat-item">
                <span className="stat-num grad-text">100%</span>
                <span className="stat-label">Código Limpo & Autoral</span>
              </div>
              <div className="stat-item">
                <span className="stat-num grad-text">24/7</span>
                <span className="stat-label">Suporte & Acompanhamento</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Strip */}
        <section className="tech-strip">
          <div className="container">
            <div className="tech-pills">
              {techSkills.map((tech) => (
                <span key={tech} className="tech-pill">
                  ⚡ {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO: Vitrine de Aplicativos & Demonstrações */}
        <section id="vitrine" className="section section-alt vitrine-section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="vitrine-badge-top">📱 Portfólio & Demonstrações Interativas</span>
              <h2 className="section-title grad-text">Vitrine de Aplicativos</h2>
              <p className="section-sub">
                Explore demonstrações práticas dos nossos aplicativos e sistemas. Veja a qualidade visual, velocidade e recursos que podemos implementar para a sua empresa.
              </p>
            </div>

            <div className="vitrine-grid">
              {appsShowcase.map((app) => (
                <article key={app.id} className="vitrine-card">
                  <div className="vitrine-img-wrap">
                    <span className={`vitrine-status ${app.badgeClass}`}>{app.badge}</span>
                    <Image 
                      src={app.image} 
                      alt={`Demonstração do aplicativo ${app.title}`}
                      width={640} 
                      height={360} 
                      loading="lazy"
                    />
                  </div>

                  <div className="vitrine-body">
                    <span className="vitrine-category">{app.category}</span>
                    <h3 className="vitrine-title">{app.title}</h3>
                    <p className="vitrine-desc">{app.desc}</p>

                    <div className="vitrine-tags">
                      {app.tags.map((tag) => (
                        <span key={tag} className="vitrine-tag">{tag}</span>
                      ))}
                    </div>

                    <ul className="vitrine-features">
                      {app.features.map((feat) => (
                        <li key={feat}>{feat}</li>
                      ))}
                    </ul>

                    <div className="vitrine-actions">
                      <a 
                        href={`https://wa.me/5511972808075?text=${encodeURIComponent(app.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        📲 Ver Demonstração
                      </a>
                      <a 
                        href="#orcamento"
                        className="btn btn-outline btn-sm"
                      >
                        Pedir Similar
                      </a>
                    </div>
                  </div>
                </article>
              ))}

              {/* Card Especial para Encomendar um App Personalizado */}
              <article className="vitrine-card vitrine-custom-card">
                <div className="vitrine-custom-icon">
                  💡
                </div>
                <span className="vitrine-category">Desenvolvimento Sob Medida</span>
                <h3 className="vitrine-title" style={{ marginTop: "0.25rem" }}>
                  Tem uma ideia de aplicativo?
                </h3>
                <p className="vitrine-desc" style={{ maxWidth: 320 }}>
                  Criamos seu aplicativo exclusivo do zero para Android e iOS, com design personalizado, banco de dados em nuvem e publicação completa nas lojas oficiais.
                </p>
                <div style={{ marginTop: "1rem", width: "100%", maxWidth: 280 }}>
                  <a 
                    href={`https://wa.me/5511972808075?text=${encodeURIComponent("Olá Getulio! Tenho uma ideia de aplicativo novo e gostaria de fazer um orçamento.")}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp" 
                    style={{ width: "100%" }}
                  >
                    💬 Tirar ideia do papel
                  </a>
                </div>
              </article>
            </div>

            {/* Banner CTA da Vitrine */}
            <div className="demo-cta-box">
              <div className="demo-cta-content">
                <h3 className="grad-text">Quer testar um dos aplicativos no seu celular?</h3>
                <p>
                  Agende uma demonstração ao vivo ou receba o link de testes direto no seu WhatsApp para experimentar a fluidez de nossas soluções.
                </p>
              </div>
              <a 
                href={`https://wa.me/5511972808075?text=${encodeURIComponent("Olá Getulio! Gostaria de testar uma demonstração de aplicativo no meu celular.")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Solicitar Teste Agora
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Serviços */}
        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title grad-text">O que desenvolvemos</h2>
            <p className="section-sub">
              Soluções completas com tecnologia de ponta para empresas e empreendedores que buscam autoridade e resultados.
            </p>
            <div className="cards">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <div className="icon" aria-hidden>{s.icon}</div>
                  <h3 className="grad-text">{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href="#orcamento" className="btn btn-primary">
                Solicitar Proposta sem Compromisso
              </a>
            </div>
          </div>
        </section>

        {/* Processo / Como Funciona */}
        <section id="process" className="section section-alt">
          <div className="container">
            <h2 className="section-title grad-text">Como funciona</h2>
            <p className="section-sub">Processo ágil, seguro e 100% transparente do primeiro contato até o pós-lançamento.</p>
            <div className="steps">
              {steps.map((s) => (
                <div key={s.t} className="step">
                  <div className="num">✓</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Sobre Getulio Moreira */}
        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-img" data-parallax="0.06">
              <Image 
                src="/fotoapresentacao02.jpg" 
                alt="Getulio Moreira, fundador da Geevheit Software Solutions" 
                width={500} 
                height={500} 
              />
            </div>
            <div className="about-text">
              <span className="badge">Fundador & Engenheiro Responsável</span>
              <h2 className="grad-text">
                Quem vai cuidar do seu projeto
              </h2>
              <p>
                Olá! Sou <b>Getulio Moreira</b>, fundador da <b>Geevheit Software Solutions</b>. Formado em <b>Ciências da Computação</b> e estudante de <b>Engenharia de Software</b>.
              </p>
              <p>
                Com ampla experiência em desenvolvimento full stack e mobile, sou especialista na criação de <b>aplicativos para Android e iOS</b>, sistemas corporativos em nuvem e sites projetados estrategicamente para converter tráfego em clientes.
              </p>
              <p>
                Ao trabalhar comigo, você tem a garantia de falar diretamente com quem programa e arquiteta a sua solução, eliminando intermediários, reduzindo custos e garantindo prazos reais.
              </p>

              <div className="about-badges">
                <span className="about-badge">📱 Mobile Android & iOS</span>
                <span className="about-badge">💻 Full Stack & Cloud</span>
                <span className="about-badge">🔒 Segurança & Performance</span>
                <span className="about-badge">🤝 Suporte Direto</span>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <a href="#orcamento" className="btn btn-primary">
                  Iniciar meu projeto com o Getulio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Contato e Formulário */}
        <section id="contact" className="section section-alt">
          <div className="container">
            <h2 className="section-title grad-text">Vamos tirar seu projeto do papel?</h2>
            <p className="section-sub">
              Preencha o formulário abaixo ou fale diretamente comigo no WhatsApp. Retorno rápido e sem compromisso!
            </p>
            <div className="contact-grid">
              <LeadForm />
              
              <div className="card">
                <h3 className="grad-text" style={{ marginBottom: "1.5rem", fontSize: "1.3rem" }}>
                  Informações de Contato
                </h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="ic" aria-hidden="true">📞</span>
                    <div>
                      <small>Telefone & WhatsApp</small>
                      <a href="tel:+5511972808075">(11) 97280-8075</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="ic" aria-hidden="true">📧</span>
                    <div>
                      <small>E-mail Profissional</small>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="ic" aria-hidden="true">📍</span>
                    <div>
                      <small>Localização</small>
                      <strong>São Paulo - SP, Brasil (Atendimento Nacional)</strong>
                    </div>
                  </div>
                </div>

                <div className="stack">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    Chamar no WhatsApp agora
                  </a>
                  <a href={`mailto:${EMAIL}`} className="btn btn-outline">
                    Enviar e-mail formal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href={WA_LINK} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="wa-float" 
        aria-label="Falar conosco pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.5A11.6 11.6 0 1 1 16 27.5zm6.4-8.6c-.3-.2-2-.1-2.3.2-.3.3-.6.7-.8.9-.1.2-.3.2-.6.1a8.5 8.5 0 0 1-3.4-2.1 9.4 9.4 0 0 1-2.3-2.9c-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1.1.5-.4.5-1.5 1.5-1.5 3.6 0 2.2 1.6 4.3 1.8 4.6.2.3 3.1 4.8 7.6 6.7 1.1.5 1.9.7 2.6.9 1.1.4 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.7-.5z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Geevheit Software Solutions. Todos os direitos reservados.</p>
          <p style={{ fontSize: "0.88rem", color: "#64748b" }}>
            Desenvolvido com excelência técnica por <strong>Getulio Moreira</strong> — Ciências da Computação & Engenharia de Software.
          </p>
        </div>
      </footer>
    </>
  );
}
