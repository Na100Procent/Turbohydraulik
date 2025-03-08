import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { Box } from "@mui/material";
import ScrollCityList from "./ScrollCityList";
import CallUsButton from "../../shared/CallUsButton";

const OurCities = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        padding={"50px 0px 50px 0"}
      >
        <SectionPaddingWrapper>
          <SectionCenterHeader
            topHeaderColor={theme.palette.secondary.main}
            topHeader="OUR LOCATIONS"
            header="Plumbing Services in Your City"
            headerColor={theme.palette.primary.main}
          />
        </SectionPaddingWrapper>
        <ScrollCityList />
        <div>
          <CallUsButton />
        </div>
      </Box>
    </BackgroundWrapper>
  );
};

export default OurCities;
