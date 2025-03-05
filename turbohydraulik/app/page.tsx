import { Box } from "@mui/material";
import IntroSection from "./components/sections/intro/IntroSection";
import OurServices from "./components/sections/ourServices/OurServices";
import HowToOrderUs from "./components/sections/howToOrderUs/HowToOrderUs";
import InNumbers from "./components/sections/inNumbers/InNumbers";
import AboutUs from "./components/sections/aboutUs/AboutUs";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <IntroSection />
      <AboutUs />
      <OurServices />
      <HowToOrderUs />
      <InNumbers />
    </Box>
  );
}
