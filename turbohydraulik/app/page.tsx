import { Suspense } from "react";
import { Box } from "@mui/material";
import IntroSection from "./components/sections/intro/IntroSection";
import OurCities from "./components/sections/ourCities/OurCities";
import AboutUs from "./components/sections/aboutUs/AboutUs";
import { sectionIds } from "./constants/appConstants";
import theme from "./theme/theme";
import { websiteData } from "./data/data";
import dynamic from "next/dynamic";
import InNumbers from "./components/sections/inNumbers/InNumbers";
import TopMenu from "./components/sections/topMenu/TopMenu";

const OurServices = dynamic(
  () => import("./components/sections/ourServices/OurServices")
);
const CustomerReviews = dynamic(
  () => import("./components/sections/customerReviews/CustomerReviews")
);
const FAQsection = dynamic(
  () => import("./components/sections/faqSection/FAQsection")
);
const RecentWorks = dynamic(
  () => import("./components/sections/recentWorks/RecentWorks")
);
const Footer = dynamic(() => import("./components/sections/footer/Footer"));

export const metadata = {
  title: websiteData.homepageContent.meta_title,
  description: websiteData.homepageContent.meta_description,
};

export default function Home() {
  const containerSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
    width: "100%",
    position: "relative",
  };

  return (
    <>
      <Box sx={containerSx} id={sectionIds.home}>
        <TopMenu />
        <IntroSection />
        <OurCities />
        <AboutUs />
        <Suspense fallback={<div>Ładowanie...</div>}>
          <OurServices bottomHeaderColor={theme.palette.custom.background} />
        </Suspense>
        <Suspense fallback={<div>Ładowanie...</div>}>
          <CustomerReviews />
        </Suspense>
        <InNumbers />
        <Suspense fallback={<div>Ładowanie...</div>}>
          <RecentWorks />
        </Suspense>
        <Suspense fallback={<div>Ładowanie...</div>}>
          <FAQsection />
        </Suspense>
        <Suspense fallback={<div>Ładowanie...</div>}>
          <Footer />
        </Suspense>
      </Box>
    </>
  );
}
