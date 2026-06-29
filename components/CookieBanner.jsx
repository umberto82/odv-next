'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from '@/context/LanguageContext'

export default function CookieBanner() {
  const { t, locale } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  if (!visible) return null

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          {t('cookie.text')}{' '}
          <a href={`/${locale}/privacy`} className="cookie-banner-link">
            {t('cookie.privacyLink')}
          </a>
        </p>
        <div className="cookie-banner-buttons">
          <button onClick={reject} className="cookie-btn cookie-btn--reject">
            {t('cookie.reject')}
          </button>
          <button onClick={accept} className="cookie-btn cookie-btn--accept">
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
