import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#cbd5e1",
      }}
    >
      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1); } 50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.15); } }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        .fade-up { animation: slideUp 0.8s ease-out; }
        .service-card { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); border: 2px solid rgba(34, 211, 238, 0.4); background: linear-gradient(135deg, rgba(51, 65, 85, 0.6) 0%, rgba(30, 41, 59, 0.4) 100%); position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent 30%, rgba(34, 211, 238, 0.1) 50%, transparent 70%); transform: rotate(45deg); animation: shimmer 3s infinite; }
        @keyframes shimmer { 0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); } 100% { transform: translateX(100%) translateY(100%) rotate(45deg); } }
        .service-card:hover { transform: translateY(-8px) scale(1.02); border-color: rgba(34, 211, 238, 0.8); box-shadow: 0 20px 50px rgba(34, 211, 238, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(59, 130, 246, 0.2); animation: glow 2s ease-in-out infinite; }
        .hover-lift { transition: all 0.3s ease; }
        .menu-link {
          position: relative;
          color: #cbd5e1;
          text-decoration: none;
          cursor: pointer;
          padding-bottom: 2px;
          background: linear-gradient(90deg, #22d3ee, #3b82f6, #22d3ee);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: color 0.2s;
        }
        .menu-link::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 3px;
          border-radius: 2px;
          background: linear-gradient(90deg, #22d3ee, #3b82f6, #22d3ee);
          background-size: 200% 200%;
          background-position: 0% 50%;
          opacity: 0;
          transition: opacity 0.3s, background-position 0.6s;
        }
        .menu-link:hover {
          animation: gradientMove 1.5s linear infinite alternate;
        }
        .menu-link:hover::after {
          opacity: 1;
          background-position: 100% 50%;
        }
      `}</style>

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "2px solid rgba(34, 211, 238, 0.4)",
          boxShadow:
            "0 4px 30px rgba(34, 211, 238, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              style={{ borderRadius: "8px" }}
            />
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #22d3ee, #3b82f6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Geevheith
            </h1>
          </div>
          <nav style={{ display: "flex", gap: "2rem", fontSize: "0.9rem" }}>
            <a href="#services" className="menu-link">
              Serviços
            </a>
            <a href="#about" className="menu-link">
              Sobre
            </a>
            <a href="#contact" className="menu-link">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div
          className="fade-up"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              background:
                "linear-gradient(to right, #22d3ee, #06b6d4, #3b82f6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: "1.2",
            }}
          >
            Soluções Digitais Sob Medida
          </h2>
          <p
            style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.6" }}
          >
            Desenvolvimento de aplicativos, sistemas web e sites profissionais
            para impulsionar seu negócio com tecnologia moderna e segura.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "linear-gradient(to right, #06b6d4, #3b82f6)",
              color: "#0f172a",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              width: "fit-content",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Fale Conosco
          </a>
        </div>
        <div
          className="fade-up hover-lift"
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            background: "linear-gradient(to bottom right, #22d3ee, #3b82f6)",
          }}
        >
          <Image
            src="/fotoapresentacao03.jpg"
            alt="Tecnologia"
            width={500}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "4rem 2rem",
          background: "rgba(30, 41, 59, 0.5)",
          borderTop: "2px solid rgba(34, 211, 238, 0.5)",
          borderBottom: "2px solid rgba(34, 211, 238, 0.5)",
          boxShadow: "inset 0 0 50px rgba(34, 211, 238, 0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "3rem",
              background: "linear-gradient(to right, #22d3ee, #3b82f6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Serviços
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: "📱",
                title: "Desenvolvimento de Apps",
                desc: "Aplicativos móveis nativos e multiplataforma",
              },
              {
                icon: "🌐",
                title: "Sistemas Web",
                desc: "Plataformas web robustas e escaláveis",
              },
              {
                icon: "💻",
                title: "Criação de Sites",
                desc: "Websites modernos e responsivos",
              },
              {
                icon: "🚀",
                title: "Landing Pages",
                desc: "Páginas de destaque de alto desempenho",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="service-card"
                style={{
                  padding: "2rem",
                  borderRadius: "1.2rem",
                  backdropFilter: "blur(15px)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
                    {service.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      background: "linear-gradient(to right, #22d3ee, #06b6d4)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.title}
                  </h4>
                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="fade-up hover-lift"
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            background: "linear-gradient(to bottom right, #22d3ee, #3b82f6)",
            minWidth: 0,
            flex: "0 1 500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            maxWidth: "500px",
          }}
        >
          <Image
            src="/fotoapresentacao02.jpg"
            alt="Getulio"
            width={500}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            flex: "0 1 500px",
            maxWidth: "500px",
            minWidth: 0,
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "900",
                background: "linear-gradient(to right, #22d3ee, #3b82f6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
              }}
            >
              Sobre o Fundador
            </h3>
            <div
              style={{
                height: "4px",
                width: "100px",
                background: "linear-gradient(to right, #22d3ee, #3b82f6)",
                borderRadius: "2px",
                margin: "0 auto",
              }}
            ></div>
          </div>
          <p
            style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.6" }}
          >
            Olá! Sou{" "}
            <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
              Getulio Moreira
            </span>
            , fundador da Geevheith Technology Solutions. Sou formado em{" "}
            <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
              Ciências da Computação
            </span>{" "}
            e atualmente estudante de{" "}
            <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
              Engenharia de Software
            </span>
            , com foco no desenvolvimento de soluções tecnológicas modernas e
            escaláveis.
          </p>
          <p
            style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.6" }}
          >
            Possuo especialização no desenvolvimento de aplicativos para{" "}
            <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
              Android e iOS
            </span>
            , além da criação de sistemas web, sites profissionais e landing
            pages orientadas à conversão. Atuo desde o planejamento da solução
            até a entrega final, sempre aplicando boas práticas de engenharia de
            software, arquitetura limpa e foco em performance e segurança.
          </p>
          <p
            style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.6" }}
          >
            Minha paixão é transformar ideias em produtos digitais reais,
            confiáveis e eficientes, ajudando empresas e profissionais a
            crescerem por meio da tecnologia, inovação e design funcional.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          background: "rgba(30, 41, 59, 0.5)",
          borderTop: "2px solid rgba(34, 211, 238, 0.5)",
          boxShadow: "inset 0 0 50px rgba(34, 211, 238, 0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "3rem",
              background: "linear-gradient(to right, #22d3ee, #3b82f6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Entre em Contato
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {/* Card Foto */}
            <div
              className="service-card"
              style={{
                padding: "2rem",
                borderRadius: "1.2rem",
                backdropFilter: "blur(15px)",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ position: "relative", zIndex: 2 }}>
                <Image
                  src="/foto03site.jpg"
                  alt="Getulio"
                  width={200}
                  height={200}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    margin: "0 auto 1.5rem",
                    objectFit: "cover",
                    objectPosition: "top",
                    border: "3px solid rgba(34, 211, 238, 0.6)",
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.3rem",
                    background: "linear-gradient(to right, #22d3ee, #06b6d4)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    marginBottom: "0.25rem",
                  }}
                >
                  Getulio Moreira
                </p>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                  Fundador & Desenvolvedor Sênior
                </p>
              </div>
            </div>
            {/* Card Info */}
            <div
              className="service-card"
              style={{
                padding: "2rem",
                borderRadius: "1.2rem",
                backdropFilter: "blur(15px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>📞</span>
                    <div>
                      <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                        Telefone e WhatsApp
                      </p>
                      <a
                        href="tel:+5511972808075"
                        style={{
                          color: "#22d3ee",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        (11) 97280-8075
                      </a>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>📧</span>
                    <div>
                      <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                        Email
                      </p>
                      <a
                        href="mailto:getuliomoreira.engsoftware@gmail.com"
                        style={{
                          color: "#22d3ee",
                          fontWeight: "bold",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                        }}
                      >
                        geevheitmoreira@gmail.com
                      </a>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>📍</span>
                    <div>
                      <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                        Localização
                      </p>
                      <p style={{ color: "#cbd5e1", fontWeight: "bold" }}>
                        São Paulo - SP, Brasil
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <a
                    href="mailto:getuliomoreira.engsoftware@gmail.com"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                      color: "#0f172a",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      marginTop: "1rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Enviar Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Google Forms */}
          <div
            style={{
              margin: "2rem auto 0 auto",
              maxWidth: 350,
              background: "rgba(15,23,42,0.7)",
              borderRadius: 10,
              boxShadow: "0 2px 12px rgba(34,211,238,0.08)",
              padding: "0.75rem 1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                textAlign: "center",
                color: "#cbd5e1",
                fontSize: "0.98rem",
                marginBottom: "0.7rem",
              }}
            >
              Deseja um orçamento? Responda nosso formulário para entendermos melhor
              sua necessidade.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSey4qxZ_fZpSRj72xZv_ZR_C-uVnmRRT_lqjPfeDvT7jN8SJg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                margin: "0 auto",
                padding: "0.6rem 1.2rem",
                background: "linear-gradient(90deg, #22d3ee, #3b82f6)",
                color: "#0f172a",
                fontWeight: "bold",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(34,211,238,0.10)",
                fontSize: "0.95rem",
                transition: "all 0.2s",
                textAlign: "center",
              }}
            >
              Abrir formulário
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "#64748b",
          fontSize: "0.9rem",
          borderTop: "2px solid rgba(34, 211, 238, 0.4)",
          background: "rgba(15, 23, 42, 0.8)",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>
          © {new Date().getFullYear()} Geevheith Software Solutions. Todos os
          direitos reservados.
        </p>
        <p style={{ fontSize: "0.85rem", color: "#475569" }}>
          Desenvolvido por Getulio Moreira
        </p>
      </footer>
    </main>
  );
}
