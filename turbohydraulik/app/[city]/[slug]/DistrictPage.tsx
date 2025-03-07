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
import { CityData, DistrictData } from "@/app/data/types";

interface Props {
  slug: DistrictData;
  city: CityData;
}
export default function DistrictPage({ slug, city }: Props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      id={sectionIds.home}
    >
      <TopMenu />
      {/* <IntroSection slug={slug} /> */}
      {/* <AboutUs slug={slug} />
      <OurServices slug={slug} />
      <HowToOrderUs />
      <CustomerReviews slug={slug} /> */}
      <InNumbers />
      <RecentWorks />
      <FAQsection />
      <Footer />
    </Box>
  );
}
