import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import { Box } from "@mui/material";
import CallUsButton from "../../shared/CallUsButton";
import { websiteData } from "@/app/data/data";
import { HeroContent } from "@/app/data/types/sectionTypes";
import ServiceHeaderBox from "./ServiceHeaderBox";
import {
  aboutUsUrl,
  serviceCardUrl,
  serviceHeroBg,
} from "@/app/constants/imagesUrls";
import MosaicElement from "../../shared/mosaic/MosaicElement";
import MosaicGrid from "../../shared/mosaic/MosaicGrid";

interface Props {
  content?: HeroContent;
  phoneNumber?: string;
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
  maxWidth: "800px",
  padding: "40px",

  background: theme.palette.primary.main,
};
const contentSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
    xxs: "column",
  },

  padding: {
    xl: "50px 50px",
    lg: "50px 50px",
    md: "50px 20px",
    sm: "20px 20px",
    xs: "20px 10px",
    xxs: "10px 10px",
  },
};

const addGridSx = {
  display: {
    xl: "grid",
    lg: "grid",
    md: "grid",
    sm: "grid",
    xs: "grid",
    xxs: "grid",
  },
};

const mosaicSx = {
  width: {
    xl: "60%",
    lg: "60%",
    md: "60%",
    sm: "100%",
    xs: "100%",
    xxs: "100%",
  },
};
const HeroService = ({ content, phoneNumber }: Props) => {
  const heroSectionData = content ? content : websiteData.homepageContent;
  const heroHeader = heroSectionData.hero_h1;
  const heroSubHeader = heroSectionData.hero_h2;
  const heroText = heroSectionData.hero_text;

  const serviceImages = [
    <MosaicElement
      key={0}
      bgImage={serviceHeroBg}
      alt="servis1 Turbohydraulik"
    />,
    <MosaicElement key={1} bgImage={aboutUsUrl} alt="servis2 Turbohydraulik" />,
    <MosaicElement
      key={2}
      bgImage={serviceCardUrl}
      alt="servis3 Turbohydraulik"
    />,
    <MosaicElement
      key={3}
      bgImage={serviceHeroBg}
      alt="servis4 Turbohydraulik"
    />,
  ];
  return (
    <BackgroundWrapper
      sx={containerSx}
      bgColor={theme.palette.custom.yellowLight}
    >
      <Box paddingBottom="50px">
        <Box sx={contentSx}>
          <Box sx={heroSx}>
            <ServiceHeaderBox
              header={heroHeader}
              subHeader={heroSubHeader}
              text={heroText}
            />

            <Box mt="50px" width={"100%"} display="flex" justifyContent="left">
              <CallUsButton phoneNumber={phoneNumber} />
            </Box>
          </Box>
          <Box sx={mosaicSx}>
            <MosaicGrid elements={serviceImages} addSx={addGridSx} />
          </Box>
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default HeroService;
