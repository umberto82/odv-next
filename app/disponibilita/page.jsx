import { cookies } from 'next/headers';
import '../styles/disponibilita.css';
import Breadcrumbs from '@/components/Breadcrumbs';

import itMessages from '@/messages/it.json';
import enMessages from '@/messages/en.json';

export const metadata = {
  title: "Disponibilità",
  description:
    "Verifica la disponibilità di Oasi Dolce Vita, casa vacanze sui Colli Euganei con piscina privata e campo da tennis. Prenota il tuo soggiorno a Lozzo Atestino.",
  openGraph: {
    title: "Disponibilità | Oasi Dolce Vita",
    description:
      "Verifica la disponibilità e prenota Oasi Dolce Vita, casa vacanze sui Colli Euganei.",
  },
};

function getMessages(locale) {
  return locale === 'en' ? enMessages : itMessages;
}

export default async function DisponibilitaPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'it';
  const msg = getMessages(locale).disponibilita;

  return (
    <main>
      <section className="disp-hero">
        <div className="container disp-hero-content">
          <div className="disp-hero-card">
            <h1>{msg.title}</h1>
            <a href="/" className="breadcrumb-btn">{msg.breadcrumb}</a>
          </div>
        </div>
      </section>
      <Breadcrumbs hidden items={[{ name: 'Home', href: '/' }, { name: 'Disponibilità' }]} />

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
