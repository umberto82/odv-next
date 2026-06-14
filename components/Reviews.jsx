'use client'

import { useState } from 'react'
import { useTranslation } from '@/context/LanguageContext'
import '../app/styles/reviews.css'

const reviews = [
  {
    id: 0,
    name: 'Claudia',
    countryIdx: 0,
    stars: 5,
    textIdx: 0,
  },
  {
    id: 1,
    name: 'Ruggero',
    countryIdx: 1,
    stars: 5,
    textIdx: 1,
  },
  {
    id: 2,
    name: 'Harald',
    countryIdx: 2,
    stars: 5,
    textIdx: 2,
  },
  {
    id: 3,
    name: 'Anne-Sophie',
    countryIdx: 3,
    stars: 5,
    textIdx: 3,
  },
  {
    id: 4,
    name: 'Mai-Wan',
    countryIdx: 4,
    stars: 5,
    textIdx: 4,
  },
]

export default function Reviews() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFadingIn, setIsFadingIn] = useState(true)

  const countries = t('reviews.countries')
  const texts = t('reviews.texts')

  const handleNext = () => {
    setIsFadingIn(false)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
      setIsFadingIn(true)
    }, 300)
  }

  const review = reviews[activeIndex]
  const country = Array.isArray(countries) ? countries[review.countryIdx] : review.countryIdx
  const text = Array.isArray(texts) ? texts[review.textIdx] : ''

  return (
    <section className="reviews">
      {/* HEADER */}
      <div className="reviews-header">
        <span className="reviews-label">{t('reviews.label')}</span>
        <h2>{t('reviews.title')}</h2>
      </div>

      {/* CAROSELLO */}
      <div className="container reviews-carousel">
        {/* FRECCIA SINISTRA - DESKTOP */}
        <button
          className="reviews-arrow reviews-arrow--desktop"
          onClick={() =>
            setActiveIndex(
              (prev) => (prev - 1 + reviews.length) % reviews.length
            )
          }
        >
          &#8592;
        </button>

        {/* CARD */}
        <div className="review-card">
          {/* MOBILE: avatar + arrows row */}
          <div className="review-user-row">
            <button
              className="reviews-arrow reviews-arrow--mobile reviews-arrow--prev"
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + reviews.length) % reviews.length
                )
              }
            >
              &#8592;
            </button>
            <div className="review-avatar">
              <span>{review.name.charAt(0)}</span>
            </div>
            <button
              className="reviews-arrow reviews-arrow--mobile reviews-arrow--next"
              onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
            >
              &#8594;
            </button>
          </div>

          <h3 className="review-name">{review.name}</h3>
          <p className="review-country">{country}</p>

          {/* WHITE CLOUD on mobile - stars + text */}
          <div className="review-content">
            <div className="review-stars">
              {'★'.repeat(review.stars)}
            </div>
            <div className="review-text-wrapper">
              <span key={`open-${activeIndex}`} className="review-quote review-quote--open">&ldquo;</span>
              <p className="review-text">{text}</p>
              <span key={`close-${activeIndex}`} className="review-quote review-quote--close">&ldquo;</span>
            </div>
          </div>
        </div>

        {/* FRECCIA DESTRA - DESKTOP */}
        <button
          className="reviews-arrow reviews-arrow--desktop"
          onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
        >
          &#8594;
        </button>
      </div>

      {/* DOT NAVIGATION */}
      <div className="reviews-dots">
        {reviews.map((r, index) => (
          <button
            key={r.id}
            className={`reviews-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
