import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./MediaCarousel.css";

import ProtectedMedia from "../../security/ProtectedMedia";

export default function MediaCarousel({ items = [] }) {
  const [active, setActive] = useState(0);
  const boxRef = useRef(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const calc = () => {
      const w = el.clientWidth || 0;
      const h = Math.round(w * 0.86);
      setDims({ w, h });
    };
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    calc();
    return () => ro.disconnect();
  }, []);

  const multiple = items.length > 1;

  return (
    <section className="ttk-media" aria-label="Galeria de mídia do produto">
      <div className="ttk-media__box" ref={boxRef} style={{ height: dims.h || undefined }}>
        <Swiper
          key={items.length}                 // reseta ao trocar a lista
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={multiple}
          speed={450}
          resistanceRatio={0.9}
          autoplay={ multiple ? { delay: 2800, disableOnInteraction: false } : false }
          onSwiper={(s) => s.autoplay && s.autoplay.start()}     // força iniciar
          onSlideChange={(s) => setActive(s.realIndex ?? s.activeIndex)}
          observer
          observeParents
          watchSlidesProgress
        >
          {items.map((m, i) => (
            <SwiperSlide key={i}>
              {m.type === "video" ? (
                <div className="ttk-media__videoWrap" onContextMenu={(e) => e.preventDefault()}>
                  <video
                    src={m.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls={false}
                    className="ttk-media__video"
                    aria-label={m.alt || `Vídeo ${i + 1}`}
                  />
                </div>
              ) : (
                <ProtectedMedia
                  src={m.src}
                  alt={m.alt || `Imagem ${i + 1}`}
                  width={Math.max(320, dims.w)}
                  height={Math.max(240, dims.h)}
                  className="ttk-media__img"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Contador numérico 1/N (sem bolinhas) */}
        <div className="ttk-media__counter" aria-hidden>
          {items.length ? `${(active % items.length) + 1}/${items.length}` : "0/0"}
        </div>
      </div>
    </section>
  );
}
