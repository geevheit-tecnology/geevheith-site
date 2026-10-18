"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP = "5511972808075";

export default function LeadForm() {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const f = new FormData(e.currentTarget);
    const text =
      `🚀 *Novo Contato pelo Site - Geevheit*\n\n` +
      `👤 *Nome:* ${f.get("nome")}\n` +
      `📱 *Telefone/WhatsApp:* ${f.get("telefone")}\n` +
      `📧 *E-mail:* ${f.get("email") || "Não informado"}\n` +
      `💼 *Serviço de Interesse:* ${f.get("servico")}\n` +
      `📝 *Detalhes do Projeto:* ${f.get("mensagem") || "Não detalhado"}`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
    setLoading(false);
  }

  return (
    <form className="form card" onSubmit={handleSubmit} id="orcamento">
      <div className="form-header">
        <span className="form-badge">⚡ Atendimento Direto</span>
        <h3 className="grad-text" style={{ fontSize: "1.45rem", fontWeight: 800 }}>
          Peça seu orçamento gratuito
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginTop: "0.25rem" }}>
          Conte sua ideia ou necessidade. Retornamos em poucos minutos!
        </p>
      </div>

      <div className="form-row">
        <label>
          <span>Seu Nome *</span>
          <input
            name="nome"
            required
            placeholder="Ex: Carlos Silva"
            autoComplete="name"
          />
        </label>
        <label>
          <span>WhatsApp / Telefone *</span>
          <input
            name="telefone"
            required
            type="tel"
            placeholder="(11) 99999-9999"
            autoComplete="tel"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Seu E-mail</span>
          <input
            name="email"
            type="email"
            placeholder="voce@empresa.com"
            autoComplete="email"
          />
        </label>
        <label>
          <span>O que você precisa? *</span>
          <select name="servico" required defaultValue="">
            <option value="" disabled>Selecione uma opção...</option>
            <option value="Demonstração de Apps da Vitrine">📱 Demonstração de Apps da Vitrine</option>
            <option value="Aplicativo Android e iOS">📲 Aplicativo Mobile Sob Medida (Android & iOS)</option>
            <option value="Sistema Web e SaaS">🌐 Sistema Web / Plataforma SaaS</option>
            <option value="Site Profissional">💻 Site Profissional Moderno</option>
            <option value="Landing Page de Alta Conversão">🚀 Landing Page de Alta Conversão</option>
            <option value="Consultoria ou Outro">💡 Consultoria Tecnológica / Outro</option>
          </select>
        </label>
      </div>

      <label>
        <span>Conte brevemente sobre o seu projeto ou app</span>
        <textarea
          name="mensagem"
          placeholder="Ex: Quero um aplicativo para delivery com painel web para gerenciar pedidos e pagamento integrado..."
        />
      </label>

      <button className="btn btn-primary btn-submit" type="submit" disabled={loading}>
        {loading ? (
          "Enviando..."
        ) : (
          <span>🚀 Iniciar conversa no WhatsApp</span>
        )}
      </button>

      <p className="form-note">
        {sent
          ? "✅ Conexão estabelecida! Abrimos a conversa no WhatsApp para atendimento imediato."
          : "🔒 Seus dados estão seguros. Conversa 100% gratuita, sem compromisso."}
      </p>
    </form>
  );
}
