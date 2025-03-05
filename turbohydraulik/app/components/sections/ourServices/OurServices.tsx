import React from "react";
import BackgroundWrapper from "../../shared/BackgroundWrapper";
import theme from "@/app/theme/theme";
import SectionHeader from "../../shared/SectionHeader";
import RectangularButton from "../../shared/RectangularButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box } from "@mui/material";
import ServiceVerticalScrollList from "./ServicesHorizontalList";
import { sectionXPadding } from "@/app/constants/styles";
import SectionPaddingWrapper from "../../shared/SectionWrapper";

const OurServices = () => {
  return (
    <BackgroundWrapper bgColor={theme.palette.primary.main}>
      <>
        <SectionPaddingWrapper>
          <Box
            padding={sectionXPadding}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <SectionHeader
              subHeaderColor={theme.palette.secondary.main}
              headerColor={theme.palette.custom.background}
              subHeader="services we offer"
              header="Our Plumbing Services"
            />
            <RectangularButton
              title="View All  Services"
              icon={
                <ArrowOutwardIcon
                  sx={{
                    width: "20px",
                    height: "20px",
                    color: theme.palette.primary.main,
                  }}
                />
              }
            />
          </Box>
        </SectionPaddingWrapper>
        <ServiceVerticalScrollList />
      </>
    </BackgroundWrapper>
  );
};

export default OurServices;
