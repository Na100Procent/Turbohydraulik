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
import { SectionContent, ServiceData } from "../data/types";
import OurCities from "../components/sections/ourCities/OurCities";

interface Props {
  service: ServiceData;
}

export default function ServicePage({ service }: Props) {
  const getContent = (section: keyof SectionContent) => {
    return service.content[section];
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
      <IntroSection slug={service} content={getContent("home")} />
      <OurCities />
      <AboutUs content={getContent("about")} />
      <OurServices />
      <HowToOrderUs />
      <CustomerReviews />
      <InNumbers />
      <RecentWorks />
      <FAQsection />
      <Footer />
    </Box>
  );
}
