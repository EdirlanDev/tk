import { ASSET } from "../../utils/asset";
import React, { useMemo, useState } from "react";
import { IoPlay } from "react-icons/io5";
import "./ProductDetails.css";
import { MdKeyboardArrowUp , MdKeyboardArrowDown } from "react-icons/md";
export default function ProductDetails({
  title = "Igredient list",
  details = {
    Recurso:
      "Alcohol Denat (SD Alcohol 39-C), Parfum (Fragrance), Aqua (Water), PEG-40 Hydrogenated Castor Oil",
    Material: "Parfum (Fragrance)",
    "Quantidade por embalagem": "10",
  },
  video = { src:  ASSET("/assets/demovideo.mp4"), poster:  ASSET("/assets/p1.webp") },
  descriptionHtml = `
  <p><strong>Ótimo kit para revendedores:</strong></p>
  <p>Kit composto por 10 perfumes (5 femininos / 5 masculinos) — enviamos fragrâncias variadas, conforme disponibilidade em estoque no momento da compra.</p>
  <p>Havendo preferência por fragrâncias, solicite no chat após a compra.</p>
  <ul>
    <li>Fragrâncias inspiradas nos perfumes mais famosos;</li>
    <li>Produtos lacrados;</li>
    <li>Duração de até 10 horas;</li>
    <li>Embalagens com 30 ml cada.</li>
  </ul>
  <p>Os produtos são enviados nas mesmas embalagens e frascos do anúncio.</p>
  <p>Pedidos enviados em até 24h úteis após a compra.</p>
  <p>Enviamos em embalagens seguras para garantir que receba seu pedido em perfeito estado.</p>
  <p>Dúvidas e estamos à disposição no chat.</p>
  <p><strong>Gênero:</strong> Unissex</p>
  <p><strong>Tamanho do produto:</strong> Tamanho de viagem</p>
  <p><strong>Concentração de fragrância:</strong> EDP</p>
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
      {/* <div className="pd-subtitle">Vídeo</div>
      <div className="pd-videoWrap">
        <video
          className="pd-video"
          src={video?.src}
          poster={video?.poster}
          controls
          playsInline
        />
        
      </div> */}

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
      {/* {open && (
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
      )} */}
    </section>
  );
}
