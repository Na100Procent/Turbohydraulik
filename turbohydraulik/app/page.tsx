import { Suspense } from "react";
import { Box } from "@mui/material";
import IntroSection from "./components/sections/intro/IntroSection";
import { sectionIds } from "./constants/appConstants";
import theme from "./theme/theme";
import dynamic from "next/dynamic";
import InNumbers from "./components/sections/inNumbers/InNumbers";
import TopMenu from "./components/sections/topMenu/TopMenu";
import { homepageDataContent } from "./data/data";

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

const AboutUs = dynamic(() => import("./components/sections/aboutUs/AboutUs"));

const OurCities = dynamic(
  () => import("./components/sections/ourCities/OurCities")
);

export const metadata = {
  title: homepageDataContent.meta_title,
  description: homepageDataContent.meta_description,
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
        <Suspense fallback={<div>Ładowanie...</div>}>
          <OurCities />
        </Suspense>
        <Suspense fallback={<div>Ładowanie...</div>}>
          <AboutUs />
        </Suspense>
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
