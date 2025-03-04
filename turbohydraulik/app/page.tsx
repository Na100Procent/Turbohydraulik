import { Box } from "@mui/material";
import IntroSection from "./components/sections/intro/IntroSection";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <IntroSection />
    </Box>
  );
}
