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
  meta_title: string;
  meta_description: string;
  phone: string;
  hero_h1: string;
  hero_h2: string;
  hero_text: string;
  service_h2: string;
  service_text: string;
  service_h3: string;
  testimonials_h2: string;
  testimonials_h3: string;
  testimonials_text_1: string;
  testimonials_text_2: string;
  steps_h2: string;
  aboutUs_h2: string;
  aboutUs_h3: string;
  aboutUs_text: string;
  aboutUs_text_2: string;
  aboutUs_h3_2: string;
  aboutCity_h2: string;
  aboutCity_text1: string;
  aboutCity_h3: string;
  aboutCity_text2: string;
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
  postalCode: string;
  street: string;
}

export interface ServiceData {
  name: string;
  slug: string;
  price: number;
  cardImageUrl: string;
  cardDescription: string;
  heroServiceImages: string[];
  subServices: SubService[];
  mainContent: ServiceContent;
  citiesContent: Record<string, DistrictData>;
}

export interface ServiceContent {
  meta_title: string;
  meta_description: string;
  content: string;
  hero_h1: string;
  aboutService_h2: string;
  aboutService_text1: string;
  aboutService_h3: string;
  aboutService_text2: string;
  hero_h2: string;
  hero_text: string;
  service_h2: string;
  service_text: string;
  service_h3: string;
  testimonials_h2: string;
  testimonials_h3: string;
  testimonials_text_1: string;
  testimonials_text_2: string;
  aboutUs_h2: string;
  aboutUs_h3: string;
  aboutUs_text: string;
  aboutUs_text_2: string;
  aboutUs_h3_2: string;
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
