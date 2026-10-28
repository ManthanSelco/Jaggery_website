import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteSlot } from '../lib/siteSlots.js';

// SELCO Foundation logo (client/public/selco-logo.png). A logo uploaded in
// Admin → "Site-wide (logo)" replaces it; the text wordmark is only a fallback.
export default function Brand({ light = false, onClick }) {
  const items = useSiteSlot('site-logo');
  const [broken, setBroken] = useState(false);
  const logo = items.find(i => i.type === 'image') || { src: '/selco-logo.png' };
  return (
    <Link to="/" className={'brand' + (light ? ' light' : '')} aria-label="SELCO Foundation · Jaggery value chain home" onClick={onClick}>
      {logo && !broken ? (
        <img src={logo.src} alt="SELCO Foundation" onError={() => setBroken(true)} />
      ) : (
        <span className="brand-word">
          <b>SELCO</b>
          <small>Foundation</small>
        </span>
      )}
    </Link>
  );
}
