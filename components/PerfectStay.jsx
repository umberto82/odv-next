'use client'

import Image from 'next/image'
import { useTranslation } from '@/context/LanguageContext'
import '../app/styles/perfect_stay.css'

const features = [
  { id: 0, img: '/imgs/home/perfect-stay/icon-piscina-privata.png', alt: 'Private pool', key: 'perfectStay.pool' },
  { id: 1, img: '/imgs/home/perfect-stay/icon-campo-tennis.png', alt: 'Tennis court', key: 'perfectStay.tennis' },
  { id: 2, img: '/imgs/home/perfect-stay/icon-ping-pong.png', alt: 'Ping pong', key: 'perfectStay.pingpong' },
  { id: 3, img: '/imgs/home/perfect-stay/icon-lettini-piscina.png', alt: 'Pool sunbeds', key: 'perfectStay.sunbeds' },
  { id: 4, img: '/imgs/home/perfect-stay/icon-ombrelloni.png', alt: 'Umbrellas', key: 'perfectStay.umbrellas' },
  { id: 5, img: '/imgs/home/perfect-stay/icon-vista-colli-euganei.png', alt: 'Euganean Hills view', key: 'perfectStay.view' },
  { id: 6, img: '/imgs/home/perfect-stay/icon-parcheggio-privato.png', alt: 'Private parking', key: 'perfectStay.parking' },
  { id: 7, img: '/imgs/home/perfect-stay/icon-doccia-esterna.png', alt: 'Outdoor shower', key: 'perfectStay.outdoorShower' },
]

export default function PerfectStay() {
  const { t } = useTranslation()

  return (
    <section className="perfect-stay">
      <div className="container">
        <div className="perfect-stay-header">
          <span className="perfect-stay-label">{t('perfectStay.label')}</span>
          <h2>{t('perfectStay.title')}</h2>
          <p>{t('perfectStay.subtitle')}</p>
        </div>

        <div className="perfect-stay-grid">
          {features.map((feature) => (
            <div key={feature.id} className="perfect-stay-card">
              <div className="perfect-stay-icon">
                <Image src={feature.img} alt={feature.alt} width={50} height={50} />
              </div>
              <p>{t(feature.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
