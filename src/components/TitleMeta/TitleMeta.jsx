import React from "react";
import { IoStar } from "react-icons/io5";
import { RiBookmark3Line } from "react-icons/ri";
import "./TitleMeta.css";

export default function TitleMeta({
  title = "Jogo Panelas 4 Peças Carvalho Alumínio, Vidro e Baquelite Conjunto Antiaderente indução",
  rating = 4.6,
  reviewsCount = 20,
  soldCount = 97,
  onSave = () => {},
}) {
  const fmtK = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`);

  return (
    <section className="ttk-title" aria-label="Título e meta do produto">
      <div className="ttk-title__row">
        <h1 className="ttk-title__h1" title={title}>
          {title}
        </h1>

        {/* botão salvar */}
        <button className="ttk-title__save" aria-label="Salvar" onClick={onSave}>
          <RiBookmark3Line className="ttk-title__ic" />
        </button>
      </div>

      <div className="ttk-title__meta" role="contentinfo">
        <span className="ttk-title__rating">
          <IoStar className="ttk-title__star" aria-hidden />
          <strong>{Number(rating).toFixed(1)}</strong>
        </span>

        <span className="ttk-title__dot" aria-hidden>•</span>

        <button className="ttk-title__link" type="button">
          {fmtK(reviewsCount)} avaliações
        </button>

        <span className="ttk-title__dot" aria-hidden>•</span>

        <span className="ttk-title__muted">{fmtK(soldCount)} vendidos</span>
      </div>
    </section>
  );
}
