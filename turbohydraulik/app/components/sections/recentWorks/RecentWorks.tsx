import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import { Box } from "@mui/material";
import { sectionIds } from "@/app/constants/appConstants";
import MosaicWorkGrid from "./MosaicWorksGrid";
import RectangularButton from "../../shared/RectangularButton";

const RecentWorks = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.yellowLight}>
      <Box id={sectionIds.projects}>
        <SectionPaddingWrapper>
          <SectionCenterHeader
            topHeader="OUR LATEST PROJECTS"
            header="Recently completed works"
            bottomHeader="See our latest projects and see how professionally we perform every plumbing service."
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
