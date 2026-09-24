import React from 'react';
import { X, Shield, FileText, Cookie, AlertTriangle } from 'lucide-react';

export type LegalDocType = 'aviso-legal' | 'privacidad' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoc?: LegalDocType;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialDoc = 'privacidad',
}) => {
  const [currentDoc, setCurrentDoc] = React.useState<LegalDocType>(initialDoc);

  React.useEffect(() => {
    if (isOpen) {
      setCurrentDoc(initialDoc);
    }
  }, [isOpen, initialDoc]);

  if (!isOpen) return null;

  return (
    <div
      id="legal-policy-modal"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-[#1c1917] text-[#f5f2eb] border border-stone-800 rounded-xs shadow-2xl p-5 sm:p-8 max-h-[88vh] flex flex-col"
      >
        {/* Encabezado con pestañas para los 3 documentos legales exigidos en España */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2 text-[#e09884]">
            {currentDoc === 'aviso-legal' && <FileText className="w-5 h-5" />}
            {currentDoc === 'privacidad' && <Shield className="w-5 h-5" />}
            {currentDoc === 'cookies' && <Cookie className="w-5 h-5" />}
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-300">
              Información Legal Obligatoria (Normativa Española)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="p-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selector de pestañas: Aviso Legal, Política de Privacidad, Política de Cookies */}
        <div className="flex gap-2 border-b border-stone-800 py-3 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setCurrentDoc('aviso-legal')}
            className={`px-3 py-1.5 rounded-xs transition-colors font-medium whitespace-nowrap ${
              currentDoc === 'aviso-legal'
                ? 'bg-[#c26d53] text-white'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            Aviso Legal (LSSI-CE)
          </button>
          <button
            type="button"
            onClick={() => setCurrentDoc('privacidad')}
            className={`px-3 py-1.5 rounded-xs transition-colors font-medium whitespace-nowrap ${
              currentDoc === 'privacidad'
                ? 'bg-[#c26d53] text-white'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            Política de Privacidad (RGPD)
          </button>
          <button
            type="button"
            onClick={() => setCurrentDoc('cookies')}
            className={`px-3 py-1.5 rounded-xs transition-colors font-medium whitespace-nowrap ${
              currentDoc === 'cookies'
                ? 'bg-[#c26d53] text-white'
                : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
            }`}
          >
            Política de Cookies
          </button>
        </div>

        {/* Contenido scrolleable del documento seleccionado */}
        <div className="overflow-y-auto py-5 pr-1 space-y-5 text-xs text-stone-300 leading-relaxed">
          {/* Advertencia requerida sobre verificación por parte de la agencia */}
          <div className="p-3.5 bg-amber-950/40 border border-amber-600/40 rounded-xs flex items-start gap-3 text-amber-200/90 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-300">
                Aviso de verificación para la agencia inmobiliaria:
              </p>
              <p className="text-[11px] mt-0.5 text-amber-200/80">
                El contenido de este documento legal debe ser revisado y completado por <strong>Comprarcasa Suhogar Sevilla</strong> antes de su uso vinculante, incluyendo especialmente el <strong>NIF/CIF</strong> de la empresa, dato que debe añadirse y verificarse manualmente por el propio responsable legal.
              </p>
            </div>
          </div>

          {/* 1. DOCUMENTO: AVISO LEGAL */}
          {currentDoc === 'aviso-legal' && (
            <div className="space-y-4">
              <h3 className="text-base font-editorial text-white uppercase tracking-wider">
                Aviso Legal y Condiciones de Uso (LSSI-CE)
              </h3>
              <p>
                En cumplimiento con el deber de información estipulado en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se ponen a disposición de los usuarios los siguientes datos identificativos de la entidad responsable del sitio web:
              </p>
              
              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xs space-y-1.5">
                <p><strong>Denominación comercial:</strong> Comprarcasa Suhogar Sevilla</p>
                <p><strong>NIF / CIF:</strong> <span className="text-[#e09884] font-mono">[Pendiente de incorporación y verificación manual por la agencia]</span></p>
                <p><strong>Domicilio profesional:</strong> Calle Chile 104, 41930 Bormujos (Sevilla)</p>
                <p><strong>Teléfono de contacto:</strong> 635 475 213</p>
                <p><strong>Correo electrónico de contacto:</strong> domingo@suhogarsevilla.com</p>
                <p><strong>Actividad:</strong> Intermediación y asesoramiento en servicios inmobiliarios de compraventa de inmuebles.</p>
              </div>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">1. Objeto y ámbito de aplicación</h4>
              <p>
                El presente sitio web tiene como finalidad la presentación comercial, técnica y descriptiva de una propiedad residencial en Bormujos (Sevilla), facilitando canales de contacto directo para la concertación de visitas guiadas y la solicitud de información detallada por parte de personas interesadas.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">2. Condiciones de acceso y utilización</h4>
              <p>
                El acceso a este sitio web es libre y gratuito. El usuario se compromete a hacer un uso adecuado y lícito de los contenidos y servicios disponibles, absteniéndose de realizar actividades ilícitas, contrarias a la buena fe o al orden público.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">3. Propiedad intelectual e industrial</h4>
              <p>
                Todos los derechos de propiedad industrial e intelectual sobre el diseño, código fuente, planos, marcas, fotografías, infografías y contenidos multimedia pertenecen a Comprarcasa Suhogar Sevilla o a sus legítimos licenciantes. Queda prohibida su reproducción o distribución sin autorización expresa.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">4. Carácter informativo de los contenidos</h4>
              <p>
                Las infografías, fotografías, simulaciones de cuota hipotecaria y descripciones que aparecen en este sitio web tienen carácter meramente orientativo e ilustrativo y no constituyen documento contractual vinculante. Los datos definitivos de la compraventa serán los que consten en la nota simple registral y la escritura pública de compraventa.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">5. Legislación aplicable y jurisdicción</h4>
              <p>
                Para la resolución de controversias derivadas del presente sitio web será de aplicación la legislación española, sometiéndose las partes a los juzgados y tribunales del partido judicial de Sevilla.
              </p>
            </div>
          )}

          {/* 2. DOCUMENTO: POLÍTICA DE PRIVACIDAD */}
          {currentDoc === 'privacidad' && (
            <div className="space-y-4">
              <h3 className="text-base font-editorial text-white uppercase tracking-wider">
                Política de Privacidad y Protección de Datos (RGPD y LOPDGDD)
              </h3>
              <p>
                De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y en la Ley Orgánica 3/2018 (LOPDGDD), se informa a los usuarios del tratamiento de sus datos personales:
              </p>

              <div className="p-3 bg-stone-900 border border-stone-800 rounded-xs space-y-1.5">
                <p><strong>Responsable del Tratamiento:</strong> Comprarcasa Suhogar Sevilla</p>
                <p><strong>NIF / CIF:</strong> <span className="text-[#e09884] font-mono">[A completar por la agencia]</span></p>
                <p><strong>Domicilio:</strong> Calle Chile 104, 41930 Bormujos (Sevilla)</p>
                <p><strong>Correo electrónico para derechos:</strong> domingo@suhogarsevilla.com</p>
              </div>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">1. Finalidad del tratamiento</h4>
              <p>
                Los datos personales facilitados voluntariamente por el usuario a través del formulario de contacto o vías telefónicas/WhatsApp serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Gestionar y dar respuesta a la solicitud de información o consulta planteada sobre la vivienda.</li>
                <li>Coordinar la agenda de visitas presenciales a la propiedad con la asesora asignada.</li>
                <li>Prestar el asesoramiento inmobiliario solicitado en relación con la compraventa.</li>
              </ul>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">2. Legitimación para el tratamiento</h4>
              <p>
                La base jurídica que legitima el tratamiento de los datos es el <strong>consentimiento explícito</strong> prestado por el interesado al marcar de forma afirmativa y no premarcada la casilla de aceptación de la presente política de privacidad (artículo 6.1.a del RGPD).
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">3. Conservación de los datos</h4>
              <p>
                Los datos se conservarán durante el tiempo estrictamente necesario para atender y gestionar la consulta del usuario, o hasta que el interesado solicite su supresión o revoque el consentimiento prestado, manteniéndose posteriormente bloqueados únicamente para atender posibles responsabilidades legales.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">4. Destinatarios y cesiones a terceros</h4>
              <p>
                No se comunicarán datos a terceros ajenos a Comprarcasa Suhogar Sevilla salvo obligación legal o cuando resulte estrictamente necesario para la formalización documental o notarial de la operación con expresa autorización del comprador. No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">5. Ejercicio de derechos del interesado</h4>
              <p>
                El usuario podrá ejercitar en cualquier momento sus derechos de acceso, rectificación, supresión (derecho al olvido), limitación del tratamiento, portabilidad de los datos y oposición, dirigiendo una comunicación por escrito acreditando su identidad a la dirección postal en Calle Chile 104, Bormujos (Sevilla) o a la dirección de correo electrónico <strong>domingo@suhogarsevilla.com</strong>.
              </p>
              <p>
                Asimismo, si considera vulnerado su derecho a la protección de datos personales, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#e09884] underline">www.aepd.es</a>.
              </p>
            </div>
          )}

          {/* 3. DOCUMENTO: POLÍTICA DE COOKIES */}
          {currentDoc === 'cookies' && (
            <div className="space-y-4">
              <h3 className="text-base font-editorial text-white uppercase tracking-wider">
                Política de Cookies (LSSI-CE y Guía de la AEPD)
              </h3>
              <p>
                En cumplimiento del artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE) y de las directrices de la Agencia Española de Protección de Datos, te informamos sobre el uso de cookies en este sitio web.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">1. ¿Qué son las cookies?</h4>
              <p>
                Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario al visitarlo. Su función puede variar desde recordar preferencias de idioma o de navegación técnica hasta recopilar métricas de uso anónimas.
              </p>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">2. Tipos de cookies utilizadas en esta web</h4>
              <div className="space-y-2">
                <div className="p-3 bg-stone-900 border border-stone-800 rounded-xs">
                  <p className="font-semibold text-white">a) Cookies técnicas estrictamente necesarias (Exentas de consentimiento):</p>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Permiten la navegación a través del sitio web y la utilización de las diferentes opciones o servicios (por ejemplo, registrar las preferencias de cookies del usuario y mantener la seguridad del formulario). No pueden ser desactivadas en nuestros sistemas.
                  </p>
                </div>
                <div className="p-3 bg-stone-900 border border-stone-800 rounded-xs">
                  <p className="font-semibold text-white">b) Cookies analíticas o de personalización (Requieren consentimiento previo):</p>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Permiten cuantificar el número de usuarios y realizar la medición estadística de la utilización que hacen de los contenidos para mejorar la experiencia. <strong>Estas cookies se encuentran bloqueadas por defecto</strong> hasta que el usuario decida aceptarlas explícitamente en el banner de consentimiento.
                  </p>
                </div>
              </div>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">3. Tabla de cookies</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-[11px] text-left border border-stone-800">
                  <thead className="bg-stone-900 text-stone-300 font-semibold border-b border-stone-800">
                    <tr>
                      <th className="p-2">Cookie / Clave</th>
                      <th className="p-2">Titular</th>
                      <th className="p-2">Finalidad</th>
                      <th className="p-2">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800">
                    <tr>
                      <td className="p-2 font-mono">suhogar_cookie_consent</td>
                      <td className="p-2">Propia</td>
                      <td className="p-2">Almacena la preferencia y decisión sobre cookies del usuario</td>
                      <td className="p-2">1 año / Persistente</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono">_ga / _gid (Opcional)</td>
                      <td className="p-2">Tercero (Google Analytics)</td>
                      <td className="p-2">Análisis estadístico de visitas (bloqueada si el usuario rechaza)</td>
                      <td className="p-2">Hasta 2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-sm font-semibold text-stone-200 pt-2">4. Gestión y revocación del consentimiento</h4>
              <p>
                Puedes en cualquier momento modificar o revocar tu elección sobre el uso de cookies borrando el almacenamiento local del navegador o configurando las preferencias de privacidad en tu navegador habitual (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).
              </p>
            </div>
          )}
        </div>

        {/* Pie del modal con botón de cierre */}
        <div className="pt-3 border-t border-stone-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#c26d53] text-white text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#b05d44] transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
