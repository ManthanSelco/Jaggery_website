import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to #anchors (e.g. /machines#crusher) after navigation, or to the top on a new page.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const t = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        clearInterval(t);
        if (el) {
          el.scrollIntoView({ block: id.startsWith('slot-') ? 'center' : 'start' });
          if (id.startsWith('slot-')) { el.classList.add('slot-flash'); setTimeout(() => el.classList.remove('slot-flash'), 2400); }
        }
      }
    }, 100);
    return () => clearInterval(t);
  }, [pathname, hash]);
  return null;
}
