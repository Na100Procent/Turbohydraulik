import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import theme from "@/app/theme/theme";
import CompanyInNumbers from "./CompanyInNumbers";
import CallUsButton from "../../shared/CallUsButton";
import { Box } from "@mui/material";
import { InNumbersContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";

interface Props {
  bgColor?: string;
  content?: InNumbersContent;
}
const InNumbers = ({ bgColor, content }: Props) => {
  const inNumbersContent = content ? content : websiteData.homepageContent;
  const { aboutUsNumbers_h2, aboutUsNumbers_text } = inNumbersContent;
  return (
    <BackgroundWrapper
      bgColor={bgColor ? bgColor : theme.palette.custom.background}
    >
      <SectionPaddingWrapper>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <SectionCenterHeader
            header={aboutUsNumbers_h2}
            bottomHeader={aboutUsNumbers_text}
            topHeader="W LICZBACH"
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
