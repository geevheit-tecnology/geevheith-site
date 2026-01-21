import Image from "next/image";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-down { animation: slideDown 0.8s ease-out; }
        .fade-up { animation: slideUp 0.8s ease-out; }
        .hover-lift:hover { box-shadow: 0 20px 40px rgba(34, 211, 238, 0.3); transform: translateY(-5px); transition: all 0.3s ease; }
        .hover-lift { transition: all 0.3s ease; }
      `}</style>

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(34, 211, 238, 0.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} style={{ borderRadius: "8px" }} />
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", background: "linear-gradient(to right, #22d3ee, #3b82f6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Geevheith</h1>
          </div>
          <nav style={{ display: "flex", gap: "2rem", fontSize: "0.9rem" }}>
            <a href="#services" style={{ color: "#cbd5e1", textDecoration: "none", cursor: "pointer" }}>Serviços</a>
            <a href="#about" style={{ color: "#cbd5e1", textDecoration: "none", cursor: "pointer" }}>Sobre</a>
            <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none", cursor: "pointer" }}>Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: "900", background: "linear-gradient(to right, #22d3ee, #06b6d4, #3b82f6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: "1.2" }}>
            Soluções Digitais Sob Medida
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#cbd5e1", lineHeight: "1.6" }}>
            Desenvolvimento de aplicativos, sistemas web e sites profissionais para impulsionar seu negócio com tecnologia moderna e segura.
          </p>
          <a href="#contact" style={{ display: "inline-block", background: "linear-gradient(to right, #06b6d4, #3b82f6)", color: "#0f172a", padding: "1rem 2rem", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", width: "fit-content", cursor: "pointer" }}>
            Fale Conosco
          </a>
        </div>
        <div className="fade-up hover-lift" style={{ borderRadius: "1rem", overflow: "hidden", background: "linear-gradient(to bottom right, #22d3ee, #3b82f6)" }}>
          <Image src="/fotoapresentacao03.jpg" alt="Tecnologia" width={500} height={400} style={{ width: "100%", height: "auto" }} />
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "4rem 2rem", background: "rgba(30, 41, 59, 0.5)", borderTop: "1px solid rgba(34, 211, 238, 0.2)", borderBottom: "1px solid rgba(34, 211, 238, 0.2)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "2.5rem", fontWeight: "900", textAlign: "center", marginBottom: "3rem", background: "linear-gradient(to right, #22d3ee, #3b82f6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Serviços</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "📱", title: "Desenvolvimento de Apps", desc: "Aplicativos móveis nativos e multiplataforma" },
              { icon: "🌐", title: "Sistemas Web", desc: "Plataformas web robustas e escaláveis" },
              { icon: "💻", title: "Criação de Sites", desc: "Websites modernos e responsivos" },
              { icon: "🚀", title: "Landing Pages", desc: "Páginas de destaque de alto desempenho" },
            ].map((service, idx) => (
              <div key={idx} className="hover-lift" style={{ background: "rgba(51, 65, 85, 0.5)", border: "1px solid rgba(34, 211, 238, 0.3)", padding: "2rem", borderRadius: "1rem", backdropFilter: "blur(10px)" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{service.icon}</div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#22d3ee", marginBottom: "0.5rem" }}>{service.title}</h4>
                <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div className="fade-up hover-lift" style={{ borderRadius: "1rem", overflow: "hidden", background: "linear-gradient(to bottom right, #22d3ee, #3b82f6)" }}>
          <Image src="/fotoapresentacao02.jpg" alt="Getulio" width={500} height={500} style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h3 style={{ fontSize: "2.5rem", fontWeight: "900", background: "linear-gradient(to right, #22d3ee, #3b82f6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>Sobre o Fundador</h3>
            <div style={{ height: "4px", width: "100px", background: "linear-gradient(to right, #22d3ee, #3b82f6)", borderRadius: "2px" }}></div>
          </div>
          <p style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.6" }}>
            Olá! Sou <span style={{ color: "#22d3ee", fontWeight: "bold" }}>Getulio Moreira</span>, fundador da Geevheith Technology Solutions. Possuo formação em <span style={{ color: "#22d3ee", fontWeight: "bold" }}>Ciências da Computação</span> e sou estudante de <span style={{ color: "#22d3ee", fontWeight: "bold" }}>Engenharia de Software</span>.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.6" }}>
            Minha paixão é criar soluções digitais inovadoras e escaláveis que transformam ideias em produtos reais, com foco em qualidade, performance e segurança.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "4rem 2rem", background: "rgba(30, 41, 59, 0.5)", borderTop: "1px solid rgba(34, 211, 238, 0.2)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "2.5rem", fontWeight: "900", textAlign: "center", marginBottom: "3rem", background: "linear-gradient(to right, #22d3ee, #3b82f6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Entre em Contato</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>
            {/* Card Foto */}
            <div className="hover-lift" style={{ background: "rgba(51, 65, 85, 0.5)", border: "1px solid rgba(34, 211, 238, 0.3)", padding: "2rem", borderRadius: "1rem", backdropFilter: "blur(10px)", textAlign: "center" }}>
              <Image src="/foto03site.jpg" alt="Getulio" width={200} height={200} style={{ width: "180px", height: "180px", borderRadius: "50%", margin: "0 auto 1rem", objectFit: "cover", objectPosition: "top", border: "2px solid rgba(34, 211, 238, 0.3)" }} />
              <p style={{ fontSize: "1.2rem", color: "#22d3ee", fontWeight: "bold", marginBottom: "0.25rem" }}>Getulio Moreira</p>
              <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Fundador & Desenvolvedor Sênior</p>
            </div>
            {/* Card Info */}
            <div className="hover-lift" style={{ background: "rgba(51, 65, 85, 0.5)", border: "1px solid rgba(34, 211, 238, 0.3)", padding: "2rem", borderRadius: "1rem", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>📞</span>
                  <div>
                    <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Telefone</p>
                    <a href="tel:+5511972808075" style={{ color: "#22d3ee", fontWeight: "bold", textDecoration: "none" }}>(11) 97280-8075</a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>📧</span>
                  <div>
                    <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Email</p>
                    <a href="mailto:getuliomoreira.engsoftware@gmail.com" style={{ color: "#22d3ee", fontWeight: "bold", textDecoration: "none", fontSize: "0.9rem" }}>getuliomoreira.engsoftware@gmail.com</a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>📍</span>
                  <div>
                    <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Localização</p>
                    <p style={{ color: "#cbd5e1", fontWeight: "bold" }}>São Paulo - SP, Brasil</p>
                  </div>
                </div>
              </div>
              <a href="mailto:getuliomoreira.engsoftware@gmail.com" style={{ display: "block", textAlign: "center", background: "linear-gradient(to right, #06b6d4, #3b82f6)", color: "#0f172a", padding: "1rem", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", marginTop: "1rem", cursor: "pointer" }}>
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", textAlign: "center", color: "#64748b", fontSize: "0.9rem", borderTop: "1px solid rgba(34, 211, 238, 0.2)" }}>
        <p style={{ marginBottom: "0.5rem" }}>© {new Date().getFullYear()} Geevheith Technology Solutions. Todos os direitos reservados.</p>
        <p style={{ fontSize: "0.85rem", color: "#475569" }}>Desenvolvido por Getulio Moreira</p>
      </footer>
    </main>
  );
}
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/20">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3 animate-fade-in-down">
            <Image
              src="/logo.jpg"
              alt="Geevheith Technology Solutions"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Geevheith
            </h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a
              href="#services"
              className="text-slate-200 hover:text-cyan-300 transition duration-300 font-semibold text-base relative group"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="text-slate-200 hover:text-cyan-300 transition duration-300 font-semibold text-base relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-slate-200 hover:text-cyan-300 transition duration-300 font-semibold text-base relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 px-8 py-32 items-center max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Soluções Digitais Sob Medida
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Desenvolvimento de aplicativos, sistemas web e sites profissionais
            para impulsionar o seu negócio com tecnologia moderna e segura.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 px-8 py-4 rounded-lg font-bold hover-glow shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
        <div
          className="relative group animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative w-full h-96 bg-gradient-to-br from-cyan-500 to-slate-700 rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/fotoapresentacao03.jpg"
              alt="Tecnologia e desenvolvimento"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="px-8 py-32 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-cyan-500/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Serviços
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Soluções completas em desenvolvimento de software, adaptadas às
              suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Desenvolvimento de Apps",
                icon: "📱",
                desc: "Aplicativos móveis nativos e multiplataforma com foco em experiência do usuário",
              },
              {
                title: "Sistemas Web",
                icon: "🌐",
                desc: "Plataformas web robustas e escaláveis para seu negócio",
              },
              {
                title: "Criação de Sites",
                icon: "💻",
                desc: "Websites modernos, responsivos e otimizados para conversão",
              },
              {
                title: "Landing Pages",
                icon: "🚀",
                desc: "Páginas de destaque de alto desempenho e design impactante",
              },
            ].map((service, idx) => (
              <div
                key={service.title}
                className="group relative hover-glow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur border border-cyan-500/20 p-8 rounded-2xl group-hover:border-cyan-500/50 transition duration-300 h-full flex flex-col">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-cyan-400 leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed flex-grow">
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
        className="px-8 py-32 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
      >
        <div className="relative group order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative w-full h-96 bg-gradient-to-br from-cyan-500 to-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/fotoapresentacao02.jpg"
              alt="Getulio Moreira - Fundador"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <div>
            <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Sobre o Fundador
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            Olá! Sou{" "}
            <span className="text-cyan-400 font-bold">Getulio Moreira</span>,
            fundador da Geevheith Technology Solutions. Possuo formação em{" "}
            <span className="text-cyan-400 font-bold">
              Ciências da Computação
            </span>{" "}
            e sou estudante de{" "}
            <span className="text-cyan-400 font-bold">
              Engenharia de Software
            </span>
            , com especialização em desenvolvimento de sistemas web, aplicativos
            mobile e sites profissionais.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Minha paixão é criar soluções digitais inovadoras e escaláveis que
            transformam ideias em produtos reais. Trabalho com as tecnologias
            mais modernas para garantir qualidade, performance e segurança em
            cada projeto.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Acredito no poder da tecnologia para impulsionar negócios e mudar
            vidas. Estou sempre em busca de novos desafios e oportunidades para
            crescer e aprender.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 py-32 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-cyan-500/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Entre em Contato
            </h3>
            <p className="text-slate-300 text-lg">
              Vamos conversar sobre seu próximo projeto
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Foto de contato */}
            <div className="group hover-glow relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur border border-cyan-500/20 p-8 rounded-2xl group-hover:border-cyan-500/50 transition duration-300 flex flex-col items-center">
                <div className="relative w-44 h-44 mb-6 overflow-hidden rounded-full border-2 border-cyan-500/30 flex-shrink-0">
                  <Image
                    src="/foto03site.jpg"
                    alt="Getulio Moreira"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-center text-cyan-400 font-bold text-xl mb-1">
                  Getulio Moreira
                </p>
                <p className="text-center text-slate-400 text-sm font-medium">
                  Fundador & Desenvolvedor Sênior
                </p>
              </div>
            </div>
            {/* Informações de contato */}
            <div className="group hover-glow relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur border border-cyan-500/20 p-8 rounded-2xl group-hover:border-cyan-500/50 transition duration-300 flex flex-col justify-between h-full">
                <div className="space-y-8 mb-8">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">📞</span>
                    <div className="flex-grow">
                      <p className="text-slate-400 text-sm font-medium mb-1">
                        Telefone
                      </p>
                      <a
                        href="tel:+5511972808075"
                        className="text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition hover:underline"
                      >
                        (11) 97280-8075
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">📧</span>
                    <div className="flex-grow">
                      <p className="text-slate-400 text-sm font-medium mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:getuliomoreira.engsoftware@gmail.com"
                        className="text-cyan-400 font-semibold hover:text-cyan-300 transition hover:underline break-all text-sm"
                      >
                        getuliomoreira.engsoftware@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">📍</span>
                    <div className="flex-grow">
                      <p className="text-slate-400 text-sm font-medium mb-1">
                        Localização
                      </p>
                      <p className="text-slate-300 font-semibold">
                        São Paulo - SP, Brasil
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:getuliomoreira.engsoftware@gmail.com"
                  className="block text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-slate-500 text-sm border-t border-cyan-500/20 bg-slate-950/50 backdrop-blur">
        <p className="mb-2">
          © {new Date().getFullYear()} Geevheith Technology Solutions. Todos os
          direitos reservados.
        </p>
        <p className="text-xs text-slate-600">
          Desenvolvido por Getulio Moreira
        </p>
      </footer>
    </main>
  );
}
