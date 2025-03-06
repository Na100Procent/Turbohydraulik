import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import HowToList from "./HowToList";
import { Box } from "@mui/material";
import CallUsButton from "../../shared/CallUsButton";

const HowToOrderUs = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <Box
          display="flex"
          flexDirection="column"
          gap="60px"
          padding="0 0 100px 0"
          sx={{ fontFamily: "UniteaSans" }}
        >
          <SectionCenterHeader
            header="How to order a Plumbing service?"
            bottomHeader="To order a plumbing service, contact us by phone or via the contact form on our website."
            headerColor={theme.palette.primary.main}
          />
          <HowToList />
          <Box display={"flex"} justifyContent={"center"} marginTop={"50px"}>
            <CallUsButton />
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default HowToOrderUs;
