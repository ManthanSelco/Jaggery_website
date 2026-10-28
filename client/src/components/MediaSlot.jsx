import { useState } from 'react';
import { useSlot } from '../lib/slots.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import { useT } from '../lib/i18n.jsx';

// A media box from the original design. Its content comes from MongoDB (edited in the admin panel).
// While the box is empty nothing is shown on the website.
export default function MediaSlot({ id, kind, style, children }) {
  const t = useT();
  const { items, loaded } = useSlot(id);
  const [broken, setBroken] = useState({});
  const [n, setN] = useState(0);
  const domId = `slot-${id}`;
  const placeholderClass = 'media' + (kind === 'video' ? ' vid' : '');

  if (!loaded) return <div id={domId} className={placeholderClass + ' is-loading'} style={style} aria-hidden="true" />;

  const motion = items.filter(it => it.type === 'video' || it.type === 'youtube');
  if (motion.length) {
    const fixedHeight = !!(style && style.height);
    let s = style;
    if (s && !fixedHeight) { s = { ...s }; delete s.minHeight; }
    return <VideoPlayer id={domId} clips={motion} style={s} fixedHeight={fixedHeight} />;
  }

  const images = items.filter((it, k) => it.type === 'image' && !broken[k]);
  // Nothing to show yet: hide the box on the website (it can still be filled from the admin panel).
  if (!images.length) return null;

  const img = images[Math.min(n, images.length - 1)];
  const k = items.indexOf(img);
  return (
    <figure id={domId} className="media ph" style={style}>
      <img src={img.src} alt={t(img.caption || img.title || '')} loading="lazy" referrerPolicy="no-referrer"
        onError={() => setBroken(b => ({ ...b, [k]: true }))} />
      {(img.caption || img.title) && <figcaption>{t(img.caption || img.title)}</figcaption>}
      {img.credit && img.credit.url && (
        <a className="ph-credit" href={img.credit.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
          {t('Photo')}: {img.credit.text || 'source'}
        </a>
      )}
      {images.length > 1 && (
        <div className="ph-dots">
          {images.map((_, d) => (
            <button key={d} type="button" aria-label={`Photo ${d + 1}`} className={d === n ? 'on' : ''} onClick={e => { e.preventDefault(); setN(d); }} />
          ))}
        </div>
      )}
    </figure>
  );
}
