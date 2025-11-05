import React, { useRef } from 'react';
import './ProductGrid.css';
import ProtectedMedia from '../../security/ProtectedMedia';

export default function ProductGrid({
  title = 'Recomendações',
  items = [
    { id: 'rel1', title: 'Panela 28cm Antiaderente', thumb: '/rec/r1.jpg', price: 159.9 },
    { id: 'rel2', title: 'Jogo Utensílios de Silicone', thumb: '/rec/r2.jpg', price: 89.9 },
    { id: 'rel3', title: 'Jarra de Vidro 1,5L', thumb: '/rec/r3.jpg', price: 49.9 },
    { id: 'rel4', title: 'Assadeira Retangular', thumb: '/rec/r4.jpg', price: 69.9 },
    { id: 'rel5', title: 'Faca Chef 8"', thumb: '/rec/r5.jpg', price: 119.9 }
  ],
  onOpen = (id) => {}
}) {
  const wrapRef = useRef(null);

  return (
    <section className="pg" aria-label="Recomendações de produtos">
      <div className="pg-head">
        <h3 className="pg-title">{title}</h3>
      </div>

      <div className="pg-grid" ref={wrapRef}>
        {items.map((p) => (
          <button key={p.id} className="pg-card" onClick={() => onOpen(p.id)} aria-label={p.title}>
            <div className="pg-thumb">
              <ProtectedMedia src={p.thumb} alt={p.title} width={600} height={600} />
            </div>
            <div className="pg-info">
              <div className="pg-name" title={p.title}>{p.title}</div>
              <div className="pg-price">
                {p.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
