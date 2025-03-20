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
    hero_h1: serviceData.mainContent.hero_h1,
    hero_h2: serviceData.mainContent.hero_h2,
    hero_text: serviceData.mainContent.hero_text,
  };

  const aboutServiceContent: AboutServiceContent = {
    aboutService_h2: serviceData.mainContent.aboutService_h2,
    aboutService_text1: serviceData.mainContent.aboutService_text1,
    aboutService_h3: serviceData.mainContent.aboutService_h3,
    aboutService_text2: serviceData.mainContent.aboutService_text2,
  };

  const ourServicesContent: OurServiceContent = {
    service_h2: serviceData.mainContent.service_h2,
    service_text: serviceData.mainContent.service_text,
    service_h3: serviceData.mainContent.service_h3,
  };
  const reviewsContent: ReviewsContent = {
    testimonials_h2: serviceData.mainContent.testimonials_h2,
    testimonials_text_1: serviceData.mainContent.testimonials_text_1,
    testimonials_h3: serviceData.mainContent.testimonials_h3,
    testimonials_text_2: serviceData.mainContent.testimonials_text_2,
  };

  const howToContent: HowToContent = {
    steps_h2: serviceData.mainContent.steps_h2,
  };

  const aboutUsContent: AboutUsContent = {
    aboutUs_h2: serviceData.mainContent.aboutUs_h2,
    aboutUs_h3: serviceData.mainContent.aboutUs_h3,
    aboutUs_text: serviceData.mainContent.aboutUs_text,
  };

  const recentWorksContent: RecentWorksContent = {
    portfolio_h2: serviceData.mainContent.portfolio_h2,
    portfolio_text: serviceData.mainContent.portfolio_text,
  };
  const inNumbersContent: InNumbersContent = {
    aboutUsNumbers_h2: serviceData.mainContent.aboutUsNumbers_h2,
    aboutUsNumbers_text: serviceData.mainContent.aboutUsNumbers_text,
  };

  const priceListContent: PriceListContent = {
    priceList_h2: serviceData.mainContent.priceList_h2,
    priceList_h3: serviceData.mainContent.priceList_h3,
    priceList_text: serviceData.mainContent.priceList_text,
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
