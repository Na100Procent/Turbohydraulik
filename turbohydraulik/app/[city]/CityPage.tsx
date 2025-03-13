import { Box } from "@mui/material";
import { errorPageLoad, sectionIds } from "../constants/appConstants";
import TopMenu from "../components/sections/topMenu/TopMenu";
import IntroSection from "../components/sections/intro/IntroSection";
import AboutUs from "../components/sections/aboutUs/AboutUs";
import Footer from "../components/sections/footer/Footer";
import InNumbers from "../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../components/sections/howToOrderUs/HowToOrderUs";
import CustomerReviews from "../components/sections/customerReviews/CustomerReviews";
import RecentWorks from "../components/sections/recentWorks/RecentWorks";
import FAQsection from "../components/sections/faqSection/FAQsection";
import theme from "../theme/theme";
import AboutCity from "../components/sections/aboutCity/AboutCity";
import PriceList from "../components/sections/priceList/PriceList";
import DistrictsList from "../components/shared/DistrictsList";
import ErrorMessage from "../components/shared/ErrorMessage";
import { CityData } from "../data/types/dataTypes";
import getCityServices from "../components/shared/helpers/getCityServices";
import OurServices from "../components/sections/ourServices/OurServices";
import { getCityDataContent } from "../components/shared/helpers/getCityDataContent";

interface Props {
  cityData: CityData;
}

export default function CityPage({ cityData }: Props) {
  if (!cityData) return <ErrorMessage message={errorPageLoad} />;

  const cityServices = cityData.availableServices;
  const servicesPriceList = getCityServices(cityServices);

  const {
    heroContent,
    ourServicesContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    aboutCityContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
  } = getCityDataContent(cityData);
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

      <OurServices
        city={cityData}
        content={ourServicesContent}
        bottomHeaderColor={theme.palette.custom.background}
      />
      <CustomerReviews content={reviewsContent} />
      <HowToOrderUs content={howToContent} />
      <AboutUs
        content={aboutUsContent}
        bgColor={theme.palette.custom.blueLight}
      />
      <AboutCity content={aboutCityContent} />
      <RecentWorks content={recentWorksContent} />
      <InNumbers content={inNumbersContent} />
      <PriceList items={servicesPriceList} content={priceListContent} />
      <FAQsection />

      <Box
        width={"100%"}
        bgcolor={theme.palette.custom.background}
        padding="0px 0px 400px 0 "
      >
        <DistrictsList city={cityData} />
      </Box>
      <Footer />
    </Box>
  );
}
