import '../../styles/privacy.css'

const texts = {
  it: {
    title: 'Privacy Policy',
    breadcrumb: 'Home > Privacy Policy',
    lastUpdate: 'Ultimo aggiornamento: 28 giugno 2026',
    sections: [
      {
        title: 'Titolare del trattamento',
        content:
          'Il titolare del trattamento dei dati personali è Umberto Furlan, con sede in Via Pegorile 17/A, 35034 Lozzo Atestino (PD), Italia, email: info@oasidolcevita.com.',
      },
      {
        title: 'Dati raccolti',
        content:
          'Raccogliamo i seguenti dati personali forniti volontariamente dall\'utente tramite il form di contatto: nome, email, telefono (opzionale), messaggio. Non raccogliamo dati di navigazione né utilizziamo strumenti di analytics o profilazione.',
      },
      {
        title: 'Finalità del trattamento',
        content:
          'I dati sono trattati esclusivamente per rispondere alle richieste di informazioni inviate tramite il form di contatto e, in caso di prenotazione, per gestire il rapporto contrattuale con l\'ospite.',
      },
      {
        title: 'Base giuridica',
        content:
          'Il trattamento si basa sul consenso dell\'interessato (art. 6, par. 1, lett. a GDPR) per le richieste di informazioni, e sull\'esecuzione di un contratto (art. 6, par. 1, lett. b GDPR) per le prenotazioni.',
      },
      {
        title: 'Conservazione dei dati',
        content:
          'I dati forniti tramite il form di contatto vengono conservati per il tempo strettamente necessario a rispondere alla richiesta (massimo 12 mesi). I dati relativi alle prenotazioni sono conservati per 5 anni dalla data di partenza, come previsto dalla normativa fiscale.',
      },
      {
        title: 'Comunicazione a terzi',
        content:
          'I dati non vengono ceduti a terzi. Per l\'elaborazione dei pagamenti utilizziamo Stripe (Stripe, Inc.), che agisce in qualità di responsabile del trattamento secondo il GDPR. Per maggiori informazioni: https://stripe.com/it/privacy.',
      },
      {
        title: 'Diritti dell\'interessato',
        content:
          'Ai sensi degli artt. 15-22 del GDPR, hai diritto di accedere ai tuoi dati, rettificarli, cancellarli, limitarne il trattamento, opporti al trattamento e richiedere la portabilità. Per esercitare i tuoi diritti, scrivi a info@oasidolcevita.com.',
      },
      {
        title: 'Reclamo',
        content:
          'Hai il diritto di proporre reclamo all\'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) se ritieni che il trattamento dei tuoi dati violi la normativa.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    breadcrumb: 'Home > Privacy Policy',
    lastUpdate: 'Last updated: June 28, 2026',
    sections: [
      {
        title: 'Data Controller',
        content:
          'The data controller is Umberto Furlan, with registered office at Via Pegorile 17/A, 35034 Lozzo Atestino (PD), Italy, email: info@oasidolcevita.com.',
      },
      {
        title: 'Data collected',
        content:
          'We collect the following personal data voluntarily provided by the user through the contact form: name, email, phone (optional), message. We do not collect browsing data or use analytics or profiling tools.',
      },
      {
        title: 'Purpose of processing',
        content:
          'Data is processed exclusively to respond to information requests sent via the contact form and, in case of booking, to manage the contractual relationship with the guest.',
      },
      {
        title: 'Legal basis',
        content:
          'Processing is based on the consent of the data subject (Art. 6(1)(a) GDPR) for information requests, and on the performance of a contract (Art. 6(1)(b) GDPR) for bookings.',
      },
      {
        title: 'Data retention',
        content:
          'Data provided via the contact form is retained for the time strictly necessary to respond to the request (maximum 12 months). Booking data is retained for 5 years from the departure date, as required by tax regulations.',
      },
      {
        title: 'Third-party disclosure',
        content:
          'Data is not transferred to third parties. For payment processing we use Stripe (Stripe, Inc.), which acts as a data processor under the GDPR. For more information: https://stripe.com/privacy.',
      },
      {
        title: 'Data subject rights',
        content:
          'Under Articles 15-22 of the GDPR, you have the right to access your data, rectify it, delete it, restrict processing, object to processing, and request portability. To exercise your rights, write to info@oasidolcevita.com.',
      },
      {
        title: 'Complaint',
        content:
          'You have the right to lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it) if you believe that the processing of your data violates the regulations.',
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    breadcrumb: 'Startseite > Datenschutzerklärung',
    lastUpdate: 'Letzte Aktualisierung: 28. Juni 2026',
    sections: [
      {
        title: 'Verantwortlicher',
        content:
          'Der Verantwortliche für die Datenverarbeitung ist Umberto Furlan, mit Sitz in Via Pegorile 17/A, 35034 Lozzo Atestino (PD), Italien, E-Mail: info@oasidolcevita.com.',
      },
      {
        title: 'Erhobene Daten',
        content:
          'Wir erheben folgende personenbezogene Daten, die der Nutzer freiwillig über das Kontaktformular bereitstellt: Name, E-Mail, Telefon (optional), Nachricht. Wir erfassen keine Browserdaten und verwenden keine Analyse- oder Profiling-Tools.',
      },
      {
        title: 'Zweck der Verarbeitung',
        content:
          'Die Daten werden ausschließlich zur Beantwortung von Informationsanfragen über das Kontaktformular und im Falle einer Buchung zur Abwicklung der Vertragsbeziehung mit dem Gast verarbeitet.',
      },
      {
        title: 'Rechtsgrundlage',
        content:
          'Die Verarbeitung erfolgt auf Grundlage der Einwilligung der betroffenen Person (Art. 6 Abs. 1 lit. a DSGVO) für Informationsanfragen und zur Erfüllung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO) für Buchungen.',
      },
      {
        title: 'Datenspeicherung',
        content:
          'Die über das Kontaktformular bereitgestellten Daten werden für den Zeitraum aufbewahrt, der zur Beantwortung der Anfrage erforderlich ist (maximal 12 Monate). Buchungsdaten werden gemäß den steuerrechtlichen Vorschriften 5 Jahre ab dem Abreisedatum aufbewahrt.',
      },
      {
        title: 'Weitergabe an Dritte',
        content:
          'Die Daten werden nicht an Dritte weitergegeben. Für die Zahlungsabwicklung nutzen wir Stripe (Stripe, Inc.), das als Auftragsverarbeiter gemäß der DSGVO fungiert. Weitere Informationen: https://stripe.com/de/privacy.',
      },
      {
        title: 'Rechte der betroffenen Person',
        content:
          'Gemäß Art. 15-22 DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und Datenübertragbarkeit. Um Ihre Rechte auszuüben, schreiben Sie an info@oasidolcevita.com.',
      },
      {
        title: 'Beschwerde',
        content:
          'Sie haben das Recht, eine Beschwerde bei der italienischen Datenschutzbehörde (www.garanteprivacy.it) einzureichen, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die Vorschriften verstößt.',
      },
    ],
  },
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params
  const t = texts[locale] || texts.en

  return (
    <main>
      <section className="privacy-hero">
        <div className="container privacy-hero-content">
          <div className="privacy-hero-card">
            <h1>{t.title}</h1>
            <a href={`/${locale}`} className="breadcrumb-btn">{t.breadcrumb}</a>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="privacy-content">
          <p className="privacy-date">{t.lastUpdate}</p>
          {t.sections.map((section, i) => (
            <div key={i} className="privacy-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
