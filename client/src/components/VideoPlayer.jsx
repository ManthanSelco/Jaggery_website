import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useT } from '../lib/i18n.jsx';
import { watchVideo, holdVideos } from '../lib/videoManager.js';

const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ytThumb = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const PlayIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#2B1B0F" aria-hidden="true"><path d="M7 4l13 8-13 8z" /></svg>
);

function hideOnError(e) { e.currentTarget.style.visibility = 'hidden'; }

// Full-screen viewer with sound for uploaded videos.
function VideoModal({ clip, onClose }) {
  const t = useT();
  const ref = useRef(null);
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    const release = holdVideos();
    ref.current?.play().catch(() => {});
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; release(); };
  }, [onClose]);
  return createPortal(
    <div className="vp-modal" role="dialog" aria-modal="true" aria-label={clip.title || 'Video'} onClick={e => e.target === e.currentTarget && onClose()}>
      <button className="vp-close" aria-label="Close video" onClick={onClose} autoFocus>×</button>
      <div className="box">
        <video ref={ref} src={clip.src} poster={clip.poster} controls playsInline />
        {clip.title && <div className="t">{t(clip.title)}</div>}
      </div>
    </div>,
    document.body,
  );
}

function Stage({ clip, fixedHeight }) {
  const t = useT();
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const [ytOn, setYtOn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => { setYtOn(false); }, [clip]);
  useEffect(() => (ytOn ? holdVideos() : undefined), [ytOn]);

  // Silent autoplay: only the 1-2 videos most on screen play (see videoManager).
  useEffect(() => {
    if (reduceMotion || clip.type === 'youtube') return;
    return watchVideo(videoRef.current, stageRef.current);
  }, [clip]);

  const activate = () => {
    if (clip.type === 'youtube') setYtOn(true);
    else { videoRef.current?.pause(); setOpen(true); }
  };
  const onKey = e => { if ((e.key === 'Enter' || e.key === ' ') && !ytOn) { e.preventDefault(); activate(); } };
  const style = fixedHeight ? { aspectRatio: 'auto', height: '100%' } : undefined;
  const caption = (
    <div className="vp-cap"><b>{t(clip.title)}</b>{clip.caption && <span>{t(clip.caption)}</span>}</div>
  );

  if (clip.type === 'youtube') {
    return (
      <div ref={stageRef} className={'vp-stage' + (ytOn ? ' is-yt-on' : '')} style={style} role={ytOn ? undefined : 'button'} tabIndex={ytOn ? undefined : 0}
        aria-label={ytOn ? undefined : `Play video: ${clip.title || ''}`} onClick={ytOn ? undefined : activate} onKeyDown={onKey}>
        {ytOn ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={clip.title || 'YouTube video'} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <>
            <img className="vp-bg" src={ytThumb(clip.youtubeId)} alt="" onError={hideOnError} />
            <img className="vp-thumb" src={ytThumb(clip.youtubeId)} alt="" loading="lazy" onError={hideOnError} />
            <span className="vp-tag">YouTube</span>
            <span className="vp-big"><PlayIcon /></span>
            {caption}
          </>
        )}
      </div>
    );
  }
  return (
    <>
      <div ref={stageRef} className="vp-stage" style={style} role="button" tabIndex={0} aria-label={`Open video with sound: ${clip.title || ''}`} onClick={activate} onKeyDown={onKey}>
        {clip.poster && <img className="vp-bg" src={clip.poster} alt="" />}
        <video ref={videoRef} src={clip.src} poster={clip.poster} muted loop playsInline preload="none" aria-label={clip.title} />
        <span className="vp-tag"><i />{t('From the unit')}</span>
        <button className="vp-btn" type="button" tabIndex={-1}><PlayIcon size={13} />{t(clip.button || 'Watch with sound')}</button>
        {reduceMotion && <span className="vp-big"><PlayIcon /></span>}
        {caption}
      </div>
      {open && <VideoModal clip={clip} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function VideoPlayer({ clips, style, fixedHeight, id }) {
  const t = useT();
  const [i, setI] = useState(0);
  const clip = clips[Math.min(i, clips.length - 1)];
  return (
    <div className="vp" style={style} id={id}>
      <Stage clip={clip} fixedHeight={fixedHeight} />
      {clips.length > 1 && !fixedHeight && (
        <div className="vp-list">
          {clips.map((c, n) => (
            <button key={n} type="button" className={'vp-item' + (n === i ? ' on' : '')} onClick={() => setI(n)}>
              <span className="th">
                <img src={c.type === 'youtube' ? ytThumb(c.youtubeId) : c.poster} alt="" loading="lazy" onError={hideOnError} />
                <em>{c.type === 'youtube' ? 'YouTube' : `${t('Clip')} ${n + 1}`}</em>
              </span>
              {t(c.title)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
