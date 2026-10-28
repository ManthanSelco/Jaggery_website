import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// English is the source text. Kannada comes from i18n/kn.json (English sentence -> Kannada sentence),
// loaded only when a visitor switches to Kannada.
const LangContext = createContext({ lang: 'en', setLang: () => {}, dict: null });
const KEY = 'jaggery_lang';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem(KEY) === 'kn' ? 'kn' : 'en'; } catch { return 'en'; }
  });
  const [dict, setDict] = useState(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('lang-kn', lang === 'kn');
    if (lang === 'kn' && !dict) import('../i18n/kn.json').then(m => setDict(m.default));
  }, [lang, dict]);

  const setLang = useCallback(l => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch { /* storage blocked */ }
  }, []);

  return <LangContext.Provider value={{ lang, setLang, dict }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// t("English text") -> text in the current language (falls back to English).
export function useT() {
  const { lang, dict } = useContext(LangContext);
  return useCallback(s => {
    if (lang !== 'kn' || !dict || typeof s !== 'string') return s;
    const key = s.trim();
    const tr = dict[key];
    if (!tr) return s;
    const lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0];
    return lead + tr + trail;
  }, [lang, dict]);
}
