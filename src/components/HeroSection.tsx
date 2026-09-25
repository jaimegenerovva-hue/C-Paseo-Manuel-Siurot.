import React from 'react';
import { ArrowDown, MapPin, Eye } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/placeholderData';

export const HeroSection: React.FC = () => {
  const heroImage =
    'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790351550/Imagen_de_ChatGPT_25_sept_2026_17_50_52_mhmasq.png';

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end md:items-center justify-start overflow-hidden pt-20 pb-16 md:py-0"
    >
      {/* Background full-bleed image (a sangre) */}
      <div className="absolute inset-0 z-0">
        <img
          id="hero-background-image"
          src={heroImage}
          alt="Fotografía principal de la vivienda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in transition-transform duration-1000"
        />
        {/* Horizontal gradient overlay covering the left side for optimal contrast */}
        <div
          id="hero-left-vignette-overlay"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.40) 30%, rgba(0, 0, 0, 0) 55%)',
          }}
        />
      </div>

      {/* Overlaid content aligned closely to the left side */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-left pt-20 md:pt-24">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          {/* Subtle location & status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-black/40 backdrop-blur-md border border-white/15 text-stone-200 text-xs tracking-widest uppercase font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#e09884]" />
            <span>BORMUJOS, ZONA UNIVERSITARIA</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-300 font-semibold">EN VENTA</span>
          </div>

          {/* Large Title */}
          <h1
            id="hero-main-title"
            className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#faf8f5] leading-[1.08] tracking-tight drop-shadow-sm"
          >
            Un chalet con espacio de sobra.
          </h1>

          {/* Brief Description */}
          <p
            id="hero-subtitle-description"
            className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-xl leading-relaxed drop-shadow-xs"
          >
            Adosado de 152 m², 4 habitaciones y piscina comunitaria, en una de las zonas más tranquilas de Bormujos.
          </p>

          {/* Action buttons & scroll indicator */}
          <div className="pt-4 flex flex-wrap items-center gap-4 justify-start">
            <a
              id="hero-cta-gallery"
              href="#galeria"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c26d53] text-white hover:bg-[#b05d44] transition-all text-xs uppercase tracking-widest font-semibold rounded-sm shadow-md hover:translate-y-[-1px]"
            >
              <Eye className="w-4 h-4" />
              <span>Explorar Galería</span>
            </a>
            <a
              id="hero-cta-features"
              href="#descripcion"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-stone-200 border border-white/20 backdrop-blur-sm transition-all text-xs uppercase tracking-widest font-medium rounded-sm"
            >
              <span>Ver Características</span>
            </a>
          </div>
        </div>

        {/* Floating scroll down indicator */}
        <div className="flex items-center gap-3 pt-12 md:pt-16 text-stone-400 text-xs tracking-wider uppercase">
          <a
            href="#descripcion"
            aria-label="Desplazar hacia la descripción de la propiedad"
            className="inline-flex items-center gap-2 hover:text-[#e09884] transition-colors"
          >
            <span className="w-8 h-8 rounded-full border border-stone-500/50 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-[#e09884]" />
            </span>
            <span>Descubrir la propiedad</span>
          </a>
        </div>
      </div>
    </section>
  );
};
