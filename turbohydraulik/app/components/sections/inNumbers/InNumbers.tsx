import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import theme from "@/app/theme/theme";
import CompanyInNumbers from "./CompanyInNumbers";
import CallUsButton from "../../shared/CallUsButton";
import { Box } from "@mui/material";
import { InNumbersContent } from "@/app/data/types/sectionTypes";
import { homepageDataContent } from "@/app/data/data";

interface Props {
  phoneNumber?: string;
  content?: InNumbersContent;
}
const InNumbers = ({ content, phoneNumber }: Props) => {
  const inNumbersContent = content ? content : homepageDataContent;
  const { aboutUsNumbers_h2, aboutUsNumbers_text } = inNumbersContent;
  return (
    <BackgroundWrapper bgColor={theme.palette.primary.main}>
      <SectionPaddingWrapper>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <SectionCenterHeader
            header={aboutUsNumbers_h2}
            headerColor={theme.palette.custom.background}
            bottomHeader={aboutUsNumbers_text}
            bottomHeaderColor={theme.palette.custom.background}
          />
          <CompanyInNumbers />
          <Box display="flex" justifyContent="center" mt="10px">
            <CallUsButton phoneNumber={phoneNumber} />
          </Box>
        </Box>
      </SectionPaddingWrapper>
    </BackgroundWrapper>
  );
};

export default InNumbers;
