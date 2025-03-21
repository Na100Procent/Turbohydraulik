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
  CityData,
  DistrictData,
  ServiceData,
  SubService,
} from "@/app/data/types/dataTypes";
import PriceList from "@/app/components/sections/priceList/PriceList";
import HeroService from "@/app/components/sections/heroService/HeroService";
import theme from "@/app/theme/theme";
import ErrorMessage from "@/app/components/shared/ErrorMessage";
import { getCityServiceDataContent } from "@/app/components/shared/helpers/getCityServiceDataContent";
import AboutService from "@/app/components/sections/aboutService/AboutService";
import { websiteData } from "@/app/data/data";
import Head from "next/head";

interface Props {
  serviceData: DistrictData;
  cityService: ServiceData;
  city: CityData;
}
export default function ServicePage({ serviceData, cityService, city }: Props) {
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
    aboutServiceContent,
    metaContent,
  } = getCityServiceDataContent(serviceData, cityService);

  const phoneNumber =
    websiteData.cities[city.slug as keyof typeof websiteData.cities]?.content
      .phone;

  const { title, description } = metaContent;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        id={sectionIds.home}
      >
        <TopMenu phoneNumber={phoneNumber} />
        <HeroService content={heroContent} phoneNumber={phoneNumber} />
        <AboutService
          content={aboutServiceContent}
          subServices={subServices}
          phoneNumber={phoneNumber}
        />
        <CustomerReviews content={reviewsContent} phoneNumber={phoneNumber} />
        <AboutUs content={aboutUsContent} phoneNumber={phoneNumber} />
        <HowToOrderUs content={howToContent} phoneNumber={phoneNumber} />
        <InNumbers
          content={inNumbersContent}
          phoneNumber={phoneNumber}
          bgColor={theme.palette.custom.yellowLight}
        />
        <PriceList
          content={priceListContent}
          items={subServicesPriceList}
          phoneNumber={phoneNumber}
        />
        <FAQsection phoneNumber={phoneNumber} />
        <RecentWorks content={recentWorksContent} phoneNumber={phoneNumber} />
        <Box
          width={"100%"}
          bgcolor={theme.palette.custom.background}
          padding="0px 0px 200px 0 "
        >
          <OurServices
            bgColor={theme.palette.custom.background}
            headerColor={theme.palette.primary.main}
            content={ourServicesContent}
            phoneNumber={phoneNumber}
          />
        </Box>
        <Footer phoneNumber={phoneNumber} />
      </Box>
    </>
  );
}
