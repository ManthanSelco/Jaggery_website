import { createContext, useContext, useEffect, useState } from 'react';
import { api } from './api.js';

// Loads every media box of one page in a single request.
const SlotsContext = createContext({ slots: {}, loaded: false });
const cache = new Map();

export function SlotsProvider({ page, children }) {
  const [state, setState] = useState(() => ({ slots: cache.get(page) || {}, loaded: cache.has(page) }));
  useEffect(() => {
    let alive = true;
    api(`/slots?page=${encodeURIComponent(page)}`)
      .then(slots => { cache.set(page, slots); if (alive) setState({ slots, loaded: true }); })
      .catch(() => { if (alive) setState(s => ({ ...s, loaded: true })); });
    return () => { alive = false; };
  }, [page]);
  return <SlotsContext.Provider value={state}>{children}</SlotsContext.Provider>;
}

export function useSlot(id) {
  const { slots, loaded } = useContext(SlotsContext);
  return { items: slots[id] || [], loaded };
}

export function clearSlotCache() { cache.clear(); }
