'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';
import '../../styles/contatti.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useParams } from 'next/navigation';

export default function ContattiPage() {
  const { t, locale } = useTranslation();
  const params = useParams();
  const p = `/${locale}`;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

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
            <h1>{t('contatti.title')}</h1>
            <a href={p} className="breadcrumb-btn">{t('contatti.breadcrumb')}</a>
          </div>
        </div>
      </section>
      <Breadcrumbs hidden items={[{ name: 'Home', href: p }, { name: 'Contatti' }]} />

      <section className="contatti-section">
        <div className="container">
          <div className="contatti-cards">
            <div className="contatti-card">
              <div className="contatti-card-icon">
                <Image src="/imgs/contact/oasi-dolce-vita-indirizzo.png" alt={t('contatti.address')} width={40} height={40} />
              </div>
              <h3>{t('contatti.address')}</h3>
              <p>{t('contatti.addressValue')}</p>
            </div>
            <div className="contatti-card">
              <div className="contatti-card-icon">
                <Image src="/imgs/contact/oasi-dolce-vita-telefono.png" alt={t('contatti.phone')} width={40} height={40} />
              </div>
              <h3>{t('contatti.phone')}</h3>
              <p><a href="tel:+393760051382">+39 376 005 1382</a></p>
            </div>
            <div className="contatti-card">
              <div className="contatti-card-icon">
                <Image src="/imgs/contact/oasi-dolce-vita-email.png" alt={t('contatti.email')} width={40} height={40} />
              </div>
              <h3>{t('contatti.email')}</h3>
              <p><a href="mailto:info@oasidolcevita.com">info@oasidolcevita.com</a></p>
            </div>
          </div>

          <div className="contatti-bottom">
            <div className="contatti-info">
              <h2>{t('contatti.heading')}</h2>
              <p>{t('contatti.description')}</p>
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
                    placeholder={t('contatti.formName')}
                  />
                </div>
                <div className="contatti-form-group">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contatti.formEmail')}
                  />
                </div>
              </div>
              <div className="contatti-form-group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder={t('contatti.formMessage')}
                  rows="6"
                />
              </div>
              {status === 'success' && <p className="contatti-feedback contatti-feedback--success">{t('contatti.success')}</p>}
              {status === 'error' && <p className="contatti-feedback contatti-feedback--error">{t('contatti.error')}</p>}
              <button type="submit" className="contatti-submit" disabled={status === 'loading'}>
                {status === 'loading' ? t('contatti.submitting') : t('contatti.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
