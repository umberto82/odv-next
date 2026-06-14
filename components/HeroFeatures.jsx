'use client'

import { useTranslation } from '@/context/LanguageContext'
import '../app/styles/hero_features.css'

export default function HeroFeatures({ isOpen }) {
  const { t } = useTranslation()

  return (
    <div className={`hero-features ${isOpen ? 'hidden' : ''}`}>
      <div className="feature-card">
        <img
          src="/imgs/home/hero-features/icon-tv-sky.png"
          alt="TV with Sky"
        />
        <p>{t('heroFeatures.tv')}</p>
      </div>

      <div className="feature-card">
        <img
          src="/imgs/home/hero-features/icon-wifi-fibra.png"
          alt="Fiber WiFi"
        />
        <p>{t('heroFeatures.wifi')}</p>
      </div>

      <div className="feature-card">
        <img
          src="/imgs/home/hero-features/icon-aria-condizionata.png"
          alt="Air conditioning"
        />
        <p>{t('heroFeatures.aircon')}</p>
      </div>

      <div className="feature-card">
        <img
          src="/imgs/home/hero-features/icon-videosorveglianza.png"
          alt="24h surveillance"
        />
        <p>{t('heroFeatures.surveillance')}</p>
      </div>
    </div>
  )
}
