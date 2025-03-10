import { Box } from "@mui/material";
import { sectionIds } from "../constants/appConstants";
import TopMenu from "../components/sections/topMenu/TopMenu";
import IntroSection from "../components/sections/intro/IntroSection";
import AboutUs from "../components/sections/aboutUs/AboutUs";
import OurServices from "../components/sections/ourServices/OurServices";
import Footer from "../components/sections/footer/Footer";
import InNumbers from "../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../components/sections/howToOrderUs/HowToOrderUs";
import CustomerReviews from "../components/sections/customerReviews/CustomerReviews";
import RecentWorks from "../components/sections/recentWorks/RecentWorks";
import FAQsection from "../components/sections/faqSection/FAQsection";
import { CityData, SectionContent } from "../data/types";
import theme from "../theme/theme";
import AboutCity from "../components/sections/aboutCity/AboutCity";
import { websiteData } from "../data/data";
import PriceList from "../components/sections/priceList/PriceList";
import DistrictsList from "../components/shared/DistrictsList";

interface Props {
  city: CityData;
}

export default function CityPage({ city }: Props) {
  const getContent = (section: keyof SectionContent) => {
    return city.content[section];
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

      <OurServices city={city} />
      <CustomerReviews city={city} content={getContent("reviews")} />
      <HowToOrderUs />
      <AboutUs
        city={city}
        content={getContent("about")}
        bgColor={theme.palette.custom.blueLight}
      />
      <AboutCity city={city} />
      <DistrictsList city={city} />
      <PriceList items={servicesPrices} city={city} />
      <RecentWorks />
      <InNumbers />
      <FAQsection />
      <Footer />
    </Box>
  );
}
