/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { PropertyOverview } from './components/PropertyOverview';
import { GallerySection } from './components/GallerySection';
import { MapSection } from './components/MapSection';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ContactSection } from './components/ContactSection';
import { FooterSection, LegalDocType } from './components/FooterSection';
import { ScrollToTop } from './components/ScrollToTop';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { AGENCY_INFO } from './data/placeholderData';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('privacidad');

  const handleOpenLegal = (doc: LegalDocType) => {
    setActiveLegalDoc(doc);
    setLegalModalOpen(true);
  };

  return (
    <div id="property-landing-app" className="min-h-screen flex flex-col bg-[#faf8f5] text-[#292524] selection:bg-[#c26d53]/20 selection:text-[#9c4d36]">
      {/* 1. Franja horizontal fina fija en la parte superior */}
      <TopNav agencyName={AGENCY_INFO.nombre} />

      {/* Main Content Sections en orden exacto */}
      <main className="flex-1 w-full">
        {/* 2. Cabecera a pantalla completa con imagen a sangre y textos superpuestos */}
        <HeroSection />

        {/* 1. Sección de información de la propiedad: fondo NEGRO/oscuro */}
        <PropertyOverview />

        {/* 2. Sección de galería de fotos: fondo BEIGE/crema */}
        <GallerySection />

        {/* 3. Sección de ubicación y mapa: fondo NEGRO/oscuro */}
        <MapSection />

        {/* 4. Sección de calculadora de hipoteca: fondo BEIGE/crema */}
        <MortgageCalculator />

        {/* 5. Sección de contacto: fondo NEGRO/oscuro */}
        <ContactSection />
      </main>

      {/* 6. Footer: fondo BEIGE/crema */}
      <FooterSection onOpenLegal={handleOpenLegal} />

      {/* 9. Botón flotante de scroll hacia arriba */}
      <ScrollToTop />

      {/* 10. Banner de consentimiento de cookies conforme a normativa española y directrices AEPD */}
      <CookieBanner onOpenCookiesPolicy={() => handleOpenLegal('cookies')} />

      {/* Modal legal comprensivo para Aviso Legal, Política de Privacidad y Política de Cookies */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialDoc={activeLegalDoc}
      />
    </div>
  );
}
