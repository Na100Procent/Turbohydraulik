import { Box } from "@mui/material";
import { sectionIds } from "../../constants/appConstants";
import TopMenu from "../../components/sections/topMenu/TopMenu";
import IntroSection from "../../components/sections/intro/IntroSection";
import AboutUs from "../../components/sections/aboutUs/AboutUs";
import OurServices from "../../components/sections/ourServices/OurServices";
import Footer from "../../components/sections/footer/Footer";
import InNumbers from "../../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../../components/sections/howToOrderUs/HowToOrderUs";
import CustomerReviews from "../../components/sections/customerReviews/CustomerReviews";
import RecentWorks from "../../components/sections/recentWorks/RecentWorks";
import FAQsection from "../../components/sections/faqSection/FAQsection";
import { CityData, SectionContent, ServiceData } from "@/app/data/types";
import PriceList from "@/app/components/sections/priceList/PriceList";
import { websiteData } from "@/app/data/data";

interface Props {
  service: ServiceData;
  city?: CityData;
}
export default function ServicePage({ service, city }: Props) {
  const getContent = (section: keyof SectionContent) => {
    if (!city) return service.content[section];
    return service.cities[city.slug][section];
  };

  const services = Object.values(websiteData.services);
  const servicesPrices = services.map((service) => ({
    title: service.name,
    price: "100$",
  }));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      id={sectionIds.home}
    >
      <TopMenu />
      <IntroSection slug={city} content={getContent("home")} />
      {/* <HeroService/> */}
      <CustomerReviews city={city} content={getContent("reviews")} />
      <AboutUs city={city} content={getContent("about")} />
      <HowToOrderUs />
      <InNumbers />
      <PriceList items={servicesPrices} city={city} />
      <RecentWorks />
      <FAQsection />
      <OurServices city={city} />
      <Footer />
    </Box>
  );
}
