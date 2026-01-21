import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Geevheith Technology Solutions" width={48} height={48} />
          <h1 className="text-xl font-bold">Geevheith Technology Solutions</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">Serviços</a>
          <a href="#about" className="hover:text-white">Sobre</a>
          <a href="#contact" className="hover:text-white">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 px-8 py-20 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Soluções Digitais Sob Medida</h2>
          <p className="text-slate-300 mb-6">
            Desenvolvimento de aplicativos, sistemas web e sites profissionais
            para impulsionar o seu negócio com tecnologia moderna e segura.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400"
          >
            Fale Conosco
          </a>
        </div>
        <Image
          src="/pexels-negativespace-34600.jpg"
          alt="Tecnologia e desenvolvimento"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-20 bg-slate-900">
        <h3 className="text-3xl font-bold mb-12 text-center">Serviços</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Desenvolvimento de Apps",
            "Sistemas Web",
            "Criação de Sites",
            "Landing Pages",
          ].map((service) => (
            <div
              key={service}
              className="bg-slate-800 p-6 rounded-2xl shadow hover:shadow-cyan-500/20"
            >
              <h4 className="font-semibold text-lg mb-2">{service}</h4>
              <p className="text-sm text-slate-400">
                Soluções modernas, escaláveis e focadas em resultados reais para o seu negócio.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/foto01site.jpeg"
          alt="Fundador da Geevheith"
          width={500}
          height={500}
          className="rounded-2xl"
        />
        <div>
          <h3 className="text-3xl font-bold mb-4">Sobre a Empresa</h3>
          <p className="text-slate-300 mb-4">
            A Geevheith Technology Solutions atua no desenvolvimento de soluções
            digitais personalizadas, unindo engenharia de software, design
            profissional e boas práticas de mercado.
          </p>
          <p className="text-slate-400">
            Atendemos empresas e profissionais que buscam inovação, qualidade e
            confiança em projetos de tecnologia.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 bg-slate-900">
        <h3 className="text-3xl font-bold mb-8 text-center">Contato</h3>
        <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-2xl">
          <p className="mb-2">📞 <strong>Telefone:</strong> (11) 97280-8075</p>
          <p className="mb-2">📧 <strong>Email:</strong> getuliomoreira.engsoftware@gmail.com</p>
          <p className="mb-4">📍 <strong>Localização:</strong> São Paulo - SP, Brasil</p>
          <a
            href="mailto:getuliomoreira.engsoftware@gmail.com"
            className="block text-center bg-cyan-500 text-slate-950 py-3 rounded-xl font-semibold hover:bg-cyan-400"
          >
            Enviar Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-slate-500 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} Geevheith Technology Solutions. Todos os direitos reservados.
      </footer>
    </main>
  );
}
