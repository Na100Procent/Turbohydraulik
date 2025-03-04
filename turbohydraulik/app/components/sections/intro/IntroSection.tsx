import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import RectangularButton from "../../shared/RectangularButton";
import PhoneIcon from "@mui/icons-material/Phone";
import theme from "@/app/theme/theme";
import HeaderBox from "./HeaderBox";
import { Box } from "@mui/material";
import { introBgUrl } from "@/app/assets/images/imagesUrls";
import HorizontalBanner from "./HorizontalBanner";

const heroSx = {
  borderRadius: "15px",
  maxWidth: "400px",
  padding: "40px",
  background: theme.palette.primary.main,
};
const content = {
  padding: {
    xl: "50px 50px",
    lg: "50px 50px",
    md: "20px 20px",
    sm: "20px 20px",
    xs: "20px 10px",
    xxs: "10px 10px",
  },
};
const IntroSection = () => {
  return (
    <BackgroundWrapper bgImage={introBgUrl} sx={{ padding: 0 }}>
      <>
        <Box sx={content}>
          <Box sx={heroSx}>
            <HeaderBox />
            <Box mt="30px">
              <RectangularButton
                title="Call: 501 420 212"
                icon={
                  <PhoneIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                      color: theme.palette.primary.main,
                    }}
                  />
                }
              />
            </Box>
          </Box>
        </Box>
        <HorizontalBanner />
      </>
    </BackgroundWrapper>
  );
};

export default IntroSection;
