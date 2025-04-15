import { Box } from "@mui/material";
import { errorPageLoad, sectionIds } from "../../constants/appConstants";
import TopMenu from "../../components/sections/topMenu/TopMenu";
import AboutUs from "../../components/sections/aboutUs/AboutUs";
import InNumbers from "../../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../../components/sections/howToOrderUs/HowToOrderUs";
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
import { citiesData, schemaData } from "@/app/data/data";
import dynamic from "next/dynamic";
import { pageContainer } from "@/app/constants/styles";

const CustomerReviews = dynamic(
  () => import("../../components/sections/customerReviews/CustomerReviews")
);
const FAQsection = dynamic(
  () => import("../../components/sections/faqSection/FAQsection")
);
const RecentWorks = dynamic(
  () => import("../../components/sections/recentWorks/RecentWorks")
);
const Footer = dynamic(() => import("../../components/sections/footer/Footer"));
const OurServices = dynamic(
  () => import("../../components/sections/ourServices/OurServices")
);

interface Props {
  serviceData: DistrictData;
  cityService: ServiceData;
  city: CityData;
}
export default function ServicePage({ serviceData, cityService, city }: Props) {
  if (!serviceData) return <ErrorMessage message={errorPageLoad} />;

  const { subServices, name } = cityService;
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
    footerContent,
  } = getCityServiceDataContent(serviceData, cityService);

  const phoneNumber =
    citiesData[city.slug as keyof typeof citiesData]?.content.phone;

  const schema = schemaData[city.slug as keyof typeof schemaData];

  const fullFooterContent = {
    ...footerContent,
    cityName: city.name,
  };
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Box sx={pageContainer} id={sectionIds.home}>
        <TopMenu phoneNumber={phoneNumber} />
        <HeroService
          content={heroContent}
          phoneNumber={phoneNumber}
          serviceName={name}
        />
        <AboutService
          content={aboutServiceContent}
          subServices={subServices}
          phoneNumber={phoneNumber}
        />
        <CustomerReviews
          content={reviewsContent}
          phoneNumber={phoneNumber}
          citySlug={city.slug}
        />
        <AboutUs content={aboutUsContent} phoneNumber={phoneNumber} />
        <HowToOrderUs content={howToContent} phoneNumber={phoneNumber} />
        <InNumbers content={inNumbersContent} phoneNumber={phoneNumber} />
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
          padding="0px 0px 100px 0 "
        >
          <OurServices
            bgColor={theme.palette.custom.background}
            headerColor={theme.palette.primary.main}
            content={ourServicesContent}
            phoneNumber={phoneNumber}
            city={city}
          />
        </Box>
        <Footer
          phoneNumber={phoneNumber}
          {...fullFooterContent}
          cityData={city}
        />
      </Box>
    </>
  );
}
