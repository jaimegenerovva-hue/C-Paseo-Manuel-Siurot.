import React from 'react';
import { Maximize2, Bed, Waves, Zap, Car, Cpu, MapPin, Compass } from 'lucide-react';
import { INITIAL_AMENITIES, OVERVIEW_THUMBNAILS } from '../data/placeholderData';

const iconMap: Record<string, React.ReactNode> = {
  Maximize2: <Maximize2 className="w-5 h-5 text-[#c26d53]" />,
  Bed: <Bed className="w-5 h-5 text-[#c26d53]" />,
  Waves: <Waves className="w-5 h-5 text-[#c26d53]" />,
  Zap: <Zap className="w-5 h-5 text-[#c26d53]" />,
  Car: <Car className="w-5 h-5 text-[#c26d53]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#c26d53]" />,
};

export const PropertyOverview: React.FC = () => {
  // 3 thumbnail photos for below the white card
  const thumbnails = OVERVIEW_THUMBNAILS;

  return (
    <section id="descripcion" className="py-20 md:py-28 bg-[#1c1917] text-[#f5f2eb] border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Descripción editorial */}
          <div className="lg:col-span-7 space-y-8">
            {/* Etiqueta pequeña de ubicación arriba */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e09884]">
              <MapPin className="w-3.5 h-3.5" />
              <span>BORMUJOS · ZONA UNIVERSITARIA, ALJARAFE</span>
            </div>

            {/* Titular principal sin subtítulo en cursiva */}
            <h2 id="overview-headline" className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#faf8f5] leading-[1.15] font-normal">
              Un chalet pensado para vivirlo en familia.
            </h2>

            {/* Cita destacada con borde lateral */}
            <div
              id="overview-featured-quote"
              className="border-l-4 border-[#c26d53] pl-5 py-3 bg-[#262220] rounded-r-xs"
            >
              <blockquote className="font-editorial text-xl sm:text-2xl italic text-stone-200 leading-snug">
                “Una zona tranquila y silenciosa, con parques justo enfrente y piscina comunitaria en la parte trasera de la vivienda.”
              </blockquote>
              <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-wider text-stone-400 font-medium">
                <Compass className="w-3 h-3 text-[#c26d53]" />
                <span>DESCRIPCIÓN ORIGINAL DEL PROPIETARIO</span>
              </div>
            </div>

            {/* Dos párrafos de descripción */}
            <div id="overview-paragraphs" className="space-y-5 text-stone-300 leading-relaxed text-base sm:text-lg font-light">
              <p>
                Este chalet adosado de 152 m² construidos se distribuye en tres plantas. En la planta baja encontramos un patio delantero que puede utilizarse como aparcamiento, un aseo, una cocina muy amplia y un salón-comedor con acceso directo a un patio trasero recién reformado, que conecta con la piscina comunitaria.
              </p>
              <p>
                La primera planta reúne tres dormitorios, dos de ellos amplios y con capacidad para cama de matrimonio, además del dormitorio principal con baño propio y vestidor. Todos cuentan con armarios empotrados. La segunda planta ofrece una habitación adicional que puede usarse como despacho, junto a un lavadero y dos terrazas.
              </p>
            </div>

            {/* Fila adicional de etiquetas técnicas de respaldo */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-stone-400">
              <span className="px-3 py-1.5 rounded-xs bg-stone-800 text-stone-300 font-medium border border-stone-700/60">
                AÑO DE CONSTRUCCIÓN: 2003
              </span>
              <span className="px-3 py-1.5 rounded-xs bg-stone-800 text-stone-300 font-medium border border-stone-700/60">
                ORIENTACIÓN: ESTE / OESTE
              </span>
              <span className="px-3 py-1.5 rounded-xs bg-stone-800 text-stone-300 font-medium border border-stone-700/60">
                ESTADO: BUEN ESTADO
              </span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta con características y fila de 3 miniaturas */}
          <div className="lg:col-span-5 space-y-4">
            {/* Tarjeta de características */}
            <div
              id="overview-features-card"
              className="bg-[#171514] rounded-xs border border-stone-800 shadow-sm p-6 sm:p-8"
            >
              {/* Pretítulo pequeño */}
              <p className="text-[11px] uppercase tracking-widest font-semibold text-[#e09884] mb-1">
                FICHA DEL INMUEBLE
              </p>

              {/* Subtítulo */}
              <h3 className="font-editorial text-2xl font-normal text-white mb-6 border-b border-stone-800 pb-3">
                Características Destacadas
              </h3>

              {/* Rejilla de dos columnas con seis características destacadas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {INITIAL_AMENITIES.map((amenity) => (
                  <div key={amenity.id} className="space-y-1.5">
                    <div className="w-9 h-9 rounded-xs bg-stone-800/80 border border-stone-700/60 flex items-center justify-center">
                      {iconMap[amenity.iconName] || <Maximize2 className="w-5 h-5 text-[#c26d53]" />}
                    </div>
                    {/* Nombre en mayúsculas */}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
                      {amenity.name}
                    </h4>
                    {/* Frase descriptiva */}
                    <p className="text-xs text-stone-400 leading-normal">
                      {amenity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Debajo de esa tarjeta: una fila de tres miniaturas de fotos */}
            <div id="overview-thumbnails-row" className="grid grid-cols-3 gap-3">
              {thumbnails.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative h-24 sm:h-28 rounded-xs overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded-xs bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-400 text-center tracking-wide">
              Vistas de los interiores y zonas de la vivienda
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
