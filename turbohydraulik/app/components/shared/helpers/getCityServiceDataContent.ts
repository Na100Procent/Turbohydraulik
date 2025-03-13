import { DistrictData } from "@/app/data/types/dataTypes";
import {
  HeroContent,
  ReviewsContent,
  HowToContent,
  AboutUsContent,
  RecentWorksContent,
  InNumbersContent,
  PriceListContent,
  OurServiceContent,
} from "../../../data/types/sectionTypes";

export const getCityServiceDataContent = (cityServiceData: DistrictData) => {
  const heroContent: HeroContent = {
    hero_h1: cityServiceData.content.hero_h1,
    hero_h2: cityServiceData.content.hero_h2,
    hero_text: cityServiceData.content.hero_text,
  };

  const ourServicesContent: OurServiceContent = {
    service_h1: cityServiceData.content.service_h1,
    service_text: cityServiceData.content.service_text,
    service_h2: cityServiceData.content.service_h2,
  };
  const reviewsContent: ReviewsContent = {
    testimonials_h2: cityServiceData.content.testimonials_h2,
    testimonials_text_1: cityServiceData.content.testimonials_text_1,
    testimonials_h3: cityServiceData.content.testimonials_h3,
    testimonials_text_2: cityServiceData.content.testimonials_text_2,
  };

  const howToContent: HowToContent = {
    steps_h2: cityServiceData.content.steps_h2,
  };

  const aboutUsContent: AboutUsContent = {
    aboutUs_h2: cityServiceData.content.aboutUs_h2,
    aboutUs_h3: cityServiceData.content.aboutUs_h3,
    aboutUs_text: cityServiceData.content.aboutUs_text,
  };

  const recentWorksContent: RecentWorksContent = {
    portfolio_h2: cityServiceData.content.portfolio_h2,
    portfolio_text: cityServiceData.content.portfolio_text,
  };
  const inNumbersContent: InNumbersContent = {
    aboutUsNumbers_h2: cityServiceData.content.aboutUsNumbers_h2,
    aboutUsNumbers_text: cityServiceData.content.aboutUsNumbers_text,
  };

  const priceListContent: PriceListContent = {
    priceList_h2: cityServiceData.content.priceList_h2,
    priceList_h3: cityServiceData.content.priceList_h3,
    priceList_text: cityServiceData.content.priceList_text,
  };

  return {
    heroContent,
    ourServicesContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
  };
};
