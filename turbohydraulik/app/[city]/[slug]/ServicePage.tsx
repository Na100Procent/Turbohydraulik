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
import { schemaData, websiteData } from "@/app/data/data";

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
    websiteData.cities[city.slug as keyof typeof websiteData.cities]?.content
      .phone;

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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        id={sectionIds.home}
      >
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
