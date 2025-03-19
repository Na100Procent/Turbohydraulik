import { CityData } from "@/app/data/types/dataTypes";
import {
  HeroContent,
  ReviewsContent,
  HowToContent,
  AboutUsContent,
  AboutCityContent,
  RecentWorksContent,
  InNumbersContent,
  PriceListContent,
  OurServiceContent,
} from "../../../data/types/sectionTypes";

export const getCityDataContent = (cityData: CityData) => {
  const heroContent: HeroContent = {
    hero_h1: cityData.content.hero_h1,
    hero_h2: cityData.content.hero_h2,
    hero_text: cityData.content.hero_text,
  };

  const ourServicesContent: OurServiceContent = {
    service_h2: cityData.content.service_h2,
    service_text: cityData.content.service_text,
    service_h3: cityData.content.service_h3,
  };
  const reviewsContent: ReviewsContent = {
    testimonials_h2: cityData.content.testimonials_h2,
    testimonials_text_1: cityData.content.testimonials_text_1,
    testimonials_h3: cityData.content.testimonials_h3,
    testimonials_text_2: cityData.content.testimonials_text_2,
  };

  const howToContent: HowToContent = {
    steps_h2: cityData.content.steps_h2,
  };

  const aboutUsContent: AboutUsContent = {
    aboutUs_h2: cityData.content.aboutUs_h2,
    aboutUs_h3: cityData.content.aboutUs_h3,
    aboutUs_text: cityData.content.aboutUs_text,
  };

  const aboutCityContent: AboutCityContent = {
    aboutCity_h2: cityData.content.aboutUs_h2,
    aboutCity_text: cityData.content.aboutUs_text,
  };

  const recentWorksContent: RecentWorksContent = {
    portfolio_h2: cityData.content.portfolio_h2,
    portfolio_text: cityData.content.portfolio_text,
  };
  const inNumbersContent: InNumbersContent = {
    aboutUsNumbers_h2: cityData.content.aboutUsNumbers_h2,
    aboutUsNumbers_text: cityData.content.aboutUsNumbers_text,
  };

  const priceListContent: PriceListContent = {
    priceList_h2: cityData.content.priceList_h2,
    priceList_h3: cityData.content.priceList_h3,
    priceList_text: cityData.content.priceList_text,
  };

  return {
    heroContent,
    ourServicesContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    aboutCityContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
  };
};
