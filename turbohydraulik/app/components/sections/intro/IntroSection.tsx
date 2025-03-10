import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import HeaderBox from "./HeaderBox";
import { Box } from "@mui/material";
import { introBgUrl } from "@/app/constants/imagesUrls";
import HorizontalBanner from "./HorizontalBanner";
import CallUsButton from "../../shared/CallUsButton";
import { CityData, DistrictData, ServiceData } from "@/app/data/types";
import { websiteData } from "@/app/data/data";

interface Props {
  slug?: CityData | ServiceData | DistrictData;
  content?: string;
}

const containerSx = {
  padding: {
    xl: "120px 0 0 0",
    lg: "120px 0 0 0",
    md: "120px 0 0 0",
    sm: "150px 0 0 0",
    xs: "150px 0 0 0",
    xxs: "150px 0 0 0",
  },
};

const heroSx = {
  borderRadius: "15px",
  maxWidth: "400px",
  padding: "40px",
  minWidth: "300px",
  background: theme.palette.primary.main,
};
const contentSx = {
  padding: {
    xl: "50px 50px",
    lg: "50px 50px",
    md: "20px 20px",
    sm: "20px 20px",
    xs: "20px 10px",
    xxs: "10px 10px",
  },
};
const IntroSection = ({ slug, content }: Props) => {
  return (
    <BackgroundWrapper bgImage={introBgUrl} sx={containerSx}>
      <Box padding="50px 0 0 0">
        <Box sx={contentSx}>
          <Box sx={heroSx}>
            <HeaderBox
              slug={slug?.name}
              subHeaderContent={content ? content : websiteData.home.home}
            />
            <Box mt="30px">
              <CallUsButton />
            </Box>
          </Box>
        </Box>
        <HorizontalBanner />
      </Box>
    </BackgroundWrapper>
  );
};

export default IntroSection;
