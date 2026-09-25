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

export const OVERVIEW_THUMBNAILS: GalleryPhoto[] = [
  {
    id: 'ov-1',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/salon-principal-marca-agua.jpg',
    title: 'Salón Principal',
    caption: 'Salón luminoso con distribución moderna',
  },
  {
    id: 'ov-2',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350077/dormitorio-principal-marca-agua_rurf1h.jpg',
    title: 'Dormitorio Principal',
    caption: 'Dormitorio principal con vestidor y luz natural',
  },
  {
    id: 'ov-3',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/cocina-1-marca-agua_ehl5yf.jpg',
    title: 'Cocina',
    caption: 'Cocina amueblada y equipada',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/salon-principal-marca-agua.jpg',
    title: 'Salón Principal',
    caption: 'Luminoso salón con distribución abierta',
  },
  {
    id: 'photo-2',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/comedor-marca-agua_s9oohu.jpg',
    title: 'Zona de Comedor',
    caption: 'Espacio de comedor integrado y acogedor',
  },
  {
    id: 'photo-3',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/cocina-1-marca-agua_ehl5yf.jpg',
    title: 'Cocina Principal',
    caption: 'Cocina amueblada y completamente equipada',
  },
  {
    id: 'photo-4',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/cocina-2-marca-agua_kvutv3.jpg',
    title: 'Cocina (detalle)',
    caption: 'Encimera y mobiliario con excelentes acabados',
  },
  {
    id: 'photo-5',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350077/cocina-3-marca-agua_zd4byu.jpg',
    title: 'Cocina (vista office)',
    caption: 'Distribución funcional con luz natural',
  },
  {
    id: 'photo-6',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350077/dormitorio-principal-marca-agua_rurf1h.jpg',
    title: 'Dormitorio Principal',
    caption: 'Dormitorio en suite con vestidor privado',
  },
  {
    id: 'photo-7',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350077/dormitorio-secundario-editorial-marca-agua_f6e5jp.jpg',
    title: 'Dormitorio Secundario',
    caption: 'Habitación amplia con armario empotrado',
  },
  {
    id: 'photo-8',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350077/dormitorio-adolescente-marca-agua_vrjny8.jpg',
    title: 'Tercer Dormitorio',
    caption: 'Espacio confortable y muy luminoso',
  },
  {
    id: 'photo-9',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/despacho-marca-agua_zo5ocg.jpg',
    title: 'Despacho / 4º Dormitorio',
    caption: 'Estancia polivalente para despacho profesional o habitación',
  },
  {
    id: 'photo-10',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/lavadero-marca-agua_tel43j.jpg',
    title: 'Lavadero Independiente',
    caption: 'Espacio práctico de lavandería y almacenaje',
  },
  {
    id: 'photo-11',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/bano-1-marca-agua_q52n2k.jpg',
    title: 'Baño Principal',
    caption: 'Baño completo con acabados modernos',
  },
  {
    id: 'photo-12',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/bano-2-marca-agua_xdigep.jpg',
    title: 'Segundo Baño',
    caption: 'Baño completo con plato de ducha',
  },
  {
    id: 'photo-13',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/porche-entrada-marca-agua_nbipxl.jpg',
    title: 'Porche y Entrada',
    caption: 'Entrada principal con porche exterior',
  },
  {
    id: 'photo-14',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/jardin-marca-agua_ssyo4o.jpg',
    title: 'Jardín y Patio Privado',
    caption: 'Patio trasero con salida directa a zonas comunes',
  },
  {
    id: 'photo-15',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350077/Diseño_sin_título_7_wmcnqn.png',
    title: 'Piscina Comunitaria',
    caption: 'Piscina comunitaria en urbanización privada',
  },
  {
    id: 'photo-16',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/Diseño_sin_título_8_y11ak8.png',
    title: 'Zonas Comunes Ajardinadas',
    caption: 'Espacios verdes cuidados para el disfrute en familia',
  },
  {
    id: 'photo-17',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/Diseño_sin_título_9_kaluku.png',
    title: 'Urbanización Residencial',
    caption: 'Entorno tranquilo y residencial en Bormujos',
  },
];

export const FEATURED_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'feat-1',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/salon-principal-marca-agua.jpg',
    title: 'Salón Principal',
    caption: 'Luminoso salón con distribución abierta',
  },
  {
    id: 'feat-2',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/cocina-1-marca-agua_ehl5yf.jpg',
    title: 'Cocina',
    caption: 'Cocina amueblada y equipada',
  },
  {
    id: 'feat-3',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350077/dormitorio-principal-marca-agua_rurf1h.jpg',
    title: 'Dormitorio Principal',
    caption: 'Dormitorio en suite con vestidor',
  },
  {
    id: 'feat-4',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350076/bano-1-marca-agua_q52n2k.jpg',
    title: 'Baño Principal',
    caption: 'Baño completo con acabados actuales',
  },
  {
    id: 'feat-5',
    url: 'https://res.cloudinary.com/dbaan8ofb/image/upload/v1790350078/porche-entrada-marca-agua_nbipxl.jpg',
    title: 'Porche y Entrada',
    caption: 'Entrada principal a la vivienda',
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
