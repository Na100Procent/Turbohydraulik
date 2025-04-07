import { Box } from "@mui/material";
import { errorPageLoad, sectionIds } from "../../constants/appConstants";
import TopMenu from "../../components/sections/topMenu/TopMenu";
import IntroSection from "../../components/sections/intro/IntroSection";
import AboutUs from "../../components/sections/aboutUs/AboutUs";
import InNumbers from "../../components/sections/inNumbers/InNumbers";
import HowToOrderUs from "../../components/sections/howToOrderUs/HowToOrderUs";
import { CityData, DistrictData } from "@/app/data/types/dataTypes";
import theme from "@/app/theme/theme";
import { getDistrictDataContent } from "@/app/components/shared/helpers/getDistrictDataContent";
import ErrorMessage from "@/app/components/shared/ErrorMessage";
import AboutCity from "@/app/components/sections/aboutCity/AboutCity";
import DistrictsList from "@/app/components/shared/DistrictsList";
import PriceList from "@/app/components/sections/priceList/PriceList";
import getCityServices from "@/app/components/shared/helpers/getCityServices";
import { schemaData } from "@/app/data/data";
import dynamic from "next/dynamic";

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
  districtData: DistrictData;
  city: CityData;
}
export default function DistrictPage({ districtData, city }: Props) {
  if (!districtData) return <ErrorMessage message={errorPageLoad} />;
  const {
    heroContent,
    ourServicesContent,
    reviewsContent,
    aboutCityContent,
    aboutUsContent,
    recentWorksContent,
    inNumbersContent,
    priceListContent,
    footerContent,
    districtsListContent,
  } = getDistrictDataContent(districtData);

  const phoneNumber = districtData.content.phone;

  const availableServices = getCityServices(city.availableServices);

  const schema = schemaData[city.slug as keyof typeof schemaData];

  const fullFooterContent = {
    ...footerContent,
    cityName: city.name,
  };

  const aboutCityContentWithImg = {
    ...aboutCityContent,
    cityCardUrl: city.cityCardUrl,
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
        <IntroSection content={heroContent} phoneNumber={phoneNumber} />
        <OurServices
          city={city}
          content={ourServicesContent}
          bottomHeaderColor={theme.palette.custom.background}
          phoneNumber={phoneNumber}
        />
        <CustomerReviews
          content={reviewsContent}
          phoneNumber={phoneNumber}
          citySlug={city.slug}
        />
        <HowToOrderUs phoneNumber={phoneNumber} />
        <AboutUs
          content={aboutUsContent}
          bgColor={theme.palette.custom.blueLight}
          phoneNumber={phoneNumber}
        />
        <AboutCity
          content={aboutCityContentWithImg}
          phoneNumber={phoneNumber}
        />
        <RecentWorks content={recentWorksContent} phoneNumber={phoneNumber} />
        <InNumbers content={inNumbersContent} phoneNumber={phoneNumber} />
        <PriceList content={priceListContent} items={availableServices} />
        <FAQsection phoneNumber={phoneNumber} />

        <Box
          width={"100%"}
          bgcolor={theme.palette.custom.background}
          padding="0px 0px 200px 0 "
        >
          <DistrictsList city={city} content={districtsListContent} />
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
