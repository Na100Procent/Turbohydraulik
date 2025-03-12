export interface SectionContent {
  home: string;
  about: string;
  projects: string;
  orderUs: string;
  reviews: string;
  faq: string;
}

export interface ServiceData {
  name: string;
  slug: string;
  content: SectionContent;
  cities: Record<string, SectionContent>;
}

export interface DistrictData {
  name: string;
  slug: string;
  content: SectionContent;
}

export interface CityData {
  name: string;
  slug: string;
  content: SectionContent;
  districts: Record<string, DistrictData>;
}

export interface WebsiteData {
  home: SectionContent;
  services: Record<string, ServiceData>;
  cities: Record<string, CityData>;
}

// json types

export interface HeroContent {
  hero_h1: string;
  hero_h2: string;
  hero_text: string;
}

export interface CityContent {
  name: string;
  slug: string;
  cityCardUrl: string;
  availableServices: string[];
  districts: Array<{ name: string; slug: string }>;
  content: {
    hero_h1: string;
    hero_h2: string;
    hero_text: string;
    service_1_h2: string;
    service_1_text: string;
    testimonials_h2: string;
    testimonials_h3: string;
    testimonials_text_1: string;
    testimonials_h3_2: string;
    service_2_h2: string;
    service_2_text: string;
    steps_h2: string;
    aboutus_h2: string;
    aboutus_text: string;
    aboutcity_h2: string;
    aboutcity_text: string;
    portfolio_h2: string;
    portfolio_text: string;
    aboutusnumbers_h2: string;
    aboutusnumbers_text: string;
    pricelist_h2: string;
    pricelist_h3: string;
    pricelist_text: string;
    faq_h2: string;
    contact_h2: string;
    contact_text: string;
  };
}

export interface ServiceContent {
  name: string;
  slug: string;
  price: string;
  cardImageUrl: string;
  heroServiceImages: string[];
  subservices: Array<{
    name: string;
    price: string;
    description: string;
  }>;
  mainContent: {
    content: string;
    ser_hero_text: string;
    ser_service_h2: string;
    ser_service_text_short: string;
    ser_service_h3_1: string;
    ser_service_text_1: string;
    ser_service_h3_2: string;
    ser_service_text_2: string;
    ser_service_h3_3: string;
    ser_service_text_3: string;
    ser_service_h3_4: string;
    ser_service_text_4: string;
    ser_testimonials_h2: string;
    ser_testimonials_h3: string;
    ser_testimonials_text_1: string;
    ser_testimonials_text_2: string;
    ser_aboutus_h2: string;
    ser_aboutus_text: string;
    ser_steps_h2: string;
    ser_aboutusnumbers_h2: string;
    ser_aboutusnumbers_text: string;
    ser_pricelist_h2: string;
    ser_portfolio_h2: string;
    ser_faq_h2: string;
    ser_faq_text: string;
    submittedAt: string;
    formMode: string;
  };
  citiesContent: Array<{
    citySlug: string;
  }>;
}
