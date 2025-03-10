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
import { CityData, DistrictData, SectionContent } from "@/app/data/types";
import theme from "@/app/theme/theme";
import OurCities from "@/app/components/sections/ourCities/OurCities";

interface Props {
  district: DistrictData;
  city: CityData;
}
export default function DistrictPage({ district, city }: Props) {
  const getContent = (section: keyof SectionContent) => {
    return district.content[section];
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
      <IntroSection slug={city} content={getContent("home")} />
      <OurServices city={city} />
      <CustomerReviews city={city} content={getContent("reviews")} />
      <HowToOrderUs />
      <AboutUs
        city={city}
        content={getContent("about")}
        bgColor={theme.palette.custom.blueLight}
      />
      <RecentWorks />
      <InNumbers />
      <FAQsection />
      <OurCities />
      <Footer />
    </Box>
  );
}
