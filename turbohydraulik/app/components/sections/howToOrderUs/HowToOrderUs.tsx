import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import HowToList from "./HowToList";
import { Box } from "@mui/material";

const HowToOrderUs = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <Box display="flex" flexDirection="column" gap="60px">
          <SectionCenterHeader
            header="How to order a Plumbing service?"
            bottomHeader="To order a plumbing service, contact us by phone or via the contact form on our website."
            headerColor={theme.palette.primary.main}
          />
          <HowToList />
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default HowToOrderUs;
