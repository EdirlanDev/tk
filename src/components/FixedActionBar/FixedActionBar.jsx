import React from "react";
import { BiStoreAlt, BiChat } from "react-icons/bi";
import "./FixedActionBar.css";

export default function FixedActionBar({
  shopHref = "#",
  chatHref = "#",
  checkoutHref = "https://checkout.pagcerto.shop/VCCL1O8SCGI7",
}) {
  return (
    <>
      <div className="ttk-fab-spacer" aria-hidden />

      <footer className="ttk-fab" role="contentinfo">
        {/* Ícones Loja e Chat */}
        <div className="ttk-fab__left">
          <a href={shopHref} className="ttk-mini" aria-label="Loja">
            <BiStoreAlt className="ttk-mini__ic" />
            <span className="ttk-mini__txt">Loja</span>
          </a>

          <a href={chatHref} className="ttk-mini" aria-label="Chat">
            <BiChat className="ttk-mini__ic" />
            <span className="ttk-mini__txt">Chat</span>
          </a>
        </div>

        {/* Botões principais */}
        <div className="ttk-fab__right">
          <a
            href={checkoutHref}
            className="ttk-btn ttk-btn--ghost"
            aria-label="Adicionar ao carrinho"
          >
            <span className="ttk-btn__lines">
              <span>Adicionar</span>
              <br />
              <span>ao carrinho</span>
            </span>
          </a>

          <a
            href={checkoutHref}
            className="ttk-btn ttk-btn--primary"
            aria-label="Comprar Agora"
          >
            <span>Comprar</span>
            <br />
            <span>Agora</span>
          </a>
        </div>
      </footer>
    </>
  );
}
