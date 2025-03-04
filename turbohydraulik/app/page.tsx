import { Box } from "@mui/material";
import IntroSection from "./components/sections/intro/IntroSection";
import OurServices from "./components/sections/ourServices/OurServices";
import HowToOrderUs from "./components/sections/howToOrderUs/HowToOrderUs";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <IntroSection />
      <OurServices />
      <HowToOrderUs />
    </Box>
  );
}
