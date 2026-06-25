'use client'

import "./styles/header.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
