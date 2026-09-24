import { Amenity, Category, GalleryPhoto, PointOfInterest } from '../types';

export const PROPERTY_LOCATION = {
  lat: 36.5101,
  lng: -4.8824, // Marbella / Costa del Sol, Andalucía
  address: '[CALLE / AVENIDA RESIDENCIAL PRIVADA, Nº 00, CÓDIGO POSTAL, ANDALUCÍA]',
  zoneName: '[ZONA EXCLUSIVA RESIDENCIAL]',
};

export const INITIAL_AMENITIES: Amenity[] = [
  {
    id: '1',
    name: 'SUPERFICIE CONSTRUIDA',
    description: '152 m² construidos, 120 m² útiles, distribuidos en tres plantas',
    iconName: 'Maximize2',
  },
  {
    id: '2',
    name: '4 HABITACIONES',
    description: 'Dormitorio principal con baño propio y vestidor, más tres habitaciones con armarios empotrados',
    iconName: 'Bed',
  },
  {
    id: '3',
    name: 'PISCINA COMUNITARIA',
    description: 'Acceso directo desde el patio trasero, recién reformado',
    iconName: 'Waves',
  },
  {
    id: '4',
    name: 'CLIMATIZACIÓN',
    description: 'Aire acondicionado individual en cada estancia y calefacción por radiadores de gas natural',
    iconName: 'Zap',
  },
  {
    id: '5',
    name: 'GARAJE INCLUIDO',
    description: 'Plaza de garaje incluida en el precio, con patio delantero adicional',
    iconName: 'Car',
  },
  {
    id: '6',
    name: 'TERRAZAS Y BALCÓN',
    description: 'Dos terrazas en la última planta, además de balcón y lavadero',
    iconName: 'Cpu',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179405/Captura_de_pantalla_2026-09-22_191357_ksrk6q.jpg',
    title: 'Fotografía 1',
    caption: 'Vivienda unifamiliar adosada en Bormujos',
  },
  {
    id: 'photo-2',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179728/Captura_de_pantalla_2026-09-22_191703_mwlmfz.jpg',
    title: 'Fotografía 2',
    caption: 'Espacios exteriores y zonas comunes',
  },
  {
    id: 'photo-3',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179360/Captura_de_pantalla_2026-09-22_191239_dskisz.jpg',
    title: 'Fotografía 3',
    caption: 'Estancias luminosas con acabados cuidados',
  },
  {
    id: 'photo-4',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179759/Captura_de_pantalla_2026-09-22_191735_nuwnmq.jpg',
    title: 'Fotografía 4',
    caption: 'Terraza y patio exterior',
  },
  {
    id: 'photo-5',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179447/Captura_de_pantalla_2026-09-22_191508_ydtrpe.jpg',
    title: 'Fotografía 5',
    caption: 'Distribución funcional en tres plantas',
  },
  {
    id: 'photo-6',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179401/Captura_de_pantalla_2026-09-22_191339_t059xc.jpg',
    title: 'Fotografía 6',
    caption: 'Salón comedor amplio y acogedor',
  },
  {
    id: 'photo-7',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179457/Captura_de_pantalla_2026-09-22_191534_wa0aqt.jpg',
    title: 'Fotografía 7',
    caption: 'Cocina espaciosa y equipada',
  },
  {
    id: 'photo-8',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179571/Captura_de_pantalla_2026-09-22_191625_jfvufm.jpg',
    title: 'Fotografía 8',
    caption: 'Habitaciones con excelente luz natural',
  },
  {
    id: 'photo-9',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179452/Captura_de_pantalla_2026-09-22_191522_oicmuu.jpg',
    title: 'Fotografía 9',
    caption: 'Dormitorios amplios con armarios empotrados',
  },
  {
    id: 'photo-10',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179650/Captura_de_pantalla_2026-09-22_191718_onwhpt.jpg',
    title: 'Fotografía 10',
    caption: 'Dormitorio principal con vestidor',
  },
  {
    id: 'photo-11',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179440/Captura_de_pantalla_2026-09-22_191450_wgati2.jpg',
    title: 'Fotografía 11',
    caption: 'Baños completos y aseo en planta baja',
  },
  {
    id: 'photo-12',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179627/Captura_de_pantalla_2026-09-22_191641_pdqk05.jpg',
    title: 'Fotografía 12',
    caption: 'Zona exterior y patio reformado',
  },
  {
    id: 'photo-13',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179413/Captura_de_pantalla_2026-09-22_191430_upakua.jpg',
    title: 'Fotografía 13',
    caption: 'Detalles de acabados y carpintería',
  },
  {
    id: 'photo-14',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179413/Captura_de_pantalla_2026-09-22_191430_upakua.jpg',
    title: 'Fotografía 14',
    caption: 'Orientación favorable y ventilación cruzada',
  },
  {
    id: 'photo-15',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179654/Captura_de_pantalla_2026-09-22_191753_c8flr2.jpg',
    title: 'Fotografía 15',
    caption: 'Planta superior y terrazas solárium',
  },
  {
    id: 'photo-16',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179356/Captura_de_pantalla_2026-09-22_191221_onupn8.jpg',
    title: 'Fotografía 16',
    caption: 'Despacho o sala polivalente',
  },
  {
    id: 'photo-17',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179410/Captura_de_pantalla_2026-09-22_191415_pydt5n.jpg',
    title: 'Fotografía 17',
    caption: 'Vistas a parques y entorno residencial',
  },
  {
    id: 'photo-18',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179351/Captura_de_pantalla_2026-09-22_191208_twziey.jpg',
    title: 'Fotografía 18',
    caption: 'Espacios de almacenamiento y lavadero independiente',
  },
  {
    id: 'photo-19',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179368/Captura_de_pantalla_2026-09-22_191309_ltgtoi.jpg',
    title: 'Fotografía 19',
    caption: 'Patio delantero con espacio para aparcamiento',
  },
  {
    id: 'photo-20',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179298/Captura_de_pantalla_2026-09-22_191140_fl1pto.jpg',
    title: 'Fotografía 20',
    caption: 'Urbanización cerrada y tranquila en Bormujos',
  },
  {
    id: 'photo-21',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179397/Captura_de_pantalla_2026-09-22_191324_gka992.jpg',
    title: 'Fotografía 21',
    caption: 'Acceso directo a la piscina comunitaria',
  },
];

export const FEATURED_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'feat-1',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179627/Captura_de_pantalla_2026-09-22_191641_pdqk05.jpg',
    title: 'Fotografía 1',
    caption: 'Zona exterior y patio reformado',
  },
  {
    id: 'feat-2',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179650/Captura_de_pantalla_2026-09-22_191718_onwhpt.jpg',
    title: 'Fotografía 2',
    caption: 'Dormitorio principal con vestidor',
  },
  {
    id: 'feat-3',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179571/Captura_de_pantalla_2026-09-22_191625_jfvufm.jpg',
    title: 'Fotografía 3',
    caption: 'Habitaciones con excelente luz natural',
  },
  {
    id: 'feat-4',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179401/Captura_de_pantalla_2026-09-22_191339_t059xc.jpg',
    title: 'Fotografía 4',
    caption: 'Salón comedor amplio y acogedor',
  },
  {
    id: 'feat-5',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790179759/Captura_de_pantalla_2026-09-22_191735_nuwnmq.jpg',
    title: 'Fotografía 5',
    caption: 'Terraza y patio exterior',
  },
];

export const POINTS_OF_INTEREST: PointOfInterest[] = [
  // Educación
  {
    id: 'poi-1',
    name: '[Colegio Internacional Bilingüe Ejemplo]',
    category: 'Educación',
    timeEstimate: '4 min en coche',
    lat: 36.5145,
    lng: -4.8872,
    distanceMeters: 950,
    iconType: 'GraduationCap',
  },
  {
    id: 'poi-2',
    name: '[Escuela Infantil & Academia de Idiomas]',
    category: 'Educación',
    timeEstimate: '7 min a pie',
    lat: 36.5118,
    lng: -4.8795,
    distanceMeters: 600,
    iconType: 'GraduationCap',
  },
  // Salud
  {
    id: 'poi-3',
    name: '[Hospital Comarcal & Centro de Especialidades]',
    category: 'Salud',
    timeEstimate: '6 min en coche',
    lat: 36.5052,
    lng: -4.8721,
    distanceMeters: 1400,
    iconType: 'Activity',
  },
  {
    id: 'poi-4',
    name: '[Centro de Salud & Farmacia 24h]',
    category: 'Salud',
    timeEstimate: '5 min a pie',
    lat: 36.5085,
    lng: -4.8858,
    distanceMeters: 450,
    iconType: 'Activity',
  },
  // Compras
  {
    id: 'poi-5',
    name: '[Centro Comercial & Supermercado Gourmet]',
    category: 'Compras',
    timeEstimate: '5 min en coche',
    lat: 36.5168,
    lng: -4.8765,
    distanceMeters: 1100,
    iconType: 'ShoppingBag',
  },
  {
    id: 'poi-6',
    name: '[Galería Comercial & Tiendas de Cercanía]',
    category: 'Compras',
    timeEstimate: '8 min a pie',
    lat: 36.5072,
    lng: -4.8891,
    distanceMeters: 750,
    iconType: 'ShoppingBag',
  },
  // Gastronomía
  {
    id: 'poi-7',
    name: '[Restaurante con Estrella Michelin & Bodega]',
    category: 'Gastronomía',
    timeEstimate: '7 min en coche',
    lat: 36.5029,
    lng: -4.8899,
    distanceMeters: 1300,
    iconType: 'Utensils',
  },
  {
    id: 'poi-8',
    name: '[Bistró & Cafetería de Especialidad]',
    category: 'Gastronomía',
    timeEstimate: '6 min a pie',
    lat: 36.5122,
    lng: -4.8845,
    distanceMeters: 500,
    iconType: 'Utensils',
  },
  // Parques
  {
    id: 'poi-9',
    name: '[Parque Botánico Natural & Senderos]',
    category: 'Parques',
    timeEstimate: '3 min a pie',
    lat: 36.5132,
    lng: -4.8808,
    distanceMeters: 350,
    iconType: 'Trees',
  },
  {
    id: 'poi-10',
    name: '[Club de Golf & Campo Deportivo]',
    category: 'Parques',
    timeEstimate: '5 min en coche',
    lat: 36.5188,
    lng: -4.8912,
    distanceMeters: 1600,
    iconType: 'Trees',
  },
];

export const REAL_ESTATE_ADVISOR = {
  nombre: 'Magdalena',
  cargo: 'Asesora Inmobiliaria — Comprarcasa Suhogar Sevilla',
  colegiado: '',
  telefono: '635 475 213',
  whatsapp: '635 475 213',
  email: 'magdalena@suhogarsevilla.com',
  horario: 'Lunes a Viernes de 9:00 a 14:00 y de 16:30 a 19:30',
  avatarUrl: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790182379/Captura_de_pantalla_2026-09-17_173757_z1q3qf.jpg',
};

export const AGENCY_INFO = {
  nombre: 'Comprarcasa Suhogar Sevilla',
  cif: '',
  direccion: 'Calle Chile 104, Bormujos, Sevilla',
  telefono: '635 475 213',
  whatsapp: '635 475 213',
  email: 'domingo@suhogarsevilla.com',
};
