'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';

const LanguageContext = createContext();

const supported = ['it', 'en', 'de'];
import itMessages from '@/messages/it.json';
const messages = {
  it: itMessages,
  en: () => import('@/messages/en.json').then(m => m.default),
  de: () => import('@/messages/de.json').then(m => m.default),
};

function normalizeLocale(raw) {
  return supported.includes(raw) ? raw : 'it';
}

export function LanguageProvider({ children }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const urlLocale = normalizeLocale(params?.locale);
  const [locale, setLocaleState] = useState(urlLocale);
  const [loadedMessages, setLoadedMessages] = useState(itMessages);
  const [ready, setReady] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLocaleState(urlLocale);
  }, [urlLocale]);

  useEffect(() => {
    const msgs = messages[locale];
    if (typeof msgs === 'function') {
      setLoading(true);
      setReady(false);
      msgs().then((m) => {
        setLoadedMessages(m);
        setLoading(false);
        setReady(true);
      });
    } else {
      setLoadedMessages(msgs);
      setReady(true);
    }
  }, [locale]);

  const setLocale = useCallback((newLocale) => {
    const norm = normalizeLocale(newLocale);
    document.cookie = `locale=${norm};path=/;max-age=${60*60*24*365}`;
    const newPath = pathname.replace(/^\/(en|it|de)(\/|$)/, `/${norm}$2`);
    router.push(newPath);
  }, [pathname, router]);

  const t = useCallback((key) => {
    if (!ready || !loadedMessages) return '';
    const keys = key.split('.');
    let val = loadedMessages;
    for (const k of keys) {
      val = val?.[k];
    }
    return val || key;
  }, [ready, loadedMessages]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, loadedMessages }}>
      {loading && <div className="lang-loader" />}
      {ready ? children : <div className="lang-loader" />}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return { locale: 'it', setLocale: () => {}, t: () => '', loadedMessages: null, ready: false };
  return ctx;
}

export function useLocale() {
  const ctx = useContext(LanguageContext);
  return ctx?.locale || 'it';
}
