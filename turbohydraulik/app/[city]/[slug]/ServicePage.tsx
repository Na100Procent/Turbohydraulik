import { Box } from "@mui/material";
import { errorPageLoad, sectionIds } from "../../constants/appConstants";
import TopMenu from "../../components/sections/topMenu/TopMenu";
import AboutUs from "../../components/sections/aboutUs/AboutUs";
import OurServices from "../../components/sections/ourServices/OurServices";
import Footer from "../../components/sections/footer/Footer";
import InNumbers from "../../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../../components/sections/howToOrderUs/HowToOrderUs";
import CustomerReviews from "../../components/sections/customerReviews/CustomerReviews";
import RecentWorks from "../../components/sections/recentWorks/RecentWorks";
import FAQsection from "../../components/sections/faqSection/FAQsection";
import {
  DistrictData,
  ServiceData,
  SubService,
} from "@/app/data/types/dataTypes";
import PriceList from "@/app/components/sections/priceList/PriceList";
import HeroService from "@/app/components/sections/heroService/HeroService";
import theme from "@/app/theme/theme";
import ErrorMessage from "@/app/components/shared/ErrorMessage";
import { getCityServiceDataContent } from "@/app/components/shared/helpers/getCityServiceDataContent";

interface Props {
  serviceData: DistrictData;
  cityService: ServiceData;
}
export default function ServicePage({ serviceData, cityService }: Props) {
  if (!serviceData) return <ErrorMessage message={errorPageLoad} />;

  const subServices = cityService.subServices;
  const subServicesPriceList = subServices.map((subService: SubService) => ({
    title: subService.name,
    price: subService.price,
  }));

  const {
    heroContent,
    ourServicesContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
  } = getCityServiceDataContent(serviceData);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      id={sectionIds.home}
    >
      <TopMenu />
      <HeroService content={heroContent} />
      <CustomerReviews content={reviewsContent} />
      <AboutUs content={aboutUsContent} />
      <HowToOrderUs content={howToContent} />
      <InNumbers content={inNumbersContent} />
      <PriceList content={priceListContent} items={subServicesPriceList} />
      <FAQsection />
      <RecentWorks content={recentWorksContent} />
      <Box
        width={"100%"}
        bgcolor={theme.palette.custom.background}
        padding="0px 0px 400px 0 "
      >
        <OurServices
          bgColor={theme.palette.custom.background}
          headerColor={theme.palette.primary.main}
          content={ourServicesContent}
        />
      </Box>
      <Footer />
    </Box>
  );
}
