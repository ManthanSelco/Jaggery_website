import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brand from './Brand.jsx';
import ShareButton from './ShareButton.jsx';
import SearchDialog, { SearchIcon } from './SearchDialog.jsx';
import { useLang, useT } from '../lib/i18n.jsx';

export const NAV = [
  { to: '/', key: '/', label: 'Home' },
  { to: '/steps-1-4-cane-to-juice', key: '/steps', label: 'Process' },
  { to: '/machines', key: '/machines', label: 'Machines' },
  { to: '/plan-your-unit', key: '/plan-your-unit', label: 'Plan your unit' },
  { to: '/case-study', key: '/case-study', label: 'Case study' },
  { to: '/more-case-studies', key: '/more-case-studies', label: 'More stories' },
  { to: '/contact', key: '/contact', label: 'Contact' },
];

export function LangSwitch({ className = '' }) {
  const { lang, setLang } = useLang();
  return (
    <div className={'lang-switch ' + className} role="group" aria-label="Language / ಭಾಷೆ">
      <button type="button" className={lang === 'en' ? 'on' : ''} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
      <button type="button" className={lang === 'kn' ? 'on' : ''} aria-pressed={lang === 'kn'} onClick={() => setLang('kn')} lang="kn">ಕನ್ನಡ</button>
    </div>
  );
}

// Site header. `transparent` floats over the home page video until the visitor scrolls.
// Page-specific bars (e.g. the 1-11 step bar) are passed as children.
export default function SiteHeader({ active, transparent = false, children }) {
  const t = useT();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);
  useEffect(() => { setMenu(false); }, [pathname]);
  useEffect(() => {
    const onKey = e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearch(true); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const solid = !transparent || scrolled || menu;
  return (
    <header className={'site-header' + (transparent ? ' is-overlay' : '') + (solid ? ' is-solid' : '')}>
      <div className="site-bar">
        <Brand light={!solid} />
        <nav className="site-nav" aria-label="Main">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} className={active === n.key ? 'on' : ''} aria-current={active === n.key ? 'page' : undefined}>{t(n.label)}</Link>
          ))}
        </nav>
        <div className="site-actions">
          <button type="button" className="icon-btn" onClick={() => setSearch(true)} aria-label={t('Search')} title={t('Search') + ' (Ctrl+K)'}><SearchIcon /></button>
          <ShareButton />
          <LangSwitch className="hide-sm" />
          <button type="button" className={'icon-btn burger' + (menu ? ' open' : '')} aria-label={t('Menu')} aria-expanded={menu} onClick={() => setMenu(m => !m)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {menu && (
        <div className="mobile-menu">
          <nav aria-label="Main">
            {NAV.map(n => <Link key={n.to} to={n.to} className={active === n.key ? 'on' : ''}>{t(n.label)}</Link>)}
          </nav>
          <div className="mobile-menu-foot">
            <LangSwitch />
            <ShareButton label className="btn-ghost" />
          </div>
        </div>
      )}
      {children && <div className="site-subbar">{children}</div>}
      {search && <SearchDialog onClose={() => setSearch(false)} />}
    </header>
  );
}
