'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/context/LanguageContext'
import '../app/styles/property_story.css'

const outdoorCards = [
  {
    id: 0,
    img: '/imgs/home/property-story/piscina-oasi-dolce-vita-lozzo-atestino.jpg',
    alt: 'Private pool',
    titleKey: 'propertyStory.cardPoolTitle',
    textKey: 'propertyStory.cardPoolText',
    link: '/galleria',
  },
  {
    id: 1,
    img: '/imgs/home/property-story/oasi-dolce-vita-tennis.jpg',
    alt: 'Tennis court',
    titleKey: 'propertyStory.cardTennisTitle',
    textKey: 'propertyStory.cardTennisText',
    link: '/galleria',
  },
  {
    id: 2,
    img: '/imgs/home/property-story/oasi-dolce-vita-portico.jpg',
    alt: 'Outdoor spaces',
    titleKey: 'propertyStory.cardOutdoorTitle',
    textKey: 'propertyStory.cardOutdoorText',
    link: '/galleria',
  },
  {
    id: 3,
    img: '/imgs/home/property-story/oasi-dolce-vita-camera-da-letto.jpg',
    alt: 'Indoor spaces',
    titleKey: 'propertyStory.cardIndoorTitle',
    textKey: 'propertyStory.cardIndoorText',
    link: '/galleria',
  },
]

export default function PropertyStory() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const { t, locale } = useTranslation()
  const p = `/${locale}`

  return (
    <section className="property-story">
      <div className="container">
        <div className="ps-card-wrapper">
          <div className="ps-block ps-block--panorama">
            <div className="ps-image">
              <Image
                src="/imgs/home/property-story/panorama-colli-euganei-lozzo-atestino.jpg"
                alt="Panorama of the Euganean Hills"
                width={2879}
                height={1920}
                style={{ width: '100%', height: 'auto' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="ps-text">
              <span className="ps-label">{t('propertyStory.territoryLabel')}</span>
              <h2>{t('propertyStory.territoryTitle')}</h2>
              <p>{t('propertyStory.territoryText')}</p>
            </div>
          </div>

          <div className="ps-block ps-block--video">
            <div className="ps-text">
              <span className="ps-label">{t('propertyStory.experienceLabel')}</span>
              <h2>{t('propertyStory.experienceTitle')}</h2>
              <p>{t('propertyStory.experienceText')}</p>
            </div>

            <div className="ps-video">
              <iframe
                src="https://www.youtube.com/embed/dJP_fzfReH4?rel=0&modestbranding=1&controls=1"
                title="Oasi Dolce Vita Drone Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="ps-outdoor-inner">
            <span className="ps-label ps-label--center">{t('propertyStory.spacesLabel')}</span>
            <h2 className="ps-outdoor-title">{t('propertyStory.spacesTitle')}</h2>

            <div className="ps-cards">
              {outdoorCards.map((card) => (
                <div
                  key={card.id}
                  className={`ps-card ${
                    hoveredCard === card.id ? 'ps-card--hovered' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="ps-card-image">
                    <Image src={card.img} alt={card.alt} width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" style={{ width: '100%', height: 'auto' }} />
                  </div>

                  <div className="ps-card-body">
                    <h3>{t(card.titleKey)}</h3>
                    <p>{t(card.textKey)}</p>
                    <a href={`${p}${card.link}`} className="ps-card-link">
                      {t('propertyStory.galleryLink')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
