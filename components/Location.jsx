'use client'

import { useTranslation } from '@/context/LanguageContext'
import '../app/styles/location.css'

export default function Location() {
  const { t } = useTranslation()

  return (
    <section className="location">
      <div className="container">
        {/* HEADER */}
        <div className="location-header">
          <span className="location-label">{t('location.label')}</span>
          <h2>{t('location.title')}</h2>
        </div>

        <div className="location-wrapper">
          {/* MAPPA */}
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4!2d11.6202320!3d45.2879201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f1fdae4dc2d5f%3A0x9c1ed9e49aff11e4!2sOasi%20Dolce%20Vita!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione Oasi Dolce Vita Lozzo Atestino"
            />
          </div>

          {/* INFO */}
          <div className="location-info">
            <div className="location-address">
              <div>
                <p className="location-address-title">{t('location.addressTitle')}</p>
                <p className="location-address-text">
                  Oasi Dolce Vita
                  <br />
                  Via Pegorile 17/A, 35034
                  <br />
                  Lozzo Atestino (Padova)
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/7yS9k3SrSBqCbpCw5"
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn"
              >
                {t('location.mapsBtn')}
              </a>

              <div className="location-contacts">
                <a
                  href="https://wa.me/393760051382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +39 376 005 1382
                </a>

                <a
                  href="mailto:info@oasidolcevita.com"
                  className="location-contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  info@oasidolcevita.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
