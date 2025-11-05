import React from 'react';
import './ReviewSummary.css';

export default function ReviewSummary({
  rating = 4.6,
  total = 20,
  onSeeMore // opcional; se não vier, scroll até #reviews
}) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
  const empty = 5 - fullStars - (hasHalf ? 1 : 0);

  const handleSeeMore = () => {
    if (typeof onSeeMore === 'function') return onSeeMore();

    // scroll suave até a seção #reviews, compensando AppBar + Tabs
    const el = document.getElementById('reviews');
    if (!el) return;
    const topOffset = getTopOffset();
    const rect = el.getBoundingClientRect();
    const current = window.scrollY || window.pageYOffset;
    const targetY = rect.top + current - topOffset - 8;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section className="rs" aria-label="Resumo de avaliações">
      <div className="rs-left">
        <div className="rs-score">
          <strong>{rating.toFixed(1)}</strong>
          <span className="rs-outof">/5</span>
        </div>
        <div className="rs-stars" aria-hidden>
          {[...Array(fullStars)].map((_, i) => (
            <Star key={`f${i}`} type="full" />
          ))}
          {hasHalf && <Star type="half" />}
          {[...Array(empty)].map((_, i) => (
            <Star key={`e${i}`} type="empty" />
          ))}
        </div>
        <div className="rs-total">{total} avaliações</div>
      </div>

      <button className="rs-more" type="button" onClick={handleSeeMore} aria-label="Ver mais avaliações">
        Ver mais
      </button>
    </section>
  );
}

function Star({ type }) {
  if (type === 'half') {
    return (
      <svg viewBox="0 0 24 24" className="rs-star rs-star--half">
        <defs>
          <linearGradient id="rsHalf" x1="0" x2="1">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l2.7 5.5 6 .9-4.3 4.2 1 5.9L12 15.9 6.6 18.5l1-5.9L3.3 8.4l6-.9L12 2z"
          fill="url(#rsHalf)"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    );
  }
  if (type === 'empty') {
    return (
      <svg viewBox="0 0 24 24" className="rs-star rs-star--empty">
        <path
          d="M12 2l2.7 5.5 6 .9-4.3 4.2 1 5.9L12 15.9 6.6 18.5l1-5.9L3.3 8.4l6-.9L12 2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="rs-star rs-star--full">
      <path
        d="M12 2l2.7 5.5 6 .9-4.3 4.2 1 5.9L12 15.9 6.6 18.5l1-5.9L3.3 8.4l6-.9L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function getTopOffset() {
  const root = getComputedStyle(document.documentElement);
  const safe = parseInt(root.getPropertyValue('--safe-top') || '0', 10) || 0;
  const APPBAR = 48;
  const TABS = 44;
  return safe + APPBAR + TABS;
}
