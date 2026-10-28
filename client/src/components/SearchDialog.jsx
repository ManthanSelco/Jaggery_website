import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import index from '../lib/searchIndex.json';
import { useT } from '../lib/i18n.jsx';

const PAGE_LABEL = {
  index: 'Home', 'steps-1-4': 'Steps 1-4 · Cane to juice', 'steps-5-6': 'Steps 5-6 · Clarify and boil',
  'steps-7-11': 'Steps 7-11 · Cool to market', machines: 'Machines', 'plan-your-unit': 'Plan your unit',
  'case-study': 'Case study', 'more-case-studies': 'More stories',
};

export const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
);

// Searches every heading on the website (in English and Kannada) and jumps to that section.
export default function SearchDialog({ onClose }) {
  const t = useT();
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return index.filter(h => h.level <= 2).slice(0, 12);
    return index
      .map(h => ({ h, hay: (h.text + ' ' + t(h.text) + ' ' + t(PAGE_LABEL[h.page])).toLowerCase() }))
      .filter(({ hay }) => words.every(w => hay.includes(w)))
      .map(({ h }) => h)
      .slice(0, 30);
  }, [q, t]);

  const go = h => { onClose(); nav(h.route + (h.hash ? '#' + h.hash : '')); };
  const onKey = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(s + 1, results.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => Math.max(s - 1, 0)); }
    if (e.key === 'Enter' && results[sel]) go(results[sel]);
  };

  return createPortal(
    <div className="sheet-backdrop top" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className="search" role="dialog" aria-modal="true" aria-label={t('Search')}>
        <div className="search-bar">
          <SearchIcon />
          <input ref={inputRef} value={q} onChange={e => { setQ(e.target.value); setSel(0); }} onKeyDown={onKey}
            placeholder={t('Search steps, machines, case studies…')} aria-label={t('Search')} />
          <button className="icon-btn" onClick={onClose} aria-label={t('Close')}>×</button>
        </div>
        <ul className="search-results" role="listbox">
          {results.map((h, i) => (
            <li key={h.page + h.hash + h.text} role="option" aria-selected={i === sel}>
              <button className={i === sel ? 'on' : ''} onMouseEnter={() => setSel(i)} onClick={() => go(h)}>
                <b>{t(h.text)}</b><small>{t(PAGE_LABEL[h.page])}</small>
              </button>
            </li>
          ))}
          {!results.length && <li className="search-empty">{t('No results. Try another word.')}</li>}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
