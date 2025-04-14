import { Box } from "@mui/material";
import theme from "@/app/theme/theme";
import BackgroundWrapper from "@/app/components/shared/BackgroundWrapper";
import Footer from "@/app/components/sections/footer/Footer";
import ServiceForm from "../components/sections/footer/components/ServiceForm";
import { TopMenuLogo } from "@/public/assets/icons/icons";
import Link from "next/link";
import { homePagePath } from "../constants/appConstants";
import { sectionXPadding } from "../constants/styles";

const formContainer = {
  width: "100%",
  my: "200px",
  padding: sectionXPadding,
  display: "flex",
  justifyContent: "center",
};
const ReviewPage = () => {
  return (
    <Box
      sx={{ background: theme.palette.custom.background, minHeight: "100vh" }}
    >
      <BackgroundWrapper sx={{ padding: 0 }}>
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            zIndex: 100,
            top: 0,
            backgroundColor: theme.palette.custom.background,
          }}
        >
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <Link href={homePagePath} aria-label="strona home page">
              <TopMenuLogo />
            </Link>
          </Box>
        </Box>
        <Box sx={formContainer}>
          <ServiceForm
            includeBg
            actionButtonTitle="Wyślij opinię"
            customTitle="NAPISZ OPINIĘ O USŁUDZE"
          />
        </Box>
      </BackgroundWrapper>

      <Footer />
    </Box>
  );
};

export default ReviewPage;
