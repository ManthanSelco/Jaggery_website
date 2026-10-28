import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useT } from '../lib/i18n.jsx';

const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
  </svg>
);

function ShareSheet({ onClose }) {
  const t = useT();
  const url = window.location.href.split('#')[0];
  const title = document.title;
  const text = `${title} — SELCO Foundation`;
  const [copied, setCopied] = useState(false);
  const e = encodeURIComponent;
  const links = [
    { name: 'WhatsApp', color: '#25D366', href: `https://wa.me/?text=${e(text + ' ' + url)}` },
    { name: 'Facebook', color: '#1877F2', href: `https://www.facebook.com/sharer/sharer.php?u=${e(url)}` },
    { name: 'LinkedIn', color: '#0A66C2', href: `https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}` },
    { name: 'X', color: '#111', href: `https://twitter.com/intent/tweet?url=${e(url)}&text=${e(text)}` },
    { name: 'Telegram', color: '#229ED9', href: `https://t.me/share/url?url=${e(url)}&text=${e(text)}` },
    { name: 'Email', color: '#A55D42', href: `mailto:?subject=${e(text)}&body=${e(url)}` },
  ];
  useEffect(() => {
    const onKey = ev => ev.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); } catch {
      const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch { /* ignore */ } ta.remove();
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return createPortal(
    <div className="sheet-backdrop" onMouseDown={ev => ev.target === ev.currentTarget && onClose()}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label={t('Share this page')}>
        <div className="sheet-head">
          <div><b>{t('Share this page')}</b><small>{title}</small></div>
          <button className="icon-btn" onClick={onClose} aria-label={t('Close')}>×</button>
        </div>
        <div className="share-grid">
          {links.map(l => (
            <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" className="share-item">
              <span className="dot" style={{ background: l.color }}>{l.name[0]}</span>{l.name}
            </a>
          ))}
        </div>
        <div className="share-copy">
          <input readOnly value={url} onFocus={ev => ev.target.select()} aria-label={t('Page link')} />
          <button className="btn-solid" onClick={copy}>{copied ? t('Copied!') : t('Copy link')}</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

// Uses the phone's own share menu when available, otherwise shows the share sheet.
export default function ShareButton({ label = false, className = 'icon-btn' }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const busy = useRef(false);
  const onClick = async () => {
    const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (navigator.share && isTouch && !busy.current) {
      busy.current = true;
      try { await navigator.share({ title: document.title, url: window.location.href.split('#')[0] }); return; }
      catch (err) { if (err && err.name === 'AbortError') return; }
      finally { busy.current = false; }
    }
    setOpen(true);
  };
  return (
    <>
      <button type="button" className={className} onClick={onClick} aria-label={t('Share this page')} title={t('Share this page')}>
        <ShareIcon />{label && <span>{t('Share')}</span>}
      </button>
      {open && <ShareSheet onClose={() => setOpen(false)} />}
    </>
  );
}
