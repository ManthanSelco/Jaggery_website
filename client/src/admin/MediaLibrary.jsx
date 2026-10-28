import { useEffect, useState } from 'react';
import { api } from '../lib/api.js';

const fmt = b => (b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.round(b / 1024) + ' KB');

// All uploaded photos and videos. With onPick it works as a picker inside the box editor.
export default function MediaLibrary({ onPick, compact }) {
  const [list, setList] = useState(null);
  const [type, setType] = useState('');
  const [err, setErr] = useState('');
  const load = () => api('/admin/media' + (type ? `?type=${type}` : '')).then(setList).catch(e => setErr(e.message));
  useEffect(() => { load(); }, [type]); // eslint-disable-line react-hooks/exhaustive-deps

  const del = async m => {
    if (!window.confirm(`Delete ${m.originalName || 'this file'} from the library?`)) return;
    try { await api(`/admin/media/${m._id}`, { method: 'DELETE' }); setList(l => l.filter(x => x._id !== m._id)); }
    catch (e) { setErr(e.message); }
  };

  return (
    <div className={compact ? 'adm-lib compact' : 'adm-lib adm-content'}>
      <div className="adm-toolbar">
        {!compact && <h2>Media library</h2>}
        <div className="adm-seg">
          {[['', 'All'], ['image', 'Photos'], ['video', 'Videos']].map(([v, l]) => <button key={v} className={type === v ? 'on' : ''} onClick={() => setType(v)}>{l}</button>)}
        </div>
      </div>
      {err && <div className="adm-err">{err}</div>}
      {!list ? <p className="adm-muted">Loading…</p> : !list.length ? <p className="adm-muted">Nothing uploaded yet.</p> : (
        <div className="adm-grid">
          {list.map(m => (
            <div key={m._id} className="adm-card lib">
              <span className="adm-thumb">
                <img src={m.type === 'video' ? m.poster : m.src} alt="" loading="lazy" />
                <em>{m.type === 'video' ? 'Video' : 'Photo'}</em>
              </span>
              <span className="adm-card-body">
                <b title={m.originalName}>{m.originalName || m.src.split('/').pop()}</b>
                <small>{m.sizeBefore && m.sizeBefore !== m.sizeAfter ? `${fmt(m.sizeBefore)} → ${fmt(m.sizeAfter)}` : fmt(m.sizeAfter || 0)}</small>
              </span>
              <span className="adm-card-actions">
                {onPick ? <button className="adm-btn primary" onClick={() => onPick(m)}>Add</button>
                  : <>
                    <a className="adm-btn" href={m.src} target="_blank" rel="noreferrer">Open</a>
                    <button className="adm-btn danger" onClick={() => del(m)}>Delete</button>
                  </>}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
