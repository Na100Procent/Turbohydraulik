import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import HeaderBox from "./HeaderBox";
import { Box } from "@mui/material";
import { introBgUrl } from "@/app/constants/imagesUrls";
import HorizontalBanner from "./HorizontalBanner";
import CallUsButton from "../../shared/CallUsButton";
import { HeroContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";

interface Props {
  content?: HeroContent;
}

const containerSx = {
  padding: {
    xl: "120px 0 0 0",
    lg: "120px 0 0 0",
    md: "120px 0 0 0",
    sm: "100px 0 0 0",
    xs: "50px 0 0 0",
    xxs: "50px 0 0 0",
  },
};

const heroSx = {
  borderRadius: "15px",
  maxWidth: "500px",
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
const IntroSection = ({ content }: Props) => {
  const heroSectionData = content ? content : websiteData.homepageContent;
  const heroHeader = heroSectionData.hero_h1;
  const heroSubHeader = heroSectionData.hero_h2;
  const heroText = heroSectionData.hero_text;
  return (
    <BackgroundWrapper bgImage={introBgUrl} sx={containerSx}>
      <Box padding="50px 0 0 0">
        <Box sx={contentSx}>
          <Box sx={heroSx}>
            <HeaderBox
              header={heroHeader}
              subHeader={heroSubHeader}
              text={heroText}
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
