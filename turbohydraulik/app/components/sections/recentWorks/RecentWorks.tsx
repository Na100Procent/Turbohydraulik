import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { Box } from "@mui/material";
import { sectionIds } from "@/app/constants/appConstants";
import MosaicWorkGrid from "./MosaicWorksGrid";
import RectangularButton from "../../shared/RectangularButton";
import { RecentWorksContent } from "@/app/data/types/sectionTypes";
import { websiteData } from "@/app/data/data";

interface Props {
  content?: RecentWorksContent;
}
const RecentWorks = ({ content }: Props) => {
  const recentWorksContent = content ? content : websiteData.homepageContent;
  const { portfolio_h2, portfolio_text } = recentWorksContent;

  return (
    <BackgroundWrapper bgColor={theme.palette.custom.yellowLight}>
      <Box id={sectionIds.projects}>
        <SectionPaddingWrapper>
          <SectionCenterHeader
            topHeader="NASZE OSTATNIE PRACE"
            header={portfolio_h2}
            bottomHeader={portfolio_text}
          />
        </SectionPaddingWrapper>
        <MosaicWorkGrid />
        <Box mt="50px" width="100%" display="flex" justifyContent="center">
          <RectangularButton
            title="VIEW ALL PROJECTS"
            bgColor={theme.palette.secondary.main}
          />
        </Box>
      </Box>
    </BackgroundWrapper>
  );
};

export default RecentWorks;
