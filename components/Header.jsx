'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/context/LanguageContext'

const flags = {
  it: { label: 'IT', emoji: '🇮🇹' },
  en: { label: 'EN', emoji: '🇬🇧' },
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { locale, setLocale, t } = useTranslation()
  const ref = useRef()
  const p = `/${locale}`

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="header">
      <div className="nav container">
        {/* LOGO */}
        <div className="logo">
          <a href={p}>
            <Image
              src="/imgs/home/header/oasi-dolce-vita-logo.png"
              alt="Oasi Dolce Vita"
              width={70}
              height={70}
            />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="menu">
          <a href={p}>{t('header.home')}</a>
          <a href={`${p}/galleria`}>{t('header.gallery')}</a>
          <a href={`${p}/luoghi-di-interesse`}>{t('header.places')}</a>
          <a href={`${p}/blog`}>{t('header.blog')}</a>
          <a href={`${p}/contatti`}>{t('header.contacts')}</a>
          <a href={`${p}/disponibilita`}>{t('header.availability')}</a>
          <a href="https://oasi-dolce-vita.amenitiz.io/it/booking/room#DatesGuests-BE" target="_blank" rel="noopener noreferrer">{t('header.booking')}</a>
        </nav>

        {/* LANGUAGE SWITCHER */}
        <div className="lang-switcher" ref={ref}>
          <button
            className="lang-btn"
            onClick={() => setLangOpen((prev) => !prev)}
          >
            {flags[locale]?.emoji} {flags[locale]?.label}
            <span className="lang-arrow">&#9662;</span>
          </button>
          {langOpen && (
            <div className="lang-dropdown">
              {Object.entries(flags).map(([key, val]) => (
                <button
                  key={key}
                  className={`lang-option ${locale === key ? 'active' : ''}`}
                  onClick={() => {
                    setLocale(key)
                    setLangOpen(false)
                  }}
                >
                  {val.emoji} {val.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-logo">
          <a href={p}>
            <Image
              src="/imgs/home/header/oasi-dolce-vita-logo.png"
              alt="Oasi Dolce Vita"
              width={70}
              height={70}
            />
          </a>
        </div>

        <a href={p} onClick={() => setIsOpen(false)}>
          {t('header.home')}
        </a>
        <a href={`${p}/galleria`} onClick={() => setIsOpen(false)}>
          {t('header.gallery')}
        </a>
        <a href={`${p}/luoghi-di-interesse`} onClick={() => setIsOpen(false)}>
          {t('header.places')}
        </a>
        <a href={`${p}/blog`} onClick={() => setIsOpen(false)}>
          {t('header.blog')}
        </a>
        <a href={`${p}/contatti`} onClick={() => setIsOpen(false)}>
          {t('header.contacts')}
        </a>
        <a href={`${p}/disponibilita`} onClick={() => setIsOpen(false)}>
          {t('header.availability')}
        </a>
        <a href="https://oasi-dolce-vita.amenitiz.io/it/booking/room#DatesGuests-BE" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
          {t('header.booking')}
        </a>

        <div className="mobile-lang">
          {Object.entries(flags).map(([key, val]) => (
            <button
              key={key}
              className={`mobile-lang-btn ${locale === key ? 'active' : ''}`}
              onClick={() => {
                setLocale(key)
                setIsOpen(false)
              }}
            >
              {val.emoji} {val.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
