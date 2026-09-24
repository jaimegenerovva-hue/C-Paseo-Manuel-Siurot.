import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="privacy-policy-modal"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-[#1c1917] text-[#f5f2eb] border border-stone-800 rounded-xs shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-5"
      >
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2 text-[#e09884]">
            <Shield className="w-5 h-5" />
            <h3 className="text-base font-bold uppercase tracking-wider">
              POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS - RGPD
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-stone-300 space-y-3 leading-relaxed">
          <p>
            <strong>Responsable del Tratamiento:</strong> Comprarcasa Suhogar Sevilla - Domicilio en Calle Chile 104, Bormujos, Sevilla.
          </p>
          <p>
            <strong>Finalidad:</strong> Gestión y atención de su solicitud de información relativa a la propiedad residencial en venta, concertación de visitas guiadas y asesoramiento inmobiliario personalizado.
          </p>
          <p>
            <strong>Legitimación:</strong> Consentimiento expreso del interesado al remitir el formulario de contacto conforme al Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD).
          </p>
          <p>
            <strong>Destinatarios:</strong> No se cederán datos a terceros salvo imperativo legal o expresa autorización para gestiones notariales y financieras vinculadas a la operación de compraventa.
          </p>
          <p>
            <strong>Derechos:</strong> Podrá ejercitar en cualquier momento sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición remitiendo comunicación escrita a domingo@suhogarsevilla.com.
          </p>
        </div>

        <div className="pt-3 border-t border-stone-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#c26d53] text-white text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#b05d44] transition-colors"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
