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
  AboutCityContent,
  MetaContent,
} from "../../../data/types/sectionTypes";

export const getDistrictDataContent = (districtData: DistrictData) => {
  const metaContent: MetaContent = {
    title: districtData.content.meta_title,
    description: districtData.content.meta_description,
  };

  const heroContent: HeroContent = {
    hero_h1: districtData.content.hero_h1,
    hero_h2: districtData.content.hero_h2,
    hero_text: districtData.content.hero_text,
  };

  const aboutCityContent: AboutCityContent = {
    aboutCity_h2: districtData.content.aboutCity_h2,
    aboutCity_text1: districtData.content.aboutCity_text1,
    aboutCity_h3: districtData.content.aboutCity_h3,
    aboutCity_text2: districtData.content.aboutCity_text2,
  };
  const ourServicesContent: OurServiceContent = {
    service_h2: districtData.content.service_h2,
    service_text: districtData.content.service_text,
    service_h3: districtData.content.service_h3,
  };
  const reviewsContent: ReviewsContent = {
    testimonials_h2: districtData.content.testimonials_h2,
    testimonials_text_1: districtData.content.testimonials_text_1,
    testimonials_h3: districtData.content.testimonials_h3,
    testimonials_text_2: districtData.content.testimonials_text_2,
  };

  const howToContent: HowToContent = {
    steps_h2: districtData.content.steps_h2,
  };

  const aboutUsContent: AboutUsContent = {
    aboutUs_h2: districtData.content.aboutUs_h2,
    aboutUs_h3: districtData.content.aboutUs_h3,
    aboutUs_text: districtData.content.aboutUs_text,
  };

  const recentWorksContent: RecentWorksContent = {
    portfolio_h2: districtData.content.portfolio_h2,
    portfolio_text: districtData.content.portfolio_text,
  };
  const inNumbersContent: InNumbersContent = {
    aboutUsNumbers_h2: districtData.content.aboutUsNumbers_h2,
    aboutUsNumbers_text: districtData.content.aboutUsNumbers_text,
  };

  const priceListContent: PriceListContent = {
    priceList_h2: districtData.content.priceList_h2,
    priceList_h3: districtData.content.priceList_h3,
    priceList_text: districtData.content.priceList_text,
  };

  return {
    metaContent,
    heroContent,
    ourServicesContent,
    aboutCityContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
  };
};
