export type Category = 'Educación' | 'Salud' | 'Compras' | 'Gastronomía' | 'Parques';

export interface PointOfInterest {
  id: string;
  name: string;
  category: Category;
  timeEstimate: string;
  lat: number;
  lng: number;
  distanceMeters: number;
  iconType: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
}

export interface MortgageInputs {
  propertyPrice: number;
  downPayment: number;
  downPaymentPercent: number;
  loanYears: number;
  interestRate: number;
}

export interface MortgageResults {
  loanAmount: number;
  monthlyPayment: number;
  totalInterest: number;
  itpTax: number;
  fixedCosts: number;
  totalPurchaseCosts: number;
  totalCashRequired: number;
}

export interface ContactFormData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  mensaje: string;
  consentimientoRGPD: boolean;
}
