import React from 'react';
import './ProductRichDesc.css';

export default function ProductRichDesc({
  headline = 'ENVIO IMEDIATO, PRODUTO À PRONTA ENTREGA!',
  paragraphs = [],
  lists = [] // [{ title: 'Materiais:', items: ['...','...'] }]
}) {
  return (
    <section className="pr" aria-label="Descrição detalhada">
      {headline && <div className="pr-hl">{headline}</div>}

      {paragraphs?.length > 0 && (
        <div className="pr-text">
          {paragraphs.map((p, i) => (
            <p key={i} className="pr-p">{p}</p>
          ))}
        </div>
      )}

      {lists?.map((g, i) => (
        <div key={i} className="pr-group">
          {g.title && <div className="pr-sub">{g.title}</div>}
          <ul className="pr-ul">
            {g.items?.map((li, j) => (
              <li key={j} className="pr-li">{li}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
