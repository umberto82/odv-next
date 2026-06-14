'use client'

import { useState } from 'react';
import '../styles/contatti.css';

export default function ContattiPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <section className="contatti-hero">
        <div className="container contatti-hero-content">
          <div className="contatti-hero-card">
            <h1>Contatti</h1>
            <a href="/" className="breadcrumb-btn">Home &gt; Contatti</a>
          </div>
        </div>
      </section>

      <section className="contatti-section">
        <div className="container">
          <div className="contatti-cards">
            <div className="contatti-card">
              <div className="contatti-card-icon">
                <img src="/imgs/contact/oasi-dolce-vita-indirizzo.png" alt="Indirizzo" />
              </div>
              <h3>Indirizzo</h3>
              <p>Lozzo Atestino (Padova)</p>
            </div>
            <div className="contatti-card">
              <div className="contatti-card-icon">
                <img src="/imgs/contact/oasi-dolce-vita-telefono.png" alt="Telefono" />
              </div>
              <h3>Telefono</h3>
              <p><a href="tel:+393760051382">+39 376 005 1382</a></p>
            </div>
            <div className="contatti-card">
              <div className="contatti-card-icon">
                <img src="/imgs/contact/oasi-dolce-vita-email.png" alt="Email" />
              </div>
              <h3>Email</h3>
              <p><a href="mailto:info@oasidolcevita.com">info@oasidolcevita.com</a></p>
            </div>
          </div>

          <div className="contatti-bottom">
            <div className="contatti-info">
              <h2>Oasi Dolce Vita ti aspetta</h2>
              <p>
                Sei pronto a vivere un'esperienza indimenticabile tra i Colli Euganei?
                Contattaci per prenotare il tuo soggiorno o per ricevere maggiori
                informazioni sulla nostra struttura. Ti risponderemo nel più breve
                tempo possibile.
              </p>
            </div>

            <form className="contatti-form" onSubmit={handleSubmit}>
              <div className="contatti-form-row">
                <div className="contatti-form-group">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="contatti-form-group">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="La tua email"
                  />
                </div>
              </div>
              <div className="contatti-form-group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Il tuo messaggio"
                  rows="6"
                />
              </div>
              {status === 'success' && <p className="contatti-feedback contatti-feedback--success">Messaggio inviato con successo! Ti risponderemo al più presto.</p>}
              {status === 'error' && <p className="contatti-feedback contatti-feedback--error">Errore nell'invio. Riprova più tardi.</p>}
              <button type="submit" className="contatti-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Invio in corso...' : 'Invia messaggio'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
