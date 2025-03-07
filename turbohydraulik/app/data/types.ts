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
