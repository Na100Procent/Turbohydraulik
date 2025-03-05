import theme from "@/app/theme/theme";
import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import SectionPaddingWrapper from "../../shared/SectionWrapper";
import SectionCenterHeader from "../../shared/SectionCenterHeader";
import MosaicGrid from "./MosaicGrid";

const RecentWorks = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.custom.yellowLight}>
      <>
        <SectionPaddingWrapper>
          <SectionCenterHeader
            topHeaderColor={theme.palette.secondary.main}
            topHeader="OUR LATEST PROJECTS"
            header="Recently completed works"
            bottomHeader="See our latest projects and see how professionally we perform every plumbing service."
            headerColor={theme.palette.primary.main}
          />
        </SectionPaddingWrapper>
        <MosaicGrid />
      </>
    </BackgroundWrapper>
  );
};

export default RecentWorks;
