import Image from "next/image";
import LeadForm from "./LeadForm";
import Parallax from "./Parallax";

const WA_LINK =
  "https://wa.me/5511972808075?text=" +
  encodeURIComponent("Olá! Vi o site da Geevheit Software Solutions e gostaria de um orçamento.");
const EMAIL = "geevheittecnology@gmail.com";

const services = [
  { icon: "📱", title: "Aplicativos", desc: "Apps Android e iOS para levar seu negócio ao bolso do cliente." },
  { icon: "🌐", title: "Sistemas Web", desc: "Plataformas sob medida para automatizar e escalar sua operação." },
  { icon: "💻", title: "Sites Profissionais", desc: "Sites rápidos, responsivos e otimizados para o Google." },
  { icon: "🚀", title: "Landing Pages", desc: "Páginas focadas em conversão para transformar visitas em clientes." },
];

const steps = [
  { t: "Conversa inicial", d: "Entendemos seu objetivo, sem compromisso." },
  { t: "Proposta clara", d: "Escopo, prazo e valor definidos antes de começar." },
  { t: "Desenvolvimento", d: "Você acompanha cada etapa até a entrega." },
  { t: "Suporte", d: "Acompanhamento após a publicação." },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Geevheit Software Solutions",
    description: "Desenvolvimento de apps, sistemas web, sites e landing pages.",
    telephone: "+5511972808075",
    email: EMAIL,
    areaServed: "BR",
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
  };

  return (
    <>
      <Parallax />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <Image src="/logo.jpg" alt="Logo Geevheit" width={40} height={40} />
            <span className="grad-text">Geevheit</span>
          </a>
          <nav className="nav" aria-label="Principal">
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
        <section className="hero">
          <div className="blob blob-a" data-parallax="0.25" aria-hidden />
          <div className="blob blob-b" data-parallax="-0.15" aria-hidden />
          <div className="container hero-grid">
            <div className="fade-up">
              <span className="badge">Orçamento gratuito e sem compromisso</span>
              <h1 className="grad-text" style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.25rem" }}>
                Seu negócio online, gerando clientes todos os dias
              </h1>
              <p className="lead" style={{ fontSize: "1.15rem", color: "#cbd5e1", marginBottom: "1.75rem", maxWidth: 560 }}>
                Criamos sites, landing pages, sistemas web e aplicativos sob medida,
                rápidos e prontos para converter visitantes em clientes.
              </p>
              <div className="hero-actions">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  Falar no WhatsApp
                </a>
                <a href="#orcamento" className="btn btn-outline">
                  Pedir orçamento
                </a>
              </div>
              <ul className="hero-points">
                <li>Resposta rápida pelo WhatsApp</li>
                <li>Design moderno e responsivo (celular e computador)</li>
                <li>Do planejamento à entrega, com suporte</li>
              </ul>
            </div>
            <div className="hero-img fade-up" data-parallax="0.08">
              <Image src="/fotoapresentacao03.jpg" alt="Tecnologia e desenvolvimento" width={600} height={480} priority style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <h2 className="section-title grad-text">O que fazemos</h2>
            <p className="section-sub">Soluções digitais completas para empresas e profissionais.</p>
            <div className="cards">
              {services.map((s) => (
                <article key={s.title} className="card">
                  <div className="icon" aria-hidden>{s.icon}</div>
                  <h3 className="grad-text" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a href="#orcamento" className="btn btn-primary">Quero um orçamento</a>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <h2 className="section-title grad-text">Como funciona</h2>
            <p className="section-sub">Processo simples e transparente.</p>
            <div className="steps">
              {steps.map((s, i) => (
                <div key={s.t} className="step">
                  <div className="num">{i + 1}</div>
                  <h3 style={{ fontSize: "1.05rem" }}>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container about-grid">
            <div className="about-img" data-parallax="0.06">
              <Image src="/fotoapresentacao02.jpg" alt="Getulio Moreira, fundador" width={500} height={500} />
            </div>
            <div className="about-text">
              <h2 className="grad-text" style={{ fontSize: "clamp(1.8rem,4vw,2.4rem)", fontWeight: 800, marginBottom: "1rem" }}>
                Quem vai cuidar do seu projeto
              </h2>
              <p>
                Olá! Sou <b>Getulio Moreira</b>, fundador da Geevheit Software Solutions. Sou formado em{" "}
                <b>Ciências da Computação</b> e estudante de <b>Engenharia de Software</b>.
              </p>
              <p>
                Especialista em apps <b>Android e iOS</b>, sistemas web, sites profissionais e landing pages
                orientadas à conversão. Atuo do planejamento à entrega final, com foco em performance e segurança.
              </p>
              <p>
                Minha missão é transformar ideias em produtos digitais confiáveis para que seu negócio cresça.
              </p>
              <a href="#orcamento" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
                Vamos conversar
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title grad-text">Vamos tirar seu projeto do papel?</h2>
            <p className="section-sub">Preencha o formulário ou fale direto comigo. Respondo rápido.</p>
            <div className="contact-grid">
              <LeadForm />
              <div className="card">
                <div className="info-list">
                  <div className="info-item">
                    <span className="ic">📞</span>
                    <div>
                      <small>Telefone e WhatsApp</small>
                      <a href="tel:+5511972808075">(11) 97280-8075</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="ic">📧</span>
                    <div>
                      <small>E-mail</small>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="ic">📍</span>
                    <div>
                      <small>Localização</small>
                      <strong>São Paulo - SP, Brasil</strong>
                    </div>
                  </div>
                </div>
                <div className="stack">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    Chamar no WhatsApp
                  </a>
                  <a href={`mailto:${EMAIL}`} className="btn btn-outline">Enviar e-mail</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Geevheit Software Solutions. Todos os direitos reservados.</p>
        <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>Desenvolvido por Getulio Moreira</p>
      </footer>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.200-3.4-8.500zM12 21.800c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.700 1 1-3.600-.2-.4a9.800 9.800 0 0 1-1.500-5.200C2.200 6.500 6.600 2.100 12 2.100c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 0 1 2.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.100l-.9 1.100c-.2.200-.3.200-.6.100-1.700-.8-2.800-1.500-3.900-3.400-.3-.5.300-.5.800-1.500.1-.2 0-.4 0-.5l-.9-2.100c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.300 5.200 4.600 1.900.8 2.600.9 3.600.7.600-.1 1.800-.7 2-1.400.2-.7.200-1.300.2-1.400-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
    </>
  );
}
