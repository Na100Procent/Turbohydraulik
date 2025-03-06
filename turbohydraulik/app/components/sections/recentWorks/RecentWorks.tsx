import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import MosaicGrid from "./MosaicGrid";
import { YellowLeftOrnament } from "@/app/assets/icons/icons";
import { Box } from "@mui/material";
import { sectionIds } from "@/app/constants/appConstants";

const RecentWorks = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.yellowLight}>
      <Box id={sectionIds.projects}>
        <SectionPaddingWrapper>
          <SectionCenterHeader
            topHeaderColor={theme.palette.secondary.main}
            topHeader="OUR LATEST PROJECTS"
            header="Recently completed works"
            bottomHeader="See our latest projects and see how professionally we perform every plumbing service."
            headerColor={theme.palette.primary.main}
          />
        </SectionPaddingWrapper>
        <Box position={"absolute"} top={"-130px"} right={"-10px"}>
          <YellowLeftOrnament />
        </Box>

        <MosaicGrid />
      </Box>
    </BackgroundWrapper>
  );
};

export default RecentWorks;
