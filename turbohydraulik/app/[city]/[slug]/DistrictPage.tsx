import { Box } from "@mui/material";
import { errorPageLoad, sectionIds } from "../../constants/appConstants";
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
import { DistrictData } from "@/app/data/types/dataTypes";
import theme from "@/app/theme/theme";
import OurCities from "@/app/components/sections/ourCities/OurCities";
import { getDistrictDataContent } from "@/app/components/shared/helpers/getDistrictDataContent";
import ErrorMessage from "@/app/components/shared/ErrorMessage";

interface Props {
  districtData: DistrictData;
}
export default function DistrictPage({ districtData }: Props) {
  if (!districtData) return <ErrorMessage message={errorPageLoad} />;
  const {
    heroContent,
    ourServicesContent,
    reviewsContent,

    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
  } = getDistrictDataContent(districtData);

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
      <OurServices content={ourServicesContent} />
      <CustomerReviews content={reviewsContent} />
      <HowToOrderUs />
      <AboutUs
        content={aboutUsContent}
        bgColor={theme.palette.custom.blueLight}
      />
      <RecentWorks content={recentWorksContent} />
      <InNumbers content={inNumbersContent} />
      <FAQsection />

      <Box
        width={"100%"}
        bgcolor={theme.palette.custom.background}
        padding="0px 0px 300px 0 "
      >
        <OurCities />
      </Box>
      <Footer />
    </Box>
  );
}
