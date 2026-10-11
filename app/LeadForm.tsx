"use client";

import { useState } from "react";

const WHATSAPP = "5511972808075";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text =
      `Olá! Quero um orçamento.\n\n` +
      `*Nome:* ${f.get("nome")}\n` +
      `*Telefone:* ${f.get("telefone")}\n` +
      `*E-mail:* ${f.get("email") || "-"}\n` +
      `*Serviço:* ${f.get("servico")}\n` +
      `*Projeto:* ${f.get("mensagem") || "-"}`;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  return (
    <form className="form card" onSubmit={handleSubmit} id="orcamento">
      <h4 className="grad-text" style={{ fontSize: "1.4rem" }}>
        Peça seu orçamento gratuito
      </h4>
      <div className="form-row">
        <label>
          Nome*
          <input name="nome" required placeholder="Seu nome" autoComplete="name" />
        </label>
        <label>
          WhatsApp*
          <input name="telefone" required type="tel" placeholder="(11) 99999-9999" autoComplete="tel" />
        </label>
      </div>
      <label>
        E-mail
        <input name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" />
      </label>
      <label>
        O que você precisa?*
        <select name="servico" required defaultValue="">
          <option value="" disabled>Selecione...</option>
          <option>Aplicativo (Android/iOS)</option>
          <option>Sistema Web</option>
          <option>Site Profissional</option>
          <option>Landing Page</option>
          <option>Outro</option>
        </select>
      </label>
      <label>
        Conte sobre seu projeto
        <textarea name="mensagem" placeholder="Objetivo, prazo, referências..." />
      </label>
      <button className="btn btn-primary" type="submit">
        Solicitar orçamento
      </button>
      <p className="form-note">
        {sent
          ? "✅ Abrimos o WhatsApp com sua mensagem. Basta enviar!"
          : "Você será direcionado ao WhatsApp. Resposta rápida, sem compromisso."}
      </p>
    </form>
  );
}
