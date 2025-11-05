import { useEffect } from 'react';
import hotkeys from 'hotkeys-js';

export default function AntiCopy() {
  useEffect(() => {
    document.body.classList.add('no-select');

    const blockContext = (e) => e.preventDefault();
    const blockDrag = (e) => e.preventDefault();
    window.addEventListener('contextmenu', blockContext);
    window.addEventListener('dragstart', blockDrag);

    // atalhos extras
    hotkeys('ctrl+c, ctrl+x, ctrl+v, ctrl+p, ctrl+s, ctrl+u', (e) => {
      e.preventDefault();
      return false;
    });

    return () => {
      document.body.classList.remove('no-select');
      window.removeEventListener('contextmenu', blockContext);
      window.removeEventListener('dragstart', blockDrag);
      hotkeys.unbind('ctrl+c, ctrl+x, ctrl+v, ctrl+p, ctrl+s, ctrl+u');
    };
  }, []);

  return null;
}
