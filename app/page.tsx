import Image from "next/image";

const styles = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out;
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }
  .hover-glow:hover {
    box-shadow: 0 0 30px rgba(34, 211, 238, 0.5) !important;
    transform: translateY(-5px);
  }
  .hover-glow {
    transition: all 0.3s ease-in-out;
  }
`;

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <style>{styles}</style>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-500/20">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3 animate-fade-in-down">
            <Image src="/logo.jpg" alt="Geevheith Technology Solutions" width={48} height={48} className="rounded-lg" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Geevheith</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="text-slate-200 hover:text-cyan-300 transition duration-300 font-semibold text-base relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-slate-200 hover:text-cyan-300 transition duration-300 font-semibold text-base relative group">
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate-200 hover:text-cyan-300 transition duration-300 font-semibold text-base relative group">
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
        <div className="relative group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
      <section id="services" className="px-8 py-32 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Serviços</h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Soluções completas em desenvolvimento de software, adaptadas às suas necessidades</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Desenvolvimento de Apps", icon: "📱", desc: "Aplicativos móveis nativos e multiplataforma com foco em experiência do usuário" },
              { title: "Sistemas Web", icon: "🌐", desc: "Plataformas web robustas e escaláveis para seu negócio" },
              { title: "Criação de Sites", icon: "💻", desc: "Websites modernos, responsivos e otimizados para conversão" },
              { title: "Landing Pages", icon: "🚀", desc: "Páginas de destaque de alto desempenho e design impactante" },
            ].map((service, idx) => (
              <div
                key={service.title}
                className="group relative hover-glow"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur border border-cyan-500/20 p-8 rounded-2xl group-hover:border-cyan-500/50 transition duration-300 h-full flex flex-col">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-cyan-400 leading-tight">{service.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed flex-grow">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-32 grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
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
            <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">Sobre o Fundador</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            Olá! Sou <span className="text-cyan-400 font-bold">Getulio Moreira</span>, fundador da Geevheith Technology Solutions. Possuo formação em <span className="text-cyan-400 font-bold">Ciências da Computação</span> e sou estudante de <span className="text-cyan-400 font-bold">Engenharia de Software</span>, com especialização em desenvolvimento de sistemas web, aplicativos mobile e sites profissionais.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Minha paixão é criar soluções digitais inovadoras e escaláveis que transformam ideias em produtos reais. Trabalho com as tecnologias mais modernas para garantir qualidade, performance e segurança em cada projeto.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Acredito no poder da tecnologia para impulsionar negócios e mudar vidas. Estou sempre em busca de novos desafios e oportunidades para crescer e aprender.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-32 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Entre em Contato</h3>
            <p className="text-slate-300 text-lg">Vamos conversar sobre seu próximo projeto</p>
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
                <p className="text-center text-cyan-400 font-bold text-xl mb-1">Getulio Moreira</p>
                <p className="text-center text-slate-400 text-sm font-medium">Fundador & Desenvolvedor Sênior</p>
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
                      <p className="text-slate-400 text-sm font-medium mb-1">Telefone</p>
                      <a href="tel:+5511972808075" className="text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition hover:underline">(11) 97280-8075</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">📧</span>
                    <div className="flex-grow">
                      <p className="text-slate-400 text-sm font-medium mb-1">Email</p>
                      <a href="mailto:getuliomoreira.engsoftware@gmail.com" className="text-cyan-400 font-semibold hover:text-cyan-300 transition hover:underline break-all text-sm">getuliomoreira.engsoftware@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">📍</span>
                    <div className="flex-grow">
                      <p className="text-slate-400 text-sm font-medium mb-1">Localização</p>
                      <p className="text-slate-300 font-semibold">São Paulo - SP, Brasil</p>
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
        <p className="mb-2">© {new Date().getFullYear()} Geevheith Technology Solutions. Todos os direitos reservados.</p>
        <p className="text-xs text-slate-600">Desenvolvido por Getulio Moreira</p>
      </footer>
    </main>
  );
}
