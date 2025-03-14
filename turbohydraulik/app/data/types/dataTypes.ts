export interface DistrictData {
  name: string;
  slug: string;
  content: CityContent;
}

export interface CityData {
  name: string;
  slug: string;
  cityCardUrl: string;
  availableServices: string[];
  content: CityContent;
  districts: Record<string, DistrictData>;
}

export interface CityContent {
  phone: string;
  hero_h1: string;
  hero_h2: string;
  hero_text: string;
  service_h1: string;
  service_text: string;
  service_h2: string;
  testimonials_h2: string;
  testimonials_h3: string;
  testimonials_text_1: string;
  testimonials_text_2: string;
  steps_h2: string;
  aboutUs_h2: string;
  aboutUs_h3: string;
  aboutUs_text: string;
  aboutCity_h2: string;
  aboutCity_text: string;
  portfolio_h2: string;
  portfolio_text: string;
  aboutUsNumbers_h2: string;
  aboutUsNumbers_text: string;
  priceList_h2: string;
  priceList_h3: string;
  priceList_text: string;
  faq_h2: string;
  contact_h2: string;
  contact_text: string;
}

export interface ServiceData {
  name: string;
  slug: string;
  price: number;
  cardImageUrl: string;
  subServices: SubService[];
  content: ServiceContent;
  citiesContent: Record<string, DistrictData>;
}

export interface ServiceContent {
  content: string;
  hero_h1: string;
  aboutService_h2: string;
  aboutService_text: string;
  hero_h2: string;
  hero_text: string;
  service_h1: string;
  service_text: string;
  service_h2: string;
  testimonials_h2: string;
  testimonials_h3: string;
  testimonials_text_1: string;
  testimonials_text_2: string;
  aboutUs_h2: string;
  aboutUs_h3: string;
  aboutUs_text: string;
  steps_h2: string;
  aboutUsNumbers_h2: string;
  aboutUsNumbers_text: string;
  priceList_h2: string;
  priceList_h3: string;
  priceList_text: string;
  portfolio_h2: string;
  portfolio_text: string;
  faq_h2: string;
  faq_text: string;
}
export interface SubService {
  name: string;
  price: number;
  description: string;
}
