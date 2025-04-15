import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { Box } from "@mui/material";
import { sectionIds } from "@/app/constants/appConstants";
import MosaicWorkGrid from "./MosaicWorksGrid";
import { RecentWorksContent } from "@/app/data/types/sectionTypes";
import CallUsButton from "../../shared/CallUsButton";
import { sectionXPadding } from "@/app/constants/styles";
import SectionIdentifier from "../../shared/SectionIdentifier";
import { homepageDataContent } from "@/app/data/data";

interface Props {
  content?: RecentWorksContent;
  phoneNumber?: string;
}
const RecentWorks = ({ content, phoneNumber }: Props) => {
  const recentWorksContent = content ? content : homepageDataContent;
  const { portfolio_h2, portfolio_text } = recentWorksContent;

  return (
    <BackgroundWrapper bgColor={theme.palette.custom.yellowLight}>
      <SectionIdentifier sectionId={sectionIds.projects} />
      <Box>
        <SectionPaddingWrapper>
          <SectionCenterHeader
            header={portfolio_h2}
            bottomHeader={portfolio_text}
          />
        </SectionPaddingWrapper>
        <Box sx={{ padding: sectionXPadding }}>
          <MosaicWorkGrid />
        </Box>
        <Box mt="50px" width="100%" display="flex" justifyContent="center">
          <CallUsButton phoneNumber={phoneNumber} />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default RecentWorks;
