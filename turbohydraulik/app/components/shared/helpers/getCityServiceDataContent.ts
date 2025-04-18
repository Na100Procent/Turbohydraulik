import { DistrictData, ServiceData } from "@/app/data/types/dataTypes";
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
  MetaContent,
  FooterContent,
} from "../../../data/types/sectionTypes";

export const getCityServiceDataContent = (
  cityServiceData: DistrictData,
  cityService: ServiceData
) => {
  const metaContent: MetaContent = {
    title: cityServiceData.content.meta_title,
    description: cityServiceData.content.meta_description,
  };
  const heroContent: HeroContent = {
    hero_h1: cityServiceData.content.hero_h1,
    hero_h2: cityServiceData.content.hero_h2,
    hero_text: cityServiceData.content.hero_text,
    hero_images: cityService.heroServiceImages,
  };

  const aboutServiceContent: AboutServiceContent = {
    aboutService_h2: cityServiceData.content.aboutService_h2,
    aboutService_text1: cityServiceData.content.aboutService_text1,
    aboutService_h3: cityServiceData.content.aboutService_h3,
    aboutService_text2: cityServiceData.content.aboutService_text2,
  };

  const ourServicesContent: OurServiceContent = {
    service_h2: cityServiceData.content.service_h2,
    service_text: cityServiceData.content.service_text,
    service_h3: cityServiceData.content.service_h3,
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
    aboutUs_text_2: cityServiceData.content.aboutUs_text_2,
    aboutUs_h3_2: cityServiceData.content.aboutUs_h3_2,
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

  const footerContent: FooterContent = {
    postalCode: cityServiceData.content.postalCode,
    street: cityServiceData.content.street,
  };

  return {
    metaContent,
    heroContent,
    ourServicesContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
    aboutServiceContent,
    footerContent,
  };
};
