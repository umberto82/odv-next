'use client'

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/context/LanguageContext';
import '../styles/galleria.css';

// Dataset of initial images using existing images in the project as placeholders/defaults
const initialImages = [
    // =====================
    // ESTERNI
    // =====================
    {
        id: 1,
        src: '/imgs/galleria/esterni/oasi-dolce-vita-vacanze-esterno-veneto.jpg',
        category: 'esterni',
        title: 'Piazzale principale'
    },
    {
        id: 2,
        src: '/imgs/galleria/esterni/portico2.jpg',
        category: 'esterni',
        title: 'Vista esterna casa'
    },
    // {
    //     id: 3,
    //     src: '/imgs/galleria/esterni/cascata2.jpg',
    //     category: 'esterni',
    //     title: 'Cascata naturale'
    // },
    {
        id: 4,
        src: '/imgs/galleria/esterni/casafuori3.jpg',
        category: 'esterni',
        title: 'Casa esterna'
    },
    {
        id: 5,
        src: '/imgs/galleria/esterni/portico.jpg',
        category: 'esterni',
        title: 'Portico'
    },
    {
        id: 6,
        src: '/imgs/galleria/esterni/casafuori4.jpg',
        category: 'esterni',
        title: 'Portico laterale'
    },
    {
        id: 7,
        src: '/imgs/galleria/esterni/scorcio-abarth.jpg',
        category: 'esterni',
        title: 'Scorcio panoramico'
    },
    {
        id: 8,
        src: '/imgs/galleria/esterni/tennis3.jpg',
        category: 'esterni',
        title: 'Campo da tennis'
    },
    {
        id: 9,
        src: '/imgs/galleria/esterni/vistacolli.jpg',
        category: 'esterni',
        title: 'Vista colli Euganei'
    },

    // =====================
    // INTERNI
    // =====================
    {
        id: 10,
        src: '/imgs/galleria/interni/camera2.jpg',
        category: 'interni',
        title: 'Camera 1'
    },
    {
        id: 11,
        src: '/imgs/galleria/interni/camera3.jpg',
        category: 'interni',
        title: 'Camera 2'
    },
    {
        id: 12,
        src: '/imgs/galleria/interni/camera1a.jpg',
        category: 'interni',
        title: 'Camera 3'
    },
    {
        id: 13,
        src: '/imgs/galleria/interni/camera1.jpg',
        category: 'interni',
        title: 'Camera matrimoniale'
    },
    {
        id: 14,
        src: '/imgs/galleria/interni/bagno2.jpg',
        category: 'interni',
        title: 'Bagno 2'
    },
    {
        id: 15,
        src: '/imgs/galleria/interni/bagnetto.jpg',
        category: 'interni',
        title: 'Bagnetto piano terra'
    },
    {
        id: 16,
        src: '/imgs/galleria/interni/camera2a.jpg',
        category: 'interni',
        title: 'Camera dettaglio 2'
    },
    {
        id: 17,
        src: '/imgs/galleria/interni/bagno1.jpg',
        category: 'interni',
        title: 'Bagno 1'
    },
    {
        id: 18,
        src: '/imgs/galleria/interni/camera3a.jpg',
        category: 'interni',
        title: 'Camera 3 dettaglio'
    },
    {
        id: 19,
        src: '/imgs/galleria/interni/camera4.jpg',
        category: 'interni',
        title: 'Camera 4'
    },
    {
        id: 20,
        src: '/imgs/galleria/interni/cucina1.jpg',
        category: 'interni',
        title: 'Cucina'
    },
    {
        id: 21,
        src: '/imgs/galleria/interni/cucina2.jpg',
        category: 'interni',
        title: 'Cucina dettaglio'
    },
    {
        id: 22,
        src: '/imgs/galleria/interni/cucina3.jpg',
        category: 'interni',
        title: 'Cucina angolo'
    },
    {
        id: 23,
        src: '/imgs/galleria/interni/cucina4.jpg',
        category: 'interni',
        title: 'Cucina completa'
    },
    {
        id: 24,
        src: '/imgs/galleria/interni/ingresso.jpg',
        category: 'interni',
        title: 'Ingresso'
    },
    {
        id: 25,
        src: '/imgs/galleria/interni/salotto1.jpg',
        category: 'interni',
        title: 'Salotto'
    },
    {
        id: 26,
        src: '/imgs/galleria/interni/salotto2.jpg',
        category: 'interni',
        title: 'Salotto vista 2'
    },
    {
        id: 27,
        src: '/imgs/galleria/interni/salotto3.jpg',
        category: 'interni',
        title: 'Salotto dettaglio'
    },
    {
        id: 28,
        src: '/imgs/galleria/interni/soppalco.jpg',
        category: 'interni',
        title: 'Soppalco'
    },
    {
        id: 29,
        src: '/imgs/galleria/interni/stanzetta1.jpg',
        category: 'interni',
        title: 'Stanzetta'
    },
    {
        id: 30,
        src: '/imgs/galleria/interni/stanzetta2.jpg',
        category: 'interni',
        title: 'Stanzetta 2'
    },

    // =====================
    // PISCINA
    // =====================
    {
        id: 31,
        src: '/imgs/galleria/piscina/oasi-dolce-vita-piscina.jpg',
        category: 'piscina',
        title: 'Piscina principale'
    },
    {
        id: 32,
        src: '/imgs/galleria/piscina/piscina1.jpg',
        category: 'piscina',
        title: 'Piscina'
    },
    {
        id: 33,
        src: '/imgs/galleria/piscina/piscinacolli1.jpg',
        category: 'piscina',
        title: 'Piscina vista sui colli euganei'
    },
    {
        id: 34,
        src: '/imgs/galleria/piscina/piscina2.jpg',
        category: 'piscina',
        title: 'Piscina lato'
    },
    {
        id: 35,
        src: '/imgs/galleria/piscina/piscina3.jpg',
        category: 'piscina',
        title: 'Piscina dettaglio'
    },
    {
        id: 36,
        src: '/imgs/galleria/piscina/bagnetto-piscina.jpg',
        category: 'piscina',
        title: 'Bagnetto piscina spogliatoio'
    },
    {
        id: 37,
        src: '/imgs/galleria/piscina/piscinadivanetto.jpg',
        category: 'piscina',
        title: 'Piscina acqua'
    },
    {
        id: 38,
        src: '/imgs/galleria/piscina/piscinaingresso.jpg',
        category: 'piscina',
        title: 'Dettaglio legno'
    },
    {
        id: 39,
        src: '/imgs/galleria/piscina/spogliatoio-piscina.jpg',
        category: 'piscina',
        title: 'Cucinino spogliatoio'
    },
    {
        id: 40,
        src: '/imgs/galleria/piscina/spogliatoio2.jpg',
        category: 'piscina',
        title: 'Ingresso spogliatoio'
    }
];

export default function GalleriaPage() {
    const { t } = useTranslation();
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState('tutte');
    const [lightbox, setLightbox] = useState({
        isOpen: false,
        index: 0
    });

    // Filter images based on selected category
    const filteredImages = activeFilter === 'tutte'
        ? initialImages
        : initialImages.filter(img => img.category === activeFilter);

    // Lightbox navigation handlers
    const closeLightbox = () => {
        setLightbox(prev => ({ ...prev, isOpen: false }));
    };

    const nextImage = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % filteredImages.length
        }));
    }, [filteredImages.length]);

    const prevImage = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + filteredImages.length) % filteredImages.length
        }));
    }, [filteredImages.length]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!lightbox.isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox.isOpen, nextImage, prevImage]);

    // Open Lightbox
    const openLightbox = (index) => {
        setLightbox({
            isOpen: true,
            index
        });
    };

    return (
        <main>
            {/* HERO SECTION */}
            <section className="galleria-hero">
                <div className="galleria-hero-overlay" />
                <div className="container galleria-hero-content">
                    <div className="galleria-hero-card">
                        <h1>{t('galleria.title')}</h1>
                        <button className="breadcrumb-btn" onClick={() => router.push('/')}>{t('galleria.breadcrumb')}</button>
                    </div>
                </div>
            </section>

            {/* GALLERY INTERACTIVE CONTAINER */}
            <section className="galleria-section">
                <div className="container">

                    {/* FILTER BUTTONS */}
                    <div className="galleria-filters">
                        <button
                            className={`filter-btn ${activeFilter === 'tutte' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('tutte')}
                        >
                            {t('galleria.filters.all')}
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'piscina' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('piscina')}
                        >
                            {t('galleria.filters.pool')}
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'esterni' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('esterni')}
                        >
                            {t('galleria.filters.exteriors')}
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'interni' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('interni')}
                        >
                            {t('galleria.filters.interiors')}
                        </button>
                    </div>

                    {/* GALLERY GRID */}
                    <div className="galleria-grid">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="galleria-item"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="galleria-img-wrapper">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="galleria-img"
                                        loading="lazy"
                                    />
                                        <div className="galleria-overlay">
                                            <div className="galleria-info">
                                                <span>{t(`galleria.categories.${image.category}`)}</span>
                                                <h3>{t(`galleria.imageTitles.${image.id}`)}</h3>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            {lightbox.isOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox} aria-label={t('galleria.lightbox.close')}>
                            &times;
                        </button>

                        <button className="lightbox-nav prev" onClick={prevImage} aria-label={t('galleria.lightbox.prev')}>
                            &#10094;
                        </button>

                        <img
                            src={filteredImages[lightbox.index].src}
                            alt={t(`galleria.imageTitles.${filteredImages[lightbox.index].id}`)}
                            className="lightbox-img"
                        />

                        <div className="lightbox-caption">
                            <h3>{t(`galleria.imageTitles.${filteredImages[lightbox.index].id}`)}</h3>
                        </div>

                        <button className="lightbox-nav next" onClick={nextImage} aria-label={t('galleria.lightbox.next')}>
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}