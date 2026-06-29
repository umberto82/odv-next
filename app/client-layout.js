'use client'

import "./styles/header.css";
import "./styles/privacy.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { LanguageProvider } from "@/context/LanguageContext";

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </LanguageProvider>
  );
}
