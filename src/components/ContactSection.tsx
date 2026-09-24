import React, { useState } from 'react';
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  Award,
  CheckCircle2,
  AlertCircle,
  Clock,
  CalendarCheck,
} from 'lucide-react';
import { ContactFormData } from '../types';
import { REAL_ESTATE_ADVISOR } from '../data/placeholderData';
import { LegalModal } from './LegalModal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    mensaje: '',
    consentimientoRGPD: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const validate = (): boolean => {
    const err: { [key: string]: string } = {};

    if (!formData.nombre.trim()) {
      err.nombre = 'El nombre es obligatorio';
    }
    if (!formData.apellidos.trim()) {
      err.apellidos = 'Los apellidos son obligatorios';
    }
    if (!formData.email.trim()) {
      err.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = 'Introduzca un correo electrónico válido';
    }
    if (!formData.telefono.trim()) {
      err.telefono = 'El teléfono de contacto es obligatorio';
    } else if (formData.telefono.trim().length < 9) {
      err.telefono = 'Introduzca un número de teléfono válido (mínimo 9 dígitos)';
    }
    if (!formData.consentimientoRGPD) {
      err.consentimientoRGPD = 'Debe aceptar la política de privacidad para continuar';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Reset form after short simulated delay
    }
  };

  const handleChange = (
    field: keyof ContactFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for that field
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-[#1c1917] text-[#f5f2eb] border-b border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-stone-800/80 border border-stone-700/60 text-[#e09884] text-xs font-semibold uppercase tracking-widest">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>SOLICITAR VISITA O INFORMACIÓN</span>
          </div>

          <h2 id="contact-title" className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#faf8f5]">
            Solicita una visita o pide información
          </h2>

          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Atención personalizada y directa con la asesora responsable de esta propiedad.
          </p>
        </div>

        {/* Layout a dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Columna Izquierda: Formulario de Contacto */}
          <div className="lg:col-span-7 bg-[#171514] border border-stone-800 rounded-xs p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div
                id="contact-form-success"
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl text-white">
                  Solicitud recibida con éxito
                </h3>
                <p className="text-stone-400 text-sm max-w-md mx-auto">
                  Gracias por tu interés. Hemos registrado tu consulta y nuestra asesora {REAL_ESTATE_ADVISOR.nombre} se pondrá en contacto contigo a la mayor brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      nombre: '',
                      apellidos: '',
                      email: '',
                      telefono: '',
                      mensaje: '',
                      consentimientoRGPD: false,
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 text-xs uppercase tracking-wider rounded-xs transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form id="property-contact-form" onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-stone-800 pb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#e09884]">
                    Formulario de Contacto
                  </span>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Todos los campos marcados con (*) son de cumplimentación obligatoria.
                  </p>
                </div>

                {/* Fila Nombre y Apellidos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider font-medium text-stone-300"
                    >
                      Nombre <span className="text-[#c26d53]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Ej: Carlos"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xs bg-stone-900 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.nombre
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-stone-700 focus:border-[#c26d53] focus:ring-[#c26d53]'
                        }`}
                      />
                      <User className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.nombre && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Apellidos */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-lastname"
                      className="block text-xs uppercase tracking-wider font-medium text-stone-300"
                    >
                      Apellidos <span className="text-[#c26d53]">*</span>
                    </label>
                    <input
                      id="contact-lastname"
                      type="text"
                      placeholder="Ej: García Márquez"
                      value={formData.apellidos}
                      onChange={(e) => handleChange('apellidos', e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xs bg-stone-900 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.apellidos
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-stone-700 focus:border-[#c26d53] focus:ring-[#c26d53]'
                      }`}
                    />
                    {errors.apellidos && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.apellidos}
                      </p>
                    )}
                  </div>
                </div>

                {/* Fila Correo y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Correo Electrónico */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-wider font-medium text-stone-300"
                    >
                      Correo Electrónico <span className="text-[#c26d53]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="ejemplo@correo.es"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xs bg-stone-900 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-stone-700 focus:border-[#c26d53] focus:ring-[#c26d53]'
                        }`}
                      />
                      <Mail className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wider font-medium text-stone-300"
                    >
                      Teléfono de Contacto <span className="text-[#c26d53]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="635 475 213"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xs bg-stone-900 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.telefono
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-stone-700 focus:border-[#c26d53] focus:ring-[#c26d53]'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-stone-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.telefono && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mensaje Opcional */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-wider font-medium text-stone-300"
                    >
                      Mensaje o Preguntas sobre la Propiedad
                    </label>
                    <span className="text-[11px] text-stone-500">Opcional</span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Cuéntanos qué te interesa: concertar una visita, resolver una duda sobre la vivienda o cualquier otra consulta."
                    value={formData.mensaje}
                    onChange={(e) => handleChange('mensaje', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-stone-900 border border-stone-700 text-sm text-white placeholder-stone-500 focus:border-[#c26d53] focus:ring-1 focus:ring-[#c26d53] focus:outline-none transition-colors"
                  />
                </div>

                {/* Casilla de consentimiento RGPD obligatoria */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-3">
                    <input
                      id="contact-rgpd-checkbox"
                      type="checkbox"
                      checked={formData.consentimientoRGPD}
                      onChange={(e) => handleChange('consentimientoRGPD', e.target.checked)}
                      className="mt-1 w-4 h-4 rounded-xs border-stone-700 bg-stone-900 text-[#c26d53] focus:ring-[#c26d53] accent-[#c26d53] cursor-pointer"
                    />
                    <label htmlFor="contact-rgpd-checkbox" className="text-xs text-stone-300 leading-relaxed cursor-pointer">
                      He leído y acepto la{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-[#e09884] underline hover:text-[#f0b09f] transition-colors font-medium inline"
                      >
                        política de privacidad
                      </button>{' '}
                      para el tratamiento de mis datos con el fin de gestionar mi solicitud de información sobre esta propiedad. <span className="text-[#c26d53]">*</span>
                    </label>
                  </div>
                  {errors.consentimientoRGPD && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1 pl-7">
                      <AlertCircle className="w-3 h-3" />
                      {errors.consentimientoRGPD}
                    </p>
                  )}

                  {/* Información básica de primera capa del RGPD */}
                  <div className="p-3 bg-stone-900/90 border border-stone-800 rounded-xs text-[11px] text-stone-400 leading-relaxed">
                    <p>
                      <strong className="text-stone-200">Responsable:</strong> Comprarcasa Suhogar Sevilla. <strong className="text-stone-200">Finalidad:</strong> gestionar tu solicitud de información o visita sobre esta propiedad. <strong className="text-stone-200">Legitimación:</strong> tu consentimiento. <strong className="text-stone-200">Destinatarios:</strong> no se ceden datos a terceros salvo obligación legal. <strong className="text-stone-200">Derechos:</strong> acceder, rectificar, suprimir tus datos y demás derechos en <a href="mailto:domingo@suhogarsevilla.com" className="text-stone-200 underline hover:text-[#e09884]">domingo@suhogarsevilla.com</a>. Puedes consultar la información adicional en nuestra{' '}
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        className="text-[#e09884] underline hover:text-[#f0b09f] transition-colors font-medium"
                      >
                        Política de Privacidad
                      </button>.
                    </p>
                  </div>
                </div>

                {/* Botón de envío destacado */}
                <div className="pt-3">
                  <button
                    id="contact-submit-button"
                    type="submit"
                    className="w-full py-4 px-6 bg-[#c26d53] hover:bg-[#b05d44] text-white font-semibold text-xs uppercase tracking-widest rounded-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Información</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Columna Derecha: Tarjeta con asesora y bloques de confianza */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta con foto y datos de la asesora inmobiliaria */}
            <div
              id="advisor-profile-card"
              className="bg-[#171514] border border-stone-800 rounded-xs p-6 space-y-5 shadow-sm"
            >
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#e09884]">
                ASESORA ASIGNADA
              </span>

              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xs overflow-hidden border border-stone-700 flex-shrink-0 bg-stone-900">
                  <img
                    src={REAL_ESTATE_ADVISOR.avatarUrl}
                    alt={REAL_ESTATE_ADVISOR.nombre}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-[#c26d53]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-editorial text-2xl text-white leading-none">
                    {REAL_ESTATE_ADVISOR.nombre}
                  </h4>
                  <p className="text-xs text-stone-400 font-medium">
                    {REAL_ESTATE_ADVISOR.cargo}
                  </p>
                </div>
              </div>

              {/* Contacto directo de la asesora */}
              <div className="pt-2 border-t border-stone-800 space-y-2 text-xs">
                <a
                  href={`tel:${REAL_ESTATE_ADVISOR.telefono.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-stone-300 hover:text-[#e09884] transition-colors py-1"
                >
                  <Phone className="w-4 h-4 text-[#c26d53]" />
                  <span>{REAL_ESTATE_ADVISOR.telefono}</span>
                </a>
                <a
                  href={`mailto:${REAL_ESTATE_ADVISOR.email}`}
                  className="flex items-center gap-3 text-stone-300 hover:text-[#e09884] transition-colors py-1 truncate"
                >
                  <Mail className="w-4 h-4 text-[#c26d53]" />
                  <span className="truncate">{REAL_ESTATE_ADVISOR.email}</span>
                </a>
                <div className="flex items-center gap-3 text-stone-400 py-1">
                  <Clock className="w-4 h-4 text-stone-500" />
                  <span className="text-[11px]">{REAL_ESTATE_ADVISOR.horario}</span>
                </div>
              </div>
            </div>

            {/* Bloque de confianza sobre confidencialidad de los datos */}
            <div
              id="trust-block-confidentiality"
              className="bg-[#171514] border border-stone-800 rounded-xs p-5 flex items-start gap-3.5 shadow-sm"
            >
              <div className="w-9 h-9 rounded-xs bg-stone-800/80 border border-stone-700/60 flex items-center justify-center flex-shrink-0 text-[#e09884]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                  TRATAMIENTO CONFIDENCIAL DE TUS DATOS
                </h5>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Tus datos se tratan de forma privada y discreta, y no se comparten con terceros ajenos a la gestión de tu solicitud.
                </p>
              </div>
            </div>

            {/* Bloque de confianza sobre garantía del servicio */}
            <div
              id="trust-block-guarantee"
              className="bg-[#171514] border border-stone-800 rounded-xs p-5 flex items-start gap-3.5 shadow-sm"
            >
              <div className="w-9 h-9 rounded-xs bg-stone-800/80 border border-stone-700/60 flex items-center justify-center flex-shrink-0 text-[#e09884]">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                  ASESORAMIENTO COMPLETO EN TODO EL PROCESO
                </h5>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Te acompañamos desde la primera visita hasta la firma, con revisión de la documentación necesaria para la compraventa.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Modal de textos legales y política de privacidad RGPD */}
      <LegalModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        initialDoc="privacidad"
      />
    </section>
  );
};
