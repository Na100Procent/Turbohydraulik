"use client";
import { Box, Typography } from "@mui/material";
import theme from "@/app/theme/theme";
import Link from "next/link";
import { TopMenuLogo } from "@/public/assets/icons/icons";

import { useRouter } from "next/navigation";
import BackgroundWrapper from "../components/shared/BackgroundWrapper";
import { homePagePath } from "../constants/appConstants";
import RectangularButton from "../components/shared/RectangularButton";
import Footer from "../components/sections/footer/Footer";

const contentSx = {
  position: "fixed",
  width: "100%",
  zIndex: 100,
  top: 0,
  backgroundColor: theme.palette.custom.background,
};

const logoButtonSx = {
  padding: "20px 20px 20px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
};
const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Box sx={{ background: theme.palette.custom.background }}>
      <BackgroundWrapper sx={{ padding: 0 }}>
        <Box sx={contentSx}>
          <Box sx={logoButtonSx}>
            <Link href={homePagePath}>
              <TopMenuLogo />
            </Link>
          </Box>
        </Box>
        <Box
          paddingY={"150px"}
          display={"flex"}
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h2" color="error" fontWeight="500">
            404
          </Typography>
          <Typography variant="h3" mt={2}>
            Strona nie została znaleziona.
          </Typography>
          <RectangularButton
            title="Powrót do strony głównej"
            onClick={() => router.push("/")}
            bgColor="primary"
          />
        </Box>
      </BackgroundWrapper>

      <Footer />
    </Box>
  );
};

export default NotFoundPage;
