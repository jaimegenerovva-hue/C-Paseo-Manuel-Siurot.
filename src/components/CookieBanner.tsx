import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookiesPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiesPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('suhogar_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('suhogar_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('suhogar_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      id="cookie-consent-banner"
      role="region"
      aria-label="Consentimiento de Cookies"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-5 bg-[#171514]/95 backdrop-blur-md border-t border-stone-700 text-[#f5f2eb] shadow-2xl transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        {/* Texto explicativo */}
        <div className="flex items-start gap-3 max-w-4xl">
          <span className="p-2 rounded-xs bg-stone-800 text-[#e09884] flex-shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </span>
          <div className="space-y-1 text-xs text-stone-300 leading-relaxed">
            <p className="font-semibold text-white">
              Gestión de Cookies y Privacidad
            </p>
            <p>
              Utilizamos cookies propias técnicas para garantizar el funcionamiento seguro del sitio web y, si lo autorizas, cookies opcionales para análisis de visitas. Conforme a la normativa española y directrices de la AEPD, ninguna cookie no esencial se instalará hasta que tomes una decisión.{' '}
              <button
                type="button"
                onClick={onOpenCookiesPolicy}
                className="text-[#e09884] underline hover:text-white transition-colors font-medium inline"
              >
                Consultar nuestra Política de Cookies
              </button>.
            </p>
          </div>
        </div>

        {/* Botones de acción con la misma visibilidad, jerarquía y accesibilidad */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto flex-shrink-0">
          <button
            type="button"
            id="cookie-reject-button"
            onClick={handleReject}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xs border border-stone-600 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer shadow-xs"
          >
            Rechazar no esenciales
          </button>
          <button
            type="button"
            id="cookie-accept-button"
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xs border border-[#c26d53] bg-[#c26d53] hover:bg-[#b05d44] text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer shadow-xs"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
};
