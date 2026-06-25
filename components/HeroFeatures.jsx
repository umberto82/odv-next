'use client'

import Image from 'next/image'
import { useTranslation } from '@/context/LanguageContext'
import '../app/styles/hero_features.css'

export default function HeroFeatures({ isOpen }) {
  const { t } = useTranslation()

  return (
    <div className={`hero-features ${isOpen ? 'hidden' : ''}`}>
      <div className="feature-card">
        <Image
          src="/imgs/home/hero-features/icon-tv-sky.png"
          alt="TV with Sky"
          width={40}
          height={40}
        />
        <p>{t('heroFeatures.tv')}</p>
      </div>

      <div className="feature-card">
        <Image
          src="/imgs/home/hero-features/icon-wifi-fibra.png"
          alt="Fiber WiFi"
          width={40}
          height={40}
        />
        <p>{t('heroFeatures.wifi')}</p>
      </div>

      <div className="feature-card">
        <Image
          src="/imgs/home/hero-features/icon-aria-condizionata.png"
          alt="Air conditioning"
          width={40}
          height={40}
        />
        <p>{t('heroFeatures.aircon')}</p>
      </div>

      <div className="feature-card">
        <Image
          src="/imgs/home/hero-features/icon-videosorveglianza.png"
          alt="24h surveillance"
          width={40}
          height={40}
        />
        <p>{t('heroFeatures.surveillance')}</p>
      </div>
    </div>
  )
}
