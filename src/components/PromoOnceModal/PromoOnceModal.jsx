import React, { useEffect, useRef, useState } from "react";
import {
  BiX,
  BiBoltCircle,
  BiGift,
  BiPackage,
  BiShoppingBag,
  BiTimeFive,
} from "react-icons/bi";
import "./PromoOnceModal.css";

/**
 * Modal de promoção estilo TikTok Shop
 * - abre automaticamente 1 vez por período (TTL) após um atraso
 */
export default function PromoOnceModal({
  checkoutHref = "https://www.pay-pagamentos.link/checkout/a6a71559-3923-4677-9b4e-1aff240a8e80",
  autoOpenDelayMs = 5000,             // ⏱ abre 5s depois de entrar na página
  onceTTLms = 24 * 60 * 60 * 1000,    // 🕒 não aparece novamente por 24h
}) {
  const STORAGE_KEY = "promo_once_seen_until_v1";
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  // data local "apenas hoje"
  const todayStr = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Só abre se ainda não “vencido”
  useEffect(() => {
    const until = Number(localStorage.getItem(STORAGE_KEY) || 0);
    const alreadySeen = Date.now() < until;
    if (alreadySeen) return; // já foi mostrado dentro do TTL

    const t = setTimeout(() => setOpen(true), autoOpenDelayMs);
    return () => clearTimeout(t);
  }, [autoOpenDelayMs]);

  // Foco no fechar e ESC
  useEffect(() => {
    if (!open) return;
    const tf = setTimeout(() => closeBtnRef.current?.focus(), 10);
    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(tf);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now() + onceTTLms)); // marca como visto
  };

  if (!open) return null;

  return (
    <div
      className="promoON-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promoON-title"
    >
      <div className="promoON-card">
        <button
          ref={closeBtnRef}
          className="promoON-close"
          aria-label="Fechar promoção"
          onClick={handleClose}
        >
          <BiX />
        </button>

        {/* Cabeçalho estilo TikTok Shop */}
        <div className="promoON-head">
          <span className="promoON-badge">
            <BiBoltCircle className="promoON-badge__ic" aria-hidden />
            Oferta relâmpago
          </span>

          <h3 id="promoON-title">
            KIT COM 10 PERFUMES - <span className="onlytoday">APENAS HOJE</span> ({todayStr})
          </h3>

          <p className="promoON-sub">
            <BiTimeFive aria-hidden className="inline-ic" /> Expira em poucas horas. Estoque super
            limitado.
          </p>
        </div>

        {/* Bloco destacado / copy curta */}
        <div className="promoON-strip pulse">
          <BiGift aria-hidden className="inline-ic" />
          Leve <strong>10 unidades</strong> com <strong>frete grátis</strong> +{" "}
          <strong>desconto extra</strong> no checkout!
        </div>

        {/* bullets de reforço */}
        <div className="promoON-feats">
          <span>
            <BiPackage aria-hidden /> Original lacrado
          </span>
          <span>
            <BiShoppingBag aria-hidden /> Pronta entrega
          </span>
        </div>

        <a
          href={checkoutHref}
          className="promoON-cta"
          aria-label="Ir para o checkout"
          onClick={handleClose}
        >
          Ir para o checkout
        </a>

        <p className="promoON-note">
          * Válido somente em {todayStr}. Condição por tempo limitado.
        </p>
      </div>
    </div>
  );
}
