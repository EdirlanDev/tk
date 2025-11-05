import React from "react";
import { ASSET } from "../../utils/asset";
import "./ReviewsSection.css";
import ProtectedMedia from "../../security/ProtectedMedia";

export default function ReviewsSection({
  rating = 4.6,
  total = 20,
  reviews = [
    {
      nameMasked: "M**a",
      avatar: "",
      stars: 5,
      text: "gostei muito ainda não usei 💕",
      media: [
        { src:  ASSET("/assets/rev-1.jpg")},
        { src:  ASSET("/assets/rev-2.jpeg") },
      ],
    },
    {
      nameMasked: "D**e d** S**a n**o",
      avatar:  ASSET("/assets/revisa-1.jpg"),
      stars: 5,
      text:
        "São lindas ótimo ótima qualidade, recomendo muito!",
      media: [ ASSET("/assets/rev-3.jpeg"),  ASSET("/assets/rev-4.jpeg")],
    },
  ],
}) {
  return (
    <section className="rev" aria-label="Avaliações de clientes">
      {/* Cabeçalho */}
      <div className="rev-header">
        <h3 className="rev-title">Avaliações dos clientes ({total})</h3>
        <button className="rev-more" type="button">
          Ver mais ›
        </button>
      </div>

      {/* Nota geral */}
      <div className="rev-scoreBox">
        <span className="rev-scoreNum">{rating.toFixed(1)}</span>
        <span className="rev-scoreText">/5</span>
        <span className="rev-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className={`rev-star ${
                i < Math.floor(rating) ? "filled" : i < rating ? "half" : ""
              }`}
            >
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="#FFD84D" />
                  <stop offset="50%" stopColor="#E5E7EB" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l2.7 5.5 6 .9-4.3 4.2 1 5.9L12 15.9 6.6 18.5l1-5.9L3.3 8.4l6-.9L12 2z"
                fill={
                  i < Math.floor(rating)
                    ? "#FFD84D"
                    : i < rating
                    ? `url(#half-${i})`
                    : "#E5E7EB"
                }
              />
            </svg>
          ))}
        </span>
      </div>

      {/* Lista de avaliações */}
      <ul className="rev-list">
        {reviews.map((r, i) => {
          const firstLetter = r.nameMasked?.trim()?.[0]?.toUpperCase() || "?";
          return (
            <li key={i} className="rev-item">
              <div className="rev-user">
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt={`avatar de ${r.nameMasked}`}
                    className="rev-ava"
                  />
                ) : (
                  <div className="rev-ava rev-ava--fallback">{firstLetter}</div>
                )}

                <div className="rev-userInfo">
                  <div className="rev-name">{r.nameMasked}</div>
                  <div className="rev-starsLine">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <svg
                        key={j}
                        viewBox="0 0 24 24"
                        className="rev-star filled"
                      >
                        <path
                          d="M12 2l2.7 5.5 6 .9-4.3 4.2 1 5.9L12 15.9 6.6 18.5l1-5.9L3.3 8.4l6-.9L12 2z"
                          fill="#FFD84D"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="rev-itemLabel">Item: Padrão</div>
                </div>
              </div>

              <p className="rev-text">{r.text}</p>

              {r.media?.length > 0 && (
                <div className="rev-media">
                  {r.media.map((m, idx) => {
                    const obj = typeof m === "string" ? { src: m } : m;
                    return (
                      <div key={idx} className="rev-thumb">
                        <ProtectedMedia
                          src={obj.src}
                          alt="mídia da avaliação"
                          width={120}
                          height={120}
                        />
                        {obj.type === "video" && (
                          <span className="rev-play" aria-hidden>
                            <svg viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" fill="currentColor" />
                            </svg>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
