import ContactBlock from './ContactBlock.jsx';
import { useT } from '../lib/i18n.jsx';
import { SHOW_CONTACT } from '../lib/siteConfig.js';

// Same footer on every page: SELCO Foundation contact details + copyright.
// (Logo, menu, language and share are already in the header.)
export default function SiteFooter() {
  const t = useT();
  if (!SHOW_CONTACT) return null; // hidden for now (see src/lib/siteConfig.js)
  return (
    <footer className="site-footer">
      <div className="site-footer-contact"><ContactBlock /></div>
      <div className="site-footer-legal">© SELCO Foundation · {t('Livelihood value chains')}</div>
    </footer>
  );
}
