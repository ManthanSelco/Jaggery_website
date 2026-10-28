import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSlot } from '../lib/slots.jsx';
import { useT } from '../lib/i18n.jsx';
import { watchVideo, holdVideos } from '../lib/videoManager.js';

const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Full-bleed background for the top of each page: a looping video (home page, from the admin's
// "Home banner video" box) or a photo, with a dark overlay so the text stays readable.
export default function HeroBackdrop({ image, slotId }) {
  const t = useT();
  const { items } = useSlot(slotId || '__none');
  const video = slotId ? items.find(i => i.type === 'video') : null;
  const still = slotId ? items.find(i => i.type === 'image') : null;
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  // plays only while the top of the page is on screen (see videoManager)
  useEffect(() => {
    if (reduceMotion) return;
    return watchVideo(ref.current, ref.current && ref.current.parentElement);
  }, [video && video.src]);
  useEffect(() => (open ? holdVideos() : undefined), [open]);

  const poster = (video && video.poster) || (still && still.src) || image || '/hero/index.jpg';
  return (
    <>
      <div className="hero-backdrop" aria-hidden="true">
        {video ? (
          <video ref={ref} src={video.src} poster={poster} muted loop playsInline preload="metadata" />
        ) : (
          <img src={poster} alt="" />
        )}
      </div>
      {video && (
        <button type="button" className="hero-play" onClick={() => setOpen(true)}>
          <span className="hero-play-dot"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z" /></svg></span>
          {t('Watch the full video')}
        </button>
      )}
      {open && video && createPortal(
        <div className="vp-modal" role="dialog" aria-modal="true" onClick={e => e.target === e.currentTarget && setOpen(false)}>
          <button className="vp-close" aria-label={t('Close')} onClick={() => setOpen(false)} autoFocus>×</button>
          <div className="box"><video src={video.src} poster={video.poster} controls autoPlay playsInline />{video.title && <div className="t">{t(video.title)}</div>}</div>
        </div>,
        document.body,
      )}
    </>
  );
}
