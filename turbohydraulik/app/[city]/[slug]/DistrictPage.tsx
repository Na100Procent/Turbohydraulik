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
import { CityData, DistrictData } from "@/app/data/types/dataTypes";
import theme from "@/app/theme/theme";
import { getDistrictDataContent } from "@/app/components/shared/helpers/getDistrictDataContent";
import ErrorMessage from "@/app/components/shared/ErrorMessage";
import AboutCity from "@/app/components/sections/aboutCity/AboutCity";
import DistrictsList from "@/app/components/shared/DistrictsList";
import PriceList from "@/app/components/sections/priceList/PriceList";
import getCityServices from "@/app/components/shared/helpers/getCityServices";
import { schemaData } from "@/app/data/data";

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
  } = getDistrictDataContent(districtData);

  const phoneNumber = districtData.content.phone;

  const availableServices = getCityServices(city.availableServices);

  const schema = schemaData[city.slug as keyof typeof schemaData];

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
          content={ourServicesContent}
          bottomHeaderColor={theme.palette.custom.background}
          phoneNumber={phoneNumber}
        />
        <CustomerReviews content={reviewsContent} phoneNumber={phoneNumber} />
        <HowToOrderUs phoneNumber={phoneNumber} />
        <AboutUs
          content={aboutUsContent}
          bgColor={theme.palette.custom.blueLight}
          phoneNumber={phoneNumber}
        />
        <AboutCity content={aboutCityContent} phoneNumber={phoneNumber} />
        <RecentWorks content={recentWorksContent} phoneNumber={phoneNumber} />
        <InNumbers content={inNumbersContent} phoneNumber={phoneNumber} />
        <PriceList content={priceListContent} items={availableServices} />
        <FAQsection phoneNumber={phoneNumber} />

        <Box
          width={"100%"}
          bgcolor={theme.palette.custom.background}
          padding="0px 0px 200px 0 "
        >
          <DistrictsList city={city} />
        </Box>
        <Footer phoneNumber={phoneNumber} />
      </Box>
    </>
  );
}
