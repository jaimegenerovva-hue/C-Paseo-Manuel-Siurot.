import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/placeholderData';

export type LegalDocType = 'aviso-legal' | 'privacidad' | 'cookies';

interface FooterSectionProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenLegal }) => {
  return (
    <footer
      id="footer-section"
      className="bg-[#faf8f5] text-[#292524] border-t border-stone-200/80 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fila principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-stone-200/80">
          
          {/* Columna 1: Nombre de la agencia y descripción */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dbaan8ofb/image/upload/v1786438359/suhogar_rrhk0g.png"
                alt="Comprarcasa Suhogar Sevilla"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain flex-shrink-0"
              />
              <span className="font-editorial text-2xl font-normal text-[#1c1917] tracking-wide">
                Comprarcasa Suhogar Sevilla
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Servicios inmobiliarios profesionales y de máxima confianza en el Aljarafe sevillano. Especialistas en la compraventa de viviendas con total transparencia.
            </p>
            <p className="text-[11px] text-stone-500">
              Calle Chile 104, Bormujos, Sevilla
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-widest text-[#a85a43]">
              Enlaces Rápidos
            </h5>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <a href="#inicio" className="hover:text-[#1c1917] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#1c1917] transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#1c1917] transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#1c1917] transition-colors">
                  Calculadora Hipoteca
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#1c1917] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Datos de contacto (WhatsApp, email, teléfono) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-widest text-[#a85a43]">
              Datos de Contacto
            </h5>
            <div className="space-y-2.5 text-xs text-stone-700">
              {/* WhatsApp */}
              <a
                id="footer-whatsapp-link"
                href={`https://wa.me/34635475213?text=${encodeURIComponent('Hola, deseo información sobre la vivienda en Bormujos.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-700 transition-colors group"
              >
                <span className="w-6 h-6 rounded-xs bg-emerald-100/80 border border-emerald-300 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-200 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">WhatsApp: 635 475 213</span>
              </a>

              {/* Email */}
              <a
                id="footer-email-link"
                href="mailto:domingo@suhogarsevilla.com"
                className="flex items-center gap-2.5 hover:text-[#c26d53] transition-colors group"
              >
                <span className="w-6 h-6 rounded-xs bg-white border border-stone-200/90 flex items-center justify-center text-[#c26d53] group-hover:border-[#c26d53]/50 transition-colors shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium truncate">domingo@suhogarsevilla.com</span>
              </a>

              {/* Teléfono */}
              <a
                id="footer-phone-link"
                href="tel:635475213"
                className="flex items-center gap-2.5 hover:text-[#c26d53] transition-colors group"
              >
                <span className="w-6 h-6 rounded-xs bg-white border border-stone-200/90 flex items-center justify-center text-[#c26d53] group-hover:border-[#c26d53]/50 transition-colors shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">635 475 213</span>
              </a>
            </div>
          </div>

          {/* Columna 4: Indicador de disponibilidad para visitas */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-bold tracking-widest text-[#a85a43]">
              Estado del Inmueble
            </h5>
            
            {/* Badge de disponibilidad para visitas */}
            <div
              id="footer-visits-availability-badge"
              className="p-4 rounded-xs bg-white border border-stone-200/90 space-y-2 shadow-xs"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  En venta
                </span>
              </div>
              <p className="text-[11px] text-stone-600 leading-normal">
                Disponibilidad inmediata para visitas presenciales concertadas con la asesora.
              </p>
            </div>
          </div>

        </div>

        {/* Fila inferior de créditos y tres documentos legales separados exigidos por la normativa española */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>
            © {new Date().getFullYear()} {AGENCY_INFO.nombre}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              id="footer-legal-notice-link"
              onClick={() => onOpenLegal('aviso-legal')}
              className="hover:text-stone-900 transition-colors underline underline-offset-2 cursor-pointer"
            >
              Aviso Legal
            </button>
            <span className="text-stone-300">·</span>
            <button
              type="button"
              id="footer-privacy-policy-link"
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-stone-900 transition-colors underline underline-offset-2 cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="text-stone-300">·</span>
            <button
              type="button"
              id="footer-cookies-policy-link"
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-stone-900 transition-colors underline underline-offset-2 cursor-pointer"
            >
              Política de Cookies
            </button>
            <span className="text-stone-300">·</span>
            <span className="text-stone-400 font-mono">
              Documento informativo no contractual
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
