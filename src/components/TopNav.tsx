import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface TopNavProps {
  agencyName?: string;
}

export const TopNav: React.FC<TopNavProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Galería', href: '#galeria' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Calculadora Hipoteca', href: '#calculadora' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm"
    >
      {/* Barra de menú principal con el logotipo real */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-md text-[#292524] border-b border-stone-200/90 shadow-sm py-2 sm:py-2.5'
            : 'bg-[#faf8f5]/90 backdrop-blur-sm text-[#292524] border-b border-stone-200/70 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logotipo real de la agencia */}
          <a
            href="#"
            id="nav-logo"
            className="flex items-center group py-0.5"
            aria-label="Suhogar Inmobiliaria"
          >
            <img
              src="https://res.cloudinary.com/dbaan8ofb/image/upload/v1786438359/suhogar_rrhk0g.png"
              alt="Suhogar Inmobiliaria"
              referrerPolicy="no-referrer"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.href.replace('#', '')}`}
                href={link.href}
                className="text-stone-700 hover:text-[#c26d53] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#c26d53] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              id="nav-cta-contact"
              href="#contacto"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#c26d53] text-white hover:bg-[#b05d44] transition-colors text-xs uppercase tracking-wider font-semibold shadow-xs"
            >
              <Phone className="w-3 h-3" />
              <span>Agendar Visita</span>
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button
            id="mobile-menu-button"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-1.5 rounded text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden bg-[#faf8f5] border-b border-stone-200 px-6 py-4 space-y-3 shadow-md"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-stone-700 hover:text-[#c26d53] py-2 border-b border-stone-200/80 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-3 py-2.5 bg-[#c26d53] text-white text-xs uppercase tracking-wider font-semibold rounded-sm shadow-xs hover:bg-[#b05d44] transition-colors"
          >
            Solicitar Información / Visita
          </a>
        </div>
      )}
    </header>
  );
};
