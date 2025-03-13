import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import { Box } from "@mui/material";
import CallUsButton from "../../shared/CallUsButton";
import {
  CityData,
  DistrictData,
  ServiceData,
} from "@/app/data/types/dataTypes";
import { websiteData } from "@/app/data/data";
import HeaderBox from "../intro/HeaderBox";
import {
  aboutUsUrl,
  serviceCardUrl,
  serviceHeroBg,
} from "@/app/constants/imagesUrls";
import MosaicGrid from "../../shared/mosaic/MosaicGrid";
import MosaicElement from "../../shared/mosaic/MosaicElement";

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
  maxWidth: "500px",
  padding: "40px",
  minWidth: "100%",

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
const HeroService = ({ slug, content }: Props) => {
  const serviceImages = [
    <MosaicElement key={0} bgImage={serviceHeroBg} />,
    <MosaicElement key={1} bgImage={aboutUsUrl} />,
    <MosaicElement key={2} bgImage={serviceCardUrl} />,
    <MosaicElement key={3} bgImage={serviceHeroBg} />,
  ];
  return (
    <BackgroundWrapper
      sx={containerSx}
      bgColor={theme.palette.custom.yellowLight}
    >
      <Box paddingBottom="50px">
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
        <MosaicGrid elements={serviceImages} />
      </Box>
    </BackgroundWrapper>
  );
};

export default HeroService;
