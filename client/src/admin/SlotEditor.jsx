import { useEffect, useRef, useState } from 'react';
import { api, uploadFile } from '../lib/api.js';
import MediaLibrary from './MediaLibrary.jsx';
import { PAGE_NAMES, itemThumb } from './util.js';

const parseYouTubeId = v => {
  v = String(v).trim();
  if (/^[\w-]{11}$/.test(v)) return v;
  const m = v.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|vid:)([\w-]{11})/);
  return m ? m[1] : null;
};
const fmtMb = b => (b / 1024 / 1024).toFixed(1) + ' MB';
const shortLabel = label => (label || '').split(' — ').pop();

function ItemRow({ it, i, count, onChange, onMove, onRemove }) {
  const set = (k, v) => onChange({ ...it, [k]: v });
  const thumb = itemThumb(it);
  return (
    <div className="adm-item">
      <div className="adm-item-thumb">
        {thumb ? <img src={thumb} alt="" referrerPolicy="no-referrer" onError={e => { e.currentTarget.style.visibility = 'hidden'; }} /> : null}
        <em>{it.type === 'youtube' ? 'YouTube' : it.type === 'video' ? 'Video' : 'Photo'}</em>
      </div>
      <div className="adm-item-fields">
        <label>Title<input value={it.title || ''} maxLength={200} onChange={e => set('title', e.target.value)} placeholder={it.type === 'image' ? 'Optional' : 'Shown on the video, e.g. Step 3 · Crushing'} /></label>
        <label>Caption<input value={it.caption || ''} maxLength={400} onChange={e => set('caption', e.target.value)} placeholder="One short line" /></label>
        {it.type === 'image' && (
          <div className="adm-row2">
            <label>Photo credit<input value={it.credit?.text || ''} onChange={e => set('credit', { ...(it.credit || {}), text: e.target.value })} placeholder="e.g. Wikimedia Commons" /></label>
            <label>Credit link<input value={it.credit?.url || ''} onChange={e => set('credit', { ...(it.credit || {}), url: e.target.value })} placeholder="https://…" /></label>
          </div>
        )}
        {it.type === 'video' && (
          <label>Button text<input value={it.button || ''} maxLength={40} onChange={e => set('button', e.target.value)} placeholder="Watch with sound" /></label>
        )}
        {it.type === 'youtube' && <small className="adm-muted">YouTube ID: {it.youtubeId}</small>}
      </div>
      <div className="adm-item-ctrl">
        <button type="button" title="Move up" disabled={i === 0} onClick={() => onMove(-1)}>↑</button>
        <button type="button" title="Move down" disabled={i === count - 1} onClick={() => onMove(1)}>↓</button>
        <button type="button" title="Remove" className="danger" onClick={onRemove}>✕</button>
      </div>
    </div>
  );
}

export default function SlotEditor({ slot, onClose, onSaved }) {
  const [items, setItems] = useState(() => JSON.parse(JSON.stringify(slot.items)));
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');
  const [mode, setMode] = useState(slot.kind === 'video' ? 'upload' : 'upload');
  const [yt, setYt] = useState('');
  const [url, setUrl] = useState('');
  const [mute, setMute] = useState(false);
  const [rotate, setRotate] = useState('0');
  const [jobs, setJobs] = useState([]);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef(null);
  // On Vercel the server cannot store files: show how to add media instead of the drop zone.
  const [canUpload, setCanUpload] = useState(true);
  useEffect(() => { api('/health').then(h => setCanUpload(h.uploads !== false)).catch(() => {}); }, []);

  const update = next => { setItems(next); setDirty(true); };
  const add = it => update([...items, it]);

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && tryClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  });

  function tryClose() {
    if (jobs.some(j => j.state !== 'done' && j.state !== 'error')) return;
    if (dirty && !window.confirm('You have unsaved changes. Close without saving?')) return;
    onClose();
  }

  const handleFiles = async files => {
    for (const file of Array.from(files)) {
      const key = Math.random().toString(36).slice(2);
      const isVideo = file.type.startsWith('video/') || /\.(mp4|mov|m4v|webm|mkv|avi|3gp)$/i.test(file.name);
      setJobs(j => [...j, { key, name: file.name, size: file.size, progress: 0, state: 'uploading' }]);
      const patch = p => setJobs(j => j.map(x => (x.key === key ? { ...x, ...p } : x)));
      try {
        const m = await uploadFile(file, { mute: isVideo && mute, rotate: isVideo ? rotate : '0' }, p => patch({ progress: p, state: p >= 1 ? 'compressing' : 'uploading' }));
        patch({ state: 'done', after: m.sizeAfter });
        setItems(list => [...list, m.type === 'video'
          ? { type: 'video', src: m.src, poster: m.poster, title: '', caption: '' }
          : { type: 'image', src: m.src, caption: shortLabel(slot.label) }]);
        setDirty(true);
      } catch (e) {
        patch({ state: 'error', error: e.message });
      }
    }
  };

  const addYouTube = () => {
    const id = parseYouTubeId(yt);
    if (!id) { setErr('That does not look like a YouTube link. Paste the full link, e.g. https://youtu.be/abc123XYZ00'); return; }
    setErr(''); add({ type: 'youtube', youtubeId: id, title: '', caption: '' }); setYt('');
  };
  const addUrl = () => {
    if (!/^https?:\/\//.test(url.trim())) { setErr('Image link must start with https://'); return; }
    setErr(''); add({ type: 'image', src: url.trim(), caption: shortLabel(slot.label), credit: { text: '', url: '' } }); setUrl('');
  };

  const save = async () => {
    setSaving(true); setErr('');
    try { onSaved(await api(`/admin/slots/${slot.slotId}`, { method: 'PUT', body: { items } })); }
    catch (e) { setErr(e.message); setSaving(false); }
  };

  const busy = jobs.some(j => j.state === 'uploading' || j.state === 'compressing');

  return (
    <div className="adm-modal" onMouseDown={e => e.target === e.currentTarget && tryClose()}>
      <div className="adm-dialog" role="dialog" aria-modal="true" aria-label={`Edit ${slot.label}`}>
        <div className="adm-dialog-head">
          <div>
            <small>{PAGE_NAMES[slot.page] || slot.page} · {slot.kind === 'video' ? 'video box' : 'photo box'} · {slot.slotId}</small>
            <h2>{slot.label || slot.slotId}</h2>
          </div>
          <div className="adm-head-btns">
            <a className="adm-btn" href={`${slot.pageRoute}#slot-${slot.slotId}`} target="_blank" rel="noreferrer">See on page ↗</a>
            <button className="adm-x" onClick={tryClose} aria-label="Close">×</button>
          </div>
        </div>

        <div className="adm-dialog-body">
          <h3>In this box {items.length > 1 && <small className="adm-muted">· visitors can switch between them</small>}</h3>
          {items.length ? items.map((it, i) => (
            <ItemRow key={i} it={it} i={i} count={items.length}
              onChange={v => update(items.map((x, k) => (k === i ? v : x)))}
              onMove={d => { const n = [...items]; [n[i], n[i + d]] = [n[i + d], n[i]]; update(n); }}
              onRemove={() => update(items.filter((_, k) => k !== i))} />
          )) : <p className="adm-muted">Empty: the page shows the "{slot.kind === 'video' ? 'Insert video' : 'Insert photo'}" placeholder.</p>}

          <h3>Add</h3>
          <div className="adm-seg adm-addtabs">
            <button className={mode === 'upload' ? 'on' : ''} onClick={() => setMode('upload')}>Upload photo / video</button>
            <button className={mode === 'yt' ? 'on' : ''} onClick={() => setMode('yt')}>YouTube link</button>
            <button className={mode === 'url' ? 'on' : ''} onClick={() => setMode('url')}>Image link</button>
            <button className={mode === 'lib' ? 'on' : ''} onClick={() => setMode('lib')}>From library</button>
          </div>

          {mode === 'upload' && !canUpload && (
            <div className="adm-upload adm-muted" style={{ padding: '18px', lineHeight: 1.6 }}>
              <b>Uploading is off on the live (Vercel) site.</b><br />
              Upload on your computer (<code>npm run dev</code> → /admin), then run <code>npm run sync-uploads</code>, commit and push to GitHub.
              Or use <b>YouTube link</b> / <b>Image link</b> / <b>From library</b> here.
            </div>
          )}
          {mode === 'upload' && canUpload && (
            <div className="adm-upload">
              <div className={'adm-drop' + (drag ? ' over' : '')} onClick={() => fileRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)}
                onDrop={e => { e.preventDefault(); setDrag(false); handleFiles(e.dataTransfer.files); }}>
                <b>Drop photos or videos here</b>
                <span>or click to choose · photos become WebP (max 1600 px) · videos become 720p MP4</span>
                <input ref={fileRef} type="file" accept="image/*,video/*" multiple hidden onChange={e => { handleFiles(e.target.files); e.target.value = ''; }} />
              </div>
              <div className="adm-vopts">
                <b>For videos:</b>
                <label className="adm-check"><input type="checkbox" checked={mute} onChange={e => setMute(e.target.checked)} /> Remove sound</label>
                <label>Turn video
                  <select value={rotate} onChange={e => setRotate(e.target.value)}>
                    <option value="0">No turn</option>
                    <option value="90">90° right</option>
                    <option value="-90">90° left</option>
                    <option value="180">Upside down</option>
                  </select>
                </label>
              </div>
              {jobs.map(j => (
                <div key={j.key} className={'adm-job ' + j.state}>
                  <span>{j.name} <small>({fmtMb(j.size)})</small></span>
                  <span>
                    {j.state === 'uploading' && `Uploading ${Math.round(j.progress * 100)}%`}
                    {j.state === 'compressing' && 'Compressing on the server…'}
                    {j.state === 'done' && `Added · ${fmtMb(j.after || 0)}`}
                    {j.state === 'error' && j.error}
                  </span>
                  {(j.state === 'uploading' || j.state === 'compressing') && <i style={{ width: `${Math.round(j.progress * 100)}%` }} />}
                </div>
              ))}
            </div>
          )}
          {mode === 'yt' && (
            <div className="adm-inline">
              <input value={yt} onChange={e => setYt(e.target.value)} placeholder="https://youtu.be/… or https://www.youtube.com/watch?v=…" onKeyDown={e => e.key === 'Enter' && addYouTube()} />
              <button className="adm-btn" onClick={addYouTube}>Add video</button>
            </div>
          )}
          {mode === 'url' && (
            <div className="adm-inline">
              <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://… link to a photo you are allowed to use" onKeyDown={e => e.key === 'Enter' && addUrl()} />
              <button className="adm-btn" onClick={addUrl}>Add photo</button>
            </div>
          )}
          {mode === 'lib' && (
            <MediaLibrary compact onPick={m => add(m.type === 'video'
              ? { type: 'video', src: m.src, poster: m.poster, title: '', caption: '' }
              : { type: 'image', src: m.src, caption: shortLabel(slot.label) })} />
          )}
          {err && <div className="adm-err">{err}</div>}
        </div>

        <div className="adm-dialog-foot">
          <button className="adm-btn" disabled={!items.length} onClick={() => update([])}>Empty this box</button>
          <span style={{ flex: 1 }} />
          <button className="adm-btn" onClick={tryClose}>Cancel</button>
          <button className="adm-btn primary" disabled={!dirty || saving || busy} onClick={save}>{saving ? 'Saving…' : busy ? 'Wait for upload…' : 'Save'}</button>
        </div>
      </div>
    </div>
  );
}
