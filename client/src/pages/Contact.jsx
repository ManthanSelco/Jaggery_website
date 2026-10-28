import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import HeroBackdrop from '../components/HeroBackdrop.jsx';
import ContactBlock from '../components/ContactBlock.jsx';
import { CONTACT } from '../lib/contact.js';
import { usePageTitle } from '../lib/hooks.js';
import { useT } from '../lib/i18n.jsx';

export default function Contact() {
  const t = useT();
  usePageTitle(t('Jaggery · Contact us'));
  return (
    <div className="pg pg-contact">
      <SiteHeader active="/contact" />
      <section className="page-hero" data-hero="contact">
        <HeroBackdrop image="/hero/plan-your-unit.jpg" />
        <div className="wrap" style={{ paddingTop: '48px', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ fontSize: '14px', fontWeight: 600 }}>
            <Link to="/">{t('Home')}</Link>{t(' / Contact us')}
          </div>
          <h1 style={{ fontSize: '54px', lineHeight: 1.05, fontWeight: 600 }} id="h-contact-us">{t('Contact us')}</h1>
          <p style={{ fontSize: '19px', lineHeight: 1.5, maxWidth: '760px' }}>
            {t('Talk to the SELCO Foundation team about setting up or improving a jaggery unit: machines, solar power, finance or selling.')}
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '6px' }}>
            <a className="btn" href={'tel:' + CONTACT.phones[0].tel} style={{ background: 'var(--terra)', color: '#fff' }}>{t('Call us')}</a>
            <a className="btn" href={'mailto:' + CONTACT.email} style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.8)' }}>{t('Send an email')}</a>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '56px', paddingBottom: '24px' }}>
        <ContactBlock variant="page" />
        <p className="muted" style={{ marginTop: '28px', fontSize: '14px' }}>
          {t('Details from')} <a href={CONTACT.contactPage} target="_blank" rel="noopener noreferrer">selcofoundation.org/contact-us</a>
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
