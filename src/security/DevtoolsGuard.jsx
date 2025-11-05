import { useEffect, useState } from 'react';
import './DevtoolsGuard.css';

/**
 * Regras:
 * - Desktop: bloqueia atalhos e detecta devtools por atalhos/resize extremo.
 * - Mobile (iOS/Android): NÃO mostra modal (evita falso positivo). Apenas previne
 *   contextmenu/seleção (deixe isso no AntiCopy).
 */
export default function DevtoolsGuard({
  enabled = true,
  showModal = true,
  message = 'Ambiente Protegido\nFerramentas de desenvolvedor/atalhos foram detectados e estão bloqueados.'
}) {
  const [tripped, setTripped] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const ua = navigator.userAgent || '';
    const isIOS = /iP(hone|ad|od)/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    const isMobile = isIOS || isAndroid || /Mobile|CriOS|FxiOS/i.test(ua);
    const pointerFine = matchMedia?.('(pointer:fine)')?.matches === true; // em geral, desktops

    // 🔒 Só ativa a detecção "forte" no DESKTOP.
    const useStrongDetection = !isMobile && pointerFine;

    const onKeyDown = (e) => {
      const ctrl = e.ctrlKey || e.metaKey;              // meta = ⌘ no Mac
      const shift = e.shiftKey;

      // F12
      if (e.key === 'F12') return trip(e);

      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (inspecionar, console, picker)
      if (ctrl && shift && ['I', 'J', 'C'].includes(e.key?.toUpperCase())) return trip(e);

      // Ctrl+U (view-source)
      if (ctrl && e.key?.toUpperCase() === 'U') return trip(e);
    };

    // Heurística de resize suspeito: só em desktop
    let lastOuterW = window.outerWidth;
    let lastOuterH = window.outerHeight;
    const onResize = () => {
      if (!useStrongDetection) return;
      const dw = Math.abs(window.outerWidth - lastOuterW);
      const dh = Math.abs(window.outerHeight - lastOuterH);
      lastOuterW = window.outerWidth;
      lastOuterH = window.outerHeight;

      // Quando devtools abre, tipicamente há salto grande em um eixo (≥ 160px)
      if (dw >= 160 || dh >= 160) {
        // Mas ignore quando a janela fica maximizada/normal > 1200px de largura,
        // reduz falsos positivos.
        const wide = window.innerWidth >= 1200;
        if (!wide) setTripped(true);
      }
    };

    const trip = (e) => {
      if (e?.preventDefault) e.preventDefault();
      if (e?.stopPropagation) e.stopPropagation();
      setTripped(true);
      return false;
    };

    // Desktop listeners
    window.addEventListener('keydown', onKeyDown, { passive: false });
    window.addEventListener('resize', onResize, { passive: true });

    // Mobile: não mostra modal; apenas deixa o AntiCopy cuidar de toque longo.
    // (nada a fazer aqui)

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [enabled]);

  // Se não for para exibir modal, só bloqueia silenciosamente.
  if (!showModal || !tripped) return null;

  return (
    <div className="dtg-overlay" role="dialog" aria-modal="true">
      <div className="dtg-modal">
        <h3>Ambiente Protegido</h3>
        <p>Ferramentas de desenvolvedor/atalhos foram detectados e estão bloqueados.</p>
        <button onClick={() => window.location.reload()} className="dtg-btn">Ok</button>
      </div>
    </div>
  );
}
