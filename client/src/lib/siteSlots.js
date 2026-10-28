import { useEffect, useState } from 'react';
import { api } from './api.js';

// Site-wide media (e.g. the SELCO Foundation logo), editable in the admin panel.
let cache = null;
let pending = null;
const listeners = new Set();

function load() {
  if (!pending) {
    pending = api('/slots?page=global')
      .then(d => { cache = d || {}; })
      .catch(() => { cache = {}; })
      .finally(() => listeners.forEach(fn => fn(cache)));
  }
  return pending;
}

export function useSiteSlot(id) {
  const [data, setData] = useState(cache);
  useEffect(() => {
    listeners.add(setData);
    if (!cache) load(); else setData(cache);
    return () => listeners.delete(setData);
  }, []);
  return (data && data[id]) || [];
}

export function refreshSiteSlots() { cache = null; pending = null; load(); }
