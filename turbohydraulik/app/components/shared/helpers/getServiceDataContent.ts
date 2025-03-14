import { ServiceData } from "@/app/data/types/dataTypes";
import {
  HeroContent,
  ReviewsContent,
  HowToContent,
  AboutUsContent,
  RecentWorksContent,
  InNumbersContent,
  PriceListContent,
  OurServiceContent,
  AboutServiceContent,
} from "../../../data/types/sectionTypes";

export const getServiceDataContent = (serviceData: ServiceData) => {
  const heroContent: HeroContent = {
    hero_h1: serviceData.content.hero_h1,
    hero_h2: serviceData.content.hero_h2,
    hero_text: serviceData.content.hero_text,
  };

  const aboutServiceContent: AboutServiceContent = {
    aboutService_h2: serviceData.content.aboutService_h2,
    aboutService_text: serviceData.content.aboutService_text,
  };

  const ourServicesContent: OurServiceContent = {
    service_h1: serviceData.content.service_h1,
    service_text: serviceData.content.service_text,
    service_h2: serviceData.content.service_h2,
  };
  const reviewsContent: ReviewsContent = {
    testimonials_h2: serviceData.content.testimonials_h2,
    testimonials_text_1: serviceData.content.testimonials_text_1,
    testimonials_h3: serviceData.content.testimonials_h3,
    testimonials_text_2: serviceData.content.testimonials_text_2,
  };

  const howToContent: HowToContent = {
    steps_h2: serviceData.content.steps_h2,
  };

  const aboutUsContent: AboutUsContent = {
    aboutUs_h2: serviceData.content.aboutUs_h2,
    aboutUs_h3: serviceData.content.aboutUs_h3,
    aboutUs_text: serviceData.content.aboutUs_text,
  };

  const recentWorksContent: RecentWorksContent = {
    portfolio_h2: serviceData.content.portfolio_h2,
    portfolio_text: serviceData.content.portfolio_text,
  };
  const inNumbersContent: InNumbersContent = {
    aboutUsNumbers_h2: serviceData.content.aboutUsNumbers_h2,
    aboutUsNumbers_text: serviceData.content.aboutUsNumbers_text,
  };

  const priceListContent: PriceListContent = {
    priceList_h2: serviceData.content.priceList_h2,
    priceList_h3: serviceData.content.priceList_h3,
    priceList_text: serviceData.content.priceList_text,
  };

  return {
    heroContent,
    aboutServiceContent,
    ourServicesContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
  };
};
