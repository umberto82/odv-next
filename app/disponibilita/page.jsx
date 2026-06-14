import '../styles/disponibilita.css'

export default function DisponibilitaPage() {
  return (
    <main>
      <section className="disp-hero">
        <div className="container disp-hero-content">
          <div className="disp-hero-card">
            <h1>Disponibilità</h1>
            <a href="/" className="breadcrumb-btn">Home &gt; Disponibilità</a>
          </div>
        </div>
      </section>

      <section className="disp-section">
        <div className="container">
          <div className="disp-header">
            <span className="disp-label">Calendario</span>
            <h2>Verifica la disponibilità</h2>
            <p>Le date evidenziate sono già prenotate. Tutte le altre sono libere.</p>
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
