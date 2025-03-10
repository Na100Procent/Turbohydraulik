import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import theme from "@/app/theme/theme";
import CompanyInNumbers from "./CompanyInNumbers";
import CallUsButton from "../../shared/CallUsButton";
import { Box } from "@mui/material";

const InNumbers = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.background}>
      <SectionPaddingWrapper>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <SectionCenterHeader
            header="Turbo Plumber in numbers"
            bottomHeader="Hundreds of satisfied customers, dozens of successful projects and thousands of hours of work – Turbo Hydraulik in numbers!"
          />
          <CompanyInNumbers />
          <Box display="flex" justifyContent="center" mt="10px">
            <CallUsButton />
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default InNumbers;
