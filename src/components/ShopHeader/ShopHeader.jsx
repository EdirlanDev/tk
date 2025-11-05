import React from "react";
import "./ShopHeader.css";

export default function ShopHeader({
  avatar = "/assets/shop-avatar.jpg",
  name = "Caplace Beleza e Perfumes",
  sold = 12000,              // número bruto
  href = "#",                // opcional: link para a loja
}) {
  const fmtK = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : `${n}`);

  const Content = (
    <>
      <img className="shophead__ava" src={avatar} alt={`Avatar da loja ${name}`} />
      <div className="shophead__meta">
        <div className="shophead__name" title={name}>{name}</div>
        <div className="shophead__sold">{fmtK(sold)} vendido(s)</div>
      </div>
    </>
  );

  return (
    <section className="shophead" aria-label="Loja">
      {href ? (
        <a href={href} className="shophead__wrap" aria-label={`Ir para a loja ${name}`}>
          {Content}
        </a>
      ) : (
        <div className="shophead__wrap">{Content}</div>
      )}
    </section>
  );
}
