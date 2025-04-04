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
import { schemaData, websiteData } from "../data/data";

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
    footerContent,
  } = getCityDataContent(cityData);

  const phoneNumber =
    websiteData.cities[cityData.slug as keyof typeof websiteData.cities]
      ?.content.phone;

  const schema = schemaData[cityData.slug as keyof typeof schemaData];
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
          city={cityData}
          content={ourServicesContent}
          bottomHeaderColor={theme.palette.custom.background}
          phoneNumber={phoneNumber}
        />
        <CustomerReviews
          content={reviewsContent}
          phoneNumber={phoneNumber}
          citySlug={cityData.slug}
        />
        <HowToOrderUs content={howToContent} phoneNumber={phoneNumber} />
        <AboutUs
          content={aboutUsContent}
          bgColor={theme.palette.custom.blueLight}
          phoneNumber={phoneNumber}
        />
        <AboutCity content={aboutCityContent} phoneNumber={phoneNumber} />
        <RecentWorks content={recentWorksContent} phoneNumber={phoneNumber} />
        <InNumbers content={inNumbersContent} phoneNumber={phoneNumber} />
        <PriceList
          items={servicesPriceList}
          content={priceListContent}
          phoneNumber={phoneNumber}
        />
        <FAQsection phoneNumber={phoneNumber} />

        <Box
          width={"100%"}
          bgcolor={theme.palette.custom.background}
          padding="0px 0px 200px 0 "
        >
          <DistrictsList city={cityData} />
        </Box>
        <Footer
          phoneNumber={phoneNumber}
          {...footerContent}
          cityData={cityData}
        />
      </Box>
    </>
  );
}
