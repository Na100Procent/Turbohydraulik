import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import { Box } from "@mui/material";
import ServiceContainer from "./ServiceContainer";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import CallUsButton from "../../shared/CallUsButton";
import { CityData } from "@/app/data/types";
import SectionCenterHeader from "../../shared/SectionCenterHeader";

interface Props {
  city?: CityData;
}

const headerSx = {
  padding: sectionXPadding,
  display: "flex",
  alignItems: "center",
  gap: "20px",
  justifyContent: "center",
  flexDirection: {
    xl: "row",
    lg: "row",
    md: "row",
    sm: "row",
    xs: "column",
    xxs: "column",
  },
};

const OurServices = ({ city }: Props) => {
  return (
    <BackgroundWrapper bgColor={theme.palette.primary.main}>
      <Box display={"flex"} flexDirection={"column"} gap="0px">
        <SectionPaddingWrapper>
          <Box sx={headerSx}>
            <SectionCenterHeader
              topHeaderColor={theme.palette.secondary.main}
              headerColor={theme.palette.custom.background}
              topHeader="services we offer"
              header={`Our Plumbing Services ${city ? city.name : ""}`}
            />
          </Box>
        </SectionPaddingWrapper>
        {/* <Box position={"absolute"} top={"-130px"} right={"-10px"}>
          <AboutMeOrnament />
        </Box> */}
        <ServiceContainer city={city} />
        <Box display={"flex"} justifyContent={"center"} mt="20px">
          <CallUsButton />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default OurServices;
