import { ASSET } from "../../utils/asset";
import React, { useMemo, useState } from "react";
import { IoPlay } from "react-icons/io5";
import "./ProductDetails.css";
import { MdKeyboardArrowUp , MdKeyboardArrowDown } from "react-icons/md";
export default function ProductDetails({
  title = "Sobre este produto",
  details = {
    Recurso:
      "Sem TEFLON,Sem PFO,Sem BPA,Indução,Antiaderente,Com alça,Térmico,Com tampa",
    Material: "Cerâmica,Madeira",
    "Quantidade por embalagem": "1",
  },
  video = { src:  ASSET("/assets/demovideo.mp4"), poster:  ASSET("/assets/p1.webp") },
  descriptionHtml = `
    <p><strong>ENVIO IMEDIATO, PRODUTO À PRONTA ENTREGA!</strong></p>
    <p>O Conjunto de Panelas Antiaderentes de Indução une praticidade, durabilidade e design moderno para transformar sua rotina na cozinha. Com revestimento cerâmico antiaderente de alta performance, garante o preparo dos alimentos sem grudar, utilizando menos óleo e facilitando a limpeza. Ideal para quem busca refeições mais saudáveis e cozimento uniforme. Produzido com materiais de alta qualidade como alumínio, vidro temperado e cabos em baquelite com resistência térmica, é compatível com diversos tipos de fogão, incluindo por indução.</p>
    <p><strong>Materiais:</strong></p>
    <ul>
      <li>Vidro temperado (tampas com saída de vapor)</li>
      <li>Revestimento cerâmico (distribuição de calor uniforme)</li>
      <li>Cabos de Baquelite antitérmico com silicone soft touch</li>
    </ul>
    <p><strong>Medidas:</strong></p>
    <p>Frigideira: 900ml – 20cm x 4,5cm</p>
  `,
  richImages = [ ASSET("/assets/p1.webp"),  ASSET("/assets/p2.webp"),  ASSET("/assets/p3.webp"),  ASSET("/assets/p4.webp")],
}) {
  const [open, setOpen] = useState(false);
  const entries = useMemo(() => Object.entries(details || {}), [details]);

  return (
    <section className="pd" aria-label="Detalhes do produto">
      <h3 className="pd-title">{title}</h3>

      {/* Detalhes (tabela) */}
      <div className="pd-subtitle">Detalhes</div>
      <div className="pd-table" role="table" aria-label="Tabela de detalhes">
        {entries.map(([k, v], i) => (
          <div className="pd-row" role="row" key={i}>
            <div className="pd-key" role="cell">{k}</div>
            <div className="pd-val" role="cell">{v}</div>
          </div>
        ))}
      </div>

      {/* Vídeo */}
      <div className="pd-subtitle">Vídeo</div>
      <div className="pd-videoWrap">
        <video
          className="pd-video"
          src={video?.src}
          poster={video?.poster}
          controls
          playsInline
        />
        
      </div>

      {/* Descrição */}
      <div className="pd-subtitle">Descrição</div>

      {/* bloco de descrição com recorte + fade quando fechado */}
      <div className={`pd-desc ${open ? "is-open" : ""}`}>
        <div
          className="pd-desc__html"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
        {!open && <div className="pd-desc__fade" aria-hidden />}
      </div>

      {/* botão Ver mais logo abaixo da descrição (quando fechado) */}
      {!open && (
        <button className="pd-toggle pd-toggle--more" onClick={() => setOpen(true)}>
          Ver mais <MdKeyboardArrowDown />
        </button>
      )}

      {/* imagens ricas + Ver menos (só quando aberto) */}
      {open && (
        <>
          <div className="pd-rich">
            {richImages.map((src, i) => (
              <figure className="pd-richItem" key={i}>
                <img src={src} alt={`Imagem ${i + 1} do produto`} />
              </figure>
            ))}
          </div>

          <button className="pd-toggle pd-toggle--less" onClick={() => setOpen(false)}>
            Ver menos <MdKeyboardArrowUp />
          </button>
        </>
      )}
    </section>
  );
}
