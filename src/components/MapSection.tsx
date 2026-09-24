import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    izFilter?: (type: string, el?: HTMLElement | null) => void;
    izFocusPoi?: (name: string) => void;
  }
}

export const MapSection: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const pois = [
      { name: "CEU Andalucía", type: "school", lat: 37.3703757, lng: -6.0875972, distance: "2 min" },
      { name: "CBS Pre-School Bormujos", type: "school", lat: 37.3677582, lng: -6.0786784, distance: "2 min" },
      { name: "Andrew's School", type: "school", lat: 37.3740541, lng: -6.0790647, distance: "5 min" },
      { name: "Hospital San Juan de Dios del Aljarafe", type: "hospital", lat: 37.3730652, lng: -6.0843796, distance: "4 min" },
      { name: "Centro Médico Viamed Bormujos", type: "hospital", lat: 37.3708932, lng: -6.0851016, distance: "3 min" },
      { name: "ALDI Bormujos", type: "supermarket", lat: 37.364411, lng: -6.074914, distance: "4 min" },
      { name: "Makro Bormujos", type: "supermarket", lat: 37.3818055, lng: -6.0659227, distance: "8 min" },
      { name: "Restaurante L'Agustina", type: "restaurant", lat: 37.3712297, lng: -6.084103, distance: "4 min" },
      { name: "Restaurante Abazero", type: "restaurant", lat: 37.3716114, lng: -6.0843521, distance: "4 min" },
      { name: "Restaurante Monte Tradición", type: "restaurant", lat: 37.3739383, lng: -6.0801265, distance: "5 min" },
      { name: "Parque Los Álamos", type: "park", lat: 37.3722835, lng: -6.0756627, distance: "4 min" },
      { name: "Parque Carlos Cano", type: "park", lat: 37.3757813, lng: -6.0643545, distance: "7 min" }
    ];

    const typeMap: Record<string, string> = {
      school: "Educación",
      hospital: "Salud",
      supermarket: "Compras",
      restaurant: "Gastronomía",
      park: "Parques",
      all: "Todos"
    };

    const typeIcons: Record<string, string> = {
      school: '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
      hospital: '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>',
      supermarket: '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18l-1.5 12.5a2 2 0 0 1-2 1.5H6.5a2 2 0 0 1-2-1.5L3 6Z"/><path d="M8 6V4a4 4 0 0 1 8 0v2"/></svg>',
      restaurant: '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v20M7 2c-2 0-3 1.5-3 4s1 4 3 4M17 2v8a3 3 0 0 1-3 3v9"/></svg>',
      park: '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 6 12h3l-4 7h14l-4-7h3L12 2Z"/><path d="M12 19v3"/></svg>'
    };

    const center: [number, number] = [37.3681374, -6.0851733];
    let map: L.Map;
    const poiMarkers: Record<string, L.Marker> = {};

    const mapElement = document.getElementById('iz-map');
    if (!mapElement) return;

    // Fix default marker icon assets
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    map = L.map(mapElement, { scrollWheelZoom: false }).setView(center, 15);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abc',
      maxZoom: 19
    }).addTo(map);

    const mainIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker(center, { icon: mainIcon })
      .addTo(map)
      .bindPopup('Propiedad', { minWidth: 100, maxWidth: 250, autoPanPadding: [20, 20] })
      .openPopup();

    pois.forEach((p) => {
      const m = L.marker([p.lat, p.lng]).bindPopup(p.name, { minWidth: 100, maxWidth: 250, autoPanPadding: [20, 20] });
      poiMarkers[p.name] = m;
    });

    function renderList(type: string) {
      const container = document.getElementById('iz-list-container');
      if (!container) return;
      container.innerHTML = '';
      const filtered = type === 'all' ? pois : pois.filter((p) => p.type === type);
      filtered.forEach((p) => {
        const item = document.createElement('div');
        item.className = 'iz-item';
        item.onclick = () => window.izFocusPoi?.(p.name);
        item.innerHTML = `
          <div class="iz-item-icon">${typeIcons[p.type] || ''}</div>
          <div class="iz-item-info">
            <span class="iz-item-name">${p.name}</span>
            <span class="iz-item-meta">${typeMap[p.type] || p.type}</span>
          </div>
          <span class="iz-distance">${p.distance || 'Cerca'}</span>
        `;
        container.appendChild(item);
      });
    }

    window.izFilter = function(type: string, el?: HTMLElement | null) {
      if (el) {
        document.querySelectorAll('.iz-tab').forEach((t) => t.classList.remove('active'));
        el.classList.add('active');
      }
      Object.values(poiMarkers).forEach((m) => map.removeLayer(m));
      const filtered = type === 'all' ? pois : pois.filter((p) => p.type === type);
      filtered.forEach((p) => {
        poiMarkers[p.name].addTo(map);
      });
      map.setView(center, 15);
      renderList(type);
    };

    window.izFocusPoi = function(name: string) {
      Object.values(poiMarkers).forEach((m) => map.removeLayer(m));
      const marker = poiMarkers[name];
      if (marker) {
        marker.addTo(map);
        map.setView(marker.getLatLng(), 16);
        marker.openPopup();
      }
    };

    const initialActiveTab = document.querySelector('.iz-tab.active') as HTMLElement | null;
    window.izFilter('all', initialActiveTab);

    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    window.addEventListener('resize', handleResize);
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      map.remove();
      mapInstanceRef.current = null;
      delete window.izFilter;
      delete window.izFocusPoi;
    };
  }, []);

  return (
    <section id="ubicacion" className="w-full h-auto py-20 md:py-28 bg-[#1c1917] text-[#f5f2eb] border-b border-stone-800 relative block clear-both">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-stone-800/80 border border-stone-700/60 text-[#e09884] text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>UBICACIÓN Y ENTORNO</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#faf8f5]">
            Bormujos: vivir cerca de todo
          </h2>
          <p className="text-stone-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Explora las conexiones, colegios, centros de salud, comercios y zonas verdes a pocos minutos de la vivienda.
          </p>
        </div>

        {/* InmoZone Kit: Paseo Manuel Siurot, 39, Bormujos 41930 */}
        <div id="inmozone-root" className="inmozone-wrapper">
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
            .inmozone-wrapper { font-family: 'Inter', sans-serif; width: 100%; max-width: 100%; margin: 0; background: #C1633B; color: white; border-radius: 40px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); box-sizing: border-box; }
            .iz-grid { display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 0; width: 100%; max-width: 100%; box-sizing: border-box; }
            #iz-map { height: 600px; width: 100%; box-sizing: border-box; }
            .iz-sidebar { padding: 40px; background: rgba(255,255,255,0.02); border-left: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; width: 100%; max-width: 100%; box-sizing: border-box; }
            .iz-tabs-wrapper { position: relative; width: 100%; max-width: 100%; box-sizing: border-box; }
            .iz-tabs { display: flex; gap: 10px; margin-bottom: 30px; overflow-x: auto; padding-bottom: 10px; scrollbar-width: none; -webkit-overflow-scrolling: touch; width: 100%; max-width: 100%; box-sizing: border-box; }
            .iz-tabs::-webkit-scrollbar { display: none; }
            .iz-tab { padding: 10px 20px; border-radius: 100px; font-size: 10px; font-weight: 800; cursor: pointer; white-space: nowrap; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); transition: all 0.3s; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.6); flex-shrink: 0; }
            .iz-tab.active { background: #F6F1E9; color: black; border-color: #F6F1E9; box-shadow: 0 0 20px #F6F1E94D; }
            .iz-list { display: flex; flex-direction: column; gap: 12px; overflow-y: auto; max-height: 450px; padding-right: 10px; width: 100%; box-sizing: border-box; }
            .iz-list::-webkit-scrollbar { width: 4px; }
            .iz-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
            .iz-item { display: flex; align-items: center; gap: 14px; padding: 16px; border-radius: 16px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s; cursor: pointer; width: 100%; box-sizing: border-box; }
            .iz-item:hover { border-color: #F6F1E94D; background: rgba(255,255,255,0.08); }
            .iz-item-icon { flex-shrink: 0; width: 38px; height: 38px; border-radius: 12px; background: rgba(246,241,233,0.1); display: flex; align-items: center; justify-content: center; }
            .iz-item-icon svg { width: 18px; height: 18px; stroke: #F6F1E9; fill: none; }
            .iz-item-info { display: flex; flex-direction: column; flex-grow: 1; min-width: 0; }
            .iz-item-name { font-weight: 700; font-size: 14px; color: white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
            .iz-item-meta { font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.6); margin-top: 4px; font-weight: 800; }
            .iz-distance { font-size: 10px; font-weight: 800; color: #F6F1E9; background: #F6F1E91A; padding: 4px 12px; border-radius: 100px; text-transform: uppercase; flex-shrink: 0; }
            .leaflet-popup-content-wrapper { min-width: 120px !important; border-radius: 12px !important; }
            .leaflet-popup-content { min-width: 80px !important; white-space: normal !important; word-wrap: break-word !important; overflow-wrap: break-word !important; font-size: 14px !important; line-height: 1.4 !important; margin: 10px 14px !important; }
            
            @media (max-width: 1024px) {
              .iz-grid { grid-template-columns: 1fr; }
              .iz-sidebar { border-left: none; border-top: 1px solid rgba(255,255,255,0.1); }
              #iz-map { height: 400px; }
            }

            @media (max-width: 768px) {
              .inmozone-wrapper {
                box-sizing: border-box;
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
                border-radius: 24px;
              }
              .iz-grid {
                box-sizing: border-box;
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
                grid-template-columns: 1fr;
              }
              #iz-map {
                height: 260px !important;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
              }
              .iz-sidebar {
                padding: 20px;
                box-sizing: border-box;
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
              }
              .iz-tabs-wrapper {
                position: relative;
                width: 100%;
                max-width: 100%;
                margin-bottom: 20px;
                box-sizing: border-box;
              }
              .iz-tabs-wrapper::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 8px;
                width: 32px;
                background: linear-gradient(to right, rgba(193, 99, 59, 0), #C1633B 90%);
                pointer-events: none;
                z-index: 5;
              }
              .iz-tabs {
                display: flex;
                gap: 8px;
                margin-bottom: 0;
                overflow-x: auto;
                padding-bottom: 8px;
                padding-right: 28px;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                scrollbar-width: none;
                -webkit-overflow-scrolling: touch;
                mask-image: linear-gradient(to right, black calc(100% - 28px), transparent 100%);
                -webkit-mask-image: linear-gradient(to right, black calc(100% - 28px), transparent 100%);
              }
              .iz-tab {
                padding: 8px 16px;
                font-size: 10px;
              }
              .iz-list {
                max-height: 280px;
                overflow-y: auto;
                gap: 10px;
                padding-right: 6px;
                width: 100%;
                box-sizing: border-box;
              }
              .iz-item {
                padding: 12px 14px;
                gap: 12px;
                border-radius: 14px;
              }
              .iz-item-name {
                font-size: 13px;
              }
            }
          `}</style>

          <div className="iz-grid">
            <div id="iz-map" ref={mapContainerRef}></div>
            <div className="iz-sidebar">
              <div className="iz-tabs-wrapper">
                <div className="iz-tabs" id="iz-tabs-container">
                  <div
                    className="iz-tab active"
                    onClick={(e) => window.izFilter?.('all', e.currentTarget)}
                  >
                    Todos
                  </div>
                  <div
                    className="iz-tab"
                    onClick={(e) => window.izFilter?.('school', e.currentTarget)}
                  >
                    Educación
                  </div>
                  <div
                    className="iz-tab"
                    onClick={(e) => window.izFilter?.('hospital', e.currentTarget)}
                  >
                    Salud
                  </div>
                  <div
                    className="iz-tab"
                    onClick={(e) => window.izFilter?.('supermarket', e.currentTarget)}
                  >
                    Compras
                  </div>
                  <div
                    className="iz-tab"
                    onClick={(e) => window.izFilter?.('restaurant', e.currentTarget)}
                  >
                    Gastronomía
                  </div>
                  <div
                    className="iz-tab"
                    onClick={(e) => window.izFilter?.('park', e.currentTarget)}
                  >
                    Parques
                  </div>
                </div>
              </div>
              <div className="iz-list" id="iz-list-container"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
