import React, { useEffect, useState } from 'react';
import './StickyTabBar.css';

export default function StickyTabBar({ sections = [] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

  // Observa rolagem para destacar a aba atual
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Rolagem suave ao clicar
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 70; // distância da AppBar
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className="ttk-tabs ttk-fixed-fit" role="tablist" aria-label="Navegação da página">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => handleClick(s.id)}
          className={`ttk-tab ${activeId === s.id ? 'tab-active' : ''}`}
          role="tab"
          aria-selected={activeId === s.id}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
