import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import { Box } from "@mui/material";
import ServiceVerticalScrollList from "./ServicesHorizontalList";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import { YellowLeftOrnament } from "@/public/fonts/assets/icons/icons";
import CallUsButton from "../../shared/CallUsButton";
import RectangularButton from "../../shared/RectangularButton";
import { CityData } from "@/app/data/types";

interface Props {
  city?: CityData;
}

const OurServices = ({ city }: Props) => {
  return (
    <BackgroundWrapper bgColor={theme.palette.primary.main}>
      <Box display={"flex"} flexDirection={"column"} gap="0px">
        <SectionPaddingWrapper>
          <Box
            padding={sectionXPadding}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <SectionHeader
              subHeaderColor={theme.palette.secondary.main}
              headerColor={theme.palette.custom.background}
              subHeader="services we offer"
              header={`Our Plumbing Services ${city ? city.name : ""}`}
            />
            <RectangularButton title="View All  Services" />
          </Box>
        </SectionPaddingWrapper>
        <Box position={"absolute"} top={"-130px"} right={"-10px"}>
          <YellowLeftOrnament />
        </Box>
        <ServiceVerticalScrollList city={city ? city.name : ""} />
        <Box display={"flex"} justifyContent={"center"}>
          <CallUsButton />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default OurServices;
