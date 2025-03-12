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
import { CityContent, HeroContent } from "../data/types";
import theme from "../theme/theme";
import AboutCity from "../components/sections/aboutCity/AboutCity";
import PriceList from "../components/sections/priceList/PriceList";
import DistrictsList from "../components/shared/DistrictsList";
import websiteData from "../data//toBeData.json";
interface Props {
  cityContent: CityContent;
}

export default function CityPage({ cityContent }: Props) {
  const services = Object.values(websiteData.services);
  const servicesPrices = services.map((service) => ({
    title: service.name,
    price: "100$",
  }));

  const heroContent: HeroContent = {
    hero_h1: cityContent.content.hero_h1,
    hero_h2: cityContent.content.hero_h2,
    hero_text: cityContent.content.hero_text,
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      id={sectionIds.home}
    >
      <TopMenu />
      <IntroSection content={heroContent} />

      <OurServices city={city} />
      <CustomerReviews city={city} content={getContent("reviews")} />
      <HowToOrderUs />
      <AboutUs
        city={city}
        content={getContent("about")}
        bgColor={theme.palette.custom.blueLight}
      />
      <AboutCity city={city} />

      <RecentWorks />
      <InNumbers />
      <PriceList items={servicesPrices} city={city} />
      <FAQsection />

      <Box
        width={"100%"}
        bgcolor={theme.palette.custom.background}
        padding="0px 0px 400px 0 "
      >
        <DistrictsList city={city} />
      </Box>
      <Footer />
    </Box>
  );
}
