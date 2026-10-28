import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, auth } from '../lib/api.js';
import { clearSlotCache } from '../lib/slots.jsx';
import { refreshSiteSlots } from '../lib/siteSlots.js';
import SlotEditor from './SlotEditor.jsx';
import MediaLibrary from './MediaLibrary.jsx';
import { PAGE_NAMES, itemThumb } from './util.js';
import './admin.css';

function Login({ onDone }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async e => {
    e.preventDefault(); setErr(''); setBusy(true);
    try {
      const { token } = await api('/auth/login', { method: 'POST', body: { email, password } });
      auth.set(token); onDone();
    } catch (e2) { setErr(e2.message); } finally { setBusy(false); }
  };
  return (
    <div className="adm adm-login-wrap">
      <form className="adm-login" onSubmit={submit}>
        <div className="adm-brand"><span className="adm-logo">S</span><div><b>Jaggery website</b><small>Admin panel</small></div></div>
        <label>Email<input type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required /></label>
        {err && <div className="adm-err">{err}</div>}
        <button className="adm-btn primary" disabled={busy}>{busy ? 'Logging in…' : 'Log in'}</button>
        <Link to="/" className="adm-link">← Back to the website</Link>
      </form>
    </div>
  );
}

function SlotCard({ slot, onOpen }) {
  const first = slot.items[0];
  const thumb = itemThumb(first);
  const type = first ? (first.type === 'youtube' ? 'YouTube' : first.type === 'video' ? 'Video' : 'Photo') : null;
  return (
    <button type="button" className={'adm-card' + (slot.items.length ? '' : ' empty')} onClick={() => onOpen(slot)}>
      <span className="adm-thumb">
        {thumb ? <img src={thumb} alt="" loading="lazy" referrerPolicy="no-referrer" onError={e => { e.currentTarget.style.visibility = 'hidden'; }} /> : <span className="adm-thumb-empty">{slot.kind === 'video' ? 'Insert video' : 'Insert photo'}</span>}
        {type && <em>{type}{slot.items.length > 1 ? ` +${slot.items.length - 1}` : ''}</em>}
      </span>
      <span className="adm-card-body">
        <b>{slot.label || slot.slotId}</b>
        <small>{slot.slotId} · {slot.kind === 'video' ? 'video box' : 'photo box'}</small>
      </span>
    </button>
  );
}

function Dashboard({ onLogout }) {
  const [slots, setSlots] = useState(null);
  const [err, setErr] = useState('');
  const [page, setPage] = useState('all');
  const [filter, setFilter] = useState('all');
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null);
  const [tab, setTab] = useState('boxes');

  const load = useCallback(() => {
    api('/admin/slots').then(setSlots).catch(e => (e.status === 401 ? onLogout() : setErr(e.message)));
  }, [onLogout]);
  useEffect(load, [load]);

  const counts = useMemo(() => {
    const c = {};
    for (const s of slots || []) {
      c[s.page] = c[s.page] || { total: 0, filled: 0 };
      c[s.page].total++; if (s.items.length) c[s.page].filled++;
    }
    return c;
  }, [slots]);

  const shown = (slots || []).filter(s =>
    (page === 'all' || s.page === page) &&
    (filter === 'all' || (filter === 'empty' ? !s.items.length : s.items.length > 0)) &&
    (!q || (s.label + ' ' + s.slotId).toLowerCase().includes(q.toLowerCase())));
  const total = slots ? slots.length : 0;
  const filled = slots ? slots.filter(s => s.items.length).length : 0;

  const onSaved = updated => {
    setSlots(list => list.map(s => (s.slotId === updated.slotId ? updated : s)));
    clearSlotCache();
    if (updated.page === 'global') refreshSiteSlots();
    setEditing(null);
  };

  return (
    <div className="adm">
      <header className="adm-top">
        <div className="adm-brand"><span className="adm-logo">S</span><div><b>Jaggery website</b><small>Admin panel</small></div></div>
        <nav className="adm-tabs">
          <button className={tab === 'boxes' ? 'on' : ''} onClick={() => setTab('boxes')}>Photo &amp; video boxes</button>
          <button className={tab === 'library' ? 'on' : ''} onClick={() => setTab('library')}>Media library</button>
        </nav>
        <div className="adm-top-right">
          <a className="adm-btn" href="/" target="_blank" rel="noreferrer">View website ↗</a>
          <button className="adm-btn" onClick={onLogout}>Log out</button>
        </div>
      </header>

      {tab === 'library' ? <MediaLibrary /> : (
        <div className="adm-main">
          <aside className="adm-side">
            <div className="adm-progress">
              <b>{filled} of {total}</b> boxes filled
              <span><i style={{ width: total ? `${(filled / total) * 100}%` : 0 }} /></span>
            </div>
            <button className={'adm-page' + (page === 'all' ? ' on' : '')} onClick={() => setPage('all')}>All pages<small>{filled}/{total}</small></button>
            {Object.entries(PAGE_NAMES).map(([k, name]) => counts[k] && (
              <button key={k} className={'adm-page' + (page === k ? ' on' : '')} onClick={() => setPage(k)}>
                {name}<small>{counts[k].filled}/{counts[k].total}</small>
              </button>
            ))}
          </aside>
          <section className="adm-content">
            <div className="adm-toolbar">
              <input type="search" placeholder="Search boxes, e.g. crusher" value={q} onChange={e => setQ(e.target.value)} />
              <div className="adm-seg">
                {['all', 'empty', 'filled'].map(f => <button key={f} className={filter === f ? 'on' : ''} onClick={() => setFilter(f)}>{f[0].toUpperCase() + f.slice(1)}</button>)}
              </div>
            </div>
            {err && <div className="adm-err">{err}</div>}
            {!slots ? <p className="adm-muted">Loading…</p> : (
              shown.length ? <div className="adm-grid">{shown.map(s => <SlotCard key={s.slotId} slot={s} onOpen={setEditing} />)}</div>
                : <p className="adm-muted">No boxes match.</p>
            )}
          </section>
        </div>
      )}
      {editing && <SlotEditor slot={editing} onClose={() => setEditing(null)} onSaved={onSaved} />}
    </div>
  );
}

export default function Admin() {
  const [state, setState] = useState(auth.token ? 'checking' : 'login');
  useEffect(() => {
    document.title = 'Admin · Jaggery website';
    if (state !== 'checking') return;
    api('/auth/me').then(() => setState('in')).catch(() => setState('login'));
  }, [state]);
  const logout = useCallback(() => { auth.set(null); setState('login'); }, []);
  if (state === 'checking') return <div className="adm adm-login-wrap"><p className="adm-muted">Loading…</p></div>;
  if (state === 'login') return <Login onDone={() => setState('in')} />;
  return <Dashboard onLogout={logout} />;
}
