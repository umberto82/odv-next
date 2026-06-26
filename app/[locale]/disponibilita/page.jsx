import '../../styles/disponibilita.css';
import Breadcrumbs from '@/components/Breadcrumbs';

import itMessages from '@/messages/it.json';
import enMessages from '@/messages/en.json';

export const metadata = {
  title: "Disponibilità — Prenota villa con piscina Colli Euganei | Oasi Dolce Vita",
  description:
    "Verifica la disponibilità e prenota Oasi Dolce Vita, villa con piscina privata e campo da tennis sui Colli Euganei a Lozzo Atestino. Controlla il calendario e scegli le date per il tuo soggiorno relax in Veneto.",
  openGraph: {
    title: "Disponibilità — Prenota villa con piscina Colli Euganei | Oasi Dolce Vita",
    description:
      "Verifica la disponibilità e prenota Oasi Dolce Vita, villa con piscina privata sui Colli Euganei a Lozzo Atestino. Scegli le date per la tua vacanza in Veneto.",
  },
};

function getMessages(locale) {
  return locale === 'en' ? enMessages : itMessages;
}

export default async function DisponibilitaPage({ params }) {
  const { locale } = await params;
  const msg = getMessages(locale).disponibilita;
  const p = `/${locale}`;

  return (
    <main>
      <section className="disp-hero">
        <div className="container disp-hero-content">
          <div className="disp-hero-card">
            <h1>{msg.title}</h1>
            <a href={p} className="breadcrumb-btn">{msg.breadcrumb}</a>
          </div>
        </div>
      </section>
      <Breadcrumbs hidden items={[{ name: 'Home', href: p }, { name: 'Disponibilità' }]} />

      <section className="disp-section">
        <div className="container">
          <div className="disp-header">
            <span className="disp-label">{msg.label}</span>
            <h2>{msg.heading}</h2>
            <p>{msg.description}</p>
          </div>

          <div className="disp-calendar-wrapper">
            <div className="disp-calendar">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=NWQ0YmE4NmJmMjBjNTViYTg0NzQyYTNhOGRlZTZhMmFkMWI1MzBjY2VkMDc4YjM2MGZiMDBlMmJlZmFjM2U4NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                width="100%"
                height="600"
                style={{ border: 0 }}
                title="Calendario Oasi Dolce Vita"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
