import { useEffect, useRef } from 'react';

/**
 * Renderiza a imagem dentro de <canvas> e coloca overlay anti-contextmenu.
 * Isso evita "Salvar imagem como..." direto no <img>, mas screenshot ainda é possível.
 */
export default function ProtectedMedia({ src, alt = '', width = 800, height = 600, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // se usar CDN habilite CORS
    img.onload = () => {
      const c = ref.current;
      if (!c) return;
      c.width = width;
      c.height = height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
    };
    img.src = src;
  }, [src, width, height]);

  const onContext = (e) => e.preventDefault();

  return (
    <div className={`media-guard ${className}`} onContextMenu={onContext}>
      <canvas ref={ref} style={{ display:'block', width:'100%', height:'auto' }} aria-label={alt} />
    </div>
  );
}
