import { CONTACT } from '../lib/contact.js';
import { useT } from '../lib/i18n.jsx';

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const PHONE = 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z';
const MAIL = 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6';
const PIN = 'M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z';
const GLOBE = 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z';

// variant "footer": compact strip on the dark footer; "page": full cards for /contact
export default function ContactBlock({ variant = 'footer' }) {
  const t = useT();
  const offices = variant === 'footer' ? CONTACT.offices.slice(0, 1) : CONTACT.offices;
  return (
    <div className={'contact contact-' + variant} id={variant === 'footer' ? 'contact' : undefined}>
      {variant === 'footer' && <h3 className="contact-title">{t('Contact SELCO Foundation')}</h3>}
      <div className="contact-grid">
        <div className="contact-item">
          <span className="contact-ic"><Icon d={PHONE} /></span>
          <div>
            <b>{t('Phone')}</b>
            {CONTACT.phones.map(p => <a key={p.tel} href={'tel:' + p.tel}>{p.label}</a>)}
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-ic"><Icon d={MAIL} /></span>
          <div>
            <b>{t('Email')}</b>
            <a href={'mailto:' + CONTACT.email}>{CONTACT.email}</a>
          </div>
        </div>
        {offices.map(o => (
          <div className="contact-item" key={o.city}>
            <span className="contact-ic"><Icon d={PIN} /></span>
            <div>
              <b>{t(o.city)}{o.note ? ' · ' + t(o.note) : ''}</b>
              <span className="contact-addr">{o.address}</span>
              <a href={o.map} target="_blank" rel="noopener noreferrer">{t('Open in Maps')} ↗</a>
            </div>
          </div>
        ))}
        <div className="contact-item">
          <span className="contact-ic"><Icon d={GLOBE} /></span>
          <div>
            <b>{t('Website & social media')}</b>
            <a href={CONTACT.website} target="_blank" rel="noopener noreferrer">selcofoundation.org ↗</a>
            <span className="contact-social">
              {CONTACT.social.map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
