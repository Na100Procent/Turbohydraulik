import { Box } from "@mui/material";
import IntroSection from "./components/sections/intro/IntroSection";
import OurServices from "./components/sections/ourServices/OurServices";
import HowToOrderUs from "./components/sections/howToOrderUs/HowToOrderUs";
import InNumbers from "./components/sections/inNumbers/InNumbers";
import AboutUs from "./components/sections/aboutUs/AboutUs";
import CustomerReviews from "./components/sections/customerReviews/CustomerReviews";
import RecentWorks from "./components/sections/recentWorks/RecentWorks";
import FAQsection from "./components/sections/faqSection/FAQsection";
import Footer from "./components/sections/footer/Footer";
import TopMenu from "./components/sections/topMenu/TopMenu";
import { sectionIds } from "./constants/appConstants";
import OurCities from "./components/sections/ourCities/OurCities";
import theme from "./theme/theme";

export default function Home() {
  const containerSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
    width: "100%",
    position: "relative",
  };
  return (
    <Box sx={containerSx} id={sectionIds.home}>
      <TopMenu />
      <IntroSection />
      <OurCities />
      <AboutUs />
      <OurServices bottomHeaderColor={theme.palette.custom.background} />
      <HowToOrderUs />
      <CustomerReviews />
      <InNumbers />
      <RecentWorks />
      <FAQsection />
      <Footer />
    </Box>
  );
}
