import React, { useRef, useState, useEffect } from "react";
import "./CreatorsVideos.css";
import ProtectedMedia from "../../security/ProtectedMedia";

export default function CreatorsVideos({
  title = "Vídeos de criadores",
  items = [
    { thumb: "/assets/v1.jpg", author: "Débora Dai...", duration: "0:30", video: "/assets/v1.mp4" },
    { thumb: "/assets/v2.jpg", author: "Olivie8",      duration: "0:27", video: "/assets/v2.mp4" },
    { thumb: "/assets/v3.jpg", author: "Mikaele sil..",      duration: "0:18", video: "/creators/v3.mp4" },
  ],
}) {
  const scrollerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(-1);
  const videoRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".cv-card");
    const delta = card ? card.clientWidth + 12 : 240;
    el.scrollBy({ left: dir * delta * 1.5, behavior: "smooth" });
  };

  // trava o scroll de fundo quando o modal está aberto
  useEffect(() => {
    if (openIndex >= 0) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [openIndex]);

  const closeModal = () => setOpenIndex(-1);

  return (
    <section className="cv" aria-label="Vídeos de criadores">
      <div className="cv-head">
        <h3 className="cv-title">{title} <span className="cv-count">({items.length})</span></h3>
        <div className="cv-arrows">
          <button className="cv-arrow" aria-label="Anterior" onClick={() => scrollByCards(-1)}>&lsaquo;</button>
          <button className="cv-arrow" aria-label="Próximo"  onClick={() => scrollByCards(1)}>&rsaquo;</button>
        </div>
      </div>

      <div className="cv-row" ref={scrollerRef}>
        {items.map((it, i) => (
          <button
            className="cv-card"
            key={i}
            onClick={() => setOpenIndex(i)}
            aria-label={`Abrir vídeo de ${it.author}`}
          >
            <div className="cv-thumb">
              <ProtectedMedia src={it.thumb} alt={`Vídeo ${i + 1}`} width={480} height={640} />
              <div className="cv-overlay">
                <span className="cv-play" aria-hidden>
                  <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
                </span>
                <span className="cv-duration">{it.duration}</span>
              </div>
            </div>
            <div className="cv-meta">
              {/* opcional: se quiser avatar, adicione it.avatar e descomente o img */}
              {/* {it.avatar && <img src={it.avatar} alt="" className="cv-ava" loading="lazy" />} */}
              <span className="cv-author">{it.author}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Modal pequenino do vídeo */}
      {openIndex >= 0 && (
        <>
          <div className="cv-modal__backdrop" onClick={closeModal} />
          <div className="cv-modal" role="dialog" aria-modal="true" aria-label="Reprodução de vídeo">
            <button className="cv-modal__close" onClick={closeModal} aria-label="Fechar">✕</button>
            <video
              key={items[openIndex]?.video || openIndex}  /* força recarregar ao trocar */
              ref={videoRef}
              src={items[openIndex]?.video}
              className="cv-modal__video"
              playsInline
              controls
              autoPlay
              onEnded={closeModal}
            />
          </div>
        </>
      )}
    </section>
  );
}
