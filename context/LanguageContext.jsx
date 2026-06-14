'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LanguageContext = createContext();

const supported = ['it', 'en'];
import itMessages from '@/messages/it.json';
const messages = {
  it: itMessages,
  en: () => import('@/messages/en.json').then(m => m.default),
};

function normalizeLocale(raw) {
  return supported.includes(raw) ? raw : 'it';
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState('it');
  const [loadedMessages, setLoadedMessages] = useState(itMessages);
  const [ready, setReady] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    const norm = normalizeLocale(saved);
    setLocaleState(norm);
    if (norm !== 'it') setReady(false);
  }, []);

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
    setLocaleState(norm);
    localStorage.setItem('locale', norm);
    document.cookie = `locale=${norm};path=/;max-age=${60*60*24*365}`;
    router.refresh();
  }, [router]);

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
