import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import HeaderBox from "./HeaderBox";
import { Box } from "@mui/material";
import HorizontalBanner from "./HorizontalBanner";
import CallUsButton from "../../shared/CallUsButton";
import { HeroContent } from "@/app/data/types/sectionTypes";
import { introBgUrl } from "@/app/constants/imagesUrls";
import { homepageDataContent } from "@/app/data/data";

interface Props {
  content?: HeroContent;
  phoneNumber?: string;
}

const containerSx = {
  padding: {
    xs: "50px 0 0 0",
    sm: "100px 0 0 0",
    md: "120px 0 0 0",
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
const IntroSection = ({ content, phoneNumber }: Props) => {
  const heroSectionData = content ? content : homepageDataContent;
  const { hero_h1, hero_h2, hero_text } = heroSectionData;

  return (
    <BackgroundWrapper bgImage={introBgUrl} sx={containerSx}>
      <Box pt="20px">
        <Box sx={contentSx}>
          <Box sx={heroSx}>
            <HeaderBox
              hero_h1={hero_h1}
              hero_h2={hero_h2}
              hero_text={hero_text}
            />
            <Box mt={3}>
              <CallUsButton phoneNumber={phoneNumber} />
            </Box>
          </Box>
        </Box>
        <HorizontalBanner />
      </Box>
    </BackgroundWrapper>
  );
};

export default IntroSection;
