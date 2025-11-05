import React from "react";
import { IoClose, IoShareOutline, IoCartOutline, IoEllipsisHorizontal } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import "./AppBar.css";

export default function AppBar({
  onBack = () => window.history.back(),
  onShare = () => {},
  onCart = () => {},
  onMore = () => {},
}) {
  return (
    <header className="ttk-appbar" role="banner" aria-label="Barra superior">
      <div className="ttk-appbar__safe" />
      <div className="ttk-appbar__row">
        {/* Esquerda: Voltar/X */}
        <button className="ttk-icon-btn" aria-label="Fechar" onClick={onBack}>
          <IoClose className="ttk-ic" />
        </button>

        {/* Direita: compartilhar, carrinho, mais */}
        <div className="ttk-appbar__actions">
          <button className="ttk-icon-btn" aria-label="Compartilhar" onClick={onShare}>
            <RiShareForwardLine  className="ttk-ic" />
          </button>

          <button className="ttk-icon-btn" aria-label="Carrinho" onClick={onCart}>
            <IoCartOutline className="ttk-ic" />
          </button>

          <button className="ttk-icon-btn" aria-label="Mais opções" onClick={onMore}>
            <IoEllipsisHorizontal className="ttk-ic" />
          </button>
        </div>
      </div>
    </header>
  );
}
