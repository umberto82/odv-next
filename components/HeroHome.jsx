'use client'

import { useTranslation } from '@/context/LanguageContext'
import '../app/styles/hero_home.css'
import HeroFeatures from './HeroFeatures'

export default function HeroHome({ isOpen }) {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-glass-card">
          <h1>{t('heroHome.title')}</h1>
          <p>{t('heroHome.subtitle')}</p>
        </div>
      </div>
      <HeroFeatures isOpen={isOpen} />
    </section>
  )
}
