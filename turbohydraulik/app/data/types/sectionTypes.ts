import { sectionIds } from "@/app/constants/appConstants";

export type SectionType = keyof typeof sectionIds;
export interface MetaContent {
  title: string;
  description: string;
}

export interface HeroContent {
  hero_h1: string;
  hero_h2: string;
  hero_text: string;
  hero_images?: string[];
}

export interface ReviewsContent {
  testimonials_h2: string;
  testimonials_text_1: string;
  testimonials_h3: string;
  testimonials_text_2: string;
}

export interface OurServiceContent {
  service_h2: string;
  service_text: string;
  service_h3: string;
}

export interface AboutServiceContent {
  aboutService_h2: string;
  aboutService_text1: string;
  aboutService_h3: string;
  aboutService_text2: string;
}
export interface HowToContent {
  steps_h2: string;
}

export interface AboutUsContent {
  aboutUs_h2: string;
  aboutUs_h3: string;
  aboutUs_text: string;
  aboutUs_text_2: string;
  aboutUs_h3_2: string;
}

export interface AboutCityContent {
  aboutCity_h2: string;
  aboutCity_text1: string;
  aboutCity_h3: string;
  aboutCity_text2: string;
}

export interface RecentWorksContent {
  portfolio_h2: string;
  portfolio_text: string;
}

export interface InNumbersContent {
  aboutUsNumbers_h2: string;
  aboutUsNumbers_text: string;
}

export interface PriceListContent {
  priceList_h2: string;
  priceList_h3: string;
  priceList_text: string;
}

export interface FooterContent {
  postalCode: string;
  street: string;
  cityName?: string;
}
