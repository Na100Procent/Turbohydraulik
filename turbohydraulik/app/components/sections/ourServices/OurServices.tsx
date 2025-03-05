import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import RectangularButton from "../../shared/RectangularButton";
import { Box } from "@mui/material";
import ServiceVerticalScrollList from "./ServicesHorizontalList";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import { YellowLeftOrnament } from "@/app/assets/icons/icons";

const OurServices = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.primary.main}>
      <>
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
              header="Our Plumbing Services"
            />
            <RectangularButton title="View All  Services" />
          </Box>
        </SectionPaddingWrapper>
        <Box position={"absolute"} top={"-130px"} right={"-10px"}>
          <YellowLeftOrnament />
        </Box>
        <ServiceVerticalScrollList />
      </>
    </BackgroundWrapper>
  );
};

export default OurServices;
