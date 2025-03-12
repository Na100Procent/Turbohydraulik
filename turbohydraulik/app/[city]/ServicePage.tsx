import { Box } from "@mui/material";
import { sectionIds } from "../constants/appConstants";
import TopMenu from "../components/sections/topMenu/TopMenu";
import AboutUs from "../components/sections/aboutUs/AboutUs";
import OurServices from "../components/sections/ourServices/OurServices";
import Footer from "../components/sections/footer/Footer";
import InNumbers from "../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../components/sections/howToOrderUs/HowToOrderUs";
import CustomerReviews from "../components/sections/customerReviews/CustomerReviews";
import RecentWorks from "../components/sections/recentWorks/RecentWorks";
import FAQsection from "../components/sections/faqSection/FAQsection";
import { SectionContent, ServiceData } from "../data/types";
import PriceList from "../components/sections/priceList/PriceList";
import { websiteData } from "../data/data";
import HeroService from "../components/sections/heroService/HeroService";
import theme from "../theme/theme";

interface Props {
  service: ServiceData;
}

export default function ServicePage({ service }: Props) {
  const getContent = (section: keyof SectionContent) => {
    return service.content[section];
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
      <HeroService slug={service} content={getContent("home")} />
      <CustomerReviews content={getContent("reviews")} />
      <AboutUs content={getContent("about")} />
      <HowToOrderUs />
      <InNumbers />
      <PriceList items={servicesPrices} />
      <FAQsection />
      <RecentWorks />
      <Box
        width={"100%"}
        bgcolor={theme.palette.custom.background}
        padding="0px 0px 400px 0 "
      >
        <OurServices
          bgColor={theme.palette.custom.background}
          headerColor={theme.palette.primary.main}
        />
      </Box>

      <Footer />
    </Box>
  );
}
