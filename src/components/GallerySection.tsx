import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS, FEATURED_GALLERY_PHOTOS } from '../data/placeholderData';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Photos for the mosaic grid (5 featured photos)
  const mainPhoto = FEATURED_GALLERY_PHOTOS[0];
  const sidePhotos = FEATURED_GALLERY_PHOTOS.slice(1);

  // Counter reflecting additional photos requested (+16 fotos, total 17)
  const additionalPhotosCount = 16;

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const openLightboxByUrl = (url: string) => {
    const idx = GALLERY_PHOTOS.findIndex((p) => p.url === url);
    setSelectedPhotoIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
      );
    }
  };

  return (
    <section
      id="galeria"
      className="w-full pt-16 sm:pt-20 md:pt-24 pb-[72px] bg-[#faf8f5] text-[#292524] border-b border-stone-200/70 relative block clear-both"
      style={{ paddingBottom: '72px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado centrado con textos reales */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          {/* Etiqueta pequeña */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#f3ede2] border border-[#e4dccf] text-[#a85a43] text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5" />
            <span>GALERÍA DE FOTOS</span>
          </div>

          {/* Titular */}
          <h2 id="gallery-headline" className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-[#1c1917]">
            Así es el chalet por dentro y por fuera
          </h2>

          {/* Subtítulo */}
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Un recorrido visual por todas las estancias de la vivienda.
          </p>
        </div>

        {/* Rejilla global del mosaico: altura fija (500px escritorio, 350px móvil) */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 md:grid-rows-1 gap-2.5 md:gap-3 w-full h-[350px] md:h-[500px]">
          
          {/* Foto grande a la izquierda (ocupa col-span-7 en desktop, 100% de alto y ancho) */}
          <div
            id="gallery-main-photo"
            onClick={() => openLightboxByUrl(mainPhoto.url)}
            className="md:col-span-7 w-full h-full relative rounded-xs overflow-hidden group cursor-pointer border border-stone-300/80 bg-stone-200 shadow-xs"
          >
            <img
              src={mainPhoto.url}
              alt="Fotografía principal del chalet"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-20 transition-opacity" />
            <div className="absolute bottom-4 right-4">
              <span className="p-2 rounded-xs bg-black/60 text-white group-hover:bg-[#c26d53] transition-colors flex items-center justify-center shadow-md">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Contenedor de las 4 fotos pequeñas de la derecha: grid fijo 2x2, 100% alto y ancho, gap 10px */}
          <div
            className="md:col-span-5 w-full h-full grid grid-cols-2 grid-rows-2 gap-2.5"
            style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}
          >
            {sidePhotos.map((photo, index) => {
              const isLast = index === sidePhotos.length - 1;

              return (
                <div
                  key={photo.id}
                  onClick={() => openLightboxByUrl(photo.url)}
                  className="relative w-full h-full rounded-xs overflow-hidden group cursor-pointer border border-stone-300/80 bg-stone-200 shadow-xs"
                >
                  <img
                    src={photo.url}
                    alt={`Fotografía ${index + 2} del chalet`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Si es la última foto: superposición con "+16 fotos" y "Ver más fotos" */}
                  {isLast ? (
                    <div
                      id="gallery-view-more-overlay"
                      className="absolute inset-0 bg-[#1c1917]/85 hover:bg-[#1c1917]/75 backdrop-blur-xs flex flex-col items-center justify-center text-center p-2 transition-colors border-2 border-dashed border-[#c26d53]/50 w-full h-full"
                    >
                      <Camera className="w-5 h-5 text-[#e09884] mb-1" />
                      <span className="font-editorial text-xl sm:text-2xl font-normal text-white">
                        +{additionalPhotosCount} fotos
                      </span>
                      <span className="text-[11px] uppercase tracking-widest text-[#e09884] font-semibold mt-0.5">
                        Ver más fotos
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Pie de galería */}
        <div className="mt-5 flex items-center justify-between text-xs text-stone-600 flex-wrap gap-4 border-t border-stone-200/80 pt-3">
          <p>{GALLERY_PHOTOS.length} fotografías del inmueble y zonas comunes</p>
          <button
            onClick={() => openLightbox(0)}
            className="text-stone-800 hover:text-[#c26d53] underline underline-offset-4 transition-colors font-medium cursor-pointer"
          >
            Abrir visor de fotos
          </button>
        </div>

      </div>

      {/* Modal Lightbox para explorar las 21 fotos */}
      {selectedPhotoIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-stone-900 border border-stone-800 rounded-xs overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Header modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#1c1917]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#e09884] font-medium">
                  {GALLERY_PHOTOS[selectedPhotoIndex].title}
                </span>
                <p className="text-xs text-stone-400">
                  {GALLERY_PHOTOS[selectedPhotoIndex].caption}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-stone-400">
                  {selectedPhotoIndex + 1} de {GALLERY_PHOTOS.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 text-stone-400 hover:text-white rounded-xs hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Imagen activa */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[360px] max-h-[68vh] overflow-hidden">
              <img
                src={GALLERY_PHOTOS[selectedPhotoIndex].url}
                alt={GALLERY_PHOTOS[selectedPhotoIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto max-w-full object-contain select-none"
              />

              {/* Botón anterior */}
              <button
                onClick={prevPhoto}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#c26d53] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Botón siguiente */}
              <button
                onClick={nextPhoto}
                aria-label="Foto siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#c26d53] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Fila de miniaturas en el modal */}
            <div className="flex gap-2 p-3 overflow-x-auto bg-[#1c1917] border-t border-stone-800">
              {GALLERY_PHOTOS.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(i)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-xs overflow-hidden border transition-all cursor-pointer ${
                    selectedPhotoIndex === i
                      ? 'border-[#c26d53] ring-1 ring-[#c26d53]'
                      : 'border-stone-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
