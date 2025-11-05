import { useEffect, useState } from 'react';
import './DevtoolsGuard.css';

/**
 * Versão segura:
 * - PRODUÇÃO: retorna null (sem listeners, sem bloqueios).
 * - DEV: permite testar detecção, mas sem preventDefault agressivo.
 */
export default function DevtoolsGuard({
  enabled = true,
  showModal = false, // default: sem modal mesmo em dev
  message = 'Ambiente Protegido: devtools detectado.',
}) {
  // Em produção, desliga totalmente
  if (import.meta.env.PROD) return null;

  // Em dev, você pode manter algo leve
  const [tripped, setTripped] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;
      const k = String(e.key || '').toUpperCase();

      if (k === 'F12') setTripped(true);
      if (ctrl && shift && ['I', 'J', 'C'].includes(k)) setTripped(true);
      if (ctrl && k === 'U') setTripped(true);

      // ⚠️ Não fazemos preventDefault em dev para não atrapalhar seu fluxo
    };

    window.addEventListener('keydown', onKeyDown, { passive: true });
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enabled]);

  if (!showModal || !tripped) return null;

  return (
    <div className="dtg-overlay" role="dialog" aria-modal="true">
      <div className="dtg-modal">
        <h3>Ambiente Protegido</h3>
        <p>{message}</p>
        <button onClick={() => window.location.reload()} className="dtg-btn">Ok</button>
      </div>
    </div>
  );
}
