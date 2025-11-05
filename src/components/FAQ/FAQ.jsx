import React, { useState, useRef } from 'react';
import './FAQ.css';

export default function FAQ({
  title = 'FAQ',
  items = [
    {
      q: 'As fragrâncias são originais?',
      a: 'Não. São fragrâncias inspiradas em perfumes importados e nacionais famosos, desenvolvidas para oferecer aroma semelhante com excelente fixação.',
    },
    {
      q: 'Posso escolher as fragrâncias?',
      a: 'Sim. Após realizar a compra, entre em contato pelo chat informando suas preferências. Faremos o possível para atender conforme disponibilidade em estoque.',
    },
    {
      q: 'Qual a durabilidade das fragrâncias?',
      a: 'A duração média é de até 10 horas, podendo variar conforme o tipo de pele e ambiente.',
    },
    {
      q: 'Qual o tamanho de cada frasco?',
      a: 'Cada perfume possui 30 ml, ideal para uso pessoal ou revenda.',
    },
    {
      q: 'O produto é lacrado?',
      a: 'Sim, todos os frascos são enviados lacrados e em embalagens seguras.',
    },
    {
      q: 'O kit é unissex?',
      a: 'Sim, o kit contém 5 fragrâncias femininas e 5 masculinas, podendo haver variações conforme estoque.',
    },
  ],
}) {
  const [open, setOpen] = useState(0);
  const contentRefs = useRef({});

  const toggle = (idx) => setOpen((curr) => (curr === idx ? -1 : idx));
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
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-button-${idx}`}
                className="faq-panel"
                style={{
                  maxHeight: isOpen
                    ? (contentRefs.current[idx]?.scrollHeight || 'auto')
                    : 0,
                }}
              >
                <div
                  className="faq-ainner"
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
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
