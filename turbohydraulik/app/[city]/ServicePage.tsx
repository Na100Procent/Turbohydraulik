import { Box } from "@mui/material";
import { errorPageLoad, sectionIds } from "../constants/appConstants";
import TopMenu from "../components/sections/topMenu/TopMenu";
import AboutUs from "../components/sections/aboutUs/AboutUs";
import OurServices from "../components/sections/ourServices/OurServices";
import Footer from "../components/sections/footer/Footer";
import InNumbers from "../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../components/sections/howToOrderUs/HowToOrderUs";
import CustomerReviews from "../components/sections/customerReviews/CustomerReviews";
import RecentWorks from "../components/sections/recentWorks/RecentWorks";
import FAQsection from "../components/sections/faqSection/FAQsection";
import PriceList from "../components/sections/priceList/PriceList";
import HeroService from "../components/sections/heroService/HeroService";
import theme from "../theme/theme";
import { ServiceData, SubService } from "../data/types/dataTypes";
import { getServiceDataContent } from "../components/shared/helpers/getServiceDataContent";
import ErrorMessage from "../components/shared/ErrorMessage";
import AboutService from "../components/sections/aboutService/AboutService";

interface Props {
  serviceData: ServiceData;
}

export default function ServicePage({ serviceData }: Props) {
  if (!serviceData) return <ErrorMessage message={errorPageLoad} />;

  const { subServices, name } = serviceData;
  const subServicesPriceList = subServices.map((subService: SubService) => ({
    title: subService.name,
    price: subService.price,
  }));

  const {
    heroContent,
    aboutServiceContent,
    ourServicesContent,
    reviewsContent,
    howToContent,
    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
  } = getServiceDataContent(serviceData);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      id={sectionIds.home}
    >
      <TopMenu />
      <HeroService content={heroContent} serviceName={name} />
      <AboutService content={aboutServiceContent} subServices={subServices} />
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
        padding="0 0 200px 0 "
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
