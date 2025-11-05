import React, { useState, useRef } from 'react';
import './FAQ.css';

export default function FAQ({
  title = 'FAQ',
  items = [
    { q: 'Serve para fogão de indução?', a: 'Sim, todas as peças são compatíveis com indução.' },
    { q: 'As tampas são de vidro temperado?', a: 'Sim, e possuem saída de vapor.' },
    { q: 'Possui garantia?', a: 'Garantia de 12 meses contra defeitos de fabricação.' },
  ],
}) {
  const [open, setOpen] = useState(0); // mantém exatamente 1 aberto
  const contentRefs = useRef({});

  const toggle = (idx) => {
    setOpen((curr) => (curr === idx ? -1 : idx)); // se clicar no mesmo, fecha
  };

  const onKey = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(idx);
    }
  };

  return (
    <section className="faq" aria-label="Perguntas frequentes">
      <h3 className="faq-title">{title}</h3>

      <ul className="faq-list">
        {items.map((it, idx) => {
          const isOpen = open === idx;
          return (
            <li className={`faq-item ${isOpen ? 'is-open' : ''}`} key={idx}>
              <button
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-button-${idx}`}
                onClick={() => toggle(idx)}
                onKeyDown={(e) => onKey(e, idx)}
              >
                <span className="faq-qtext">{it.q}</span>
                <span className="faq-chevron" aria-hidden>
                  <svg viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-button-${idx}`}
                className="faq-panel"
                style={{
                  // anima altura baseada no scrollHeight medido
                  maxHeight: isOpen
                    ? (contentRefs.current[idx]?.scrollHeight || 'auto')
                    : 0
                }}
              >
                <div
                  className="faq-ainner"
                  ref={(el) => { contentRefs.current[idx] = el; }}
                >
                  {it.a}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
