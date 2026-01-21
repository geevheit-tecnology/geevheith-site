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
        .fade-up { animation: slideUp 0.8s ease-out; }
        .hover-lift:hover { box-shadow: 0 20px 40px rgba(34, 211, 238, 0.3); transform: translateY(-5px); }
        .hover-lift { transition: all 0.3s ease; }
      `}</style>

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(34, 211, 238, 0.2)",
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
            <a
              href="#services"
              style={{
                color: "#cbd5e1",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Serviços
            </a>
            <a
              href="#about"
              style={{
                color: "#cbd5e1",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Sobre
            </a>
            <a
              href="#contact"
              style={{
                color: "#cbd5e1",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
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
            src="/fotoapresentacao01.jpg"
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
          borderTop: "1px solid rgba(34, 211, 238, 0.2)",
          borderBottom: "1px solid rgba(34, 211, 238, 0.2)",
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
                className="hover-lift"
                style={{
                  background: "rgba(51, 65, 85, 0.5)",
                  border: "1px solid rgba(34, 211, 238, 0.3)",
                  padding: "2rem",
                  borderRadius: "1rem",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  {service.icon}
                </div>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#22d3ee",
                    marginBottom: "0.5rem",
                  }}
                >
                  {service.title}
                </h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                  {service.desc}
                </p>
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div
          className="fade-up hover-lift"
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            background: "linear-gradient(to bottom right, #22d3ee, #3b82f6)",
          }}
        >
          <Image
            src="/fotoapresentacao02.jpg"
            alt="Getulio"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div>
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
            , fundador da Geevheith Technology Solutions. Possuo formação em{" "}
            <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
              Ciências da Computação
            </span>{" "}
            e sou estudante de{" "}
            <span style={{ color: "#22d3ee", fontWeight: "bold" }}>
              Engenharia de Software
            </span>
            .
          </p>
          <p
            style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.6" }}
          >
            Minha paixão é criar soluções digitais inovadoras e escaláveis que
            transformam ideias em produtos reais, com foco em qualidade,
            performance e segurança.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "4rem 2rem",
          background: "rgba(30, 41, 59, 0.5)",
          borderTop: "1px solid rgba(34, 211, 238, 0.2)",
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
              className="hover-lift"
              style={{
                background: "rgba(51, 65, 85, 0.5)",
                border: "1px solid rgba(34, 211, 238, 0.3)",
                padding: "2rem",
                borderRadius: "1rem",
                backdropFilter: "blur(10px)",
                textAlign: "center",
              }}
            >
              <Image
                src="/foto03site.jpg"
                alt="Getulio"
                width={200}
                height={200}
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  margin: "0 auto 1rem",
                  objectFit: "cover",
                  objectPosition: "top",
                  border: "2px solid rgba(34, 211, 238, 0.3)",
                }}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#22d3ee",
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
            {/* Card Info */}
            <div
              className="hover-lift"
              style={{
                background: "rgba(51, 65, 85, 0.5)",
                border: "1px solid rgba(34, 211, 238, 0.3)",
                padding: "2rem",
                borderRadius: "1rem",
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
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
                      Telefone
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
                      getuliomoreira.engsoftware@gmail.com
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
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "#64748b",
          fontSize: "0.9rem",
          borderTop: "1px solid rgba(34, 211, 238, 0.2)",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>
          © {new Date().getFullYear()} Geevheith Technology Solutions. Todos os
          direitos reservados.
        </p>
        <p style={{ fontSize: "0.85rem", color: "#475569" }}>
          Desenvolvido por Getulio Moreira
        </p>
      </footer>
    </main>
  );
}
